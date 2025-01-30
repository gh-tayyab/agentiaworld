'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  }
  return (
    <>
      {/* Top White Section */}
      <section className="bg-white py-2 px-10 flex justify-between items-center rounded-lg shadow-md w-full">
        <span className="text-gray-700 font-medium">Trusted by 100K+</span>
        {/* Large Screens: Show all icons */}
      <div className="hidden lg:flex space-x-4 gap-10">
        <img src="/icons/icon1.svg" alt="Icon 1" className="w-6 h-6" />
        <img src="/icons/icon2.svg" alt="Icon 2" className="w-6 h-6" />
        <img src="/icons/icon3.svg" alt="Icon 3" className="w-6 h-6" />
        <img src="/icons/icon4.svg" alt="Icon 4" className="w-6 h-6" />
        <img src="/icons/icon5.svg" alt="Icon 5" className="w-6 h-6" />
        <img src="/icons/icon6.svg" alt="Icon 6" className="w-6 h-6" />
        <img src="/icons/icon7.svg" alt="Icon 7" className="w-6 h-6" />
        <img src="/icons/icon8.svg" alt="Icon 8" className="w-6 h-6" />
        <img src="/icons/icon9.svg" alt="Icon 9" className="w-6 h-6" />
      </div>

      {/* Small & Medium Screens: Show one icon and a dropdown */}
      <div className="lg:hidden relative">
        <button onClick={toggleIcons} className="flex items-center space-x-2">
          <img src="/icons/icon10.svg" alt="Main Icon" className="w-6 h-6" />
          <ChevronDown className="w-5 h-5 text-gray-700" />
        </button>

        {showIcons && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 flex flex-wrap gap-2 z-10">
            <img src="/icons/icon2.svg" alt="Icon 2" className="w-6 h-6" />
            <img src="/icons/icon3.svg" alt="Icon 3" className="w-6 h-6" />
            <img src="/icons/icon4.svg" alt="Icon 4" className="w-6 h-6" />
            <img src="/icons/icon5.svg" alt="Icon 5" className="w-6 h-6" />
            <img src="/icons/icon6.svg" alt="Icon 6" className="w-6 h-6" />
            <img src="/icons/icon7.svg" alt="Icon 7" className="w-6 h-6" />
            <img src="/icons/icon8.svg" alt="Icon 8" className="w-6 h-6" />
            <img src="/icons/icon9.svg" alt="Icon 9" className="w-6 h-6" />
          </div>
        )}
      </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-8">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between">
          {/* Right Content (Image) */}
          <div className="lg:w-1/2 flex justify-center lg:order-1 order-2 mt-8 lg:mt-0">
            <img
              src="/images/rocket.svg"
              alt="Rocket Illustration"
              className="w-3/4 lg:w-1/2"
            />
          </div>

          {/* Left Content (Text) */}
          <div className="lg:w-1/2 text-center lg:text-left lg:order-2 order-1">
            <h6 className="text-purple-500 uppercase font-semibold mb-4">About Us</h6>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Smarttrak is an AI Technology Solutions company focused on
            </h1>
            <ul className="text-gray-300 mb-6 list-disc list-inside">
              <li>Revolutionizing your business with our Advanced AI</li>
              <li>Intelligent and Predictive Assets Monitoring</li>
            </ul>
            <p className="text-gray-300 mb-6">
              We help businesses to lead the charge to digital innovation and tap into the power of AI by transforming and creating a competitive advantage that will scale.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 flex items-center gap-2">
              Learn More
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
