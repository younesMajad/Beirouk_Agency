import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Beirouk Agency - Digital Marketing Solutions',
  description: 'Professional digital marketing and SEO agency helping small and medium businesses grow online',
  icons: {
    icon: '/placeholder-logo.svg',
    apple: '/placeholder-logo.png',
  },
}

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              className: '',
              style: {
                background: '#333',
                color: '#fff',

              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
