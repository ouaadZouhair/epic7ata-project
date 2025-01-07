import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx"
import TopNav from "./components/Navbar/TopNav.jsx"
import Home from "./pages/Home.jsx";
import Print from "./pages/Print.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  return (
    <>
      <TopNav/>

      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/print" element={<Print/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
