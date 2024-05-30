import React, { useState, useEffect } from "react";
import MenuHero from "../components/MenuHero";
import ProductListings from "../components/ProductListings";

function Menu() {
  const [isVisible, setisVisible] = useState("true");

  return (
    <>
      <div className="menu-container">
        <MenuHero />
        <h1>Sort by</h1>
        <div className="filter-buttons">
          <button className="button-30">All</button>
          <button className="button-30">Burgers</button>
          <button className="button-30">Sides</button>
          <button className="button-30">Drinks</button>
          <button className="button-30">Dips</button>
          <button className="button-30">Desserts</button>
        </div>

        <div className="container burgers-container">
          <h1>Burgers</h1>
          <ProductListings isHome={false} category={"burgers"} />
        </div>

        <div className="container sides-container">
          <h1>Sides</h1>
          <ProductListings isHome={false} category={"sides"} />
        </div>
      </div>
    </>
  );
}

export default Menu;
