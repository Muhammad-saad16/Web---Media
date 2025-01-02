'use client'
import { useState } from 'react';
import Image from 'next/image';
interface Project {
    id: number;
    title: string;
    description: string;
    type: 'video' | 'image';
    src: string;
    technologies: string[];
    link?: string;
}
export default function Page() {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "E-commerce Platform Redesign",
            description: "A complete overhaul of an outdated e-commerce site, focusing on user experience and conversion optimization.",
            type: "video",
            src: "/project1.mp4",
            technologies: ["React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 2,
            title: "KababJee Website",
            description: "Secure and user-friendly Kababjees website for orders.",
            type: "video",
            src: "/kababjees.mp4",
            technologies: ["React Native", "Next.js", "Tailwind CSS", "Firebase"]
        },
        {
            id: 3,
            title: "E-comerce Website",
            description: "A E-comerce Website for customer service, capable of handling complex queries and purchasing from interactions.",
            type: "video",
            src: "/video.mp4",
            technologies: ["Python", "React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 4,
            title: "Dubai Hotel ",
            description: "A hotel website for booking rooms.",
            type: "video",
            src: "/dubai.mp4",
            technologies: ["React Native", "Next.js", "Tailwind CSS", "Firebase"],
            link: "https://dubai-hotel-website-zyw6.vercel.app/",
        },
        {
            id: 5,
            title: "Pizza Ordering System",
            description: "A Portfolio for customer service, capable of handling complex queries and learning from interactions.",
            type: "video",
            src: "/pizza.mp4",
            technologies: ["Python", "React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 6,
            title: "E-commerce Platform Redesign",
            description: "A Portfolio for customer service, capable of handling complex queries and learning from interactions.",
            type: "video",
            src: "/e-comorce.mp4",
            technologies: ["Python", "React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 7,
            title: "IT System",
            description: "A Portfolio for customer service, capable of handling complex queries and learning from interactions.",
            type: "video",
            src: "/it.mp4",
            technologies: ["Python", "React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 8,
            title: "e-comerce Website",
            description: "A Portfolio for customer service, capable of handling complex queries and learning from interactions.",
            type: "video",
            src: "/12345.mp4",
            technologies: ["Python", "React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 9,
            title: "Clothing Website",
            description: "A Portfolio for customer service, capable of handling complex queries and learning from interactions.",
            type: "video",
            src: "/cloth.mp4",
            technologies: ["Python", "React", "Next.js", "Tailwind CSS"]
        },
        
    ];

    return (
        
        <section className="min-h-screen py-20 px-4 bg-black">
       
            
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4169E1] to-[#9370DB] inline-block text-transparent bg-clip-text">
                        Our Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Explore our portfolio of innovative digital solutions that have transformed businesses and delighted users.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#0A0F1C] rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
                            onClick={() => setActiveProject(project.id)}
                        >
                            <div className="aspect-video relative">
                                {project.type === 'video' ? (
                                    <video
                                        src={project.src}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        onMouseEnter={(e) => e.currentTarget.play()}
                                        onMouseLeave={(e) => e.currentTarget.pause()}
                                    />
                                ) : (
                                    <Image
                                        src={project.src}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs rounded-full bg-[#1A1F2C] text-[#4169E1]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeProject !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#0A0F1C] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-white text-2xl font-semibold">
                                    {projects[activeProject - 1].title}
                                </h3>
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="aspect-video relative mb-4">
                                {projects[activeProject - 1].type === 'video' ? (
                                    <video
                                        src={projects[activeProject - 1].src}
                                        className="w-full h-full object-cover rounded-lg"
                                        controls
                                    />
                                ) : (
                                    <Image
                                        src={projects[activeProject - 1].src}
                                        alt={projects[activeProject - 1].title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                )}
                            </div>
                            <p className="text-gray-400 mb-4">{projects[activeProject - 1].description}</p>
                            <div className="flex flex-wrap gap-2">
                                {projects[activeProject - 1].technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full bg-[#1A1F2C] text-[#4169E1]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

