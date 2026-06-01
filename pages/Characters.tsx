import React from 'react';
import SEOHead from '../components/SEOHead';
import { CHARACTERS } from '../constants';

const Characters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEOHead
        title="Kingdom Manga Characters Guide - Xin, Ying Zheng, Qiang Lei & More"
        description="Comprehensive character profiles for Kingdom manga. Learn about Xin (Shin), Ying Zheng (Ei Sei), Qiang Lei (Kyou Kai), and every key character in Yasuhisa Hara's epic historical series."
        canonicalUrl="https://readkingdommanga.online/characters"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Kingdom Manga Characters Guide",
          "description": "Character profiles for all major Kingdom manga characters.",
          "url": "https://readkingdommanga.online/characters",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://readkingdommanga.online/" },
              { "@type": "ListItem", "position": 2, "name": "Characters", "item": "https://readkingdommanga.online/characters" }
            ]
          }
        }}
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Kingdom Manga Characters</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive database of every major character in the Kingdom manga. Learn about their roles, warfare achievements, and key contributions to the unification of China.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CHARACTERS.map((char) => (
          <div 
            key={char.id} 
            className="group flex flex-col bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden hover:border-bb-blue/40 transition-all duration-300 hover:shadow-2xl hover:shadow-bb-blue/5"
          >
            {/* Character Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
              <img 
                src={char.image} 
                alt={char.name} 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Gradient Mask to blend image to background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/10 to-transparent" />
              
              {/* Rank / Grade Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#d97706] bg-[#d97706]/10 border border-[#d97706]/35 backdrop-blur-md rounded-lg">
                {char.grade}
              </span>
            </div>

            {/* Character Info */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h2 className="text-2xl font-bold text-white group-hover:text-bb-blue transition-colors duration-200">
                  {char.name}
                </h2>
              </div>
              
              <span className="self-start px-2.5 py-0.5 text-xs font-semibold text-gray-400 bg-white/5 rounded-full border border-white/5 mb-4">
                {char.role}
              </span>

              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {char.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;