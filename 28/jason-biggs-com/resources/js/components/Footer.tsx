import React from 'react';
import { Link } from '@inertiajs/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <img 
                src="/images/logos/green-logowordmark-flat.png" 
                alt="Jason Biggs Logo" 
                className="h-8"
              />
            </Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Jason Biggs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 