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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        
        {/* Fixed Action Buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
          <a
            href="https://wa.me/918503027210?text=Hello%20Jojo%20bike%20rental,%20I%20want%20to%20rent%20a%20vehicle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
          <a
            href="tel:0850327210"
            className="bg-blue-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
