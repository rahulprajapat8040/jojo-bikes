'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Hero = ({data}) => {
    const pathName = usePathname();
    const pathSegments = pathName.split('/').filter(segment => segment);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check if we're at the top of the page
            setIsAtTop(window.scrollY < 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderBreadcrumbs = () => {
        let path = '';
        return (
            <div className="flex items-center gap-2 text-white text-lg">
                <Link href="/" className="hover:underline">Home</Link>
                {pathSegments.map((segment, index) => {
                    path += `/${segment}`;
                    return (
                        <span key={index}>
                            <span className="mx-2">/</span>
                            <span className='capitalize mt-1 inline-block'>{segment.replace(/-/g, ' ')} </span>
                        </span>
                    );
                })}
            </div>
        );
    };

    const handleScrollClick = () => {
        if (isAtTop) {
            // Scroll down by viewport height
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        } else {
            // Scroll back to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Hide the indicator
        setShowScrollIndicator(false);
        
        // Show the indicator again after animation
        setTimeout(() => {
            setShowScrollIndicator(true);
        }, 500);
    };

    return (
        <section className="flex justify-center w-full h-screen relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={data.videoUrl} type="video/mp4" />
            </video>
            <div className="px-2 my-4 flex flex-col items-center justify-center md:mt-24 py-20 w-full max-w-6xl relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
                    {data.title}
                </h1>
                {renderBreadcrumbs()}
                
                {/* Scroll Indicator */}
                <div 
                    onClick={handleScrollClick}
                    className={`fixed bottom-8 cursor-pointer transition-all duration-500 ${
                        showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <div className="flex flex-col items-center text-white">
                        <div className="animate-bounce">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-6 w-6 transform ${!isAtTop ? 'rotate-180' : ''}`}
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                />
                            </svg>
                        </div>
                        <span className="text-sm mt-2">
                            {isAtTop ? 'Scroll Down' : 'Scroll Up'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;