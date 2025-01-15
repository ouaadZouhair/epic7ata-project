import Container from "../components/Container.jsx";
import Categories from "../components/Categories/Categories.jsx";
import CatHero from "../components/Hero/CatHero.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroSlider from "../components/Hero/HeroSlider.jsx";
import Products from "../components/Products/Products.jsx";
import TopSellsSlider from "../components/TopSellsSlider/TopSellsSlider.jsx";
import FeaturedProducts from "../components/FeaturedProducts/featuredProducts.jsx";
import PrintingS from "../components/PrintingSection/PrintingS.jsx";

const Home = () => {
    return (
        <>
            <Hero>
                <HeroSlider />
                <CatHero />
            </Hero>

            <Products />

            <Container>
                <Categories />
                <TopSellsSlider/>
                <FeaturedProducts/>
                <PrintingS/>
            </Container>


        </>
    );
}

export default Home;
