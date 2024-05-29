import MainHero from "../components/MainHero";

function HomePage() {
  return (
    <>
      <div className="home-wrapper">
        <MainHero />
        <h2 className="subheading">Our most popular burgers</h2>
      </div>
    </>
  );
}

export default HomePage;
