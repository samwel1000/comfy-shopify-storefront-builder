
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Privacy Policy</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              At Furnimal, we respect your privacy and are committed to protecting your personal data.
            </p>
          </div>
          
          <div className="prose max-w-none mb-12 animate-fade-in">
            <h2>1. Information We Collect</h2>
            <p>We collect several types of information from and about users of our website, including:</p>
            <ul>
              <li>Personal identifiers such as name, postal address, email address, phone number</li>
              <li>Payment information (credit card numbers, billing addresses)</li>
              <li>Purchase history and preferences</li>
              <li>Browser type, IP address, device information, and operating system</li>
              <li>Usage details such as time spent on the website, pages visited, and clickstream data</li>
            </ul>
            
            <h2>2. How We Collect Your Information</h2>
            <p>We collect information directly from you when you:</p>
            <ul>
              <li>Register on our website</li>
              <li>Place an order</li>
              <li>Subscribe to our newsletter</li>
              <li>Respond to a survey or fill out a form</li>
              <li>Contact customer service</li>
            </ul>
            <p>We also collect information automatically as you navigate through our site through cookies, web beacons, and other tracking technologies.</p>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us:</p>
            <ul>
              <li>To provide, improve, and develop our website and services</li>
              <li>To process and fulfill your orders</li>
              <li>To provide customer support</li>
              <li>To send transactional emails and order updates</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To personalize your experience and deliver content and product offerings</li>
              <li>To protect the security and integrity of our website</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>We may disclose personal information that we collect or you provide:</p>
            <ul>
              <li>To our subsidiaries and affiliates</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, property, or safety, and that of our customers or others</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
            
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul>
              <li>Access to the data we hold about you</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your data</li>
              <li>Restriction or objection to our processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>
            
            <h2>7. Changes to Our Privacy Policy</h2>
            <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.</p>
            
            <h2>8. Contact Information</h2>
            <p>If you have any questions or concerns about this privacy policy, please contact us at:</p>
            <p>Email: privacy@furnimal.com<br />
            Address: 123 Furniture Lane, Suite 100, Furnicity, FC 12345<br />
            Phone: (555) 123-4567</p>
            
            <p>Last updated: April 19, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
