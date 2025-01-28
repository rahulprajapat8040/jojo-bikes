"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { FaUsers, FaFlagCheckered } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import Counter from '../common/Counter';
import RentalModal from './RentalModal';
import Link from "next/link";

const HeroSection = ({ data }) => {
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={data.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 h-screen relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl relative z-20 text-center">
              <div className="h-1 w-24 bg-primaryColor mb-8 " />
              <h1 className="text-6xl md:text-7xl font-bold text-primaryColor mb-4">
                {data.heading1}
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {data.heading2}
              </h2>
              <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
                {data.paragraph}
              </p>
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 bg-primaryColor text-black rounded-full font-semibold"
                >
                  Rent Now
                </button>
                <Link href={'tel: 8503027210'}>
                  <button className="px-10 py-4 border-2 border-primaryColor text-primaryColor rounded-full font-semibold">
                    Call Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RentalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Stats Section */}
      <section className='w-full py-12 bg-white'>
        <div className='max-w-6xl w-full mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b py-5'>
            <div className='p-6 rounded-xl text-center'>
              <FaUsers className='text-gray-800 mx-auto mb-4' size={50} />
              <div className='text-4xl font-bold text-gray-800'>
                <Counter end={25000} duration={2500} />
              </div>
              <p className='text-gray-600 font-semibold text-lg'>Happy Customers</p>
            </div>

            <div className='p-6 rounded-xl text-center'>
              <MdOutlineDirectionsBike className='text-gray-800 mx-auto mb-4' size={50} />
              <div className='text-4xl font-bold text-gray-800'>
                <Counter end={1000} duration={2500} />
              </div>
              <p className='text-gray-600 font-semibold text-lg'>BIKES IN GARAGE</p>
            </div>

            <div className='p-6 rounded-xl text-center'>
              <FaFlagCheckered className='text-gray-800 mx-auto mb-4' size={50} />
              <div className='text-4xl font-bold text-gray-800'>
                <Counter end={100000} duration={2500} />
              </div>
              <p className='text-gray-600 font-semibold text-lg'>TOTAL KILOMETER/MIL</p>
            </div>

            <div className='p-6 rounded-xl text-center'>
              <RiCustomerService2Line className='text-gray-800 mx-auto mb-4' size={50} />
              <div className='text-4xl font-bold text-gray-800'>
                <Counter end={50} duration={2500} />
              </div>
              <p className='text-gray-600 font-semibold text-lg'>BIKES CENTER SOLUTIONS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
