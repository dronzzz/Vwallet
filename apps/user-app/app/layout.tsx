"use client"
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Providers } from './providers';

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
