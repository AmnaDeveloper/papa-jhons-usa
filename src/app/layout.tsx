import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AutoDateUpdater from "../components/AutoDateUpdater";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

// const papaSans = localFont({
//   src: "../../public/fonts/PapaSans-Heavy.woff2",
//   variable: "--font-papa-sans",
//   display: "swap",
//   weight: "900",
// });
const papaSans = { variable: "" }; // Fallback to avoid breaking variable usage

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
    apple: "/apple-touch-icon.webp",
  },
  verification: {
    google: "BA_YyQGxZ_qvZBAEzi1HZl1jEGLKpUMuucXxvFAc4jM",
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
        "brand": {
          "@type": "Brand",
          "name": "Papa John's"
        },
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
          "latitude": 38.2527,
          "longitude": -85.7585
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
        <meta name="google-adsense-account" content="ca-pub-7176456641838512" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7176456641838512"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R9S73NBFKL"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R9S73NBFKL');
            `,
          }}
        />
        {/* ── LCP CRITICAL: Preload hero image with highest priority ── */}
        <link
          rel="preload"
          as="image"
          href="/hero-background.webp"
          fetchPriority="high"
        />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://adservice.google.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://adservice.google.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <AutoDateUpdater />
        {children}
      </body>
    </html>
  );
}
