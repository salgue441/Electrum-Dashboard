import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CalendarIcon from "@mui/icons-material/CalendarTodayOutlined"
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined"
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined"
import BatteryStdOutlinedIcon from "@mui/icons-material/BatteryStdOutlined"

export const mainOptions = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />
  },
  {
    title: "Race Calendar",
    to: "/calendar",
    icon: <CalendarIcon />
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsOutlinedIcon />
  }
]

/**
 * @brief
 * Sidebar data for the graph section
 */
export const graphData = [
  {
    title: "Temperature",
    to: "/temperature",
    icon: <ThermostatOutlinedIcon />
  },
  {
    title: "Speed",
    to: "/speed",
    icon: <SpeedOutlinedIcon />
  },
  {
    title: "Battery",
    to: "/battery",
    icon: <BatteryStdOutlinedIcon />
  },
]