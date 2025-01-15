import React from 'react'
import './PrintingS.css'

const PrintingS = () => {
    return (
        <div className='flex justify-center items-center rounded-3xl w-[80%] h-[500px] overflow-hidden mx-auto shadow-xl bg-gray-950 hover:scale-105 my-10 duration-150 '>
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-10 text-white">
                
                <h1 className='text-4xl font-semibold uppercase'>"Wear Your Passion"</h1>
                <p className='text-xl font-light text-justify mx-5 leading-loose'>Create your designs on t-shirts, hoodies, caps and mugs that speak to who you are. <br /> Make a statement, live your passion and wear it proudly.</p>
                <button className='designBtn text-black font-medium'>Design NOW!!</button>
        
            </div>
            <div className=" w-2/3 h-full flex flex-col justify-center items-center imgBg">
           
            </div>


        </div>
    )
}

export default PrintingS