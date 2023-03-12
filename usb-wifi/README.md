# USB SERVER CONNECTION

## Funcionalidad

El programa permite la comunicación entre un dispositive USB (USB WiFi Antenna) y el
servidor web del dashboard. El programa se encarga de recibir los datos del dispositive
y enviarlos al servidor web.

## Baud Rate

Is a measure of the rate at whcih data is transmitted over a communication channel,
such as a serial port or a network connection. It is defined as the number of
symbols (usually bits) per second that are transmitted over the channel.

The baud rate is usually expressed in bits per second (bps), and it determines how
quickly data can be transmitted over the serial port. A higher baud rate means that
data can be transmitted faster, but it also requires a more precise timing
mechanism to ensure that the data is transmitted accurately. Common baud
rates for serial communication include 9600, 19200, 38400, 57600, and 115200 bps.

## Ports

### Windows

Los puertos en windows se pueden encontrar en el administrador de dispositivos.
Siguen el siguiente formato: COM1, COM2, COM3, etc.

### WSL & Linux

Los puertos en WSL se pueden encontrar en el administrador de dispositivos.
Siguen el siguiente formato: /dev/ttyS0, /dev/ttyS1, /dev/ttyS2, etc.

## Instalación

### Requerimientos

- g++ (compilador)
- make (compilador)
- cmake (compilador)

- boost (librería)

### Instalación de boost

```bash
sudo apt-get install libboost-all-dev
```

### Compilación

```bash
make
```

## Ejecución

```bash
./usb_wifi
```

## Parámetros

- -p, --port: Puerto del dispositive USB
- -b, --baud: Baud Rate del dispositive USB

### Ejecución con parámetros

```bash
./usb_wifi -p /dev/ttyUSB0 -b 9600
```
