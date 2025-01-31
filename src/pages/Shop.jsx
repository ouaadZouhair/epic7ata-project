import Footer from '../components/footer/Footer'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa";
import CartProduct from '../components/CartProduct/CartProduct';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function Shop({ Products }) {
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  

  const navigate = useNavigate();
  const productsPerPage = 12;

  const filteredProducts = Products.filter((product) => {
    const matchesProductType =
      !selectedProductType || product.type === selectedProductType;
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesProductType && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(()=>{
    window.scroll(0,0)
  }, [currentProducts])

  const handleProductTypeChange = (e) => {
    setSelectedProductType(e.target.value);
    setCurrentPage(1); // Reset pagination
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset pagination
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 my-10 w-full">
        
        <div className="flex flex-col md:flex-row justify-start items-center w-[70%] h-auto bg-blue-500 rounded-3xl text-white text-lg p-4 gap-5">
          <div className="flex items-center gap-4">
            <label className="text-xl font-medium">Products:</label>
            <select
              name="Products"
              className="bg-white rounded-full w-[100%] h-9 text-black px-3"
              value={selectedProductType}
              onChange={handleProductTypeChange}
            >
              <option value="">All</option>
              <option value="ClaTshirts">Classic Tshirts</option>
              <option value="OvTshirts">Oversize Tshirts</option>
              <option value="ClaHoodies">Classic Hoodies</option>
              <option value="OvHoodies">Oversize Hoodies</option>
              <option value="Caps">Caps</option>
              <option value="Mugs">Mugs</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-xl font-medium">Categories:</label>
            <select
              name="Categories"
              className="bg-white rounded-full w-[100%] h-9 text-black px-3"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Anime">Anime</option>
              <option value="Sport">Sport</option>
              <option value="Music">Music</option>
              <option value="superCars">Super Cars</option>
              <option value="MoviesAndSeries">Movies & Series</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className='flex flex-col justify-between items-center w-full h-auto'>
          <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 justify-items-center">
            {currentProducts.map(({id, backMockups, frontMockups, title, price}, i) => (
              <CartProduct 
              key={id}
              title={title}
              backImg={backMockups}
              frontImg={frontMockups}
              price={price}
              onClick ={() => handleProductClick(id)}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              className={`px-2 py-2 rounded-lg text-xl ${currentPage === 1 ? "bg-gray-600 text-white cursor-not-allowed" : "bg-blue-500 text-white"
                }`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <GrFormPrevious />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 rounded ${currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                  }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-2 py-2 rounded-lg text-xl ${currentPage === totalPages ? "bg-gray-600 text-white cursor-not-allowed" : "bg-blue-600 text-white"
                }`}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <GrFormNext />
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;

