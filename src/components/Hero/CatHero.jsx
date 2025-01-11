import { MdOutlineSupportAgent, MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiStarFormation } from "react-icons/gi";
import { BsStars } from "react-icons/bs";





const CatHero = () => {
    return (
        <div className="flex justify-around items-center gap-8 py-5 w-[100%]  bg-gray-900">
            <div className="flex justify-center items-center gap-3 w-1/3 text-white">
                <MdOutlineSupportAgent className="text-6xl " />
                <h3 className=" font-normal text-lg">Support 24/7</h3>
            </div>

            <div className="flex justify-center items-center gap-3 w-1/3 text-white">
                <TbTruckDelivery  className="text-6xl " />
                <h3 className=" font-normal text-lg">Delivery over all Morocoo cites</h3>
            </div>

            <div className="flex justify-center items-center gap-3 w-1/3 text-white">
                <MdOutlinePayment  className="text-6xl " />
                <h3 className=" font-normal text-lg">Secure Payment</h3>
            </div>

            <div className="flex justify-center items-center gap-3 w-1/3 text-white">
                <BsStars  className="text-6xl " />
                <h3 className=" font-normal text-lg">Higth quality products</h3>
            </div>

        </div>
    )
}

export default CatHero