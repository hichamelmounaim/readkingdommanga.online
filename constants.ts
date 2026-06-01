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
    "grade": "Qin General",
    "description": "The hero of the story. A war orphan who aims to become the \"World's Greatest General\". He later meets Zheng Ying, the future first king that would rule all of China.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b64573-Lketo3ID6eNl.jpg"
  },
  {
    "id": "sei",
    "name": "Ying Zheng (Ei Sei)",
    "role": "Main Character",
    "grade": "King of Qin",
    "description": "The young king of Qin who bears a striking resemblance to Piao. Later becomes Qin Shi Huang.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b64109-L69p4dz68Dms.jpg"
  },
  {
    "id": "kyoukai",
    "name": "Qiang Lei (Kyou Kai)",
    "role": "Ally",
    "grade": "General / Assassin",
    "description": "A member of a legendary assassin clan called \"Chi You\" that is exceptional in combat and uses the notorious Dance of Death. She fights with a sword named \"Lu Seui\".",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b65445-bdvFkod8JpZ1.jpg"
  },
  {
    "id": "ten",
    "name": "He Liao Diao (Ka Ryou Ten)",
    "role": "Ally",
    "grade": "Strategist",
    "description": "He Liao Diao is the last known descendent of the Kyuumei Mountain Tribe, which was destroyed in the war with Yang Duanhe, king of the Qin mountains. As a result of this, she moved to Kokuhi village, a place of outlaws in which she eventually encou...",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b65407-Thy96GwaSNdf.png"
  },
  {
    "id": "ouki",
    "name": "Wang Qi (Ou Ki)",
    "role": "Legendary General",
    "grade": "Great General",
    "description": "Ou Ki, a branch member of the Ou Family, was a Great General and one of the Six Great Generals of Qin. He served as a close retainer to King Sho and was widely known under alias \"Monstrous Bird of Qin\".",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/65443-IJjkkvRrnsvH.jpg"
  },
  {
    "id": "yotanwa",
    "name": "Yang Duanhe (Yotanwa)",
    "role": "Ally",
    "grade": "Mountain King / Great General",
    "description": "Yang Duanhe is the mysterious King of Qin’s Mountain Tribes, is the leader and spokesperson for the Confederation of different tribes that reside in Qin's mountain area. She is known in the mountain realms as the Lord of Death. After the Coalition...",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b66701-UJIKRkxzzG1D.png"
  },
  {
    "id": "riboku",
    "name": "Li Mu (Ri Boku)",
    "role": "Antagonist",
    "grade": "Zhao Prime Minister / Great General",
    "description": "One of the 3 great heavens generals of Zhao",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/76788-Ln8sT7C6DhR8.jpg"
  },
  {
    "id": "ouhon",
    "name": "Wang Ben (Ou Hon)",
    "role": "Ally",
    "grade": "Qin General",
    "description": "Ou Hon is a General of Qin and the leader of the Gyoku Hou Army. The heir to the Ou Family's main branch, he is the son of Great General Ou Sen and a relative to the late Great General Ou Ki.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b87535-x70f4WECTTcJ.png"
  },
  {
    "id": "mouten",
    "name": "Meng Tian (Mou Ten)",
    "role": "Ally",
    "grade": "Qin General",
    "description": "The son of Meng Wu and a Qin General leading the Gaku Ka army.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b87538-6TtSKneZ3etw.jpg"
  },
  {
    "id": "tou",
    "name": "Tou (Teng)",
    "role": "Ally",
    "grade": "Great General",
    "description": "Teng is Wang Qi's aide and seems to be an army man himself. He is the only one who actually has any idea what Wang Qi's plans are.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/66931-NgtPIjU6TQnI.jpg"
  },
  {
    "id": "duke-hyou",
    "name": "Duke Hyou (Biao Gong)",
    "role": "Supporting Character",
    "grade": "Great General",
    "description": "Biao Gong is a Great General from the state of Qin who led an invading Qin army to besiege the Wei city of Keiyou.",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/121231-uTEKI2nmCXxN.jpg"
  },
  {
    "id": "ousen",
    "name": "Wang Jian (Ou Sen)",
    "role": "Supporting Character",
    "grade": "Great General",
    "description": "General of Qin and the leader of Wang Jian Army. He is also the current head of the Wang Family",
    "image": "https://s4.anilist.co/file/anilistcdn/character/large/b87540-QE419IogVrad.jpg"
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
