'use client';

import Image from 'next/image';

const services = [
  {
    title: 'IT Automation',
    image: '/images/automation_it.png',
  },
  {
    title: 'Cloud Native',
    image: '/images/cloud-native.png',
  },
  {
    title: 'DevOps Tools & Support',
    image: '/images/devops.png',
  },
  {
    title: 'Modern Monitoring',
    image: '/images/modern-monitoring.png',
  },
  {
    title: 'AI & ML',
    image: '/images/ai-ml.png',
  },
  {
    title: 'Training & Certification',
    image: '/images/training.png',
  },
];

export default function DigitalTransformation() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Empowering Your Digital <br className="hidden sm:block" />
          <span className="text-blue-600">Transformation with HawkStack</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center text-base font-medium text-gray-800">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
