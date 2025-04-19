
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Terms & Conditions</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Please read these terms and conditions carefully before using our website and services.
            </p>
          </div>
          
          <div className="prose max-w-none mb-12 animate-fade-in">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access the website.</p>
            
            <h2>2. User Accounts</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
            
            <h2>3. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Furnimal and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            
            <h2>4. Products</h2>
            <p>All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.</p>
            <p>Product images are for illustrative purposes only. The actual product may vary due to product enhancement, packaging changes, or manufacturing processes. Colors displayed may vary depending on your monitor settings.</p>
            
            <h2>5. Pricing and Payment</h2>
            <p>All prices are listed in US dollars and are subject to change without notice. We strive to ensure all pricing information is accurate, but errors may occur. If we discover an error in the price of products you have ordered, we will inform you as soon as possible and give you the option of reconfirming your order at the correct price or canceling it.</p>
            
            <h2>6. Shipping and Delivery</h2>
            <p>Delivery times indicated on our website are estimates and not guaranteed delivery dates. We are not responsible for delays that are beyond our control.</p>
            
            <h2>7. Returns and Refunds</h2>
            <p>Our return and refund policy is outlined in our Returns & Exchange page. By making a purchase, you agree to these policies.</p>
            
            <h2>8. Limitation of Liability</h2>
            <p>In no event shall Furnimal, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            
            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            
            <h2>10. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
            
            <p>Last updated: April 19, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
