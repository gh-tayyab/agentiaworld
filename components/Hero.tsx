"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-[#0B0D1A] to-[#121429] text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
      {/* Navbar */}
      <nav className="absolute top-6 left-0 right-0 flex justify-between items-center lg:justify-center lg:px-0 w-full">
        {/* Logo */}
        <div className="mx-4 lg:mr-4">
          <Link href={"/"}><Image src={Logo} alt="Logo" width={50} height={50} /></Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center bg-gray-800/50 rounded-full px-6 py-2 backdrop-blur-md">
          <a href="#" className="mx-4 text-gray-300 hover:text-white">HOME</a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">ABOUT US</a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">SOLUTIONS</a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">CAREER</a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">CONTACT US</a>
        </div>

        {/* Login Button */}
        <button className="hidden lg:block px-4 py-2 bg-purple-600 rounded-full lg:ml-4">LOGIN</button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-x-4 mx-4">
          <button className="px-4 py-2 bg-purple-600 rounded-full">LOGIN</button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 p-6 flex flex-col items-center space-y-4 lg:hidden">
          <Link href="/" className="text-gray-300 hover:text-white">HOME</Link>
          <Link href="#" className="text-gray-300 hover:text-white">ABOUT US</Link>
          <Link href="#" className="text-gray-300 hover:text-white">SOLUTIONS</Link>
          <Link href="#" className="text-gray-300 hover:text-white">CAREER</Link>
          <Link href="#" className="text-gray-300 hover:text-white">CONTACT US</Link>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center justify-center min-h-screen"> 
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Your digital twin <br /> solution with Agentia World
        </motion.h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Grow smarter, grow faster as we need solutions at the right place and at
          Smarttrak we are empowering all your digital twin needs.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full shadow-md"
        >
          GET STARTED →
        </motion.button>
      </div>
    </section>
  );
}
