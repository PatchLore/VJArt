import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "VJ Art | Original Oil Paintings by Veronica Johnstone",
  description:
    "Original landscape oil paintings and still life works by Veronica Johnstone. Explore the collection of plein air paintings inspired by light, nature, and everyday moments.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "VJ Art | Original Oil Paintings by Veronica Johnstone",
    description:
      "Original landscape oil paintings and still life works by Veronica Johnstone. Explore the collection of plein air paintings inspired by light, nature, and everyday moments.",
    type: "website",
    siteName: "VJ Art",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VJ Art - Original Oil Paintings by Veronica Johnstone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VJ Art | Original Oil Paintings by Veronica Johnstone",
    description:
      "Original landscape oil paintings and still life works by Veronica Johnstone.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
