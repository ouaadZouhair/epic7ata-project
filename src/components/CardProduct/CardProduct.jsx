import { FaCartPlus } from "react-icons/fa";


const CardProduct = (props) => {
    
    return (
            <div className="slide_sells bg-gray-900 rounded-xl w-[330px] h-[480px] shadow-sm border border-blue-950 overflow-hidden cursor-pointer hover:scale-105 hover:bg-blue-950 duration-100">
                <div className="relative flex justify-center items-center w-full h-2/3 rounded-t-xl">
                    {props.backImg ?<img className="absolute w-[90%] h-auto rounded-xl " src={props.backImg} alt={props.title}/>: ''}
                    <img className={`absolute w-[90%] h-auto rounded-xl ${ props.backImg ? 'hover:opacity-0 duration-150' : ''}`} src={props.frontImg} alt={props.title} />
                </div>
                <div className="w-full h-1/2 rounded-b-xl flex-col items-center justify-center text-white">
                    <h1 className="text-lg font-bold text-center py-1 h-12">{props.title}</h1>
                    <div className="flex justify-start items-center gap-4 mx-8">
                        <h1 className="text-lg font-medium">Colors:</h1>
                        <div className="flex items-center gap-2">
                            <div className="border border-white w-6 h-6 rounded-full bg-red-500"></div>
                            <div className="border border-white w-6 h-6 rounded-full bg-green-500"></div>
                            <div className="border border-white w-6 h-6 rounded-full bg-blue-500"></div>
                            <div className="border border-white w-6 h-6 rounded-full bg-black"></div>
                            <div className="border border-white w-6 h-6 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="flex justify-around items-center gap-2 py-2">
                        <h1 className="font-bold text-2xl">{props.price} Dh</h1>
                        <button className="flex justify-center items-center bg-white text-black border-2 border-white rounded-full w-12 h-12 font-semibold hover:bg-yellow-400 hover:border-yellow-400 hover:shadow-lg hover:shadow-white/50 hover:scale-110 hover:text-white duration-150 text-2xl">
                            <FaCartPlus />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default CardProduct