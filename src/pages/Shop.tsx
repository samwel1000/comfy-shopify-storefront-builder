
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    id: "1",
    name: "Modern Lounge Chair",
    price: 289.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Minimalist Coffee Table",
    price: 199.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1206&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: false,
    isSale: false,
  },
  {
    id: "4",
    name: "Wooden Dining Set",
    price: 799.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    category: "Dining",
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Queen Size Bed Frame",
    price: 499.99,
    originalPrice: 549.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Bedroom",
    isNew: false,
    isSale: true,
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All" },
    { id: "living-room", name: "Living Room" },
    { id: "bedroom", name: "Bedroom" },
    { id: "dining", name: "Dining" },
    { id: "office", name: "Office" },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Shop</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Explore our collection of premium furniture pieces designed to enhance your living spaces.
            </p>
          </div>
          
          {/* Category Pills */}
          <div className="mb-8 overflow-x-auto animate-slide-in-right">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"} 
                  onClick={() => setActiveCategory(category.id)}
                  className="transition-all duration-300 hover-scale"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
            {products.map((product, index) => (
              <div key={product.id} 
                className="animate-scale-in hover-scale" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={product.category}
                  isNew={product.isNew}
                  isSale={product.isSale}
                />
              </div>
            ))}
          </div>
          
          <Button 
            onClick={() => navigate("/categories")}
            className="bg-furniture-accent hover:bg-furniture-brown transition-all duration-300 mx-auto block animate-fade-in"
          >
            View All Categories
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
