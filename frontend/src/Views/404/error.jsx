// Theme
import { tokens } from "../../theme"
import { useTheme, Box, Typography } from "@mui/material"

// Image
import errorImage from "../../Assets/Images/404.jpg"

/**
 * @brief
 * Renders the 404 page
 * @returns {JSX.Element} 404 page
 */
const NotFound = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor={colors.primary[400]}
    >
      <Typography variant="h1" color={colors.grey[300]}>
        Error: 404
      </Typography>
      <Typography variant="h4" color={colors.grey[300]}>
        Page not found
      </Typography>
      <img src={errorImage} alt="404" width="500px" />
    </Box>
  )
}

export default NotFound
