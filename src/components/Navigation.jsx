import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: '01', label: 'Home', name: 'hero' },
    { id: '02', label: 'About', name: 'about' },
    { id: '03', label: 'Expertise', name: 'expertise' },
    { id: '04', label: 'Work', name: 'work' },
    { id: '05', label: 'Contact', name: 'contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sectionElements = navItems
      .map((item) => document.getElementById(item.name))
      .filter(Boolean);

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-gray-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Open to Work badge */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#hero" className="flex items-center gap-2 group">
              <h1 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent 
                   bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                   drop-shadow-sm group-hover:scale-105 transition-transform duration-200">
                Prem.<span className="text-cyan-500 dark:text-cyan-400 animate-pulse">_</span>
              </h1>
            </a>
            {/* Compact availability pill — desktop only */}
            {/* <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold
              bg-emerald-50 dark:bg-emerald-500/10
              border border-emerald-200 dark:border-emerald-500/30
              text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Open to Work
            </span> */}
          </div>

          {/* Desktop Nav Items & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.id}
                  href={`#${item.name}`}
                  className={`relative py-1 font-mono text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-400 font-bold'
                      : 'text-slate-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400'
                  }`}
                >
                  <span
                    className={`text-xs mr-1.5 font-semibold transition-colors ${
                      isActive
                        ? 'text-cyan-600 dark:text-cyan-400'
                        : 'text-cyan-600/70 dark:text-cyan-400/70'
                    }`}
                  >
                    {item.id}.
                  </span>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-200 transition-all duration-200 border border-slate-200 dark:border-gray-700 shadow-sm"
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun size={18} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon size={18} className="text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 transition-all duration-200 border border-slate-200 dark:border-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-slate-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.id}
                  href={`#${item.name}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl font-mono text-sm transition-colors duration-200 ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border-l-4 border-cyan-500'
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-cyan-400 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span
                    className={`text-xs mr-2 font-semibold ${
                      isActive
                        ? 'text-cyan-600 dark:text-cyan-400'
                        : 'text-cyan-600/70 dark:text-cyan-400/70'
                    }`}
                  >
                    {item.id}.
                  </span>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;




