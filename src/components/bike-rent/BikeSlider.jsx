'use client'
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const BikeSlider = ({ BikesData }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1)
            setCurrentSlide(prev =>
                prev === BikesData.length - 1 ? 0 : prev + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [BikesData.length])

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        })
    }

    const contentVariants = {
        enter: {
            opacity: 0,
            y: 0
        },
        center: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentSlide((prev) => (prev === BikesData.length - 1 ? 0 : prev + 1))
    }

    const handlePrevious = () => {
        setDirection(-1)
        setCurrentSlide((prev) => (prev === 0 ? BikesData.length - 1 : prev - 1))
    }

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative w-full">
                    <AnimatePresence mode="wait" initial={false} custom={direction}>
                        {BikesData[currentSlide] && (
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.5, ease: "easeInOut" },
                                    opacity: { duration: 0.3 }
                                }}
                                className="w-full"
                            >
                                <div className="flex w-full flex-col md:flex-row items-center justify-between gap-16">
                                    {/* Image Section */}
                                    <motion.div 
                                        variants={contentVariants}
                                        className="w-full md:w-1/2 relative group"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="relative bg-white p-8 rounded-2xl"
                                        >
                                            <img
                                                src={BikesData[currentSlide].img}
                                                alt={BikesData[currentSlide].title}
                                                className="w-full h-[400px] object-contain rounded-xl"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div 
                                        variants={contentVariants}
                                        className="w-full md:w-1/2 space-y-6"
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                                            {BikesData[currentSlide].title}
                                        </h2>
                                        <div className="relative space-y-6">
                                            <p className={`text-lg text-neutral-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                                                {BikesData[currentSlide].para}
                                            </p>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setIsExpanded(!isExpanded)}
                                                className="text-sm text-black underline underline-offset-4 font-medium"
                                            >
                                                {isExpanded ? 'Show Less' : 'Read More'}
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrevious}
                            className="w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center pointer-events-auto transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center pointer-events-auto transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-12">
                        <div className="flex items-center gap-3">
                            {BikesData.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                        setDirection(index > currentSlide ? 1 : -1)
                                        setCurrentSlide(index)
                                        setIsExpanded(false)
                                    }}
                                    className={`transition-all duration-300 ${
                                        currentSlide === index 
                                            ? 'w-8 h-2 bg-black'
                                            : 'w-2 h-2 bg-neutral-200 hover:bg-neutral-300'
                                    } rounded-full`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BikeSlider