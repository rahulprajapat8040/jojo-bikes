import RentalBike from "@/components/common/RentalBike";
import HeroSection from "@/components/home/HeroSection";
import OurGallery from "@/components/home/OurGallery";
import Testimonial from "@/components/home/Testimonial";
import WhyJojoBike from "@/components/home/WhyJojoBike";
import { MdOutlineSupportAgent } from "react-icons/md";

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
    title: "Wide Range of collection",
    description: "Pick a bike or scooty that suits your needs, we have verity.",
  },
  {
    id: "3",
    title: "Trusted & Transparent process",
    description:
      "You can trust us as we are upfront about the entire process renting.",
  },
  {
    id: "4",
    title: "Hassle Free Booking",
    description:
      "Out step of booking a rental bike & scooty are very easy and quick.",
  },
  {
    id: "5",
    title: "Top Notch conditions",
    description:
      "We are well known for delivering well maintained bike & sccoty",
  },
  {
    id: "6",
    title: "Reasonable Price",
    description:
      "Our rental prices are very reasonable and pocket friendly you can book in one go.0",
  },
];

const RentalBikes = [
  {
    id: "1",
    title: "Activa",
    transmission: "Automatic",
    Fuel: "Petrol",
    Passenger: "2",
    image: "/assets/activa-on-rent-in-jaipur.jpg",
  },
  {
    id: "2",
    title: "KTM Duke ",
    transmission: "Automatic",
    Fuel: "Petrol",
    Passenger: "2",
    image: "/assets/ktm-duke-best-offer.jpg",
  },
];

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
      <OurGallery data={GalleryData} />
    </>
  );
}
