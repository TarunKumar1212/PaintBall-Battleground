import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import { FaTicketAlt } from "react-icons/fa"; // Import Ticket Icon
import img from "../assets/Images/Img2.jpg"; // Import Background Image

const TicketPricing = () => {
  // Dynamic Pricing Data
  const pricingData = [
    { id: 1, day: "Weekdays", category: "Adults", price: "₹500.00" },
    { id: 2, day: "Weekends", category: "Adults", price: "₹600.00" },
    { id: 3, day: "Weekdays", category: "Children (3ft - 4ft)", price: "₹400.00" },
    { id: 4, day: "Weekends", category: "Children (3ft - 4ft)", price: "₹500.00" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section with Background Image */}
      <div
        className="mt-20 relative h-64 flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`, // Set Image as Background
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Title */}
        <h1 className="text-4xl font-bold relative z-10">
          🎟️ Get Your Tickets Now! 🎟️
        </h1>
      </div>

      {/* Ticket Pricing Section */}
      <div className="py-12 px-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Choose Your Ticket Category
        </h2>

        {/* Ticket Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pricingData.map((ticket) => (
            <div
              key={ticket.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Ticket Header */}
              <div className="bg-yellow-400 text-center py-4 group-hover:bg-blue-500 transition">
                <h3 className="text-lg font-bold text-white">{ticket.day}</h3>
              </div>

              {/* Ticket Details */}
              <div className="p-6 text-center">
                <FaTicketAlt className="text-4xl text-yellow-500 mb-3 group-hover:text-green-500 transition" />
                <p className="text-gray-700 mb-4">{ticket.category}</p>
                <p className="text-2xl font-extrabold text-gray-800 mb-6">{ticket.price}</p>

                {/* Pass Data to BuyPage */}
                <Link
                  to="/buy"
                  state={ticket}
                  className="bg-yellow-400 text-white font-bold py-2 px-6 rounded-full transition 
                             hover:bg-green-500 group-hover:bg-blue-500 cursor-pointer"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default TicketPricing;
