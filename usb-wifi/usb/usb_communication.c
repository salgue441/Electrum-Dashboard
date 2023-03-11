/**
 * @file usb_communication.c
 * @author Carlos Salguero
 * @brief USB communication
 * @version 0.1
 * @date 2023-03-11
 *
 * @copyright Copyright (c) 2023 - MIT License
 */

#include <stdio.h>
#include <libusb-1.0/libusb.h>

#define VENDOR_ID 0x1234  // Wifi antena's vendor id
#define PRODUCT_ID 0x5678 // Wifi antena's product id
#define ENDPOINT_IN 0x81  // Endpoint for reading

/**
 * @brief
 * Main function for the USB communication
 * @param argc - number of arguments
 * @param argv - arguments
 * @return int - 0 if success
 * @return int - 1 if error
 */
int main(int argc, char **argv)
{
    (void)argc;
    (void)argv;

    libusb_device_handle *handle;
    int r;

    r = libsub_int(NULL);

    if (r < 0)
    {
        fprintf(stderr, "Failed tto initialize libsub\n");

        return 1;
    }

    handle = libusb_open_device_with_vid_pid(NULL,
                                             VENDOR_ID, PRODUCT_ID);

    if (handle == NULL)
    {
        fprintf(stderr, "Failed to open USB device\n");
        libusb_exit(NULL);

        return 1;
    }

    // Interface
    r = libusb_claim_interface(handle, 0);

    if (r < 0)
    {
        fprintf(stderr, "Failed to claim interface\n");
        libusb_close(handle);
        libusb_exit(NULL);

        return 1;
    }

    // Reading the data
    unsigned char buffer[64];
    int transferred;

    r = libusb_bulk_transfer(handle, ENDPOINT_IN,
                             buffer, sizeof(buffer),
                             &transferred, 0);

    if (r == 0)
    {
        printf("Received %d bytes: %s\n", transferred, buffer);

        // Process the data
    }
    else
    {
        fprintf(stderr, "Failed to read data\n");
    }

    // Release the interface and close the device
    libusb_release_interface(handle, 0);
    libusb_close(handle);

    // Exit
    libusb_exit(NULL);

    return 0;
}