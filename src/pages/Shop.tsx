
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
    price: 34999,
    originalPrice: 44999,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Minimalist Coffee Table",
    price: 25999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1206&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: false,
    isSale: false,
  },
  {
    id: "3",
    name: "Scandinavian Sofa",
    price: 69999,
    originalPrice: 89999,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Wooden Dining Set",
    price: 89999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1615796030859-31a561061db7?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Dining",
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Queen Size Bed Frame",
    price: 59999,
    originalPrice: 64999,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Bedroom",
    isNew: false,
    isSale: true,
  },
  {
    id: "6",
    name: "Compact Office Desk",
    price: 29999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Office",
    isNew: true,
    isSale: false,
  },
  {
    id: "7",
    name: "Garden Lounge Set",
    price: 99999,
    originalPrice: 119999,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3",
    category: "Outdoor",
    isNew: false,
    isSale: true,
  },
  {
    id: "8",
    name: "Bedroom Nightstand",
    price: 14999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Bedroom",
    isNew: false,
    isSale: false,
  },
  {
    id: "9",
    name: "Nairobi Leather Armchair",
    price: 39999,
    originalPrice: 49999,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "10",
    name: "Mombasa Rattan Chair",
    price: 19999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: true,
    isSale: false,
  },
  {
    id: "11",
    name: "Nakuru Storage Cabinet",
    price: 44999,
    originalPrice: 54999,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: false,
    isSale: true,
  },
  {
    id: "12",
    name: "Kisumu Bamboo Shelf",
    price: 24999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: false,
    isSale: false,
  },
  {
    id: "13",
    name: "Eldoret King Bed",
    price: 99999,
    originalPrice: 119999,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Bedroom",
    isNew: true,
    isSale: false,
  },
  {
    id: "14",
    name: "Malindi 6-Seater Dining Table",
    price: 79999,
    originalPrice: 89999,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3",
    category: "Dining",
    isNew: false,
    isSale: true,
  },
  {
    id: "15",
    name: "Naivasha Outdoor Table Set",
    price: 69999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Outdoor",
    isNew: true,
    isSale: false,
  },
  {
    id: "16",
    name: "Lamu Wicker Chair",
    price: 15999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&q=80&w=1180&ixlib=rb-4.0.3",
    category: "Outdoor",
    isNew: false,
    isSale: true,
  },
  {
    id: "17",
    name: "Machakos Executive Desk",
    price: 64999,
    originalPrice: 74999,
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Office",
    isNew: false,
    isSale: true,
  },
  {
    id: "18",
    name: "Kitui Ergonomic Chair",
    price: 29999,
    originalPrice: 34999,
    image: "https://images.unsplash.com/photo-1505843490578-27dbb2f11caa?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3",
    category: "Office",
    isNew: true,
    isSale: true,
  },
  {
    id: "19",
    name: "Nyeri Bookshelf",
    price: 34999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: false,
    isSale: false,
  },
  {
    id: "20",
    name: "Karen Coffee Table Set",
    price: 36999,
    originalPrice: 39999,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3",
    category: "Living Room",
    isNew: true,
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
    { id: "outdoor", name: "Outdoor" },
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === "all" 
    ? products
    : products.filter(product => product.category.toLowerCase().replace(' ', '-') === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Shop</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Explore our collection of premium furniture pieces designed to enhance your living spaces. 
              We deliver across Kenya with locations in Nairobi, Mombasa, Kisumu, and Nakuru.
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
            {filteredProducts.map((product, index) => (
              <div key={product.id} 
                className="animate-scale-in hover-scale" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price / 100}
                  originalPrice={product.originalPrice ? product.originalPrice / 100 : undefined}
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
