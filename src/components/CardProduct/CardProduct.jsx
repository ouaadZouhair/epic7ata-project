import { FaCartPlus } from "react-icons/fa";

const CardProduct = ({ frontImg, backImg, title, price, onClick }) => {
    return (
        <div 
            className="slide_sells bg-gray-900 rounded-xl w-[330px] h-[480px] shadow-sm border border-gray-950 overflow-hidden cursor-pointer hover:scale-105 hover:bg-blue-800 hover:border-blue-800 duration-100"
            onClick={onClick}
        >
            <div className="relative flex justify-center items-center w-full h-2/3 rounded-t-xl">
                {backImg && (
                    <img className="absolute w-[90%] h-auto rounded-xl" src={backImg} alt={title} />
                )}
                <img
                    className={`absolute w-[90%] h-auto rounded-xl ${backImg ? "hover:opacity-0 duration-150" : ""}`}
                    src={frontImg}
                    alt={title}
                />
            </div>
            <div className="w-full h-1/2 rounded-b-xl flex-col items-center justify-center text-white">
                <h1 className="text-lg font-bold text-center py-1 h-12">{title}</h1>
                <div className="flex justify-center items-center gap-4 mx-auto"></div>
                <div className="flex justify-around items-center gap-2 py-2">
                    <h1 className="font-bold text-2xl">{price} Dh</h1>
                    <button
                        className="flex justify-center items-center bg-white text-black border-2 border-white rounded-full w-12 h-12 font-semibold hover:bg-yellow-400 hover:border-yellow-400 hover:shadow-lg hover:shadow-white/50 hover:scale-110 hover:text-white duration-150 text-2xl focus:bg-green-500 focus:border-green-500 focus:text-white"
                        onClick={onClick}
                    >
                        <FaCartPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
