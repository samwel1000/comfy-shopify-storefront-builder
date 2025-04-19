
import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  {
    id: "3",
    name: "Scandinavian Sofa",
    price: 599.99,
    originalPrice: 699.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Wooden Dining Set",
    price: 799.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1615796030859-31a561061db7?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "dining",
    categoryName: "Dining",
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Queen Size Bed Frame",
    price: 499.99,
    originalPrice: 549.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "bedroom",
    categoryName: "Bedroom",
    isNew: false,
    isSale: true,
  },
  {
    id: "6",
    name: "Compact Office Desk",
    price: 249.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "office",
    categoryName: "Office",
    isNew: true,
    isSale: false,
  },
  {
    id: "7",
    name: "Garden Lounge Set",
    price: 899.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    category: "outdoor",
    categoryName: "Outdoor",
    isNew: false,
    isSale: true,
  },
  {
    id: "8",
    name: "Bedroom Nightstand",
    price: 129.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "bedroom",
    categoryName: "Bedroom",
    isNew: false,
    isSale: false,
  },
  {
    id: "9",
    name: "Nairobi Leather Armchair",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "10",
    name: "Mombasa Rattan Chair",
    price: 199.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "11",
    name: "Nakuru Storage Cabinet",
    price: 449.99,
    originalPrice: 549.99,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: false,
    isSale: true,
  },
  {
    id: "12",
    name: "Kisumu Bamboo Shelf",
    price: 249.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: false,
    isSale: false,
  },
  {
    id: "13",
    name: "Eldoret King Bed",
    price: 999.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "bedroom",
    categoryName: "Bedroom",
    isNew: true,
    isSale: false,
  },
  {
    id: "14",
    name: "Malindi 6-Seater Dining Table",
    price: 799.99,
    originalPrice: 899.99,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3",
    category: "dining",
    categoryName: "Dining",
    isNew: false,
    isSale: true,
  },
  {
    id: "15",
    name: "Naivasha Outdoor Table Set",
    price: 699.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "outdoor",
    categoryName: "Outdoor",
    isNew: true,
    isSale: false,
  },
  {
    id: "16",
    name: "Lamu Wicker Chair",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&q=80&w=1180&ixlib=rb-4.0.3",
    category: "outdoor",
    categoryName: "Outdoor",
    isNew: false,
    isSale: true,
  },
  {
    id: "17",
    name: "Machakos Executive Desk",
    price: 649.99,
    originalPrice: 749.99,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "office",
    categoryName: "Office",
    isNew: false,
    isSale: true,
  },
  {
    id: "18",
    name: "Kitui Ergonomic Chair",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1505843490578-27dbb2f11caa?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3",
    category: "office",
    categoryName: "Office",
    isNew: true,
    isSale: true,
  },
  {
    id: "19",
    name: "Nyeri Bookshelf",
    price: 349.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: false,
    isSale: false,
  },
  {
    id: "20",
    name: "Karen Coffee Table Set",
    price: 369.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3",
    category: "living-room",
    categoryName: "Living Room",
    isNew: true,
    isSale: true,
  }
];

const Category = () => {
  const { id } = useParams();
  const category = categories.find(cat => cat.id === id);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-medium mb-4">Category Not Found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Link to="/categories" className="bg-furniture-accent hover:bg-furniture-brown text-white px-6 py-2 rounded inline-block">
            Browse All Categories
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const categoryProducts = products.filter(product => product.category === category.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center space-x-2 mb-4 animate-fade-in">
            <Link to="/" className="text-furniture-gray hover:text-furniture-accent">Home</Link>
            <span className="text-furniture-gray">/</span>
            <Link to="/categories" className="text-furniture-gray hover:text-furniture-accent">Categories</Link>
            <span className="text-furniture-gray">/</span>
            <span className="text-furniture-accent">{category.name}</span>
          </div>
        
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-medium mb-4">{category.name}</h1>
            <p className="text-furniture-gray max-w-3xl mx-auto">
              {category.description}
            </p>
            <p className="text-sm text-furniture-accent mt-2">
              Available in our Kenyan showrooms located in Nairobi, Mombasa, Kisumu, and Nakuru
            </p>
          </div>
          
          {/* Hero image */}
          <div className="relative rounded-lg overflow-hidden mb-12 h-64 md:h-80 animate-scale-in">
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
            {categoryProducts.map((product, index) => (
              <div key={product.id} className="animate-scale-in hover-scale" style={{ animationDelay: `${index * 0.05}s` }}>
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
              </div>
            ))}
          </div>
          
          {categoryProducts.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-lg mb-4">No products available in this category yet.</p>
              <Link to="/categories" className="bg-furniture-accent hover:bg-furniture-brown text-white px-6 py-2 rounded inline-block">
                Browse All Categories
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
