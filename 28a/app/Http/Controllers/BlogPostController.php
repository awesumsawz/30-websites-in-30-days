<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\GithubFlavoredMarkdownExtension;
use League\CommonMark\MarkdownConverter;
use Symfony\Component\Yaml\Yaml;

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
        // Configure the Environment with all the CommonMark and GFM parsers/renderers
        $environment = new Environment();
        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new GithubFlavoredMarkdownExtension());
        
        $converter = new MarkdownConverter($environment);
        
        return $converter->convert($markdown)->getContent();
    }
    
    /**
     * Generate a title from a slug.
     */
    protected function generateTitleFromSlug($slug)
    {
        return ucfirst(str_replace('-', ' ', $slug));
    }
} 