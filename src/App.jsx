import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "./components/Navbar/Navbar.jsx"
import TopNav from "./components/Navbar/TopNav.jsx"
import Home from "./pages/Home.jsx";
import Print from "./pages/Print.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx"
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

// const productsData = [
//   {
//     id: 1,
//     title: "2PAC Hoodie",
//     description: "Honor the legendary Tupac Shakur with this stylish and comfortable hoodie. Featuring iconic designs inspired by his music and legacy, it’s a must-have for any fan.",
//     price: 200,
//     colors: ['bg-black', 'bg-white', 'bg-red-500', 'bg-blue-900'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/2pac-black-hoodie.jpeg',
//     backMockups: '',
//     isTopSelling: true,
//     isNew: false
//   },
//   {
//     id: 2,
//     title: "Kobe brayant Hoodie",
//     description: "Celebrate the legacy of Kobe Bryant with this premium hoodie. Featuring a bold design inspired by his iconic career, it’s stylish, comfortable, and perfect for any fan.",
//     price: 200,
//     colors: ['bg-black', 'bg-white', 'bg-red-500'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Kobe-white-front-hoodie.jpeg',
//     backMockups: '/mockups/Kobe-white-back-hoodie.jpeg',
//     isTopSelling: true,
//     isNew: false
//   },
//   {
//     id: 3,
//     title: "Gojo Saturu Hoodie",
//     description: "Show your love for Jujutsu Kaisen with this stylish Gojo Satoru hoodie. Featuring a bold design inspired by the iconic character, it’s perfect for anime fans and everyday wear.",
//     price: 200,
//     colors: ['bg-black', 'bg-white'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Gojo-white-front-hoodie.jpeg',
//     backMockups: '/mockups/Gojo-white-back-hoodie.jpeg',
//     isTopSelling: true,
//     isNew: false
//   },
//   {
//     id: 4,
//     title: "Son Goku Hoodie",
//     description: "Embrace your inner Saiyan with this epic Son Goku hoodie. Featuring a dynamic design inspired by the legendary Dragon Ball hero, it’s perfect for fans of all ages.",
//     price: 200,
//     colors: ['bg-black', 'bg-white', 'bg-orange-500', 'bg-blue-500'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Goku-black-front-hoodie.jpeg',
//     backMockups: '/mockups/Goku-black-back-hoodie.jpeg',
//     isTopSelling: true,
//     isNew: false
//   },
//   {
//     id: 5,
//     title: "Monky D Luffy Gear 5 Hoodie",
//     description: "Celebrate the power of Gear 5 with this epic Monkey D. Luffy hoodie. Featuring a striking design inspired by One Piece’s iconic transformation, it’s a must-have for every anime fan.",
//     price: 200,
//     colors: ['bg-black', 'bg-white', 'bg-red-500'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Luffy-black-front-hoodie.png',
//     backMockups: '/mockups/Luffy-black-back-hoodie.jpeg',
//     isTopSelling: true,
//     isNew: false
//   },
//   {
//     id: 6,
//     title: "Naruto Akatsuki Hoodie",
//     description: "Show your allegiance to the infamous Akatsuki with this bold Naruto hoodie. Featuring the iconic Akatsuki cloud symbol, it’s perfect for fans of the legendary anime series.",
//     price: 200,
//     colors: ['bg-black', 'bg-white'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Akatuki-black-front-hoodie.jpeg',
//     backMockups: '/mockups/Akatsuki-black-back-hoodie.png',
//     isTopSelling: false,
//     isNew: true
//   },
//   {
//     id: 7,
//     title: "Roronoa Zoro Hoodie",
//     description: "Honor the swordsman of the Straw Hat Pirates with this Roronoa Zoro hoodie. Featuring his signature style, it's perfect for One Piece fans who admire his strength and determination.",
//     price: 200,
//     colors: ['bg-black', 'bg-white', 'bg-green-700'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/front-green-hoodie-Zoro.png',
//     backMockups: '/mockups/back-green-hoodie-ZORO.png',
//     isTopSelling: false,
//     isNew: true
//   },
//   {
//     id: 8,
//     title: "Toji Fushiguro JJK Hoodie",
//     description: "Embrace the dark side with this Toji Fushiguro hoodie. Featuring a sleek design inspired by the powerful Jujutsu Kaisen character, it’s perfect for fans of the series.",
//     price: 200,
//     colors: ['bg-black', 'bg-white'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Toji-black-front-hoodie.jpeg',
//     backMockups: '/mockups/Toji-black-back-hoodie.jpeg',
//     isTopSelling: false,
//     isNew: true
//   },
//   {
//     id: 9,
//     title: "Kobe brayant Hoodie",
//     description: "Celebrate the legacy of Kobe Bryant with this comfortable and stylish hoodie. Featuring iconic designs that honor his Mamba Mentality, it’s a must-have for basketball fans.",
//     price: 200,
//     colors: ['bg-black', 'bg-white'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Kobe2-black-front-hoodie.jpeg',
//     backMockups: '/mockups/Kobe2-black-back-hoodie.jpeg',
//     isTopSelling: false,
//     isNew: true
//   },
//   {
//     id: 10,
//     title: "Michael Jordan Hoodie",
//     description: "Celebrate the legacy of basketball’s greatest with this Michael Jordan hoodie. Featuring iconic designs inspired by His Airness, it’s perfect for fans who admire his unparalleled skill and impact on the game.",
//     price: 200,
//     colors: ['bg-black', 'bg-white'],
//     sizes: ['S', 'M', 'L', 'XL', '2XL'],
//     frontMockups: '/mockups/Jordan-white-front-hoodie.jpeg',
//     backMockups: '/mockups/Jordan-white-back-hoodie.jpeg',
//     isTopSelling: false,
//     isNew: true
//   },

// ]


 
function App() {
  const productsData = useSelector(state => state.shop.products)
  console.log(productsData)
  
  return (
    <>
      <TopNav />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home Products={productsData} />} />
          <Route path="/print" element={<Print />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product Products={productsData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
