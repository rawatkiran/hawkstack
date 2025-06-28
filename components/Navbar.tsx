'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Hawkstack</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/services" className="hover:text-blue-500">
          Services
        </Link>
        <Link href="https://training.hawkstack.com/" target='_blank' className='hover:text-blue-500'>
          Trainings & Certifications
        </Link>
      </div>
    </nav>
  );
}
