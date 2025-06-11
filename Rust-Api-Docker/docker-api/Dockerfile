# Build stage
FROM rust:1.87-slim-bullseye AS builder
WORKDIR /app
COPY . .
RUN cargo build --release

# Runtime stage
FROM debian:bookworm-slim
WORKDIR /app
# This creates a new user with permissions only to run the app
# This is not necessary but usually a good practice
RUN adduser --system --group app
COPY --from=builder /app/target/release/docker-api /app/app
# This allows the user `app` to be able to run app
RUN chown -R app:app /app
# This changes the current user to app
USER app
EXPOSE 8080
ENTRYPOINT [ "./app" ]
