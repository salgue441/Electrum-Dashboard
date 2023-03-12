/**
 * @file usb_communication.h
 * @author Carlos Salguero
 * @brief Interface for USB communication
 * @version 0.1
 * @date 2023-03-11
 *
 * @copyright Copyright (c) 2023
 *
 */

#ifndef USB_COMMUNICATION_H
#define USB_COMMUNICATION_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <libusb-1.0/libusb.h>

/**
 * @brief
 * Initialize USB communication
 * @return int - 0 if success, -1 if error
 */
int init_usb_communication(void);

/**
 * @brief
 * Close USB communication
 */
void close_usb_communication(void);

/**
 * @brief
 * Read data from USB
 * @param data - Data to send
 * @param size - Size of data
 * @return int - 0 if success, -1 if error
 */
int read_usb_data(char *buffer, size_t buffer_size);

#endif //! USB_COMMUNICATION_H