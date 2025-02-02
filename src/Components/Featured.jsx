import React, { useState } from "react";
import {
  ArrowRight,
  LineChart,
  BarChart2,
  History,
  Lightbulb,
  Users,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, isHovered, onHover, index }) => (
  <div
    className="relative group p-8 rounded-2xl bg-black/40 border border-[#27272a] hover:border-[#ab20fd]/30 transition-all duration-300"
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
    style={{
      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDelay: `${index * 50}ms`,
    }}
  >
    {/* Gradient Background Effect on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

    {/* Icon Container */}
    <div className="w-12 h-12 rounded-xl bg-[#ab20fd]/10 flex items-center justify-center mb-4">
      <div
        className={`relative flex items-center justify-center w-full h-full rounded-xl transition-all duration-300 
        ${isHovered ? "bg-[#ab20fd]/20" : "bg-black"}`}
      >
        {/* Icon */}
        <Icon
          className={`w-6 h-6 text-[#ab20fd] group-hover:scale-110 transition-transform duration-300 
          ${isHovered ? "text-[#ab20fd] scale-110" : "text-zinc-500"}`}
        />
      </div>
    </div>

    {/* Title and Description */}
    <h3 className="text-xl font-semibold text-white mb-2 transition-colors group-hover:text-[#ab20fd]">
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300 group-hover:text-zinc-400">
      {description}
    </p>

    {/* Learn More Link */}
    <div className="mt-4 pt-2 border-t border-white/5">
      <div
        className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 
        ${isHovered ? "text-[#ab20fd]" : "text-zinc-600"}`}
      >
        <span className="tracking-wide">Explore Feature</span>
        <ArrowRight
          className={`w-[1vw] sm:w-[2vw] h-[1vw] sm:h-[2vw] transition-all duration-300 transform 
          ${isHovered ? "translate-x-[0.3vw]" : ""}`}
        />
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: LineChart,
      title: "Auto-Sync with Brokers",
      description:
        "Seamlessly fetch trading data from your broker accounts to eliminate manual entry.",
    },
    {
      icon: BarChart2,
      title: "Comprehensive Analytics",
      description:
        "Gain a clear overview of key metrics like P&L, win rates, and drawdowns at a glance.",
    },
    {
      icon: History,
      title: "Strategy Backtesting",
      description:
        "Test trading strategies on historical data to refine and optimize performance.",
    },
    {
      icon: Lightbulb,
      title: "Trade Insights",
      description:
        "Receive actionable insights to identify profitable patterns and areas for improvement.",
    },
    {
      icon: Users,
      title: "Community Forum",
      description:
        "Engage with a vibrant trader community to exchange strategies, tips, and learnings.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description:
        "Leverage AI to analyze trades, detect patterns, and suggest smarter strategies.",
    },
    {
      icon: Clock,
      title: "Performance Breakdown",
      description:
        "Track P&L by day and time to uncover when you perform best in the market.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management Tools",
      description:
        "Monitor critical metrics like drawdowns and position sizes to stay in control of risks.",
    },
  ];

  return (
    <section className="relative py-[10vw] md:py-[5vw] bg-black overflow-hidden">
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:4vw_4vw]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative max-w-full mx-auto">
        {/* Enhanced Section Header */}
        {/* <div className="text-center mb-[8vw] sm:mb-[6vw]">
          <div className="inline-flex items-center px-[1.2vw] py-[0.6vw] bg-[#14031D] rounded-full mb-[2vw] border border-white/5">
            <span className="text-[0.9vw] sm:text-[1vw] text-[#ab20fd] font-medium tracking-widest uppercase">
              Features
            </span>
          </div>

          <div className="max-w-full mx-auto space-y-[2vw] sm:space-y-[4vw]">
            <h2 className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-bold tracking-tight">
              <span className="text-white/90">Power Your Trading with </span>
              <span className="text-[#ab20fd]">Advanced Features</span>
            </h2>

            <p className="text-[1.2vw] sm:text-[1.4vw] md:text-[1vw] text-zinc-500 font-light leading-relaxed">
              Everything you need to analyze, track, and improve your trading
              performance
            </p>
          </div>
        </div> */}




        <div className="mb-12  text-center text-white">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 bg-[#ab20fd]/10 rounded-full text-[#ab20fd] text-sm font-medium mb-6">
            FEATURES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Power Your Trading with <br /><span className="text-[#ab20fd]"> Advanced Analytics</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Be part of India's fastest-growing trading analytics platform.
              We're building something special and looking for exceptional
              talent.
            </p>
          </div>
        </div>






        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3vw] sm:gap-[2vw] px-4 md:px-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
