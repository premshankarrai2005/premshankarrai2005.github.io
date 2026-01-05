

// import { useEffect, useState } from "react";
// import { LazyMotion, domAnimation, m } from "framer-motion";

// const Hero = () => {
//   // Roles for auto typewriter
//   const roles = [
//     "Code.Create.Evolve.",
//     "Think.Build.Repeat.",
//     "Logic meets creativity.",
//     "Turning ideas into code.",
//     "Build fast, think smart.",
//     "Code with purpose.",
//     "Design.Develop.Deliver.",
//     "Solving problems with code.",
//     "Minimal code, maximum impact.",
//     'From idea to interface.'
//   ];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Mouse tilt effect
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Generate floating boxes positions once
//   const [boxes] = useState(() => {
//     const positions = [
//       { top: 5, left: 10 },
//       { top: 60, left: 80 },
//     ];
//     return positions.map((pos, i) => {
//       // Random distance ranges for more dramatic movement
//       const translateX = (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 50); // 80-130px
//       const translateY = (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 50); // 80-130px
//       const rotate = (Math.random() > 0.5 ? 1 : -1) * (25 + Math.random() * 25); // 25-50deg
//       const duration = 6 + Math.random() * 5; // 6-11s
//       const delay = Math.random() * 2; // 0-2s

//       return {
//         ...pos,
//         translateX,
//         translateY,
//         rotate,
//         duration,
//         delay,
//       };
//     });
//   });

//   // Auto text writer effect
//   useEffect(() => {
//     const currentRole = roles[currentRoleIndex];
//     const typingSpeed = isDeleting ? 50 : 120;

//     const timeout = setTimeout(() => {
//       setDisplayedText(
//         isDeleting
//           ? currentRole.substring(0, displayedText.length - 1)
//           : currentRole.substring(0, displayedText.length + 1)
//       );

//       if (!isDeleting && displayedText === currentRole) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && displayedText === "") {
//         setIsDeleting(false);
//         setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [displayedText, isDeleting, roles, currentRoleIndex]);

//   // Mouse tilt effect
//   const handleMouseMove = (e) => {
//     const x = ((e.clientX / window.innerWidth) - 0.5) * 25;
//     const y = ((e.clientY / window.innerHeight) - 0.5) * 25;
//     setRotate({ x: -y, y: x });
//   };
//   const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

//   // Background parallax
//   useEffect(() => {
//     let animationFrame;
//     const handleMouseMoveBG = (e) => {
//       cancelAnimationFrame(animationFrame);
//       animationFrame = requestAnimationFrame(() => {
//         setMousePosition({
//           x: (e.clientX / window.innerWidth - 0.5) * 40,
//           y: (e.clientY / window.innerHeight - 0.5) * 40,
//         });
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMoveBG);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMoveBG);
//       cancelAnimationFrame(animationFrame);
//     };
//   }, []);

//   return (
//     <section
//       id="Hero"
//       className="relative w-full min-h-screen flex items-center justify-center overflow-hidden perspective"
//     >
//       {/* Background floating 3D elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {boxes.map((box, i) => (
//           <div
//             key={i}
//             className="absolute w-32 h-32 bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float-slow"
//             style={{
//               top: `${box.top}%`,
//               left: `${box.left}%`,
//               animationDelay: `${box.delay}s`,
//               animationDuration: `${box.duration}s`,
//               filter: "drop-shadow(0 0 40px rgba(34,211,238,0.3))",
//               "--translateX": `${box.translateX}px`,
//               "--translateY": `${box.translateY}px`,
//               "--rotate": `${box.rotate}deg`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main 3D content */}
//       <LazyMotion features={domAnimation}>
//         <m.div
//           className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           style={{ perspective: 1200 }}
//         >
//           <m.div
//             animate={{
//               rotateX: rotate.x,
//               rotateY: rotate.y,
//               transition: { type: "spring", stiffness: 60, damping: 15 },
//             }}
//           >
//             <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-transparent border border-cyan-500/20 backdrop-blur-sm shadow-lg">
//               <p className="text-cyan-400 font-mono text-sm sm:text-base tracking-wider animate-pulse">
//                 Welcome to my futuristic portfolio
//               </p>
//             </div>

//             <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-xl">
//               Hi, I’m Prem
//             </h1>
//             <h1 className=" font-extrabold my-4  bg-clip-text  drop-shadow-xl text-3xl sm:text-4xl md:text-5xl text-gray-300 font-mono tracking-wides">
//               Full Stack Developer
//             </h1>

//             <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-300 font-mono tracking-widest">
//               <span className="text-cyan-400">{"<"} </span>
//               {displayedText}
//               <span className="text-cyan-400">{" />"}</span>
//             </p>

//             <div className="mt-12 flex justify-center gap-6">
//               <a
//                 href="#Work"
//                 className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold shadow-lg"
//               >
//                 View Work
//               </a>
//               <a
//                 href="#Contact"
//                 className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-gray-900 transition-all duration-300 font-semibold shadow-lg"
//               >
//                 Hire Me
//               </a>
//             </div>
//           </m.div>
//         </m.div>
//       </LazyMotion>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//         <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2 animate-bounce">
//           <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-gray-500 rounded-full animate-pulse" />
//         </div>
//       </div>

//       {/* Floating animation styles */}
//       <style>{`
//         @keyframes float-slow {
//           0% { transform: translate(0,0) rotate(0deg); }
//           50% { transform: translate(var(--translateX), var(--translateY)) rotate(var(--rotate)); }
//           100% { transform: translate(0,0) rotate(0deg); }
//         }
//         .animate-float-slow {
//           animation: float-slow linear infinite alternate;
//           animation-timing-function: ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Hero = () => {
  const roles = [
    "Code.Create.Evolve.",
    "Think.Build.Repeat.",
    "Logic meets creativity.",
    "Turning ideas into code.",
    "Build fast, think smart.",
    "Code with purpose.",
    "Design.Develop.Deliver.",
    "Solving problems with code.",
    "Minimal code, maximum impact.",
    "From idea to interface.",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [boxes] = useState(() => {
    const positions = [
      { top: 5, left: 10 },
      { top: 60, left: 80 },
    ];
    return positions.map((pos) => {
      const translateX = (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 50);
      const translateY = (Math.random() > 0.5 ? 1 : -1) * (80 + Math.random() * 50);
      const rotate = (Math.random() > 0.5 ? 1 : -1) * (25 + Math.random() * 25);
      const duration = 6 + Math.random() * 5;
      const delay = Math.random() * 2;
      return { ...pos, translateX, translateY, rotate, duration, delay };
    });
  });

  // Auto text writer effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roles, currentRoleIndex]);

  const handleMouseMove = (e) => {
    const x = ((e.clientX / window.innerWidth) - 0.5) * 25;
    const y = ((e.clientY / window.innerHeight) - 0.5) * 25;
    setRotate({ x: -y, y: x });
  };
  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  // Background parallax
  useEffect(() => {
    let animationFrame;
    const handleMouseMoveBG = (e) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 40,
          y: (e.clientY / window.innerHeight - 0.5) * 40,
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMoveBG);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveBG);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="Hero"
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden perspective"
    >
      {/* Background floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-float-slow"
            style={{
              top: `${box.top}%`,
              left: `${box.left}%`,
              animationDelay: `${box.delay}s`,
              animationDuration: `${box.duration}s`,
              filter: "drop-shadow(0 0 30px rgba(34,211,238,0.3))",
              "--translateX": `${box.translateX}px`,
              "--translateY": `${box.translateY}px`,
              "--rotate": `${box.rotate}deg`,
            }}
          />
        ))}
      </div>

      {/* Main 3D content */}
      <LazyMotion features={domAnimation}>
        <m.div
          className="relative z-10 text-center px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          <m.div
            animate={{
              rotateX: rotate.x,
              rotateY: rotate.y,
              transition: { type: "spring", stiffness: 60, damping: 15 },
            }}
          >
            <div className="mb-4 sm:mb-6 inline-block p-3 sm:p-4 rounded-xl bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-transparent border border-cyan-500/20 backdrop-blur-sm shadow-md sm:shadow-lg">
              <p className="text-cyan-400 font-mono text-xs sm:text-sm animate-pulse">
                Welcome to my futuristic portfolio
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-xl">
              Hi, I’m Prem
            </h1>
            <h2 className="font-extrabold my-2 sm:my-4 bg-clip-text drop-shadow-xl text-[1rem] sm:text-3xl md:text-4xl text-gray-300 font-mono tracking-widest">
              Full Stack Developer
            </h2>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 font-mono tracking-wide">
              <span className="text-cyan-400">{"<"} </span>
              {displayedText}
              <span className="text-cyan-400"> {" />"}</span>
            </p>

            <div className="mt-6 sm:mt-10 flex justify-center gap-4 sm:gap-6">
              <a
                href="#Work"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold shadow-md sm:shadow-lg"
              >
                View Work
              </a>
              <a
                href="#Contact"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-gray-900 transition-all duration-300 font-semibold shadow-md sm:shadow-lg"
              >
                Hire Me
              </a>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex items-start justify-center p-1.5 sm:p-2 animate-bounce">
          <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-gray-500 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(var(--translateX), var(--translateY)) rotate(var(--rotate)); }
          100% { transform: translate(0,0) rotate(0deg); }
        }
        .animate-float-slow {
          animation: float-slow linear infinite alternate;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;

