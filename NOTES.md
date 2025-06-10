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

