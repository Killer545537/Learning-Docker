FROM rust:1.87-slim-bullseye AS builder
WORKDIR /app
# This is a thing that allows hot reloading
RUN cargo install cargo-watch
# Cache dependencies
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo "fn main() {}" > src/main.rs
RUN cargo build --release
RUN rm -rf src

COPY . .

EXPOSE 8080

CMD ["cargo", "watch", "-x", "run"]