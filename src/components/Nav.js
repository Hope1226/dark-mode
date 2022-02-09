import React, { useState, useEffect } from "react";

const Nav = () => {
  const [darkmodeOn, setDarkmode] = useState(false);
  
  const switchModes = () => {
    if(darkmodeOn){
      document.documentElement.style.setProperty('--light-bg', '#365b6d');
      document.documentElement.style.setProperty('--light-color', '#f2f1ec');
    } else {
      document.documentElement.style.setProperty('--light-bg', '#f2f1ec');
      document.documentElement.style.setProperty('--light-color', '#365b6d');
    }
  };

  const darkModeToddler = () => setDarkmode(!darkmodeOn);

  useEffect(() => {
    switchModes()
  }, [darkmodeOn])


  return (
    <nav>
      <h1 className="hero-text">
        Dark Mode
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <button onClick={darkModeToddler} className={`mode-changer ${darkmodeOn ? "dark-mode-on" : " "}`} type="button">
        <span className="inner-circle"></span>
      </button>
    </nav>
  );
};

export default Nav;