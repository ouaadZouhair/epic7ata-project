import Categories from "../components/Categories/Categories.jsx";
import CatHero from "../components/Hero/CatHero.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroSlider from "../components/Hero/HeroSlider.jsx";

const Home = () => {
    return (
        <>
            <Hero>
                <HeroSlider/>
                <CatHero/>
            </Hero>
            <Categories/>

            
        </>
    );
  }
  
  export default Home;
  