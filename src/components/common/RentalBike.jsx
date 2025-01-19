"use client";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const RentalBike = ({ data }) => {
  return (
    <>
      <section className="flex justify-center py-8 bg-gradient-to-r ">
        <div className="max-w-6xl px-4">
          <div>
            <h1 className="text-7xl font-extrabold text-center text-primaryColor drop-shadow-lg">
              Rental Bikes
            </h1>
            <p className="text-center mb-6 text-gray-800 text-2xl mt-3">
              Choose from our wide range of bikes and scooty
            </p>
          </div>
          <div className="grid mt-6 grid-cols-1 max-w-full md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((bike, index) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true });
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  key={bike.id}
                  className="flex flex-col border border-gray-300 items-center justify-center p-4 py-10 bg-white rounded-lg shadow-xl transform transition-transform duration-300 hover:shadow-2xl"
                >
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="w-full h-52 object-cover rounded-md"
                  />
                  <h1 className="text-3xl py-3 text-center font-bold text-primaryColor">
                    {bike.title}
                  </h1>
                  <div className="flex justify-around w-full text-gray-700">
                    <div className="border-r border-gray-400 px-4">
                      <p className="text-center font-semibold text-gray-900">
                        Transmission
                      </p>
                      <p className="text-center">{bike.transmission}</p>
                    </div>
                    <div className="border-r border-gray-400 px-4">
                      <p className="text-center font-semibold text-gray-900">
                        Fuel
                      </p>
                      <p className="text-center">{bike.Fuel}</p>
                    </div>
                    <div className="px-4">
                      <p className="text-center font-semibold text-gray-900">
                        Passenger
                      </p>
                      <p className="text-center">{bike.Passenger}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 w-full px-5 py-3 bg-primaryColor text-white rounded-md shadow-md transform transition-transform duration-300 hover:bg-primaryColor-dark"
                  >
                    Book Now
                  </motion.button>
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
