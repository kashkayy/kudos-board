import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
export default function MainContainer({children}){
  const {darkMode} = useContext(ThemeContext)
  return(
    <div className= {darkMode ? `Page Page-dark` : `Page Page-light`}>{children}</div>
  )
}