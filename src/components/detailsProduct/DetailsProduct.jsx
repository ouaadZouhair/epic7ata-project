import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addItem } from "../../slice/CartShippingSlice";
import { FaCheck } from "react-icons/fa6";

const DetailsProduct = ({product}) => {

    const [selectedColor, setSelectedColor] = useState(null); // Track selected color
    const [selectedSize, setSelectedSize] = useState(null); // Track selected size
    const [quantity, setQuantity] = useState(1); // Track selected size
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleColorSelect = (color) => {
        setSelectedColor(color); // Update the selected color
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size); // Update the selected color
    };

    const handleAddItemtoCard = async (product) => {
        if (selectedColor && selectedSize) {
            setIsLoading(true);
            try {
                await dispatch(addItem({
                    productId: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    productType: product.productType,
                    frontMockups: product.frontMockups,
                    quantity,
                    color: selectedColor,
                    size: selectedSize
                }));

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
        <div className="w-[95%] lg:w-2/4 my-20 flex flex-col mx-auto gap-6 ">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold">{product.title}</h1>
            <p className="text-lg md:text-lg text-gray-500 text-justify">{product.description}</p>

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

            <div className="flex justify-start items-center md:w-2/3 w-[400px] gap-3">
                {product.sizes.map((size) => (
                    <div
                        key={size}
                        className={`relative w-10 h-10 rounded-lg cursor-pointer border-2 ${selectedSize === size ? 'border-yellow-400' : 'border-gray-400'} hover:scale-110 duration-100`}
                        onClick={() => handleSizeSelect(size)} // Set selected color
                    >
                        <h1 className={`flex justify-center items-center p-1 font-semibold text-xl ${selectedColor === size ? 'text-yellow-400' : 'text-gray-500'}`}>{size}</h1>
                        {/* Display checkmark if color is selected */}
                        {selectedSize === size && (
                            <FaCheck className="absolute w-8 h-8 text-yellow-400 text-sm top-1 right-1" />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-start items-center gap-2">
                <label htmlFor="quantity" className="text-xl font-normal">
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
            <p className="text-2xl text-end">Price: <span className='font-semibold text-3xl'>{product.price} Dh</span></p>

            <button
                className={`w-[90%] mx-auto h-14 text-xl text-white border-2 border-transparent font-semibold rounded-full ${(!selectedColor || !selectedSize) ? 'bg-red-700 text-white cursor-not-allowed' : 'bg-blue-500 hover:scale-105 hover:text-white hover:shadow-lg hover:bg-blue-600 duration-150'}`}
                onClick={() => handleAddItemtoCard(product)}
                disabled={isLoading}
            >
                {isLoading ? "Adding..." : "Add to cart"}
            </button>
        </div>
    )
}

export default DetailsProduct