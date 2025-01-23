'use client'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaFlagCheckered } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { useRef } from 'react';
import Counter from '../common/Counter';

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
            <section className="flex justify-center bg-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-2 my-4 md:mt-24 py-20 w-full max-w-6xl">

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
                                transition={{ duration: 0.3, delay: 0.3 }}
                                ref={ref1}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-sky-600 to-blue-800 md:p-6 rounded-lg shadow-sm">
                                <p className="text-white">{HeroData.para1}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -50 }}
                                transition={{ duration: 0.2, delay: 0.5 }}
                                ref={ref2}
                                whileHover={{ scale: 0.9 }}
                                className="bg-gradient-to-br from-sky-600 to-blue-800 md:p-6 rounded-lg shadow-sm">
                                <p className="text-white">{HeroData.para2}</p>
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
                                transition={{ duration: 0.1, delay: 0.7 }}
                                ref={ref4}
                                whileHover={{ scaleX: 1.02 }}
                                className="bg-gradient-to-br from-sky-600 to-blue-800 md:p-6 rounded-lg shadow-sm">
                                <p className="text-white">{HeroData.para3}</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className='w-full py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'>
                <div className='max-w-6xl w-full mx-auto px-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b py-5'>
                        <motion.div
                            className='relative group p-6 rounded-xl overflow-hidden transition-all duration-300'
                            style={{
                                background: 'linear-gradient(45deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.9))',
                                backdropFilter: 'blur(10px)',
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <div className='relative flex flex-col items-center gap-3'>
                                <FaUsers className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                                    <Counter end={25000} duration={2500} />
                                </div>
                                <p className='text-white font-semibold text-lg text-center'>Happy Customers</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className='relative group p-6 rounded-xl overflow-hidden transition-all duration-300'
                            style={{
                                background: 'linear-gradient(45deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.9))',
                                backdropFilter: 'blur(10px)',
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <div className='relative flex flex-col items-center gap-3'>
                                <MdOutlineDirectionsBike className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                                    <Counter end={1000} duration={2500} />
                                </div>
                                <p className='text-white font-semibold text-lg text-center'>BIKES IN GARAGE</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className='relative group p-6 rounded-xl overflow-hidden transition-all duration-300'
                            style={{
                                background: 'linear-gradient(45deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.9))',
                                backdropFilter: 'blur(10px)',
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-600/30 via-emerald-600/30 to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <div className='relative flex flex-col items-center gap-3'>
                                <FaFlagCheckered className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                                    <Counter end={100000} duration={2500} />
                                </div>
                                <p className='text-white font-semibold text-lg text-center'>TOTAL KILOMETER/MIL</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className='relative group p-6 rounded-xl overflow-hidden transition-all duration-300'
                            style={{
                                background: 'linear-gradient(45deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.9))',
                                backdropFilter: 'blur(10px)',
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <div className='relative flex flex-col items-center gap-3'>
                                <RiCustomerService2Line className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                                    <Counter end={50} duration={2500} />
                                </div>
                                <p className='text-white font-semibold text-lg text-center'>BIKES CENTER SOLUTIONS</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;