/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "./themeProvider";
import svg from "../assets/color-changer.svg";

function Nav() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li onClick={toggleTheme}>
          <img src={svg} alt="color-changer" className="color-changer" />
        </li>
        <li>
          <a href="mailto:mohammedsherifjr@gmail.com">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
