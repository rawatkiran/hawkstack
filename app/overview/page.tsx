'use client';

import { useState } from 'react';
import FounderCarousel from '../../components/FounderCarousel';
import ExpertiseSlider from '../../components/ExpertisesSlider';
import IndustriesCarousel from '../../components/IndustriesCarousel';
import DigitalTransformation from '../../components/DigitalTransformation';
import Footer from '../../components/Footer';

const coreValues = [
  {
    title: 'Leading Change',
    description:
      'We embrace innovation and adapt rapidly to changes in technology and business landscapes, leading our organization and our clients to excel and achieve sustainable growth.',
  },
  {
    title: 'Integrity',
    description: '',
  },
  {
    title: 'Respect for Individuals',
    description: '',
  },
  {
    title: 'Excellence',
    description: '',
  },
  {
    title: 'Continuous Learning and Sharing',
    description: '',
  },
];
export default function OverviewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };
  return (
    <>
      <div>
        <img
          src="/images/overview.webp" // Replace with your image path or URL
          alt="KIOSK Center"
          className="w-full h-140 shadow-md"
        />
      </div>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-4">
          The HawkStack Way: Our Core Values
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          At HawkStack Technologies, our values drive our decisions, shape our
          culture, and inspire us to achieve our shared vision. These guiding
          principles are at the heart of the HawkStack Way.
        </p>

        <div className="bg-white rounded-xl shadow-md overflow-hidden divide-y divide-gray-200">
          {coreValues.map((value, index) => (
            <div key={value.title}>
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full text-left px-6 py-4 focus:outline-none cursor-pointer"
              >
                <h3
                  className={`text-lg font-medium ${
                    activeIndex === index ? 'text-blue-600' : 'text-black'
                  }`}
                >
                  {value.title}
                </h3>
              </button>
              {activeIndex === index && value.description && (
                <div className="px-6 pb-6 text-gray-600">
                  {value.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <FounderCarousel />
      <ExpertiseSlider />
      <IndustriesCarousel />
      <DigitalTransformation />
      <section
        className="w-full bg-cover bg-center py-24 px-6"
        style={{
          backgroundImage: `url('/images/form-bg.jpg')`,
        }}
      >
        <div className="max-w-4xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-white text-4xl font-semibold mb-10 text-center">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border rounded-md bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition w-fit cursor-pointer"
            >
              Submit Form
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
}
