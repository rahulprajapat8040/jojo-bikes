"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import SlideInView from "../common/SlideInView";
import Image from "next/image";

const WhyJojoBike = ({ data }) => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative z-10 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <SlideInView>
          <h2 className="text-3xl font-bold py-3 text-center mb-8 md:mb-12">
            Why Choose Jojo Bike
          </h2>
        </SlideInView>

        {/* Mobile view */}
        <div className="md:hidden">
          <div className="relative w-[250px] h-[250px] mx-auto mb-8">
            <Image
              src="/assets/girl-on-scooty.jpg"
              alt="Scooter"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="space-y-6">
            {data.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primaryColor">
                    {item.icons}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view */}
        <div className="relative hidden md:block">
          <div className="relative w-[400px] h-[400px] mx-auto">
            <Image
              src="/assets/girl-on-scooty.jpg"
              alt="Scooter"
              fill
              className="object-cover  rounded-full"
            />
            <div className="absolute inset-[-40px] border-4 border-dashed border-primaryColor rounded-full animate-spin-slow" />

            {data.map((item, index) => {
              const angle = (index * 360) / data.length;
              const radius = 240; // Adjusted to match dashed border
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={item.id}
                  className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {/* Circle with hover card */}
                  <div className="relative group">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primaryColor cursor-pointer">
                      {item.icons}
                    </div>

                    {/* Hover card with absolute positioning */}
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-4 rounded-lg shadow-xl w-64 z-50"
                      style={{
                        left: x > 0 ? '100%' : 'auto',
                        right: x <= 0 ? '100%' : 'auto',
                        top: y > 0 ? 'auto' : '100%',
                        bottom: y <= 0 ? 'auto' : '100%',
                        marginLeft: x > 0 ? '1rem' : '0',
                        marginRight: x <= 0 ? '1rem' : '0',
                        marginTop: y > 0 ? '0' : '1rem',
                        marginBottom: y <= 0 ? '1rem' : '0'
                      }}>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJojoBike;
