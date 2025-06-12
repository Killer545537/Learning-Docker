# What is Docker?
It is an open-source platform that lets us build, package and run applications in lightweight, portable containers. It helps us bundle an app (including all its dependencies) and run it anywhere without any worrying about environment differences.
- Provides consistency across environments
- Isolation
- Portability
- Version Control
- Scalability
- DevOps Integration

# How does it work?
The entire workflow revolves around images and containers.

## Image
It is a read-only, standalone executable package that contains everything needed to run a piece of software
- Code - Runtime - Libraries - Environment Variables - Config Files
It is like a recipe for an application.

## Container
It is a lightweight, portable and isolated runtime environment that run an app based on a docker image.
We can't run a Docker image directly, we create a container from it.
It is like a dish prepared using the recipe.

## Volumes
It is a persistent storage mechanism used to store data outside a container's writeable layer so that the data persists even after the container is deleted, can be shared between multiple containers and is maintained by Docker.

## Docker Network
It allows docker containers to communicate with each other and the outside world. Containers need a network to:
- Talk to each other
- Access the internet
- Be accessed from outside
These provide isolation between services and apps, internal DNS and easy control over routing and exposure.
There are multiple types of Docker Networks:
- Bridge - Host - Overlay - Macvlan - None

# Docker Workflow
It describes the process of how Docker is used to build store, share and run applications in containers. It has three main components:
## Docker Client
This is what we interact with. It is the user interface for interacting with Docker. It is used to give Docker commands, this can be done using the `docker` CLI or the `Docker Desktop` GUI, such as `docker run`, `docker build` to the Docker Daemon.
## Docker Daemon
The Docker Host runs the Docker Daemon `dockerd` which does the actual work:
- Builds images
- Runs containers
- Manages networks and volumes
## Docker Registry/Hub
This is a centralized repository of Docker images. Docker : Docker Hub :: Git : GitHub

# Making a Docker Image
We can create a Docker Image using a special file called `Dockerfile` and then building it using `docker build`.

## Running a Ubuntu Image
We go to Docker Hub and get the command to pull the `ubuntu` image.
`docker pull ubuntu`
We can now see this image in Docker Desktop under images.
We can now **create** a container and run it in interactive mode, `docker run -it ubuntu`, the `it` flag runs it in interactive mode. The container can also be seen in Docker Desktop under containers with a random name. This gives us a very minimal Ubuntu terminal which we can't do much with anyways.

## Creating Our First Dockerfile
We create a simple docker file to run our `c++` "Hello World!" file in a container. The files are in `/hello-docker`. We use the `docker build -t hello-docker .` command (the `.` at the end is important and signals that the `Dockerfile` is right here) to build an image. The `-t` flag is used to tag the image. Finally we run the container using `docker run hello-docker` which prints out `Hello World!`. We can also run it from the GUI.

## Creating a Rust API
We first create a simple Rust API using `actix-web` which just sends out a "Hello World!" on `localhost:8080/hello`. Now, we will use a multi-stage build, meaning, we build the app in one stage and the final stage copies only the necessary output. It helps us keep images clean, small and secure.
We also create a `.dockerignore` file which excludes files/folder to exclude from the build context (like `.gitignore`). This helps:
- Speeds up builds
- Reduces image size (Not much for our example since we are using a multi-stage build)
- Avoid leaking secrets
Again, we build the Docker Image with `docker build -t docker-api` and run the image with `docker run --name rust-api --env-file .env -p 8080:8080 docker-api`. The `--name` tag is used to name the container, `--env-file` is used to specify the env file to use and `-p` is used for port forwarding, the port inside the container is forwarded to the host machine. It works as `<host-machine-port>:<container-port>`.
## Hot Reloading
To enable hot reloading in our docker application, we can do this using,
`docker run --name hmr -it -p 8080:8080 -v $(pwd):/app hot-reloading:latest`
The `-v` tag here is used to mount the current directory `pwd` to the `/app` directory inside the container which makes sure that whenever the current files change, so do the ones inside the container.
## Better Hot Reloading with a React App
Since Rust is not really made for Hot Reloading, lets have a simple `Next.Js` project which we run inside this container that completely mimics our current files. We create a simple `Dockerfile` with a `run dev` command. Now we need to mount the current working directory with `$(pwd)` to the `/app` directory inside the container.
`docker run --name Next-HOT -p 3000:3000 -v "$(pwd):/app" -v /app/node_modules next-docker:latest`

# Docker Compose
Since running all these commands in the terminal to create volumes, forward ports is too much, we have a way, called Docker Compose to automate this process.
