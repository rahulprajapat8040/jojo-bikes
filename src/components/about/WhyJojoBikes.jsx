'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const WhyJojoBikes = ({ WhyJojoBikesData,  title}, ) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section className='w-full py-20 bg-gradient-to-b from-white to-gray-50'>
            <div className='max-w-7xl w-full mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        { title || "Why Choose JoJo Bike Rental?" }
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience the perfect blend of convenience, quality, and affordability
                    </p>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {WhyJojoBikesData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex flex-col h-full">
                                <div className="text-4xl mb-4">{item.icons}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <ul className="space-y-2">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyJojoBikes