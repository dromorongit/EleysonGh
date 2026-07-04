import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header, Footer, WhatsAppButton } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Eleyson Ghana Limited - Engineering the Future of Energy & Water",
    template: "%s | Eleyson Ghana Limited",
  },
  description: "Premium engineering solutions for solar energy and hydrogeological services in Ghana and West Africa. Expert consultation, installation, and maintenance.",
  openGraph: {
    title: {
      default: "Eleyson Ghana Limited - Engineering the Future of Energy & Water",
      template: "%s | Eleyson Ghana Limited",
    },
    description: "Premium engineering solutions for solar energy and hydrogeological services in Ghana and West Africa. Expert consultation, installation, and maintenance.",
    url: "https://eleysonghana.com/",
    siteName: "Eleyson Ghana Limited",
    images: [
      {
        url: "https://eleysonghana.com/images/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Eleyson Ghana Limited homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Eleyson Ghana Limited - Engineering the Future of Energy & Water",
      template: "%s | Eleyson Ghana Limited",
    },
    description: "Premium engineering solutions for solar energy and hydrogeological services in Ghana and West Africa. Expert consultation, installation, and maintenance.",
    images: ["https://eleysonghana.com/images/homepage.jpg"],
  },
  icons: {
    icon: "/images/eleysonlogo.jpg",
    shortcut: "/images/eleysonlogo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
       lang="en"
       className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
     >
      <head>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Eleyson Ghana Limited",
          "image": "https://eleysonghana.com/images/homepage.jpg",
          "@id": "https://eleysonghana.com/",
          "url": "https://eleysonghana.com/",
          "telephone": "+233 244 973 788",
          "email": "info@eleysonghana.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Abokobi",
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra Region",
            "postalCode": "Ghana",
            "addressCountry": "GH"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 5.7426399,
            "longitude": -0.1957862
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "14:00"
            }
          ],
          "description": "Premium engineering solutions for solar energy and hydrogeological services in Ghana and West Africa. Expert consultation, installation, and maintenance.",
          "priceRange": "GHS 50,000 - GHS 5,000,000",
          "servesCoverageArea": {
            "@type": "AdministrativeArea",
            "name": "Ghana"
          },
          "sameAs": [
            "https://www.facebook.com/eleysonghana",
            "https://www.linkedin.com/company/eleyson-ghana-limited",
            "https://www.instagram.com/eleysonghana/"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Solar Energy Solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hydro & Water Solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Energy Audits"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Maintenance & Support"
                }
              }
            ]
          }
        })}</script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-800 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-RQ09Z9PKWY" />
      </body>
    </html>
  );
}
