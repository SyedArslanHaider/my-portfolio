import '../styles/Hero.css';
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Syed Arslan</h1>
        <p className="subtitle">Junior Full-Stack Web Developer</p>
        <p>I build exceptional digital experiences with modern technologies. Passionate about creating clean, efficient, and user-friendly applications.</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;