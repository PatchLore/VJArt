import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Veronica Johnstone - Artist Portfolio",
  description: "Landscape & Still Life Painting. Original artwork in oils, acrylics, watercolour, pastel and charcoal. Inspired by the beauty of nature and created through plein air painting and studio work.",
  keywords: "landscape painting, still life, oil paintings, watercolour, pastel, charcoal, plein air, Veronica Johnstone, art portfolio",
  authors: [{ name: "Veronica Johnstone" }],
  creator: "Veronica Johnstone",
  publisher: "Veronica Johnstone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vjjart.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Veronica Johnstone - Artist Portfolio",
    description: "Landscape & Still Life Painting. Original artwork in oils, acrylics, watercolour, pastel and charcoal.",
    url: "https://vjjart.com",
    siteName: "Veronica Johnstone",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veronica Johnstone - Artist Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veronica Johnstone - Artist Portfolio",
    description: "Landscape & Still Life Painting. Original artwork in oils, acrylics, watercolour, pastel and charcoal.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}