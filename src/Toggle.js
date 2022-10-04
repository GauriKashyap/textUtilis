// tutorial : https://www.makeuseof.com/react-dark-mode-without-context/ 
import React, {useState,useEffect} from "react";
import DarkModeToggle from "react-dark-mode-toggle"; //npm i react-dark-mode-toggle
export default function Toggle(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, settheme] = useState("light")
  const getUserSetPreference = () => {
    return localStorage.getItem("theme");
};
  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    if (userSetPreference) {
        settheme(userSetPreference)
        setIsDarkMode(userSetPreference==="dark"?true:false)
    }
    document.body.dataset.theme = theme
}, [theme]);

const storeUserSetPreference = (pref) => {
    localStorage.setItem("theme", pref);
};
  const handleToggle=()=>{
    setIsDarkMode(isDarkMode?false:true);
    const newTheme = (theme==="light")  ? "dark" : "light"
    settheme(newTheme)
    storeUserSetPreference(newTheme)
    document.body.dataset.theme = theme
  };
  return (
    <DarkModeToggle
      onChange={handleToggle}
      checked={isDarkMode}
      size={80}
    />
  );
};