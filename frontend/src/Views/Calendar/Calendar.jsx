import { useState } from "react"

// @full calendar components
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import timeGridPlugin from "@fullcalendar/timegrid"
import { formatDate } from "@fullcalendar/core"

// mui components
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material"

// Components
import Header from "../../Components/Header/Header"

// themes
import { tokens } from "../../theme"

/**
 * @brief
 * Renders the Calendar view
 * @returns {JSX.Element} Calendar view
 */
const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (args) => {
    const title = prompt("Please enter a new title for your event")
    const calendarApi = args.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${args.dateStr}-${title}`,
        title,
        start: args.startStr,
        end: args.endStr,
        allDay: args.allDay,
      })
    }
  }

  const handleEventClick = (args) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${args.event.title}'`
      )
    ) {
      args.event.remove()
    }
  }

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
        <Header title="Racing Calendar" subtitle="Race Year 2022" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/* Calendar sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="10px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex="1 1 80%" p="15px">
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              listPlugin,
              timeGridPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventSet={(event) => setCurrentEvents(event)}
            initialEvents={[
              {
                id: "12315",
                title: "Tec de Monterrey, Campus Monterrey",
                date: "2022-11-04",
              },
              {
                id: "12316",
                title: "Kartodromo Queratero",
                date: "2022-11-11",
              },
              {
                id: "12317",
                title: "Workshop",
                date: "2022-11-14",
              },
              {
                id: "12318",
                title: "Sensor Upgrades",
                date: "2022-11-18",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar
