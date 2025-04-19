
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Shipping Information</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Learn about our shipping policies, delivery times, and tracking information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-medium mb-4">Delivery Options</h2>
              
              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6 hover-scale transition-all">
                  <h3 className="text-xl font-medium mb-2">Standard Shipping</h3>
                  <p className="text-furniture-gray mb-3">3-7 business days</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Free for orders over $499</li>
                    <li>$49 flat rate for orders under $499</li>
                    <li>Tracking information provided</li>
                  </ul>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover-scale transition-all">
                  <h3 className="text-xl font-medium mb-2">Express Shipping</h3>
                  <p className="text-furniture-gray mb-3">1-3 business days</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>$99 flat rate for all orders</li>
                    <li>Priority processing and handling</li>
                    <li>Real-time tracking updates</li>
                  </ul>
                </div>
                
                <div className="border border-border rounded-lg p-6 hover-scale transition-all">
                  <h3 className="text-xl font-medium mb-2">White Glove Delivery</h3>
                  <p className="text-furniture-gray mb-3">7-14 business days</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>$199 for standard white glove delivery</li>
                    <li>Includes in-home delivery to your room of choice</li>
                    <li>Assembly and packaging disposal</li>
                    <li>Available for select large furniture items</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-scale-in">
              <div>
                <h2 className="text-2xl font-medium mb-4">Shipping Policy</h2>
                <div className="prose max-w-none">
                  <p>We ship to all 50 states and select international locations. Most in-stock items ship within 24-48 hours of order placement.</p>
                  <p>Delivery times vary based on shipping method, destination, and product availability. Custom and made-to-order items may require longer lead times, which will be noted on the product page.</p>
                  <p>For large furniture pieces, our delivery team will contact you to schedule a delivery date and time window.</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-4">Order Tracking</h2>
                <div className="prose max-w-none">
                  <p>Once your order ships, you'll receive a shipping confirmation email with tracking information.</p>
                  <p>You can also track your order by:</p>
                  <ul>
                    <li>Logging into your account</li>
                    <li>Visiting our order tracking page</li>
                    <li>Contacting our customer service team</li>
                  </ul>
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

export default Shipping;
