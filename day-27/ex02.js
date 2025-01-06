function flattenCategories(categories) {
  const flattened = [];

  while (categories.length > 0) {
    const current = categories.shift();
    const { children, ...categoryInfo } = current;
    flattened.push({ ...categoryInfo, parentId: categoryInfo.parentId || 0 });

    if (children && children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        categories.push({ ...child, parentId: categoryInfo.id });
      }
    }
  }

  return flattened;
}

const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];

const flattenedCategories = flattenCategories(categories);
console.log(flattenedCategories);
