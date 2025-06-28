import { IconType } from "react-icons"
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiGo,
  SiOracle,
  SiPython,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiFlutter,
  SiDart,
  SiDjango,
  SiJest,
  SiCucumber,
  SiFigma,
} from "react-icons/si"

export interface Skill {
  name: string
  icon: IconType
  color: string
}

export const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", icon: SiJavascript, color: "from-yellow-300 to-yellow-500" },
  { name: "React.js", icon: SiReact, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "from-gray-800 to-black" },
  { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-green-700" },
  { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-800" },
  { name: "Spring Boot", icon: SiSpringboot, color: "from-green-400 to-green-600" },
  { name: "Go", icon: SiGo, color: "from-cyan-300 to-blue-400" },
  { name: "Java", icon: SiOracle, color: "from-red-500 to-orange-500" },
  { name: "Python", icon: SiPython, color: "from-blue-400 to-yellow-400" },
  { name: "C#", icon: SiSharp, color: "from-purple-500 to-purple-700" },
  { name: "Figma", icon: SiFigma, color: "from-purple-400 to-pink-500" },
  { name: "HTML5", icon: SiHtml5, color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: SiCss3, color: "from-blue-400 to-blue-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "from-purple-600 to-indigo-600" },
  { name: "Flutter", icon: SiFlutter, color: "from-blue-400 to-cyan-300" },
  { name: "Dart", icon: SiDart, color: "from-blue-500 to-teal-400" },
  { name: "Django", icon: SiDjango, color: "from-green-700 to-teal-600" },
  { name: "Jest", icon: SiJest, color: "from-red-400 to-pink-500" },
  { name: "Cucumber", icon: SiCucumber, color: "from-green-400 to-lime-500" },
]
