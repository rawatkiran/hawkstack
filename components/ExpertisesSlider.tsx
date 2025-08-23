'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';

const expertiseLogos = [
  { src: '/images/aws.png', alt: 'AWS' },
  { src: '/images/azure.png', alt: 'Azure' },
  { src: '/images/redhat.png', alt: 'Red Hat' },
  { src: '/images/kubernetes.png', alt: 'Kubernetes' },
  { src: '/images/mongodb.png', alt: 'MongoDB' },
  { src: '/images/docker.png', alt: 'Docker' },
  { src: '/images/tensorFlow.png', alt: 'TensorFlow' },
  { src: '/images/elasticsearch.png', alt: 'ElasticSearch' },
  { src: '/images/kafka.png', alt: 'Kafka' },
];

export default function ExpertiseSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 4, spacing: 16 },
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 2, spacing: 12 },
        },
        '(max-width: 480px)': {
          slides: { perView: 1, spacing: 8 },
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
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
        <p className="text-gray-600 mb-10 max-w-4xl">
          At HawkStack Technologies, we specialize in delivering cutting-edge solutions powered by
          industry-leading technologies. Our expertise spans a wide range of services, backed by our deep
          knowledge and experience with trusted platforms like <span className="text-blue-600 font-medium">Red Hat</span>,{' '}
          <span className="font-semibold">MongoDB</span>, <span className="font-semibold">TensorFlow</span>, and{' '}
          <span className="font-semibold">Docker</span>.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {expertiseLogos.map((logo, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white rounded shadow-md p-6 flex items-center justify-center h-48"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {expertiseLogos.slice(0, expertiseLogos.length - 3).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer duration-300 ${
                currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
