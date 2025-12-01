import { Link } from "wouter";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 mx-auto mb-8 bg-mission-gold/10 rounded-full flex items-center justify-center">
          <span className="text-mission-gold font-heading font-bold text-3xl">404</span>
        </div>
        
        <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let us help you find what you need.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button data-testid="button-back-home">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" data-testid="button-contact-us">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
