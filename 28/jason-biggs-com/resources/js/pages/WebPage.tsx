import React from 'react';
import { Head } from '@inertiajs/react';
import { MainLayout } from '@/layouts/MainLayout';

interface Link {
  id: number;
  title: string;
  url: string;
  description?: string;
}

interface GalleryCard {
  id: number;
  title: string;
  description: string;
  image: string;
  alt?: string;
}

interface WebPageProps {
  intro: string;
  developmentExamples: Link[];
  productionSites: Link[]; 
  galleryCards: GalleryCard[];
}

export default function WebPage({ intro, developmentExamples, productionSites, galleryCards }: WebPageProps) {
  return (
    <MainLayout className="web-page">
      <Head title="Web" />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Web Wizard</h1>
          <div 
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert" 
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        </section>
        
        {/* Examples Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Development Examples</h2>
            <div className="space-y-4">
              {developmentExamples.map(example => (
                <div key={example.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <a 
                    href={example.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
                  >
                    {example.title}
                  </a>
                  {example.description && (
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{example.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Websites in Production</h2>
            <div className="space-y-4">
              {productionSites.map(site => (
                <div key={site.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
                  >
                    {site.title}
                  </a>
                  {site.description && (
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{site.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="gallery-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCards.map(card => (
              <div key={card.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative pt-[60%]">
                  <img 
                    src={card.image} 
                    alt={card.alt || card.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 