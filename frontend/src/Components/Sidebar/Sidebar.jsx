import { useState } from "react"
import { Link } from "react-router-dom"

// React pro sidebar
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar"
import { useProSidebar } from "react-pro-sidebar"

// SidebarContext
import { useSidebarContext } from "./sidebarContext"

// Theme & MUI
import { tokens } from "../../theme"
import { useTheme, Box, Typography, IconButton } from "@mui/material"

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined"
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined"
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined"
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined"
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined"
import BatteryStdOutlinedIcon from "@mui/icons-material/BatteryStdOutlined"

// Data
import { mainOptions, graphData } from "../../Assets/Data/Sidebar"
import logoImage from "../../Assets/Images/logo.png"

// Items
import { Item } from "../SidebarItems/SidebarItem"

const SidebarComponent = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [selected, setSelected] = useState("Dashboard")
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext()
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar()

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              <IconButton
                className="menu-icon"
                onClick={
                  broken ? () => toggleSidebar() : () => collapseSidebar()
                }
              >
                {collapsed ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
              </IconButton>
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ELECTRUM
                </Typography>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "& .avater-image": {
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                <img
                  className="avater-image"
                  alt="profile user"
                  width="100px"
                  height="100px"
                  src={logoImage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Pits & Crew
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? "0px" : "10%"}>
            {/* Dashboard section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 10px" }}
              textAlign={collapsed ? "center" : "left"}
            >
              Main
            </Typography>

            {mainOptions.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.to}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
                collapsed={collapsed}
              />
            ))}

            {/* Graph section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 10px" }}
              textAlign={collapsed ? "center" : "left"}
            >
              Graphs
            </Typography>
            {graphData.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                to={item.to}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
                collapsed={collapsed}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarComponent
