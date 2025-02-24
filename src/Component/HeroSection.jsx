import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Img1 from "../assets/Image2/img1.jpg";
import Img2 from "../assets/Image2/img2.webp";
import Img3 from "../assets/Image2/img3.jpg";

const offers = [
  { id: 1, title: "Team Games", description: "Engage in exciting team-based scenarios and missions", image: Img1 },
  { id: 2, title: "Equipment Rental", description: "Professional-grade paintball gear and safety equipment", image: Img3 },
  { id: 3, title: "Private Events", description: "Perfect for birthday parties and corporate team building", image: Img2 },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 }); // Trigger when 30% visible
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 bg-gray-100"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          variants={containerVariants}
        >
          What We Offer
        </motion.h2>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6" variants={containerVariants}>
        {offers.map((offer) => (
          <motion.div 
            key={offer.id} 
            className="bg-white shadow-lg rounded-xl p-5 cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-lg"
              variants={cardVariants}
            />
            <h3 className="text-xl font-bold mt-4">{offer.title}</h3>
            <p className="text-gray-600 mt-2">{offer.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
