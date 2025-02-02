
import HomeNav from "./HomeNav";
import React from "react";
import {
  LineChart,
  TrendingUp,
  Lock,
  BarChart,
  Users,
  Brain,
  ArrowRight,
  ChartBar,
  Zap,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import '../index.css'

const FeatureCard = ({ icon: Icon, title, description, className }) => (
  <div className={`relative group ${className}`}>
    {/* Card glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/5 rounded-2xl blur-xl transition-all group-hover:blur-2xl" />
    <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-all">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-white tracking-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const features = [
    {
      icon: ChartBar,
      title: "Real-time Analytics",
      description:
        "Track your performance with advanced metrics and instant insights",
      className: "sm:translate-y-8",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Get personalized trading recommendations based on your patterns",
      className: "",
    },
    {
      icon: RefreshCw,
      title: "Auto Sync",
      description: "Seamlessly connect with your favorite trading platforms",
      className: "sm:translate-y-8",
    },
  ];

  return (
    <div className="min-h-7xl min-w-screen bg-black">
      <div className="w-full absolute z-2 top-0 border border-[#27272a]" >
      <HomeNav />
      </div>
      <section className="relative min-h-full min-w-[100%] flex items-center overflow-hidden bg-black py-20">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:4vw_4vw]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Background Gradients */}
        <div className="absolute inset-0">
          {/* Top-left gradient */}
          {/* <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_left,rgba(171,32,253,0.15),transparent_50%)]" /> */}
          {/* Top-right gradient */}
          {/* <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_right,rgba(171,32,253,0.15),transparent_50%)]" /> */}
          {/* Center spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(171,32,253,0.1),transparent_60%)]" />
          {/* Cards area gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(171,32,253,0.15),transparent_70%)]" />
        </div>

        {/* Content */}
        <div className="relative min-h-[100%] min-w-screen mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* Beta Badge */}
            {/* <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-black/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[#ab20fd] text-sm tracking-wide">
                  Now in Beta
                </span>
              </span>
            </div> */}
            <div className="mb-6 rounded-full bg-[#ab20fd]/10 px-4 py-1.5 text-sm font-medium text-[#ab20fd] inline-flex items-center gap-2 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ab20fd] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ab20fd]" />
              </span>
              Now in Beta
            </div>
            {/* Main Heading */}
            <div className="max-w-4xl mx-auto mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-white">Master Your Trades with </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 animate-gradient">
                  Precision
                </span>


              </h1>
            </div>
            <p className="text-xl text-gray-300/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {/* Built for traders, by traders. Transform your trading journey with
              automated journaling and powerful analytics. */}
              <i>Turn Data into Decisions, Losses into Lessons, and Insights into Profits.</i>
            </p>
            {/* Floating Feature Cards */}
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-medium transition-all hover:bg-purple-700">
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button> */}

              {/* <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-medium transition-all hover:bg-purple-700">
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                <span>Watch demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button> */}

              <button className="inline-flex items-center justify-center cursor-pointer px-8 py-4 border border-white/10 text-white rounded-xl font-medium hover:border-purple-500 hover:scale-110 hover:bg-[#ab20fd]/5 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


// import React from "react";
// import {
//   LineChart,
//   Brain,
//   ArrowRight,
//   ChartBar,
//   RefreshCw,
//   Sparkles,
// } from "lucide-react";

// const FeatureCard = ({ icon: Icon, title, description, className }) => (
//   <div className={`relative group ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/5 rounded-2xl blur-xl transition-all group-hover:blur-2xl" />
//     <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl p-[1.5vw] hover:border-purple-500/20 transition-all">
//       <div className="flex flex-col gap-[0.8vw]">
//         <div className="inline-flex items-center justify-center w-[2.5vw] h-[2.5vw] rounded-xl bg-purple-500/10 text-purple-400">
//           <Icon className="w-[1.2vw] h-[1.2vw]" />
//         </div>
//         <h3 className="font-semibold text-white tracking-tight text-[1.2vw]">
//           {title}
//         </h3>
//         <p className="text-gray-400 text-[0.9vw] leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const HomePage = () => {
//   const features = [
//     {
//       icon: ChartBar,
//       title: "Real-time Analytics",
//       description:
//         "Track your performance with advanced metrics and instant insights",
//       className: "sm:translate-y-[2vw]",
//     },
//     {
//       icon: Brain,
//       title: "AI-Powered Insights",
//       description:
//         "Get personalized trading recommendations based on your patterns",
//       className: "",
//     },
//     {
//       icon: RefreshCw,
//       title: "Auto Sync",
//       description: "Seamlessly connect with your favorite trading platforms",
//       className: "sm:translate-y-[2vw]",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black">
//       <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
//         {/* Grid Background */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,35,35,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,35,35,0.3)_1px,transparent_1px)] bg-[size:2vw_2vw]" />

//         {/* Background Gradients */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_left,rgba(171,32,253,0.15),transparent_50%)]" />
//           <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_right,rgba(171,32,253,0.15),transparent_50%)]" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(171,32,253,0.1),transparent_60%)]" />
//         </div>

//         {/* Content */}
//         <div className="relative w-[90vw] mx-auto">
//           <div className="text-center">
//             {/* Beta Badge */}
//             <div className="flex items-center justify-center mb-[2vw]">
//               <span className="inline-flex items-center px-[1vw] py-[0.4vw] rounded-full border border-purple-500/30 bg-black/50 backdrop-blur-sm">
//                 <span className="relative flex h-[0.5vw] w-[0.5vw] mr-[0.5vw]">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-[0.5vw] w-[0.5vw] bg-purple-500"></span>
//                 </span>
//                 <span className="text-purple-200 text-[0.9vw] tracking-wide">
//                   Now in Beta
//                 </span>
//               </span>
//             </div>

//             {/* Main Heading */}
//             <div className="max-w-[80vw] mx-auto mb-[1.5vw]">
//               <h1 className="text-[5vw] font-bold mb-[1.5vw] tracking-tight">
//                 <span className="text-white">Master Your Trades with </span>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
//                   Precision
//                 </span>
//               </h1>
//             </div>

//             <p className="text-[1.2vw] text-gray-300/90 mb-[3vw] max-w-[50vw] mx-auto leading-relaxed font-light">
//               Built for traders, by traders. Transform your trading journey with
//               automated journaling and powerful analytics.
//             </p>

//             {/* Feature Cards */}
//             <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-[1.5vw] max-w-[80vw] mx-auto mb-[4vw]">
//               {features.map((feature, index) => (
//                 <FeatureCard key={index} {...feature} />
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-[1vw] justify-center">
//               <button className="group relative inline-flex items-center justify-center gap-[0.5vw] px-[2vw] py-[1vw] bg-purple-600 text-white rounded-xl font-medium text-[1vw] transition-all hover:bg-purple-700">
//                 <Sparkles className="w-[1vw] h-[1vw] transition-transform duration-300 group-hover:rotate-45" />
//                 <span>Get Started Free</span>
//                 <ArrowRight className="w-[1vw] h-[1vw] group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="inline-flex items-center justify-center px-[2vw] py-[1vw] border border-white/10 text-white rounded-xl font-medium text-[1vw] hover:bg-white/5 transition-all">
//                 Watch Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;