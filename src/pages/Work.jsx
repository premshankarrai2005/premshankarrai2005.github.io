import { useState } from 'react';
import { ExternalLink, Github, Award, Clock, ChevronRight, LayoutGrid } from 'lucide-react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';
import { useToast } from '../contexts/ToastContext';
import ProjectModal from '../components/ProjectModal';

// Derive filter categories dynamically from all project category arrays
const ALL_FILTERS = ['All', ...Array.from(new Set(projects.flatMap((p) => p.category)))];

const Work = () => {
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category?.includes(activeFilter));

  const handlePendingProjectClick = (projectTitle) => {
    showToast(
      `Live deployment for "${projectTitle}" is coming soon! You can check the source code on GitHub.`,
      'info'
    );
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="work" className="min-h-screen overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <LazyMotion features={domAnimation}>
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14"
          >
            <m.div className="flex justify-center items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-col sm:flex-row">
              <Award className="w-10 h-10 max-sm:hidden sm:w-12 sm:h-12 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
              <m.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Featured Work
                </h1>
                <div className="h-1.5 w-20 mx-auto sm:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              </m.div>
            </m.div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8">
              A collection of projects showcasing full-stack expertise, creative problem-solving,
              and impact-driven development
            </p>

            {/* Project stats */}
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-mono">
                <LayoutGrid size={14} className="text-cyan-500" />
                {projects.length} Projects
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600" />
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {projects.filter((p) => p.isLive).length} Live
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600" />
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-mono">
                <Clock size={14} className="text-amber-500" />
                {projects.filter((p) => !p.isLive).length} In Progress
              </span>
            </div>

            {/* GitHub link */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <a
                href="https://github.com/premshankarrai2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-white
                  bg-slate-800 hover:bg-slate-900 dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-600 dark:to-slate-800
                  shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>GitHub Portfolio</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </m.div>

          {/* ── Filter Tabs ── */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
          >
            {ALL_FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-250
                    ${isActive
                      ? 'text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-600 dark:text-gray-400 bg-white dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-600 hover:text-cyan-600 dark:hover:text-cyan-400'
                    }`}
                >
                  {isActive && (
                    <m.span
                      layoutId="active-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                  {/* count badge */}
                  <span className={`relative z-10 ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full
                    ${isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-gray-700 text-slate-500 dark:text-gray-400'
                    }`}>
                    {filter === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category?.includes(filter)).length}
                  </span>
                </button>
              );
            })}
          </m.div>

          {/* ── Projects ── */}
          <AnimatePresence mode="wait">
            <m.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16 sm:space-y-24"
            >
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16 text-slate-500 dark:text-gray-400">
                  No projects found for this filter.
                </div>
              ) : (
                filteredProjects.map((project, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <m.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-gray-800/40 border border-slate-200/80 dark:border-gray-700/50 shadow-xl dark:shadow-2xl shadow-slate-200/50 backdrop-blur-sm`}
                    >
                      {/* Image — clickable to open modal */}
                      <div className="flex-1 w-full">
                        <div
                          className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 dark:border-gray-700/50 cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                          title="Click to view details"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Hover overlay hint */}
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <span className="opacity-0 hover:opacity-100 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity duration-300">
                              View Details
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 w-full">
                        <div className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                              {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-slate-100 dark:bg-gray-800/90 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-semibold rounded-lg group-hover:border-cyan-500/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Buttons */}
                          <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4">
                            {/* Details button */}
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold
                                text-slate-700 dark:text-gray-200
                                bg-slate-100 dark:bg-gray-800/80
                                border border-slate-200 dark:border-gray-700
                                hover:border-cyan-400 dark:hover:border-cyan-600
                                hover:text-cyan-600 dark:hover:text-cyan-400
                                transition-all duration-300 group/detail"
                            >
                              Details
                              <ChevronRight size={16} className="group-hover/detail:translate-x-0.5 transition-transform duration-200" />
                            </button>

                            {project.isLive ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white
                                  bg-gradient-to-r from-cyan-500 to-blue-500
                                  hover:shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Live
                              </a>
                            ) : (
                              <button
                                onClick={() => handlePendingProjectClick(project.title)}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-600 dark:text-gray-300
                                  bg-slate-200/80 dark:bg-gray-700/60 border border-slate-300 dark:border-gray-600 hover:bg-slate-200 dark:hover:bg-gray-700 transition-all duration-300"
                                title="Live demo deployment in progress"
                              >
                                <Clock className="w-4 h-4 text-amber-500" />
                                {project.statusText || 'Coming Soon'}
                              </button>
                            )}

                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-800 dark:text-white
                                bg-slate-100 dark:bg-gray-800/80 border border-slate-300 dark:border-gray-700
                                hover:bg-slate-200 dark:hover:border-gray-600 transition-all duration-300"
                            >
                              <Github className="w-4 h-4" />
                              Source
                            </a>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  );
                })
              )}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Work;
