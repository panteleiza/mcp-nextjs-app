'use client';

import React from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Next.js App</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link 
                href="/" 
                className="flex items-center text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="flex items-center text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="w-full border-t bg-gray-100 py-6 dark:bg-gray-950 dark:border-gray-800">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left dark:text-gray-400">
            &copy; {new Date().getFullYear()} Next.js App. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}