let characters = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "百",
  "又",
  "两",
  "水",
  "中",
  "不",
  "见",
];

const getRandomCharacters = (n = 5) => {
  return characters.sort(() => 0.5 - Math.random()).slice(0, n);
};

const getAllCharacters = () => {
  return characters;
};

export { getRandomCharacters, getAllCharacters };
