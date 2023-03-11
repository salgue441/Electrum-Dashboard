add_executable(usb_communication usb_communication.c)

# link libusb library
find_package(PkgConfig REQUIRED)
pkg_check_modules(LIBUSB REQUIRED libusb-1.0)
target_link_libraries(usb_communication ${LIBUSB_LIBRARIES})