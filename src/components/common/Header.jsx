"use client";
import { motion, LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about-jojo-bikes",
    },
    {
      name: "Bike Rent",
      url: "/bike-rent-in-jaipur",
    },
    {
      name: "Scooter Rent",
      url: "/scooter-rent-jaipur",
    },
    {
      name: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center text-black fixed z-50 inset-x-0 top-0 items-center bg-white shadow-lg h-20"
      >
        <div className="max-w-6xl w-full flex justify-center">
          <nav className="w-full relative">
            <div className="flex items-center justify-between w-full">
              <div>
                <Image
                  src={"/JOJOLOGO.png"}
                  width={90}
                  height={90}
                  alt="Jojobikes"
                  className="object-cover"
                />
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <ul className="flex gap-8">
                  {links.map((items) => (
                    <li key={items.name}>
                      <Link href={items.url} className="hover:text-primary transition-colors">
                        {items.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="https://order.jojobikerental.in/"
                  target="_blank"
                  className="bg-primaryColor text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Quick Book
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2"
                  animate={isOpen ? "open" : "closed"}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M4 6H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      variants={{
                        closed: { d: "M4 6H20" },
                        open: { d: "M4 18L20 6" }
                      }}
                    />
                    <motion.path
                      d="M4 12H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                      }}
                    />
                    <motion.path
                      d="M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      variants={{
                        closed: { d: "M4 18H20" },
                        open: { d: "M4 6L20 18" }
                      }}
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div 
              className="absolute top-full left-0 right-0 w-full bg-white shadow-lg md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-4 px-4">
                {links.map((items) => (
                  <li key={items.name} className="py-2">
                    <Link 
                      href={items.url} 
                      className="block hover:text-primary transition-colors"
                      onClick={handleLinkClick}
                    >
                      {items.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 ">
                  <Link 
                    href="https://order.jojobikerental.in/"
                    target="_blank"
                    className="block bg-primaryColor w-full text-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Quick Book
                  </Link>
                </li>
              </ul>
            </motion.div>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
