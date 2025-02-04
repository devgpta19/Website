import React from "react";
import {
  Rocket,
  Users,
  Brain,
  Target,
  BarChart,
  Code,
  GraduationCap,
  Globe,
  ArrowRight,
} from "lucide-react";

const perks = [

  {
    text: "Innovative Tech Stack",
    icon: Code,
    description:
      "Work with cutting-edge technologies and modern frameworks to build high-performance applications.",
  },
  {
    text: "Rapid Growth",
    icon: Rocket,
    description:
      "Join a fast-growing team with opportunities to take on new challenges and accelerate your career.",
  },
  {
    text: "Great Culture",
    icon: Users,
    description:
      "Be part of a collaborative, inclusive, and supportive environment that values creativity and teamwork.",
  },
  {
    text: "Learning Opportunities",
    icon: Brain,
    description:
      "Enhance your skills with continuous learning, mentorship programs, and hands-on experience.",
  },
  {
    text: "Global Impact",
    icon: Globe,
    description:
      "Contribute to projects that have a worldwide reach and make a meaningful difference in the industry.",
  },
  {
    text: "Career Growth",
    icon: Target,
    description:
      "Advance your career with clear growth paths, leadership opportunities, and professional development.",
  },
  {
    text: "Mentorship",
    icon: GraduationCap,
    description:
      "Learn from industry experts, receive personalized guidance, and grow under experienced mentorship.",
  },
  {
    text: "Data-Driven",
    icon: BarChart,
    description:
      "Leverage data analytics and insights to make informed decisions and drive strategic growth.",
  },

];

// Double the perks array for seamless loop
const scrollContent = [...perks, ...perks];

const WhyJoinUs = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-[#ab20fd]/10 rounded-full text-[#ab20fd] text-sm font-medium mb-6">
            JOIN OUR TEAM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join
            <span className="text-[#ab20fd]"> TradyLytics</span>?
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Be part of India's fastest-growing trading analytics platform. We're
            building something special and looking for exceptional talent.
          </p>
        </div>

        {/* Infinite Scroll Section */}
        {/* <div className="relative w-full overflow-hidden py-10 bg-[#ab20fd]/5 rounded-2xl mb-20">
          Gradient Overlays.
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

          Scrolling Content
          <div className="flex animate-scroll">
            {scrollContent.map((perk, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 shrink-0 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ab20fd]/10 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-[#ab20fd]" />
                </div>
                <span className="text-lg font-medium text-white whitespace-nowrap">
                  {perk.text}
                </span>
              </div>
            ))}
          </div>
        </div> */}


        <div className="relative w-full overflow-hidden py-10 bg-[#ab20fd]/5 rounded-2xl mb-20">
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Infinite Scrolling Container */}
          <div className="flex gap-8 animate-scroll">
            {/* Duplicate content for seamless effect */}
            {[...scrollContent, ...scrollContent].map((perk, index) => (
              <div key={index} className="flex items-center gap-4 px-8 shrink-0 py-4">
                <div className="w-10 h-10 rounded-xl bg-[#ab20fd]/10 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-[#ab20fd]" />
                </div>
                <span className="text-lg font-medium text-white whitespace-nowrap">
                  {perk.text}
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.slice(0, 6).map((perk, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-black/40 border border-[#27272a] hover:border-[#ab20fd] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-[#ab20fd]/10 flex items-center justify-center mb-4">
                <perk.icon className="w-6 h-6 text-[#ab20fd] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                {perk.text}
              </h3>
              <p className="text-gray-400">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#ab20fd] rounded-xl 
            hover:bg-[#ab20fd]/90 transition-all duration-300"
          >
            <span className="text-white font-medium">View Open Positions</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>

      {/* Add the animation keyframe to your global CSS or styles */}
      <style jsx global>{`
        @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to   {
         transform: translateX(-50%);
        }
        }
        .animate-scroll {
          display: flex;
          min-width: max-content; /* Ensures enough width for smooth scrolling */
          animation: scroll 45s linear infinite;
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default WhyJoinUs;
