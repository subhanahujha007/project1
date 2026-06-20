"use client"
import React from "react";
import ProjectCard from "../../../utils/Projectcard";
import Footer from "../Footer/page";
const Projects = () => {
  return (
    <>
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chatsop.png"
          link="https://chatsop.in"
          title="ChatSOP — Production AI SaaS"
          description="Production-grade RAG SaaS with real-time chat, WebSockets, vector search, and embeddable widgets."
        />
        <ProjectCard
          src="/algorithm.png"
          link="https://algoritm-visualizer-n6ue.vercel.app/"
          title="Algorithm Visualizer"
          description="Interactive visualizations for sorting and pathfinding algorithms, with step-by-step controls and animations."
        />

          
      
       
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Projects;