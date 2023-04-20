import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"

const StatBox = ({ title, subtitle, icon, progress, left }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      width="100%"
      m="0 30px"
      borderRadius="20px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
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
      <Box display="flex" alignItems="center">
        {icon}
        <Box
          display="flex"
          flexDirection="column"
          ml={2}
          sx={{
            "@media (max-width: 900px)": {
              alignItems: "center",
              textAlign: "center",
            },
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
      >
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
  )
}

export default StatBox
