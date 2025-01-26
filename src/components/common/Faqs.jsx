'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqsData = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primaryColor">
                    Frequently Asked Questions
                </h2>
                {/* Changed grid to show 2 FAQs per row with responsive design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqData?.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-300 h-fit"
                        >
                            <button
                                className="w-full flex justify-between rounded-2xl items-center p-4 md:p-6 hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="font-medium text-left text-gray-900">
                                    {faq.qustion}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 ml-2"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden border-t"
                                        style={{ position: 'relative' }}
                                    >
                                        <div className="p-4 md:p-6 pt-0 text-gray-700">
                                            {faq.answer.split('\n').map((paragraph, i) => (
                                                <p key={i} className="mb-3 last:mb-0">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqsData;