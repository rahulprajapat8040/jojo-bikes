'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
    const pathName = usePathname();
    const pathSegments = pathName.split('/').filter(segment => segment);

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

    return (
        <section className="flex justify-center w-full h-screen relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/assets/bike-bg.mp4" type="video/mp4" />
            </video>
            <div className="px-2 my-4 flex flex-col items-center justify-center md:mt-24 py-20 w-full max-w-6xl relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
                    Rent a Bike in Jaipur
                </h1>
                {renderBreadcrumbs()}
            </div>
        </section>
    );
};

export default Hero;