import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/logo.jpg"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close menu when clicking a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md border-b-4 border-black fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo (Left Side) */}
        <Link to="/" className="flex items-center text-black text-xl font-bold" onClick={closeMenu}>
          <img className="h-10 w-10 object-cover rounded-full mr-2" src={logo} alt="logo" />
          <span>Paintball Battlefield</span>
        </Link>

        {/* Desktop Menu (Centered) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" className="hover:underline decoration-red-600 decoration-2 underline-offset-4">Home</Link></li>
          <li><Link to="/about" className="hover:underline decoration-red-600 decoration-2 underline-offset-4">About Us</Link></li>
          <li><Link to="/gallery" className="hover:underline decoration-red-600 decoration-2 underline-offset-4">Gallery</Link></li>
          <li><Link to="/reviews" className="hover:underline decoration-red-600 decoration-2 underline-offset-4">Reviews</Link></li>
          <li><Link to="/prices" className="hover:underline decoration-red-600 decoration-2 underline-offset-4">Prices</Link></li>
        </ul>

        {/* Book Now Button (Right Side) */}
        <Link to="/booking" className="hidden md:block bg-green-500 text-font-medium px-4 py-2 rounded-full hover:bg-yellow-400 transition">
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
          <ul className="space-y-4 text-gray-700 text-lg">
            <li><Link to="/" className="block hover:underline decoration-red-600 decoration-2 underline-offset-4" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className="block hover:underline decoration-red-600 decoration-2 underline-offset-4" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/gallery" className="block hover:underline decoration-red-600 decoration-2 underline-offset-4" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/reviews" className="block hover:underline decoration-red-600 decoration-2 underline-offset-4" onClick={closeMenu}>Reviews</Link></li>
            <li><Link to="/prices" className="block hover:underline decoration-red-600 decoration-2 underline-offset-4" onClick={closeMenu}>Prices</Link></li>
            <li>
              <Link to="/booking" className="block bg-green-600 text-center text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition" onClick={closeMenu}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
