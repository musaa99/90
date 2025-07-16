import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import dynamic from 'next/dynamic';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/shared/header';

const DynamicReduxProvider = dynamic(() => import('@/store/StoreProvider'));

const googleSans = localFont({
  src: [
    {
      path: '../fonts/ProductSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/ProductSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ProductSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ProductSans-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/ProductSans-Black.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-google-sans',
  preload: true,
});

const arial = localFont({
  src: '../fonts/Arial.woff',
  variable: '--font-arial',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ninty',
    default: 'Ninty',
  },
  description: 'Your companion',
  applicationName: 'Ninty Web',
  creator: 'Ninty Team',
  // metadataBase: new URL('https://base_url'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${googleSans.className} ${arial.variable} flex h-screen w-full flex-col bg-gradient-to-b from-[#edf5f5] to-[#edf5f5]`}
      >
        <DynamicReduxProvider>
          <div className="fixed top-0 left-0 z-50 w-full md:relative">
            <Header />
          </div>
          <main className="mt-16 h-screen flex-grow overflow-y-auto scroll-smooth">
            {children}
          </main>
          <Toaster position="top-center" closeButton richColors theme="light" />
        </DynamicReduxProvider>
      </body>
    </html>
  );
}
