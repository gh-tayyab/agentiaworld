import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const LeadersSection = () => {
  const leaders = [
    {
      name: "Sir Zia",
      title: "CEO & Founder",
      description: "AI Researcher. 25+ years of making future tech leaders",
      image: "/images/zia.jpg", // Replace with the correct image path
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sir Qasim",
      title: "CTO",
      description: "5+ years in Machine Learning",
      image: "/images/qasim.jpg", // Replace with the correct image path
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sir Junaid",
      title: "Head of AI Research",
      description: "Hackathon Winner. 5+ years in AI Research",
      image: "/images/junaid.jpg", // Replace with the correct image path
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sir Ameen Alam",
      title: "Head of Cloud Native Engineering",
      description: "Generative AI & Humaniod Robotics Visionary",
      image: "/images/ameen.jpg", // Replace with the correct image path
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-4">Leaders who made this possible</h2>
        <p className="text-gray-300 mb-12">Meet the Experts behind Market Leading Innovation</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="bg-gray-900 text-center py-8 px-4">
              <CardContent>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-pink-500">{leader.name}</h3>
                <p className="text-gray-300 text-sm font-medium">{leader.title}</p>
                <p className="text-gray-400 text-sm mt-2">{leader.description}</p>
                <div className="flex justify-center gap-4 mt-4 text-gray-400">
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} className="hover:text-purple-500" />
                  </a>
                  <a href={leader.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} className="hover:text-purple-500" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
