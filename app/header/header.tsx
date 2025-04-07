'use client'

import Link from "next/link";
import { useState } from "react";
import { FaAlignRight, FaHome, FaProjectDiagram, FaTimes } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { SiHackster } from "react-icons/si";

export default function Header() {
  const [isOpen, setState] = useState(false)

  const toggleButton = () => {
    setState(!isOpen)
  }

  return (
    <div className="top-0 sticky z-10">

      <div className="flex justify-between p-5">
        <SiHackster size={30} className="text-[#1f1a1a] block lg:hidden md:hidden " />
        <button onClick={toggleButton} className="block md:hidden lg:hidden">{isOpen ? <FaTimes size={24} className="text-[#7c6956]" /> : <FaAlignRight size={24} className="text-[#7c6956]" />}</button>
      </div>


      {/* Large screen */}
      <div className="py-8 hidden md:block lg:block">
        <nav className="flex items-center justify-center px-2 text-lg md:text-lg lg:xl font-mono space-x-20 ">

          <Link href="/" className="flex text-[#7c6956]">
            <FaHome size={26} className="text-[#1f1a1a] mx-2" />
            <li className="list-none hover:underline">
              Home
            </li>
          </Link>

          <Link href="/projects" className="flex text-[#7c6956] ">
          <FaProjectDiagram size={24} className="text-[#1f1a1a] mx-2" />
          <li className="list-none hover:underline">
            Projects
          </li>
          </Link>

          <Link href="/about" className="flex text-[#7c6956]">
            <MdRoundaboutRight size={24} className="text-[#1f1a1a] mx-2" />
            <li className="list-none hover:underline">
            About
          </li>
          </Link>

          <Link href="/contact" className="flex text-[#7c6956] ">
          
            <IoMdContacts size={24} className="text-[#1f1a1a] mx-2" />
            <li className="list-none hover:underline">
            Contact
          </li>
          </Link>
        </nav>
      </div>


      {/* moblie screen */}


      {isOpen &&
        <div className="block md:hidden lg:hidden mb-5">
          <nav className="flex items-center flex-col justify-center px-2 text-md font-mono">
            <ul className=" space-y-6 ">
              {/* <button><FaTimes size={24} /></button> */}
              <li className="flex gap-2">
                <FaHome size={26} className="text-[#1f1a1a]" />
                <Link href="/" onClick={toggleButton} className="text-[#7c6956] hover:underline">Home</Link>
              </li>
              <li className="flex gap-2">
                <FaProjectDiagram size={24} className="text-[#1f1a1a]" />
                <Link href="/projects" onClick={toggleButton} className="text-[#7c6956] hover:underline">Projects</Link>
              </li>
              <li className="flex gap-1">
                <MdRoundaboutRight size={24} onClick={toggleButton} className="text-[#1f1a1a]" />
                <Link href="/about" className="text-[#7c6956] hover:underline">About</Link>
              </li>
              <li className="flex gap-2">
                <IoMdContacts size={24} className="text-[#1f1a1a]" />
                <Link href="/contact" onClick={toggleButton} className="text-[#7c6956] hover:underline">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

      }
    </div>
  );
};