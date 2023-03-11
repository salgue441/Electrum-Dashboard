import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Components
import CustomSidebar from "./Components/Sidebar/Sidebar"

// Themes
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ColorModeContext, useMode } from "./theme"

// Styles
import "./Styles/App.css"

/**
 * @brief
 * Main function of the app. Renders all the elements of the app
 * @returns {object} JSX - JSX of the app
 */
const App = () => {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(false)
  const toggleSidebar = () => setIsSidebar(!isSidebar)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Layouts */}
        <div className="app">
          <CustomSidebar isSidebar={isSidebar} toggleSidebar={toggleSidebar} />
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
