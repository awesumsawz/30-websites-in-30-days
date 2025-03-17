import React from 'react';
import { Head } from '@inertiajs/react';
import { MainLayout } from '@/layouts/MainLayout';

interface Education {
  id: number;
  degree: string;
  field: string;
  university: string;
  location: string;
  date: string;
}

interface ProfessionalExperience {
  id: number;
  position: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string[];
}

interface Projects {
  think_bigg_development: string;
  techregular: string;
  think_bigg_consulting: string;
}

interface Speaking {
  '2014': string[];
  '2015': string[];
  '2016': string[];
}

interface ResumePageProps {
  intro: string;
  education: Education[];
  skillsLanguages: string[];
  skillsSoftware: string[];
  skillsSystems: string[];
  professionalExperience: ProfessionalExperience[];
  personalHobbies: string[];
  personalProjects: Projects;
  personalSpeaking: Speaking;
}

export default function ResumePage({
  intro,
  education,
  skillsLanguages,
  skillsSoftware,
  skillsSystems,
  professionalExperience,
  personalHobbies,
  personalProjects,
  personalSpeaking
}: ResumePageProps) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <MainLayout className="resume-page">
      <Head title="Resume" />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Intro Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Resume</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Last Updated {currentMonth} {currentYear}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <a 
                href="/files/JasonBiggs_Resume__WebDeveloper.pdf" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                download
              >
                Download a copy
              </a>
            </div>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none" 
              dangerouslySetInnerHTML={{ __html: intro }}
            />
          </div>
        </section>
        
        <hr className="border-gray-200 dark:border-gray-700 my-12" />
        
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          
          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.degree} in {item.field}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{item.university}, {item.location}</p>
                <p className="text-gray-500 dark:text-gray-500 mt-1 text-sm">{item.date}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages & Frameworks</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {skillsLanguages.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Software</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {skillsSoftware.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Systems</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {skillsSystems.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Professional Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            {professionalExperience.map((experience) => (
              <div key={experience.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.position}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{experience.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{experience.location}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                  {experience.start_date} - {experience.end_date || 'Present'}
                </p>
                
                <ul className="mt-4 space-y-2 list-disc list-outside ml-5 text-gray-700 dark:text-gray-300">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Personal Experience Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Personal Experience</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hobbies & Interests</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {personalHobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Projects</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Think Bigg Development</h4>
                  <div 
                    className="text-gray-700 dark:text-gray-300" 
                    dangerouslySetInnerHTML={{ __html: personalProjects.think_bigg_development }}
                  />
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">TechRegular</h4>
                  <div 
                    className="text-gray-700 dark:text-gray-300" 
                    dangerouslySetInnerHTML={{ __html: personalProjects.techregular }}
                  />
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 opacity-70">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Think Bigg Consulting</h4>
                  <div 
                    className="text-gray-700 dark:text-gray-300" 
                    dangerouslySetInnerHTML={{ __html: personalProjects.think_bigg_consulting }}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Speaking Engagements</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2014</h4>
                  <ul className="space-y-3">
                    {personalSpeaking['2014'].map((event, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        <h5 className="font-medium">{event}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2015</h4>
                  <ul className="space-y-3">
                    {personalSpeaking['2015'].map((event, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        <h5 className="font-medium">{event}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2016</h4>
                  <ul className="space-y-3">
                    {personalSpeaking['2016'].map((event, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        <h5 className="font-medium">{event}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 