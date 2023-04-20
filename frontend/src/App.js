import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

// Components
import { SidebarContextProvider } from "./Components/Sidebar/sidebarContext"
import Topbar from "./Components/Topbar/Topbar"

// Views
import Dashboard from "./Views/Dashboard/Dashboard"
import Calendar from "./Views/Calendar/Calendar"
import NotFound from "./Views/404/error"

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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <SidebarContextProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
