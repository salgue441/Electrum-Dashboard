add_executable(websocket_server websocket_server.c)

link_directories(/home/carlos/libwebsockets/build/lib)

# link libwebsockets library
find_package(libwebsockets CONFIG REQUIRED)
target_link_libraries(websocket_server /home/carlos/libwebsockets/build/lib/libwebsockets.so)
