import React, { useState, useEffect } from "react";
import MenuHero from "../components/MenuHero";
import ProductListings from "../components/ProductListings";
import useCart from "../hooks/useCart";

function Menu() {
  const [categories, setCategories] = useState([
    {
      name: "Burgers",
      display: "Flex",
    },
    { name: "Sides", display: "Flex" },
    { name: "Drinks", display: "Flex" },
    { name: "Dips", display: "Flex" },
    { name: "Desserts", display: "Flex" },
  ]);

  const { addToCart } = useCart();

  function addItemToCart(item) {
    addToCart(item);
  }

  function updateDisplay(categoryName) {
    setCategories(
      categories.map((c) => {
        if (categoryName === "all") {
          return { ...c, display: "Flex" };
        }

        if (c.name != categoryName) {
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
          <button className="button-30" onClick={() => updateDisplay("all")}>
            All
          </button>
          <button
            className="button-30"
            onClick={() => updateDisplay("Burgers")}
          >
            Burgers
          </button>
          <button className="button-30" onClick={() => updateDisplay("Sides")}>
            Sides
          </button>
          <button className="button-30" onClick={() => updateDisplay("Drinks")}>
            Drinks
          </button>
          <button className="button-30" onClick={() => updateDisplay("Dips")}>
            Dips
          </button>
          <button
            className="button-30"
            onClick={() => updateDisplay("Desserts")}
          >
            Desserts
          </button>
        </div>

        {categories.map((c) => (
          <div
            key={c.name}
            className="container"
            style={{ display: c.display }}
          >
            <h1 className="category-title">{c.name}</h1>
            <ProductListings isHome={false} category={c.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
