
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCard";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";

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
    image: "https://images.unsplash.com/photo-1604578762246-48370ce9b386?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
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
    <div className="section-padding bg-furniture-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Shop Our Collection</h1>
          <p className="section-subtitle">
            Discover quality furniture pieces for every room in your home.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="font-medium text-lg mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => value && setSelectedCategory(value)}>
              {allCategories.map((category) => (
                <ToggleGroupItem key={category.id} value={category.id} className="border border-furniture-gray/20 hover:bg-furniture-accent hover:text-white">
                  {category.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
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
          {sortedProducts.map((product) => (
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
  );
};

export default Categories;
