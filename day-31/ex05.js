function convertNested(arr) {
  const nested = [];
  const itemById = {};
  let newCategories = [...arr];

  if (Array.isArray(newCategories)) {
    for (const item of newCategories) {
      itemById[item.id] = { ...item, children: [] };
    }

    for (const item of newCategories) {
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
    return "Không phải là mảng";
  }

  return nested;
}

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
    slug: "chuyen-muc-1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
    slug: "chuyen-muc-2",
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
    slug: "chuyen-muc-3",
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
    slug: "chuyen-muc-2-1",
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
    slug: "chuyen-muc-2-2",
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
    slug: "chuyen-muc-2-3",
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
    slug: "chuyen-muc-3-1",
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
    slug: "chuyen-muc-3-2",
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
    slug: "chuyen-muc-3-3",
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
    slug: "chuyen-muc-2-2-1",
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
    slug: "chuyen-muc-2-2-2",
  },
];

function createCategoryElement(category, level = 0) {
  const li = document.createElement("li");
  li.textContent = category.name;
  li.style.border = "1px solid #ddd";
  li.style.padding = "15px 50px";
  li.style.borderRadius = "5px";
  li.style.width = `100px`; 
  li.style.position = "relative";

  if (category.children.length > 0) {
    const ul = document.createElement("ul");
    ul.style.display = "none"; 
    ul.style.position = "absolute";
    ul.style.left = "80%";
    ul.style.top = "0";
    ul.style.listStyleType = "none";

    category.children.forEach((child) => {
      ul.appendChild(createCategoryElement(child, level + 1));
    });
    li.appendChild(ul);

    li.addEventListener("mouseover", () => {
      ul.style.display = "block";
    });
    li.addEventListener("mouseout", () => {
      ul.style.display = "none";
    });
  }

  return li;
}

function displayCategories(categories) {
  const container = document.createElement("div");
  container.id = "category-container";
  const ul = document.createElement("ul");
  ul.style.listStyleType = "none";
  categories.forEach((category) => {
    ul.appendChild(createCategoryElement(category));
  });
  container.appendChild(ul);
  document.body.appendChild(container);
}

displayCategories(convertNested(categories));
