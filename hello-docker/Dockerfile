# The FROM ketword specifies the base image to use
FROM gcc:latest

# This sets the working directory for the instructions in a Dockerfile
WORKDIR /app

# It copies files/directories from the build contenxt to the image
COPY hello.cpp .

# This is used to execute commands in the shell during image build
RUN g++ -o hello hello.cpp

# This is very similar to CMD but cannot be overridden and is fixed
ENTRYPOINT ["./hello"]
