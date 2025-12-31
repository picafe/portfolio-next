"use client";
import Navbar from "../components/navbar";

interface Skill {
  name: string;
  tag: string;
  level: number;
  note?: string;
}

interface SkillGroup {
  title: string;
  accent: string;
  items: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "languages",
    accent: "from-sky-300/80 via-cyan-300/80 to-indigo-400/80",
    items: [
      { name: "TypeScript", tag: "TS", level: 66,},
      { name: "JavaScript", tag: "JS", level: 66,},
      { name: "SQL", tag: "SQL", level: 50, note: "relational dbs" },
      { name: "Python", tag: "PY", level: 33, note: "basic, learning CV" },
    ],
  },
  {
    title: "libraries",
    accent: "from-emerald-300/80 via-teal-300/80 to-sky-300/80",
    items: [
      { name: "React", tag: "R", level: 66, note: "need to catch up on server components" },
      { name: "Next.js", tag: "NX", level: 50, note: "used in a few projects" },
      { name: "Tailwind", tag: "TW", level: 90, note: "used in all my projects" },
      { name: "Astro", tag: "TR", level: 66, note: "my first framework" },
    ],
  },
  {
    title: "platforms",
    accent: "from-purple-300/70 via-pink-300/70 to-rose-300/70",
    items: [
      { name: "Cloudflare", tag: "CF", level: 72, note: "workers, domains, DNS, KV, R2" },
      { name: "Oracle Cloud", tag: "OC", level: 40, note: "VM management" },
      { name: "Azure", tag: "AZ", level: 30, note: "basics, AI-900 certified" },
    ],
  },
  {
    title: "technology",
    accent: "from-indigo-300/80 via-purple-300/70 to-pink-300/70",
    items: [
      { name: "Linux/Unix", tag: "LX", level: 70, note: "sql first" },
      { name: "Git", tag: "GH", level: 66, note: "" },
      { name: "Docker", tag: "DK", level: 60, note: "deploy + preview" },
    ],
  },
  {
    title: "CAD",
    accent: "from-amber-300/80 via-yellow-300/80 to-lime-300/80",
    items: [
      { name: "KiCad", tag: "KC", level: 65, note: "pcb design" },
      { name: "Altium", tag: "AL", level: 50, note: "basic designs so far" },
      { name: "Onshape", tag: "OS", level: 40, note: "basic modelling" },
    ],
  },
  {
    title: "hardware",
    accent: "from-lime-300/80 via-emerald-300/80 to-cyan-300/80",
    items: [
      { name: "Soldering", tag: "HW", level: 70, note: "can solder pretty well" },
      { name: "Arduino/C++", tag: "AR", level: 66, note: "knowledgble in many libraries" },
      { name: "PC Hardware", tag: "PC", level: 66, note: "diagnosing + repairing" },
      { name: "3D Printing", tag: "3D", level: 33, note: "recently got a 3DP" },
    ],
  }
];

function ProficiencyBar({ level, accent }: { level: number; accent: string }) {
  return (
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <div
        className={`h-full bg-linear-to-r ${accent} shadow-[0_0_20px_rgba(125,211,252,0.35)]`}
        style={{ width: `${level}%` }}
      />
    </div>
  );
}

function SkillItem({ skill, accent }: { skill: Skill; accent: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-semibold text-white">
            {skill.tag}
          </span>
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-white leading-tight">{skill.name}</p>
            {skill.note && <p className="text-sm text-zinc-400">{skill.note}</p>}
          </div>
        </div>
        <span className="text-sm text-zinc-300">{skill.level > 66 ? "Advanced" : skill.level > 33 ? "Intermediate" : "Beginner"}</span>
      </div>
      <ProficiencyBar level={skill.level} accent={accent} />
    </div>
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-white capitalize">{group.title}</h2>

      </div>
      <div className="space-y-5">
        {group.items.map((skill) => (
          <SkillItem key={skill.name} skill={skill} accent={group.accent} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full">
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-6 lg:w-2/5 w-full h-screen px-6">
        <Navbar className="my-4" animated={false} />
        <div className="flex flex-col items-center text-white gap-4 text-center">
          <h1 className="font-display text-5xl sm:text-7xl font-medium">skills</h1>
          <p className="font-pixel text-xl sm:text-2xl text-zinc-300">
            my knowledge from zero to mastery
          </p>

        </div>
      </div>

      <div className="lg:w-3/5 w-full lg:h-full h-3/4 sm:h-3/5 overflow-y-auto px-4 py-6 lg:py-10 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skillGroups.slice(0, 5).map((group) => (
            <SkillGroupCard key={group.title} group={group} />
          ))}
        </div>
        <SkillGroupCard group={skillGroups[5]} />
        <p className="font-pixel text-md sm:text-lg text-zinc-300">
          + there&apos;s always more to learn!
        </p>
      </div>
    </div>
  );
}
