import { Mail, Phone, MapPin, Users, CheckCircle } from "lucide-react";

const aboutUsData = {
  title: "About Us",
  description:
    "We are a dedicated team committed to delivering innovative solutions. Our mission is to provide high-quality services that meet the needs of our clients.",
  team: [
    {
      name: "Robin Singh",
      role: "CEO & Founder",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio ut ex deleniti praesentium et exercitationem suscipit minima deserunt inventore.",
      image: "demo.jpg",
    },
    {
      name: "Abhishek Gupta",
      role: "CTO & Founder",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio ut ex deleniti praesentium et exercitationem suscipit minima deserunt inventore.",
      image: "demo.jpg",
    },
  ],
  values: ["Innovation", "Customer Satisfaction", "Integrity", "Excellence"],
};

const TeamCard = ({ member }) => {
  return (
    <div className="group relative">
      <div className="relative group p-8 rounded-2xl bg-black/40 border border-[#27272a] hover:border-[#ab20fd] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
        <div className="flex flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mb-4 bg-[#27272a]"
          />
          <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
          <p className="text-[#ab20fd]">{member.role}</p>
          <p className="text-gray-400 mt-2">{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1 bg-[#ab20fd]/10 rounded-full text-[#ab20fd] text-sm font-medium mb-6">
          WHO WE ARE
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {aboutUsData.title}
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          {aboutUsData.description}
        </p>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {aboutUsData.team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {aboutUsData.values.map((value, index) => (
            <div key={index} className="flex items-center gap-2 p-4 bg-[#ab20fd]/10 text-white rounded-2xl shadow">
              <CheckCircle className="text-[#ab20fd]" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}