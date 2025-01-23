import './FeaturedProducts.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import CardProduct from '../CardProduct/CardProduct';
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const FeaturedProducts = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsPerView, setCardsPreView] = useState(3)
    const btnPrev = useRef();
    const btnNext = useRef();

    const navigate = useNavigate();

    const NewProducts = props.products.filter(product => product.isNew);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? NewProducts.length - cardsPerView : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + cardsPerView >= NewProducts.length
                ? 0
                : prevIndex + 1
        );
    };

    const handleProductClick = (id) =>{
        navigate(`/product/${id}`)
    };

    useEffect(() => {
        if (btnNext.current && btnPrev.current) {
            if (currentIndex === 0) {
                // Add blue color to the Next button when at the first card
                btnNext.current.classList.add('bg-blue-500', 'border-blue-500');
                btnPrev.current.classList.remove('bg-blue-500', 'border-blue-500'); // Remove from Prev
            } else if (currentIndex >= 0 && currentIndex < NewProducts.length - 1) {
                // If in between, show both buttons as active
                btnNext.current.classList.add('bg-blue-500', 'border-blue-500');
                btnPrev.current.classList.add('bg-blue-500', 'border-blue-500');
            } else if (currentIndex === NewProducts.length - 1) {
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
                    <button className='btn-prev relative border-2 font-bold border-blue-300 text-white rounded-xl bg-blue-300 w-10 h-10 text-4xl hover:border-blue-500 hover:bg-blue-500 duration-100 ' ref={btnPrev} onClick={handlePrev}><GrFormPrevious /></button>
                    <button className='btn-next relative border-2 font-bold border-blue-300 text-white rounded-xl bg-blue-300 w-10 h-10 text-4xl hover:border-blue-500 hover:bg-blue-500 duration-100' ref={btnNext} onClick={handleNext}><GrFormNext /></button>
                </div>
            </div>

            <div className="slider_featured overflow-hidden my-5">
                <div
                    className="slider-track_featured flex justify-between items-center gap-9 w-full h-[530px]"
                    style={{
                        transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
                    }}
                >
                    {NewProducts.map((NewProduct) => (
                        <CardProduct
                            key={NewProduct.id}
                            frontImg={NewProduct.frontMockups}
                            backImg={NewProduct.backMockups}
                            title={NewProduct.title}
                            description={NewProduct.description}
                            price={NewProduct.price}
                            onClick ={()=>handleProductClick(NewProduct.id)}
                        />
                    ))}
                </div>
            </div>






        </div >
    )
}

export default FeaturedProducts