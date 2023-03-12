/**
 * @file main.cpp
 * @brief Main file for the project
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-03-11
 *
 * @copyright Copyright (c) 2023 - MIT License
 */

#include <boost/asio.hpp>
#include <boost/asio/serial_port.hpp>
#include <boost/asio/steady_timer.hpp>
#include <iostream>
#include <string>
#include <vector>

using boost::asio::ip::tcp;

/**
 * @brief
 * Main function. Interacts with the serial ports and the TCP server
 * @param argc
 * @param argv
 * @return int
 */
int main(int argc, char **argv)
{
    try
    {
        boost::asio::io_service io_service;
        boost::asio::serial_port serial(io_service);

        std::string port;
        unsigned int baud_rate;

        for (int i{1}; i < argc; i++)
        {
            if (std::string(argv[i]) == "-p" && i < argc - 1)
                port = argv[++i];

            else if (std::string(argv[i]) == "-b" && i < argc - 1)
                baud_rate = std::stoi(argv[++i]);
        }

        if (port.empty() || baud_rate == 0)
        {
            std::vector<unsigned int> baud_rates = {
                9600, 19200, 38400, 57600, 115200};

            for (auto baud_rate : baud_rates)
            {
                try
                {
                    serial.open("/dev/ttyUSB0");
                    serial.set_option(
                        boost::asio::serial_port_base::baud_rate(baud_rate));

                    break;
                }

                catch (boost::system::system_error &)
                {
                    if (baud_rate == baud_rates.back())
                        throw std::runtime_error(
                            "Failed to open the serial port at any baud rate");
                }
            }
        }

        else
        {
            serial.open(port);
            serial.set_option(
                boost::asio::serial_port_base::baud_rate(baud_rate));
        }

        // TCP server
        tcp::socket socket(io_service);
        tcp::resolver resolver(io_service);
        tcp::resolver::query query("localhost", "3000");
        tcp::resolver::iterator endpoint_iterator = resolver.resolve(query);

        boost::asio::connect(socket, endpoint_iterator);

        // Reading the data
        std::vector<char> data(1024);
        boost::asio::steady_timer timer(io_service,
                                        boost::asio::chrono::seconds(1));

        while (true)
        {
            size_t length{serial.read_some(boost::asio::buffer(data))};

            if (length > 0)
            {
                std::cout << "Data received: "
                          << std::string(data.begin(), data.end()) << std::endl;

                boost::asio::write(socket,
                                   boost::asio::buffer(data, length));
            }

            // Waiting for 1 second before reading again
            timer.wait();
        }
    }

    catch (std::exception &e)
    {
        std::cerr << "Exception: " << e.what() << std::endl;
    }

    return 0;
}