import { Link } from 'react-router-dom';

const ProjectCard = ({ title, category, image, link }) => {
    return (
        <div className="group  relative w-full bg-white/0 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-white/20 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
            {/* Thumbnail Container */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-800">
                <div className="absolute inset-0 backdrop-grayscale group-hover:backdrop-grayscale-0 transition-all duration-500 z-10" />
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <span>Image Placeholder</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="py-6 px-8 relative">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-sm font-medium text-blue-400 mb-2 block">{Array.isArray(category) ? category.join(", ") : category}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    </div>

                    {/* Arrow Button */}
                    <Link to={link} className="w-12 h-12 rounded-full cursor-pointer border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
