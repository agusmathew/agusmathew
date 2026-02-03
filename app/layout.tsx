import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import "./globals.css";

const siteUrl = "https://agusmathewdev.vercel.app";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agus Mathew — Senior Full Stack Engineer",
    template: "%s · Agus Mathew",
  },
  description:
    "Senior Full Stack Engineer specializing in scalable platforms, serverless systems, and product-focused engineering.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Agus Mathew — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer specializing in scalable platforms, serverless systems, and product-focused engineering.",
    url: siteUrl,
    siteName: "Agus Mathew",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Agus Mathew — Senior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agus Mathew — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer specializing in scalable platforms, serverless systems, and product-focused engineering.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agus Mathew",
    url: siteUrl,
    jobTitle: "Senior Full Stack Engineer",
    sameAs: [
      "https://www.linkedin.com/in/agus-mathew",
      "https://github.com/agusmathew",
      "https://stackoverflow.com/users/9814608/agus-mathew",
      "https://www.hackerrank.com/profile/agus-mathew",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agus Mathew",
    url: siteUrl,
    description:
      "Senior Full Stack Engineer specializing in scalable platforms, serverless systems, and product-focused engineering.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${sora.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
