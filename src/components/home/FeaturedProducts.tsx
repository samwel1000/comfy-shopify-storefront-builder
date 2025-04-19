
import React from "react";
import ProductCard from "../ui/ProductCard";

// Sample product data
const featuredProducts = [
  {
    id: "1",
    name: "Modern Lounge Chair",
    price: 289.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1064&ixlib=rb-4.0.3",
    category: "Chairs",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Minimalist Coffee Table",
    price: 199.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=1206&ixlib=rb-4.0.3",
    category: "Tables",
    isNew: false,
    isSale: false,
  },
  {
    id: "3",
    name: "Scandinavian Sofa",
    price: 599.99,
    originalPrice: 699.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Sofas",
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Wooden Dining Set",
    price: 799.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1604578762246-48370ce9b386?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    category: "Dining",
    isNew: true,
    isSale: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of premium furniture pieces designed to elevate your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice || undefined}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
