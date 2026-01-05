



import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { Github, GitBranch, Cloud, Lock, Users } from "lucide-react";

import expertiseData from '../data/expertise';

const ExpertisePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'from-blue-400 to-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'from-cyan-400 to-blue-400' },
    { name: 'Git', icon: Github, color: 'from-black to-gray-800' },
    { name: 'React', icon: FaReact, color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-green-400' },
    { name: 'Express', icon: SiExpress, color: 'from-gray-500 to-gray-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-600 to-green-500' },
    { name: 'Deployment', icon: GitBranch, color: 'from-purple-400 to-pink-400' },
    { name: 'Cloud', icon: Cloud, color: 'from-blue-300 to-blue-500' },
    { name: 'Authentication', icon: Lock, color: 'from-red-400 to-red-500' },
    { name: 'Role-Based.', icon: Users, color: 'from-green-400 to-teal-400' },
    { name: 'Host/Backend', icon: SiFirebase, color: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div id="Expertise" className="min-h-screen text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        {/* Only vertical padding adjusted for small screens */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-24"
          >
            <m.div className="flex justify-center items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-col sm:flex-row">
              <GitBranch className="max-sm:hidden w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 flex-shrink-0" />
              <m.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Expertise Timeline
                </h1>
                <div className="h-1.5 w-20 mx-auto sm:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              </m.div>
            </m.div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              A journey through years of continuous learning, building, and mastering modern technologies
            </p>
          </m.div>

          {/* Expertise Timeline */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute  md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-teal-500 opacity-30"></div>

            {expertiseData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <m.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 sm:mb-16 md:mb-32 flex items-stretch gap-6 sm:gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-16 sm:pl-20 md:pl-0`}>
                    <m.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl ${item.glowColor} hover:shadow-2xl transition-all duration-300 h-full`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.year}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed">{item.description}</p>

                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <m.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 sm:px-3 py-1 text-sm bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 hover:bg-gray-600/50 transition-colors"
                          >
                            {skill}
                          </m.span>
                        ))}
                      </div>
                    </m.div>
                  </div>

                  {/* Icon on right side */}
                  <div className="hidden md:flex flex-1 items-center justify-center">
                    <m.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                      className={`relative w-24 sm:w-32 h-24 sm:h-32 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
                    >
                      <div className="absolute inset-1 rounded-2xl bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                      </div>
                    </m.div>
                  </div>

                  {/* Timeline Dot */}
                  <m.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5, type: 'spring' }}
                    className={`absolute  md:left-1/2 top-1/2 -translate-y-1/2 transform md:-translate-x-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br ${item.color} shadow-2xl ${item.glowColor} flex items-center justify-center border-4 border-gray-900 z-10`}
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  </m.div>
                </m.div>
              );
            })}
          </m.div>

          {/* Skills Icons Section */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <m.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br ${skill.color} shadow-lg`}
                >
                  <Icon className="text-white w-8 sm:w-10 h-8 sm:h-10" />
                </m.div>
              );
            })}
          </m.div>

          {/* Footer */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mt-16 sm:mt-24 lg:mt-32"
          >
            <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Continuous Evolution
              </h2>
              <p className="text-gray-400 max-w-xl text-sm sm:text-base">
                The journey never stops. Always learning, always building, always pushing the boundaries of what's possible.
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default ExpertisePage;
