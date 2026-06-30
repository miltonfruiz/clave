# Gestor de Contraseñas
## Table of Contents
1. [Stack](#stack)
2. [Installation](#installation)
3. [Docker](#docker)
4. [Endpoints](#endpoints)
5. [Security](#security)

## Stack
* Node.js
* Express.js
* MongoDB
* Mongoose

## Installation
To install the project, run the following commands:
```bash
npm install
npm run start
```
Make sure to set the `MONGO_URI` environment variable.

## Docker
To run the project using Docker, follow these steps:
1. Build the image: `docker build -t gestor-de-contrasenas .`
2. Run the container: `docker run -p 5000:5000 gestor-de-contrasenas`

## Endpoints
The following endpoints are available:
### Auth
* **POST /api/auth/register**: register a new user
* **POST /api/auth/login**: login user
### Passwords
* **GET /api/passwords**: list passwords (requires auth)
* **POST /api/passwords**: create password (requires auth)
* **GET /api/passwords/:id**: get password by id (requires auth)
* **PUT /api/passwords/:id**: update password (requires auth)
* **DELETE /api/passwords/:id**: delete password (requires auth)

## Security
* The project uses JSON Web Tokens (JWT) for authentication.
* Passwords are hashed using bcrypt.
* The `MONGO_URI` environment variable should be set to a secure MongoDB connection string.
* The project uses HTTPS (TLS) for secure communication.
* The `Password` model has the following fields:
	+ `name: String`
	+ `username: String`
	+ `password: String`
	+ `description: String`
* The project is configured to run on port 5000, and the MongoDB connection string is set to `process.env.MONGO_URI`.