'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // add actual submission logic here
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>

        <div>
          <h3 className="font-semibold text-lg">Visit Our KIOSK Center</h3>
          <p className="text-gray-600">
            780 2nd Floor, 16th Main Rd, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Visit Our Corporate Office</h3>
          <p className="text-gray-600">
            940, 1st floor, 16th Main road, Mico layout, Rastrakan Kuvempu, Office opposite Bata,
            BTM Layout, 2nd Stage, Bangalore – 560076
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Message Us</h3>
          <p className="text-gray-600">consulting@hawkstack.com</p>
          <p className="text-gray-600">7829309066</p>
        </div>

        <div className="flex space-x-4 pt-2">
          {['facebook', 'twitter', 'message-circle', 'linkedin'].map((icon, i) => (
            <a key={i} href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
              <i className={`ri-${icon}-line`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Your E-mail' },
          { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Your Phone' },
          { label: 'Organization', name: 'organization', type: 'text', placeholder: 'Your Organization Name' },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} className="flex flex-col">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              name={name}
              type={type}
              value={(formData as any)[name]}
              onChange={handleChange}
              required
              className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={placeholder}
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="captcha" required />
          <label htmlFor="captcha" className="text-sm text-gray-700">
            I'm not a robot
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition cursor-pointer"
        >
          Send Now
        </button>
      </form>
    </div>
  );
}
