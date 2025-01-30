import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-[#0B0D1A] to-[#121429] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-pink-500">Get in Touch</h2>
            <p className="text-gray-700 text-lg">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-gray-600 hover:text-purple-500 h-6 w-6" />
                <span className="text-gray-600">contact@agentiaworld.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-gray-600 hover:text-purple-500 h-6 w-6" />
                <span className="text-gray-600">+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-gray-600 hover:text-purple-500 h-6 w-6" />
                <span className="text-gray-600">123 AI Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="mt-1"
                />
              </div>
              <Button className="w-full bg-gray-600 text-white hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
