
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background w-full shadow-sm z-50 sticky top-0 animate-fade-in">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-jost font-bold tracking-tight hover-scale transition-transform">
            Bright Furniture
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(
                navigationMenuTriggerStyle(),
                "font-medium hover:text-furniture-accent transition-colors"
              )}>
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/shop" className={cn(
                navigationMenuTriggerStyle(),
                "font-medium hover:text-furniture-accent transition-colors"
              )}>
                Shop
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/categories" className={cn(
                navigationMenuTriggerStyle(),
                "font-medium hover:text-furniture-accent transition-colors"
              )}>
                Categories
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium hover:text-furniture-accent transition-colors">
                Info
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <div>
                    <h4 className="text-lg font-medium mb-2">About Us</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Link 
                        to="/about" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        About Us
                      </Link>
                      <Link 
                        to="/blog" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Blog
                      </Link>
                      <Link 
                        to="/contact" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Contact
                      </Link>
                      <Link 
                        to="/help" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Help
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Policies</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Link 
                        to="/shipping" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Shipping
                      </Link>
                      <Link 
                        to="/returns" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Returns & Exchange
                      </Link>
                      <Link 
                        to="/terms" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                      <Link 
                        to="/privacy" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        to="/faq" 
                        className="block p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className={cn(
                navigationMenuTriggerStyle(),
                "font-medium hover:text-furniture-accent transition-colors"
              )}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover-scale">
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
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden hover-scale" onClick={toggleMenu}>
          {isMenuOpen ? (
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
              className="w-6 h-6 animate-scale-in"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
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
              className="w-6 h-6 animate-scale-in"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background w-full py-4 px-6 shadow-md animate-slide-in-right">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium py-2 hover:text-furniture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="font-medium py-2 hover:text-furniture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/categories"
              className="font-medium py-2 hover:text-furniture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="font-medium py-2 hover:text-furniture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium py-2 hover:text-furniture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="py-2 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">More pages</p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/blog"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/help"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Help
                </Link>
                <Link
                  to="/shipping"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shipping
                </Link>
                <Link
                  to="/returns"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Returns
                </Link>
                <Link
                  to="/terms"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </Link>
                <Link
                  to="/faq"
                  className="text-sm py-1 hover:text-furniture-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>
            </div>
            
            <div className="flex items-center pt-2 border-t border-border">
              <Button variant="ghost" size="icon">
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
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
