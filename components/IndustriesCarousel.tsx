'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';

const industries = [
  {
    title: 'E-commerce & Retail',
    description:
      'HawkStack Technologies empowers e-commerce and retail businesses with scalable, secure, and high-performance IT solutions.',
    image: '/images/ecom.png',
  },
  {
    title: 'Telecom',
    description:
      'HawkStack Technologies enables telecom companies to modernize their infrastructure with scalable, secure, and automated solutions.',
    image: '/images/telecom.png',
  },
  {
    title: 'Manufacturing',
    description:
      'HawkStack Technologies drives digital transformation in manufacturing with secure, scalable, and automated IT solutions.',
    image: '/images/manufacturing.png',
  },
  {
    title: 'Healthcare',
    description:
      'We help healthcare institutions enhance patient care and operational efficiency using intelligent, secure cloud-native solutions.',
    image: '/images/healthcare.png',
  },
  {
    title: 'Banking & Insurance',
    description:
      'HawkStack powers digital transformation in fintech by delivering secure, scalable, and high-performance cloud and DevOps services.',
    image: '/images/banking.png',
  },
];

export default function IndustriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 3, spacing: 20 },
      breakpoints: {
        '(max-width: 1024px)': {
          slides: { perView: 2, spacing: 16 },
        },
        '(max-width: 640px)': {
          slides: { perView: 1, spacing: 12 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        };

        slider.on('created', nextTimeout);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <section className="px-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Empowering Industries <br className="hidden sm:block" />
          <span className="text-blue-600">with Scalable DevOps Solutions</span>
        </h2>

      <div ref={sliderRef} className="keen-slider mt-12">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-gray-100 rounded-xl overflow-hidden shadow-sm transition hover:shadow-md"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={190}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {industries.slice(0, industries.length - 2).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
