import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import logo from '../../assets/epic7ata-logo.png';



const Navbar = () => {
    return (
        <nav className="flex justify-around items-center w-full bg-slate-50 py-3 shadow-lg">
            <ul className="flex w-[500px] justify-around font-semibold">
                <li>Home</li>
                <li>Print</li>
                <li>Shop</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>

            <div className="w-14 h-14 "><img src={logo} className="h-full w-full" /></div>

            <div className="flex  justify-between w-[500px]">
                {/* <button className="border-2 border-slate-800 w-10 h-10 rounded-full flex justify-center items-center bg-slate-100 hover:text-white hover:bg-black duration-100"> <IoSearch className="text-2xl" /> </button> */}

                <form className="form relative">
                    <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                        <svg width={17} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" className="w-5 h-5 text-gray-700">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <input className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md" placeholder="Search..." required type="text" />
                    <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </form>


                <div className="flex gap-5">
                    <button className="border-2 border-blue-500 bg-blue-500 rounded-lg text-white text-lg font-semibold py-1 px-2">Sign in</button>
                    <button className="border-2 border-blue-500 bg-transparent rounded-lg text-blue-500 text-lg font-semibold py-1 px-2">Log in</button>
                </div>

                <button className="text-4xl hover:text-blue-500 duration-100 " > <PiShoppingCartSimpleFill /> </button>
            </div>
        </nav>
    )
}

export default Navbar