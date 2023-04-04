## install 

```
npm install msw --save-dev
```

## mock definition
Create a src/mocks/handlers.js


## Mocking REST API
1. import rest from the msw package
2. Request handler <br>
 specify its method, path, and a function that would return the mocked response. <br>
3. Response resolver <br>
Response resolver is a function that accepts the following arguments:
* `req` : an information about a matching request;
* `res` : a functional utility to create the mocked response;
* `ctx` : a group of functions that help to set a status code, headers, body, etc. of the mocked response.
## Integrate <br>
most common usages of Mock Service Worker in Node is utilizing our request handlers for integration tests
1. Configure server<br>
  5-1. Create a `src/mocks/server.js` file <br>
  5-2. Import setupServer function from the msw package and create a server instance with previously defined request handlers

## Setup
Modify the src/setupTests.js tests setup file

## run test
```
npm run test
```
