import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Importing an icon for close button
import Img1 from "../assets/Gallery/1.jpg";
import Img2 from "../assets/Gallery/2.jpg";
import Img3 from "../assets/Gallery/3.jpg";
import Img4 from "../assets/Gallery/4.jpg";
import Img5 from "../assets/Gallery/5.jpg";
import Img6 from "../assets/Gallery/6.jpg";
import Footer from "../Component/Footer";
import newImg1 from "../assets/Gallery/new1.jpg";
import newImg2 from "../assets/Gallery/new2.jpg";
import newImg3 from "../assets/Gallery/new3.jpg";

const images = [
  { id: 1, src: Img1, alt: "Paintball Action Shot 1" },
  { id: 2, src: Img2, alt: "Paintball Gear" },
  { id: 3, src: Img3, alt: "Team Victory" },
  { id: 4, src: Img4, alt: "Paintball Action Shot 2" },
  { id: 5, src: Img5, alt: "Game Strategy" },
  { id: 6, src: Img6, alt: "Celebration Moment" },
  { id: 7, src: newImg1, alt: "Loading" },
  { id: 8, src: newImg2, alt: "Loading" },
  { id: 9, src: newImg3, alt: "Loading" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-10 py-10 px-4 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Paintball Gallery
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 bg-gray-800 text-white p-2 rounded-full hover:bg-red-500 transition"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              {/* Enlarged Image */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
