import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import '../styles/Header.css';

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">SAH</div>
          <nav className="nav">
            <a>Home</a>
            <a>About</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Contact</a>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a>Home</a>
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact</a>
      </nav>
    </>
  );
}

export default Header;