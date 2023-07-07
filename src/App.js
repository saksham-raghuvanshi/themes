import { useEffect, useState } from "react";
import "./App.css";
import logo from "./asset/logo.png";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="todo Frontendgyaan logo" />
            <span>Frontend Gyaan</span>
          </div>
          <div className="themeSelector">
            <span
              onClick={() => setTheme("light")}
              className={theme === "light" ? "light activeTheme" : "light"}
            ></span>
            <span
              onClick={() => setTheme("medium")}
              className={theme === "medium" ? "medium activeTheme" : "medium"}
            ></span>
            <span
              onClick={() => setTheme("dark")}
              className={theme === "dark" ? "dark activeTheme" : "dark"}
            ></span>
            <span
              onClick={() => setTheme("gOne")}
              className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
            ></span>
            <span
              onClick={() => setTheme("gTwo")}
              className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
            ></span>
            <span
              onClick={() => setTheme("gThree")}
              className={
                theme === "gradientThree" ? "gThree activeTheme" : "gThree"
              }
            ></span>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
