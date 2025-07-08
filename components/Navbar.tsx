'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import FeatureGrid from './FeatureGrid';
import Modal from './Modal';
import { COMPANY, PARTNERS, SOLUTION_FEATURES } from './constants';
import Link from 'next/link';


export default function Navbar() {
  const [showIndustriesModal, setShowIndustriesModal] = useState(false);
  const [showSolutionsModal, setShowSolutionsModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const productsRef = useRef<HTMLLIElement | null>(null);
  const solutionsRef = useRef<HTMLLIElement | null>(null);
  const companyRef = useRef<HTMLLIElement | null>(null);
  const partnerRef = useRef<HTMLLIElement | null>(null);

  const handleEnter = () => {
    if (productsRef.current) {
      const rect = productsRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setShowIndustriesModal(true);
  };

  const handleLeave = () => {
    setShowIndustriesModal(false);
  };

  const handleSolutionsEnter = () => {
    if (solutionsRef.current) {
      const rect = solutionsRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setShowSolutionsModal(true);
    setShowCompanyModal(false);
    setShowPartnerModal(false);
  };

  const handleSolutionsLeave = () => {
    setShowSolutionsModal(false);
  };

  const handleCompanyEnter = () => {
    if (companyRef.current) {
      const rect = companyRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setShowCompanyModal(true);
    setShowSolutionsModal(false);
    setShowPartnerModal(false);
  };

  const handleCompanyLeave = () => {
    setShowCompanyModal(false);
  };

  const handlePartnerEnter = () => {
    if (partnerRef.current) {
      const rect = partnerRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setShowPartnerModal(true);
    setShowSolutionsModal(false);
    setShowCompanyModal(false);
  };

  const handlePartnerLeave = () => {
    setShowPartnerModal(false);
  };

  return (
    <header className="w-full bg-white shadow-sm z-50 sticky top-0">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-2xl font-semibold text-black">HawkStack</div> */}
        <Image
          src={"/images/logo.webp"}
          alt={"HawkStack Logo"}
          width={165}
          height={55}
        />

        {/* Center Nav Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 text-lg">
          {/* <li
            ref={productsRef}
            className="cursor-pointer hover:text-black relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={() => setShowIndustriesModal(!showIndustriesModal)}
          >
            Industries
            {showIndustriesModal && (
              <div
                className="absolute top-full left-0 mt-8"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <FeatureGrid features={INDUSTRY_FEATURES} />
              </div>
            )}
          </li> */}
           <li className="cursor-pointer hover:text-black">
            <Link href="/">Home</Link>
          </li>
          {/* <li className="cursor-pointer hover:text-black">
            Products
          </li> */}
          <li
            ref={solutionsRef}
            className="cursor-pointer hover:text-black relative"
            onMouseEnter={handleSolutionsEnter}
            // onMouseLeave={handleSolutionsLeave}
            onClick={() => setShowSolutionsModal(!showSolutionsModal)}
          >
            Solutions
            {showSolutionsModal && (
              <div
                className="absolute top-full left-50 -translate-x-1/2 mt-8"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <FeatureGrid features={SOLUTION_FEATURES} />
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link href="https://training.hawkstack.com/" target='_blank'>Trainings & Certifications </Link>
          </li>
          <li
           ref={partnerRef}
           className="cursor-pointer hover:text-black relative"
           onMouseEnter={handlePartnerEnter}
          //  onMouseLeave={handlePartnerLeave}
           onClick={() => setShowPartnerModal(!showPartnerModal)}
          >
            Partners
            {showPartnerModal && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-8"
                onMouseEnter={handlePartnerEnter}
                onMouseLeave={handlePartnerLeave}
              >
                <Modal items={PARTNERS}/>
              </div>
            )}
          </li>
          <li
           ref={companyRef}
           className="cursor-pointer hover:text-black relative"
           onMouseEnter={handleCompanyEnter}
          //  onMouseLeave={handleCompanyLeave}
           onClick={() => setShowCompanyModal(!showCompanyModal)}
          >
            Company
            {showCompanyModal && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-8"
                onMouseEnter={handleCompanyEnter}
                onMouseLeave={handleCompanyLeave}
              >
                <Modal items={COMPANY}/>
              </div>
            )}
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="text-gray-600 text-sm cursor-pointer" />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-red-700 transition">
            GET IN TOUCH
          </button>
        </div>
      </nav>
    </header>
  );
}
