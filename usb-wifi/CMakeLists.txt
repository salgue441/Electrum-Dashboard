cmake_minimum_required(VERSION 3.21)

project(usb-wifi)

set(CMAKE_CXX_STANDARD 20)

# Boost 1.76.0 library
find_package(Boost 1.76 REQUIRED COMPONENTS system)

add_executable(usb-wifi main.cpp)
target_link_libraries(usb-wifi PRIVATE Boost::system)
