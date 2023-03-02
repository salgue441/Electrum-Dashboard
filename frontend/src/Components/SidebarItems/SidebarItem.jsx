import { Link } from "react-router-dom"

// MUI
import { useTheme, Typography } from "@mui/material"

// React Pro Sidebar Components
import { MenuItem } from "react-pro-sidebar"

// Theme
import { tokens } from "../../theme"

/**
 * @brief
 * Renders the sidebar item
 * @param {Object} props - The props passed to the component
 * @return {JSX.Element} - The component to be rendered
 */
const SidebarItem = ({ props }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      icon={<props.icon />}
      onClick={() => props.setSelected(props.name)}
      active={props.name === props.selected}
      style={{
        color: colors.grey[100],
      }}
    >
      <Typography>{props.name}</Typography>
      <Link to={props.link} />
    </MenuItem>
  )
}

export default SidebarItem
