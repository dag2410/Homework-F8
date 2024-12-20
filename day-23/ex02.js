function flattenCategories(categories, level = 0) {
  let result = [];

  categories.forEach((category) => {
    const { children, ...rest } = category;
    result.push({ ...rest, level });

    if (category.children && category.children.length > 0) {
      result = result.concat(flattenCategories(category.children, level + 1));
    }
  });
  return result;
}

function getCategoryName(categories, categoryId) {
  const flatCategories = flattenCategories(categories);
  for (let i = 0; i < flatCategories.length; i++) {
    if (categoryId === flatCategories[i].id) {
      return flatCategories[i].name;
    }
  }
  return null;
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

console.log(flattenCategories(categories));
console.log(getCategoryName(categories, 3)); // Output: "Apple"
console.log(getCategoryName(categories, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(categories, 99)); // Output: null
