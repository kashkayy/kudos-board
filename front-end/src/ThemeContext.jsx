import React, { createContext, useState } from "react";
const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }
  const values = {darkMode, toggleTheme}
  return(
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
export {ThemeContext, ThemeProvider}