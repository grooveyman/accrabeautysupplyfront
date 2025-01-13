import { toast } from "react-toastify";

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
  const categoryObj = objData.find((obj) => formatText(obj.name) === category);
  return categoryObj ? categoryObj.name : null;
};

export const returnCategoryCode = (category, objData) => {
  const categoryObj = objData.find((obj) => formatText(obj.name) === category);
  return categoryObj ? categoryObj.code : null;
};

export const returnCategoryNameViaCode = (categoryCode, objData) => {
  const categoryObj = objData.find((obj) => obj.code === categoryCode);
  return categoryObj ? categoryObj.name : null;
};

export const extractUniqueValues = (arr, key1, key2, key3) => {
  const uniqueValues1 = new Set();
  const uniqueValues2 = new Set();

  for (const obj of arr) {
    if (obj[key1]) uniqueValues1.add(obj[key1]);
    if (obj[key3]) uniqueValues2.add(obj[key2]+ obj[key3]);
  }

  return {
    uniqueKey1Values: Array.from(uniqueValues1),
    uniqueKey2Values: Array.from(uniqueValues2),
  };
};

export const getSizesForColor = (arr, targetColor) => {
  const sizes = new Set();

  for (const obj of arr) {
    if (obj.color === targetColor && obj.value) {
      sizes.add(obj.value + obj.size);
    }
  }

  return Array.from(sizes);
}

export const showErrorToast = (message) => {
  toast.error(message, {
    style: { backgroundColor: "red", color: "#fff" },
    theme: "colored",
  });
};

export const showSuccessToast = (message) => {
  toast.error(message, {
    style: { backgroundColor: "green", color: "#fff" },
    theme: "colored",
  });
};

