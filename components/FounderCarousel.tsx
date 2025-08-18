'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';

interface Message {
  name: string;
  role: string;
  image: string;
  message: string;
}

const messages: Message[] = [
  {
    name: 'Chandra Prakash',
    role: 'Co - Founder & Director',
    image: '/images/chandra.jpeg',
    message:
      'At HawkStack Technologies, we are committed to driving your success through powerful DevOps solutions. Our focus is on delivering agility, security, and scalability, enabling your business to innovate with confidence. We value your trust and look forward to building the future together.',
  },
  {
    name: 'Quasher Yasmeen Hussain ',
    role: 'Co - Founder & CTO',
    image: '/images/quasher.png',
    message:
      'At HawkStack Technologies, our goal is simple—empowering your business with agile, scalable DevOps solutions. We’re dedicated to driving efficiency and innovation, ensuring your infrastructure is secure and future-ready. Thank you for choosing us as your technology partner.',
  },
];

export default function FounderCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      duration: 1000,
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
          }, 2000);
        };

        slider.on('created', nextTimeout);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-4">Founder Message</h2>
      <p className="text-gray-600 max-w-3xl mb-8">
        At HawkStack Technologies, our mission is to empower businesses with innovative DevOps solutions
        that drive agility and growth. We are dedicated to ensuring your infrastructure is secure, scalable,
        and ready for the future. Thank you for trusting us as your technology partner.
      </p>

      <div ref={sliderRef} className="keen-slider overflow-hidden rounded-3xl">
        {messages.map((msg, index) => (
          <div key={index} className="keen-slider__slide bg-indigo-50 p-6 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed">{msg.message}</p>
            <div className="flex items-center mt-8">
              <Image
                src={msg.image}
                alt={msg.name}
                width={60}
                height={60}
                className="rounded-full border-4 border-white shadow-md"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{msg.name}</p>
                <p className="text-gray-500 text-sm">{msg.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {messages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === idx ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
