import React from "react";
import { ArrowUpRight, BarChart, ChevronRight } from "lucide-react";
import HomeNav from "./HomeNav";

const CareerHero = () => {
  return (
    <div className="min-h-full bg-black text-white overflow-hidden">
      {/* Top Navigation */}

      <HomeNav />

      {/* Main Content */}
      <main className="relative mt-4  flex items-center  ">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Spheres */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ab20fd]/50 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ab20fd]/20 rounded-full blur-3xl opacity-20" />

          {/* Grid Pattern */}
          {/* <div className="absolute inset-0 grid grid-cols-8 gap-px opacity-20">
            {Array(32)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="border-r border-t border-white/10" />
              ))}
          </div> */}
        </div>

        {/* Content Container */}
        <div className="relative max-w-full mx-auto px-6 w-full lg:pt-1">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Main Text Section */}
            <div className="lg:col-span-7 space-y-2 2xl:space-y-14 mt-6  ">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 ">
                <div className="w-2 h-2 rounded-full bg-[#ab20fd] animate-pulse" />
                <span className="text-sm text-white/80">Join Our Team</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6 ">
                <h1 className="text-5xl md:text-6xl 2xl:text-8xl font-bold tracking-tight leading-tight">
                  Create
                  <span className="text-[#ab20fd]"> Trading</span>
                  <br />
                  Solutions for
                  <span className="text-[#ab20fd]"> The World</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-xl">
                  Join our mission to revolutionize trading analytics and
                  empower traders across India with cutting-edge technology.
                </p>
              </div>

              {/* Stats */}
              {/* <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { value: "5+", label: "Team Size" },
                  { value: "100%", label: "Growth" },
                  { value: "15+", label: "Countries" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="text-3xl font-bold tracking-tight text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}

              {/* CTAs */}
              <div className="flex flex-wrap mt-6 items-center gap-5  ">
                <button
                  className="group relative px-6 py-3 bg-[#ab20fd] rounded-full 
                  hover:bg-[#ab20fd]/90 transition-colors"
                >
                  {/* <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#ab20fd] rounded-xl hover:bg-[#ab20fd]/90 cursor-pointer transition-all "></button> */}
                  <span className="flex items-center gap-2">
                    View Open Positions
                    <ArrowUpRight
                      className="w-5 h-5 group-hover:translate-x-0.5 
                      group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </button>
                <button
                  className="group inline-flex px-6 py-3 items-center border border-[#ab20fd]/50 rounded-full gap-2 text-gray-400 
                  hover:text-white hover:border-[#ab20fd]/60 transition-colors"
                >
                  Explore More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* <div className="text-center mt-20">
                <p className="text-gray-400 mb-6">Ready to start your journey with us?</p>
                <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#ab20fd] rounded-xl hover:bg-[#ab20fd]/90 cursor-pointer transition-all ">
                  <span className="text-white font-medium">Apply Now</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div> */}

            </div>

            {/* Visual Section */}
            <div className="lg:col-span-5  mb-4">
              {/* Animated SVG Pattern */}
              <div className="relative aspect-square">
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-4">
                  {Array(25)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden rounded-lg bg-white/5 
                        hover:bg-[#ab20fd]/20 transition-colors duration-500"
                        style={{
                          animationDelay: `${Math.random() * 2}s`,
                          animation:
                            Math.random() > 0.7 ? "pulse 4s infinite" : "none",
                        }}
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/20 
                        to-transparent opacity-0 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CareerHero;
