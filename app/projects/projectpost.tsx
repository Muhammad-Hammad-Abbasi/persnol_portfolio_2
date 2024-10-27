'use client'

import React from "react";
import { projects } from "./projectsdata";
import Marquee from "react-marquee-slider";
import './project.css';
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const ProjectCards: React.FC = () => {
  return (
    <main>
      <h1 className="text-center font-extrabold text-5xl mb-10 my-5 text-[#916e80] text-3d">PROJECTS</h1>
      <div className="marquee-container">

        <Marquee
          velocity={15}
          direction="ltr"
          scatterRandomly={false}
          resetAfterTries={200}
          onInit={() => { }}
          onFinish={() => { }}
        >
          {projects.map((project) => (
            <div className="project-card w-[300px] md:w-[450px] lg:w-[450px] font-serif font-bold" key={project.id}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image src={project.image}
                  alt={project.name}
                  width={200}
                  height={150}
                />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
       
       
      <div className="flex justify-center text-lg font-semibold py-10">
      <Link href={"https://github.com/Muhammad-Hammad-Abbasi"}>
      <button className="flex text-center text-[#916e80] hover:text-[#e06ba6]"><FaGithub size={20} className=" m-1" />View GitHub<GoArrowRight className=" m-2"  /></button>
      </Link>
      </div>
     

    </main>
  );
};

export default ProjectCards;
