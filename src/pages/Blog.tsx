
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Sofa for Kenyan Homes",
    excerpt: "Finding the right sofa for your Kenyan living space can be challenging. Here are some tips to help you make the right choice considering our climate and lifestyle.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    date: "April 15, 2025",
    author: "Jane Kamau"
  },
  {
    id: 2,
    title: "2025 Interior Design Trends in Kenya",
    excerpt: "Discover the hottest interior design trends that will dominate Kenyan homes this year, combining global influences with local materials and aesthetics.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    date: "April 10, 2025",
    author: "Mark Ochieng"
  },
  {
    id: 3,
    title: "Sustainable Furniture: Supporting Kenyan Craftsmen",
    excerpt: "Learn about eco-friendly furniture options made by local artisans and how they can benefit both your home and the environment.",
    image: "https://images.unsplash.com/photo-1615800002234-05c4d488696c?auto=format&fit=crop&q=80&w=1187&ixlib=rb-4.0.3",
    date: "April 5, 2025",
    author: "Sarah Wanjiru"
  },
  {
    id: 4,
    title: "Maximizing Small Living Spaces in Urban Kenya",
    excerpt: "Creative furniture solutions for apartment living in Nairobi and other urban centers in Kenya.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    date: "March 28, 2025",
    author: "David Mwangi"
  },
  {
    id: 5,
    title: "Caring for Wooden Furniture in Kenya's Climate",
    excerpt: "Tips and tricks to maintain and protect your wooden furniture from the effects of Kenya's varying climate conditions.",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    date: "March 20, 2025",
    author: "Patricia Akinyi"
  },
  {
    id: 6,
    title: "Blending Traditional and Modern Furniture in Kenyan Homes",
    excerpt: "How to create a harmonious interior by combining traditional Kenyan furniture pieces with modern designs.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    date: "March 15, 2025",
    author: "James Kiprop"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="flex items-center space-x-2 mb-4 animate-fade-in">
            <a href="/" className="text-furniture-gray hover:text-furniture-accent">Home</a>
            <span className="text-furniture-gray">/</span>
            <span className="text-furniture-accent">Blog</span>
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Bright Furniture Blog</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Explore our articles for interior design inspiration, furniture care tips, and the latest trends 
              in Kenyan homes and spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="border border-border rounded-lg overflow-hidden hover-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-furniture-gray">{post.date} • {post.author}</span>
                  <h3 className="text-xl font-medium mt-2 mb-3">{post.title}</h3>
                  <p className="text-furniture-gray mb-4">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-furniture-accent font-medium hover:text-furniture-brown transition-colors story-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
