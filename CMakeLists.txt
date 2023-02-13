cmake_minimum_required(VERSION 3.23)
project(AdventOfCode)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)
include_directories(2021)
include_directories(2022)

add_executable(AdventOfCode
        2022/1/index.cpp
        2022/1/index.html
        2022/1/index.js
        2022/1/input.txt
        2022/2/index.html
        2022/2/index.js
        2022/3/index.html
        2022/3/index.js
        2022/4/index.html
        2022/4/index.js
        2022/5/index.js
        2022/5/input.txt
        2022/5/test.txt
        2022/7/index.js
        2022/7/test.txt
        node_modules/fs/package.json
        node_modules/fs/README.md
        node_modules/.package-lock.json
        .gitignore
        LICENSE
        package-lock.json
        package.json)

file(COPY 2022/1/input.txt DESTINATION ${CMAKE_BINARY_DIR})