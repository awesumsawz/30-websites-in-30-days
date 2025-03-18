<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\GithubFlavoredMarkdownExtension;
use League\CommonMark\MarkdownConverter;
use Symfony\Component\Yaml\Yaml;
use App\Extensions\ImageDimensionsExtension;

class BlogPostController extends Controller
{
    protected $postsDirectory;
    
    public function __construct()
    {
        $this->postsDirectory = $this->getPostsDirectory();
    }
    
    /**
     * Get the directory where blog posts are stored.
     * This method allows for easier testing by overriding in tests.
     */
    public function getPostsDirectory()
    {
        return base_path('content/blog');
    }
    
    /**
     * Display a listing of blog posts.
     */
    public function index()
    {
        $posts = $this->getAllPosts();
        
        return view('blog.index', compact('posts'));
    }
    
    /**
     * Display a specific blog post.
     */
    public function show($slug)
    {
        // Find the post file matching the slug
        $files = File::files($this->postsDirectory);
        $postPath = null;
        
        foreach ($files as $file) {
            if (str_contains($file->getFilename(), $slug)) {
                $postPath = $file->getPathname();
                break;
            }
        }
        
        if (!$postPath) {
            abort(404);
        }
        
        $post = $this->parsePost($postPath);
        
        return view('blog.show', compact('post'));
    }
    
    /**
     * Get all blog posts sorted by date (newest first).
     */
    protected function getAllPosts()
    {
        $files = File::files($this->postsDirectory);
        $posts = [];
        
        foreach ($files as $file) {
            $posts[] = $this->parsePost($file->getPathname());
        }
        
        // Sort posts by date (newest first)
        usort($posts, function($a, $b) {
            return strtotime($b['metadata']['date']) - strtotime($a['metadata']['date']);
        });
        
        return $posts;
    }
    
    /**
     * Parse a markdown post file into metadata and content.
     */
    protected function parsePost($path)
    {
        $content = File::get($path);
        $filename = basename($path);
        
        // Extract the slug from the filename (remove date and extension)
        $slug = preg_replace('/^\d{4}-\d{2}-\d{2}-(.*)\.md$/', '$1', $filename);
        
        // Parse front matter and content
        if (preg_match('/^---\s*(.*?)\s*---\s*(.*)/s', $content, $matches)) {
            $frontMatter = $matches[1];
            $markdownContent = $matches[2];
            
            // Parse YAML front matter
            $metadata = Yaml::parse($frontMatter);
        } else {
            // No front matter found
            $metadata = [
                'title' => $this->generateTitleFromSlug($slug),
                'date' => date('Y-m-d', filemtime($path)),
            ];
            $markdownContent = $content;
        }
        
        // Convert markdown to HTML
        $html = $this->markdownToHtml($markdownContent);
        
        return [
            'slug' => $slug,
            'metadata' => $metadata,
            'content' => $html,
            'excerpt' => $metadata['excerpt'] ?? substr(strip_tags($html), 0, 200) . '...',
        ];
    }
    
    /**
     * Convert markdown content to HTML.
     */
    protected function markdownToHtml($markdown)
    {
        // Pre-process markdown to handle image dimensions
        $markdown = $this->preprocessImageDimensions($markdown);
        
        // Configure the Environment with all the CommonMark and GFM parsers/renderers
        $environment = new Environment();
        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new GithubFlavoredMarkdownExtension());
        $environment->addExtension(new ImageDimensionsExtension());
        
        $converter = new MarkdownConverter($environment);
        
        $html = $converter->convert($markdown)->getContent();
        
        return $html;
    }
    
    /**
     * Pre-process markdown to convert image dimensions to HTML img tags
     */
    protected function preprocessImageDimensions($markdown)
    {
        // Create a multi-pass processor to handle all variations
        
        // Step 1: First normalize all dimension syntax (no space after URL, etc)
        $processed = preg_replace(
            '/!\[(.*?)\]\(([^()]+?)(?:=|\s+=)(\d*)x(\d*)\)/',
            '![\\1](\\2 =\\3x\\4)',
            $markdown
        );
        
        // Step 2: Handle spacing between image and attributes
        $processed = preg_replace(
            '/\)\s+{/',
            '){',
            $processed
        );
        
        // Step 3: Process each image with the clean syntax
        $processed = preg_replace_callback(
            '/!\[(.*?)\]\(([^()]+?)(?:\s+=(\d*)x(\d*))?\)(?:{([^}]+)})?/',
            function($matches) {
                $alt = $matches[1];
                $src = trim($matches[2]);
                $attributes = [];
                
                // Log all matches for debugging
                file_put_contents(
                    storage_path('logs/image_debug.log'),
                    "MATCHES: " . json_encode($matches) . PHP_EOL,
                    FILE_APPEND
                );
                
                // Handle width and height dimensions
                if (!empty($matches[3]) || !empty($matches[4])) {
                    // Initialize style if not set
                    if (!isset($attributes['style'])) {
                        $attributes['style'] = '';
                    }
                    
                    // Add width to style if specified
                    if (!empty($matches[3])) {
                        $attributes['style'] .= 'width: ' . $matches[3] . 'px; ';
                    }
                    
                    // Add height to style if specified
                    if (!empty($matches[4])) {
                        $attributes['style'] .= 'height: ' . $matches[4] . 'px; ';
                    }
                }
                
                // Handle additional attributes
                if (!empty($matches[5])) {
                    $attrText = $matches[5];
                    
                    // Log attribute text
                    file_put_contents(
                        storage_path('logs/image_debug.log'),
                        "ATTR TEXT: " . $attrText . PHP_EOL,
                        FILE_APPEND
                    );
                    
                    // Handle cover attribute
                    if (strpos($attrText, 'cover') !== false) {
                        $attributes['class'] = isset($attributes['class']) ? 
                            $attributes['class'] . ' img-cover' : 'img-cover';
                        $attributes['style'] = isset($attributes['style']) ? 
                            $attributes['style'] . 'object-fit: cover; ' : 'object-fit: cover; ';
                    }
                    
                    // Improved position attribute handling
                    if (preg_match('/position=([^,}]+),([^}]+)/', $attrText, $posMatch)) {
                        // Handle two-value position (X,Y) - Legacy format, convert to space-separated
                        $positionX = trim($posMatch[1]);
                        $positionY = trim($posMatch[2]);
                        $position = $positionX . ' ' . $positionY;
                        $attributes['style'] = isset($attributes['style']) ? 
                            $attributes['style'] . 'object-position: ' . $position . '; ' : 
                            'object-position: ' . $position . '; ';
                    } elseif (preg_match('/position=([^}]+)/', $attrText, $posMatch)) {
                        // Handle position value (already space-separated or single value)
                        $position = trim($posMatch[1]);
                        // No need to convert - CSS already uses space-separated values
                        $attributes['style'] = isset($attributes['style']) ? 
                            $attributes['style'] . 'object-position: ' . $position . '; ' : 
                            'object-position: ' . $position . '; ';
                    }
                }
                
                // Build HTML attributes string
                $attrString = '';
                foreach ($attributes as $key => $value) {
                    $attrString .= ' ' . $key . '="' . $value . '"';
                }
                
                $result = '<img src="' . $src . '" alt="' . $alt . '"' . $attrString . '>';
                
                // Log the final result
                file_put_contents(
                    storage_path('logs/image_debug.log'),
                    "RESULT: " . $result . PHP_EOL . PHP_EOL,
                    FILE_APPEND
                );
                
                return $result;
            },
            $processed
        );
        
        return $processed;
    }
    
    /**
     * Generate a title from a slug.
     */
    protected function generateTitleFromSlug($slug)
    {
        return ucfirst(str_replace('-', ' ', $slug));
    }
    
    /**
     * Debug method to show raw HTML of a post
     */
    public function debug($slug)
    {
        // Find the post file matching the slug
        $files = File::files($this->postsDirectory);
        $postPath = null;
        
        foreach ($files as $file) {
            if (str_contains($file->getFilename(), $slug)) {
                $postPath = $file->getPathname();
                break;
            }
        }
        
        if (!$postPath) {
            abort(404);
        }
        
        $post = $this->parsePost($postPath);
        
        return '<pre>' . htmlspecialchars($post['content']) . '</pre>';
    }
    
    /**
     * View the debug log
     */
    public function viewDebugLog()
    {
        $logPath = storage_path('logs/image_debug.log');
        
        if (file_exists($logPath)) {
            $content = file_get_contents($logPath);
            return '<pre>' . htmlspecialchars($content) . '</pre>';
        }
        
        return 'No debug log found.';
    }
    
    /**
     * Debug view that extracts and displays only image style attributes
     */
    public function debugImageStyles($slug)
    {
        // Find the post file matching the slug
        $files = File::files($this->postsDirectory);
        $postPath = null;
        
        foreach ($files as $file) {
            if (str_contains($file->getFilename(), $slug)) {
                $postPath = $file->getPathname();
                break;
            }
        }
        
        if (!$postPath) {
            abort(404);
        }
        
        $post = $this->parsePost($postPath);
        $html = $post['content'];
        
        // Extract all image tags and their style attributes
        $matches = [];
        preg_match_all('/<img [^>]*style="([^"]*)"[^>]*>/', $html, $matches, PREG_SET_ORDER);
        
        $output = "<h1>Image Style Attributes for: {$post['metadata']['title']}</h1>\n\n";
        $output .= "<table border='1' cellpadding='5'>\n";
        $output .= "<tr><th>Image</th><th>Style Attribute</th></tr>\n";
        
        foreach ($matches as $i => $match) {
            $img = $match[0];
            $style = $match[1];
            
            // Extract src and alt for easier identification
            preg_match('/src="([^"]*)"/', $img, $srcMatch);
            preg_match('/alt="([^"]*)"/', $img, $altMatch);
            
            $src = isset($srcMatch[1]) ? $srcMatch[1] : 'unknown';
            $alt = isset($altMatch[1]) ? $altMatch[1] : 'unnamed';
            
            $output .= "<tr>\n";
            $output .= "  <td>Image #{$i} - {$alt}<br><code>" . htmlspecialchars($src) . "</code></td>\n";
            $output .= "  <td><code>" . htmlspecialchars($style) . "</code></td>\n";
            $output .= "</tr>\n";
        }
        
        $output .= "</table>";
        
        return $output;
    }
} 