import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description: "A modern Next.js starter template with TypeScript, ESLint, and Tailwind CSS",
  keywords: ["next.js", "react", "typescript", "tailwind"],
  authors: [{ name: "Next.js Starter" }],
  creator: "Next.js Starter",
  metadataBase: new URL("https://nextjs-starter.example.com"),
  openGraph: {
    title: "Next.js Starter Template",
    description: "A modern Next.js starter template with TypeScript, ESLint, and Tailwind CSS",
    url: "https://nextjs-starter.example.com",
    siteName: "Next.js Starter",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nextjs-starter.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js Starter Template"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter Template",
    description: "A modern Next.js starter template with TypeScript, ESLint, and Tailwind CSS",
    creator: "@nextjs_starter",
    images: [
      {
        url: "https://nextjs-starter.example.com/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js Starter Template"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval';
            style-src 'self' 'unsafe-inline';
            img-src 'self' blob: data:;
            font-src 'self';
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
            block-all-mixed-content;
            upgrade-insecure-requests;
          "
        />
        {/* Additional security headers can be added via Next.js config */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}