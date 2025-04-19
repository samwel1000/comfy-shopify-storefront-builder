
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Sofa",
    excerpt: "Finding the right sofa for your living space can be challenging. Here are some tips to help you make the right choice.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
    date: "April 15, 2025",
    author: "Jane Smith"
  },
  {
    id: 2,
    title: "2025 Interior Design Trends",
    excerpt: "Discover the hottest interior design trends that will dominate homes this year.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1158&ixlib=rb-4.0.3",
    date: "April 10, 2025",
    author: "Mark Johnson"
  },
  {
    id: 3,
    title: "Sustainable Furniture: What You Need to Know",
    excerpt: "Learn about eco-friendly furniture options and how they can benefit both your home and the environment.",
    image: "https://images.unsplash.com/photo-1615800002234-05c4d488696c?auto=format&fit=crop&q=80&w=1187&ixlib=rb-4.0.3",
    date: "April 5, 2025",
    author: "Sarah Williams"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Blog</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Explore our articles for interior design inspiration, furniture care tips, and the latest trends.
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
