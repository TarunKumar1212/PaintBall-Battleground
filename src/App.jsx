import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page
import ReviewPage from "./pages/ReviewPage";
import Gallery from "./pages/Gallery";
import Price from "./pages/TicketPricing";
import BuyPage from "./pages/Buy";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar stays fixed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<ReviewPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/prices" element={<Price/>} />
        <Route path="/booking" element={<Price/>} />
        <Route path="/buy" element={<BuyPage/>} />
      </Routes>
    </>
  );
}

export default App;
