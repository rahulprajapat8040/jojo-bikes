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
                            <Link href="/contact-us" className="text-gray-600 hover:text-primaryColor transition-colors">Contact Us</Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-800 ">Services</h2>
                        <div className="flex flex-col space-y-2">
                            <Link href="/bike-rent-in-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Bike Rental</Link>
                            <Link href="/scooter-rent-jaipur" className="text-gray-600 hover:text-primaryColor transition-colors">Scooter Rental</Link>
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
                        <Link href={'https://play.google.com/store/apps/details?id=com.jojorental.customer&hl=en_US'} target="_blank">
                            <svg viewBox="0 0 135 40" className="w-36 h-12 cursor-pointer hover:opacity-80 transition-opacity">
                                <path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z" fill="#000" />
                                <path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.2 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5z" fill="#a6a6a6" />
                                <path d="M47.4 10.2c0 .8-.2 1.5-.7 2-.5.6-1.2.9-2 .9-.8 0-1.5-.3-2-.9-.5-.6-.8-1.3-.8-2.1s.2-1.5.7-2.1c.5-.6 1.2-.9 2-.9.4 0 .8.1 1.1.2.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.5-.7-.6 0-1.1.2-1.5.7-.4.4-.6 1-.6 1.7s.2 1.3.6 1.7c.4.4.9.7 1.5.7.6 0 1.1-.2 1.5-.7.3-.3.4-.7.5-1.2h-2v-.7h2.7v.3zM52 7.7h-2.5v1.8h2.3v.7h-2.3v1.8H52v.7h-3.3V7h3.3v.7zM55.3 12.7h-.8V7.7h-1.7V7H57v.7h-1.7v5zM59.9 12.7V7h.8v5.7h-.8zM64.1 12.7h-.8V7.7h-1.7V7h4.1v.7H64v5zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.1s.3-1.5.9-2.1c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.1 0 .8-.3 1.5-.9 2.1zm-3.8-.4c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 12.7V7h.9l2.9 4.6h0l0-4.6h.8v5.7h-.8l-3.1-4.8h0l0 4.8h-.7z" fill="#fff" stroke="#fff" strokeWidth=".2" strokeMiterlimit="10" />
                                <path d="M68.1 21.8c-2.3 0-4.2 1.9-4.2 4.3 0 2.4 1.9 4.3 4.2 4.3 2.3 0 4.2-1.9 4.2-4.3 0-2.4-1.9-4.3-4.2-4.3zm0 6.8c-1.2 0-2.3-1.1-2.3-2.6s1.1-2.6 2.3-2.6c1.2 0 2.3 1 2.3 2.6 0 1.5-1.1 2.6-2.3 2.6zm-8.9-6.8c-2.3 0-4.2 1.9-4.2 4.3 0 2.4 1.9 4.3 4.2 4.3 2.3 0 4.2-1.9 4.2-4.3 0-2.4-1.9-4.3-4.2-4.3zm0 6.8c-1.2 0-2.3-1.1-2.3-2.6s1.1-2.6 2.3-2.6c1.2 0 2.3 1 2.3 2.6 0 1.5-1.1 2.6-2.3 2.6zm-10.6-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.3 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" fill="#fff" />
                                <path d="M10.4 7.5c-.3.4-.5.9-.5 1.6v24.8c0 .7.2 1.2.5 1.6l.1.1 13.9-13.9v-.3L10.4 7.5z" fill="url(#a)" />
                                <path d="M27.9 25.1l-4.6-4.6v-.3l4.6-4.6.1.1 5.5 3.1c1.6.9 1.6 2.3 0 3.2l-5.5 3.1-.1 0z" fill="url(#b)" />
                                <path d="M28 25l-4.7-4.7L10.4 33.2c.5.5 1.4.6 2.3.1l15.3-8.3" fill="url(#c)" />
                                <path d="M28 15.6L12.7 7.3c-.9-.5-1.8-.4-2.3.1l12.9 12.9 4.7-4.7z" fill="url(#d)" />
                                <defs>
                                    <linearGradient id="a" x1="21.8" y1="33.3" x2="5.0" y2="16.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#00A0FF" />
                                        <stop offset=".007" stopColor="#00A1FF" />
                                        <stop offset=".26" stopColor="#00BEFF" />
                                        <stop offset=".512" stopColor="#00D2FF" />
                                        <stop offset=".76" stopColor="#00DFFF" />
                                        <stop offset="1" stopColor="#00E3FF" />
                                    </linearGradient>
                                    <linearGradient id="b" x1="33.8" y1="20.4" x2="9.6" y2="20.4" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#FFE000" />
                                        <stop offset=".409" stopColor="#FFBD00" />
                                        <stop offset=".775" stopColor="#FFA500" />
                                        <stop offset="1" stopColor="#FF9C00" />
                                    </linearGradient>
                                    <linearGradient id="c" x1="24.8" y1="22.3" x2="2.0" y2="45.1" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#FF3A44" />
                                        <stop offset="1" stopColor="#C31162" />
                                    </linearGradient>
                                    <linearGradient id="d" x1="7.2" y1="0.1" x2="17.4" y2="10.3" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#32A071" />
                                        <stop offset=".069" stopColor="#2DA771" />
                                        <stop offset=".476" stopColor="#15CF74" />
                                        <stop offset=".801" stopColor="#06E775" />
                                        <stop offset="1" stopColor="#00F076" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                        {/* <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                                className="w-36 cursor-pointer hover:opacity-80 transition-opacity"
                                alt="App Store" /> */}
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
                            © {new Date().getFullYear()} Jojo Travels Jaipur. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer