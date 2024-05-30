import MainHero from "../components/MainHero";
import ProductCard from "../components/ProductCard";

function HomePage() {
  return (
    <>
      <div className="home-wrapper">
        <MainHero />
        <div className="subheading">
          <h1>Our most popular burgers</h1>
          <p>These are some of our most popular burgers among customers!</p>
        </div>

        <div className="cards-wrapper">
          <ProductCard
            image="src\images\buger 1.png"
            title="dogwater"
            description="water"
            price="10"
          />
          <ProductCard
            image="src\images\buger 1.png"
            title="dogwater"
            description="water"
            price="10"
          />
          <ProductCard
            image="src\images\buger 1.png"
            title="dogwater"
            description="water"
            price="10"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
