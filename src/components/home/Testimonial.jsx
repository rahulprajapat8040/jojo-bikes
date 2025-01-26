'use client'
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import { FaTripadvisor } from "react-icons/fa";

const Testimonial = ({ data }) => {
  return (
    <>
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl drop-shadow-lg font-extrabold text-primaryColor">LATEST TESTIMONIAL</h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mt-2">What Clients Say About Us.</h2>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                }
              }}
            >
              {/* First set of testimonials */}
              <div className="flex gap-8 min-w-full">
                {data.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-[350px] flex-shrink-0 p-6 bg-white border-2 rounded-lg drop-shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-primaryColor">{testimonial.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set of testimonials for seamless loop */}
              <div className="flex gap-8 min-w-full">
                {data.map((testimonial, index) => (
                  <div
                    key={`duplicate-${testimonial.id}`}
                    className="w-[350px] flex-shrink-0 p-6 bg-white border-2 rounded-lg drop-shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-primaryColor">{testimonial.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="py-4 my-2 flex justify-center">
            <Link href={'https://www.tripadvisor.in/Attraction_Review-g304555-d23635096-Reviews-Jojo_Travel-Jaipur_Jaipur_District_Rajasthan.html'} target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                whileTap={{ scale: 0.9 }}
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
