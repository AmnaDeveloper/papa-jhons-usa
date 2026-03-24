import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#D11124", // Papa John's Red
};

export const metadata: Metadata = {
  title: "Papa John's Pizza Menu with Prices 2026 | Complete USA Guide",
  description: "Explore the complete Papa John's menu with prices in the USA for 2026. Order your favorite pizza, sides, desserts & drinks for delivery and takeout.",
  keywords: "Papa Johns menu, Papa Johns prices, pizza delivery near me, Papa Johns coupons, pizza near me open now",
  authors: [{ name: "Papa John's Menu Experts" }],
  metadataBase: new URL('https://papajohns-menus.us'),
  alternates: {
      canonical: '/',
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Advanced Global Schema — SEO Blueprint Standard (USA)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://papajohns-menus.us/#organization",
        "name": "Papa John's Menu Guide",
        "url": "https://papajohns-menus.us",
        "logo": {
          "@type": "ImageObject",
          "url": "https://papajohns-menus.us/logo.png",
          "width": 600,
          "height": 600
        },
        "sameAs": [
          "https://www.facebook.com/papajohns",
          "https://twitter.com/papajohns",
          "https://www.instagram.com/papajohns"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://papajohns-menus.us/#website",
        "url": "https://papajohns-menus.us",
        "name": "Papa John's Menu with Prices",
        "publisher": { "@id": "https://papajohns-menus.us/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://papajohns-menus.us/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Restaurant",
        "@id": "https://papajohns-menus.us/#restaurant",
        "name": "Papa John's Pizza",
        "description": "Better Ingredients. Better Pizza.® Papa John's is famous for fresh-baked pizzas and delicious signature dipping sauces.",
        "image": "https://papajohns-menus.us/hero-background.jpeg",
        "url": "https://papajohns-menus.us",
        "telephone": "+1 877-547-PAPA",
        "servesCuisine": "Pizza, Italian-American",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Cane Run Road",
          "addressLocality": "Louisville",
          "addressRegion": "KY",
          "postalCode": "40223",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "38.2527",
          "longitude": "-85.7585"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "11:00",
            "closes": "00:00"
          }
        ],
        "menu": "https://papajohns-menus.us/menus-prices",
        "acceptsReservations": "False"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
