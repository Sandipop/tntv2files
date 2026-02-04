import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import helio_thumbnail from '../assets/images/helio_thumbnail.jpg'
import plannora_thumbnail from '../assets/images/plannora_thumbnail.jpg'
import rainforest_thumbnail from '../assets/images/rainforest_thumbnail.jpg'

const LatestProjects = ({ showHeading = true, showFilter = true, headerAlign = 'left', projectCount = null }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "UI/UX Design", "Branding", "Development", "Marketing"];

    const projects = [
        {
            id: 1,
            title: "Helio Expect",
            category: "UI/UX Design",
            link: "/work/HelioExpect",
            image: helio_thumbnail
        },
        {
            id: 2,
            title: "Rainforest",
            category: "Development",
            link: "/work/RainforestAi",
            image: rainforest_thumbnail
        },
        {
            id: 3,
            title: "Plannora",
            category: "Branding",
            image: plannora_thumbnail
        },
        {
            id: 4,
            title: "Aura Farm",
            category: "UI/UX Design",
            image: null
        },
        {
            id: 5,
            title: "Echo Valley",
            category: "Marketing",
            image: null
        },
        {
            id: 6,
            title: "NexGen",
            category: "Development",
            image: null
        },
        {
            id: 7,
            title: "NexGen",
            category: "Development",
            image: null
        },
        {
            id: 8,
            title: "NexGen",
            category: "Development",
            image: null
        },
        {
            id: 9,
            title: "NexGen",
            category: "Development",
            image: null
        },
    ];

    const allFiltered = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const filteredProjects = projectCount ? allFiltered.slice(0, projectCount) : allFiltered;

    const getHeaderStyles = () => {
        switch (headerAlign) {
            case 'center':
                return {
                    container: "flex flex-col items-center text-center mb-16 gap-8",
                    buttons: "flex flex-wrap justify-center gap-3"
                };
            case 'right':
                return {
                    container: "flex flex-col items-end text-right mb-16 gap-8",
                    buttons: "flex flex-wrap justify-end gap-3"
                };
            default: // left
                return {
                    container: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8",
                    buttons: "flex flex-wrap gap-3"
                };
        }
    };

    const styles = getHeaderStyles();

    const shouldRenderHeader = showHeading || showFilter;

    return (
        <section className="py-8 px-4 bg-[#060010] relative">
            <div className="max-w-7xl mx-auto">
                {shouldRenderHeader && (
                    <div className={styles.container}>
                        {/* Header */}
                        {showHeading && (
                            <div className="max-w-xl">
                                <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">Portfolio</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    Our Latest Projects and Success Stories
                                </h2>
                            </div>
                        )}

                        {/* Filter Buttons */}
                        {showFilter && (
                            <div className={styles.buttons}>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-gray-400 border-white/20 hover:border-white/40 hover:text-white"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="animate-fade-in">
                            <ProjectCard
                                title={project.title}
                                category={project.category}
                                image={project.image}
                                link={project.link || "#"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;
