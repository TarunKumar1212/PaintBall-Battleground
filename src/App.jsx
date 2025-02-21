import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page
import ReviewPage from "./pages/ReviewPage";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar stays fixed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<ReviewPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </>
  );
}

export default App;
