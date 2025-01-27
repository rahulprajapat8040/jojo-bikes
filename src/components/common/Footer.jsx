import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Newsletter Section */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold text-gray-800  mb-4">
                            Subscribe to our newsletter
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Stay updated with our latest offers and bike rental services.
                        </p>
                    </div>
                </div> */}

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 ">Quick Links</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className="text-gray-600 hover:text-primaryColor transition-colors">Home</Link>
                            <Link href="/about-jojo-bikes" className="text-gray-600 hover:text-primaryColor transition-colors">About Us</Link>
                            <Link href="https://order.jojobikerental.in/" target="_blank" className="text-gray-600 hover:text-primaryColor transition-colors">Book Now</Link>
                            <Link href="/contact-us" className="text-gray-600 hover:text-primaryColor transition-colors">Contact Us</Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 ">Services</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="/bike-rent-in-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Bike Rental</Link>
                            <Link href="/scooter-rent-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Scooter Rental</Link>
                            <Link href="/scooter-rent-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Rent Activa</Link>
                            <Link href="/term-condition" className="text-gray-600 hover:text-primaryColor transition-colors">Term & Condition</Link>

                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 ">Support</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="tel: +91 8503027210 " className="text-gray-600 hover:text-primaryColor transition-colors">+91 8503027210 </Link>
                            <Link href="tel: +91 7300404204" className="text-gray-600 hover:text-primaryColor transition-colors">+91 7300404204 </Link>
                            <Link href="tel: +91 8290690300 " className="text-gray-600 hover:text-primaryColor transition-colors">+91 8290690300 </Link>
                            <Link href="tel: +91 9799994204  " className="text-gray-600 hover:text-primaryColor transition-colors">+91 9799994204  </Link>
                            <Link href="tel: +91 1414070200   " className="text-gray-600 hover:text-primaryColor transition-colors">+91 1414070200   </Link>


                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800  ">Download App</h2>
                        <a href="https://play.google.com/store/apps/details?id=com.jojorental.customer&hl=en_US" target='_blank' className="inline-flex items-center px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
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
                        {/* <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                                className="w-36 cursor-pointer hover:opacity-80 transition-opacity"
                                alt="App Store" /> */}
                        <div className="inline-flex items-center px-6 py-2 bg-gray-200 text-gray-800 rounded-lg">
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
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-primaryColor/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-6">
                            {['facebook', 'twitter', 'instagram',].map((social) => (
                                <a key={social} href={`https://${social}.com`}
                                    className="text-gray-600 hover:text-primaryColor transform hover:scale-110 transition-all">
                                    <img src={`https://www.svgrepo.com/show/303${social === 'facebook' ? '114/facebook-3-logo' :
                                        social === 'twitter' ? '115/twitter-3-logo' :
                                            social === 'instagram' ? '145/instagram-2-1-logo' :
                                                '145/linkedin-logo'}.svg`}
                                        className="h-6 w-6"
                                        alt={social} />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center">
                            © {new Date().getFullYear()} Jojo Bike Rental Jaipur. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer