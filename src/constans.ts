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
  { title: "Experiencia", key: HeaderKeys.EXPERIENCE, url: "/#experiencia" },
  { title: "Proyectos", key: HeaderKeys.PROJECTS, url: "/#proyectos" },
  { title: "Sobre mí", key: HeaderKeys.ABOUT, url: "/#sobre-mi" },
  { title: "Contacto", key: HeaderKeys.CONTACT, url: "mailto:carlostutos828@gmail.com" },
];

const TAGS = {
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

export const PROJECTS = [
  {
    title: "Moodflix - Movies Recommendations based on your mood.",
    description:
      "Una aplicación de recomendación de películas impulsada por IA. Sugiere películas que coincidan con su estado de ánimo. creada desde cero usando Gemini y Next.js.",
    link: "https://moodflix-by-calisto.vercel.app",
    image: "/projects/moodflix.webp",
    github: "https://github.com/Carlos-Bolano/moodflix",
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.GEMINI],
  },
  {
    title: "Jadirh Gonzalez Poems - Poetry Blog",
    description:
      "Un blog de poesía que diseñé y desarrollé para un cliente apasionado por la escritura. Los fans pueden explorar, comentar y dar 'me gusta' a los poemas de Jadirh. Creado y diseñado desde cero por mi.",
    link: "https://jadirhgonzalezpoems.vercel.app",
    image: "/projects/jadirhGonzalesPoems.webp",
    // github: "https://github.com/Carlos-Bolano/jadirhgonzalezpoems",
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.NEXTAUTH, TAGS.MONGODB],
  },
  {
    title: "Travlog - Travels landing page",
    description:
      "Construida a partir de un diseño en Figma de la comunidad, inicialmente diseñado para escritorio. Lo adapté para dispositivos móviles y lo desarrollé con AstroJS",
    link: "https://travlog-website.vercel.app/",
    image: "/projects/travlog.webp",
    github: "https://github.com/Carlos-Bolano/Travlog-Landing-Page",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.ASTRO],
  },
  // {
  //   title: "Age Calculator - Frontend Mentor Challenge",
  //   description:
  //     "Una solución a un desafío de Frontend Mentor. Calcula la edad exacta de una persona. Creado con React, TypeScript y TailwindCSS.",
  //   link: "https://age--calculator.vercel.app/",
  //   image: "/projects/ageCalculator.webp",
  //   github: "https://github.com/Carlos-Bolano/age-calculator",
  //   tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.ESLINT],
  // },
  // {
  //   title: "Task Manager - A task management web application.  ",
  //   description:
  //     "Una aplicación de gestión de tareas. Cuenta con autenticación. Los usuarios pueden gestionar y filtrar tareas por categorías. construida con el stack MERN.",
  //   link: "https://manejador-de-tareas.vercel.app",
  //   image: "/projects/tasksManager.webp",
  //   github: "https://github.com/Carlos-Bolano/Task-Organizer",
  //   tags: [TAGS.REACT, TAGS.NODE, TAGS.EXPRESS, TAGS.MONGODB],
  // },
];

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
