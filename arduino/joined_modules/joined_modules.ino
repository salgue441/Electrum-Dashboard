// Datos de prueba
// Ah	V	A	S	D
// -100.32	14.88	-422.2	0.00	39.977
// -100.44	14.88	-422.2	0.00	39.977
// -100.56	14.88	-422.1	0.00	39.977
// -100.68	14.88	-422.2	0.00	39.977
// -100.80	14.88	-422.1	0.00	39.977
// -100.92	14.88	-422.2	0.00	39.977
// -101.04	14.88	-422.2	0.00	39.977

// Librerias para escribir a SD
#include <SPI.h>
#include <SD.h>

// Struct que contiene los datos del Cycle Analyst (---, Voltaje, Corriente, Velocidad, ---)
typedef struct
{
  float Ah;
  float V;
  float A;
  float S;
  float D;
} CycleAnalystData;

// Function prototype
String createFilePath(const char *, const char *, const char *);

/* SD constants
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 10
 */
const int LED_PIN = 5;
const int chipSelect = 10;

const char *folderName = "tests";
const char *baseFileName = "logs";
const char *fileExtension = ".csv";
String filePath = createFilePath(folderName, baseFileName, fileExtension);

const int writeInterval = 5000; // Intervalo de escritura en milisegundos
unsigned long lastWrite = 0;    // Tiempo de la ultima escritura
String buffer = "";             // Buffer de datos
String separator = ",";         // Separador de datos

// Se asigna de que puerto serial se leen los datos
HardwareSerial &cycleAnalystSerial = Serial; // Serial, Serial1, Serial2 o Serial3

void setup()
{
  pinMode(LED_PIN, OUTPUT);
  // Inicializa los puertos seriales Serial -> PC, cycleAnalystSerial -> Cycle Analyst
  // Serial.begin(9600);
  // Serial.println("Started");
  cycleAnalystSerial.begin(9600);
  // Abre la comunicacion serial
  // Serial.begin(9600);
  // Serial.print("Conectando a la tarjeta SD...");

  if (!SD.begin())
  {
    // Serial.println("Ocurrio un error!");
    bool state = true;
    while (true)
    {
      digitalWrite(LED_PIN, state);
      delay(1000);
      state = !state;
    }
    return;
  }
  // Serial.println("Coneccion exitosa.");
  // Crea la carpeta si no existe
  if (!SD.exists(folderName))
  {
    SD.mkdir(folderName);
  }
  // Escribe el header en el archivo
  String header = "Ah" + separator + "V" + separator + "A" + separator + "S" + separator + "D" + "\n";
  File file = SD.open(filePath, FILE_WRITE);
  if (file)
  {
    // Serial.println("Archivo abierto correctamente.");
    // Perform actions on the file
    file.print(header);
    file.close();
  }
  else
  {
    // Serial.println("Error al abrir el archivo.");
    digitalWrite(LED_PIN, HIGH);
  }
}

void loop()
{
  // Si hay datos en el puerto serial del Cycle Analyst se leen
  if (cycleAnalystSerial.available())
  {
    // Lee los datos del Cycle Analyst
    CycleAnalystData cycleAnalystData = readCycleAnalyst(cycleAnalystSerial);

    buffer += String(cycleAnalystData.Ah) + separator;
    buffer += String(cycleAnalystData.V) + separator;
    buffer += String(cycleAnalystData.A) + separator;
    buffer += String(cycleAnalystData.S) + separator;
    buffer += String(cycleAnalystData.D) + '\n';

    // Si ya paso el tiempo de escritura se escribe en el puerto serial
    if (millis() - lastWrite > writeInterval)
    {
      File file = SD.open(filePath, FILE_WRITE);
      // Si se pudo abrir el archivo se escribe el buffer
      if (file)
      {
        // Serial.println("Archivo abierto correctamente.");
        file.print(buffer);
        file.close();
        buffer = ""; // Se limpia el buffer
      }
      else
      {
        // Serial.println("Error al abrir el archivo.");
        digitalWrite(LED_PIN, HIGH);
      }
      lastWrite = millis();
    }
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

/**
 * @brief Crea el path del archivo, si ya existe se le agrega un numero al final
 *
 * @param folderName Nombre de la carpeta
 * @param baseFileName Nombre base del archivo
 * @param fileExtension Extension del archivo
 * @return Path del archivo
 */
String createFilePath(const char *folderName, const char *baseFileName, const char *fileExtension)
{
  String filePath = "/";
  filePath += folderName;
  filePath += "/";
  filePath += baseFileName;
  int fileCount = 0;

  // Check if the base file name already exists
  while (SD.exists(filePath + String(fileCount) + fileExtension))
  {
    fileCount++;
  }

  // Append the file count and file extension
  filePath += String(fileCount);
  filePath += fileExtension;

  return filePath;
}