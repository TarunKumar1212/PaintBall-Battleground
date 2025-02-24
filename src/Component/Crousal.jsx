import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img1 from "../assets/Images/Img1.jpg";
import Img2 from "../assets/Images/Img2.jpg";
import Img3 from "../assets/Images/Img3.jpg";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Carousel = ({ use }) => {
  const carouselHeight = use ? "h-[500px]" : "h-[650px]"; // Adjust height dynamically

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        className={`w-full ${carouselHeight}`} // Dynamic height
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img1} alt="Paintball Action 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-center pt-10 md:pt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Welcome to Paintball Battlefield
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Experience the ultimate adventure in tactical combat simulation.
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <Link to="/booking">Explore Now</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img2} alt="Paintball Action 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-center pt-10 md:pt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Team Up & Conquer
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Build strategies, communicate effectively, and lead your team to victory.
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                 <Link to="/booking">Join the Battle</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img3} alt="Paintball Action 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-center pt-10 md:pt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Unleash Your Skills
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Improve your aim, master tactical movements, and challenge yourself.
              </motion.p>
              <motion.button
                className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
               <Link to="/booking"> Get Started</Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
