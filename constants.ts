import { Arc, Chapter, Character, Comment } from "./types";

export const MOCK_CHAPTERS: Chapter[] = Array.from({ length: 800 }, (_, i) => {
  const number = i + 1;
  return {
    id: String(number),
    number: number,
    title: `Kingdom Chapter ${number}`,
    releaseDate: new Date().toISOString(),
    pages: number === 800 ? [] : Array.from({ length: 80 }, (_, p) =>
      `https://images.mangafreak.me/mangas/kingdom/kingdom_${number}/kingdom_${number}_${p + 1}.jpg`
    )
  };
}).reverse();

export const CHARACTERS: Character[] = [
  {
    "id": "shin",
    "name": "Xin (Shin)",
    "role": "Protagonist",
    "grade": "General",
    "description": "An orphan who rises from a private soldier to a legendary general.",
    "image": "https://picsum.photos/400/600?random=10"
  },
  {
    "id": "sei",
    "name": "Ying Zheng (Ei Sei)",
    "role": "Main Character",
    "grade": "King",
    "description": "The young King of Qin aiming to end war by unifying China.",
    "image": "https://picsum.photos/400/600?random=11"
  },
  {
    "id": "kyoukai",
    "name": "Qiang Lei (Kyou Kai)",
    "role": "Ally",
    "grade": "General / Assassin",
    "description": "A highly skilled swordswoman from the Shiyuu assassin clan.",
    "image": "https://picsum.photos/400/600?random=12"
  }
];

export const ARCS: Arc[] = [
  {
    "id": "rebellion",
    "title": "State Rebellion Arc",
    "description": "Shin aids Ei Sei in reclaiming the Qin throne from rebels.",
    "chapterStart": 1,
    "chapterEnd": 50,
    "image": "https://picsum.photos/600/300?random=20"
  },
  {
    "id": "dakan",
    "title": "Dakan Plains Arc",
    "description": "Shin's first campaign as a foot soldier fighting Wei.",
    "chapterStart": 51,
    "chapterEnd": 73,
    "image": "https://picsum.photos/600/300?random=21"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    "id": "1",
    "user": "Fanatic99",
    "content": "Xin is devouring everyone! What an absolute legend.",
    "date": "2 hours ago",
    "likes": 155
  },
  {
    "id": "2",
    "user": "SeriesFan",
    "content": "Ying is insane. Best character!",
    "date": "5 hours ago",
    "likes": 230
  },
  {
    "id": "3",
    "user": "Otaku",
    "content": "This manga is pure hype. The art is incredible.",
    "date": "1 day ago",
    "likes": 89
  }
];
