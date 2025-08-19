'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const partners = [
  { name: 'CNCF', logo: '/partners/cncf.webp', alt: 'CNCF Logo' },
  { name: 'Linux Foundation', logo: '/partners/linux.webp', alt: 'Linux Foundation Logo' },
  { name: 'Mirantis', logo: '/partners/mirantis.webp', alt: 'Mirantis Logo' },
  { name: 'Red Hat', logo: '/partners/redhat.webp', alt: 'Red Hat Logo' },
  { name: 'Advance Agility', logo: '/partners/advance.webp', alt: 'Advance Agility Logo' },
];

export default function PartnersCarousel() {
  return (
    <section className="bg-[#f5f8fb] py-16">
      <div className="text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl text-center mb-6">Our Partners</h2>
        <p className="text-center text-md text-gray-400 mb-12">
          We partner with industry leaders like Red Hat, Linux Foundation, CNCF, Mirantis, and Advance Agility to deliver
          expertise in cloud-native solutions, open-source technologies, Kubernetes, DevOps, and agile transformation.
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={idx}>
              <div className="mb-15 bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-40">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
