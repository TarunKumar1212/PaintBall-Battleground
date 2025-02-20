import Img1 from "../assets/Image2/img1.jpg";
import Img2 from "../assets/Image2/img2.webp";
import Img3 from "../assets/Image2/img3.jpg";


const offers = [
  {
    id: 1,
    title: "Team Games",
    description: "Engage in exciting team-based scenarios and missions",
    image: Img1, // ✅ Import used
  },
  {
    id: 2,
    title: "Equipment Rental",
    description: "Professional-grade paintball gear and safety equipment",
    image: Img3, // ✅ Import used
  },
  {
    id: 3,
    title: "Private Events",
    description: "Perfect for birthday parties and corporate team building",
    image: Img2, // ✅ Import used
  },
];



const HeroSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow-lg rounded-xl p-5">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{offer.title}</h3>
              <p className="text-gray-600 mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;