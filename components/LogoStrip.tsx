import {
  SiBlender, SiFigma, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb, SiPostgresql, SiThreedotjs, SiCanva, SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si';
import { LogoLoop } from "./LogoLoop";

export default function LogoStrip() {
  const logos = [
    { node: <SiBlender size={68} color="#F5792A" />, title: "Blender", href: "https://www.blender.org" },
    { node: <SiFigma size={68} color="#F24E1E" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiReact size={68} color="#61DAFB" />, title: "React", href: "https://reactjs.org" },
    { node: <SiNextdotjs size={68} color="#000000" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={68} color="#3178C6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={68} color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiPython size={68} color="#3776AB" />, title: "Python", href: "https://www.python.org" },
    { node: <SiNodedotjs size={68} color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb size={68} color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql size={68} color="#4169E1" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiThreedotjs size={68} color="#000000" />, title: "Three.js", href: "https://threejs.org" },
    { node: <SiCanva size={68} color="#00C4CC" />, title: "Canva", href: "https://www.canva.com" },
    { node: <SiAdobephotoshop size={68} color="#31A8FF" />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
    { node: <SiAdobeillustrator size={68} color="#FF9A00" />, title: "Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
  ];
  return (
    <div className='w-full '>

      <h2 className='text-4xl pb-12 m-auto text-center'>Technologies We Use</h2>
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={logos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}


// const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];