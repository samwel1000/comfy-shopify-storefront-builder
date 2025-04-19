
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-furniture-beige pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Furnimal</h3>
            <p className="text-furniture-gray">
              Premium furniture for modern living. Designed with care and built to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-furniture-gray hover:text-furniture-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-furniture-gray hover:text-furniture-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-furniture-gray hover:text-furniture-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-furniture-gray hover:text-furniture-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-furniture-gray hover:text-furniture-accent">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-furniture-gray hover:text-furniture-accent">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-furniture-gray hover:text-furniture-accent">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-furniture-gray hover:text-furniture-accent">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-furniture-gray hover:text-furniture-accent">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-furniture-gray hover:text-furniture-accent">Shipping</Link>
              </li>
              <li>
                <Link to="/returns" className="text-furniture-gray hover:text-furniture-accent">Returns & Exchange</Link>
              </li>
              <li>
                <Link to="/terms" className="text-furniture-gray hover:text-furniture-accent">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-furniture-gray hover:text-furniture-accent">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-furniture-gray hover:text-furniture-accent">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Contact</h3>
            <div className="space-y-2">
              <p className="text-furniture-gray flex items-start">
                <span className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                123 Furniture Street, Design District, City
              </p>
              <p className="text-furniture-gray flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                +1 234 567 8901
              </p>
              <p className="text-furniture-gray flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                info@furnimal.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-furniture-gray/20">
          <p className="text-center text-furniture-gray">
            © {new Date().getFullYear()} Furnimal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
