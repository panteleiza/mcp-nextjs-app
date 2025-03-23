'use client';

import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/Button';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  // Define the JSON-LD data for the page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Next.js Starter Template',
    url: 'https://nextjs-starter.example.com',
    description: 'A modern starter template with TypeScript, Tailwind CSS, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://nextjs-starter.example.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <MainLayout>
      {/* Add JSON-LD to the page */}
      <ClientOnly>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </ClientOnly>
      <div className="container py-12 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 items-center text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Next.js Starter Template
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            A modern starter template with TypeScript, Tailwind CSS, and more.
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-3">TypeScript</h3>
            <p className="text-slate-600">
              Strongly typed JavaScript for better developer experience and fewer bugs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-3">Tailwind CSS</h3>
            <p className="text-slate-600">
              Utility-first CSS framework for rapid UI development.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-3">Components</h3>
            <p className="text-slate-600">
              Reusable UI components built with best practices.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}