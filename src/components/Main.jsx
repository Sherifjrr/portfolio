import Project from "./projectData";
import data from "./data";

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
          {data ? (
            data.map((data) => <Project key={data.id} props={data} />)
          ) : (
            <p>Data Error</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Main;
