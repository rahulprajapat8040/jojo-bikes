"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaUsers, FaFlagCheckered } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import Counter from '../common/Counter';
import RentalModal from './RentalModal';
import Link from "next/link";

const HeroSection = ({ data }) => {
  const sectionRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const alternateContent = {
    heading1: "Experience Freedom",
    heading2: "On Two Wheels",
    paragraph: "Discover the joy of riding with our premium bikes. Whether you're a casual rider or an enthusiast, we have the perfect ride for you.",
  };

  const handleScrollClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsExpanded(!isExpanded);
    setIsMouseActive(false);

    setTimeout(() => {
      setIsMouseActive(true);
    }, 1500);
  };

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  // Add Headlight Component
  const Headlight = () => (
    <motion.div
      className="absolute z-20"
      style={{
        right: '23%',
        top: '15%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Main headlight glow */}
      <motion.div
        className="relative"
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(15px)',
          }}
        />
        {/* Inner bright core */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(5px)',
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Light beam */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[500px] -translate-x-1/2 origin-top"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          filter: 'blur(20px)',
          transformOrigin: 'top',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scaleY: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale }}
        >
          <Image
            src="/assets/home-banner.webp"
            fill
            priority
            quality={100}
            style={{
              objectFit: "cover",
            }}
            alt="Hero Background"
            className="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>

        {/* Expanding Circle Background */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{
                clipPath: `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`,
                backgroundColor: "#1a1a1a"
              }}
              animate={{
                clipPath: `circle(200% at ${mousePosition.x}px ${mousePosition.y}px)`,
              }}
              exit={{
                clipPath: `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            />
          )}
        </AnimatePresence>

        {/* Floating Elements */}
        {/* Larger Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/15 backdrop-blur-sm"
            style={{
              width: Math.random() * 15 + 8, // Increased size
              height: Math.random() * 15 + 8, // Increased size
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Decorative Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute backdrop-blur-md"
            style={{
              width: Math.random() * 150 + 100, // Much larger sizes
              height: Math.random() * 150 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(${Math.random() * 360}deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
              borderRadius: i % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '64% 36% 27% 73% / 30% 30% 70% 70%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
              rotate: [0, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}

        {/* Large Glowing Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 200 + 150, // Very large sizes
              height: Math.random() * 200 + 150,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
              filter: 'blur(20px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Add Headlight component before the content container */}
        <Headlight />

        {/* Content Container */}
        <div className="container mx-auto px-4 h-screen relative">
          <motion.div
            className="absolute inset-0 flex items-center justify-start lg:justify-center"
            style={{ opacity }}
          >
            <div className="max-w-3xl relative z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? "expanded" : "normal"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 1 }}
                    className={`h-1 ${isExpanded ? 'bg-white' : 'bg-white'} mb-8`}
                  />
                  <motion.h1
                    className={`text-6xl text-center md:text-7xl font-bold leading-tight ${isExpanded ? 'text-white' : 'text-white'
                      } drop-shadow-lg`}
                  >
                    {isExpanded ? alternateContent.heading1 : data.heading1}
                  </motion.h1>
                  <motion.h2
                    className={`text-4xl text-center md:text-5xl font-bold mt-4 ${isExpanded
                      ? 'text-white'
                      : 'text-white'
                      } drop-shadow-lg`}
                  >
                    {isExpanded ? alternateContent.heading2 : data.heading2}
                  </motion.h2>
                  <motion.p
                    className={`mt-6 text-center text-lg ${isExpanded ? 'text-gray-200' : 'text-gray-200'
                      } max-w-2xl drop-shadow-lg`}
                  >
                    {isExpanded ? alternateContent.paragraph : data.paragraph}
                  </motion.p>
                  <motion.div
                    className="flex justify-center gap-6 mt-10"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: isExpanded ? "#fff" : "#fff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsModalOpen(true)}
                      className="px-10 py-4 bg-white text-black rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-white/25"
                    >
                      Rent Now
                    </motion.button>
                    <Link href={'tel: 8503027210'}>
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255,255,255,0.1)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                      >
                        Call Now
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Updated Scroll Indicator */}
        <AnimatePresence mode="wait">
          {isMouseActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="absolute flex  items-center flex-col w-full gap-4 bottom-8  cursor-pointer z-30"
              onClick={handleScrollClick}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  boxShadow: isExpanded
                    ? ["0 0 0 rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0 rgba(255,255,255,0)"]
                    : ["0 0 0 rgba(0,0,0,0)", "0 0 20px rgba(0,0,0,0.3)", "0 0 0 rgba(0,0,0,0)"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  boxShadow: {
                    duration: 1.5,
                    repeat: Infinity
                  }
                }}
                className={`w-6 h-10 border-2 ${isExpanded ? 'border-white' : 'border-white'
                  } rounded-full flex justify-center p-2 backdrop-blur-sm hover:scale-110 transition-transform`}
              >
                <motion.div
                  className={`w-1 h-1 ${isExpanded ? 'bg-white' : 'bg-white'
                    } rounded-full`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-white text-center mt-2 font-light tracking-wider"
              >
                {isExpanded ? 'RESET VIEW' : 'CHANGE VIEW'}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
      <RentalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className='w-full py-12 bg-gradient-to-tr from-white via-gray-200 to-gray-100'>
        <div className='max-w-6xl w-full mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b py-5'>
            <motion.div
              className='relative group p-6 rounded-xl overflow-hidden transition-all duration-300'
              style={{
                background: '#fff',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative flex flex-col items-center gap-3'>
                <FaUsers className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                  <Counter end={25000} duration={2500} />
                </div>
                <p className='text-black font-semibold text-lg text-center'>Happy Customers</p>
              </div>
            </motion.div>

            <motion.div
              className='relative bg-white group p-6 rounded-xl overflow-hidden transition-all duration-300'
              style={{
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative flex flex-col items-center gap-3'>
                <MdOutlineDirectionsBike className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                  <Counter end={1000} duration={2500} />
                </div>
                <p className='text-black font-semibold text-lg text-center'>BIKES IN GARAGE</p>
              </div>
            </motion.div>

            <motion.div
              className='relative group bg-white p-6 rounded-xl overflow-hidden transition-all duration-300'
              style={{
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-green-600/30 via-emerald-600/30 to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative flex flex-col items-center gap-3'>
                <FaFlagCheckered className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                  <Counter end={100000} duration={2500} />
                </div>
                <p className='text-black font-semibold text-lg text-center'>TOTAL KILOMETER/MIL</p>
              </div>
            </motion.div>

            <motion.div
              className='relative bg-white group p-6 rounded-xl overflow-hidden transition-all duration-300'
              style={{
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative flex flex-col items-center gap-3'>
                <RiCustomerService2Line className='text-yellow-400 group-hover:text-yellow-300 transform group-hover:scale-110 transition-all duration-300' size={50} />
                <div className='text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>
                  <Counter end={50} duration={2500} />
                </div>
                <p className='text-black font-semibold text-lg text-center'>BIKES CENTER SOLUTIONS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
