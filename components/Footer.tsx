import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b1f56] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Tagline */}
        <div className="md:col-span-1">
          <Image src="/images/whiteLogo.webp" alt="HawkStack Logo" width={160} height={80} />
          <p className="text-sm mt-4">
            Navigate the digital wave with <strong>HawkStack</strong>: Logic’s Framework, Innovation’s Leap, and Insight’s Depth.
          </p>
          <Link href="#" className="mt-4 inline-block text-white font-medium hover:underline">
            Know More →
          </Link>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Banking & Insurance</li>
            <li>Ecommerce & Retail</li>
            <li>Telecom</li>
            <li>Manufacturing</li>
            <li>Healthcare Technology</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>IT Automation</li>
            <li>Cloud Native</li>
            <li>DevOps Tools & Support</li>
            <li>Modern Monitoring</li>
            <li>AI & ML</li>
            <li>Training & Certification</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Overview</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <p className="text-sm text-gray-300">consulting@hawkstack.com</p>
          <p className="text-sm text-gray-300 mb-4">+91 7829309066</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="#"><FaLinkedin className="w-6 h-6 hover:text-gray-100" /></Link>
            <Link href="#"><FaFacebookF className="w-6 h-6 hover:text-gray-100" /></Link>
            <Link href="#"><FaInstagram className="w-6 h-6 hover:text-gray-100" /></Link>
            <Link href="#"><FaYoutube className="w-6 h-6 hover:text-gray-100" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2024 HawkStack Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}
