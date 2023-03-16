
// Datos de prueba
// Ah	V	A	S	D
// -100.32	14.88	-422.2	0.00	39.977
// -100.44	14.88	-422.2	0.00	39.977
// -100.56	14.88	-422.1	0.00	39.977
// -100.68	14.88	-422.2	0.00	39.977
// -100.80	14.88	-422.1	0.00	39.977
// -100.92	14.88	-422.2	0.00	39.977
// -101.04	14.88	-422.2	0.00	39.977

// Struct que contiene los datos del Cycle Analyst (---, Voltaje, Corriente, Velocidad, ---)
typedef struct
{
  float Ah;
  float V;
  float A;
  float S;
  float D;
} CycleAnalystData;

// Se asigna de que puerto serial se leen los datos
HardwareSerial &cycleAnalystSerial = Serial1; // Serial, Serial1, Serial2 o Serial3

void setup()
{
  // Inicializa los puertos seriales Serial -> PC, cycleAnalystSerial -> Cycle Analyst
  Serial.begin(9600);
  Serial.println("Started");
  cycleAnalystSerial.begin(9600);
}
void loop()
{
  // Si hay datos en el puerto serial del Cycle Analyst se leen
  if (cycleAnalystSerial.available())
  {
    // Lee los datos del Cycle Analyst
    CycleAnalystData cycleAnalystData = readCycleAnalyst(Serial);

    // Imprime los datos del Cycle Analyst
    Serial.print("Ah: ");
    Serial.print(cycleAnalystData.Ah);
    Serial.print("\tV: ");
    Serial.print(cycleAnalystData.V);
    Serial.print("\tA: ");
    Serial.print(cycleAnalystData.A);
    Serial.print("\tS: ");
    Serial.print(cycleAnalystData.S);
    Serial.print("\tD: ");
    Serial.println(cycleAnalystData.D);
  }
}

/**
 * @brief Lee los datos del Cycle Analyst
 *
 * @param serial De que puerto serial se leen los datos
 * @return CycleAnalystData
 */
CycleAnalystData readCycleAnalyst(HardwareSerial &serial)
{
  float Ah, V, A, S, D;
  Ah = serial.readStringUntil('\t').toFloat();
  V = serial.readStringUntil('\t').toFloat();
  A = serial.readStringUntil('\t').toFloat();
  S = serial.readStringUntil('\t').toFloat();
  D = serial.readStringUntil('\n').toFloat();

  // Guar
  CycleAnalystData data = {Ah, V, A, S, D};
  return data;
}