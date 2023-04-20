import { Link } from "react-router-dom"

// Mui
import { MenuItem, Typography, useTheme, Box } from "@mui/material"

// Theme
import { tokens } from "../../theme"

export const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      LinkComponent={Link}
      to={to}
    >
      <Box display="flex" alignItems="center">
        <Box mr={2}>{icon}</Box>
        <Typography>{title}</Typography>
      </Box>
    </MenuItem>
  )
}
