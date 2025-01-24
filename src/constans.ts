import AstroJS from "@/components/icons/AstroJS.astro";
import CSS from "@/components/icons/CSS.astro";
import ESlint from "@/components/icons/ESlint.astro";
import ExpressJS from "@/components/icons/ExpressJS.astro";
import Gemini from "@/components/icons/Gemini.astro";
import Git from "@/components/icons/Git.astro";
import Github from "@/components/icons/Github.astro";
import HTML from "@/components/icons/HTML.astro";
import IaSdk from "@/components/icons/IaSdk.astro";
import JavaScript from "@/components/icons/JavaScript.astro";
import MongoDB from "@/components/icons/MongoDB.astro";
import NextAuth from "@/components/icons/NextAuth.astro";
import NextJS from "@/components/icons/NextJS.astro";
import NodeJS from "@/components/icons/NodeJS.astro";
import ReactJS from "@/components/icons/ReactJS.astro";
import Shadcn from "@/components/icons/Shadcn.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import TypeScript from "@/components/icons/TypeScript.astro";
import MySQL from "./components/icons/MySQL.astro";
import Java from "./components/icons/Java.astro";
import Spring from "./components/icons/Spring.astro";

enum HeaderKeys {
  EXPERIENCE = "EXPERIENCE",
  PROJECTS = "PROJECTS",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT",
}

interface NavItem {
  title: string;
  key: HeaderKeys;
  url: string;
}

export const navItems: NavItem[] = [
  { title: "Experiencia", key: HeaderKeys.EXPERIENCE, url: "#experience" },
  { title: "Proyectos", key: HeaderKeys.PROJECTS, url: "#projects" },
  { title: "Sobre mí", key: HeaderKeys.ABOUT, url: "#about" },
  { title: "Contacto", key: HeaderKeys.CONTACT, url: "mailto:carlostutos828@gmail.com" },
];

interface Tag {
  name: string;
  class: string;
  icon: any;
}

interface Tags {
  [key: string]: Tag;
}

export const TAGS: Tags = {
  NEXT: {
    name: "Next.js",
    class: "bg-[#003159] text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  REACT: {
    name: "React.js",
    class: "bg-[#003159] text-white",
    icon: ReactJS,
  },
  ESLINT: {
    name: "ESLint",
    class: "bg-[#003159] text-white",
    icon: ESlint,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#003159] text-white",
    icon: TypeScript,
  },
  GEMINI: {
    name: "Gemini",
    class: "bg-[#003159] text-white",
    icon: Gemini,
  },
  IA_SDK: {
    name: "IA SDK",
    class: "bg-[#003159] text-white",
    icon: IaSdk,
  },
  SHADCN: {
    name: "shadcn/ui",
    class: "bg-[#003159] text-white",
    icon: Shadcn,
  },
  NEXTAUTH: {
    name: "NextAuth",
    class: "bg-[#003159] text-white",
    icon: NextAuth,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#003159] text-white",
    icon: MongoDB,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#003159] text-white",
    icon: AstroJS,
  },
  HTML: {
    name: "HTML",
    class: "bg-[#003159] text-white",
    icon: HTML,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#003159] text-white",
    icon: CSS,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#003159] text-white",
    icon: JavaScript,
  },
  NODE: {
    name: "Node.js",
    class: "bg-[#003159] text-white",
    icon: NodeJS,
  },
  GIT: {
    name: "Git",
    class: "bg-[#003159] text-white",
    icon: Git,
  },
  GITHUB: {
    name: "GitHub",
    class: "bg-[#003159] text-white",
    icon: Github,
  },
  EXPRESS: {
    name: "Express",
    class: "bg-[#003159] text-white",
    icon: ExpressJS,
  },
  MYSQL: {
    name: "MySql",
    class: "bg-[#003159] text-white",
    icon: MySQL,
  },
  JAVA: {
    name: "Java",
    class: "bg-[#003159] text-white",
    icon: Java,
  },
  SPRING: {
    name: "Spring",
    class: "bg-[#003159] text-white",
    icon: Spring,
  },
};

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  github?: string;
  tags: any[];
}

export const TechStack = [
  TAGS.HTML,
  TAGS.CSS,
  TAGS.JAVASCRIPT,
  TAGS.TYPESCRIPT,
  TAGS.ASTRO,
  TAGS.REACT,
  TAGS.NEXT,
  TAGS.NEXTAUTH,
  TAGS.ESLINT,
  TAGS.TAILWIND,
  TAGS.NODE,
  TAGS.EXPRESS,
  TAGS.MYSQL,
  TAGS.MONGODB,
  TAGS.GIT,
  TAGS.GITHUB,
  TAGS.JAVA,
  TAGS.SPRING,
];
