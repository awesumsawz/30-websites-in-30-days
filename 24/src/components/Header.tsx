'use client'

import React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-gray-200 dark:border-gray-700 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                ReadingUnits
              </span>
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link 
                href="#featured-units" 
                className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                Units
              </Link>
              <Link 
                href="#benefits" 
                className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                Benefits
              </Link>
              <Link 
                href="#" 
                className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                FAQs
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="#"
              className="inline-block rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700"
            >
              Sign in
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          <Link 
            href="#featured-units" 
            className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            Units
          </Link>
          <Link 
            href="#benefits" 
            className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            Benefits
          </Link>
          <Link 
            href="#" 
            className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            Pricing
          </Link>
          <Link 
            href="#" 
            className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            FAQs
          </Link>
        </div>
      </nav>
    </header>
  )
} 