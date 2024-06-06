import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "./Spinner";

function ProductListings({ isHome = false, category = "" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = isHome
    ? "http://localhost:3001/menu?category=Burgers&_limit=3"
    : `http://localhost:3001/menu?category=${category}`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="cards-wrapper">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              description={p.description}
              price={p.price}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ProductListings;
