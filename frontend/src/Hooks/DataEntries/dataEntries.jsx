/**
 * @brief
 * Divides the raw data into the following categories:
 * 1. Amps-hour (Amps-hour)
 * 2. Amps (Amps)
 * 3. Voltage (Volts)
 * 4. Velocity (km/h)
 * 5. Distance (km)
 */
const dataEntries = (rawData) => {
  let ampsHour = []
  let amps = []
  let voltage = []
  let velocity = []
  let distance = []

  rawData.forEach((element) => {
    ampsHour.push({ time: element.time, value: element.ampsHour })
    amps.push({ time: element.time, value: element.amps })
    voltage.push({ time: element.time, value: element.voltage })
    velocity.push({ time: element.time, value: element.velocity })
    distance.push({ time: element.time, value: element.distance })
  })

  console.log("ampsHour: ", ampsHour)

  return { ampsHour, amps, voltage, velocity, distance }
}

export default dataEntries
