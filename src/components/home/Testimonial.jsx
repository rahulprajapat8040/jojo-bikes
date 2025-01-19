'use client'
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const Testimonial = ({ data }) => {
  return (
    <>
      <section className="py-8 ">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl drop-shadow-lg font-extrabold text-primaryColor">LATEST TESTIMONIAL</h1>
            <h2 className="text-2xl text-gray-700 mt-2">What Clients Say About Us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((testimonial, index) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true });
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={inView ? { opacity: 1, y: 0, rotateY: 1440 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  key={testimonial.id}
                  className="p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl"
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
