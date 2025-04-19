
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-furniture-accent">404</h1>
        <h2 className="text-2xl font-medium mb-4">Oops! Page not found</h2>
        <p className="text-furniture-gray mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
            className="w-full sm:w-auto"
          >
            Go Back
          </Button>
          <Link to="/" className="w-full sm:w-auto">
            <Button className="w-full bg-furniture-accent hover:bg-furniture-brown">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
