import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { analytics } from "@/lib/analytics";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Government from "@/pages/Government";
import Partners from "@/pages/Partners";
import Contact from "@/pages/Contact";
import ServiceAreas from "@/pages/ServiceAreas";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function AnalyticsTracker() {
  const [location] = useLocation();
  
  useEffect(() => {
    analytics.init();
  }, []);
  
  useEffect(() => {
    analytics.trackPageView(location);
  }, [location]);
  
  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove '#' prefix
      
      if (hash) {
        // If there's a hash, wait for page to render, then scroll to element
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // No hash, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    
    // Call on component mount to handle initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  
  return null;
}

function Router() {
  return (
    <Layout>
      <AnalyticsTracker />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/capabilities" component={Capabilities} />
        <Route path="/government" component={Government} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
