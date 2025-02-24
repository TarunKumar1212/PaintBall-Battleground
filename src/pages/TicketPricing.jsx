import { useEffect } from "react"; //
import Footer from "../Component/Footer";

const TicketPricing = () => {


  const pricingData = [
    { day: "Weekdays", category: "Adults", price: "₹500.00" },
    { day: "Weekends", category: "Adults", price: "₹600.00" },
    { day: "Weekdays", category: "Children between 3-ft. and 4-ft.", price: "₹400.00" },
    { day: "Weekends", category: "Children between 3-ft. and 4-ft.", price: "₹500.00" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <>
       <div className= " mt-15  py-10 px-5 bg-gray-300 min-h-screen  ">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8 ">Ticket Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingData.map((ticket, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="bg-yellow-400 text-center py-4 group-hover:bg-blue-500">
              <h3 className="text-lg font-bold text-white">{ticket.day}</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-700 mb-4">{ticket.category}</p>
              <p className="text-2xl font-extrabold text-gray-800 mb-6">{ticket.price}</p>
              <button className="group-hover:bg-blue-500 cursor-pointer  bg-yellow-400 text-white font-bold py-2 px-6 rounded-full hover:bg-green-500 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
 
    <Footer/>
    </>
 
  );
};

export default TicketPricing;