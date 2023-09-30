// Datos de prueba
// Ah	V	A	S	D
// -100.32	14.88	-422.2	0.00	39.977
// -100.44	14.88	-422.2	0.00	39.977
// -100.56	14.88	-422.1	0.00	39.977
// -100.68	14.88	-422.2	0.00	39.977
// -100.80	14.88	-422.1	0.00	39.977
// -100.92	14.88	-422.2	0.00	39.977
// -101.04	14.88	-422.2	0.00	39.977

#include <SPI.h>
#include <SD.h>

/**
 * @brief Struct que contiene los datos del Cycle Analyst 
 * (Ampers Hora, Voltaje, Corriente, Velocidad, Distancia)
 */
typedef struct {
  float Ah;
  float V;
  float A;
  float S;
  float D;
} CycleAnalystData;

// Function prototypes
void createFilePath(char *, const char *, const char *, const char *);
CycleAnalystData readCycleAnalyst(HardwareSerial &);

// SD card constants
const int LED_PIN = 5;
const int chipSelect = 10;
const char folderName[] = "tests";
const char baseFileName[] = "logs";
const char fileExtension[] = ".csv";
char filePath[200];  // Assuming the file path won't exceed 50 characters
const int writeInterval = 5000;
unsigned long lastWrite = 0;
char buffer[150];  // Assuming a buffer size of 100 characters should be enough
const char separator = ',';
HardwareSerial &cycleAnalystSerial = Serial;

/**
 * @brief Funcion para configurar el arduino con los puertos del Cycle Analyst y la SD
 * 
 */
void setup() {
  pinMode(LED_PIN, OUTPUT);
  cycleAnalystSerial.begin(9600);

  /**
   * @brief Manejo de errores de la SD
   * @example Si no se puede inicializar la SD se enciende y apaga el LED rapidamente
   */
  if (!SD.begin(chipSelect)) {
    // Flash LED rapidly to indicate SD card error
    while (true) {
      digitalWrite(LED_PIN, HIGH);
      delay(250);
      digitalWrite(LED_PIN, LOW);
      delay(250);
    }
  }

  if (!SD.exists(folderName)) {
    SD.mkdir(folderName);
  }

  createFilePath(filePath, folderName, baseFileName, fileExtension);

  File file = SD.open(filePath, FILE_WRITE);
  if (file) {
    file.println("Ah,V,A,S,D");  // Write header
    file.close();
  } else {
    // Flash LED slowly to indicate file error
    while (true) {
      digitalWrite(LED_PIN, HIGH);
      delay(1000);
      digitalWrite(LED_PIN, LOW);
      delay(1000);
    }
  }
}

/**
 * @brief Funcion para leer los datos del Cycle Analyst y escribirlos en la SD
 * 
 */
void loop() {
  if (cycleAnalystSerial.available()) {
    CycleAnalystData data = readCycleAnalyst(cycleAnalystSerial);
    snprintf(buffer, sizeof(buffer), "%f,%f,%f,%f,%f\\n", data.Ah, data.V, data.A, data.S, data.D);

    if (millis() - lastWrite > writeInterval) {
      File file = SD.open(filePath, FILE_WRITE);
      if (file) {
        file.print(buffer);
        file.close();
        buffer[0] = '\\0';  // Reset buffer
      } else {
        // Flash LED in a unique pattern to indicate write error
        for (int i = 0; i < 3; i++) {
          digitalWrite(LED_PIN, HIGH);
          delay(500);
          digitalWrite(LED_PIN, LOW);
          delay(500);
        }
      }
      lastWrite = millis();
    }
  }
}

/**
 * @brief Funcion para leer los datos del Cycle Analyst
 * @param serial 
 * @return CycleAnalystData 
 */
CycleAnalystData readCycleAnalyst(HardwareSerial &serial) {
  CycleAnalystData data;
  data.Ah = serial.parseFloat();
  serial.read();  // Consume separator
  data.V = serial.parseFloat();
  serial.read();  // Consume separator
  data.A = serial.parseFloat();
  serial.read();  // Consume separator
  data.S = serial.parseFloat();
  serial.read();  // Consume separator
  data.D = serial.parseFloat();
  return data;
}

/**
 * @brief Create a File Path object
 * 
 * @param path 
 * @param folder 
 * @param baseFile 
 * @param extension 
 */

void createFilePath(char *path, const char *folder, const char *baseFile, const char *extension) {
  sprintf(path, "/%s/%s%s", folder, baseFile, extension);
  int fileCount = 0;
  while (SD.exists(path)) {
    sprintf(path, "/%s/%s%d%s", folder, baseFile, fileCount, extension);
    fileCount++;
  }
}