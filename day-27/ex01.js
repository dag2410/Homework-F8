function convertNested(arr) {
  const nested = [];
  const itemById = {};
  let newCategories = [...categories];
  if (Array.isArray(newCategories)) {
    for (const item of arr) {
      itemById[item.id] = { ...item, children: [] };
    }

    for (const item of arr) {
      const currentItem = itemById[item.id];
      if (item.parent === 0) {
        nested.push(currentItem);
      } else {
        const parentItem = itemById[item.parent];
        if (parentItem) {
          parentItem.children.push(currentItem);
        }
      }
    }
  } else {
    return "Khong phai la mang";
  }

  return nested;
}

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

const nestedCategories = convertNested(categories);
console.log(nestedCategories);
