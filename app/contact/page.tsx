'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    // handle form submission here

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("✅ Message saved successfully!");
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }
    setLoading(false);
    console.log(formData, "FORM DATA");
  };

  return (
    <>
    <div>
    <img
      src="/images/contact.webp" // Replace with your image path or URL
      alt="KIOSK Center"
      className="w-full h-140 rounded-lg shadow-md"
    />
  </div>
      <h1 className="text-4xl font-bold bg-[#f5f8fb] flex items-center justify-center pt-8 px-4 ">
        Contact Us
      </h1>
      <main className="min-h-screen bg-[#f5f8fb] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>

            <div>
              <h3 className="font-semibold text-lg">Visit Our KIOSK Center</h3>
              <p className="text-gray-600">
                780 2nd Floor, 16th Main Rd, BTM 2nd Stage, BTM Layout,
                Bengaluru, Karnataka 560076
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Visit Our Corporate Office
              </h3>
              <p className="text-gray-600">
                940, 1st floor, 16th Main road, Mico layout, Rastrakan Kuvempu,
                Office opposite Bata, BTM Layout, 2nd Stage, Bangalore – 560076
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Message Us</h3>
              <p className="text-gray-600">consulting@hawkstack.com</p>
              <p className="text-gray-600">7829309066</p>
            </div>

            {/* <div className="flex space-x-4 pt-2">
              {['facebook', 'twitter', 'message-circle', 'linkedin'].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                  >
                    <i className={`ri-${icon}-line`}></i>
                  </a>
                )
              )}
            </div> */}
            <div>
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex gap-4">
              <Link href="#">
                <FaLinkedin className="w-6 h-6 hover:text-gray-100" />
              </Link>
              <Link href="#">
                <FaFacebookF className="w-6 h-6 hover:text-gray-100" />
              </Link>
              <Link href="#">
                <FaInstagram className="w-6 h-6 hover:text-gray-100" />
              </Link>
              <Link href="#">
                <FaYoutube className="w-6 h-6 hover:text-gray-100" />
              </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white rounded-xl"
            autoComplete="off"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your E-mail"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Phone"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="organization"
                className="text-sm font-medium text-gray-700"
              >
                Organization
              </label>
              <input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Organization Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
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
              className="w-30 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
