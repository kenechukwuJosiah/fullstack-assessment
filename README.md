# Fullstack Assessment

This is a fullstack assessment project that includes a backend API using Node.js and Express, and a frontend using Vue.js.

## Setup
### Prisma

1. Run `npx prisma migrate dev` to create the database
2. Run `npx prisma db seed` to seed the database
3. Run `npx prisma generate` to generate the Prisma client

### Backend

The backend API can be ran in two ways:

#### Using Docker

1. Install Docker on your machine
2. Run `docker build -t backend .` in the root directory of the project
3. Run `docker run -p 4000:4000 backend` to start the container
4. Open your web browser and navigate to `http://localhost:4000`

#### Using Docker Compose

1. Install Docker and Docker Compose on your machine
2. Run `docker-compose up` in the root directory of the project
3. Open your web browser and navigate to `http://localhost:4000`

## Endpoints

### Backend

#### GET /dummy/data

Returns a JSON object with a message and an array of numbers.

#### POST /auth/register

Registers a new user with the provided email and password. Returns a JSON object with a message and the created user.

#### POST /auth/login

Logs in an existing user with the provided email and password. Returns a JSON object with a message and the logged in user.

#### GET /user/stats

Returns a JSON object with the user's login count and last login date.

#### POST /user/webhook/receive

Receives a webhook request and logs it to the console.


### Frontend

1. Install Node.js and npm on your machine
2. Run `npm install` in the frontend directory
3. Run `npm run serve` to start the development server
4. Open your web browser and navigate to `http://localhost:3000`

#### GET /

Returns the dashboard page.

#### GET /text-to-speech

Returns the text-to-speech page.

#### GET /animation

Returns the animation page.

#### GET /virtual-lab

Returns the virtual lab page.

## Seeding

To seed the database with some data, run the following command in the root directory of the project:
