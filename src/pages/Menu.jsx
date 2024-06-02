import React, { useState, useEffect } from "react";
import MenuHero from "../components/MenuHero";
import ProductListings from "../components/ProductListings";

function Menu() {
  const [categories, setCategories] = useState([
    {
      name: "burgers",
      display: "Flex",
    },
    { name: "sides", display: "Flex" },
  ]);

  function updateDisplay(cateoryName) {
    setCategories(
      categories.map((c) => {
        if (c.name != cateoryName) {
          return { ...c, display: "none" };
        } else {
          return { ...c, display: "Flex" };
        }
      })
    );
  }

  return (
    <>
      <div className="menu-container">
        <MenuHero />
        <h1>Menu</h1>
        <div className="filter-buttons">
          <button className="button-30">All</button>
          <button
            className="button-30"
            onClick={() => updateDisplay("burgers")}
          >
            Burgers
          </button>
          <button className="button-30" onClick={() => updateDisplay("sides")}>
            Sides
          </button>
          <button className="button-30">Drinks</button>
          <button className="button-30">Dips</button>
          <button className="button-30">Desserts</button>
        </div>

        {categories.map((c) => (
          <div
            key={c.name}
            className="container"
            style={{ display: c.display }}
          >
            <h1>{c.name}</h1>
            <ProductListings isHome={false} category={c.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
