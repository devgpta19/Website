// import React, { useState } from "react";
// import { LineChart } from "lucide-react";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("home");

//   const navLinks = [
//     { name: "Home", href: "#", id: "home" },
//     { name: "Careers", href: "#", id: "careers" },
//     { name: "About Us", href: "#", id: "about" },
//   ];

//   return (
//     <nav className="w-full bg-black fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo and Brand Name */}
//           <div className="flex items-center space-x-2">
//             <LineChart className="h-8 w-8 text-[#ab20fd]" />
//             <span className="text-xl font-bold bg-gradient-to-r from-[#ab20fd] to-purple-500 bg-clip-text text-transparent">
//               TradyLytics
//             </span>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <div key={link.id} className="relative group">
//                 <a
//                   href={link.href}
//                   className="text-gray-300 hover:text-[#ab20fd] transition-colors duration-300 py-2"
//                   onMouseEnter={() => setActiveLink(link.id)}
//                 >
//                   {link.name}
//                 </a>
//                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ab20fd] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { LineChart, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#", id: "home" },
//     { name: "Careers", href: "#", id: "careers" },
//     { name: "About Us", href: "#", id: "about" },
//   ];

//   return (
//     <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo and Brand Name */}
//           <div className="flex items-center space-x-3 group">
//             <div className="relative">
//               <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ab20fd] to-purple-600 opacity-70 group-hover:opacity-100 blur transition duration-500" />
//               <div className="relative flex items-center space-x-3">
//                 <LineChart className="h-8 w-8 text-white" />
//                 <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   TradyLytics
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-12">
//             {navLinks.map((link) => (
//               <div key={link.id} className="relative group">
//                 <a
//                   href={link.href}
//                   className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 py-2"
//                   onMouseEnter={() => setActiveLink(link.id)}
//                 >
//                   {link.name}
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
//                 </a>
//               </div>
//             ))}
//             <button className="px-6 py-2.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 ease-in-out transform hover:-translate-y-0.5">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-300 hover:text-white transition-colors duration-300"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-black">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.id}
//                   href={link.href}
//                   className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/30 rounded-lg transition-colors duration-300"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { LineChart, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#", id: "home" },
//     { name: "Careers", href: "#", id: "careers" },
//     { name: "About Us", href: "#", id: "about" },
//   ];

//   return (
//     <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo and Brand Name */}
//           <div className="flex items-center space-x-3 group">
//             <div className="relative">
//               <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ab20fd] to-purple-600 opacity-70 group-hover:opacity-100 blur transition duration-500" />
//               <div className="relative flex items-center space-x-3">
//                 <LineChart className="h-8 w-8 text-[#ab20fd]" />
//                 <span
//                   className="text-2xl font-light tracking-wider text-white"
//                   style={{ fontFamily: "Inter, system-ui" }}
//                 >
//                   Trady
//                   <span className="font-semibold text-[#ab20fd]">Lytics</span>
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-12">
//             {navLinks.map((link) => (
//               <div key={link.id} className="relative group">
//                 <a
//                   href={link.href}
//                   className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 py-2"
//                   onMouseEnter={() => setActiveLink(link.id)}
//                 >
//                   {link.name}
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
//                 </a>
//               </div>
//             ))}
//             <button className="px-6 py-2.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 ease-in-out transform hover:-translate-y-0.5">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-300 hover:text-white transition-colors duration-300"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-black">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.id}
//                   href={link.href}
//                   className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/30 rounded-lg transition-colors duration-300"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { LineChart, Menu, X, ArrowRight } from "lucide-react";

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#", id: "home" },
//     { name: "Careers", href: "#", id: "careers" },
//     { name: "About Us", href: "#", id: "about" },
//   ];

//   return (
//     <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo and Brand Name */}
//           <div className="flex items-center space-x-3">
//             <div className="relative flex items-center space-x-3">
//               <LineChart className="h-8 w-8 text-[#ab20fd]" />
//               <span
//                 className="text-2xl font-light tracking-wider text-white"
//                 style={{ fontFamily: "Inter, system-ui" }}
//               >
//                 Trady
//                 <span className="font-semibold text-[#ab20fd]">Lytics</span>
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-12">
//             {navLinks.map((link) => (
//               <div key={link.id} className="relative group">
//                 <a
//                   href={link.href}
//                   className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 py-2"
//                   onMouseEnter={() => setActiveLink(link.id)}
//                 >
//                   {link.name}
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ab20fd] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
//                 </a>
//               </div>
//             ))}
//             <button className="group flex items-center space-x-2 px-6 py-2.5 bg-[#ab20fd] text-white text-sm font-medium rounded-lg transition-all duration-300 ease-in-out hover:pr-4">
//               <span>Get Started</span>
//               <ArrowRight className="w-0 h-5 transition-all duration-300 group-hover:w-5 opacity-0 group-hover:opacity-100" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-300 hover:text-white transition-colors duration-300"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-black">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.id}
//                   href={link.href}
//                   className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#ab20fd]/10 rounded-lg transition-colors duration-300"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button className="group flex items-center space-x-2 w-full mt-4 px-6 py-2.5 bg-[#ab20fd] text-white text-sm font-medium rounded-lg transition-all duration-300">
//                 <span>Get Started</span>
//                 <ArrowRight className="w-0 h-5 transition-all duration-300 group-hover:w-5 opacity-0 group-hover:opacity-100" />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { BarChart, Menu, X, ArrowRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "Careers", href: "#", id: "careers" },
    { name: "About Us", href: "#", id: "about" },
  ];

  return (
    <nav className="w-full  top-0 left-0 right-0 z-50  border-b border-[#27272a] bg-black ">
      <div className="relative max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center space-x-1">
              <BarChart className="h-7 w-7 text-[#ab20fd]" />
              <span
                className="text-2xl font-light tracking-wider text-white"
                style={{ fontFamily: "Inter, system-ui" }}
              >
                Trady
                <span className="font-semibold text-[#ab20fd]">L</span>ytics
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300"
                  onMouseEnter={() => setActiveLink(link.id)}
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ab20fd] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                </a>
              </div>
            ))}
            <button className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl font-sm transition-all hover:bg-purple-700">
              <Sparkles className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45" />
              <span>Get Started </span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#ab20fd]/10 rounded-lg transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-medium transition-all hover:bg-purple-700">
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
