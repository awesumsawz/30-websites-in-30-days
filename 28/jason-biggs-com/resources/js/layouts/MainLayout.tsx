import React, { ReactNode, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className = '' }: MainLayoutProps) {
  // Initialize dark mode toggle functionality
  useEffect(() => {
    const handleDarkModeToggle = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', 'false');
      }
    };

    // Set initial state based on localStorage or system preference
    const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
    const savedMode = localStorage.getItem('dark-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedMode ? savedMode === 'true' : prefersDark;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      darkModeToggles.forEach((toggle) => {
        (toggle as HTMLInputElement).checked = true;
      });
    }

    // Add event listeners
    darkModeToggles.forEach(toggle => {
      toggle.addEventListener('change', handleDarkModeToggle);
    });

    // Cleanup event listeners
    return () => {
      darkModeToggles.forEach(toggle => {
        toggle.removeEventListener('change', handleDarkModeToggle);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 