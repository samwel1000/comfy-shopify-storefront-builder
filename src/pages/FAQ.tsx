
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the estimated delivery time?",
      answer: "Most in-stock items ship within 1-2 business days. Standard shipping typically takes 3-7 business days to arrive, depending on your location. Express shipping options are available for faster delivery."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also view your order status and tracking information in your account dashboard under 'Order History'."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with all packaging. Custom orders and clearance items are non-returnable. Please refer to our Returns & Exchange page for detailed information."
    },
    {
      question: "Do you offer assembly services?",
      answer: "Yes, we offer professional assembly services for an additional fee. You can select this option during checkout. Our white glove delivery service also includes assembly and packaging removal."
    },
    {
      question: "How do I care for my furniture?",
      answer: "Care instructions vary depending on the materials of your furniture. Each product comes with specific care instructions. Generally, we recommend regular dusting, avoiding direct sunlight, and using coasters for wooden surfaces."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select international destinations. International shipping rates and delivery times vary based on location. Import duties and taxes may apply and are the responsibility of the customer."
    },
    {
      question: "Can I modify my order after placing it?",
      answer: "We process orders quickly to ensure fast shipping. If you need to modify an order, please contact our customer service team immediately. We'll try to accommodate changes, but cannot guarantee modifications once the order processing has begun."
    },
    {
      question: "Do you offer price matching?",
      answer: "Yes, we offer price matching for identical items from authorized retailers. Contact our customer service with the competitor's listing details within 7 days of your purchase, and we'll review your request."
    },
    {
      question: "What warranty do your products have?",
      answer: "Warranty coverage varies by product. Most furniture items come with a 1-3 year warranty against manufacturing defects. Specific warranty information is listed on each product page."
    },
    {
      question: "How can I cancel my order?",
      answer: "To cancel an order, please contact our customer service team as soon as possible. Orders that have not yet shipped can typically be cancelled with a full refund. Once shipped, standard return policies will apply."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Frequently Asked Questions</h1>
            <p className="text-furniture-gray mb-12 max-w-3xl">
              Find answers to common questions about our products, ordering, shipping, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Accordion type="single" collapsible className="animate-fade-in">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.05}s` }}>
                    <AccordionTrigger className="text-lg font-medium hover:text-furniture-accent transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-furniture-gray">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="animate-scale-in">
              <div className="sticky top-24 bg-furniture-light-gray p-6 rounded-lg">
                <h2 className="text-xl font-medium mb-4">Still Have Questions?</h2>
                <p className="mb-6 text-furniture-gray">
                  Can't find the answer you're looking for? Please contact our customer support team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-furniture-accent">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-furniture-accent">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>support@furnimal.com</span>
                  </div>
                  <a 
                    href="/contact" 
                    className="block text-center bg-furniture-accent hover:bg-furniture-brown text-white px-4 py-2 rounded transition-colors mt-4 hover-scale"
                  >
                    Contact Us
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

export default FAQ;
