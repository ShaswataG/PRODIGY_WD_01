import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="app">
      <Navbar mode={darkMode} toggleTheme={toggleMode} />
      <Main mode={darkMode}/>
      <Footer mode={darkMode}/>
    </div>
  )
}