import { useContext, useState } from "react"

// Mui components
import { Box, IconButton, InputBase, useTheme } from "@mui/material"

// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import SearchIcon from "@mui/icons-material/Search"

// Theme
import { ColorModeContext, tokens } from "../../theme"
import logoImage from "../../Assets/Images/logo.png"

/**
 * @brief
 * Render the topbar component of the app
 * @returns {JSX.Element} - Topbar component
 */
const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const [search, setSearch] = useState("")
  const SearchToggle = () => {
    setSearch(!search)
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon onClick={SearchToggle} />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          {/* Rounded small image, the same size as the icons */}
          <img
            src={logoImage}
            alt="logo"
            style={{
              borderRadius: "50%",
              width: "30px",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
