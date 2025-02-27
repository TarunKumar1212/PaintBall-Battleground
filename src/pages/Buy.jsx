import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BuyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPackage = location.state || null; // Get selected package data

  // Redirect if no package is selected
  useEffect(() => {
    if (!selectedPackage) {
      navigate("/");
    }
  }, [selectedPackage, navigate]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  // Success Message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Allow only numbers for contact field
    if (name === "contact" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", formData);
    console.log("Selected Package:", selectedPackage);
    
    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="mt-20 min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Confirm Your Purchase
        </h2>

        {/* Show message if purchase is successful */}
        {isSubmitted ? (
          <div className="text-center text-green-600 font-bold p-4 bg-green-100 rounded">
            ✅ Purchase Successful! Redirecting...
          </div>
        ) : (
          <>
            {/* Selected Package Details */}
            {selectedPackage ? (
              <div className="mb-6 p-4 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold">{selectedPackage.day}</h3>
                <p className="text-gray-700">{selectedPackage.category}</p>
                <p className="text-xl font-bold text-green-600">{selectedPackage.price}</p>
              </div>
            ) : (
              <p className="text-red-500 text-center">⚠️ No package selected.</p>
            )}

            {/* User Details Form */}
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded-lg"
                placeholder="Enter your name"
                required
              />

              <label className="block mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded-lg"
                placeholder="Enter your address"
                required
              />

              <label className="block mb-2">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 mb-6 border rounded-lg"
                placeholder="Enter your contact number"
                maxLength="10"
                required
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
              >
                Confirm & Buy
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
