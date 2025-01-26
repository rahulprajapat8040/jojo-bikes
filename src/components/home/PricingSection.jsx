import Image from 'next/image';

export default function PricingSection() {
    return (
        <section
            className="relative bg-cover bg-bottom h-[500px] bg-no-repeat py-16"
            style={{
                backgroundImage: 'url(/bg-hero-02-800x960.jpg)',
                clipPath: 'path("M 0 0 L 100% 0 L 100% 85% C 75% 85%, 50% 100%, 25% 85% L 0 85% Z")'
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                style={{
                    clipPath: 'path("M 0 0 L 100% 0 L 100% 85% C 75% 85%, 50% 100%, 25% 85% L 0 85% Z")'
                }}
            ></div>

            <div className="relative z-10 text-center text-white">
                {/* Title and Subtitle */}
                <h2 className="text-4xl font-bold mb-4">Our Pricing Includes</h2>
                <p className="text-lg mb-8">Bikes & electric scooters for renting at low prices</p>

                {/* Features Icons */}
                <div className="flex justify-center gap-6 flex-wrap">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card flex flex-col items-center justify-center bg-white text-gray-800 p-6 w-32 h-32 text-center transform transition-all duration-300 hover:scale-105"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                                perspective: '1000px',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <div
                                className="transform transition-transform duration-300 hover:-translate-y-2"
                                style={{ transform: 'translateZ(20px)' }}
                            >
                                <div className="text-4xl mb-2">{feature.icon}</div>
                                <span className="text-sm font-medium">{feature.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    { icon: '🛵', label: 'Helmets' },
    { icon: '🎧', label: 'Assistance' },
    { icon: '🔒', label: 'Insurance' },
    { icon: '❌', label: 'Cancellation' },
    { icon: '💰', label: 'Discounts' },
    { icon: '🗺️', label: 'Full Routes' },
];
