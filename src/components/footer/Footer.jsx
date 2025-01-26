import logo from '../../assets/epic7ata-logo.png'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaCcVisa, FaCcPaypal  } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";




const Footer = () => {
    return (
        <footer className='relative flex flex-col gap-2 items-center bg-gray-900 text-white w-full pt-6  h-auto -bottom-10'>
            <div className=' flex justify-around items-start w-full pb-4'>
                <div className='flex flex-col justify-between items-start w-80'>
                    <img src={logo} alt="brand logo" className='w-16 h-16 rounded-lg' />
                    <ul className='flex flex-col justify-between items-start gap-4 text-lg mt-2'>
                        <li className='text-lg'>07, Rue Resistence Ocean Rabat Maroc</li>
                        <li className='text-lg'>epic7ata@gmail.com</li>
                        <li className='text-xl font-bold'>+212 716 486 381</li>
                        <li>
                            <ul className='flex justify-between items-center gap-5 text-2xl'>
                                <li className='hover:scale-125 duration-100 cursor-pointer'><FaFacebook /></li>
                                <li className='hover:scale-125 duration-100 cursor-pointer'><FiInstagram /></li>
                                <li className='hover:scale-125 duration-100 cursor-pointer'><IoLogoWhatsapp /></li>
                                <li className='hover:scale-125 duration-100 cursor-pointer'><IoLogoTiktok /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='flex realtive flex-col justify-between items-start mt-4 w-80'>
                    <h1 className="relative text-2xl font-light after:content-[''] after:absolute after:bg-white after:-bottom-3 after:left-0 after:w-2/4 rounded-sm after:h-[3px]">Website pages</h1>
                    <ul className='text-lg font-normal flex flex-col gap-2 mt-6'>
                        <li>Home</li>
                        <li>Print</li>
                        <li>Shop</li>
                        <li>About</li>

                    </ul>
                </div>
                <div className='flex realtive flex-col justify-between items-start mt-4 w-80'>
                    <h1 className="relative text-2xl font-light after:content-[''] after:absolute after:bg-white after:-bottom-3 after:left-0 after:w-2/4 rounded-sm after:h-[3px]">Help & Information</h1>
                    <ul className='text-lg font-normal flex flex-col gap-2 mt-6'>
                        <li>FAQs</li>
                        <li>Help Center</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex realtive flex-col justify-between items-start mt-4 w-80'>
                    <h1 className="relative text-2xl font-light after:content-[''] after:absolute after:bg-white after:-bottom-3 after:left-0 after:w-2/4 rounded-sm after:h-[3px]">Terms & Conditions</h1>
                    <ul className='text-lg font-normal flex flex-col gap-2 mt-6'>
                        <li>Privacy Policy</li>
                        <li>Products returns</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-between items-center w-full px-10 py-4 border-t border-gray-600'>
                <p className='font-light'>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <ul className='flex justify-between items-center gap-2 text-white text-2xl'>
                    <li><FaCcVisa/></li>
                    <li><SiMastercard/></li>
                    <li><FaCcPaypal/></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer 