# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.22

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build"

# Include any dependencies generated for this target.
include CMakeFiles/usb-wifi.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/usb-wifi.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/usb-wifi.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/usb-wifi.dir/flags.make

CMakeFiles/usb-wifi.dir/main.cpp.o: CMakeFiles/usb-wifi.dir/flags.make
CMakeFiles/usb-wifi.dir/main.cpp.o: ../main.cpp
CMakeFiles/usb-wifi.dir/main.cpp.o: CMakeFiles/usb-wifi.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/usb-wifi.dir/main.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/usb-wifi.dir/main.cpp.o -MF CMakeFiles/usb-wifi.dir/main.cpp.o.d -o CMakeFiles/usb-wifi.dir/main.cpp.o -c "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/main.cpp"

CMakeFiles/usb-wifi.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/usb-wifi.dir/main.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/main.cpp" > CMakeFiles/usb-wifi.dir/main.cpp.i

CMakeFiles/usb-wifi.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/usb-wifi.dir/main.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/main.cpp" -o CMakeFiles/usb-wifi.dir/main.cpp.s

# Object files for target usb-wifi
usb__wifi_OBJECTS = \
"CMakeFiles/usb-wifi.dir/main.cpp.o"

# External object files for target usb-wifi
usb__wifi_EXTERNAL_OBJECTS =

usb-wifi: CMakeFiles/usb-wifi.dir/main.cpp.o
usb-wifi: CMakeFiles/usb-wifi.dir/build.make
usb-wifi: /usr/lib/libboost_system.so.1.81.0
usb-wifi: CMakeFiles/usb-wifi.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir="/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable usb-wifi"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/usb-wifi.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/usb-wifi.dir/build: usb-wifi
.PHONY : CMakeFiles/usb-wifi.dir/build

CMakeFiles/usb-wifi.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/usb-wifi.dir/cmake_clean.cmake
.PHONY : CMakeFiles/usb-wifi.dir/clean

CMakeFiles/usb-wifi.dir/depend:
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build" && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/CMakeFiles/usb-wifi.dir/DependInfo.cmake" --color=$(COLOR)
.PHONY : CMakeFiles/usb-wifi.dir/depend
