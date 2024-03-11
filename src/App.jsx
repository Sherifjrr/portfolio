import { useContext } from "react";
import { ThemeContext } from "./components/themeProvider";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  if (theme === "dark") {
    document.documentElement.style.setProperty("--mainColor", "#B8BABA");
    document.documentElement.style.setProperty("--bgColor", "#253b52");
  } else if (theme === "magenta") {
    document.documentElement.style.setProperty("--bgColor", "#510C42");
    document.documentElement.style.setProperty("--mainColor", "#F5F5DC");
  } else if (theme === "blue") {
    document.documentElement.style.setProperty("--bgColor", "#0d27ba");
    document.documentElement.style.setProperty("--mainColor", "#7ABE8D");
  } else {
    document.documentElement.style.setProperty("--bgColor", "#E9E9DF");
    document.documentElement.style.setProperty("--mainColor", "#CC3331");
  }

  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
