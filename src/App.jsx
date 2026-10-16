import Navigation from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import Sections from './components/Sections';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen transition-colors duration-300">
          <Navigation />
          <Sections />
          <ScrollToTop />
        </div>
      </ToastProvider>
    </ThemeProvider>
  ); 
}

export default App;
