'use client'

import React from 'react'
import { BookOpenIcon, AcademicCapIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const features: Feature[] = [
  {
    name: 'Comprehensive Units',
    description: 'Complete reading units with detailed lesson plans, activities, and assessments.',
    icon: BookOpenIcon,
  },
  {
    name: 'Standards-Aligned',
    description: 'All units are aligned with educational standards and best practices.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Differentiated Learning',
    description: 'Materials designed to support diverse learning needs and abilities.',
    icon: UserGroupIcon,
  },
  {
    name: 'Engaging Content',
    description: 'Interactive and engaging materials that make learning fun and effective.',
    icon: SparklesIcon,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Transform Your Reading Instruction
            </h1>
            <p 
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              High-quality reading units designed specifically for teachers to enhance student learning and engagement.
            </p>
            <div 
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a href="#featured-units" className="btn-primary">
                Browse Units
              </a>
              <a href="#benefits" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Units */}
      <section id="featured-units" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Reading Units
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular and effective reading units
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((unit) => (
              <div
                key={unit}
                className="card"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                  <div className="h-48 w-full animate-pulse bg-gray-300 dark:bg-gray-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                  Reading Unit {unit}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  A comprehensive unit designed to improve reading comprehension and critical thinking skills.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                    View details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Our Reading Units?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to create an engaging and effective reading program
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.name}
                  className="card"
                >
                  <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-primary-700 dark:bg-primary-800 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to enhance your</span>
                  <span className="block">reading instruction?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  Get access to our complete library of teaching resources designed to engage students and improve reading comprehension.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-700 shadow hover:bg-gray-100"
                >
                  Get started today
                </a>
              </div>
            </div>
            <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <div className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-12 lg:translate-y-12 bg-gray-100 dark:bg-gray-700 h-full"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 