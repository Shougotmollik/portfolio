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
