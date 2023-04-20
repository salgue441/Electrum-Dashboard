import { Typography, Box, useTheme } from "@mui/material"

// theme
import { tokens } from "../../theme"

/**
 * @brief
 * Header component for the dashboard
 * @param {Object} props
 * @return {JSX.Element} Header
 */
const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={colors.grey[100]}
        fontWeight={"bold"}
        sx={{
          m: "0 0 5px 0",
          "@media (max-width: 600px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        color={colors.greenAccent[500]}
        sx={{
          m: "0 0 5px 0",
          "@media (max-width: 600px)": {
            fontSize: "1rem",
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
