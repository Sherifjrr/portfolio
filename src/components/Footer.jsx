import Resume from "../assets/CV.svg";
import githubLogo from "../assets/github-circle-mono.png";
import linkedIn from "../assets/linkedin-mono.svg";
import Twitter from "../assets/twitter-mono.svg";
import mail from "../assets/sms-star.svg";

function Footer() {
  return (
    <footer>
      <h1>Get In Touch</h1>
      <p>
        I&apos;m currently looking for any new opportunities to put my skills to
        good use and develop them even further, my inbox is always open.
      </p>
      <ul className="call-to-action">
        <li>
          <a href="../assets/Mohammed Sherif's Resume.pdf" download>
            My Resume
            <img src={Resume} alt="sherif's-resume" className="web-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sherifjrr"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <img
              src={githubLogo}
              alt="sherif's-github-link"
              className="web-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sherifjrr/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <img src={linkedIn} alt="linkedin-link" className="web-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Sherifjrr"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
            <img src={Twitter} alt="twitter-link" className="web-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:mohammedsherifjr@gmail.com">
            Contact Me
            <img src={mail} alt="mail-me" className="web-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
