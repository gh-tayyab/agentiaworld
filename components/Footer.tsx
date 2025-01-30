import { Image } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 px-6">
        <div className="border-t-2"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
        {/* Reach Us Section */}
        <div>
          <h4 className="font-semibold mb-4">Agentia World</h4>
          <p className="flex items-center space-x-2">
            <span>Transforming businesses with vertical AI solutions.</span>
          </p>
          
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#121429] p-6 rounded-lg">
          <h4 className="font-semibold mb-4">Join Our Newsletter</h4>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 rounded-md bg-[#0A0A23] text-white border-none outline-none mb-3"
          />
          <button className="w-full bg-[#000E15] text-white py-2 rounded-md hover:bg-green-700">
            Subscribe
          </button>
          <p className="text-gray-400 text-sm mt-2">
            * Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
