import "./Home.css";
import profile from "../assets/profile.jpg"; // change name if needed
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm <br /> <span>Ahmed Siala</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p>
            I build modern web and software applications using
            React, Java, and modern technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn outline">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Ahmed Siala" />
        </div>
      </section>

      {/* ABOUT */}
<section className="about">
  <div className="about-card">
    <h2>About Me</h2>
    <p>
      I'm a <strong>final-year Computer Science student</strong> with a strong
      passion for building modern web and software applications.
    </p>
    <p>
      I focus on <strong>real-world projects</strong>, clean code, and
      continuously improving my technical skills through practice and learning.
    </p>
  </div>
</section>

{/* SKILLS */}
<section className="skills">
  <h2>Skills</h2>

  <div className="skills-grid">
    <div className="skill-card">
      <i className="devicon-html5-plain colored"></i>
      <span>HTML</span>
    </div>

    <div className="skill-card">
      <i className="devicon-css3-plain colored"></i>
      <span>CSS</span>
    </div>

    <div className="skill-card">
      <i className="devicon-javascript-plain colored"></i>
      <span>JavaScript</span>
    </div>

    <div className="skill-card">
      <i className="devicon-react-original colored"></i>
      <span>React</span>
    </div>

    <div className="skill-card">
      <i className="devicon-java-plain colored"></i>
      <span>Java</span>
    </div>

    <div className="skill-card">
      <i className="devicon-php-plain colored"></i>
      <span>PHP</span>
    </div>

    <div className="skill-card">
      <i className="devicon-dot-net-plain colored"></i>
      <span>.NET</span>
    </div>

    <div className="skill-card">
      <i className="devicon-git-plain colored"></i>
      <span>Git</span>
    </div>

    <div className="skill-card">
      <i className="devicon-github-original"></i>
      <span>GitHub</span>
    </div>
  </div>
</section>


      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML & CSS</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">PHP</div>
          <div className="skill-card">.NET</div>
          <div className="skill-card">Git & GitHub</div>
          <div className="skill-card">REST / GraphQL</div>
          <div className="skill-card">SQL</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Manage Payments App</h3>
            <p>Payment management system with CRUD operations</p>
            <span>React • JSON Server</span>
          </div>

          <div className="project-card">
            <h3>Gym AI Application</h3>
            <p>AI-based gym assistant for exercises & recommendations</p>
            <span>Python • Machine Learning</span>
          </div>

          <div className="project-card">
            <h3>Flight Booking System</h3>
            <p>Flight reservation web application</p>
            <span>Java • REST API</span>
          </div>
        </div>

        <Link to="/projects" className="btn primary center">
          View All Projects
        </Link>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <h2>Interested in working together?</h2>
        <p>Let’s talk.</p>

        <div className="cta-buttons">
          <a href="mailto:ahmedsiala426@gmail.com" className="btn primary">
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-siala-83622738a/"
            target="_blank"
            className="btn outline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
