const express = require("express"); // web framework
// const fetch = require("node-fetch"); // for making AJAX requests
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");
const ck = require("ckey");

// //"type": "module", Enables ES6 modules
// import * as dotenv from "dotenv";
// dotenv.config();
// import ck from "ckey";

// import express from "express";
// import fetch from "node-fetch";
// import path from "path";

// put environmental variables defined in .env file on process.env
require("dotenv").config();

const app = express();

// serve files / assets from the dist folder
app.use(express.static("dist"));

// in response to `GET /` requests, send the file `dist/index.html`
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/test/", (request, response) => {
  response.json("does this route work");
});

// `GET /cors` requests trigger this callback (like controller action)
// `request` object contains request's query string, wildcard params, etc
// `response` object has `send` method for sending our server response
app.get("/cors", (request, response) => {
  console.log(`Fetching: ${request.query.url}`);

  fetch(request.query.url) // AJAX request to URL provided in query string
    .then((apiResponse) => apiResponse.json()) // parse response as JSON
    .then((data) => response.send(data)) // send parsed data to frontend
    .catch((error) => response.send(error));
});

// Heroku sets process.env.PORT in production; use 8000 in dev
const PORT = process.env.PORT || 8000;
// start up a server listening at PORT; on success, log a message
app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
});
