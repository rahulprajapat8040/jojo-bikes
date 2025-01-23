'use client'
import { useInView, motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { FaTripadvisor } from "react-icons/fa";


const Testimonial = ({ data }) => {
  return (
    <>
      <section className="py-8 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl drop-shadow-lg font-extrabold text-primaryColor">LATEST TESTIMONIAL</h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mt-2">What Clients Say About Us.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((testimonial, index) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true });
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: index * 70 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  key={testimonial.id}
                  className="p-4 sm:p-6 bg-white border-2 rounded-lg drop-shadow-xl transform transition-transform duration-300 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-primaryColor">{testimonial.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{testimonial.description}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="py-4 my-2 flex justify-center">
            <Link href={'https://www.tripadvisor.in/Attraction_Review-g304555-d23635096-Reviews-Jojo_Travel-Jaipur_Jaipur_District_Rajasthan.html'} target="_blank">
            <motion.button
            
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            whileTap={{scale: 0.9}}
            className="flex items-center text-black gap-3 text-sm sm:text-lg rounded-full border border-gray-400 font-semibold bg-white drop-shadow-2xl px-4 py-3"
            >
              <FaTripadvisor size={25} color="green" /> View Our Trip Advisor Review
            </motion.button>
              </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
