import RentalBike from "@/components/common/RentalBike";
import HeroSection from "@/components/home/HeroSection";
import OurGallery from "@/components/home/OurGallery";
import Testimonial from "@/components/home/Testimonial";
import WhyJojoBike from "@/components/home/WhyJojoBike";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiBookmarkCheck, CiViewBoard } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import MobileApp from "@/components/home/MobileApp";
import PricingSection from "@/components/home/PricingSection";
const HeroData = {
  heading1: "Enjoy your ride!",
  heading2: "Self Ride Bike Rental",
  paragraph:
    "If You are searching Activa on rent in Jaipur and bike or scotty on rent in Jaipur then JoJo Bikes has been Giving you the best Rental bike or activa in Jaipur.",
};

const WhyJojo = [
  {
    id: "1",
    icons: <MdOutlineSupportAgent size={40} />,
    title: "24*7 Bike Assistance",
    description:
      "Our experts will be there to help you and guide no matter what",
  },
  {
    id: "2",
    icons: <GiProgression size={40} />,
    title: "Wide Range of collection",
    description: "Pick a bike or scooty that suits your needs, we have verity.",
  },
  {
    id: "3",
    icons: <VscWorkspaceTrusted size={40} />,
    title: "Trusted & Transparent process",
    description:
      "You can trust us as we are upfront about the entire process renting.",
  },
  {
    id: "4",
    icons: <CiBookmarkCheck size={40} />,
    title: "Hassle Free Booking",
    description:
      "Out step of booking a rental bike & scooty are very easy and quick.",
  },
  {
    id: "5",
    icons: <CiViewBoard size={40} />,
    title: "Top Notch conditions",
    description:
      "We are well known for delivering well maintained bike & sccoty",
  },
  {
    id: "6",
    icons: <GiTakeMyMoney size={40} />,
    title: "Reasonable Price",
    description:
      "Our rental prices are very reasonable and pocket friendly you can book in one go.0",
  },
];

const RentalBikes = {
  title: 'Rental Bikes',
  // subTitle: 'Best Offer of The Day',
  Bikes: [
    // Activa/Scooty Type
    {
      id: "5",
      type: "scooty",
      title: "Honda Activa 3g",
      transmission: "Automatic",
      Fuel: "Petrol",
      Passenger: "2",
      price: 450,
      image: "/assets/affordable-scooty-on-rent-in-jaipur.png",
    },
    {
      id: "6",
      type: "scooty",
      title: "Honda Grazia 125",
      transmission: "Automatic",
      Fuel: "Petrol",
      Passenger: "2",
      price: 500,

      image: "/assets/rent-in-jaipur-scooty.png",
    },
    // Royal Enfield/Bullet Type
    {
      id: "7",
      type: "bullet",
      title: "Royal Enfield 350",
      transmission: "Manual",
      Fuel: "Petrol",
      Passenger: "2",
      price: 1000,

      image: "/assets/bike-on-rent-in-jaipur.png",
    },
    {
      id: "8",
      type: "bullet",
      title: "Bullet Classic x 350",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 1200,

      Passenger: "2",
      image: "/assets/hire-bullet-on-rent-in-jaipur.png",
    },
    {
      id: "9",
      type: "bullet",
      title: "Royal Enfield Classic BS6",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 1250,

      Passenger: "2",
      image: "/assets/affordable-bullet-on-rent-in-jaipur.png",
    },
    {
      id: "10",
      type: "bullet",
      title: "Royal Enfield Classic 350",
      transmission: "Manual",
      Fuel: "Petrol",
      Passenger: "2",
      price: 1300,

      image: "/assets/rent-in-Jaipur-bullet.png",
    },
    // KTM Type
    {
      id: "11",
      type: "ktm",
      title: "KTM Duke",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 1500,

      Passenger: "2",
      image: "/assets/ktm-duke-best-offer.png",
    },
    {
      id: "1",
      type: "scooty",
      title: "Honda Activa 6G",
      transmission: "Automatic",
      Fuel: "Petrol",
      price: 500,

      Passenger: "2",
      image: "/assets/activa-rent-in-jaipur.png",
    },
    {
      id: "2",
      type: "scooty",
      title: "Honda Activa 125",
      transmission: "Automatic",
      Fuel: "Petrol",
      Passenger: "2",
      price: 500,

      image: "/assets/affordable-activa-on-rent-in-jaipur.png",
    },
    {
      id: "12",
      type: "ktm",
      title: "KTM 390 Duke",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 2000,

      Passenger: "2",
      image: "/assets/hire-ktm-bike-on-rent-in-jaipur.png",
    },
    {
      id: "13",
      type: "ktm",
      title: "KTM RC 200",
      transmission: "Manual",
      price: 1500,

      Fuel: "Petrol",
      Passenger: "2",
      image: "/assets/affordable-ktm-bike-on-rent-in-jaipur.png",
    },
    {
      id: "14",
      type: "ktm",
      title: "KTM 125 Duke",
      transmission: "Manual",
      price: 1300,

      Fuel: "Petrol",
      Passenger: "2",
      image: "/assets/rent-in-jaipur-ktm-bike.png",
    },
    // Harley Davidson Type
    {
      id: "15",
      type: "harley",
      title: "Harley Davidson Fat Bob",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 5000,

      Passenger: "2",
      image: "/assets/hire-harley-davidson-bike-on-rent-in-jaipur.png",
    },
    {
      id: "16",
      type: "harley",
      title: "Harley Davidson Street Bob",
      price: 5500,

      transmission: "Manual",
      Fuel: "Petrol",
      Passenger: "2",
      type: "hraley",
      price: 5500,

      image: "/assets/affordable-harley-davidson-bike-on-rent-in-jaipur.png",
    },
    {
      id: "17",
      type: "harley",
      title: "Harley Davidson PAN",
      price: 6000,

      transmission: "Manual",
      Fuel: "Petrol",
      Passenger: "2",
      image: "/assets/bike-on-rent-in-jaipur-harley-davidson.png",
    },
    // Other Sports Bikes
    {
      id: "18",
      type: "sports",
      title: "Yamaha R15",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 3000,

      Passenger: "2",
      image: "/assets/bike-rent-in-jaipur-near-me.png",
    },
    {
      id: "3",
      type: "scooty",
      title: "Honda Activa 4G",
      transmission: "Automatic",
      price: 450,

      Fuel: "Petrol",
      Passenger: "2",
      image: "/assets/rent-in-jaipur-Activa.png",
    },
    {
      id: "4",
      type: "scooty",
      title: "Suzuki Access 125",
      transmission: "Automatic",
      Fuel: "Petrol",
      price: 600,

      Passenger: "2",
      image: "/assets/scooty-rent-in-jaipur.png",
    },
    {
      id: "19",
      type: "sports",
      title: "Yamaha FZ-Fi",
      transmission: "Manual",
      price: 1000,

      Fuel: "Petrol",
      Passenger: "2",
      image: "/assets/affordable-two-wheeler-on-rent-in-jaipur.png",
    },
    {
      id: "20",
      type: "sports",
      title: "Honda Hornet 2.0",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 800,

      Passenger: "2",
      image: "/assets/hire-two-wheeler-on-rent-in-jaipur.png",
    },
    {
      id: "21",
      type: "sports",
      title: "Honda SP 125",
      transmission: "Manual",
      Fuel: "Petrol",
      price: 900,

      Passenger: "2",
      image: "/assets/2-wheeler-on-rent-in-jaipur.png",
    }
  ]
};

const OurTestiMonials = [
  {
    id: "1",
    title: "Maab",
    description:
      "I took active for 3 month from Jojo travel and their monthly charge did not fail to impress. They are do service of sccoty at regular interval and keep it at notch condition.",
    image: '/assets/user-01.png'
  },
  {
    id: "2",
    title: "Cace",
    description:
      "I recently rented royal Enfield 350 for a day through their website which is super easy to use. Every step is clearly instructed for the entire book process. There is no need for submitting your hard document. It was very reasonable in price. I verify you the process of renting at Jojo travel is highly time effective.",
    image: '/assets/user-02.jpg'
  },
  {
    id: "3",
    title: "Paaras",
    description:
      "Me and my friends planed a road trip on bike and we book bikes from them have wide range of collection well maintained vehicles.",
    image: '/assets/user-03.jpg'
  },
  {
    id: "1",
    title: "Maab",
    description:
      "I took active for 3 month from Jojo travel and their monthly charge did not fail to impress. They are do service of sccoty at regular interval and keep it at notch condition.",
    image: '/assets/user-01.png'
  },
  {
    id: "2",
    title: "Cace",
    description:
      "I recently rented royal Enfield 350 for a day through their website which is super easy to use. Every step is clearly instructed for the entire book process. There is no need for submitting your hard document. It was very reasonable in price. I verify you the process of renting at Jojo travel is highly time effective.",
    image: '/assets/user-02.jpg'
  },
  {
    id: "3",
    title: "Paaras",
    description:
      "Me and my friends planed a road trip on bike and we book bikes from them have wide range of collection well maintained vehicles.",
    image: '/assets/user-03.jpg'
  },
];

const GalleryData = [
  {
    id: 1,
    image: "/assets/jojo-bike-ktm-duke.jpg",
    name: "KTM Duke",
  },
  {
    id: 2,
    image: "/assets/jojo-bike-royal-enfield.jpg",
    name: "Classic 350"
  },
  {
    id: 3,
    image: "/assets/jojo-bike-ktm.jpg",
    name: "KTM Duke",
  },
  {
    id: 4,
    image: "/assets/jojo-activa.jpg",
    name: "Honda Activa"
  },
  {
    id: 5,
    image: "/assets/jojo-activa-125.jpg",
    name: "Activa 125"
  },
  {
    id: 6,
    image: "/assets/jojo-bajaz-sport.jpg",
    name: "Bajaj Sports"
  }
]

export default function Home() {
  return (
    <>
      <HeroSection data={HeroData} />
      <WhyJojoBike data={WhyJojo} />
      <RentalBike data={RentalBikes} />
      <Testimonial data={OurTestiMonials} />
      <PricingSection />
      <MobileApp/>
      <OurGallery data={GalleryData} />
    </>
  );
}
export const metadata = {
  title: 'Jojo Travel - Bike & Scooty Rental Services in Jaipur',
  description: 'Looking for bike or scooty rental in Jaipur? Jojo Travel offers affordable two-wheeler rentals with 24/7 assistance. Wide range of vehicles including Activa, KTM Duke & Royal Enfield. Best rates guaranteed for bike hire in Jaipur.',
  keywords: 'bike on rent in jaipur, scooty on rent in jaipur, scooty rental in jaipur, two wheeler on rent in jaipur, bike hire in jaipur, bike in rent jaipur, hire a bike in jaipur, jaipur two wheeler on rent, motorcycle on rent in jaipur, motorcycle rental jaipur, rent for bike in jaipur, rent on bike jaipur',
  openGraph: {
    title: 'Jojo Travel - Best Bike & Scooty Rental in Jaipur',
    description: 'Trusted bike and scooty rental service in Jaipur offering well-maintained vehicles at reasonable prices. Book hassle-free two-wheeler rentals with 24/7 support.',
    type: 'website',
    url: 'https://jojobikes.com',
    images: [
      {
        url: '/assets/jojo-bike-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jojo Bikes Rental Services Jaipur'
      }
    ],
    locale: 'en_IN',
    siteName: 'Jojo Travel'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jojo Travel - Bike & Scooty Rental in Jaipur',
    description: 'Affordable bike and scooty rentals in Jaipur with 24/7 support. Wide range of well-maintained vehicles available.',
    images: ['/assets/jojo-bike-og-image.png'],
  },
  alternates: {
    canonical: 'https://jojobikes.com'
  }
}
