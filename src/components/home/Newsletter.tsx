
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Thank you for subscribing to our newsletter!");
    }, 1000);
  };

  return (
    <section className="bg-furniture-beige py-16">
      <div className="container-custom">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-furniture-gray mb-8">
              Stay updated with our latest collections, exclusive offers, and interior design tips.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-furniture-accent hover:bg-furniture-brown text-white h-12 px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <p className="text-sm text-furniture-gray mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
