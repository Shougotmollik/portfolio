import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Shougot Mollik — Flutter Mobile Engineer",
  description:
    "Portfolio of Shougot Mollik. Flutter Mobile Engineer building cross-platform applications with clean architecture and thoughtful design.",
  keywords: [
    "Flutter",
    "Mobile Developer",
    "Dart",
    "Portfolio",
    "Software Engineer",
    "Cross-platform",
  ],
  authors: [{ name: "Shougot Mollik" }],
  creator: "Shougot Mollik",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="%23ffd866" stroke="%23000000" stroke-width="2"/><text x="16" y="22" text-anchor="middle" fill="%23000000" font-size="18" font-family="system-ui" font-weight="900">S</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Shougot Mollik — Flutter Mobile Engineer",
    description:
      "Flutter Mobile Engineer building cross-platform applications.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shougot Mollik",
  url: "https://shougot.dev",
  jobTitle: "Flutter Mobile Engineer",
  knowsAbout: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
  description:
    "Flutter Mobile Engineer building cross-platform applications with clean architecture and thoughtful design.",
};

import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
