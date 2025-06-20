import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import React, { useContext } from 'react'
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx"
import BoardPage from './pages/BoardPage.jsx'
import CardPage from './pages/CardPage.jsx'
import ToggleButton from './ToggleButton.jsx'
import MainContainer from './MainContainer.jsx'
import { ThemeProvider} from './ThemeContext.jsx'
export default function App() {
  return (
        <BrowserRouter>
          <Header/>
          <ThemeProvider>
            <MainContainer>
              <ToggleButton/>
              <Routes>
                  <Route path='/' element={<BoardPage/>}/>
                  <Route path={`/boards/:boardId/cards`} element={<CardPage/>}/>
              </Routes>
            </MainContainer>
          </ThemeProvider>
          <Footer/>
        </BrowserRouter>
  )
}


