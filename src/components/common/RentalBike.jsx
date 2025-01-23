"use client";
import { useInView, motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const RentalBike = ({ data }) => {
  return (
    <>
      <section className="flex justify-center py-8 bg-gray-900 ">
        <div className="max-w-6xl px-4">
          <div>
            <h1 className="text-7xl font-extrabold text-center text-primaryColor drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              {data.title}
            </h1>
            <p className="text-center mb-6 text-white text-2xl mt-3">
              {data?.subTitle}
            </p>
          </div>
          <div className="grid mt-6 grid-cols-1 max-w-full sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.Bikes.map((bike, index) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true });
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  key={bike.id}
                  className="flex flex-col border border-gray-300 items-center justify-center p-2 md:p-4 py-10 bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:shadow-2xl"
                >
                  <motion.img
                    src={bike.image}
                    alt={bike.title}
                    className="max-w-full h-52 object-cover rounded-md"
                    whileHover={{ scale: 1.01 }}
                  />
                  <h1 className="text-3xl py-3 text-center font-bold text-primaryColor">
                    {bike.title}
                  </h1>
                  <div className="flex justify-around w-full text-gray-700">
                    <div className="border-r border-gray-400 px-2 w-1/3">
                      <p className="text-center text-sm font-semibold text-gray-900">
                        Transmission
                      </p>
                      <p className="text-center text-sm">{bike.transmission}</p>
                    </div>
                    <div className="border-r border-gray-400 px-2 w-1/3">
                      <p className="text-center text-sm font-semibold text-gray-900">
                        Fuel
                      </p>
                      <p className="text-center text-sm">{bike.Fuel}</p>
                    </div>
                    <div className="px-2 w-1/3">
                      <p className="text-center text-sm font-semibold text-gray-900">
                        Passenger
                      </p>
                      <p className="text-center text-sm">{bike.Passenger}</p>
                    </div>
                  </div>
                  <Link 
                    href={`https://api.whatsapp.com/send?phone=919799994204&text=Hello%2C%20JOJO%20Travel!%20I%20want%20to%20rent%20${bike.title}`} 
                    target="_blank" 
                    className="w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: "#ff7f50" }}
                      className="mt-6 w-full px-5 py-3 bg-primaryColor text-white rounded-md shadow-md transform transition-transform duration-300 hover:bg-primaryColor-dark"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RentalBike;
