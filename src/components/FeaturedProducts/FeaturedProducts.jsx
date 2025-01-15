import './FeaturedProducts.css';
import tshirt from '../../assets/front_design_BLACK.jpeg'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa";
import { useRef, useState, useEffect } from 'react'


const cardData = [
    { id: 1, title: "Card 1", description: "This is card 1", price: 50 },
    { id: 2, title: "Card 2", description: "This is card 2", price: 200 },
    { id: 3, title: "Card 3", description: "This is card 3", price: 250 },
    { id: 4, title: "Card 4", description: "This is card 4", price: 300 },
    { id: 5, title: "Card 5", description: "This is card 5", price: 350 },
    { id: 6, title: "Card 6", description: "This is card 6", price: 350 },
   
];


const FeaturedProducts = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsPerView, setCardsPreView] = useState(4)
    const btnPrev = useRef();
    const btnNext = useRef();

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - cardsPerView : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + cardsPerView >= cardData.length
                ? 0
                : prevIndex + 1
        );
    };
    useEffect(() => {
        if (btnNext.current && btnPrev.current) {
            if (currentIndex === 0) {
                // Add blue color to the Next button when at the first card
                btnNext.current.classList.add('bg-blue-500', 'border-blue-500');
                btnPrev.current.classList.remove('bg-blue-500', 'border-blue-500'); // Remove from Prev
            } else if (currentIndex >= 0 && currentIndex < cardData.length - 1) {
                // If in between, show both buttons as active
                btnNext.current.classList.add('bg-blue-500', 'border-blue-500');
                btnPrev.current.classList.add('bg-blue-500', 'border-blue-500');
            } else if (currentIndex === cardData.length - 1) {
                // At the last card, Next button should be disabled (no more cards to go)
                btnNext.current.classList.remove('bg-blue-500', 'border-blue-500');
                btnPrev.current.classList.add('bg-blue-500', 'border-blue-500');
            }
        }
    }, [currentIndex]);
    
    

    return (
        <div className="carts__container">
            <div className='relative w-full flex justify-between items-center py-3 border-b-[3px] border-gray-200 after:content-[""] after:bg-blue-500 after:w-1/4 after:h-[3px] after:rounded-full after:absolute after:-bottom-[2px]'>
                <h1 className='text-4xl font-medium '>Featured Products</h1>
                <div className='flex justify-center items-center gap-2'>
                    <button className= 'btn-prev relative border-2 font-bold border-blue-300 text-white rounded-xl bg-blue-300 w-10 h-10 text-4xl hover:border-blue-500 hover:bg-blue-500 duration-100 ' ref={btnPrev} onClick={handlePrev}><GrFormPrevious /></button>
                    <button className= 'btn-next relative border-2 font-bold border-blue-300 text-white rounded-xl bg-blue-300 w-10 h-10 text-4xl hover:border-blue-500 hover:bg-blue-500 duration-100' ref={btnNext} onClick={handleNext}><GrFormNext /></button>
                </div>
            </div>

            <div className="slider_featured overflow-hidden my-7">
                <div
                    className="slider-track_featured flex justify-between items-center gap-9 w-full h-[500px]"
                    style={{
                        transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
                    }}
                >
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="slide_featured bg-gray-100 rounded-xl w-[300px] h-[450px] shadow-sm border border-gray-50 overflow-hidden hover:scale-105 duration-100"
                        >
                            <div className="flex justify-center items-center w-full h-2/3 rounded-t-xl">
                                <img className="w-full h-auto" src={tshirt} alt="" />
                            </div>
                            <div className="w-full h-1/2 rounded-b-xl p-2">
                                <h1 className="text-xl font-bold text-center py-2">
                                    {card.title}
                                </h1>
                                <div className="flex justify-around items-center gap-2 py-2">
                                    <h1 className='font-bold text-2xl'>{card.price} Dh</h1>
                                    <button className="flex justify-center items-center bg-transparent text-gray-300 border-2 border-gray-300  rounded-full w-12 h-12 font-semibold hover:bg-gray-500 hover:border-gray-500 hover:text-white duration-100 text-2xl">
                                        <FaCartPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>






        </div >
    )
}

export default FeaturedProducts