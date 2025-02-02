import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/tradylytics/?igsh=YW13OW5ibXE4Nm1l",
      icon: Instagram,
    },
    {
      name: "Twitter",
      url: "https://x.com/tradylytics?t=R8XIh48q3r-stSYc3uoRSA&s=09",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/tradylytics",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ab20fd]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ab20fd]/10 rounded-full blur-3xl translate-y-1/2" />

      {/* Main Content */}
      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Top Border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ab20fd]/20 to-transparent" />

        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* Left Section - Logo */}
          <div >
            <h1 className="text-4xl md:text-6xl lg:text-[8rem] text-[#ab20fd] font-semibold tracking-tight leading-none">
              TradyLytics
            </h1>
            
          </div>

          {/* Right Section - Links and Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-6">
                Socials
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#ab20fd] transition-colors group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-6">
                Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@tradylytics.in"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#ab20fd] transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>info@tradylytics.in</span>
                </a>
                <a
                  href="tel:+919166452134"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#ab20fd] transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+91 9166452134</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="sm:col-span-1">
              <h4 className="text-sm font-medium text-gray-400 mb-6">
                Location
              </h4>
              <div className="flex gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Sector 5 Avas Vikas Colony, Sikandra, Agra, Uttar Pradesh,
                  282007 India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 TradyLytics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-[#ab20fd] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-[#ab20fd] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
