
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "living-room",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    count: 45,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    count: 32,
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1615800002234-05c4d488696c?auto=format&fit=crop&q=80&w=1187&ixlib=rb-4.0.3",
    count: 28,
  },
  {
    id: "office",
    name: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    count: 24,
  },
];

const ProductCategories = () => {
  return (
    <section className="section-padding bg-furniture-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Shop By Category</h2>
          <p className="section-subtitle">
            Browse our extensive collection of furniture categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg">
              <Link to={`/category/${category.id}`}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-medium">{category.name}</h3>
                    <p className="text-sm">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
