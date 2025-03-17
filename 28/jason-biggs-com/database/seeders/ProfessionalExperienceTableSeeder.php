<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Resume\ProfessionalExperience;

class ProfessionalExperienceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProfessionalExperience::create([
            'position' => 'Senior Full Stack Developer',
            'company' => 'TechLabs Inc.',
            'location' => 'San Francisco, CA',
            'start_date' => 'January 2019',
            'end_date' => 'Present',
            'description' => json_encode([
                'Led a team of 5 developers in building a SaaS platform for small businesses',
                'Developed microservices architecture using Node.js, Express, and MongoDB',
                'Created a responsive front-end using React, Redux, and Material UI',
                'Implemented CI/CD pipeline with GitHub Actions and AWS',
                'Managed sprint planning and code reviews with JIRA and GitHub'
            ]),
            'order' => 1
        ]);

        ProfessionalExperience::create([
            'position' => 'Web Developer',
            'company' => 'Digital Solutions',
            'location' => 'Boston, MA',
            'start_date' => 'April 2016',
            'end_date' => 'December 2018',
            'description' => json_encode([
                'Built and maintained 20+ client websites using WordPress, PHP, and JavaScript',
                'Developed custom plugins and themes to extend website functionality',
                'Optimized website performance and SEO, resulting in 40% increase in traffic',
                'Collaborated with designers to implement responsive, user-friendly interfaces',
                'Provided technical support and training to clients on content management'
            ]),
            'order' => 2
        ]);

        ProfessionalExperience::create([
            'position' => 'Frontend Developer',
            'company' => 'Innovative Apps',
            'location' => 'Chicago, IL',
            'start_date' => 'June 2014',
            'end_date' => 'March 2016',
            'description' => json_encode([
                'Developed interactive web applications using Angular.js and Bootstrap',
                'Implemented responsive design principles to ensure cross-device compatibility',
                'Collaborated with UX designers to create intuitive user interfaces',
                'Conducted code reviews and maintained coding standards',
                'Implemented continuous integration practices to improve development workflow'
            ]),
            'order' => 3
        ]);

        ProfessionalExperience::create([
            'position' => 'Web Design Intern',
            'company' => 'Creative Studios',
            'location' => 'New York, NY',
            'start_date' => 'January 2014',
            'end_date' => 'May 2014',
            'description' => json_encode([
                'Assisted in designing and developing websites for small businesses',
                'Created wireframes and mockups using Adobe XD and Photoshop',
                'Implemented designs using HTML, CSS, and jQuery',
                'Optimized images and assets for web performance',
                'Participated in client meetings and presentation of design concepts'
            ]),
            'order' => 4
        ]);
    }
}
