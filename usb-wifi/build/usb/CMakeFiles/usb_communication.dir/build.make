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
include usb/CMakeFiles/usb_communication.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include usb/CMakeFiles/usb_communication.dir/compiler_depend.make

# Include the progress variables for this target.
include usb/CMakeFiles/usb_communication.dir/progress.make

# Include the compile flags for this target's objects.
include usb/CMakeFiles/usb_communication.dir/flags.make

usb/CMakeFiles/usb_communication.dir/usb_communication.c.o: usb/CMakeFiles/usb_communication.dir/flags.make
usb/CMakeFiles/usb_communication.dir/usb_communication.c.o: ../usb/usb_communication.c
usb/CMakeFiles/usb_communication.dir/usb_communication.c.o: usb/CMakeFiles/usb_communication.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building C object usb/CMakeFiles/usb_communication.dir/usb_communication.c.o"
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb" && /usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT usb/CMakeFiles/usb_communication.dir/usb_communication.c.o -MF CMakeFiles/usb_communication.dir/usb_communication.c.o.d -o CMakeFiles/usb_communication.dir/usb_communication.c.o -c "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/usb/usb_communication.c"

usb/CMakeFiles/usb_communication.dir/usb_communication.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/usb_communication.dir/usb_communication.c.i"
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb" && /usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/usb/usb_communication.c" > CMakeFiles/usb_communication.dir/usb_communication.c.i

usb/CMakeFiles/usb_communication.dir/usb_communication.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/usb_communication.dir/usb_communication.c.s"
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb" && /usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/usb/usb_communication.c" -o CMakeFiles/usb_communication.dir/usb_communication.c.s

# Object files for target usb_communication
usb_communication_OBJECTS = \
"CMakeFiles/usb_communication.dir/usb_communication.c.o"

# External object files for target usb_communication
usb_communication_EXTERNAL_OBJECTS =

usb/usb_communication: usb/CMakeFiles/usb_communication.dir/usb_communication.c.o
usb/usb_communication: usb/CMakeFiles/usb_communication.dir/build.make
usb/usb_communication: usb/CMakeFiles/usb_communication.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir="/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable usb_communication"
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb" && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/usb_communication.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
usb/CMakeFiles/usb_communication.dir/build: usb/usb_communication
.PHONY : usb/CMakeFiles/usb_communication.dir/build

usb/CMakeFiles/usb_communication.dir/clean:
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb" && $(CMAKE_COMMAND) -P CMakeFiles/usb_communication.dir/cmake_clean.cmake
.PHONY : usb/CMakeFiles/usb_communication.dir/clean

usb/CMakeFiles/usb_communication.dir/depend:
	cd "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build" && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/usb" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb" "/mnt/d/documents/Tec de Monterrey/Grupos Estudiantiles/electrum/usb-wifi/build/usb/CMakeFiles/usb_communication.dir/DependInfo.cmake" --color=$(COLOR)
.PHONY : usb/CMakeFiles/usb_communication.dir/depend

