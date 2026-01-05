// import { PortFolioImg } from '../assets/images';
// import { useState, useRef } from 'react';
// import { LazyMotion, domAnimation, m } from 'framer-motion';
// import { Download, Mail, Phone, Code2, Palette, Rocket, Cloud, Users } from 'lucide-react';

// const About = () => {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const imageRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!imageRef.current) return;

//     const rect = imageRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const tiltX = ((y - centerY) / centerY) * -6;
//     const tiltY = ((x - centerX) / centerX) * 6;

//     setTilt({ x: tiltX, y: tiltY });
//   };

//   const handleMouseLeave = () => {
//     setTilt({ x: 0, y: 0 });
//   };

//   const skills = [
//     { icon: Code2, text: 'Full-Stack Development', color: 'from-cyan-500 to-blue-500' },
//     { icon: Palette, text: 'UI/UX & Frontend Design', color: 'from-pink-500 to-rose-500' },
//     { icon: Rocket, text: 'Modern JavaScript & React', color: 'from-emerald-500 to-teal-500' },
//     { icon: Cloud, text: 'API Integration & Deployment', color: 'from-amber-500 to-orange-500' },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   return (
//     <LazyMotion features={domAnimation}>
//       <div id='About' className="min-h-screen  text-white content-center ">
//         <m.div className="flex justify-center items-center gap-4 mb-6 bg-red-6 mt-16">
//           {/* Icon with flex and align-self to center precisely */}
//           <Users className="w-12 h-12 text-cyan-400 flex-shrink-0 self-center" />

//           {/* Heading */}
//           <m.div variants={itemVariants}>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
//               About Me
//             </h1>
//             <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
//           </m.div>
//         </m.div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <m.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
//           >

//             {/* Left Section: 3D Floating Profile Image */}
//             <m.div variants={imageVariants} className="order-1 flex max-lg:justify-center">

//               <div
//                 ref={imageRef}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 className="relative w-full max-w-md aspect-square cursor-pointer "
//                 style={{ perspective: '1000px' }}
//               >
//                 <div
//                   className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 transition-transform duration-300 ease-out "
//                   style={{
//                     transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(15px)`,
//                     transformStyle: 'preserve-3d',
//                   }}
//                 >
//                   <img
//                     src={PortFolioImg}
//                     alt="Professional profile"
//                     className="w-full h-full object-cover"
//                   />

//                   {/* Subtle bottom gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />

//                   {/* Subtle 3D accent layer */}
//                   <div
//                     className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
//                     style={{ transform: 'translateZ(8px)', transformStyle: 'preserve-3d' }}
//                   />
//                 </div>

//                 {/* Floating accent elements */}
//                 <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10 animate-pulse" />
//               </div>
//             </m.div>

//             {/* Right Section: Text Content */}
//             <m.div variants={itemVariants} className="order-2 space-y-8">


//               {/* Bio */}
//               <m.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 leading-relaxed">
//                 I'm a passionate Full Stack Web Developer and problem solver with a strong focus on creating secure, scalable, and high-performance web applications. I specialize in modern JavaScript frameworks like React, front-end design, API integration, and deployment. I thrive on turning complex challenges into clean, efficient, and user-friendly solutions that deliver seamless digital experiences and leave a lasting impact.


//               </m.p>

//               <m.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 leading-relaxed">
//                 When I'm not coding, you'll find me exploring emerging technologies, contributing to
//                 open-source projects, or mentoring aspiring developers. I believe in continuous learning
//                 and building products that make a meaningful impact.
//               </m.p>

//               {/* Skill Badges */}
//               <m.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
//                 {skills.map((skill, index) => (
//                   <m.div
//                     key={index}
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05, y: -5 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-cyan-500/10"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg`}>
//                         <skill.icon className="w-5 h-5 text-white" />
//                       </div>
//                       <span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors">
//                         {skill.text}
//                       </span>
//                     </div>

//                     {/* Hover glow effect */}
//                     <div
//                       className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
//                     />
//                   </m.div>
//                 ))}
//               </m.div>

//               {/* CTA Buttons */}
//               <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
//                 {/* Resume Download */}
//                 <a href="/MyResume.pdf" download>
//                   <m.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       <Download className="w-5 h-5" />
//                       Download Resume
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </m.button>
//                 </a>

//                 <m.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group relative px-6 py-4 bg-gray-800/80 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 overflow-hidden"
//                 >
//                   <span className="relative z-10 flex flex-col gap-1.5">
//                     <span className="flex items-center gap-2">
//                       <Mail className="w-4 h-4" />
//                       <span className="text-sm">premshankarrai2005@gmail.com</span>
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <Phone className="w-4 h-4" />
//                       <span className="text-sm">+91 72504 22265</span>
//                     </span>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </m.button>
//               </m.div>
//             </m.div>
//           </m.div>
//         </div>
//       </div>
//     </LazyMotion>
//   );
// };

// export default About;

import { PortFolioImg } from '../assets/images';
import { useState, useRef } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Download, Mail, Phone, Code2, Palette, Rocket, Cloud, Users } from 'lucide-react';

const About = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

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
      <div id="About" className="min-h-screen text-white flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          {/* Heading */}
          <m.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center sm:text-left">
            <Users className="max-sm:hidden w-12 h-12 text-cyan-400 flex-shrink-0 self-center" />
            <m.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
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
                className="relative w-full max-w-[260px] sm:max-w-md
 aspect-square cursor-pointer"
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
                    alt="Professional profile"
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
              <m.p variants={itemVariants} className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                I'm a Full Stack Web Developer focused on building secure, scalable, and high-performance web applications. I specialize in React, front-end design, API integration, and deployment, turning complex challenges into clean, user-friendly solutions.
              </m.p>

              <m.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and building products that make a meaningful impact.
              </m.p>

              {/* Skill Badges */}
              <m.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {skills.map((skill, index) => (
                  <m.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.text}
                      </span>
                    </div>
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                    />
                  </m.div>
                ))}
              </m.div>

              {/* CTA Buttons */}
              <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="/MyResume.pdf" download>
                  <m.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </m.button>
                </a>

                <m.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 py-4 bg-gray-800/80 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex flex-col gap-1.5">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">premshankarrai2005@gmail.com</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+91 72504 22265</span>
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </m.button>
              </m.div>
            </m.div>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default About;

