'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';

export default function CareersTabs() {
  const [activeTab, setActiveTab] = useState('why');

  const tabs = [
    { id: 'why', label: 'Why HawkStack?' },
    { id: 'path', label: 'Best Path' },
    { id: 'life', label: 'Life At HawkStack' },
  ];

  const hiringSteps = [
        { title: "Application Submission", image: "/images/appSubmission.png" },
        { title: "Shortlisting", image: "/images/shortlisting.png" },
        { title: "Technical Interview", image: "/images/interview.png" },
        { title: "HR Interview", image: "/images/hrInterview.png" },
        { title: "Decision & Offer", image: "/images/offer.png" },
      ];
    
      const jobs = [
        {
          title: "Associate Technical Consultant",
          skills: "RHCSA & RHCE",
          industry: "IT Software",
          experience: "3 - 4.5 yrs",
        },
        {
          title: "Senior Technical Consultant",
          skills: "RHCE & OpenShift",
          industry: "IT Software",
          experience: "5 - 6.5 yrs",
        },
        {
          title: "Direct Sales Executive",
          skills: "Retail & B2C Sales",
          industry: "Sales & Business Development",
          experience: "2 - 6.5 yrs",
        },
        {
          title: "IT Intern",
          skills: "Basic IT Knowledge",
          industry: "IT Software",
          experience: "0 - 1.5 yrs",
        },
      ];

  const tabContent: Record<
    string,
    { title: string; desc: string; points: string[]; image: string }
  > = {
    why: {
      title:
        'At HawkStack Technologies, we’re committed to empowering your potential. Here, you won’t just find a job — you’ll find a career that ignites your passion. We believe in putting our people first, knowing that our success is driven by the brilliance of our team. With us, you’ll experience:',
      desc: 'Join us at HawkStack and spark your next chapter.',
      points: [
        'Career growth on your terms',
        'Engaging, hands-on projects that enrich your skills',
        'A workplace you can trust to support your journey',
        'A diverse, global culture that celebrates who you are',
      ],
      image: '/images/whyhawkstack.png', // replace with your actual image in public/
    },
    path: {
      title:
        'At HawkStack, we believe in charting the best path for your success. We guide you with structured mentorship, hands-on experience, and opportunities that align with your long-term goals.',
      desc: 'Your path at HawkStack is built for growth and discovery.',
      points: [
        'Structured learning and mentorship programs',
        'Opportunities to explore cutting-edge technologies',
        'Freedom to innovate and contribute to real impact',
        'Supportive leadership invested in your journey',
      ],
      image: '/images/bestpath.png',
    },
    life: {
      title:
        'Life at HawkStack is vibrant and inspiring. We foster a culture of inclusivity, collaboration, and innovation — where every voice matters and every contribution is valued.',
      desc: 'Be part of a culture that celebrates both work and life.',
      points: [
        'A culture that thrives on collaboration',
        'Celebrating milestones, festivals, and achievements',
        'Work-life balance at the heart of our values',
        'Engaging activities and a supportive community',
      ],
      image: '/images/hawkstacklife.png',
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#3c4cb4] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-16">
          {/* Text */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
              Ignite Your Potential
            </h1>
            <p className="text-lg md:text-xl">
              Join HawkStack Technologies, where innovation meets opportunity.
              Discover a workplace that empowers you to learn, grow, and excel
              in your own unique way.
            </p>
            <button className="px-6 py-3 bg-[#478966] hover:bg-green-700 rounded-full text-lg font-medium transition cursor-pointer">
              Explore career opportunities →
            </button>
          </div>

          {/* Image */}
          <div className="mt-10 md:mt-0">
            <img
              src="/hero-girl.png"
              alt="Career at HawkStack"
              className="w-[350px] md:w-[420px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition cursor-pointer shadow-sm ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-blue-200 text-gray-800 hover:bg-blue-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {tabContent[activeTab].title}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            {tabContent[activeTab].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p className="text-gray-800 font-medium mb-8">
            {tabContent[activeTab].desc}
          </p>
        </div>

        {/* Image BELOW text */}
          <img
            src={tabContent[activeTab].image}
            alt={activeTab}
          />
      </div>
    </section>
    <section className="bg-white pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">How We Hire ?</h2>
        <p className="text-gray-600 mb-10">
          At HawkStack, we put people first from the very beginning of your
          journey with us. Here’s how our hiring process works:
        </p>

        {/* Hiring steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {hiringSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={step.image}
                alt={step.title}
              />
              <p className="mt-3 text-gray-700 text-sm font-medium">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* Job Openings Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-800 text-white text-left">
                <th className="py-3 px-4">Job Title</th>
                <th className="py-3 px-4">Primary Skills</th>
                <th className="py-3 px-4">Industry</th>
                <th className="py-3 px-4">Experience</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{job.title}</td>
                  <td className="py-3 px-4">{job.skills}</td>
                  <td className="py-3 px-4">{job.industry}</td>
                  <td className="py-3 px-4">{job.experience}</td>
                  <td className="py-3 px-4 text-blue-600 font-medium cursor-pointer hover:underline">
                    Apply Now
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
