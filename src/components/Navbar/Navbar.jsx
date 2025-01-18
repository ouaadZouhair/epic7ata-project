import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/epic7ata-logo.png';
import { IoSearch } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

import CartShipping from "../CartShipping/CartShipping";


const Navbar = () => {
    const [cardCounter, setcardCounter] = useState(0)
    const [isCartVisible, setIsCartVisible] = useState(0);

    const openCart = () => setIsCartVisible(true);
    const closeCart = () => setIsCartVisible(false);

    return (
        <div>
            <nav className="flex justify-around items-center w-full py-3 z-50">
                <ul className="flex w-[550px] justify-around font-semibold text-xl">
                    <li className="hover:text-blue-500 duration-100">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-100">
                        <Link to='/print'>Print</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-100">
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-100">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-100">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="w-14 h-14 ">
                    <img src={logo} className="h-full w-full" />
                </div>

                <div className="flex  justify-between w-[500px]">
                    <form className="form relative">
                        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">

                            <IoSearch className="w-5 h-5 text-gray-700" />
                        </button>
                        <input className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md" placeholder="Search..." required type="text" />
                        <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                            <FaXmark className="w-6 h-6 text-gray-700 hover:text-red-500 duration-100" />
                        </button>
                    </form>


                    <div className="flex gap-5">
                        <Link to="/signup" className="flex justify-center items-center border-2 border-gray-950 bg-gray-950 rounded-lg text-white text-lg font-semibold py-1 px-3 hover:bg-gray-900 hover:border-gray-900 duration-100">Sign up</Link>
                        <Link to='/login' className="flex justify-center items-center border-2 border-gray-500 bg-transparent rounded-lg text-gray-500 text-lg font-semibold py-1 px-3 hover:bg-gray-950 hover:border-gray-950 hover:text-white duration-100">Log in</Link>
                    </div>

                    <button className=" relative text-4xl hover:text-blue-500 duration-100 " onClick={openCart}>
                        <PiShoppingCartSimpleFill />
                        <div className="bg-red-500 w-4 h-4 rounded-full absolute top-0 -right-1">
                            <span className="text-sm text-white font-semibold absolute bottom-1/2 translate-y-1/2  left-1/2 -translate-x-1/2 ">{cardCounter}</span>
                        </div>
                    </button>
                </div>
            </nav>
            <CartShipping visibility={isCartVisible} onClose={closeCart} cardCounter={cardCounter} />
        </div>
    )
}

export default Navbar