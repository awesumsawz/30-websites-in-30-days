import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'WordPress Headless with Next.js' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              WordPress + Next.js
            </a>
            <div className="space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; {new Date().getFullYear()} WordPress Headless Demo</p>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 