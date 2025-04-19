
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductCategories from "@/components/home/ProductCategories";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-furniture-accent font-medium mb-2">Welcome to Furnimal</h4>
                <h2 className="text-3xl md:text-4xl font-medium mb-4">We Create Comfortable Spaces</h2>
                <p className="text-furniture-gray mb-6">
                  Our commitment to quality and design has made us a leading name in the furniture industry. 
                  Each piece is carefully crafted to bring comfort and style to your home.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-2">
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
                        className="w-5 h-5 text-furniture-accent mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 className="font-medium">Premium Quality</h4>
                    </div>
                    <p className="text-furniture-gray text-sm pl-7">
                      Crafted with the finest materials for lasting durability
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
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
                        className="w-5 h-5 text-furniture-accent mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 className="font-medium">Modern Design</h4>
                    </div>
                    <p className="text-furniture-gray text-sm pl-7">
                      Contemporary aesthetics that elevate any space
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
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
                        className="w-5 h-5 text-furniture-accent mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 className="font-medium">Sustainability</h4>
                    </div>
                    <p className="text-furniture-gray text-sm pl-7">
                      Eco-friendly materials and responsible manufacturing
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
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
                        className="w-5 h-5 text-furniture-accent mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 className="font-medium">Customer Support</h4>
                    </div>
                    <p className="text-furniture-gray text-sm pl-7">
                      Dedicated assistance throughout your shopping journey
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1080&ixlib=rb-4.0.3"
                  alt="Modern furniture in stylish interior"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-furniture-accent text-white p-6 rounded-lg hidden md:block">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductCategories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
