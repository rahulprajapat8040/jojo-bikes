'use client'
import { useRef, useState } from 'react';
import Modal from './Modal';
import { motion, useInView } from 'motion/react'
import RentalModal from '../home/RentalModal';

const SectionData = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <section className="pb-10 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <h1 className='text-center text-5xl py-6 font-semibold text-black'> Our Blogs </h1>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((item) => {
                            const ref = useRef(null);
                            const inView = useInView(ref, { once: true });
                            return (


                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    key={item.id}
                                    className="bg-white rounded-xl group shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="bg-gradient-to-b from-black to-gray-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-600 duration-200 ease-in-out transition-colors  p-6">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-2">
                                            {item.title}
                                        </h2>
                                        <p className="text-blue-50 line-clamp-3 text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                                        <div className="flex justify-end">
                                            <button
                                                onClick={() => setSelectedItem(item)}
                                                className="px-4 py-2 text-sm hover:translate-x-2 font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                                            >
                                                Learn More →
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                    <div className='mt-5 flex justify-center'>
                    <button 
                    onClick={() => setIsModalOpen(true)}
                    className='px-20 py-3  text-white bg-primaryColor hover:rounded-xl rounded-md duration-150'>
                        Rent Now
                    </button>
                </div>
                </div>
            </section>
            <RentalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Modal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.title}
                description={selectedItem?.description}
            />
        </>
    );
};

export default SectionData;