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

 
function App() {

  const productsData = useSelector(state => state.shop.products)

  return (
    <>
      <TopNav />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home Products={productsData} />} />
          <Route path="/print" element={<Print />} />
          <Route path="/shop" element={<Shop Products={productsData}/>} />
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
