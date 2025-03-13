import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Reading Units for Teachers',
  description: 'High-quality reading units designed specifically for teachers to enhance student learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header className="bg-white dark:bg-gray-900 shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
              <div className="flex w-full items-center justify-between border-b border-gray-200 dark:border-gray-700 py-6 lg:border-none">
                <div className="flex items-center">
                  <a href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    ReadingUnits
                  </a>
                  <div className="ml-10 hidden space-x-8 lg:block">
                    <a 
                      href="#featured-units" 
                      className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    >
                      Units
                    </a>
                    <a 
                      href="#benefits" 
                      className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    >
                      Benefits
                    </a>
                    <a 
                      href="#" 
                      className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    >
                      Pricing
                    </a>
                    <a 
                      href="#" 
                      className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    >
                      FAQs
                    </a>
                  </div>
                </div>
                <div className="ml-10 space-x-4">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700"
                  >
                    Sign in
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                <a 
                  href="#featured-units" 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  Units
                </a>
                <a 
                  href="#benefits" 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  Benefits
                </a>
                <a 
                  href="#" 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  Pricing
                </a>
                <a 
                  href="#" 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  FAQs
                </a>
              </div>
            </nav>
          </header>
          {children}
          <footer className="bg-white dark:bg-gray-900 mt-auto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                <div className="mt-8 md:mt-0 md:order-1">
                  <p className="text-center text-base text-gray-500 dark:text-gray-400">
                    &copy; 2023 ReadingUnits. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 