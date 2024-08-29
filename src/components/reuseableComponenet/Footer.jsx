import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <Container>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
            <img
              aria-hidden="true"
              alt="Two Cat Designs Logo"
              src="/images/Logo.png"
              className="w-[168px] h-[102px]"
            />
            <p className="mt-[44.53px] text-[18px] w-[60%] leading-[27px] font-normal font-inter">
              Stay updated with the latest trends and insights in the design
              industry.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:mr-10 mb-6 md:mb-0">
            <h4 className="text-[23.68px] leading-[28.42px] font-semibold font-fixture">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:mr-10 mb-6 md:mb-0">
            <h4 className="text-[23.68px] leading-[28.42px] font-semibold font-fixture">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Mascot Logo
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Emblem Logos
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E9E8E8] hover:text-primary font-poppins">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media & Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[23.68px] leading-[28.42px] font-semibold mb-2 font-fixture">
              Social Media
            </h4>
            <div className="flex space-x-4 mb-6 md:mb-10 py-10 justify-center">
              <a href="#" className="bg-[#22A8C6] rounded-full p-2 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="bg-[#22A8C6] rounded-full p-2 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-[#22A8C6] rounded-full p-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="#" className="bg-[#22A8C6] rounded-full p-2 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/phone-icon.png"
                  alt="Phone Icon"
                  className="w-5 h-5"
                />
                <span className="font-poppins">(607) 555-0101</span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/sms-icons.png"
                  alt="Email Icon"
                  className="w-5 h-5"
                />
                <span className="font-poppins">contact@info.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-white font-poppins font-normal  text-[18px] leading-[32.5px] text-center md:text-left">
            © Copyright 2024, All Rights Reserved By
            <a href="#" className="text-[#22A8C6] hover:underline font-poppins">
              Two Cat Designs
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <img
              src="/images/footer-payment-method.png"
              alt="Payment Methods"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
