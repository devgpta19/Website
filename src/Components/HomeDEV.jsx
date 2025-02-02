import React from "react";
import HomeNav from "./HomeNav";
import { ChartBar, Brain, RefreshCw, Zap, Users } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, style }) => (
  <div className="absolute flex flex-col items-center gap-3 p-6 w-80 bg-black/40 border border-[#27272a] rounded-lg pointer-events-none" style={style}>
    {/* Card glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/5 rounded-2xl blur-xl transition-all group-hover:blur-2xl" />
    <div>
      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#a1a1aa]">{description}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const features = [
    {
      icon: ChartBar,
      title: "Real-time Analytics",
      description: "Track your performance with advanced metrics and instant insights",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized trading recommendations based on your patterns",
    },
    {
      icon: RefreshCw,
      title: "Auto Sync",
      description: "Seamlessly connect with your favorite trading platforms",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Execute trades with lightning speed and minimal latency",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of traders and share insights",
    },
    // Add more cards as needed
  ];

  return (
    <div className="min-h-5xl bg-black">
      <div className="w-full absolute z-2 top-0 border">
        <HomeNav />
      </div>
      <section className="relative min-h-full flex items-center overflow-hidden bg-black py-20">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:4vw_4vw]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(171,32,253,0.1),transparent_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(171,32,253,0.15),transparent_70%)]" />
        </div>

        {/* Content */}
        <div className="relative min-h-full w-full border mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-6 rounded-full bg-[#ab20fd]/10 px-4 py-1.5 text-sm font-medium text-[#ab20fd] inline-flex items-center gap-2 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ab20fd] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ab20fd]" />
              </span>
              Now in Beta
            </div>
            <div className="max-w-4xl mx-auto mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-white">Master Your Trades with </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 animate-gradient">
                  Precision
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              <i>Turn Data into Decisions, Losses into Lessons, and Insights into Profits.</i>
            </p>
            {/* Vertical Card Scrolling Animation (Mobile) */}
            {/* lg:sr-only */}
            <div className="cont h-74 sm:sr-only ">
              <div className="cards relative items-center justify-center border min-h-fit mt-5 w-full">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    {...feature}
                    style={{
                      animation: `slideVertical 15s infinite ${index * 3}s`,
                      opacity: 0,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Horizontal Card Scrolling Animation (Desktop) */}
            <div className="cont sr-only sm:not-sr-only ">
              <div className="cards relative items-center justify-center gap-6">
                {features.map((feature, index) => (
                  <FeatureCard class
                    key={index}
                    {...feature}
                    style={{
                      animation: `slideHorizontal 15s infinite ${index * 3}s`,
                      opacity: 0,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-6 mb-14">
              <button className="inline-flex items-center justify-center cursor-pointer px-8 py-4 border border-white/10 text-white rounded-xl font-medium hover:border-purple-500 hover:scale-110 hover:bg-[#ab20fd]/5 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes slideVertical {
            0% {
              transform: translateY(100%) scale(0.5);
              opacity: 0;
            }
            5%, 20% {
              transform: translateY(100%) scale(0.7);
              opacity: 0.4;
            }
            25%, 40% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            45%, 60% {
              transform: translateY(-100%) scale(0.7);
              opacity: 0.4;
            }
            65%, 100% {
              transform: translateY(-100%) scale(0.5);
              opacity: 0;
            }
          }

          @keyframes slideHorizontal {
            0% {
              transform: translateX(100%) scale(0.5);
              opacity: 0;
            }
            5%, 20% {
              transform: translateX(100%) scale(0.7);
              opacity: 0.4;
            }
            25%, 40% {
              transform: translateX(0) scale(1);
              opacity: 1;
            }
            45%, 60% {
              transform: translateX(-100%) scale(0.7);
              opacity: 0.4;
            }
            65%, 100% {
              transform: translateX(-100%) scale(0.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;