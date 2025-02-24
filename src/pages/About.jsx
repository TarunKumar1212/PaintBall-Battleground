import img1 from "../assets/ImgAbout/img1.jpg"
import AdvantagesSection from "../Component/AdvantagesSection ";
import Footer from "../Component/Footer";
import { useEffect } from "react"; //

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    
    
    <div className="mt-[65px] bg-gray-100">
    <section className=" text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div>
            <img
              src={img1}  // Replace with actual image path
              alt="Paintball Battlefield"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-cyan-600">
              WELCOME TO PAINTBALL BATTLEFIELD
            </h2>
            <p className="mt-4 text-lg text-black">
              Experience the thrill of combat at Paintball Battlefield,
              Ranchi&apos;s ultimate adventure sports destination. Located at Shahid Sankalp Children Park, near Ranchi University, Morabadi, Ranchi, Jharkhand 834008, we bring you an action-packed paintball experience like no other!
            </p>
            <p className="mt-4 text-black  leading-relaxed">
              Whether you&apos;re planning a weekend adventure, a corporate event, or a fun day out with friends, our top-notch equipment, expert referees, and thrilling battlefields ensure an adrenaline-pumping experience. 
              Safety is our priority, and we provide professional-grade gear to keep every match exciting yet secure.
            </p>

            <div className="mt-6">
              <p className="font-semibold text-black">📍 Location:</p>
              <p className="text-black">
                Shahid Sankalp Children Park, near Ranchi University, Morabadi, Ranchi, Jharkhand 834008
              </p>

              <p className="mt-4 font-semibold text-black">📞 Contact Us:</p>
              <p className="text-black">Phone: <a href="tel:+9199399932" className="text-cyan-600">+91 99399932xx</a></p>
              <p className="text-black">Email: <a href="mailto:info@paintballbf.com" className="text-cyan-600">info@paintballbf.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AdvantagesSection/>
    <Footer/>
    </div>
  );
};

export default About;