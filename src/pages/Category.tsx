
import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";

// Sample categories and products data
const categories = [
  {
    id: "living-room",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    description: "Create a comfortable and stylish living space with our collection of sofas, chairs, coffee tables, and more.",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    description: "Transform your bedroom into a relaxing retreat with our beds, nightstands, dressers, and more.",
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1615800002234-05c4d488696c?auto=format&fit=crop&q=80&w=1187&ixlib=rb-4.0.3",
    description: "Gather around beautifully crafted dining tables and chairs for memorable meals with family and friends.",
  },
  {
    id: "office",
    name: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    description: "Create a productive workspace with our ergonomic desks, chairs, and storage solutions.",
  },
  {
    id: "outdoor",
    name: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    description: "Enhance your outdoor living spaces with durable and stylish furniture designed for comfort and relaxation.",
  },
];

const products = [
  {
    id: "1",
    name: "Modern Lounge Chair",
    price: 289.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Minimalist Coffee Table",
    price: 199.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1206&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: false,
    isSale: false,
  },
  // Add more products here with appropriate categories
];

const Category = () => {
  const { id } = useParams();
  const category = categories.find(cat => cat.id === id);
  
  if (!category) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="section-title">Category Not Found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/categories" className="btn-primary inline-block">
            Browse All Categories
          </Link>
        </div>
      </div>
    );
  }
  
  const categoryProducts = products.filter(product => product.category === category.id);
  
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">{category.name}</h1>
          <p className="section-subtitle">{category.description}</p>
        </div>
        
        {/* Hero image */}
        <div className="relative rounded-lg overflow-hidden mb-12 h-64 md:h-80">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-medium">{category.name} Collection</h2>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice || undefined}
              image={product.image}
              category={product.categoryName}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
        
        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg mb-4">No products available in this category yet.</p>
            <Link to="/categories" className="btn-primary inline-block">
              Browse All Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
