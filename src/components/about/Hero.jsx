'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import Counter from '../common/Counter';
import { FaUsers, FaFlagCheckered } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const Hero = ({ HeroData }) => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const imageRef = useRef(null)

    const isInView1 = useInView(ref1, { once: true })
    const isInView2 = useInView(ref2, { once: true })
    const isInView3 = useInView(ref3, { once: true })
    const isInView4 = useInView(ref4, { once: true })
    const isImageInView = useInView(imageRef, { once: true })

    return (
        <>
            <section className="flex justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-2 my-4 py-7 w-full max-w-6xl">

                    <div className="flex flex-col justify-center items-center gap-3 mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center font-bold text-black text-3xl md:text-5xl">
                            {HeroData.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center max-w-4xl text-gray-500 text-sm">
                            {HeroData.para0}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -50 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                ref={ref1}
                                className="bg-gray-50 md:p-6 rounded-lg shadow-sm">
                                <p className="text-gray-700">{HeroData.para1}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -50 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                ref={ref2}
                                className="bg-gray-50 md:p-6 rounded-lg shadow-sm">
                                <p className="text-gray-700">{HeroData.para2}</p>
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <motion.div
                                ref={imageRef}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isImageInView ? 1 : 0,
                                    scale: isImageInView ? 1 : 0.8
                                }}
                                transition={{ duration: 0.8 }}
                                className="bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={HeroData.image}
                                    alt="JoJo Bikes Service"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 50 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                ref={ref4}
                                className="bg-gray-50 md:p-6 rounded-lg shadow-sm">
                                <p className="text-gray-700">{HeroData.para3}</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
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

export default Hero;