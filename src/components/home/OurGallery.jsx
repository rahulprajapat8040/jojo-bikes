'use client'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
const OurGallery = ({ data }) => {
    const ref1 = useRef(null)
    const isView = useInView(ref1, { once: true })
    return (
        <>
            <section className="py-8"
                ref={ref1}
            >
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={isView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl px-4 mx-auto"

                >
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-5xl text-center font-bold drop-shadow-2xl'> Some Of <span className='text-primaryColor drop-shadow-lg'>Our vehicles</span> </h1>
                    </div>
                    <div className='mt-4'>
                        <motion.div
                            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 sm:gap-6 lg:gap-10'
                            initial="hidden"
                            animate={isView ? "visible" : "hidden"}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {
                                data.map((gallery) => (
                                    <motion.div
                                        key={gallery.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isView ? { opacity: 1, y: 0 } : {}}
                                        whileHover={{ borderRadius: 20 }}
                                        className='relative overflow-hidden group cursor-pointer'
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <div className="overflow-hidden relative z-10">
                                            <motion.img
                                                whileHover={{ scale: 1.09, borderRadius: 10 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                src={gallery.image}
                                                alt={gallery.name}
                                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover'
                                            />
                                        </div>
                                        <div
                                            className='absolute inset-0 z-20 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex justify-center items-center pointer-events-none flex-col gap-1'
                                        >
                                            <h3
                                                className='text-sm sm:text-base lg:text-lg font-bold text-primaryColor translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center px-2'
                                            >
                                                {gallery.name}
                                            </h3>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                                            >
                                                <motion.button
                                                    className='text-sm sm:text-base lg:text-lg text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-primaryColor px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md pointer-events-auto'
                                                >
                                                    Book Now
                                                </motion.button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default OurGallery