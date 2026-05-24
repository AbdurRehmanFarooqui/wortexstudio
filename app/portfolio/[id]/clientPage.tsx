"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    Github,
    ChevronLeft,
    ChevronRight,
    X,
    Maximize2,
} from "lucide-react";
import clsx from "clsx";
import { fetchPortfolioProject } from "./actions";

// ---------- Types ----------
interface PortfolioImage {
    url: string;
    index: number;
}

interface Project {
    id: number;
    title: string;
    category: string;
    description?: string;
    link?: string;
    github?: string;
    tags: string[];
    portfolio_images: PortfolioImage[];
}

// ---------- Constants ----------
const PLACEHOLDER_IMAGE = "/logo.png"; // Replace with your fallback

// ---------- Sub-components ----------

// Reusable animated navigation link
const BackLink = ({ href = "/portfolio", label = "Back to Projects" }) => (
    <div className="max-w-[1400px] mx-auto px-6 mb-8 relative z-10">
        <Link
            href={href}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-500 transition-all duration-300 backdrop-blur-md"
        >
            <ChevronLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-quantico text-xs uppercase tracking-[0.2em] font-bold">
                {label}
            </span>
        </Link>
    </div>
);

// Ambient background layers
const AmbientBackground = () => (
    <>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
    </>
);

// Header: category line, title, tags
const ProjectHeader = ({
    category,
    title,
    tags,
}: {
    category: string;
    title: string;
    tags: string[];
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-purple-500" />
            <span className="text-purple-500 font-quantico text-xs md:text-sm uppercase tracking-[0.4em] font-bold">
                {category}
            </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron text-white tracking-tighter mb-8 leading-tight">
            {title}
        </h1>
        <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
                <span
                    key={i}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 text-zinc-300 px-5 py-2.5 rounded-full"
                >
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

// Lightbox modal with improved UX
const Lightbox = ({
    imageUrl,
    onClose,
}: {
    imageUrl: string;
    onClose: () => void;
}) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose],
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-500 hover:border-purple-500 transition-all hover:rotate-90 duration-300"
                aria-label="Close fullscreen view"
            >
                <X size={24} />
            </button>
            <div
                className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={imageUrl}
                    alt="Fullscreen project image"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="90vw"
                    priority
                />
            </div>
        </motion.div>
    );
};

// Main gallery with cinematic navigation, keyboard support, and thumbnail HUD
const Gallery = ({
    images,
    title,
}: {
    images: PortfolioImage[];
    title: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const total = images.length;

    const goTo = useCallback(
        (index: number) => {
            setCurrentIndex((index + total) % total);
        },
        [total],
    );

    const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
    const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

    const openLightbox = useCallback(
        (url: string) => setLightboxImage(url),
        [],
    );
    const closeLightbox = useCallback(() => setLightboxImage(null), []);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxImage) return; // let lightbox handle keys
            if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [prev, next, lightboxImage]);

    // Focus container for keyboard accessibility
    useEffect(() => {
        containerRef.current?.focus();
    }, []);

    const currentImage = images[currentIndex]?.url || PLACEHOLDER_IMAGE;

    return (
        <>
            <motion.div
                ref={containerRef}
                tabIndex={0}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-full h-[60vh] md:h-[75vh] min-h-[500px] bg-zinc-950 border border-zinc-800/80 rounded-3xl overflow-hidden group shadow-2xl shadow-black outline-none"
            >
                {/* Main image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black" // added flex centering, explicit bg
                        onClick={() => openLightbox(currentImage)}
                    >
                        <Image
                            src={currentImage}
                            alt={`${title} - image ${currentIndex + 1} of ${total}`}
                            fill
                            className="object-contain" // ← changed from object-cover to object-contain
                            priority
                            sizes="(max-width: 768px) 100vw, 1400px"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
                            }}
                        />
                        {/* Gradient overlay removed – no longer needed */}
                    </motion.div>
                </AnimatePresence>

                {/* Maximize icon */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white">
                        <Maximize2 size={20} />
                    </div>
                </div>

                {/* Navigation arrows (visible only when multiple images) */}
                {total > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-500/80 hover:border-purple-500 hover:scale-110 transition-all duration-300 group/btn"
                            aria-label="Previous image"
                        >
                            <ChevronLeft
                                size={28}
                                className="group-hover/btn:-translate-x-1 transition-transform"
                            />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-500/80 hover:border-purple-500 hover:scale-110 transition-all duration-300 group/btn"
                            aria-label="Next image"
                        >
                            <ChevronRight
                                size={28}
                                className="group-hover/btn:translate-x-1 transition-transform"
                            />
                        </button>
                    </>
                )}

                {/* Counter indicator */}
                {total > 1 && (
                    <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-white/70">
                        {currentIndex + 1} / {total}
                    </div>
                )}

                {/* Thumbnail HUD */}
                {total > 1 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex gap-3 p-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    className={clsx(
                                        "relative w-16 h-10 md:w-20 md:h-14 rounded-xl overflow-hidden transition-all duration-300",
                                        idx === currentIndex
                                            ? "border-2 border-purple-500 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)] opacity-100"
                                            : "border border-transparent opacity-50 hover:opacity-100 hover:scale-105",
                                    )}
                                    aria-label={`View image ${idx + 1}`}
                                    aria-current={idx === currentIndex ? "true" : undefined}
                                >
                                    <Image
                                        src={img.url}
                                        alt={`Thumbnail ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />
                )}
            </AnimatePresence>
        </>
    );
};

// Sidebar with links and stack nodes
const Sidebar = ({ link, github, tags }: { link?: string; github?: string; tags: string[] }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="lg:col-span-4"
    >
        <div className="sticky top-32 space-y-8 bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 p-8 rounded-3xl">
            {/* Deployment Links */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 font-quantico mb-6">
                    Project Access
                </h3>
                {link && link !== "#" && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between w-full p-5 bg-black border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <span className="relative z-10 font-quantico text-sm uppercase tracking-[0.2em] font-bold text-white">
                            Live Deployment
                        </span>
                        <ExternalLink
                            size={18}
                            className="relative z-10 text-zinc-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all"
                        />
                    </a>
                )}
                {github && github !== "#" && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between w-full p-5 bg-black border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.4)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <span className="relative z-10 font-quantico text-sm uppercase tracking-[0.2em] font-bold text-white">
                            Source Repository
                        </span>
                        <Github
                            size={18}
                            className="relative z-10 text-zinc-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all"
                        />
                    </a>
                )}
            </div>

            {/* Stack Nodes */}
            <div className="pt-8 border-t border-zinc-800/50">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 font-quantico mb-6">
                    Core Architecture
                </h3>
                <div className="flex flex-col gap-3">
                    {tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-default">
                            <div className="relative flex items-center justify-center w-6 h-6">
                                <span className="absolute w-2 h-2 bg-zinc-700 rounded-full group-hover:bg-purple-500 transition-colors duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-purple-500" />
                                <span className="absolute w-full h-full border border-zinc-800 rounded-full group-hover:border-purple-500/50 scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <span className="text-sm md:text-base text-zinc-400 group-hover:text-white font-medium transition-colors">
                                {tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

// Skeleton loader shown before mount to avoid layout shift
const Skeleton = () => (
    <div className="relative min-h-screen bg-black text-white pt-24 pb-32 overflow-hidden animate-pulse">
        <AmbientBackground />
        <BackLink />
        <div className="max-w-[1400px] mx-auto px-6 space-y-12 relative z-10">
            <div className="max-w-4xl">
                <div className="h-4 w-24 bg-zinc-800 rounded mb-6" />
                <div className="h-16 md:h-24 bg-zinc-800 rounded w-3/4 mb-8" />
                <div className="flex gap-3">
                    <div className="h-8 w-20 bg-zinc-800 rounded-full" />
                    <div className="h-8 w-20 bg-zinc-800 rounded-full" />
                </div>
            </div>
            <div className="w-full h-[60vh] bg-zinc-950 rounded-3xl" />
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-6">
                    <div className="h-8 bg-zinc-800 rounded w-1/2" />
                    <div className="h-4 bg-zinc-800 rounded w-full" />
                    <div className="h-4 bg-zinc-800 rounded w-5/6" />
                </div>
                <div className="lg:col-span-4">
                    <div className="h-64 bg-zinc-900/30 rounded-3xl" />
                </div>
            </div>
        </div>
    </div>
);

// ---------- Main Page Component ----------
export default function ProjectDetailsPage({
  project
}:{ project: any }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Mock data – replace with your data fetching logic (e.g., fetch, SWR)
    // const project: Project = {
    //     id: 1,
    //     title: "Quantum Render Engine",
    //     category: "Spatial 3D & WebGL",
    //     description:
    //         "This is a comprehensive description of your project. It details the architecture of the system, the specific WebGL pipelines utilized, and how we optimized the rendering loop to achieve a seamless 60FPS across all devices. We engineered a custom shading model that processes light dynamically, allowing for real-time reflections and refractions within the browser environment. The impact was a 40% increase in user retention and a highly immersive digital experience.",
    //     link: "https://wortex.studio",
    //     github: "https://github.com",
    //     tags: ["Next.js", "Three.js", "Tailwind CSS", "TypeScript", "WebGL"],
    //     portfolio_images: [
    //         { url: "/logo.png", index: 0 },
    //         { url: "/logo.png", index: 1 },
    //         { url: "/logo.png", index: 2 },
    //     ],
    // };

    if (!isMounted) {
        return <Skeleton />;
    }

    return (
        <div className="relative min-h-screen bg-black text-white pt-24 pb-32 overflow-hidden">
            <AmbientBackground />
            <BackLink href="/portfolio" label="System Directory" />
            <div className="max-w-[1400px] mx-auto px-6 space-y-12 relative z-10">
                <ProjectHeader
                    category={project.category}
                    title={project.title}
                    tags={project.tags}
                />

                <Gallery images={project.portfolio_images} title={project.title} />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 pt-8">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-8 space-y-10"
                    >
                        {project.description && (
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-3xl md:text-4xl font-black font-orbitron tracking-tighter mb-6 flex items-center gap-4">
                                    <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                                    Project Overview
                                </h2>
                                <p className="text-zinc-400 leading-relaxed text-lg md:text-xl font-light">
                                    {project.description}
                                </p>
                            </div>
                        )}
                    </motion.div>

                    <Sidebar link={project.link} github={project.github} tags={project.tags} />
                </div>
            </div>
        </div>
    );
}
