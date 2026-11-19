import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "PigeonsPower | Electrical Engineering Consultancy — NSP Network Design, Public Lighting & Estimation";

const siteDescription =
  "Australian electrical engineering consultancy for NSP network design, public lighting, drafting, project management and cost estimation services.";

export const metadata = {
  metadataBase: new URL("https://www.pigeonspower.com.au"),

  title: siteTitle,
  description: siteDescription,

  keywords: [
    "electrical engineering consultancy",
    "NSP network design",
    "electrical distribution design",
    "public lighting design",
    "pit and pipe design",
    "NBN design",
    "electrical drafting",
    "project management",
    "cost estimation",
    "quantity takeoff",
    "Roxburgh Park",
    "Victoria",
    "Australia",
  ],

  authors: [{ name: "PigeonsPower" }],
  creator: "PigeonsPower",
  publisher: "PigeonsPower",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "PigeonsPower",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/electrical%20tower.jpg",
        alt: "Electrical transmission tower at sunset",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/electrical%20tower.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PigeonsPower",
  url: "https://www.pigeonspower.com.au/",
  description: siteDescription,
  telephone: "+61 419 663 260",
  email: "info@pigeonspower.com",
  image: "https://www.pigeonspower.com.au/pigeons.jpeg",
  logo: "https://www.pigeonspower.com.au/pigeons.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1-Chindwin Place",
    addressLocality: "Roxburgh Park",
    addressRegion: "VIC",
    postalCode: "3064",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  makesOffer: [
    "Electrical Distribution Design",
    "Public Lighting Design",
    "Temporary Public Lighting Design",
    "Project Management",
    "Electrical Detailing & Drafting",
    "Telecommunication Design (NBN, Telstra, Optus)",
    "Engineering Consultancy",
    "Quantity Takeoff",
    "Cost Estimation",
  ].map((serviceName) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: serviceName,
    },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
