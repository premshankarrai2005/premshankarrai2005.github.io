

import { PortFolioImg } from '../assets/images';
import { useState, useRef } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Download, Mail, Phone, Code2, Palette, Rocket, Cloud, Users, Copy, Check, Eye } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';
import ResumeModal from '../components/ResumeModal';

const About = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showResume, setShowResume] = useState(false);


  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('premshankarrai2005@gmail.com');
    setCopiedEmail(true);
    showToast('Email copied to clipboard! 📋', 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+917250422265');
    setCopiedPhone(true);
    showToast('Phone number copied to clipboard! 📋', 'success');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const skills = [
    { icon: Code2, text: 'Full-Stack Development', color: 'from-cyan-500 to-blue-500' },
    { icon: Palette, text: 'UI/UX & Frontend Design', color: 'from-pink-500 to-rose-500' },
    { icon: Rocket, text: 'Modern JavaScript & React', color: 'from-emerald-500 to-teal-500' },
    { icon: Cloud, text: 'API Integration & Deployment', color: 'from-amber-500 to-orange-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="min-h-screen text-slate-900 dark:text-white flex items-center transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          {/* Heading */}
          <m.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center sm:text-left">
            <Users className="max-sm:hidden w-12 h-12 text-cyan-500 dark:text-cyan-400 flex-shrink-0 self-center" />
            <m.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-4">
                About Me
              </h1>
              <div className="h-1.5 w-24 mx-auto sm:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </m.div>
          </m.div>

          {/* Content */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Image */}
            <m.div variants={imageVariants} className="flex max-lg:justify-center order-1 max-lg:mb-8">
              <div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-[260px] sm:max-w-md aspect-square cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 transition-transform duration-300 ease-out"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(15px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={PortFolioImg}
                    alt="Prem Shankar Rai Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
                    style={{ transform: 'translateZ(8px)', transformStyle: 'preserve-3d' }}
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 animate-pulse" />
              </div>
            </m.div>

            {/* Text */}
            <m.div variants={itemVariants} className="order-2 space-y-8">
              <m.p variants={itemVariants} className="text-lg sm:text-xl text-slate-700 dark:text-gray-300 leading-relaxed">
                Hi, I am Prem Shankar Rai, a Full Stack Web Developer focused on building secure, scalable, and high-performance web applications. I specialize in React, front-end design, API integration, and deployment, turning complex challenges into clean, user-friendly solutions.
              </m.p>

              <m.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and building products that make a meaningful impact.
              </m.p>

              {/* Skill Badges */}
              <m.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {skills.map((skill, index) => (
                  <m.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-gray-700/50 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:border-cyan-500/40 dark:hover:border-gray-600 shadow-sm dark:shadow-none hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-md`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-slate-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors">
                        {skill.text}
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                    />
                  </m.div>
                ))}
              </m.div>

              {/* CTA Buttons — Resume */}
              <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-6">
                {/* Preview Resume */}
                <m.button
                  onClick={() => setShowResume(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 group relative px-5 py-3.5 rounded-xl font-semibold
                    text-slate-800 dark:text-white
                    bg-white dark:bg-gray-800
                    border border-slate-200 dark:border-gray-700
                    hover:border-cyan-400 dark:hover:border-cyan-500
                    shadow-sm hover:shadow-md transition-all duration-300
                    flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5 text-cyan-500" />
                  Preview Resume
                </m.button>

                {/* Download Resume */}
                <a href="/MyResume.pdf" download className="flex-1">
                  <m.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </m.button>
                </a>
              </m.div>

              {/* Interactive Contact Quick Actions */}
              <m.div variants={itemVariants}>
                <div className="flex flex-col gap-2 p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 shadow-sm text-xs sm:text-sm">
                  {/* Email copy button */}
                  <button
                    onClick={copyEmail}
                    className={`flex items-center justify-between p-2 rounded-lg text-left group transition-all duration-200
                      ${copiedEmail
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : 'hover:bg-slate-100 dark:hover:bg-gray-700/60 text-slate-700 dark:text-gray-200'}`}
                    title="Click to copy email"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Mail className={`w-4 h-4 flex-shrink-0 transition-colors ${copiedEmail ? 'text-emerald-500' : 'text-cyan-500'}`} />
                      <span className="truncate">premshankarrai2005@gmail.com</span>
                    </span>
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 ml-1" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                    )}
                  </button>

                  {/* Phone copy button */}
                  <button
                    onClick={copyPhone}
                    className={`flex items-center justify-between p-2 rounded-lg text-left group transition-all duration-200
                      ${copiedPhone
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : 'hover:bg-slate-100 dark:hover:bg-gray-700/60 text-slate-700 dark:text-gray-200'}`}
                    title="Click to copy phone number"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Phone className={`w-4 h-4 flex-shrink-0 transition-colors ${copiedPhone ? 'text-emerald-500' : 'text-emerald-500'}`} />
                      <span>+91 72504 22265</span>
                    </span>
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 ml-1" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                    )}
                  </button>
                </div>
              </m.div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </LazyMotion>
  );
};

export default About;

