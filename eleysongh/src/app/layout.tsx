import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eleyson Ghana Limited - Renewable Energy & Hydrogeological Engineering",
  description: "Leading provider of integrated renewable energy and hydrogeological engineering solutions in Ghana and West Africa. Solar installations, borehole drilling, and technical consulting.",
  keywords: "renewable energy, solar engineering, hydrogeological services, borehole drilling, Ghana, West Africa",
  authors: [{ name: "Eleyson Ghana Limited" }],
  openGraph: {
    title: "Eleyson Ghana Limited",
    description: "Engineering the Future of Energy & Water",
    type: "website",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
