import rickMorty from "../assets/rick-morty-project.jpg";
import coronaArabia from "../assets/corona-arabia-project.jpg";
import arrow from "../assets/arrow-outward.svg";
function Main() {
  return (
    <main>
      <h1 className="title">
        Hello, <br /> I&apos;m Mohammed Sherif <br /> Jr.
      </h1>
      <h2 className="title">Self-taught Frontend Developer</h2>
      <section>
        <h1>About Me</h1>
        <p>
          I love crafting and creating things for the web using JavaScript
          generally and specifically React. My goal is to provide the most
          visually fascinating and user-oriented web applications.
        </p>
        <p>
          I graduated with an aquatic science degree in 2020, but within the
          pandemic, i figured out i wanted to dive into the digital world, and
          that&apos;s when i found my love and passion for coding
        </p>
      </section>
      <section className="portfolio">
        <h1>Portfolio</h1>
        <div className="wrapper">
          <div className="project">
            <img src={rickMorty} alt="" />
            <h2>Rick and Morty Characters</h2>
            <p>Search engine for the Rick and Morty cartoon show characters</p>
            <p>Tech stack: React Js – Tailwind CSS</p>

            <ul className="wrapper-links">
              <li>
                <a
                  href="https://rickandmortycharctersv2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                  <img src={arrow} alt="arrow" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sherifjrr/rick-and-morty-characters-V2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                  <img src={arrow} alt="arrow" />
                </a>
              </li>
            </ul>
          </div>
          <div className="project">
            <img src={coronaArabia} alt="" />
            <h2> Corona Arabia</h2>
            <p>Corona numbers in Arabic countries with dynamic UI</p>
            <p>Tech Stack: JavaScript ES6+ - CSS(Sass) – HTML</p>
            <ul className="wrapper-links">
              <li>
                <a
                  href="https://coronarabia.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                  <img src={arrow} alt="arrow" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sherifjrr/corona-arabia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                  <img src={arrow} alt="arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
