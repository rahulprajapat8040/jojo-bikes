"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SlideInView from "./SlideInView";
import { useState } from "react";
import { FaStar } from "react-icons/fa";


const RentalBike = ({ data }) => {
  const [selectedType, setSelectedType] = useState("all");

  // Get unique types from bikes and filter out undefined/null values
  const bikeTypes = ["all", ...new Set(data.Bikes.map(bike => bike.type).filter(Boolean))];

  // Filter bikes, handling cases where type might be undefined
  const filteredBikes = selectedType === "all"
    ? data.Bikes
    : data.Bikes.filter(bike => bike.type && bike.type === selectedType);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const filterButtonVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.05 }
  };

  const handleWhatsAppClick = (bikeName) => {
    const message = `Hello Jojo Travel, I want to rent ${bikeName}`;
    const phoneNumber = "8503027210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="flex justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container px-4 py-20">
        <SlideInView>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-primaryColor to-yellow-700 bg-clip-text text-transparent">
            {data.title}
          </h2>
          {data.subTitle && (
            <p className="text-center text-xl mt-4 text-gray-600 max-w-2xl mx-auto">
              {data.subTitle}
            </p>
          )}
        </SlideInView>

        {/* Only show filter if we have more than one type */}
        {bikeTypes.length > 1 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {bikeTypes.map((type) => (
              <motion.button
                key={type}
                variants={filterButtonVariants}
                initial="initial"
                animate="animate"
                whileTap="tap"
                whileHover="hover"
                onClick={() => setSelectedType(type)}
                className={`px-7 py-2 rounded-lg font-medium transition-all duration-300 ${selectedType === type
                  ? 'bg-gradient-to-r from-primaryColor to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md border'
                  }`}
              >
                {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Bikes Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-8 mt-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredBikes.map((bike) => (
              <motion.div
                key={bike.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                variants={cardVariants}
                whileHover="hover"
                className="group relative pt-16" // Added pt-16 for image overflow
              >

                <div className="rounded-xl shadow-lg bg-transparent overflow-visible transform transition-all duration-300">
                  <div className="relative -mt-24 mx-6"> {/* Changed to -mt-24 and added mx-6 */}
                    <div className="relative h-56 transform transition-transform duration-300 group-hover:scale-110 bg-transparent">
                      <Image
                        src={bike.image}
                        alt={bike.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain drop-shadow-2xl transform transition-all duration-300 hover:scale-105 mix-blend-multiply"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-xl">
                    <div className="flex gap-2 text-primaryColor py-2"><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <h3 className="text-xl font-semibold text-gray-800">{bike.title}</h3>
                    <h3 className="font-semibold pt-2 text-blue-500">{bike?.price || "500"} / Day</h3>
                    <motion.button
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      onClick={() => handleWhatsAppClick(bike.title)}
                      className="mt-6 w-full bg-gradient-to-r from-primaryColor to-yellow-400 text-white py-3 px-6 rounded-lg font-semibold 
                      transform transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalBike;
