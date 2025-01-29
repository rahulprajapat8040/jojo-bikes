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
import FaqsData from "@/components/common/Faqs";
const HeroData = {
  heading1: "Enjoy your ride!",
  heading2: "Self Ride Bike Rental",
  paragraph:
    "If You are searching Activa on rent in Jaipur and bike or scotty on rent in Jaipur then JoJo Bike Rental has been Giving you the best Rental bike or activa in Jaipur.",
  videoUrl: "/assets/8070865-uhd_3840_2160_24fps.mp4"
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
      type: "harley",
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
    title: "Aman",
    description:
      "I had an amazing experience renting a bike from JOJO BIKE RENTAL, The staff was super friendly and helpful, and the bike was in great condition. The rental process was seamless and easy, and they provided me with a helmet for added safety. The bike was perfect for exploring the city, and I loved the freedom to ride wherever I wanted. The prices were also very reasonable. I would highly recommend JOJO BIKE RENTAL to anyone looking to rent a bike. I`ll definitely be back!`",
    image: '/assets/user1.avif'
  },
  {
    id: "2",
    title: "Varun",
    description:
      "Jojo Bike Rental is best destination if you want scooters and activa on hire. The services is really good. They are very professional and offers you cool rides at reasonable prices. If you want to travel intercity or intracity then in both the cases you can contact them.",
    image: '/assets/profileImg.jpeg'
  },
  {
    id: "3",
    title: "Navya",
    description:
      "It's really great experience with Jojo nd actually thankful I meet a genuine agency prices are really affordable and planning with Jojo is so comfortable and flexible 😊😊",
    image: '/assets/user02.jpg'
  },
  {
    id: "4",
    title: "Mannan Ali",
    description:
      "Amazing experience with JoJo Bike Rental, and his team are very accommodating and honest. Their prices are reasonable and service is Good. They even went to the length to refund me for the additional fuel I left when returning the bike. Overall I believe this this is the best service in Jaipur and will recommend others looking to hire Motorbikes in Jaipur to use this company.",
    image: '/assets/user03.jpg'
  },
  {
    id: "5",
    title: "Ankush",
    description:
      "Good service, Decent price. The quality of the Vehicle was good. However the helmet we received had a broken visor which was an annoyance while driving. All over a good deal.",
    image: '/assets/unnamed.png'
  },
  {
    id: "6",
    title: "Deep Shikha",
    description:
      "Great bike rental service! The booking was easy, the bike was in excellent condition, and the staff was friendly and helpful. It was a perfect way to explore the area, a smooth experience overall. Highly recommend!",
    image: '/assets/unnamed1.png'
  },
  {
    id: "7",
    title: "Deep Shikha",
    description:
      "I had a fantastic experience with Jojo Bike Rental! The scooter I rented was in excellent condition, making my ride smooth and enjoyable throughout the day. The staff, including the owner, were incredibly friendly and welcoming. They were not only helpful with local insights but went above and beyond by offering to pick me up from my hotel to save time. It’s clear they truly care about their customers’ experience. Highly recommend Jojo Bike Rental for anyone looking for reliable, well-maintained scooters and exceptional service!",
    image: '/assets/unnamed3.png'
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
  },
  {
    id: 7,
    image: "/assets/2024-11-26.jpg"
  },
  {
    id: 8,
    image: "/assets/2023-11-03.jpg"
  },
  {
    id: 9,
    image: "/assets/2023-11-03-01.jpg"
  },
  {
    id: 10,
    image: "/assets/2024-11-08.jpg"
  },

]

const Faqs = [
  {
    qustion: "What are the various plans avaible?",
    answer: "Hassle-free booking, home delivery, activa maintenance and much more at great prices are available."
  },
  {
    qustion: "What if i want to extend my booking",
    answer: "If you want to extend your booking, you can call us for it. Booking extension is extra payable."
  },
  {
    qustion: "Is Fuel Included In The package?",
    answer: "No, fuel will not provide in the package. We will add a minimal amount of petrol to reach the fuel station."
  },
  {
    qustion: "Will I have to pay for the helmet?",
    answer: "No, you do not have to pay extra for the helmet. The helmet is complimentary from JOJO Bike Rental."
  },
  {
    qustion: "Documents required for activa renting",
    answer: "Documents required for Activa renting are - ID proof and Driving Licence (Original). In case you are unable to show documents, the booking will cancel."
  },
  {
    qustion: "How many kilometers can i Ride?",
    answer: "You can ride up to 100 Kilometers a day."
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
      <FaqsData faqData={Faqs} />
      <MobileApp />
      <OurGallery data={GalleryData} />
    </>
  );
}
export const generateMetadata = () => {
  return {
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
}
