
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Returns & Exchange</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Our hassle-free return and exchange policy ensures your complete satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-medium mb-6">Return Policy</h2>
              <div className="prose max-w-none">
                <p className="mb-4">We want you to be completely satisfied with your purchase. If you're not happy with your item, you can return it within 30 days of delivery for a full refund or exchange.</p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Eligible Items</h3>
                <p className="mb-4">Most items in new, unused condition with original packaging and tags can be returned. Please note the following exceptions:</p>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Custom or made-to-order furniture</li>
                  <li>Clearance or final sale items</li>
                  <li>Items marked as non-returnable</li>
                  <li>Items damaged through customer misuse</li>
                </ul>
                
                <h3 className="text-xl font-medium mb-3">Return Process</h3>
                <ol className="list-decimal pl-5 mb-6 space-y-2">
                  <li>Contact our customer service within 30 days of delivery</li>
                  <li>Fill out the return form provided by our team</li>
                  <li>Package your item in its original packaging</li>
                  <li>Use the provided return shipping label (if applicable)</li>
                  <li>Drop off at the designated carrier or schedule a pickup</li>
                </ol>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <h2 className="text-2xl font-medium mb-6">Exchange Policy</h2>
              <div className="prose max-w-none mb-8">
                <p className="mb-4">If you'd like to exchange an item for a different size, color, or style, please follow our return process and place a new order for the desired item.</p>
                
                <h3 className="text-xl font-medium mb-3">Defective or Damaged Items</h3>
                <p className="mb-4">If your item arrives damaged or defective, please contact us within 48 hours of delivery. We'll arrange for a replacement or repair at no additional cost.</p>
                
                <h3 className="text-xl font-medium mb-3">Refund Process</h3>
                <p className="mb-4">Once we receive and inspect your return, we'll process your refund within 5-7 business days. The refund will be issued to your original payment method.</p>
                
                <p>Please note that shipping fees are non-refundable, and return shipping costs may be deducted from your refund unless the return is due to our error or a defective product.</p>
              </div>
              
              <div className="bg-furniture-light-gray p-6 rounded-lg hover-scale transition-all">
                <h3 className="text-xl font-medium mb-3">Need Help?</h3>
                <p className="mb-4">Our customer service team is here to assist you with returns and exchanges.</p>
                <div className="flex space-x-4">
                  <a href="/contact" className="bg-furniture-accent hover:bg-furniture-brown text-white px-4 py-2 rounded transition-colors">
                    Contact Us
                  </a>
                  <a href="/help" className="border border-furniture-accent text-furniture-accent hover:bg-furniture-accent hover:text-white px-4 py-2 rounded transition-colors">
                    View FAQs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
