import '../styles/Header.css';
function Header() {
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
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
