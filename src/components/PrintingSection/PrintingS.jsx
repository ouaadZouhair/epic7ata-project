import {Link} from 'react-router-dom'
import './PrintingS.css'

const PrintingS = () => {
    return (
        <div className='flex justify-center items-center rounded-3xl w-[90%] h-[530px] overflow-hidden mx-auto shadow-xl bg-gray-950 hover:bg-blue-900 hover:scale-105 my-10 duration-150 '>
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-10 text-white">
                
                <h1 className='text-3xl font-semibold uppercase'>"Wear Your Passion"</h1>
                <p className='text-xl font-normal text-justify mx-8 leading-loose'>Create your designs on t-shirts, hoodies, caps and mugs that speak to who you are. <br /> Make a statement, live your passion and wear it proudly.</p>
                <Link className='designBtn text-black hover:bg-yellow-500 hover:text-white hover:shadow-lg hover:shadow-white/50 font-semibold' to='/print'>Design NOW!!</Link>
        
            </div>
            <div className=" w-2/3 h-full flex flex-col justify-center items-center imgBg">
           
            </div>


        </div>
    )
}

export default PrintingS