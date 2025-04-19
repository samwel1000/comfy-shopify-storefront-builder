
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sample categories and products data - in a real app, this would come from an API
const allCategories = [
  { id: "all", name: "All Categories" },
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "dining", name: "Dining" },
  { id: "office", name: "Office" },
  { id: "outdoor", name: "Outdoor" },
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

const Categories = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState("featured");
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  
  // Filter products based on selected category and filters
  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (showSaleOnly && !product.isSale) {
      return false;
    }
    if (showNewOnly && !product.isNew) {
      return false;
    }
    return true;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default: // featured
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="section-padding bg-furniture-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="section-title">Shop Our Collection</h1>
            <p className="section-subtitle">
              Discover quality furniture pieces for every room in your home, available for delivery across Kenya.
            </p>
            <p className="text-sm text-furniture-gray mt-2">
              Visit our showrooms in Nairobi, Mombasa, Kisumu, and Nakuru
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8 animate-slide-in-right">
            <h3 className="font-medium text-lg mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => value && setSelectedCategory(value)}>
                {allCategories.map((category) => (
                  <ToggleGroupItem 
                    key={category.id} 
                    value={category.id} 
                    className="border border-furniture-gray/20 hover:bg-furniture-accent hover:text-white transition-all duration-300"
                  >
                    {category.name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Switch id="sale-filter" checked={showSaleOnly} onCheckedChange={setShowSaleOnly} />
                <label htmlFor="sale-filter" className="text-sm cursor-pointer">Sale Items</label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="new-filter" checked={showNewOnly} onCheckedChange={setShowNewOnly} />
                <label htmlFor="new-filter" className="text-sm cursor-pointer">New Arrivals</label>
              </div>
            </div>
            
            {/* Sort options */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <select 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-furniture-gray/20 rounded px-2 py-1 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sortedProducts.map((product, index) => (
              <div key={product.id} className="animate-scale-in hover-scale" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard
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
          
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg">No products found with the selected filters.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory("all");
                  setShowSaleOnly(false);
                  setShowNewOnly(false);
                }}
                className="mt-4 bg-furniture-accent hover:bg-furniture-brown"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
