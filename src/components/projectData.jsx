/* eslint-disable react/prop-types */
import arrow from "../assets/arrow-outward.svg";

function Project(props) {
  const arrayData = props.props;
  return (
    <div className="project">
      <img src={arrayData.projectImg} alt={arrayData.projectAlt} />
      <h2>{arrayData.projectTitle}</h2>
      <p>{arrayData.projectDescription}</p>
      <p>{arrayData.techStack}</p>

      <ul className="wrapper-links">
        <li>
          <a href={arrayData.linkLive} target="_blank" rel="noreferrer">
            Live Demo
            <img src={arrow} alt="arrow" />
          </a>
        </li>
        <li>
          <a href={arrayData.linkGithub} target="_blank" rel="noreferrer">
            Github Repo
            <img src={arrow} alt="arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Project;
