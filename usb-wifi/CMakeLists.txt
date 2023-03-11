cmake_minimum_required(VERSION 3.10)

project(usb-wifi)

set(CMAKE_C_STANDARD 17)

# find libusb library
find_package(PkgConfig REQUIRED)
pkg_check_modules(LIBUSB REQUIRED libusb-1.0)

# add subdirectories
add_subdirectory(server)
add_subdirectory(usb)