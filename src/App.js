import React from "react";
import Landing from "./pages/Landing";
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <Landing darkMode={darkMode} toggleMode={toggleMode} />
        }/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}