'use client'
import { useEffect, useState } from "react"

const BikeSlider = ({ BikesData }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev =>
                prev === BikesData.length - 1 ? 0 : prev + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [BikesData.length])

    return (
        <section className="bg-white py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative w-full">
                    {BikesData[currentSlide] && (
                        <>
                            <div className="flex w-full flex-col md:flex-row items-start justify-between gap-6 md:gap-10">
                                {/* Image Section */}
                                <div className="w-full max-w-md">
                                    <img
                                        src={BikesData[currentSlide].img}
                                        alt={BikesData[currentSlide].title}
                                        className="w-full  bg-black  object-contain rounded-lg"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-3/5 space-y-3">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                                        {BikesData[currentSlide].title}
                                    </h2>
                                    <div className="relative">
                                        <p className={`text-sm md:text-base text-gray-600 max-w-lg transition-all duration-300 ease-in-out ${isExpanded ? '' : 'line-clamp-5'
                                            }`}>
                                            {BikesData[currentSlide].para}
                                        </p>
                                        <button
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className="text-sm text-blue-600 hover:text-blue-800 mt-2 font-medium"
                                        >
                                            {isExpanded ? 'Show Less' : 'Read More'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Slide Indicators */}
                            <div className="flex justify-center mt-6">
                                <div className="flex items-center gap-2">
                                    {BikesData.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setCurrentSlide(index);
                                                setIsExpanded(false); // Reset expanded state on slide change
                                            }}
                                            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                                                    ? 'bg-black w-5'
                                                    : 'bg-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default BikeSlider