import { TbTruckDelivery } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";


const TopNav = () =>{
    return(
        <div className="bg-gray-900 w-full h-14 flex justify-between items-center px-12">
            <div>
                <span className="flex justify-between items-center gap-2"> <TbTruckDelivery className="text-3xl text-white" /> <h3 className="text-lg text-white font-light">Fast and reliable delivery in all cities of Morocco</h3></span>
            </div>
            <div>
                <ul className="flex justify-between items-center text-2xl text-white gap-3">
                    <li className="hover:text-green-500 cursor-pointer hover:scale-125 duration-100"><IoLogoWhatsapp/></li>
                    <li className="hover:text-blue-500 cursor-pointer hover:scale-125 duration-100" ><IoLogoTiktok/></li>
                    <li className="hover:text-pink-500 cursor-pointer hover:scale-125 duration-100"><FiInstagram/></li>
                    <li className="hover:text-red-500 cursor-pointer hover:scale-125 duration-100"><IoMdMail/></li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;