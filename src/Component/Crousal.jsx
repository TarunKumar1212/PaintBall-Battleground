import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img1 from "../assets/Images/Img1.jpg";
import Img2 from "../assets/Images/Img2.jpg";
import Img3 from "../assets/Images/Img3.jpg";

const Carousel = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        className="h-[650px] w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[650px]">
            <img src={Img1} alt="Paintball Action 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-end pb-24">
              <h1 className="text-6xl font-extrabold drop-shadow-lg">Welcome to Paintball Battlefield</h1>
              <p className="mt-4 text-lg max-w-2xl">
                Experience the ultimate adventure in tactical combat simulation. 
                Engage in thrilling missions, strategize with your team, and dominate the battlefield!
              </p>
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[650px]">
            <img src={Img2} alt="Paintball Action 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-end pb-24">
              <h1 className="text-6xl font-extrabold drop-shadow-lg">Team Up & Conquer</h1>
              <p className="mt-4 text-lg max-w-2xl">
                Build strategies, communicate effectively, and lead your team to victory. 
                Experience the thrill of teamwork in a high-intensity battlefield!
              </p>
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
                Join the Battle
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[650px]">
            <img src={Img3} alt="Paintball Action 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-10 text-white bg-black/40 justify-end pb-24">
              <h1 className="text-6xl font-extrabold drop-shadow-lg">Unleash Your Skills</h1>
              <p className="mt-4 text-lg max-w-2xl">
                Improve your aim, master tactical movements, and challenge yourself. 
                Push your limits and take your paintball experience to the next level!
              </p>
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
