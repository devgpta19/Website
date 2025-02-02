import React, { useState } from "react";
import Footer from "./Footer";
import {
  Send,
  Upload,
  User,
  Mail,
  Phone,
  Briefcase,
  Award,
  GraduationCap,
  Calendar,
} from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    degree: "",
    graduationYear: "",
    role: "",
    experience: "",
    resume: null,
    linkedin: "",
    motivation: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.motivation.trim().split(" ").length < 100) {
      alert("Your motivation statement must be at least 100 words long.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 rounded-full bg-[#ab20fd]/10 px-4 py-1.5 text-sm font-medium text-[#ab20fd] inline-flex    items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ab20fd] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ab20fd]" />
            </span>
            Active Position
          </div>
          <h2 className="text-4xl font-light text-[#ab20fd] mb-4">
            Apply for a Position
          </h2>
          <p className="text-[#a1a1aa]">
            Fill out the form below and we'll get back to you soon
          </p>
        </div>

        {/* Animated Background Elements */}
        <div className="relative">
          {/* Form Card */}
          <div className="relative border border-[#27272a] rounded-2xl shadow-lg p-8 py-16 backdrop-blur-sm bg-black">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <h3 className="text-lg font-medium text-[#ab20fd] border-b border-[#27272a] pb-2">
                Personal Information
              </h3>
              <div className="group">
                <label className="flex items-center text-sm font-medium text-white mb-2">
                  <User className="w-4 h-4 mr-2 text-[#ab20fd]" />
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-[#a1a1aa] rounded-lg border border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Mail className="w-4 h-4 mr-2 text-[#ab20fd]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg text-[#a1a1aa] border border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Phone className="w-4 h-4 mr-2 text-[#ab20fd]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg text-[#a1a1aa] border border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-[#ab20fd] border-b border-[#27272a] pb-2">
                  Educational Background
                </h3>

                <div className="group">
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <GraduationCap className="w-4 h-4 mr-2 text-[#ab20fd]" />
                    College/University Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg text-[#a1a1aa] border border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all"
                    placeholder="Enter your college name"
                    value={formData.collegeName}
                    onChange={(e) =>
                      setFormData({ ...formData, collegeName: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-white mb-2">
                      <Award className="w-4 h-4 mr-2 text-[#ab20fd]" />
                      Degree
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border text-[#a1a1aa] border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all bg-black"
                      value={formData.degree}
                      onChange={(e) =>
                        setFormData({ ...formData, degree: e.target.value })
                      }
                    >
                      <option value="">Select degree</option>
                      <option value="btech">B.Tech</option>
                      <option value="be">B.E</option>
                      <option value="bsc">B.Sc</option>
                      <option value="mtech">M.Tech</option>
                      <option value="mca">MCA</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-white mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-[#ab20fd]" />
                      Graduation Year
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border text-[#a1a1aa] border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all bg-black"
                      value={formData.graduationYear}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          graduationYear: e.target.value,
                        })
                      }
                    >
                      <option value="">Select year</option>
                      {Array.from(
                        { length: 6 },
                        (_, i) => new Date().getFullYear() + 2 - i
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Briefcase className="w-4 h-4 mr-2 text-[#ab20fd]" />
                    Preferred Role
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border text-[#a1a1aa] border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all bg-black"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="">Select a role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="design">UI/UX Designer</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium text-white mb-2">
                    <Award className="w-4 h-4 mr-2 text-[#ab20fd]" />
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-lg text-[#a1a1aa] border border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all bg-black"
                    placeholder="Years of experience"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div className="group">
                <label className="flex items-center text-sm font-medium text-white mb-2">
                  <Upload className="w-4 h-4 mr-2 text-[#ab20fd]" />
                  Upload Resume
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#27272a] border-dashed rounded-lg cursor-pointer hover:bg-[#27272a] transition-colors bg-black">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-slate-400" />
                      <p className="mb-2 text-sm text-[#a1a1aa]">
                        <span className="font-medium">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-purple-500">
                        PDF, DOC up to 10MB
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setFormData({ ...formData, resume: e.target.files[0] })
                      }
                    />
                  </label>
                </div>
              </div>

              {/* LinkedIn Profile */}
              <div className="group">
                <label className="flex items-center text-sm font-medium text-white mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 rounded-lg border text-[#a1a1aa] border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all bg-black"
                  placeholder="https://linkedin.com/in/your-profile"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedin: e.target.value })
                  }
                />
              </div>

              {/* Motivation Section */}
              <div className="group">
                <label className="flex items-center text-sm font-medium text-white mb-2">
                  What motivates you to join us?
                </label>
                <textarea
                  className="w-full px-4 py-3 text-[#a1a1aa] rounded-lg border border-[#27272a] focus:border-[#ab20fd] focus:ring-2 focus:ring-[#ab20fd] outline-none transition-all"
                  placeholder="Write at least 100 words..."
                  rows="6"
                  value={formData.motivation}
                  onChange={(e) =>
                    setFormData({ ...formData, motivation: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#ab20fd]  text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                Submit Application
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8 mb-8 text-white text-sm">
          By submitting this form, you agree to our terms and privacy policy.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Form;
