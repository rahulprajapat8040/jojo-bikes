import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const poppins = Poppins({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Use 'weight' instead of 'weights' });
});

  export const metadata = {
    metadataBase: new URL('https://www.jojobikerental.in'),
    title: 'Jojo bike rental - Bike & Scooty Rental Services in Jaipur',
    description: 'Looking for bike or scooty rental in Jaipur? Jojo bike rental offers affordable two-wheeler rentals with 24/7 assistance. Wide range of vehicles including Activa, KTM Duke & Royal Enfield. Best rates guaranteed for bike hire in Jaipur.',
    keywords: 'bike on rent in jaipur, scooty on rent in jaipur, scooty rental in jaipur, two wheeler on rent in jaipur, bike hire in jaipur, bike in rent jaipur, hire a bike in jaipur, jaipur two wheeler on rent, motorcycle on rent in jaipur, motorcycle rental jaipur, rent for bike in jaipur, rent on bike jaipur',
    openGraph: {
      title: 'Jojo bike rental - Best Bike & Scooty Rental in Jaipur',
      description: 'Trusted bike and scooty rental service in Jaipur offering well-maintained vehicles at reasonable prices. Book hassle-free two-wheeler rentals with 24/7 support.',
      type: 'website',
      url: 'https://www.jojobikerental.in',
      images: [
        {
          url: '/assets/jojo-bike-og-image.png',
          width: 1200,
          height: 630,
          alt: 'Jojo Bikes Rental Services Jaipur'
        }
      ],
      locale: 'en_IN',
      siteName: 'Jojo bike rental'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jojo bike rental - Bike & Scooty Rental in Jaipur',
      description: 'Affordable bike and scooty rentals in Jaipur with 24/7 support. Wide range of well-maintained vehicles available.',
      images: ['/assets/jojo-bike-og-image.png'],
    },
    alternates: {
      canonical: 'https://www.jojobikerental.in'
    }
  }
  
  export default function RootLayout({ children }) {
  return(
    <html lang = "en" >
      <body
        className={`${poppins.className}  antialiased`}
      >

        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
