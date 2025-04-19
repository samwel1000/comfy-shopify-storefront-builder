
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Help Center</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Find answers to common questions and get support for your furniture needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2 animate-slide-in-right">
              <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                  <AccordionContent>
                    Standard shipping typically takes 3-7 business days, depending on your location. 
                    Express shipping options are available for faster delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day return policy for most items. Products must be in original condition 
                    with all packaging. Custom items are non-returnable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer assembly services?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer professional assembly services for an additional fee. 
                    You can select this option during checkout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I track my order?</AccordionTrigger>
                  <AccordionContent>
                    Once your order ships, you'll receive a tracking number via email. 
                    You can also track your order in your account dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we ship to many countries worldwide. International shipping costs and 
                    delivery times vary by location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="animate-scale-in">
              <h2 className="text-2xl font-medium mb-6">Contact Support</h2>
              <div className="rounded-lg border border-border p-6">
                <p className="mb-4">Need more help? Our customer support team is available:</p>
                <p className="mb-2"><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
                <p className="mb-6"><strong>Phone:</strong> (555) 123-4567</p>
                <a 
                  href="mailto:support@furnimal.com" 
                  className="bg-furniture-accent hover:bg-furniture-brown text-white px-4 py-2 rounded transition-colors inline-block"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
