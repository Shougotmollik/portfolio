import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";

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
  ],
  authors: [{ name: "Shougot Mollik" }],
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="%23D9491F"/><text x="16" y="22" text-anchor="middle" fill="%23F3EBE4" font-size="18" font-family="system-ui" font-weight="700">S</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Shougot Mollik — Flutter Mobile Engineer",
    description:
      "Flutter Mobile Engineer building cross-platform applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
