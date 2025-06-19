import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter} from 'react-router'
import BoardPage from '../src/pages/BoardPage.jsx'
import CardPage from '../src/pages/CardPage.jsx'
import './index.css'
import App from './App.jsx'
// const routes = createBrowserRouter([
//   {
//     path: '/board',
//     element: <BoardPage/>
//   }
// ])

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
