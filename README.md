# Random IT Scenario Generator API

This is a simple REST API that generates a random IT-related scenario based on user input.

This project is a REST API built in JavaScript using Node.js, Express, and a test-driven development (TDD) approach.

## Features

- Accepts three inputs:  
  - **Technology** (e.g. Cloud Computing)  
  - **Role** (e.g. System Administrator)  
  - **Environment** (e.g. Cloud Infrastructure)

- Returns a random IT scenario including:  
  - A **challenge**  
  - An **incident**  
  - A **troubleshooting step**

## Tech Stack

- Node.js  
- Express  
- Jest (for testing)  
- Supertest (for HTTP testing)


## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm run dev
```

The server will start on [http://localhost:3000](http://localhost:3000)


## How to Test

Run the tests using:

```bash
npm test
```