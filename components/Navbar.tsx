"use client";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-0 gap-x-7 right-0 flex justify-center w-full">
      <div className="sm:flex justify-between px-4 lg:flex gap-x-4 w-full items-center">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </div>

        {/* Navbar Menu (Hidden on mobile) */}
        <div className="hidden lg:flex items-center bg-gray-800/50 rounded-full px-6 py-2 backdrop-blur-md">
          <a href="#" className="mx-4 text-gray-300 hover:text-white">
            HOME
          </a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">
            ABOUT US
          </a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">
            SOLUTIONS
          </a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">
            CAREER
          </a>
          <a href="#" className="mx-4 text-gray-300 hover:text-white">
            CONTACT US
          </a>
        </div>

        {/* Login Button */}
        <button className="ml-4 px-4 py-2 bg-purple-600 rounded-full">
          LOGIN
        </button>
      </div>
    </nav>
  );
}
