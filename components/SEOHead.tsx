import React, { useEffect } from 'react';
import { SEOMeta } from '../types';

interface SEOHeadProps extends SEOMeta {
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, schema, canonicalUrl }) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(attrName, attrValue.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    if (canonicalUrl) {
      setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    }

    // Twitter
    setMeta('meta[property="twitter:title"]', 'content', title);
    setMeta('meta[property="twitter:description"]', 'content', description);
    if (canonicalUrl) {
      setMeta('meta[property="twitter:url"]', 'content', canonicalUrl);
    }

    // Canonical
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Schema.org JSON-LD
    if (schema) {
      let scriptSchema = document.querySelector('#structured-data');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'structured-data';
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    }

  }, [title, description, schema, canonicalUrl]);

  return null;
};

export default SEOHead;