import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function ToggleButton(){
  const {toggleTheme, darkMode} = useContext(ThemeContext)
  const handleClick = () => {
    toggleTheme()
  }
  return(
    <>
      <button id="toggle" onClick={handleClick}>{darkMode ? "Light Mode":"Dark Mode"}</button>
    </>
  )
}