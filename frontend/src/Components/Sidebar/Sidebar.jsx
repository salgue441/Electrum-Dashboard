import { useState } from "react"
import { Link } from "react-router-dom"

// React Pro ProSidebarProvider Components
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"

// MUI Components
import { Box, Typography, useTheme, IconButton } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"

// Data
import { MainOptions } from "../../Assets/Data/Sidebar"

// SidebarItem
import SidebarItem from "../SidebarItems/SidebarItem"

// Theme
import { tokens } from "../../theme"

// Logo Image
import logo from "../../Assets/Images/logoBlanco.svg"

/**
 * @brief
 * Renders the ProSidebarProvider
 * @return {JSX.Element} - The component to be rendered
 */
const CustomProSidebarProvider = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { collapseSidebar } = useProSidebar()
  const [showElements, setshowElements] = useState(true)

  return (
    <Box>
      <Sidebar
        style={{ height: "100vh", width: "100%" }}
        sx={{
          "&:hover": {
            backgroundColor: colors.primary[400],
          },
          "@media (max-width: 600px)": {
            height: "100%",
          },
        }}
        backgroundColor={colors.primary[400]}
        rtl={false}
      >
        {/* Header */}
        <Menu iconShape="square">
          <MenuItem
            onClick={() => {
              collapseSidebar()
              setshowElements(!showElements)
            }}
            icon={
              collapseSidebar ? (
                <MenuOutlined
                  style={{ color: colors.primary[100], fontSize: "1rem" }}
                />
              ) : null
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.primary[900],
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              ml={"15px"}
              sx={{ width: "100%" }}
            >
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                sx={{
                  display: showElements ? "block" : "none",
                }}
              >
                Electrum
              </Typography>
            </Box>
          </MenuItem>

          {/* Logo & Title */}
          <Box
            mb={"25px"}
            sx={{
              display: showElements ? "block" : "none",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                alt="Electrum Logo"
                width={"75%"}
                height={"100%"}
                style={{ cursor: "pointer" }}
                src={logo}
              />
            </Box>

            {/* Title & subtitle */}
            <Box textAlign={"center"}>
              <Typography
                variant={"h2"}
                color={colors.grey[100]}
                fontWeight={"bold"}
                sx={{ m: "10px 0 0 0" }}
              >
                Pits & Crew
              </Typography>
              <Typography
                variant={"h5"}
                color={colors.greenAccent[500]}
                xs={{
                  mt: "50px",
                }}
              >
                Telemetría
              </Typography>
            </Box>
          </Box>

          {/* Navigation items */}
          <Box paddingLeft={collapseSidebar ? "0" : "15px"}>
            <Typography
              variant={"h6"}
              color={colors.grey[100]}
              sx={{
                m: "50px 0 5px 20px",
                display: showElements ? "block" : "none",
              }}
            >
              Navegación
            </Typography>

            {/* Main Options  (Navigation) */}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default CustomProSidebarProvider
