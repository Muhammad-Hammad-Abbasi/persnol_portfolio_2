'use client'

import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import "./contact.css"; 

const ContactPage = () => {
  const socialIcons = [
    { id: 1, name: "LinkedIn", icon: <FaLinkedin size={25} />, link:"https://www.linkedin.com/in/hammad-abbasi-95388628b/" },
    { id: 2, name: "Twitter", icon: <FaTwitter size={25} />, link: "https://twitter.com/" },
    { id: 3, name: "GitHub", icon: <FaGithub size={25} />, link: "https://github.com/Muhammad-Hammad-Abbasi" },
    { id: 4, name: "Facebook", icon: <FaFacebook size={25} />, link: "https://www.facebook.com/profile.php?id=100068906216007" },
    { id: 5, name: "Instagram", icon: <FaInstagram size={25} />, link: "https://www.instagram.com/mr_hammad.abbasi/" },
  ];

  return (
    <div className="contact-page flex flex-col items-center relative h-screen justify-center">
      <Image src="/portfolio2-my-img.jpg" height={150} width={150} alt="My Image" className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full" />
      
      <div className="icons-container absolute inset-0 flex items-center justify-center">
        {socialIcons.map((icon, index) => (
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon absolute text-[#916e80] "
            style={{
              transform: `rotate(${index * (360 / socialIcons.length)}deg) translate(calc(var(--translate-distance, 120px)))`,
            }}
            key={icon.id}
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
