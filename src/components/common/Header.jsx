"use client";
import { motion, LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
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
        className="flex justify-center text-black fixed z-50 inset-0 items-center bg-white shadow-lg h-20"
      >
        <div className="max-w-6xl w-full flex justify-center px-2 ">
          <nav className="w-full">
            <div className="flex items-center justify-between w-full">
              <div>
                <Image
                  src={"/JOJOLOGO.png"}
                  width={90}
                  height={90}
                  alt="Jojobikes"
                  className=" object-cover "
                />
              </div>
              <ul className="hidden sm:flex gap-10">
                {links.map((items) => (
                  <li key={items.name}>
                    <Link href={items.url}>{items.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="block sm:hidden">
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                stroke="#000"
                strokeWidth={0.6}
                fill="rgba(0,0,0,0)"
                strokeLinecap="round"
                style={{
                  cursor: "pointer",
                }}
              >
                <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                  <animate
                    dur="0.2s"
                    attributeName="d"
                    values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                    fill="freeze"
                    begin="start.begin"
                  />
                  <animate
                    dur="0.2s"
                    attributeName="d"
                    values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                    fill="freeze"
                    begin="reverse.begin"
                  />
                </path>
                <rect width={10} height={10} stroke="none">
                  <animate
                    dur="2s"
                    id="reverse"
                    attributeName="width"
                    begin="click"
                  />
                </rect>
                <rect width={10} height={10} stroke="none">
                  <animate
                    dur="0.001s"
                    id="start"
                    attributeName="width"
                    values="10;0"
                    fill="freeze"
                    begin="click"
                  />
                  <animate
                    dur="0.001s"
                    attributeName="width"
                    values="0;10"
                    fill="freeze"
                    begin="reverse.begin"
                  />
                </rect>
              </svg>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
