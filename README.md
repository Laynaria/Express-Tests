# Workshop Test Demo

This project is a Demo workshop for my students at Wild Code School to learn how to do some testing with Jest and Supertest

## Steps :

### 1- Initialization

- `npm init`

- `npm install express nodemon jest supertest`
- Create an index.js file
- Create two scripts in `package.json` : dev to run server, test to launch tests

### 2- Express Implementation

- Require express

- Use express, and listen the server based on a port variable.
- Use express json and create a `/` route showing hello world to check if server works
- create a server.js file and transfer it all the logic except port and listen inside a server function which will return app.
- export that function and import it from index.js

### 3- Data creation and real routes

- create a data.json file, and import it in your server.js

- create a `/wilders` route in your server which will return the data of four wilders from your json
- create a dynamic route which will return a wilder based on its id, or an error if this wilder doesn't exist
- create a controllers folder and a wildersController.js file inside it
- switch the logic from your routes into two functions called `read` and `browse` in your controller

### 4- Tests

- create a `__tests__` folder, and create three files named `data.test.js`, `server.test.js`, `wildersController.test.js` inside.

- Check in each respective file if the data.js, server.js and wildersController.js files exist

- Create some tests to see if data exist in `data.test.js`

- Create some tests to see if the `read` and `browse` functions exist in `wildersController.test.js`

- In `server.test.js` require supertest and do some asynchronous testing on the `/wilders` and `/wilders/:id` routes. Hint : `await supertest(server()).get()`
