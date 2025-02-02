'use client'
import { motion, useInView } from 'motion/react'
import Image from "next/image"
import Link from 'next/link'
import { useRef, useState } from 'react'
import RentalModal from './RentalModal'

const MobileApp = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const inView1 = useInView(ref1, { once: true })
    const inView2 = useInView(ref2, { once: true })
      const [isModalOpen, setIsModalOpen] = useState(false);
    


    return (
        <>
            <section className="bg-gray-50 py-6 md:py-0">
                <div
                    ref={ref1}
                    className="max-w-6xl mx-auto px-4">
                    <div className='flex justify-center pt-0'> <Image src={'/JOJOLOGO.png'} width={150} height={150} alt='jojo-logo-dark' /></div>
                    <h1 className="text-center  text-5xl font-semibold text-primaryColor drop-shadow-lg">Rent Faster, Better Experience</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-32 w-full">
                        <motion.div

                            initial={{ y: 100, opacity: 0 }}
                            animate={inView1 ? { y: 0, opacity: 1 } : {}}
                            transition={{ delay: 2 }}
                            className="w-full md:w-1/2">
                            <Image
                                src={'/assets/mobile-app.webp'}
                                className="translate-y-0 md:translate-y-32 z-20 mx-auto"
                                width={500}
                                height={800}
                                alt="mobile-app"
                            />
                        </motion.div>
                        <div className="w-full md:w-1/2 mt-8 md:mt-0">
                            <ol className="space-y-6 md:space-y-8">
                                <div className="flex">
                                    <h6 className="text-5xl md:text-7xl font-bold leading-none">1.</h6>
                                    <div className="max-w-xl">
                                        <li className="px-2 md:px-4 text-lg md:text-xl font-semibold">Download Our App</li>
                                        <p className="px-2 md:px-4 text-sm md:text-base text-gray-600">
                                            Incididunt ut labore et dolore magna aliqua ust enim veniam quis nostrud.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex pt-3 md:pt-6">
                                    <h6 className="text-5xl md:text-7xl font-bold leading-none">2.</h6>
                                    <div className="max-w-xl">
                                        <li className="px-2 md:px-4 text-lg md:text-xl font-semibold">Instant Rentals, Feel Good</li>
                                        <p className="px-2 md:px-4 text-sm md:text-base text-gray-600">
                                            Exercitation ullamco laboris nisi ut aliquip sed duis aute irure dolor in reprehend.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex pt-3 md:pt-6">
                                    <h6 className="text-5xl md:text-7xl font-bold leading-none">3.</h6>
                                    <div className="max-w-xl">
                                        <li className="px-2 md:px-4 text-lg md:text-xl font-semibold">With GPS Support</li>
                                        <p className="px-2 md:px-4 text-sm md:text-base text-gray-600">
                                            Occaecat cupidatat non proident sunt clpa qui officia deserunt mollit.
                                        </p>
                                    </div>
                                </div>
                            </ol>
                            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
                                <a href="https://play.google.com/store/apps/details?id=com.jojorental.customer&hl=en_US" target='_blank' className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mr-3"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-xs">Available on</span>
                                        <span className="text-sm font-semibold">Google Play</span>
                                    </div>
                                </a>
                                <div className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mr-3"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-xs">Coming Soon on</span>
                                        <span className="text-sm font-semibold">App Store</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
                                <button 
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center px-6 py-3 bg-primaryColor text-white rounded-lg hover:bg-gray-800 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">Rent Now</span>
                                    </div>
                                </button>
                                <Link href={'tel:08503027210'} className="flex flex-col">
                                    <div className="inline-flex items-center px-6 py-3 bg-transparent border-primaryColor border text-gray-800 rounded-lg">
                                        <span className="text-xs">Call Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RentalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
    )
}

export default MobileApp