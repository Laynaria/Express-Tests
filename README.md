This project is a Demo workshop for my students at Wild Code School to learn how to do some testing with Jest and Supertest

Steps :

1- npm init

2- npm install express nodemon

3- touch index.js

4- require express, use it and listen the server on a port variable

5- use express json, and create a basic route to see if server is working

6- create a data json or js file, import it and create a wilders route to return
data of four wilders.

7- create a dynamic route to get a wilder based on an id param and return an error if wilder doesn't exist

8- npm i jest supertest

9- create a jest.config.js file

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```
