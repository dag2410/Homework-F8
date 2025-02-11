const menu = [
  {
    id: 1,
    name: "Home",
    parentId: 0,
  },
  {
    id: 2,
    name: "About",
    parentId: 0,
  },
  {
    id: 3,
    name: "News",
    parentId: 0,
  },
  {
    id: 4,
    name: "Products",
    parentId: 0,
  },
  {
    id: 5,
    name: "Contact",
    parentId: 0,
  },
  {
    id: 6,
    name: "T-Shirt",
    parentId: 4,
  },
  {
    id: 7,
    name: "Jean",
    parentId: 4,
  },
  {
    id: 8,
    name: "Skirt",
    parentId: 4,
  },
];

const restMenu = (menu) => {
  if (!Array.isArray(menu)) {
    return "Invalid";
  }
  const outputMenu = document.createElement("ul");
  outputMenu.setAttribute("id", "main-menu");
  document.body.appendChild(outputMenu);
  for (item of menu) {
    const liElement = document.createElement("li");
    liElement.setAttribute("id", item.id);
    liElement.innerHTML = `<a href="#">${item.name}</a>`;
    if (item.parentId === 0) {
      outputMenu.appendChild(liElement);
    } else {
      const parent = document.getElementById(item.parentId);
      let subMenu = parent.getElementsByTagName("ul")[0];
      if (!subMenu) {
        subMenu = document.createElement("ul");
        parent.appendChild(subMenu);
      }
      subMenu.appendChild(liElement);
    }
  }
  const lis = document.getElementsByTagName("li");
  for (li of lis) {
    li.removeAttribute("id");
  }
};
restMenu(menu);
