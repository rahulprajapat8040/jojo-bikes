'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const OurGallery = ({ data }) => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

    return (
        <section className="py-20 mt-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-primaryColor mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Discover our premium collection
                    </p>
                </motion.div>

                <motion.div
                    ref={containerRef}
                    style={{ opacity }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square relative group cursor-pointer overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default OurGallery