
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sample products data - in a real app, this would come from an API
const products = [
  {
    id: "1",
    name: "Modern Lounge Chair",
    price: 289.99,
    originalPrice: 349.99,
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    ],
    category: "living-room",
    categoryName: "Living Room",
    description: "This modern lounge chair combines style and comfort with its ergonomic design and premium materials. Perfect for your living room, bedroom, or reading nook.",
    features: [
      "Ergonomic design for maximum comfort",
      "High-quality wooden frame",
      "Premium upholstery",
      "Easy assembly",
      "Available in multiple colors"
    ],
    specifications: {
      dimensions: "33\"W x 35\"D x 31\"H",
      weight: "45 lbs",
      material: "Wood, Fabric",
      warranty: "3 years",
      location: "Available in our Nairobi and Mombasa showrooms"
    },
    inStock: true,
  },
  {
    id: "2",
    name: "Minimalist Coffee Table",
    price: 199.99,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1206&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    ],
    category: "living-room",
    categoryName: "Living Room",
    description: "This minimalist coffee table features clean lines and a sleek design that complements any modern living space.",
    features: [
      "Clean, minimalist design",
      "Durable construction",
      "Scratch-resistant surface",
      "Spacious surface area",
      "Hidden storage compartment"
    ],
    specifications: {
      dimensions: "47\"W x 28\"D x 16\"H",
      weight: "62 lbs",
      material: "Engineered wood, Metal",
      warranty: "2 years",
      location: "Available in all our Kenya showrooms"
    },
    inStock: true,
  },
  {
    id: "3",
    name: "Scandinavian Sofa",
    price: 599.99,
    originalPrice: 699.99,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0b1ea?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
    ],
    category: "living-room",
    categoryName: "Living Room",
    description: "This elegant Scandinavian-inspired sofa features clean lines, comfortable cushions, and a timeless design that will elevate any living space.",
    features: [
      "Premium fabric upholstery",
      "Solid wood frame",
      "High-density foam cushions",
      "Removable and washable covers",
      "Available in multiple colors"
    ],
    specifications: {
      dimensions: "78\"W x 36\"D x 32\"H",
      weight: "150 lbs",
      material: "Wood, Fabric",
      warranty: "5 years",
      location: "Available in our Nairobi showroom"
    },
    inStock: true,
  },
  {
    id: "4",
    name: "Wooden Dining Set",
    price: 799.99,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1615796030859-31a561061db7?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    ],
    category: "dining",
    categoryName: "Dining",
    description: "This handcrafted wooden dining set includes a solid table and six matching chairs, perfect for family gatherings and entertaining guests.",
    features: [
      "Solid wood construction",
      "Durable finish",
      "Comfortable padded chairs",
      "Spacious table surface",
      "Easy assembly"
    ],
    specifications: {
      dimensions: "Table: 72\"L x 36\"W x 30\"H, Chairs: 18\"W x 20\"D x 38\"H",
      weight: "Table: 90 lbs, Chairs: 15 lbs each",
      material: "Solid Acacia Wood",
      warranty: "5 years",
      location: "Available in our Nairobi and Kisumu showrooms"
    },
    inStock: true,
  },
  {
    id: "5",
    name: "Queen Size Bed Frame",
    price: 499.99,
    originalPrice: 549.99,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    ],
    category: "bedroom",
    categoryName: "Bedroom",
    description: "This elegant queen-size bed frame features a sturdy construction and a stylish upholstered headboard that will transform your bedroom.",
    features: [
      "Queen size (60\" x 80\")",
      "Upholstered headboard",
      "Strong wooden slats",
      "No box spring required",
      "Easy assembly"
    ],
    specifications: {
      dimensions: "65\"W x 85\"L x 45\"H",
      weight: "95 lbs",
      material: "Wood, Fabric",
      warranty: "3 years",
      location: "Available in all our Kenya showrooms"
    },
    inStock: true,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImagePreview, setShowImagePreview] = useState(false);
  
  // If product not found, redirect to categories
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for is not available.</p>
          <Button 
            onClick={() => navigate("/categories")}
            className="bg-furniture-accent hover:bg-furniture-brown"
          >
            Browse Categories
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${quantity} ${product.name} added to your cart!`);
    // In a real app, this would update the cart state
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div 
                className="relative overflow-hidden rounded-lg cursor-zoom-in bg-gray-100 min-h-[400px] flex items-center justify-center"
                onClick={() => setShowImagePreview(true)}
              >
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-auto object-contain animate-fade-in"
                />
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`border-2 rounded cursor-pointer transition-all w-20 h-20 flex-shrink-0 hover-scale ${
                        selectedImageIndex === index ? 'border-furniture-accent' : 'border-transparent hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-2">
                <Link to="/" className="text-furniture-gray hover:text-furniture-accent">Home</Link>
                <span className="text-furniture-gray">/</span>
                <Link to="/categories" className="text-furniture-gray hover:text-furniture-accent">Categories</Link>
                <span className="text-furniture-gray">/</span>
                <Link to={`/category/${product.category}`} className="text-furniture-gray hover:text-furniture-accent">{product.categoryName}</Link>
              </div>
            
              <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
              <p className="text-furniture-gray mb-4">{product.categoryName}</p>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl text-furniture-accent font-medium">KSh {(product.price * 130).toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-furniture-gray line-through ml-3 text-lg">
                    KSh {(product.originalPrice * 130).toLocaleString()}
                  </span>
                )}
              </div>
              
              <p className="text-furniture-dark-gray mb-6">
                {product.description}
              </p>
              
              {/* Quantity selector */}
              <div className="mb-6">
                <label className="block mb-2 font-medium">Quantity</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-accent transition-colors"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button
                    type="button"
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-accent transition-colors"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to cart button */}
              <div className="mb-8">
                <Button 
                  onClick={handleAddToCart} 
                  className="w-full py-3 h-12 bg-furniture-accent hover:bg-furniture-brown text-white hover-scale"
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
              
              {/* Features */}
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-medium text-xl mb-3">Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Specifications */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-medium text-xl mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="mb-2">
                      <span className="text-furniture-gray capitalize">{key}:</span>
                      <span className="ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Preview Modal */}
      {showImagePreview && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowImagePreview(false)}
        >
          <div className="max-w-4xl max-h-[90vh] relative animate-scale-in">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover-scale"
              onClick={() => setShowImagePreview(false)}
            >
              ✕
            </button>
            
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {product.images.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full ${selectedImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
