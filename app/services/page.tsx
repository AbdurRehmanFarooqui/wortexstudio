"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Boxes,
  Fingerprint,
  Cpu,
  Globe,
  BarChart3,
  Smartphone,
  Layout,
  Brain,
  Gamepad2,
  Palette,
  ShoppingCart,
  Cloud,
  TrendingUp,
  Move,
  Megaphone,
} from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  index: number;
}

function ServiceCard({ title, description, icon, tags, index }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full md:w-[380px] bg-white border border-zinc-100 p-8 rounded-[2rem] shadow-xl shadow-[#000]/10 hover:shadow-2xl hover:shadow-[#a600ff]/40 transition-all duration-500 overflow-hidden"
    >
      {/* Background Decorative Number */}
      <span className="absolute -top-4 -right-2 text-9xl font-black text-zinc-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-orbitron">
        0{index + 1}
      </span>

      {/* Icon Container */}
      <div className="relative z-10 w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-[#a600ff] group-hover:text-white transition-colors duration-500 mb-8">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-orbitron text-xl font-bold mb-4 tracking-tight group-hover:text-[#a600ff] transition-colors">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
          {description}
        </p>

        {/* System Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="font-quantico text-[9px] uppercase tracking-widest px-3 py-1 bg-zinc-700 border border-zinc-100 rounded-full text-zinc-50">
              {tag}
            </span>
          ))}
        </div>

        {/* The "Cyber Dash" Progress Line */}
        <div className="w-full h-[1px] bg-zinc-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-0 bg-[#a600ff] group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  // const services = [
  //   {
  //     title: "Web Engineering",
  //     description: "High-performance React & Next.js systems engineered for speed, scalability, and seamless user interaction.",
  //     icon: <Code2 size={24} />,
  //     tags: ["React", "Next.js", "TypeScript"]
  //   },
  //   {
  //     title: "Immersive 3D",
  //     description: "Bringing depth to the web using Three.js and WebGL. We build interactive worlds inside the browser.",
  //     icon: <Boxes size={24} />,
  //     tags: ["Three.js", "Blender", "WebGL"]
  //   },
  //   {
  //     title: "UI Architecture",
  //     description: "Logic-driven design systems that prioritize user psychology and aesthetic precision in Figma.",
  //     icon: <Fingerprint size={24} />,
  //     tags: ["Figma", "Design Systems", "UX"]
  //   },
  //   {
  //     title: "Backend Systems",
  //     description: "Robust API development and database architecture that powers complex digital applications.",
  //     icon: <Cpu size={24} />,
  //     tags: ["Node.js", "Postgres", "Python"]
  //   },
  //   {
  //     title: "Global SEO",
  //     description: "Data-driven optimization strategies to ensure your digital presence is discovered across the frontier.",
  //     icon: <Globe size={24} />,
  //     tags: ["Strategy", "Analytics", "Growth"]
  //   },
  //   {
  //     title: "Brand Logic",
  //     description: "Constructing visual identities that translate your mission into a recognizable digital artifact.",
  //     icon: <BarChart3 size={24} />,
  //     tags: ["Branding", "Strategy", "Identity"]
  //   }
  // ];
  const services = [
    {
      title: "WebExperiences",
      subServices: [
        {
          title: "Web Development",
          description: "Modern, responsive web applications built with cutting-edge frameworks. We engineer digital experiences that perform flawlessly across all devices.",
          icon: <Code2 size={24} />,
          tags: ["React", "Next.js", "Tailwind", "TypeScript"]
        },
        {
          title: "UI Architecture",
          description: "Logic-driven design systems that prioritize user psychology and aesthetic precision in Figma.",
          icon: <Fingerprint size={24} />,
          tags: ["Figma", "Design Systems", "UX"]
        },
        {
          title: "Full-Stack Development",
          description: "End-to-end digital solutions with robust backend systems and seamless frontend experiences. Complete technical ecosystems built to scale.",
          icon: <Cpu size={24} />,
          tags: ["Node.js", "Python", "Databases", "APIs"]
        }
      ]
    },
    {
      title: "Immersive Visuals", subServices: [
        {
          title: "3D Visualization",
          description: "Bringing ideas to life with stunning 3D models and interactive visualizations. From product renders to architectural walkthroughs.",
          icon: <Boxes size={24} />,
          tags: ["Three.js", "Blender", "WebGL", "AR/VR"]
        },
        {
          title: "Motion Design",
          description: "Dynamic animations and transitions that bring interfaces to life. We create engaging motion graphics that enhance user experience.",
          icon: <Move size={24} />,
          tags: ["Animation", "After Effects", "Lottie"]
        },
        {
          title: "Graphic Design",
          description: "Visual storytelling through compelling graphics, branding, and digital art. We craft identities that communicate your unique story.",
          icon: <Palette size={24} />,
          tags: ["Branding", "Illustration", "Print", "Digital"]
        }
      ]
    },
    {
      title: "Smart Systems", subServices: [
        {
          title: "AI Integration",
          description: "Intelligent solutions powered by machine learning and artificial intelligence. Automate processes and gain insights with smart algorithms.",
          icon: <Brain size={24} />,
          tags: ["Machine Learning", "Chatbots", "Automation"]
        },
        {
          title: "Backend Systems",
          description: "Robust API development and database architecture that powers complex digital applications.",
          icon: <Cpu size={24} />,
          tags: ["Node.js", "Postgres", "Python"]
        },
        {
          title: "DevOps & Deployment",
          description: "Streamlined deployment pipelines and cloud infrastructure management. We ensure your applications run smoothly at scale.",
          icon: <Cloud size={24} />,
          tags: ["AWS", "Docker", "CI/CD", "Kubernetes"]
        }
      ]
    },
    {
      title: "Additional Capabilities", subServices: [
        {
          title: "E-Commerce Solutions",
          description: "High-conversion online stores with secure payment systems and inventory management. We build platforms that drive sales and growth.",
          icon: <ShoppingCart size={24} />,
          tags: ["Shopify", "Magento", "Payment Gateways"]
        },
                {
          title: "Mobile apps",
          description: "Native and cross-platform mobile applications designed for intuitive user engagement and exceptional performance on iOS and Android.",
          icon: <Smartphone size={24} />,
          tags: ["React Native", "Flutter", "iOS", "Android"]
        },
        {
          title: "WordPress",
          description: "Custom WordPress development with optimized themes and plugins. We build scalable CMS solutions that empower content creators.",
          icon: <Layout size={24} />,
          tags: ["Custom Themes", "WooCommerce", "Plugins"]
        },
                {
          title: "Game Development",
          description: "Immersive gaming experiences across platforms. From concept to deployment, we create engaging interactive entertainment.",
          icon: <Gamepad2 size={24} />,
          tags: ["Unity", "Unreal", "2D/3D", "Multiplayer"]
        },
                {
          title: "Custom Software Solutions",
          description: "Tailored software development to meet unique business needs, from concept to deployment.",
          icon: <Code2 size={24} />,
          tags: ["Custom Software", "Consulting", "Development"]
        },
        {
          title: "Digital Marketing",
          description: "Data-driven strategies to amplify your digital presence. From SEO to social media, we optimize your reach and engagement.",
          icon: <Megaphone size={24} />,
          tags: ["SEO", "Social Media", "Content Marketing"]
        },
        {
          title: "Global SEO",
          description: "Data-driven optimization strategies to ensure your digital presence is discovered across the frontier.",
          icon: <Globe size={24} />,
          tags: ["Strategy", "Analytics", "Growth"]
        },
        


        {
          title: "Data Analytics",
          description: "Transforming data into actionable insights with advanced analytics and visualization techniques.",
          icon: <BarChart3 size={24} />,
          tags: ["Data Analysis", "Visualization", "Business Intelligence"]
        },
        {
          title: "Brand Strategy",
          description: "Constructing visual identities that translate your mission into a recognizable digital artifact.",
          icon: <Fingerprint size={24} />,
          tags: ["Branding", "Strategy", "Identity"]
        },
        {
          title: "Performance Optimization",
          description: "Fine-tuning applications for maximum speed and efficiency, ensuring a seamless user experience even under heavy load.",
          icon: <TrendingUp size={24} />,
          tags: ["Performance", "Optimization", "Scalability"]
        }
      ]
    },
    // {
    //   title: "Web Development",
    //   description: "Modern, responsive web applications built with cutting-edge frameworks. We engineer digital experiences that perform flawlessly across all devices.",
    //   icon: <Code2 size={24} />,
    //   tags: ["React", "Next.js", "Tailwind", "TypeScript"]
    // },
    // {
    //   title: "Mobile Development",
    //   description: "Native and cross-platform mobile applications designed for intuitive user engagement and exceptional performance on iOS and Android.",
    //   icon: <Smartphone size={24} />,
    //   tags: ["React Native", "Flutter", "iOS", "Android"]
    // },
    // {
    //   title: "WordPress Solutions",
    //   description: "Custom WordPress development with optimized themes and plugins. We build scalable CMS solutions that empower content creators.",
    //   icon: <Layout size={24} />,
    //   tags: ["Custom Themes", "WooCommerce", "Plugins"]
    // },
    // {
    //   title: "AI Integration",
    //   description: "Intelligent solutions powered by machine learning and artificial intelligence. Automate processes and gain insights with smart algorithms.",
    //   icon: <Brain size={24} />,
    //   tags: ["Machine Learning", "Chatbots", "Automation"]
    // },
    // {
    //   title: "Game Development",
    //   description: "Immersive gaming experiences across platforms. From concept to deployment, we create engaging interactive entertainment.",
    //   icon: <Gamepad2 size={24} />,
    //   tags: ["Unity", "Unreal", "2D/3D", "Multiplayer"]
    // },
    // {
    //   title: "3D Visualization",
    //   description: "Bringing ideas to life with stunning 3D models and interactive visualizations. From product renders to architectural walkthroughs.",
    //   icon: <Boxes size={24} />,
    //   tags: ["Three.js", "Blender", "WebGL", "AR/VR"]
    // },
    // {
    //   title: "Graphic Design",
    //   description: "Visual storytelling through compelling graphics, branding, and digital art. We craft identities that communicate your unique story.",
    //   icon: <Palette size={24} />,
    //   tags: ["Branding", "Illustration", "Print", "Digital"]
    // },
    // {
    //   title: "UI/UX Design",
    //   description: "User-centered design systems that blend aesthetic precision with psychological insight. We create interfaces that feel intuitive and delightful.",
    //   icon: <Fingerprint size={24} />,
    //   tags: ["Figma", "User Research", "Prototyping", "Wireframing"]
    // },
    // {
    //   title: "Full-Stack Development",
    //   description: "End-to-end digital solutions with robust backend systems and seamless frontend experiences. Complete technical ecosystems built to scale.",
    //   icon: <Cpu size={24} />,
    //   tags: ["Node.js", "Python", "Databases", "APIs"]
    // },
    // {
    //   title: "E-Commerce Solutions",
    //   description: "High-conversion online stores with secure payment systems and inventory management. We build platforms that drive sales and growth.",
    //   icon: <ShoppingCart size={24} />,
    //   tags: ["Shopify", "Magento", "Payment Gateways"]
    // },
    // {
    //   title: "DevOps & Deployment",
    //   description: "Streamlined deployment pipelines and cloud infrastructure management. We ensure your applications run smoothly at scale.",
    //   icon: <Cloud size={24} />,
    //   tags: ["AWS", "Docker", "CI/CD", "Kubernetes"]
    // },
    // {
    //   title: "Digital Marketing",
    //   description: "Data-driven strategies to amplify your digital presence. From SEO to social media, we optimize your reach and engagement.",
    //   icon: <TrendingUp size={24} />,
    //   tags: ["SEO", "Content", "Analytics", "Campaigns"]
    // }
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-quantico text-[#a600ff] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
              Capabilities List
            </span>
            <h3 className="text-4xl md:text-8xl font-black font-orbitron tracking-tighter italic text-zinc-900">
              SERVICES<span className="text-[#a600ff]">_</span>
            </h3>
            <div className="w-24 h-1 bg-zinc-900 mx-auto mt-6" />
          </motion.div>
        </header>

        {/* Services Grid */}
        <div className="flex flex-col gap-12 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full border-t border-zinc-200 p-6"
            >
              <h4 className="font-orbitron text-lg md:text-3xl text-center font-bold mb-4 tracking-tight text-zinc-900 pt-4">
                {service.title}
              </h4>
              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {service.subServices.map((sub, subIndex) => (
                  <ServiceCard
                    key={index}
                    index={index}
                    {...sub}
                  />
                ))}
              </div>
          </motion.div>
          ))}
          </div>
              {/* Capability Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-32 pt-12 border-t border-zinc-300 flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <div className="font-quantico text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#a600ff] animate-pulse" />
                  All systems online and ready for deployment
                </div>
                <p className="font-orbitron text-xs font-bold text-zinc-900 uppercase">
                  Custom requests available // contact@wortex.studio
                </p>
              </motion.div>
            </div>
    </div>
        );
}
