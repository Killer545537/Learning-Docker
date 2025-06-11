use actix_web::{App, HttpResponse, HttpServer, Responder, get};
use anyhow::{Context, Result};
use dotenvy::dotenv;
use std::env;

#[get("/hello")]
async fn hello_word() -> impl Responder {
    HttpResponse::Ok().body("Hello World! I am Srijan Mahajan!")
}

#[actix_web::main]
async fn main() -> Result<()> {
    dotenv().ok();

    let address = env::var("ADDRESS").context("$ADDRESS not set")?;
    let port: u16 = env::var("PORT")
        .context("$PORT not set")?
        .parse()
        .context("$PORT must be a valid u16")?;

    println!("Server started successfully");

    HttpServer::new(move || App::new().service(hello_word))
        .bind((address.as_str(), port))?
        .run()
        .await
        .context("Failed to start an HTTP server")
}
