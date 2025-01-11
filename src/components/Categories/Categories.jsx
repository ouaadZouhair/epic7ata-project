import { FaTshirt } from "react-icons/fa";
import { GiHoodie, GiBilledCap } from "react-icons/gi";
import { ImMug } from "react-icons/im";



const Categories = () => {
  return (
    <div className="flex justify-around items-center gap-8 py-5 w-[75%] mx-auto">
        <div className="flex justify-center items-center gap-3 w-[200px] h-[200px] text-gray-950 border-4 border-gray-950 p-1 rounded-full hover:bg-gray-950 hover:text-white duration-100">
           <FaTshirt className="text-8xl"/> 
        </div>
        <div className="flex justify-center items-center gap-3 w-[200px] h-[200px] text-gray-950 border-4 border-gray-950 p-1 rounded-full hover:bg-gray-950 hover:text-white duration-100">
            <GiHoodie className="text-9xl"/>
        </div>
        <div className="flex justify-center items-center gap-3 w-[200px] h-[200px] text-gray-950 border-4 border-gray-950 p-1 rounded-full hover:bg-gray-950 hover:text-white duration-100">
            <GiBilledCap className="text-8xl"/>
        </div>
        <div className="flex justify-center items-center gap-3 w-[200px] h-[200px] text-gray-950 border-4 border-gray-950 p-1 rounded-full hover:bg-gray-950 hover:text-white duration-100">
            <ImMug className="text-8xl"/>
        </div>
    </div>
  )
}

export default Categories 