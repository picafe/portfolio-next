"use client";
import ProjectCard from "../components/card";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-6 lg:w-2/5 w-full h-screen px-6">
        <Navbar className="my-4" animated={false} />
        <div className="flex flex-col items-center text-white gap-4 text-center">
          <h1 className="font-display text-5xl sm:text-7xl font-medium">projects</h1>
          <p className="font-pixel text-xl sm:text-2xl text-zinc-300">
            my project log and blog
          </p>
        </div>
      </div>

      {/* sample data */}
      <div className="lg:w-3/5 w-full lg:h-full h-3/4 sm:h-3/5 overflow-y-auto px-4 py-6 lg:py-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 content-start">
        <ProjectCard
          name="E-Commerce Platform"
          title="Modern Shopping Experience"
          description="A full-stack e-commerce platform with real-time inventory management, payment processing, and user authentication."
          collaborative={true}
          imageUrl="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=640"
          technologies={["Next.js", "TypeScript", "Prisma", "PostgreSQL"]}
          progress={85}
        />
        <ProjectCard
          name="Task Manager Pro"
          title="Collaborative Workspace"
          description="A productivity app for teams with kanban boards, real-time collaboration, and deadline tracking."
          collaborative={true}
          imageUrl="https://images.unsplash.com/photo-1628965882741-570e75becd5d?q=80&w=640"
          technologies={["React", "TypeScript", "Tailwind", "Firebase"]}
          progress={60}
        />
        <ProjectCard
          name="AI Image Generator"
          title="Creative AI Studio"
          description="An AI-powered image generation tool using stable diffusion models with custom training capabilities."
          collaborative={false}
          imageUrl="https://images.unsplash.com/photo-1686904423955-b1ec39e46b3c?q=80&w=640"
          technologies={["Python", "FastAPI", "React", "TensorFlow"]}
          progress={70}
        />
        <ProjectCard
          name="Weather Dashboard"
          title="Real-time Forecasts"
          description="Beautiful weather dashboard with hourly and weekly forecasts, interactive maps, and weather alerts."
          collaborative={false}
          imageUrl="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=640"
          technologies={["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"]}
          progress={95}
        />


      </div>
    </div>
  );
}
