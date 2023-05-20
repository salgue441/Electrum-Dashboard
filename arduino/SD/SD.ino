#include <SPI.h>
#include <SD.h>

File myFile;

/*
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 10
 */

const int LED_PIN = 5;
const int chipSelect = 10;

const char *folderName = "tests";
const char *baseFileName = "logs";
const char *fileExtension = ".txt";

void setup()
{
  pinMode(LED_PIN, OUTPUT);

  // Abre la comunicacion serial
  Serial.begin(9600);

  Serial.print("Conectando a la tarjeta SD...");

  if (!SD.begin())
  {
    Serial.println("Ocurrio un error!");
    bool state = true;

    while (true)
    {
      digitalWrite(LED_PIN, state);
      delay(1000);
      state = !state;
    }

    return;
  }
  Serial.println("Coneccion exitosa.");

  if (!SD.exists(folderName))
  {
    SD.mkdir(folderName);
  }

  // Abre el archivo. Tenga en cuenta que solo se puede abrir un archivo a la vez,
  // por lo que debe cerrar este antes de abrir otro.
  String filePath = createFilePath(folderName, baseFileName, fileExtension);
  Serial.print("A la ruta: ");
  Serial.println(filePath);
  File file = SD.open("test", FILE_WRITE);
  if (file)
  {
    Serial.println("Archivo abierto correctamente.");
    // Perform actions on the file
    file.println("Hello from Arduino!");
    file.close();
  }
  else
  {
    Serial.println("Error abriendo el archivo.");
    digitalWrite(LED_PIN, 1);
    // Handle error opening file
  }
}

void loop()
{
}

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