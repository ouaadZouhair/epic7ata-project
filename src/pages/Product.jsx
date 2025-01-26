import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Footer from "../components/footer/Footer";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/CartShippingSlice";

const Product = (props) => {
  const { id } = useParams();

  // Find the product based on the URL id
  const product = props.Products.find((product) => product.id === parseInt(id));
  const dispatch = useDispatch();

  // If no product is found
  if (!product) {
    return <h1>Product not found</h1>;
  }

  // State for the currently displayed large image
  const [currentImage, setCurrentImage] = useState(product.frontMockups);
  const [selectedColor, setSelectedColor] = useState(null); // Track selected color
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size
  const [quantity, setQuantity] = useState(1); // Track selected size

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [])

  const handleColorSelect = (color) => {
    setSelectedColor(color); // Update the selected color
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // Update the selected color
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleAddItemtoCard = async (product) => {
    if (selectedColor && selectedSize) {
      setIsLoading(true);
      try {
        await dispatch(addItem({ ...product, quantity, color: selectedColor, size: selectedSize }));
        alert("Item added to cart!");
      } catch (error) {
        alert("Failed to add item to cart.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please select a color and size before adding to the cart.");
    }
  };


  return (
    <>
      <main className="flex justify-center items-start w-[90%] h-auto mx-auto my-10 gap-5">
        {/* Large Image */}
        <div className="flex flex-row-reverse justify-start my-5 gap-1 w-3/5">
          <img
            src={currentImage}
            alt={product.title}
            className="w-[550px] h-[550px] object-cover"
          />
          
          {/* Small Thumbnails */}
          <div className="flex justify-start items-center flex-col gap-1">
            <img
              src={product.frontMockups}
              alt={`${product.title} Front`}
              className="w-[180px] h-[180px] cursor-pointer object-cover"
              onClick={() => setCurrentImage(product.frontMockups)} // Update large image
            />
            <img
              src={product.backMockups}
              alt={`${product.title} Back`}
              className="w-[180px] h-[180px] cursor-pointer object-cover"
              onClick={() => setCurrentImage(product.backMockups)} // Update large image
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-2/4 my-20 flex flex-col gap-5">
          <h1 className="text-3xl font-eemibold">{product.title}</h1>
          <p className="text-xl text-gray-600 text-justify">{product.description}</p>

          {/* Color Options */}
          <div className="flex justify-start items-center w-1/3 gap-3">
            {product.colors.map((color) => (
              <div
                key={color}
                className={`relative w-10 h-10 rounded-lg cursor-pointer border-2 p-1 ${selectedColor === color ? 'border-yellow-400' : 'border-gray-400'} hover:scale-110 duration-100 ${color}`}
                onClick={() => handleColorSelect(color)} // Set selected color
              >
                {/* Display checkmark if color is selected */}
                {selectedColor === color && (
                  <FaCheck className="absolute w-8 h-8 text-yellow-400 text-sm top-1 right-1" />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-start items-center w-1/2 gap-3">
            {product.sizes.map((size) => (
              <div
                key={size}
                className={`relative w-10 h-10 rounded-lg cursor-pointer border-2 ${selectedSize === size ? 'border-yellow-400' : 'border-gray-400'} hover:scale-110 duration-100`}
                onClick={() => handleSizeSelect(size)} // Set selected color
              >
                <h1 className="flex justify-center items-center p-1 font-semibold text-xl text-gray-500">{size}</h1>
                {/* Display checkmark if color is selected */}
                {selectedSize === size && (
                  <FaCheck className="absolute w-8 h-8 text-yellow-400 text-sm top-1 right-1" />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-start items-center gap-2">
            <label htmlFor="quantity" className="text-xl font-medium">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-10 h-10 border border-gray-400 rounded-md text-center text-lg"
            />
          </div>
          <p className="text-2xl  text-end">Price: {product.price} Dh</p>

          <button
            className={`w-[80%] mx-auto h-14 text-xl text-white rounded-lg ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-950 hover:scale-105 hover:bg-blue-600 duration-150'}`}
            onClick={() => handleAddItemtoCard(product)}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add to cart"}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
