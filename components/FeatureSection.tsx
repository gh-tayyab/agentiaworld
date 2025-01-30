"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection() {
  const features = [
    { title: "Smart Solar Energy Management", image: "/images/group11.svg" },
    { title: "Advanced AI for Manufacturing", image: "/images/group12.svg" },
    { title: "Predictive Maintenance", image: "/images/group13.svg" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0B0D1A] to-[#121429] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
      {/* Left Text Section */}
      <div className="max-w-lg mb-8 md:mb-0">
        <h4 className="text-sm text-purple-400 uppercase">OUR AI PROJECTS</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Redefine the way you do business with Smarttrak Solutions
        </h2>
        <p className="text-gray-400 mt-4">
          Our purpose is to deliver excellence in service and execution.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full shadow-md"
        >
          Learn More →
        </motion.button>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/50 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all"
          >
            <Image src={feature.image} alt={feature.title} width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
