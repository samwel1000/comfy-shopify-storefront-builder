
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-furniture-beige min-h-[600px] flex items-center">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 lg:py-20">
        <div className="flex flex-col justify-center z-10 animate-fade-in">
          <h4 className="text-furniture-accent font-medium mb-2">New Collection 2025</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-jost font-semibold mb-6 leading-tight">
            Discover Stylish <br />
            <span className="text-furniture-accent">Furniture</span> For <br />
            Your Home
          </h1>
          <p className="text-furniture-gray text-lg mb-8 max-w-lg">
            Transform your living spaces with our curated collection of premium 
            furniture pieces designed for comfort and aesthetic appeal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/categories" className="btn-secondary">
              Browse Categories
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1047&ixlib=rb-4.0.3"
              alt="Modern living room with stylish furniture"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-furniture-accent rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">
                  50%
                </div>
                <div>
                  <p className="text-furniture-gray text-sm">Limited Time</p>
                  <p className="font-medium text-lg">Special Discount</p>
                  <Link to="/sale" className="text-furniture-accent text-sm font-medium">
                    Shop Sale →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
