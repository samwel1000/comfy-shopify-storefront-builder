
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">About Us</h1>
          <div className="max-w-3xl mb-12">
            <p className="text-furniture-gray mb-4">
              Furnimal is a premier furniture store dedicated to providing high-quality, 
              stylish furniture for your home and office spaces.
            </p>
            <p className="text-furniture-gray mb-4">
              Founded in 2010, our mission is to create comfortable, beautiful spaces 
              through thoughtfully designed furniture pieces that combine aesthetics, 
              functionality, and durability.
            </p>
            <p className="text-furniture-gray">
              Our team of experienced designers and craftsmen work tirelessly to bring 
              you the best in furniture design and manufacturing.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Our showroom" 
              className="w-full object-cover h-96"
            />
          </div>
          
          <h2 className="text-3xl font-medium mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-border rounded-md">
              <h3 className="text-xl font-medium mb-3">Quality</h3>
              <p className="text-furniture-gray">
                We use only the finest materials and craftsmanship in our furniture.
              </p>
            </div>
            <div className="p-6 border border-border rounded-md">
              <h3 className="text-xl font-medium mb-3">Sustainability</h3>
              <p className="text-furniture-gray">
                We are committed to environmentally responsible manufacturing practices.
              </p>
            </div>
            <div className="p-6 border border-border rounded-md">
              <h3 className="text-xl font-medium mb-3">Innovation</h3>
              <p className="text-furniture-gray">
                We constantly explore new designs and technologies in furniture making.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
