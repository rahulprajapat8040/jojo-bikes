import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Newsletter Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                            Subscribe to our newsletter
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Stay updated with our latest offers and bike rental services.
                        </p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Quick Links</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className="text-gray-600 hover:text-primaryColor transition-colors">Home</Link>
                            <Link href="/about-jojo-bikes" className="text-gray-600 hover:text-primaryColor transition-colors">About Us</Link>
                            <Link href="/contact-us" className="text-gray-600 hover:text-primaryColor transition-colors">Contact Us</Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Services</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="/bike-rent-in-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Bike Rental</Link>
                            <Link href="/scooter-rent-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Scooter Rental</Link>
                            <Link href="/term-condition" className="text-gray-600 hover:text-primaryColor transition-colors">Term & Condition</Link>

                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Support</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="tel: +91 8503027210 " className="text-gray-600 hover:text-primaryColor transition-colors">+91 8503027210 </Link>
                            <Link href="tel: +91 7300404204" className="text-gray-600 hover:text-primaryColor transition-colors">+91 7300404204 </Link>
                            <Link href="tel: +91 8290690300 " className="text-gray-600 hover:text-primaryColor transition-colors">+91 8290690300 </Link>
                            <Link href="tel: +91 9799994204  " className="text-gray-600 hover:text-primaryColor transition-colors">+91 9799994204  </Link>
                            <Link href="tel: +91 1414070200   " className="text-gray-600 hover:text-primaryColor transition-colors">+91 1414070200   </Link>


                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white ">Download App</h2>
                        <Link href={'https://play.google.com/store/apps/details?id=com.jojorental.customer&hl=en_US'} target="_blank">
                            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                                className="w-36 h-24 cursor-pointer hover:opacity-80 transition-opacity"
                                alt="Google Play" />
                        </Link>
                        {/* <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                                className="w-36 cursor-pointer hover:opacity-80 transition-opacity"
                                alt="App Store" /> */}
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-primaryColor/10 dark:border-gray-700 pt-8">
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
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                            © {new Date().getFullYear()} Jojo Travels Jaipur. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer