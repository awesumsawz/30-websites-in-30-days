import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Icon } from '@iconify/react';

export function Header() {
  const page = usePage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if the current page is active
  const isPageActive = (path: string) => {
    return page.url === path;
  };

  return (
    <>
      <header id="main-menu" className="bg-white dark:bg-gray-900 shadow-md py-3 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Dark mode toggle - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="form-check form-switch">
              <input 
                className="dark-mode-toggle sr-only" 
                type="checkbox" 
                id="dark-mode-toggle-desktop"
              />
              <label 
                className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" 
                htmlFor="dark-mode-toggle-desktop"
              >
                <Icon icon="material-symbols-light:dark-mode-outline" width="24" height="24" className="text-gray-700 dark:text-gray-300" />
              </label>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <div className="hidden md:block">
                <img className="h-10" src="/images/logos/green-logowordmark-flat.png" alt="Logo" />
              </div>
              <div className="hidden sm:block md:hidden">
                <img className="h-10" src="/images/logos/green-logowordmark-flat.png" alt="Logo" />
              </div>
              <div className="block sm:hidden">
                <img className="h-10" src="/images/logos/green-logo.png" alt="Logo" />
              </div>
            </Link>
          </div>

          {/* Primary Navigation - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/" 
                  className={`font-medium ${isPageActive('/') 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/web" 
                  className={`font-medium ${isPageActive('/web') 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  Web
                </Link>
              </li>
              <li>
                <Link 
                  href="/resume" 
                  className={`font-medium ${isPageActive('/resume') 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-700 dark:text-gray-300"
            >
              <Icon icon="ic:round-menu" width="28" height="28" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 h-full w-4/5 max-w-sm flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="form-check form-switch">
                <input 
                  className="dark-mode-toggle sr-only" 
                  type="checkbox" 
                  id="dark-mode-toggle-mobile"
                />
                <label 
                  className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" 
                  htmlFor="dark-mode-toggle-mobile"
                >
                  <Icon icon="material-symbols-light:dark-mode-outline" width="24" height="24" className="text-gray-700 dark:text-gray-300" />
                </label>
              </div>
              <button onClick={toggleMobileMenu}>
                <Icon icon="ic:round-close" width="28" height="28" className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="py-6 px-4 flex-1">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className={`block py-2 px-3 rounded text-lg font-medium ${isPageActive('/') 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/web" 
                    className={`block py-2 px-3 rounded text-lg font-medium ${isPageActive('/web') 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                    onClick={toggleMobileMenu}
                  >
                    Web
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resume" 
                    className={`block py-2 px-3 rounded text-lg font-medium ${isPageActive('/resume') 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                    onClick={toggleMobileMenu}
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <Link href="/" className="block mx-auto w-48">
                <img src="/images/logos/green-logowordmark-stacked.png" alt="Logo" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 