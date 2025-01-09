//temporary data
export const NAV_ITEMS = [
  { id: 1, name: "Cosmetics", path: "/cosmetics" },
  { id: 2, name: "Human hair", path: "/humanhair" },
  { id: 3, name: "Artificial hair", path: "/artificialhair" },
  { id: 4, name: "Fabrics", path: "/fabrics" },
  { id: 5, name: "Fashion", path: "/fashion" },
];

//returns a joined string if text is separated by " "
export const formatText = (text) => {
  return text.toLowerCase().split(" ").join("");
};

export const returnCategoryName = (category, objData) => {
  const categoryObj = objData.find(obj => formatText(obj.name) === category);
  return categoryObj ? categoryObj.name : null;
};

export const returnCategoryCode = (category, objData) => {
  const categoryObj = objData.find(obj => formatText(obj.name) === category);
  return categoryObj ? categoryObj.code : null;
};

