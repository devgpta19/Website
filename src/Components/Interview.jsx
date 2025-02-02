// import React from 'react';
import {
  Phone,
  Users,
  Briefcase,
  CheckCircle,
  Clock,
  ArrowRight,
  Award
} from 'lucide-react';

const recruitmentSteps = [
  {
    id: 1,
    icon: Phone,
    title: "Initial Discussion",
    description: "Brief chat about your experience and aspirations",
    duration: "30 mins",
    details: [
      "Overview of your experience",
      "Understanding your career goals",
      "Brief technical discussion",
      "Role expectations alignment"
    ]
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Technical Round",
    description: "Deep dive into your technical expertise",
    duration: "30 mins",
    details: [
      "Technical problem solving",
      "System design discussion",
      "Code review & methodology",
      "Best practices & patterns"
    ]
  },
  {
    id: 3,
    icon: Users,
    title: "Team Round",
    description: "Meet your potential future teammates",
    duration: "30 mins",
    details: [
      "Team culture alignment",
      "Collaborative problem solving",
      "Team-specific discussions",
      "Day-to-day responsibilities"
    ]
  },
  {
    id: 4,
    icon: Award,
    title: "Final Discussion",
    description: "Offer discussion and next steps",
    duration: "30 mins",
    details: [
      // "Compensation discussion",
      "Benefits overview",
      "Start date planning",
      "Documentation requirements"
    ]
  }
];

const ProcessCard = ({ step, index }) => {
  return (
    <div className="group relative">
      {/* Number Badge */}
      {/* <div className="absolute -top-4 -left-4 w-8 h-8 rounded-lg bg-[#ab20fd] flex items-center justify-center text-white font-semibold z-10">
        {index + 1}
      </div> */}

      {/* Main Card */}

      <div className="relative group p-8 rounded-2xl bg-black/40 border border-[#27272a] hover:border-[#ab20fd]/30 transition-all duration-300 md:h-[26rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ab20fd]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
        {/* Icon & Title */}
        <div className="mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#ab20fd]/10 flex items-center justify-center mb-4">
            <step.icon className="w-6 h-6 text-[#ab20fd] group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
            {step.title}
          </h3>
          <p className="text-gray-400">{step.description}</p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <Clock className="w-4 h-4 text-[#ab20fd]" />
          <span className="text-sm">{step.duration}</span>
        </div>

        {/* Details */}
        <div className="space-y-3">
          {step.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#ab20fd] mt-0.5" />
              <span className="text-gray-400 text-sm">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecruitmentProcess = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="relative mb-20">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ab20fd]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#ab20fd]/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-[#ab20fd]/10 rounded-full text-[#ab20fd] text-sm font-medium mb-6">
              JOIN OUR TEAM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple & Transparent
              <span className="block text-[#ab20fd]">Recruitment Process</span>
            </h1>
            <p className="text-lg text-gray-400">
              We've designed our recruitment process to be straightforward and efficient,
              ensuring a great experience for all candidates.
            </p>
          </div>
        </div>

        {/* Process Grid */}
        <div className="relative">
          {/* Grid Container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentSteps.map((step, index) => (
              <ProcessCard
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>

          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ab20fd]/10 to-transparent" />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-6">Ready to start your journey with us?</p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#ab20fd] rounded-xl hover:bg-[#ab20fd]/90 cursor-pointer transition-all ">
            <span className="text-white font-medium">Apply Now</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;