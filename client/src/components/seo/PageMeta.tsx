import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
}

export function PageMeta({ title, description, keywords }: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | Zeribon Holding Group`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute("content", keywords);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${title} | Zeribon Holding Group`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
    
    return () => {
      document.title = "Zeribon Holding Group | Veteran-Led Government Contractor";
    };
  }, [title, description, keywords]);

  return null;
}
