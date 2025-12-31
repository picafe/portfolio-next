"use client";

interface ProjectCardProps {
  name: string;
  title: string;
  description: string;
  collaborative: boolean;
  imageUrl: string;
  technologies: string[];
  progress?: number;
}

export default function ProjectCard({
  name,
  title,
  description,
  collaborative,
  imageUrl,
  technologies,
  progress = 75,
}: ProjectCardProps) {
  return (
    <div className="group/card overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div
        className="relative h-64 w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover/card:bg-black/75" />
        <div className="relative h-full flex flex-col justify-between p-4 z-10">
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-col">
              <p className="font-semibold text-base text-gray-50">{name}</p>
              <p className="text-sm text-gray-400">{collaborative ? "Collaborative" : "Solo"}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50">{title}</h1>
            <p className="font-normal text-sm text-gray-50 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="h-1 rounded-full bg-white/10 overflow-hidden pt-2">
          <div 
            className="h-full bg-linear-to-r from-sky-300/80 via-indigo-300/80 to-emerald-300/80" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div> 
    </div>
  );
}
