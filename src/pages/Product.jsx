import Footer from "../components/footer/Footer";
import ImgsProduct from "../components/ImgsProduct/ImgsProduct";
import DetailsProduct from "../components/detailsProduct/DetailsProduct";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Product = (props) => {
  const { id } = useParams();

  // Find the product based on the URL id
  const product = props.Products.find((product) => product.id === parseInt(id));

  // If no product is found
  if (!product) {
    return <h1>Product not found</h1>;
  }

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <main className="flex flex-col lg:flex-row justify-center items-center w-[95%] h-auto mx-auto my-10 gap-1 lg:gap-5">
        {/* Large Image */}
        <ImgsProduct product={product}/>

        {/* Product Details */}
        <DetailsProduct product={product}/>
      </main>
      <Footer />
    </>
  );
};

export default Product;
