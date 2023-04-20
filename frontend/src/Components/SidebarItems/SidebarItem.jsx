import { Link } from "react-router-dom"

// Mui
import { MenuItem, Typography, useTheme, Box } from "@mui/material"

// Theme
import { tokens } from "../../theme"

/**
 * @brief
 * Renders a sidebar item
 * @param {*} title - Title of the item
 * @param {*} to - Path to the item
 * @param {*} icon - Icon of the item
 * @param {*} selected - Selected item
 * @param {*} setSelected - Function to set the selected item
 * @param {*} collapsed - Boolean to know if the sidebar is collapsed
 * @returns
 */
export const Item = ({ title, to, icon, selected, setSelected, collapsed }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      component={Link}
      to={to}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={collapsed ? "center" : "flex-start"}
        width="100%"
      >
        <Box mr={!collapsed ? 2 : 0}>{icon}</Box>
        {!collapsed && <Typography>{title}</Typography>}
      </Box>
    </MenuItem>
  )
}
