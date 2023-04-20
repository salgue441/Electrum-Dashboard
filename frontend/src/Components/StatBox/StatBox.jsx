// mui components
import { Box, Typography, useTheme } from "@mui/material"

// theme
import { tokens } from "../../theme"

/**
 * @brief
 * Stats component for the dashboard
 * @param {Object} props
 * @returns {JSX.Element} Stats component
 */
const StatBox = ({ title, subtitle, icon, progress, left }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width="100%" m="0 30px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        // responsive
        sx={{
          "@media (max-width: 1500px)": {
            flexDirection: "column",
            alignItems: "center",
          },

          "@media (max-width: 1300px)": {
            flexDirection: "column",
            alignItems: "center",
          },

          "@media (max-width: 900px)": {
            flexDirection: "column",
            alignItems: "center",
          },

          "@media screen and (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            "@media (max-width: 1500px)": {
              display: "none",
            },

            "@media (max-width: 900px)": {
              display: "none",
            },

            "@media screen and (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: colors.grey[100],
              "@media (max-width: 1500px)": {
                fontSize: "1.2rem",
              },

              "@media (max-width: 900px)": {
                fontSize: "2rem",
              },

              "@media (max-width: 600px)": {
                fontSize: "1rem",
                m: "0 10px",
              },
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              "@media (max-width: 900px)": {
                fontSize: "1.5rem",
              },

              "@media (max-width: 600px)": {
                fontSize: "1rem",
                m: "0 10px",
              },
            }}
          >
            {progress}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
                m: "0 10px",
              },
            }}
          >
            {left}
          </Typography>
        </Box>
      </Box>
      <Box display="below" justifyContent="space-between" mt="0px">
        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[500],
            "@media (max-width: 600px)": {
              fontSize: "1rem",
              m: "0 10px",
            },
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default StatBox
