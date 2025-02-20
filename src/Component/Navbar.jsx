import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center text-black text-xl font-bold">
          <span className="text-red-600 text-2xl mr-2">🎯</span> 
          <span>Paintball Battlefield</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/about" className="hover:text-black">About Us</Link></li>
          <li><Link to="/services" className="hover:text-black">Services</Link></li>
          <li><Link to="/photos" className="hover:text-black">Photos</Link></li>
          <li><Link to="/reviews" className="hover:text-black">Reviews</Link></li>
          <li><Link to="/prices" className="hover:text-black">Prices</Link></li>
        </ul>

        {/* Book Now Button */}
        <Link to="/booking" className="hidden md:block bg-red-600 text-black px-4 py-2 rounded-full hover:bg-red-700 transition">
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="space-y-4 text-gray-700">
            <li><Link to="/" className="block hover:text-black">Home</Link></li>
            <li><Link to="/about" className="block hover:text-black">About Us</Link></li>
            <li><Link to="/services" className="block hover:text-black">Services</Link></li>
            <li><Link to="/photos" className="block hover:text-black">Photos</Link></li>
            <li><Link to="/reviews" className="block hover:text-black">Reviews</Link></li>
            <li><Link to="/prices" className="block hover:text-black">Prices</Link></li>
            <li><Link to="/booking" className="block bg-red-600 text-center text-black px-4 py-2 rounded-full hover:bg-red-700 transition">Book Now</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
