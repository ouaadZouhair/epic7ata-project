import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx"
import TopNav from "./components/Navbar/TopNav.jsx"
import Home from "./pages/Home.jsx";
import Print from "./pages/Print.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

const productsData = [
  { id: 1, title: "2PAC Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/2pac-black-hoodie.jpeg', backMockups:'', isTopSelling: true, isNew: false },
  { id: 2, title: "Kobe brayant Hoodie", description: "white Kobe brayant Hoodie", price: 200, frontMockups: '/mockups/Kobe-white-front-hoodie.jpeg', backMockups:'/mockups/Kobe-white-back-hoodie.jpeg', isTopSelling: true, isNew: false },
  { id: 3, title: "Gojo Saturu Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Gojo-white-front-hoodie.jpeg', backMockups:'/mockups/Gojo-white-back-hoodie.jpeg', isTopSelling: true, isNew: false },
  { id: 4, title: "Son Goku Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Goku-black-front-hoodie.jpeg', backMockups:'/mockups/Goku-black-back-hoodie.jpeg', isTopSelling: true, isNew: false },
  { id: 5, title: "Monky D Luffy Gear 5 Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Luffy-black-front-hoodie.png', backMockups:'/mockups/Luffy-black-back-hoodie.jpeg', isTopSelling: true, isNew: false },
  { id: 6, title: "Naruto Akatsuki Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Akatuki-black-front-hoodie.jpeg', backMockups:'/mockups/Akatsuki-black-back-hoodie.png', isTopSelling: false, isNew: true },
  { id: 7, title: "Roronoa Zoro Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/front-green-hoodie-Zoro.png', backMockups:'/mockups/back-green-hoodie-ZORO.png', isTopSelling: false, isNew: true },
  { id: 8, title: "Toji Zenin JJK Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Toji-black-front-hoodie.jpeg', backMockups:'/mockups/Toji-black-back-hoodie.jpeg', isTopSelling: false, isNew: true },
  { id: 9, title: "Kobe brayant Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Kobe2-black-front-hoodie.jpeg', backMockups:'/mockups/Kobe2-black-back-hoodie.jpeg', isTopSelling: false, isNew: true },
  { id: 10, title: "Kobe brayant Hoodie", description: "black Tupac Shakur Hoodie", price: 200, frontMockups: '/mockups/Jordan-white-front-hoodie.jpeg', backMockups:'/mockups/Jordan-white-back-hoodie.jpeg', isTopSelling: false, isNew: true },

]

function App() {

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
