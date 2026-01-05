


import { useState, useEffect, useMemo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stars = useMemo(() => {
        return Array.from({ length: 80 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            depth: Math.random() * 0.8 + 0.2,
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
        }));
    }, []);

    const socialLinks = [
        { icon: Github, href: 'https://github.com/premshankarrai2005', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/prem-shankar-rai-11910728a/', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Mail, href: 'mailto:premshankarrai2005@gmail.com', label: 'Email' },
    ];

    return (
        <LazyMotion features={domAnimation}>
            <footer className="relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-950 to-slate-900
                h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh]">

                {/* Stars */}
                {stars.map((star) => (
                    <m.div
                        key={star.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{
                            x: mousePosition.x * star.depth * 60,
                            y: mousePosition.y * star.depth * 60,
                        }}
                        transition={{ type: 'spring', stiffness: 40, damping: 15 }}
                    >
                        <m.div
                            className="w-full h-full rounded-full bg-white"
                            animate={{ opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5] }}
                            transition={{ duration: star.duration, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,${star.opacity})` }}
                        />
                    </m.div>
                ))}

                {/* Orbiting circles */}
                <m.div
                    className="absolute top-1/3 left-1/4 opacity-30"
                    style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                >
                    <m.div
                        className="w-48 h-48 border border-cyan-400/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <m.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </m.div>

                <m.div
                    className="absolute bottom-1/3 right-1/5 opacity-25"
                    style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                >
                    <m.div
                        className="w-64 h-64 border border-blue-400/30 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    />
                    <m.div
                        className="absolute bottom-0 right-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-blue-400/50"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </m.div>

                {/* Gradient orbs */}
                <m.div
                    className="absolute top-1/4 left-1/3 opacity-20"
                    style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}
                    transition={{ type: 'spring', stiffness: 60, damping: 20 }}
                >
                    <div className="w-72 h-72 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-full blur-3xl" />
                </m.div>

                <m.div
                    className="absolute bottom-1/4 right-1/4 opacity-15"
                    style={{ transform: `translate(${mousePosition.x * -12}px, ${mousePosition.y * -12}px)` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                >
                    <div className="w-80 h-80 bg-gradient-to-tl from-blue-500/30 to-cyan-600/30 rounded-full blur-3xl" />
                </m.div>

                {/* Central glowing ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
                    <m.div
                        className="w-96 h-96 border border-cyan-400/20 rounded-full"
                        animate={{
                            boxShadow: [
                                '0 0 40px rgba(34, 211, 238, 0.2)',
                                '0 0 80px rgba(34, 211, 238, 0.4)',
                                '0 0 40px rgba(34, 211, 238, 0.2)',
                            ],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </div>

                {/* Mesh background */}
                <m.div
                    className="absolute inset-0 opacity-30"
                    animate={{ opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
                </m.div>

                {/* Content */}
                <div className="relative z-20 h-full flex items-center justify-center">
                    <div className="text-center px-3 sm:px-6 max-w-4xl">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl my-1 sm:my-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-xl">
                            PREM RAI
                        </h1>

                        <m.p
                            className="text-base sm:text-xl md:text-2xl text-gray-300 mb-2 sm:mb-5 font-light tracking-wide"
                            style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Frontend Engineer | Building Scalable & User-Centric Web Experiences
                        </m.p>

                        <m.p className="text-gray-400 mb-2 sm:mb-4 uppercase text-sm tracking-widest">
                            Connect with me
                        </m.p>

                        <m.div className="flex items-center justify-center gap-3 sm:gap-6 mb-3 sm:mb-6">
                            {socialLinks.map((social, index) => (
                                <m.a
                                    key={social.label}
                                    href={social.href}
                                    className="group relative p-3 rounded-full border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-300/60 transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    aria-label={social.label}
                                >
                                    <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/20 blur-lg transition-all duration-300" />
                                    <social.icon
                                        className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors relative z-10"
                                        strokeWidth={1.5}
                                    />
                                </m.a>
                            ))}
                        </m.div>

                        <m.div
                            className="flex items-center justify-center gap-2 sm:gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <m.div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                            <m.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                            />
                            <m.div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                        </m.div>

                        <m.p
                            className="mt-2 sm:mt-6 text-xs sm:text-sm text-gray-400 font-light tracking-wide"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            © 2026 Prem Shankar Rai. All rights reserved.
                        </m.p>
                    </div>
                </div>

                {/* Edge Glows */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

                {/* Corner Accents */}
                <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-cyan-400/20 rounded-tr-lg opacity-40" />
                <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-blue-400/20 rounded-bl-lg opacity-40" />
            </footer>
        </LazyMotion>
    );
}

export default Footer;


