import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx"
import BoardPage from './pages/BoardPage.jsx'
import CardPage from './pages/CardPage.jsx'



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<BoardPage/>}/>
            <Route path='/boards/:id/cards' element={<CardPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    
    </>
  )
}


