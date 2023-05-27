// mui components
import { Box, Typography, useTheme } from "@mui/material"

// Mui icons
import TemperatureOutliend from "@mui/icons-material/ThermostatOutlined"
import SpeedOutlined from "@mui/icons-material/SpeedOutlined"
import DatasetOutlined from "@mui/icons-material/DatasetOutlined"
import { Battery0BarOutlined } from "@mui/icons-material"

// Components
import Header from "../../Components/Header/Header"
import StatBox from "../../Components/StatBox/StatBox"
import Graph from "../../Components/Graph/graph"

// Theme
import { tokens } from "../../theme"

/**
 * @brief
 * Render the dashboard component of the app
 * @returns {JSX.Element} - Dashboard component
 */
const Dashboard = ({ ampsHour, amps, voltage, velocity, distance }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Header title="Electrum Racing Qro" subtitle="" />
      </Box>

      {/* Row #1 */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="1.4rem"
        sx={{
          "@media screen and (max-width: 768px)": {
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "140px",
          },
        }}
      >
        {/* First element */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StatBox
            title="Data Acquisition"
            subtitle="Status"
            progress="Online"
            left="Code: 200"
            icon={
              <DatasetOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>

        {/* Second element */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Battery Array"
            subtitle="4 cells"
            progress="Usage: 50%"
            left="Charge left: 2 hours"
            icon={
              <Battery0BarOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>

        {/* Third element: Temperature from the engine */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Motor Temperature"
            subtitle="Celcius"
            progress="50 °C"
            left="Max: 80 °C"
            icon={
              <TemperatureOutliend
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>

        {/* Fourth element: Velocity */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Speed"
            subtitle="Current"
            progress="50 km/h"
            left="Max: 80 km/h"
            icon={
              <SpeedOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "1.6rem" }}
              />
            }
          />
        </Box>

        {/* Second row */}
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          gridRow="span 4"
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          width="100%"
        >
          <Box px={4} py={2}>
            <Typography variant="h2" color={colors.grey[100]}>
              Racing Statistics
            </Typography>
          </Box>
          <Box flex="1" minHeight={0} maxHeight={800} paddingLeft={4}>
            <Graph
              data={velocity.map((entry) => Number(entry.value))}
              labels={velocity.map((entry) => entry.time)}
              theme={theme}
            />
          </Box>
        </Box>

        {/* End  */}
      </Box>
    </Box>
  )
}

export default Dashboard
