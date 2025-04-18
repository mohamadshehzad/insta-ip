import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

// Optimized font loading with swap
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Core Metadata
export const metadata = {
  metadataBase: new URL("https://www.insta-ip.com"),
  title: {
    default: "IP Checker: Instant IP Address Lookup with Location & Browser Details | Insta-IP",
    template: "%s | Insta-IP"
  },
  description: "Instantly check your IP address, city, country, browser, and screen details. Free, accurate IP lookup tool trusted by 15,000+ users. No registration required.",
  keywords: ["IP checker", "what is my IP", "free IP lookup", "IP location finder", "browser details checker", "Instagram IP alternative", "screen resolution checker", "timezone from IP"],
  authors: [{ name: "Insta-IP Team" }],
  robots: { 
    index: true, 
    follow: true, 
    nocache: false, 
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  openGraph: {
    title: "IP Checker: Instant IP Address Lookup | Insta-IP",
    description: "Free tool to check IP address, location, browser details, and screen resolution instantly.",
    url: "https://www.insta-ip.com",
    siteName: "Insta-IP",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insta-IP IP Checker Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Your IP Address & Location Instantly",
    description: "Free IP lookup tool with browser details and screen resolution analysis. Trusted by thousands daily.",
    images: ["/twitter-image.jpg"],
    creator: "@instaip_official",
  },
  verification: {
    google: "your-google-search-console-verification-code",
  },
  alternates: {
    canonical: "/",
  }
};

// Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Insta-IP Checker",
  "description": "Free online tool to check IP address, location, browser details, and screen resolution",
  "applicationCategory": "Utility",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "150"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{display:"none", visibility:"hidden"}}
          ></iframe>
        </noscript>
        
        <div className="min-h-screen flex flex-col">
          <div className="py-10 bg-gray-100">
            <Header />
          </div>
          
          <main className="flex-1">{children}</main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}