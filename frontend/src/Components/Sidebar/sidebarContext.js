import React, { useState, createContext, useContext } from "react"

// ProSidebar
import { ProSidebarProvider } from "react-pro-sidebar"
import SidebarComponent from "./Sidebar"

const SidebarContext = createContext()

export const SidebarContextProvider = ({ children }) => {
    const [sidebarRTL, setSidebarRTL] = useState(false)
    const [sidebarBackgroundColor, setSidebarBackgroundColor] =
        useState(undefined)
    const [sidebarImage, setSidebarImage] = useState(undefined)

    return (
        <ProSidebarProvider>
            <SidebarContext.Provider
                value={{
                    sidebarBackgroundColor,
                    setSidebarBackgroundColor,

                    sidebarImage,
                    setSidebarImage,

                    sidebarRTL,
                    setSidebarRTL,
                }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: sidebarRTL ? "row-reverse" : "row",
                    }}>
                    <SidebarComponent />
                    {children}
                </div>
            </SidebarContext.Provider>
        </ProSidebarProvider>
    )
}

export const useSidebarContext = () => useContext(SidebarContext)