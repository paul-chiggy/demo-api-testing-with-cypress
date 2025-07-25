# demo-api-testing-with-cypress

Demo project with Cypress for API testing

## Intro

This small NodeJS project show-cases a test automation implementation for testing of REST API's based on Cypress testing framework, using Typescript and  multy-layer architecture (like the Test layer, Business layer with Stepper and Asserter, and a Core layer with the Cypress framework itself).

## Description

This implementation encompases several basic test-cases testing the weather forecast and TV series functionalities of  two small open online API's at https://api.openweathermap.org/ and https://api.tvmaze.com/.

Among the assertions you can see various types to API testing, like:
- smoke - checking response codes;
- performance - checking response times;
- contract - verifying correct data types
- data - testing if data in the response is as expected.

## How to run
### Pre-requisites
- Node JS
- Git
- Browsers (like Chrome or Firefox) - if you would like to run it in the GUI mode
- Docker - if you would like to run it in Docker

### Steps
1. Checkout this project from Git
2. Install dependancies with `npm install`
3. Run in the UI mode with `npm run cy:open`
4. Or run in the CLI mode with `npm run cy:run`
5. Or run it in Docker with `docker-compose up e2e`