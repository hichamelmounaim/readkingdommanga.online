import React, { createContext, useContext, useState, useEffect } from 'react';
import { Chapter } from '../types';

interface MangaContextType {
  chapters: Chapter[];
  addChapter: (chapter: Chapter) => void;
  deleteChapter: (id: string) => void;
  loading: boolean;
}

const MangaContext = createContext<MangaContextType | undefined>(undefined);

export const MangaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/scraped_czvwfo-kingdom.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.chapters) {
          const mapped: Chapter[] = data.chapters.map((ch: any) => ({
            id: String(ch.chapter_number),
            number: ch.chapter_number,
            title: `Kingdom Chapter ${ch.chapter_number}`,
            releaseDate: data.scraped_at || new Date().toISOString(),
            pages: ch.image_urls || []
          }));
          // Sort descending by number to show latest first
          mapped.sort((a, b) => b.number - a.number);
          setChapters(mapped);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading chapter data:", err);
        setLoading(false);
      });
  }, []);

  const addChapter = (chapter: Chapter) => {
    setChapters(prev => {
      const newChapters = [chapter, ...prev];
      // Keep sorted by number descending
      return newChapters.sort((a, b) => b.number - a.number);
    });
  };

  const deleteChapter = (id: string) => {
    setChapters(prev => prev.filter(c => c.id !== id));
  };

  return (
    <MangaContext.Provider value={{ chapters, addChapter, deleteChapter, loading }}>
      {children}
    </MangaContext.Provider>
  );
};

export const useManga = () => {
  const context = useContext(MangaContext);
  if (context === undefined) {
    throw new Error('useManga must be used within a MangaProvider');
  }
  return context;
};