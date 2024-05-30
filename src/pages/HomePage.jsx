import MainHero from "../components/MainHero";
import ProductListings from "../components/ProductListings";

function HomePage() {
  return (
    <>
      <div className="container">
        <MainHero />
        <div className="subheader">
          <h1>Our most popular burgers</h1>
          <p>These are some of our most popular burgers among customers!</p>
        </div>
        <ProductListings isHome={true} />
      </div>
    </>
  );
}

export default HomePage;
