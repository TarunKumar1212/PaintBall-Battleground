import { useState } from "react";
import Crousal from "../Component/Crousal";
// import ReviewBg from "../assets/Image2/img2.webp";
import Footer from "../Component/Footer";

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) return;

    const newReview = { id: Date.now(), name, review };
    setReviews([newReview, ...reviews]);

    setName("");
    setReview("");
  };

  return (
    <>
      {/* Hero Section */}
      <Crousal use="InReview" />

      {/* Review Section */}
      <div 
      className="bg-gray-100 min-h-screen py-10 px-4" >
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Review Form */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <textarea
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm h-32 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Submit Review
            </button>
          </form>

          {/* Reviews List */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Reviews</h3>
            {reviews.length === 0 ? (
              <p className="text-gray-500 text-center">No reviews yet. Be the first to leave one!</p>
            ) : (
              <ul className="space-y-4">
                {reviews.map((rev) => (
                  <li
                    key={rev.id}
                    className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm"
                  >
                    <strong className="text-gray-800">{rev.name}:</strong>
                    <p className="text-gray-700 mt-1">{rev.review}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
