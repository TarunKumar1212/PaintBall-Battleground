import img1 from "../assets/ImgAbout/img1.jpg"
import AdvantagesSection from "../Component/AdvantagesSection ";
import Footer from "../Component/Footer";
import { useEffect } from "react"; //
import { motion } from "framer-motion";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {/* Hero Section */}
    <div className="relative w-full h-[250px] bg-gradient-to-r from-cyan-600 to-blue-900 flex items-center justify-center">
      <div className="absolute inset-0  bg-opacity-40"></div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-5xl font-extrabold drop-shadow-lg relative z-10"
      >
        About Us
      </motion.h2>
    </div>

    <div className="bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <img
                src={img1}
                alt="Paintball Battlefield"
                className="w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-lg"></div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-blue-700">
                Welcome to Paintball Battlefield
              </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Experience the thrill of combat at{" "}
                <span className="font-semibold">Paintball Battlefield</span>, 
                Ranchi's ultimate adventure sports destination. Located at Shahid Sankalp Children Park, 
                near Ranchi University, Morabadi, Ranchi, Jharkhand 834008, we bring you an action-packed 
                paintball experience like no other!
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Whether you're planning a weekend adventure, a corporate event, or a fun day out with friends, 
                our <span className="font-semibold">top-notch equipment, expert referees, and thrilling battlefields</span> 
                ensure an adrenaline-pumping experience. 
                Safety is our priority, and we provide <span className="font-semibold">professional-grade gear</span> 
                to keep every match exciting yet secure.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-6 bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              >
                <p className="font-semibold text-gray-800">📍 Location:</p>
                <p className="text-gray-700">
                  Shahid Sankalp Children Park, near Oxygen Park, Morabadi, Ranchi, Jharkhand 834008
                </p>

                <p className="mt-4 font-semibold text-gray-800">📞 Contact Us:</p>
                <p className="text-gray-700">
                  Phone: <a href="tel:+9199399932" className="text-blue-600 font-medium">+91 99399932xx</a>
                </p>
                <p className="text-gray-700">
                  Email: <a href="mailto:info@paintballbf.com" className="text-blue-600 font-medium">info@paintballbf.com</a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AdvantagesSection />
      <Footer />
    </div>
  </>
  );
};

export default About;
