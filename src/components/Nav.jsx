import svg from "../assets/color-changer.svg";

function Nav() {
  return (
    <nav>
      <img src={svg} alt="color-changer" className="color-changer" />
      <a href="mailto:mohammedsherifjr@gmail.com">
        <button type="button">Contact Me</button>
      </a>
    </nav>
  );
}

export default Nav;
