'use client'

// Import AOS styles
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

export default function Aos_Animation() {
  useEffect(() => {
    AOS.init({ duration: 1500,
               offset: 100
     });
  }, []);

  return (
    <div data-aos="zoom-in-down">
       <Image
            src={"/abc.jpg"}
            width={250}
            height={250}
            alt="my-image"
            className="rounded-full border border-[#D6BE8D] shadow-xl shadow-[#D6BE8D] "
          />
    </div>
  );
}
