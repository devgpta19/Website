import React, { useState } from "react";
import JobDesc from "./Job.json";
import HomeNav from "./HomeNav";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Clock,
  MapPin,
  Star,
  Zap,
  Shield,
  Users,
  Award,
  CheckCircle2,
  Binary,
  Monitor,
  Book,
} from "lucide-react";
import Footer from "./Footer";

const JobDescription = () => {
  // import JobDesc from './Job.json';
  const [isApplyHovered, setIsApplyHovered] = useState(false);
  const { jobid } = useParams();
  const navigate = useNavigate();
  console.log(jobid);

  const InfoCard = ({ icon: Icon, title, value }) => (
    <div className="relative  group p-4 rounded-xl bg-black/40 border border-zinc-800 hover:border-[#ab20fd]/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      <div className="relative flex items-center gap-3 ">
        <Icon className="w-5 h-5 text-[#ab20fd]" />
        <div className=" text-left">
          <p className="text-sm text-zinc-500">{title}</p>
          <p className="text-white font-medium">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Background Effects */}
      <HomeNav />
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ab20fd]/20 via-black to-black" />
      </div>

      <main className="relative pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Hero Section */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-6 rounded-full bg-[#ab20fd]/10 px-4 py-1.5 text-sm font-medium text-[#ab20fd] inline-flex    items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ab20fd] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ab20fd]" />
              </span>
              Active Position
            </div>

            <h1 className="text-[2em] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-purple-600 mb-6 py-3 ">
              {JobDesc.Title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
              <InfoCard icon={Briefcase} title="Job ID" value={JobDesc.JobID} />
              <InfoCard
                icon={MapPin}
                title="Location"
                value={JobDesc.Location}
              />
              <InfoCard
                icon={Clock}
                title="Duration"
                value={JobDesc.Duration}
              />
              <InfoCard
                icon={Calendar}
                title="Posted"
                value={JobDesc.Posting_Date}
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* About Section */}
              <div className="relative group p-8 rounded-2xl bg-black/40 border border-[#27272a] hover:border-[#ab20fd]/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-[#ab20fd]" />
                    <h2 className="text-2xl font-bold">About the Role</h2>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    {JobDesc.Aboutus}
                  </p>
                </div>
              </div>

              {/* Requirements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Stack */}
                <div className="relative group p-6 rounded-2xl bg-black/40 border border-zinc-800 hover:border-[#ab20fd]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <Binary className="w-5 h-5 text-[#ab20fd]" />
                      <h3 className="text-xl font-semibold">Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {JobDesc.TechStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-lg bg-[#ab20fd]/10 text-[#ab20fd] text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience Required */}
                <div className="relative group p-6 rounded-2xl bg-black/40 border border-zinc-800 hover:border-[#ab20fd]/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <Monitor className="w-5 h-5 text-[#ab20fd]" />
                      <h3 className="text-xl font-semibold">Experience</h3>
                    </div>
                    <div className="text-[#ab20fd] text-sm bg-[#ab20fd]/10 w-1/4 text-center rounded-lg py-1">
                      {JobDesc.Experience}
                    </div>
                    <ul className="space-y-2">
                      {JobDesc.KeySkillsandRequirements?.Technical?.slice(
                        0,
                        4
                      ).map((skill, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-zinc-300"
                        >
                          {/* <CheckCircle2 className="w-6 h-6 text-[#ab20fd]"/> */}
                          <div className="flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 mt-1.5 text-[#ab20fd] opacity-60 group-hover/item:opacity-100" />
                          </div>

                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Responsibilities Section */}
              <div className="relative group p-8 rounded-2xl bg-black/40 border border-zinc-800 hover:border-[#ab20fd]/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <Book className="w-6 h-6 text-[#ab20fd]" />
                    <h2 className="text-2xl font-bold">Key Responsibilities</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(JobDesc.KeyResponsibilities).map(
                      ([key, tasks]) => (
                        <div key={key}>
                          <h3 className="text-lg font-semibold text-[#ab20fd] mb-4">
                            {key.replace(/([A-Z])/g, " $1")}
                          </h3>
                          <ul className="space-y-3">
                            {tasks.map((task, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3 group/item"
                              >
                                {/* <CheckCircle2 className="w-6 h-6 mt-0.5 text-[#ab20fd] opacity-60 group-hover/item:opacity-100" /> */}
                                <div className="flex-shrink-0">
                                  <CheckCircle2 className="w-4 h-4 mt-1.5 text-[#ab20fd] opacity-60 group-hover/item:opacity-100" />
                                </div>

                                <span className="text-zinc-300 group-hover/item:text-white transition-colors">
                                  {task}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>



            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
            
              {/* Apply Now Card */}
              <div className="sticky top-6 flex flex-col-reverse lg:flex-col gap-12 lg:gap-2">
                <div className="relative group p-6 rounded-2xl bg-[#ab20fd]/10 border border-[#ab20fd]/20">
                  <h3 className="text-xl font-bold mb-4">Quick Apply</h3>
                  <button
                    onClick={() => { navigate(`/apply/${jobid}`) }}
                    onMouseEnter={() => setIsApplyHovered(true)}
                    onMouseLeave={() => setIsApplyHovered(false)}
                    className="w-full bg-[#ab20fd] text-white rounded-xl px-6 py-3 flex items-center justify-center gap-2 hover:bg-[#ab20fd]/90 transition-all duration-300 hover:cursor-pointer"
                  >
                    Apply Now
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${isApplyHovered ? "translate-x-1" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Benefits Card */}
                <div className="mt-6 relative group p-6 rounded-2xl bg-black/40 border border-zinc-800 hover:border-[#ab20fd]/30 text-white transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-5 h-5 text-[#ab20fd]" />
                      <h3 className="text-xl font-semibold">Benefits</h3>
                    </div>
                    <ul className="space-y-3">
                      {JobDesc.PerksandBenefits.map((perk, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 mt-1.5 text-[#ab20fd] opacity-60 group-hover/item:opacity-100" />
                          </div>

                          <span className="text-zinc-300 text-white">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDescription;
