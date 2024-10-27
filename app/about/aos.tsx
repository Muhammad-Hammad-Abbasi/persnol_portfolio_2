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
            src={"/portfolio2-my-img.jpg"}
            width={250}
            height={250}
            alt="my-image"
            className="rounded-full shadow-xl shadow-[#916e80] "
          />
    </div>
  );
}
