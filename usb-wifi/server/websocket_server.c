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
#include <string.h>
#include <libwebsockets.h>

#define SERVER_ADDRESS "localhost"
#define PORT 3000

typedef void (*callback_t)(char *data);
callback_t data_callback;

/**
 * @brief
 * Main function for the websocket server
 * @param argc - number of arguments
 * @param argv - arguments
 * @return int - 0 if success
 * @return int - 1 if error
 */
int main(int argc, char **argv)
{
    struct lws_context_creation_info info = {0};
    struct lws_client_connect_info connect_info = {0};
    struct lws *wsi = NULL;

    int error;

    // libwebsockets context
    info.port = CONTEXT_PORT_NO_LISTEN;
    info.protocols = NULL;
    info.gid = -1;
    info.uid = -1;
    info.options = 0;
    info.user = NULL;

    struct lws_context *context = lws_create_context(&info);

    if (context == NULL)
    {
        fprintf(stderr, "Failed to create context\n");

        return 1;
    }

    // Connection info
    connect_info.context = context;
    connect_info.address = SERVER_ADDRESS;
    connect_info.port = PORT;
    connect_info.ssl_connection = 0;
    connect_info.host = NULL;
    connect_info.origin = NULL;
    connect_info.protocol = NULL;
    connect_info.path = '/';
    connect_info.ietf_version_or_minus_one = -1;

    // Creating websocket client
    wsi = lws_client_connect_via_info(&connect_info);

    if (wsi == NULL)
    {
        fprintf(stderr, "Failed to create websocket client\n");
        lws_context_destroy(context);

        return 1;
    }

    // Sending the data to the server
}