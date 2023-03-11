/**
 * @file usb_communication.c
 * @author Carlos Salguero
 * @brief USB communication
 * @version 0.1
 * @date 2023-03-11
 *
 * @copyright Copyright (c) 2023 - MIT License
 */

#include "usb_communication.h"

#define VENDOR_ID 0x12d1  // Wifi antenna vendor id
#define PRODUCT_ID 0x14db // Wifi antenna product id

static libusb_device_handle *device_handle = NULL;

/**
 * @brief
 * Initialize USB communication
 * @return int - 0 if success, -1 if error
 */
int init_usb_communication(void)
{
    int result;
    libsub_int(NULL);

    // Finding he usb device
    device_handle = libusb_open_device_with_vid_pid(
        NULL, VENDOR_ID, PRODUCT_ID);

    if (device_handle == NULL)
    {
        fprintf(stderr, "ERROR: Failed to find the USB device\n");

        return -1;
    }

    // Claiming the interface
    result = libusb_claim_interface(device_handle,
                                    0);

    if (result < 0)
    {
        fprintf(stderr, "ERROR: Failed to claim the interface\n");
        libusb_close(device_handle);

        device_handle = NULL;

        return -1;
    }

    return 0;
}

/**
 * @brief
 * Close USB communication
 * @return int - 0 if success, -1 if error
 */
void close_usb_communication(void)
{
    if (device_handle != NULL)
    {
        libusb_release_interface(device_handle, 0);
        libusb_close(device_handle);
        device_handle = NULL;
    }

    libusb_exit(NULL);
}

/**
 * @brief
 * Read data from USB
 * @param data - Data to send
 * @param size - Size of data
 * @return int - 0 if success, -1 if error
 */
int read_usb_data(char *buffer, size_t buffer_size)
{
    int result, transferred;

    // Reading data
    result = libusb_interrupt_transfer(
        device_handle, 0x81, buffer, buffer_size, &transferred, 0);

    if (result < 0)
    {
        fprintf(stderr, "ERROR: Failed to read data from USB\n");

        return -1;
    }

    return transferred;
}