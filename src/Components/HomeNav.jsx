import React, { useState } from "react";
import { BarChart, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "Careers", href: "/careers", id: "careers" },
    { name: "About Us", href: "/about-us", id: "about" },
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
                Trady<span className="font-semibold text-[#ab20fd]">L</span>ytics</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <NavLink
                  to={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300"
                  onMouseEnter={() => setActiveLink(link.id)}
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ab20fd] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                </NavLink>
              </div>
            ))}
            {/* <button className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl font-sm transition-all hover:bg-purple-700">
              <Sparkles className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45" />
              <span>Get Started </span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center cursor-pointer px-4 py-2 border border-white/10 text-white rounded-xl font-medium hover:border-purple-500 hover:scale-110 hover:bg-[#ab20fd]/5 transition-all">
                  Watch Demo
                </button>
              </div>
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
                <NavLink
                  key={link.id}
                  to={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#ab20fd]/10 rounded-lg transition-colors duration-300"
                >
                  {link.name}
                </NavLink>
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
