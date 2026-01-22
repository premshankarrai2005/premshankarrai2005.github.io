import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: '01', label: 'Home', name: 'hero' },
    { id: '04', label: 'About', name: 'about' },
    { id: '02', label: 'Expertise', name: 'expertise' },
    { id: '03', label: 'Work', name: 'work' },
    { id: '05', label: 'Contact', name: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3 flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent 
                 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                 drop-shadow-xl animate-pulse">
              Prem.<span className="text-white animate-ping">_</span>
            </h1>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.name}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-mono"
              >
                <span className="text-xs text-gray-500 mr-2"></span>
                {item.label}
              </a>
            ))}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.name}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-mono"
              >
                <span className="text-xs text-gray-500 mr-2"></span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;




