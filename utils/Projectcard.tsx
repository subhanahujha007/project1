"use client"
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  const handleClick = () => {
    console.log("clicked")
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      
    </div>
  );
};

export default ProjectCard;