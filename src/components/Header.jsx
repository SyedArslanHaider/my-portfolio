import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import '../styles/Header.css';

function Header({ darkMode, setDarkMode, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">SAH</div>
          <nav className="nav">
            <a onClick={() => handleNavClick('home')}>Home</a>
            <a onClick={() => handleNavClick('about')}>About</a>
            <a onClick={() => handleNavClick('skills')}>Skills</a>
            <a onClick={() => handleNavClick('projects')}>Projects</a>
            <a onClick={() => handleNavClick('contact')}>Contact</a>
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
        <a onClick={() => handleNavClick('home')}>Home</a>
        <a onClick={() => handleNavClick('about')}>About</a>
        <a onClick={() => handleNavClick('skills')}>Skills</a>
        <a onClick={() => handleNavClick('projects')}>Projects</a>
        <a onClick={() => handleNavClick('contact')}>Contact</a>
      </nav>
    </>
  );
}

export default Header;