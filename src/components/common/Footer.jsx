import Link from "next/link"
import Image from "next/image"

const socialIcons = {
  facebook: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    color: "#1877F2"
  },
  instagram: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    color: "#E4405F"
  },
  x: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: "#000000"
  }
};

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-white to-gray-100 via-white border-t">
            <div className="max-w-7xl mx-auto px-4 pt-16">
                {/* Upper Section with Logo and Description */}
                <div className="flex flex-col items-center text-center mb-16 space-y-6">
                    <Link href="/" className="block">
                        <Image
                            src="/JOJOLOGO.png"
                            alt="Jojo Bikes Logo"
                            width={200}
                            height={80}
                            className="h-20 w-auto"
                        />
                    </Link>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Experience the freedom of two-wheel travel with Jojo Bikes. We provide premium bike and scooter rental services in Jaipur with exceptional customer service.
                    </p>
                    <div className="flex gap-4">
                        {Object.entries(socialIcons).map(([platform, { icon, color }]) => (
                            <Link key={platform} 
                            target="_blank"
                               href={`https://${platform === 'x' ? 'twitter' : platform}.com/${platform === 'x' ? 'jojotravel_' : 'jojotravel.in'}`}
                               className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
                               style={{ 
                                 '--hover-color': color,
                               }}>
                                <div className="hover:text-[var(--hover-color)] group-hover:bg-opacity-10 rounded-full">
                                    {icon}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 mb-16">
                    {/* Quick Links */}
                    <div className="space-y-4 lg:border-r lg:border-gray-100 lg:pr-8">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Quick Links
                        </h3>
                        <div className="flex flex-col space-y-2.5">
                            {['Home', 'About Us', 'Book Now', 'Contact Us'].map(link => (
                                <Link key={link} 
                                    href={link === 'Book Now' 
                                        ? 'https://order.jojobikerental.in/' 
                                        : link === 'About Us'
                                        ? '/about-jojo-bike-rental'
                                        : `/${link.toLowerCase().replace(' ', '-')}`}
                                    className="text-gray-600 hover:text-primaryColor transition-colors flex items-center group w-fit">
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className="space-y-4 lg:border-r lg:border-gray-100 lg:pr-8">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Get in Touch
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5">
                            {[
                                '+91 8503027210',
                                '+91 7300404204',
                                '+91 8290690300',
                                '+91 9799994204'
                            ].map((phone, index) => (
                                <a key={phone} 
                                   href={`tel:${phone.replace(/\s/g, '')}`}
                                   className="text-gray-600 hover:text-primaryColor transition-colors flex items-center gap-2 w-fit">
                                    <svg className="w-4 h-4 text-primaryColor/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-sm hover:translate-x-1 transition-transform">{phone}</span>
                                </a>
                            ))}
                            <a href="mailto:Info@jojobikerental.com" 
                               className="text-gray-600 hover:text-primaryColor transition-colors flex items-center gap-2 w-fit pt-1">
                                <svg className="w-4 h-4 text-primaryColor/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="hover:translate-x-1 transition-transform">Info@jojobikerental.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Download App */}
                    <div className="space-y-4 lg:border-r lg:border-gray-100 lg:pr-8">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Download App
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <a href="https://play.google.com/store/apps/details?id=com.jojorental.customer" 
                               target="_blank"
                               className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-all group w-full sm:w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-300">GET IT ON</span>
                                    <span className="text-sm font-medium">Google Play</span>
                                </div>
                            </a>
                            <div className="flex items-center gap-3 bg-gray-100 text-gray-400 px-4 py-2.5 rounded-lg w-full sm:w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <div className="flex flex-col">
                                    <span className="text-xs">COMING SOON ON</span>
                                    <span className="text-sm font-medium">App Store</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Download our app for the best experience. Book bikes, track rides, and manage your rentals on the go.
                            </p>
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Visit Us
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-600 leading-relaxed">
                                Corporate office :- G-68 Near Gulab Ji Tea,<br/> 
                                Ganpati Plaza, M I Road Jaipur,<br/>
                                Rajasthan - 302001
                            </p>
                            <Link href="https://maps.app.goo.gl/QsjbHJJaJZSaVt1o6" 
                               target="_blank"
                               className="inline-flex items-center text-primaryColor hover:text-primaryColor/80 transition-colors gap-2 group w-fit">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="hover:translate-x-1 transition-transform">View on Map</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-200 py-4">
                    <p className="text-center text-gray-600">
                        © {new Date().getFullYear()} Jojo Bike Rental Jaipur. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer