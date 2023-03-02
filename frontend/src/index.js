import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

// React Pro Sidebar
import { ProSidebarProvider } from "react-pro-sidebar"

// App Component
import App from "./App"

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <Router>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </Router>
  </>
)
