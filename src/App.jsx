import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page

function App() {
  return (
    <>
      <Navbar /> {/* Navbar stays fixed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
