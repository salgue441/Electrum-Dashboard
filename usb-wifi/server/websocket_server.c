/**
 * @file usb_communication.c
 * @author Carlos Salguero
 * @brief Websocket server for the communication with the client
 * @version 0.1
 * @date 2023-03-11
 *
 * @copyright Copyright (c) 2023 - MIT License
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <pthread.h>
#include <libwebsockets.h>

#include "../usb/usb_communication.h"

#define PORT 8080

struct libwebsocket_context *context;
pthread_t usb_thread;
pthread_mutex_t usb_mutex;
char usb_data[1024];

/**
 * @brief
 * Callback for the websocket server
 * @param context - Websocket context
 * @param wsi - Websocket instance
 * @param reason - Reason for the callback
 * @param user - User data
 * @param in - Input data
 * @param len - Length of input data
 * @return int - 0 if success, -1 if error
 */
static int websocket_callback(struct libwebsocket_context *context,
                              struct libwebsocket *wsi,
                              enum libwebsocket_callback_reasons reason,
                              void *user, void *in, size_t len)
{
    switch (reason)
    {
    case LWS_CALLBACK_ESTABLISHED:
        // New client connected
        break;

    case LWS_CALLBACK_RECEIVE:
        // Data received from client
        break;

    case LWS_CALLBACK_CLOSED:
        // Client disconnected
        break;

    case LWS_CALLBACK_SERVER_WRITEABLE:
        // Write data to client
        if (strlen(usb_data) > 0)
        {
            libwebsocket_write(wsi, (unsigned char *)usb_data,
                               strlen(usb_data), LWS_WRITE_TEXT);
            usb_data[0] = '\0'; // Clear the USB data buffer
        }
        break;

    default:
        break;
    }

    return 0;
}

/**
 * @brief
 * USB thread
 * @param arg - Arguments
 * @return void* - NULL
 */
static void *usb_thread_function(void *arg)
{
    while (1)
    {
        char buffer[1024];
        int num_bytes;

        // Reading data from USB
        pthread_mutex_lock(&usb_mutex);
        num_bytes = read_usb_data(buffer, sizeof(buffer));

        if (num_bytes > 0)
        {
            memcpy(usb_data, buffer, num_bytes);
            libwebsocket_callback_on_writable_all(context);
        }

        pthread_mutex_unlock(&usb_mutex);
        usleap(1000);
    }

    return NULL;
}

int main(int argc, char **argv)
{
    // Websocket protocols
    struct libwebsocket_protocols protocols[] = {
        {
            "http-only",
            websocket_callback,
            0,
        },
        {
            NULL,
            NULL,
            0,
        },
    };

    struct lws_context_creation_info info = {
        .port = PORT,
        .protocols = protocols,
        .gid = -1,
        .uid = -1,
    };

    if (init_usb_communication() < 0)
    {
        return -1;
    }

    // websocket context
    context = libwebsocket_create_context(&info);

    if (context == NULL)
    {
        fprintf(stderr, "ERROR: failed to create a websocket context. \n");

        return -1;
    }

    // Creating the USB thread
    if (pthread_create(&usb_thread, NULL,
                       usb_thread_function, NULL) != 0)
    {
        fprintf(stderr,
                "ERROR: failed to create the USB thread. \n");

        libwebsocket_context_destroy(context);
        close_usb_communication();

        return -1;
    }

    // Main loop
    while (1)
    {
        libwebsocket_service(context, 50);
    }

    // Cleanup
    pthread_join(usb_thread, NULL);
    libwebsocket_context_destroy(context);
    close_usb_communication();

    return 0;
}