import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Clock, Zap } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const modal = (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {project && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
                            onClick={onClose}
                        />

                        {/* Modal Panel */}
                        <m.div
                            key="modal"
                            initial={{ opacity: 0, y: 60, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-x-4 top-[5vh] bottom-[5vh] z-[101] max-w-4xl mx-auto
                                bg-white dark:bg-gray-900
                                border border-slate-200 dark:border-gray-700/60
                                rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                            role="dialog"
                            aria-modal="true"
                            aria-label={project.title}
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full
                                    bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                    border border-slate-200 dark:border-gray-700
                                    text-slate-600 dark:text-gray-300
                                    hover:bg-slate-100 dark:hover:bg-gray-700
                                    transition-all duration-200 shadow-sm"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            {/* Scrollable content */}
                            <div className="overflow-y-auto flex-1">
                                {/* Hero image */}
                                <div className="relative h-52 sm:h-72 w-full bg-slate-100 dark:bg-gray-800 flex-shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Status badge on image */}
                                    <div className="absolute bottom-4 left-4">
                                        {project.isLive ? (
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                                                bg-emerald-500/90 text-white backdrop-blur-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                Live
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                                                bg-amber-500/90 text-white backdrop-blur-sm">
                                                <Clock size={12} />
                                                {project.statusText || 'Coming Soon'}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 sm:p-8 space-y-6">
                                    {/* Title */}
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                            {project.title}
                                        </h2>
                                        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>

                                    {/* Key Features */}
                                    {project.features?.length > 0 && (
                                        <div>
                                            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest
                                                text-slate-500 dark:text-gray-400 mb-3">
                                                <Zap size={14} className="text-cyan-500" />
                                                Key Features
                                            </h3>
                                            <ul className="space-y-2.5">
                                                {project.features.map((feat, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle2
                                                            size={17}
                                                            className="text-cyan-500 flex-shrink-0 mt-0.5"
                                                        />
                                                        <span className="text-slate-700 dark:text-gray-300 text-sm sm:text-base">
                                                            {feat}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest
                                            text-slate-500 dark:text-gray-400 mb-3">
                                            <Zap size={14} className="text-purple-500" />
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold
                                                        bg-slate-100 dark:bg-gray-800
                                                        border border-slate-200 dark:border-gray-700
                                                        text-slate-700 dark:text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-3 pt-2 pb-2">
                                        {project.isLive ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
                                                    bg-gradient-to-r from-cyan-500 to-blue-500
                                                    hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                                            >
                                                <ExternalLink size={16} />
                                                View Live Project
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                                                text-slate-500 dark:text-gray-400
                                                bg-slate-100 dark:bg-gray-800
                                                border border-slate-200 dark:border-gray-700 cursor-not-allowed">
                                                <Clock size={16} className="text-amber-500" />
                                                {project.statusText || 'Coming Soon'}
                                            </span>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                                                text-slate-800 dark:text-white
                                                bg-slate-100 dark:bg-gray-800
                                                border border-slate-200 dark:border-gray-700
                                                hover:bg-slate-200 dark:hover:bg-gray-700 transition-all duration-300"
                                        >
                                            <Github size={16} />
                                            View Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </LazyMotion>
    );

    return createPortal(modal, document.body);
};

export default ProjectModal;
