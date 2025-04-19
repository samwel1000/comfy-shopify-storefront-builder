
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Shop</h1>
          <p className="text-furniture-gray mb-12 max-w-3xl">
            Explore our collection of premium furniture pieces designed to enhance your living spaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shop content will be implemented later */}
            <div className="p-8 border border-border rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Shop content coming soon</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
