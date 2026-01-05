import Navigation from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';
import Sections from './components/Sections';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navigation />
        <Sections />
      </div>
    </ThemeProvider>
  ); 
}

export default App;
