import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <img src={profile} alt="Ahmed Siala" />

        <div className="about-content">
          <h1>About Me</h1>

          <p>
            I'm a final-year <strong>Computer Science student</strong> with a
            strong passion for <strong>web and software development</strong>.
            I enjoy building real-world applications, learning new technologies,
            and continuously improving my skills.
          </p>

          <div className="about-stats">
            <div>
              <h3>🎓</h3>
              <p>CS Student</p>
            </div>
            <div>
              <h3>💻</h3>
              <p>Web Developer</p>
            </div>
            <div>
              <h3>🚀</h3>
              <p>Fast Learner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
