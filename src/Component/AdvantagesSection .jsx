import { Shield, Users, Star, Clock } from "lucide-react"; // Icons from Lucide React

const advantages = [
  {
    id: 1,
    title: "Safety First",
    description: "Professional safety equipment and trained staff",
    icon: <Shield className="w-12 h-12 text-red-500" />,
  },
  {
    id: 2,
    title: "Expert Staff",
    description: "Experienced referees and instructors",
    icon: <Users className="w-12 h-12 text-red-500" />,
  },
  {
    id: 3,
    title: "Top Equipment",
    description: "Latest paintball markers and gear",
    icon: <Star className="w-12 h-12 text-red-500" />,
  },
  {
    id: 4,
    title: "Flexible Hours",
    description: "Open all week with extended weekend hours",
    icon: <Clock className="w-12 h-12 text-red-500" />,
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="flex flex-col items-center">
              {advantage.icon}
              <h3 className="text-lg font-bold mt-4">{advantage.title}</h3>
              <p className="text-gray-600 mt-2">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;