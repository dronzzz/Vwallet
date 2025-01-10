

import localFont from "next/font/local";
import "./globals.css";




import "./globals.css";
import React from 'react';

import { Providers } from './providers';
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Providers>
      

      <body >
        {children}
      </body>
    </Providers>
    </html>
  );
}
