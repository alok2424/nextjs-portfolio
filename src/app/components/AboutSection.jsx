"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills ",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>BLOCKCHAIN</li>
        <li>HARDHAT & GANACHE </li>
        <li>GRAPH QL</li>
        <li>JAVASCRIPT</li> 
        <li>REACT JS & NEXT JS</li>
        <li>TAILWIND-CSS</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "lang",
    content: (
      <ul className="list-disc pl-2">
         <li>Solidity</li>
         <li>Rust</li>
         <li>Java</li>
         <li>C</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>CODE EATER</li>
        <li>CYFRIN UPDRAFT</li>
        <li>ALCHEMY </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CODE EATER</li>
        <li>ALCHEMY</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a skilled <span className="font-bold " > Web 3.0 developer </span> dedicated to creating <span className="font-bold"> decentralized applications </span>that address real-world challenges,
          combining technical expertise with a passion for innovation. As an active member of my college  <span className="font-bold">NGO</span> , committed to making 
          a positive impact. I love to spend my free time with <span className="font-bold">my pet </span> & <span className="font-bold">reading self-growth books</span>. Apart from this , practicing<span className="font-bold"> yoga </span> 
          and staying sharp with games of <span className="font-bold"> chess and badminton.</span>
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills & Tools{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("lang")}
              active={tab === "lang"}
            >
              {" "}
              Languages{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
