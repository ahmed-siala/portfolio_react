import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-card">
        {/* INFO */}
        <div className="contact-info">
          <h2>Ahmed Siala</h2>
          <p className="subtitle">Computer Science Student</p>

          <p>
            📧 <strong>Email:</strong><br />
            <a href="mailto:ahmedsiala426@gmail.com">
              ahmedsiala426@gmail.com
            </a>
          </p>

          <p>
            📞 <strong>Phone (Tunisia):</strong><br />
            +216 44 900 016
          </p>

          <p>
            🔗 <strong>LinkedIn:</strong><br />
            <a
              href="https://www.linkedin.com/in/ahmed-siala-83622738a/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ahmed-siala
            </a>
          </p>

          <div className="languages">
            <span>🇬🇧 English</span>
            <span>🇫🇷 Français</span>
            <span>🇹🇳 العربية</span>
          </div>
        </div>

        {/* FORM */}
        <form className="contact-form">
          <h3>Send me a message</h3>

          <input type="text" placeholder="Your Name / Votre nom / اسمك" />
          <input type="email" placeholder="Your Email / Email / بريدك" />
          <textarea
            placeholder="Your Message / Message / رسالتك"
            rows="5"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
