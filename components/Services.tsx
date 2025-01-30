import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Server, Clock } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0B0D1A] to-[#121429] text-white py-16 px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-500 mb-4">Our Services</h2>
          <p className="text-gray-300">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-gray-900 p-6 rounded-xl">
            <CardContent>
              <div className="flex justify-center items-center bg-purple-700 p-4 rounded-full mb-4">
                <Brain className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-2">
                Agentic Consulting
              </h3>
              <p className="text-gray-300 text-center mb-4">
                Pre-defined Strategic guidance on implementing Agentic solutions for your business needs.
              </p>
              <h4 className="text-2xl font-bold text-center text-pink-500 mb-2">$999/month</h4>
              <ul className="text-gray-300 mb-4">
                <li className="flex items-center gap-2">
                  <Clock size={20} /> AI Readiness Assessment
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Technology Stack Review
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Implementation Roadmap
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> ROI Analysis
                </li>
              </ul>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gray-900 p-6 rounded-xl">
            <CardContent>
              <div className="flex justify-center items-center bg-purple-700 p-4 rounded-full mb-4">
                <Bot className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-2">
                Deep Agentic
              </h3>
              <p className="text-gray-300 text-center mb-4">
                Custom Agentic Solutions tailored specifically to solve your business challenges.
              </p>
              <h4 className="text-2xl font-bold text-center text-pink-500 mb-2">$1499/month</h4>
              <ul className="text-gray-300 mb-4">
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Custom Model Development
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Model Training & Testing
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Deployment Support
                </li>
              </ul>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-gray-900 p-6 rounded-xl">
            <CardContent>
              <div className="flex justify-center items-center bg-purple-700 p-4 rounded-full mb-4">
                <Server className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-2">
                Agentic Enterprise
              </h3>
              <p className="text-gray-300 text-center mb-4">
                Transform your business empire with a swarm of thousands of Agentic agents.
              </p>
              <h4 className="text-2xl font-bold text-center text-pink-500 mb-2">$2499/month</h4>
              <ul className="text-gray-300 mb-4">
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Data Processing
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Predictive Analytics
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Visual Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={20} /> Specialized Reports
                </li>
              </ul>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
