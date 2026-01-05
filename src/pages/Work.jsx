



import { ExternalLink, Github, Award } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import projects from '../data/projects';

const Work = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="Work" className="min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Header */}
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-24"
          >
            <m.div className="flex justify-center items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-col sm:flex-row">
              <Award className="w-10 h-10 max-sm:hidden sm:w-12 sm:h-12 text-cyan-400 flex-shrink-0" />
              <m.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Featured Work
                </h1>
                <div className="h-1.5 w-20 mx-auto sm:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              </m.div>
            </m.div>


            <p className="text-base sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              A collection of projects showcasing full-stack expertise, creative problem-solving,
              and impact-driven development
            </p>

            <div className="flex justify-center mt-6 sm:mt-8">
              <a
                href="https://github.com/premshankarrai2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700
                  hover:from-slate-700 hover:via-slate-600 hover:to-slate-500
                  shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-500" />
                <span>GitHub Portfolio</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </div>
          </m.div>

          {/* Projects */}
          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <m.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="space-y-4 sm:space-y-6 my-6 sm:my-10">
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 transition-all duration-700
                          group-hover:text-transparent group-hover:bg-gradient-to-r
                          group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="tag-float px-2 sm:px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs sm:text-sm font-semibold rounded-lg group-hover:border-cyan-500/80 group-hover:bg-gray-800/80 group-hover:text-cyan-300 transition-all duration-500"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-3 pt-2 sm:pt-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-cyan-500 to-blue-500
                            hover:shadow-lg transition-all duration-300"
                        >
                          <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-45 transition-transform duration-500" />
                          View Project
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white
                            bg-gray-800 border border-gray-700
                            hover:border-gray-600 transition-all duration-300"
                        >
                          <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Work;




