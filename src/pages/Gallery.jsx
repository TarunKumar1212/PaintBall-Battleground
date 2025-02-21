import { useState } from "react";
import Img1 from "../assets/Gallery/1.jpg";
import Img2 from "../assets/Gallery/2.jpg";
import Img3 from "../assets/Gallery/3.jpg";
import Img4 from "../assets/Gallery/4.jpg";
import Img5 from "../assets/Gallery/5.jpg";
import Img6 from "../assets/Gallery/6.jpg";
import Footer from "../Component/Footer";

const images = [
  { id: 1, src: Img1, alt: "Paintball Action Shot 1" },
  { id: 2, src: Img2, alt: "Paintball Gear" },
  { id: 3, src: Img3, alt: "Team Victory" },
  { id: 4, src: Img4, alt: "Paintball Action Shot 2" },
  { id: 5, src: Img5, alt: "Game Strategy" },
  { id: 6, src: Img6, alt: "Celebration Moment" },
  { id: 7, src: Img6, alt: "Celebration Moment" },
  { id: 8, src: Img6, alt: "Celebration Moment" },
  { id: 9, src: Img6, alt: "Celebration Moment" },
  { id: 10, src: Img6, alt: "Celebration Moment" },
  { id: 11, src: Img6, alt: "Celebration Moment" },
  { id: 12, src: Img6, alt: "Celebration Moment" },
];
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <div className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Paintball Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;