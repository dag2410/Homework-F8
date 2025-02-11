const categories = [
  {
    id: 1,
    name: "Electronics",
    slugs: "electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        slugs: "laptops",
        children: [
          {
            id: 3,
            name: "Apple",
            slugs: "apple",
          },
          {
            id: 4,
            name: "Dell",
            slugs: "dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
        slug: "headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    slugs: "books",
    children: [
      {
        id: 7,
        name: "Fiction",
        slugs: "fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
            slug: "thrillers",
          },
          {
            id: 9,
            name: "Mystery",
            slug: "mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
        slug: "non-fiction",
      },
    ],
  },
];

function createCategoryElement(category, parentSlug = "") {
  const li = document.createElement("li");
  li.textContent = category.name;
  li.style.border = "1px solid #ddd";
  li.style.padding = "15px 50px";
  li.style.borderRadius = "5px";
  li.style.width = `100px`; // Giảm kích thước khối theo cấp độ
  li.style.position = "relative";
  const fullSlug = parentSlug
    ? `${parentSlug}/${category.slugs}`
    : category.slugs;
  li.setAttribute("data-slug", fullSlug);

  li.style.cursor = "pointer";
  li.style.listStyleType = "none";

  li.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = `http://localhost:5500/${fullSlug}`;
  });

  if (category.children && category.children.length > 0) {
    const ul = document.createElement("ul");
    ul.style.display = "none";
    ul.style.left = "80%";
    ul.style.top = "0";
    ul.style.position = "absolute";
    ul.style.margin = "10px 0";

    category.children.forEach((child) => {
      ul.appendChild(createCategoryElement(child, fullSlug));
    });

    li.appendChild(ul);
    li.addEventListener("mouseover", () => (ul.style.display = "block"));
    li.addEventListener("mouseout", () => (ul.style.display = "none"));
  }

  return li;
}

function displayCategories(categories) {
  const container = document.createElement("div");
  container.id = "category-container";
  const ul = document.createElement("ul");

  categories.forEach((category) => {
    ul.appendChild(createCategoryElement(category));
  });

  container.appendChild(ul);
  document.body.appendChild(container);
}

displayCategories(categories);
