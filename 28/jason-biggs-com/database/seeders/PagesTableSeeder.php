<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pages;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Home Page
        Pages::create([
            'page_id' => '003',
            'key' => 'slider_content',
            'value' => json_encode([
                [
                    'id' => 1,
                    'title' => 'Web Development',
                    'description' => 'Building modern, responsive websites with the latest technologies',
                    'image' => '/images/slides/web-development.jpg',
                    'alt' => 'Web Development Image'
                ],
                [
                    'id' => 2,
                    'title' => 'UI/UX Design',
                    'description' => 'Creating intuitive and beautiful user experiences',
                    'image' => '/images/slides/ui-ux-design.jpg',
                    'alt' => 'UI/UX Design Image'
                ],
                [
                    'id' => 3,
                    'title' => 'Full Stack Development',
                    'description' => 'End-to-end solutions for web and mobile applications',
                    'image' => '/images/slides/full-stack.jpg',
                    'alt' => 'Full Stack Development Image'
                ]
            ])
        ]);

        Pages::create([
            'page_id' => '003',
            'key' => 'text_content',
            'value' => '<h2>Welcome to Jason Biggs Development</h2>
                <p>Hi there! I\'m Jason Biggs, a full-stack web developer with a passion for creating beautiful, functional websites and applications. With over 10 years of experience in the industry, I\'ve worked on a wide range of projects from small business websites to complex web applications.</p>
                <p>My expertise includes frontend technologies like React, Vue, and Angular, as well as backend frameworks like Laravel, Express, and Django. I\'m also experienced with database design, API development, and deployment strategies.</p>
                <p>Take a look around to see some of my work, check out my resume, or get in touch to discuss your next project!</p>'
        ]);

        // Web Page
        Pages::create([
            'page_id' => '002',
            'key' => 'intro_content',
            'value' => '<p>I\'ve been building websites and web applications for over a decade. Here you\'ll find examples of my work, including both development samples and live production sites.</p><p>From responsive design to complex applications, I\'m passionate about creating beautiful, functional digital experiences that solve real problems.</p>'
        ]);

        Pages::create([
            'page_id' => '002',
            'key' => 'examples_development',
            'value' => json_encode([
                [
                    'id' => 1,
                    'title' => 'React Dashboard',
                    'url' => 'https://github.com/username/react-dashboard',
                    'description' => 'A responsive admin dashboard built with React and Tailwind CSS'
                ],
                [
                    'id' => 2,
                    'title' => 'E-commerce Platform',
                    'url' => 'https://github.com/username/ecommerce-platform',
                    'description' => 'Full-stack e-commerce solution with Laravel and Vue.js'
                ],
                [
                    'id' => 3,
                    'title' => 'API Gateway',
                    'url' => 'https://github.com/username/api-gateway',
                    'description' => 'Node.js API gateway with authentication and rate limiting'
                ]
            ])
        ]);

        Pages::create([
            'page_id' => '002',
            'key' => 'examples_sites',
            'value' => json_encode([
                [
                    'id' => 1,
                    'title' => 'Mountain Travel',
                    'url' => 'https://mountain-travel.example.com',
                    'description' => 'Travel agency website with booking system'
                ],
                [
                    'id' => 2,
                    'title' => 'Health Clinic',
                    'url' => 'https://health-clinic.example.com',
                    'description' => 'Medical practice website with appointment scheduling'
                ],
                [
                    'id' => 3,
                    'title' => 'Food Delivery',
                    'url' => 'https://food-delivery.example.com',
                    'description' => 'Restaurant marketplace with online ordering'
                ]
            ])
        ]);

        Pages::create([
            'page_id' => '002',
            'key' => 'gallery_content',
            'value' => json_encode([
                [
                    'id' => 1,
                    'title' => 'Mobile App UI',
                    'description' => 'UI/UX design for a fitness tracking mobile application',
                    'image' => '/images/gallery/mobile-app.jpg',
                    'alt' => 'Mobile App UI Design'
                ],
                [
                    'id' => 2,
                    'title' => 'E-commerce Website',
                    'description' => 'Online store for a boutique clothing brand',
                    'image' => '/images/gallery/ecommerce.jpg',
                    'alt' => 'E-commerce Website'
                ],
                [
                    'id' => 3,
                    'title' => 'Portfolio Website',
                    'description' => 'Photographer portfolio with image gallery',
                    'image' => '/images/gallery/portfolio.jpg',
                    'alt' => 'Portfolio Website'
                ],
                [
                    'id' => 4,
                    'title' => 'Dashboard Design',
                    'description' => 'Analytics dashboard for marketing professionals',
                    'image' => '/images/gallery/dashboard.jpg',
                    'alt' => 'Dashboard Design'
                ],
                [
                    'id' => 5,
                    'title' => 'Landing Page',
                    'description' => 'Product launch landing page with call-to-action',
                    'image' => '/images/gallery/landing-page.jpg',
                    'alt' => 'Landing Page'
                ],
                [
                    'id' => 6,
                    'title' => 'Blog Platform',
                    'description' => 'Content management system for bloggers',
                    'image' => '/images/gallery/blog.jpg',
                    'alt' => 'Blog Platform'
                ]
            ])
        ]);

        // Resume Page
        Pages::create([
            'page_id' => '001',
            'key' => 'intro_content',
            'value' => '<p>I\'m a passionate and experienced web developer with a focus on creating beautiful, functional, and user-friendly websites and applications. With expertise in both frontend and backend technologies, I bring a comprehensive approach to every project.</p><p>Throughout my career, I\'ve worked with a diverse range of clients from startups to established businesses, helping them achieve their digital goals through thoughtful design and robust development.</p>'
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'education_degree',
            'value' => json_encode([
                [
                    'id' => 1,
                    'degree' => 'Bachelor of Science',
                    'field' => 'Computer Science',
                    'university' => 'University of Technology',
                    'location' => 'San Francisco, CA',
                    'date' => '2010 - 2014'
                ],
                [
                    'id' => 2,
                    'degree' => 'Master of Science',
                    'field' => 'Web Technologies',
                    'university' => 'Digital Institute',
                    'location' => 'Boston, MA',
                    'date' => '2015 - 2016'
                ]
            ])
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'skills_languages',
            'value' => json_encode([
                'HTML5/CSS3', 'JavaScript/TypeScript', 'React', 'Vue.js', 'Angular',
                'PHP', 'Laravel', 'Node.js', 'Express', 'GraphQL',
                'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'
            ])
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'skills_software',
            'value' => json_encode([
                'VS Code', 'Git', 'Docker', 'Webpack', 'Adobe XD',
                'Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator',
                'JIRA', 'Trello', 'Slack'
            ])
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'skills_systems',
            'value' => json_encode([
                'Linux', 'macOS', 'Windows', 'AWS', 'Google Cloud Platform',
                'Netlify', 'Vercel', 'Heroku', 'CI/CD Pipelines', 'Microservices Architecture'
            ])
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'personal_hobbies',
            'value' => json_encode([
                'Photography', 'Hiking and Outdoor Activities', 'Travel',
                'Reading Tech Blogs', 'Open Source Contributing', 'Gaming'
            ])
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'personal_projects',
            'value' => json_encode([
                'think_bigg_development' => '<p>A web development studio focusing on creating modern, responsive websites for small businesses. I handle everything from design to deployment, providing end-to-end solutions that help businesses establish their online presence.</p>',
                'techregular' => '<p>A technology blog where I write about web development trends, tutorials, and best practices. The site features articles on everything from frontend frameworks to deployment strategies and serves as a resource for other developers.</p>',
                'think_bigg_consulting' => '<p>A technical consulting service that helps startups and established businesses optimize their web presence. Services include performance audits, accessibility improvements, and technical strategy planning.</p>'
            ])
        ]);

        Pages::create([
            'page_id' => '001',
            'key' => 'personal_speaking',
            'value' => json_encode([
                '2014' => [
                    'Introduction to Responsive Web Design - WebDev Conference',
                    'CSS Grid Revolution - Frontend Meetup'
                ],
                '2015' => [
                    'JavaScript Frameworks Comparison - JS Conference',
                    'Building Better APIs - DevOps Summit',
                    'Modern Authentication Techniques - Security Panel'
                ],
                '2016' => [
                    'Future of Web Development - TechTalk Series',
                    'Performance Optimization Strategies - Speed Matters Conference'
                ]
            ])
        ]);
    }
}
