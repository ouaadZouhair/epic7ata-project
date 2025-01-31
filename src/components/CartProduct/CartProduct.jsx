import { FaCartPlus } from "react-icons/fa";

const CartProduct = ({ frontImg, backImg, title, price, onClick }) => {
    return (
        <div
        className='w-full md:w-60 lg:w-64 h-auto rounded-2xl overflow-hidden border-2 border-gray-100 cursor-pointer '
        onClick={onClick}
    >
        {/* Product Image */}
        <div className="relative flex justify-center items-center w-full h-80 md:w-60 md:h-60 lg:w-64 lg:h-64">
            {backImg && (
                <img className="absolute w-full h-full" src={backImg} alt={title} />
            )}
            <img
                className={`absolute w-full h-full ${backImg ? "hover:opacity-0 duration-150" : ""}`}
                src={frontImg}
                alt={title}
            />
        </div>


        {/* Product Info */}
        <div className='p-2 bg-gradient-to-r from-gray-100 to-gray-100/100 h-28'>
            <div className='flex justify-around items-center'>

                <h1 className='text-xl font-normal text-black/50 line-through'>
                    230 Dh
                </h1>

                <h1 className='text-xl font-semibold text-black'>{price} Dh</h1>
            </div>
            <h1 className='text-2xl md:text-lg lg:text-lg font-semibold text-black py-4 text-center'>{title}</h1>

        </div>
    </div>
    );
};

export default CartProduct;
