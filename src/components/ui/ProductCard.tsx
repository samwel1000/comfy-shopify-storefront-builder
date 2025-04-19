
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isSale = false,
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-md mb-4">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-furniture-accent text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>

        {/* Quick action buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-furniture-accent hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M21 8.25c0 2.485-2.02 4.5-4.5 4.5s-4.5-2.015-4.5-4.5S14.02 3.75 16.5 3.75s4.5 2.015 4.5 4.5z"></path>
              <path d="M7.5 6v12.75m4.5-12.75H3m9 12.75H3"></path>
            </svg>
          </button>
          <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-furniture-accent hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
          </button>
          <button className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-furniture-accent hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="px-1">
        <p className="text-furniture-gray text-sm">{category}</p>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-lg hover:text-furniture-accent transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center mt-1">
          <span className="font-medium text-furniture-accent">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-furniture-gray line-through ml-2 text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
