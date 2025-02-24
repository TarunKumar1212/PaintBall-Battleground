import { Facebook, Instagram, Mail, Target } from "lucide-react"; // Lucide icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Target className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold text-white">Paintball Battlefield</h2>
            </div>
            <p className="mt-3 text-gray-400">The ultimate adventure sports destination</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
             <li><a href="/" className="hover:text-white text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white text-white">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white text-white">Gallery</a></li>
              <li><a href="/reviews" className="hover:text-white text-white">Review</a></li>
              <li><a href="/prices" className="hover:text-white text-white">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-3 text-gray-400">
              Shahid Sankalp Children Park, near Oxygen Park, Morabadi, <br />
              Ranchi, Jharkhand 834008
            </p>
            <p className="mt-2">Phone: <a href="tel:+919939993293" className="hover:text-white">+919939993293</a></p>
            <p>Email: <a href="mailto:info@paintballbf.com" className="hover:text-white">info@paintballbf.com</a></p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a href="#" className="hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2025 Paintball Battlefield. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;