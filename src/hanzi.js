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
  "人",
  "头",
  "目",
  "口",
  "耳",
  "手",
  "足",
  "大",
  "小",
  "多",
  "少",
  "日",
  "月",
  "山",
  "石",
  "田",
  "水",
  "火",
  "土",
  "木",
  "禾",
  "上",
  "中",
  "下",
  "左",
  "右",
  "来",
  "去",
  "出",
  "入",
  "坐",
  "立",
  "走",
  

];

const getRandomCharacters = (n = 5) => {
  return characters.sort(() => 0.5 - Math.random()).slice(0, n);
};

const getAllCharacters = () => {
  return characters;
};

export { getRandomCharacters, getAllCharacters };
