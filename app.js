const express = require("express"); // web framework
// const fetch = require("node-fetch"); // for making AJAX requests
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");

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
  // console.log(`Fetching: ${request.query.url}`);

  fetch(request.query.url) // AJAX request to URL provided in query string
    .then((apiResponse) => apiResponse.json()) // parse response as JSON
    .then((data) => response.send(data)) // send parsed data to frontend
    .catch((error) => response.send(error));
});

// `POST/auth` utilizing alternative Bird API with headers
app.get("/auth", async (req, res) => {
  const authTokenHeaders = {
    "User-Agent":
      "Bird/4.119.0(co.bird.Ride; build:3; iOS 14.3.0) Alamofire/5.2.2",
    "Device-Id": process.env.GUID,
    Platform: "ios",
    "App-Version": "4.119.0",
    "Content-Type": "application/json",
    "Content-Length": "0",
    Authorization: `Bearer ${process.env.REFRESH_AUTH}`,
  };

  const authResponse = await fetch(
    "https://api-auth.prod.birdapp.com/api/v1/auth/refresh/token",
    {
      method: "POST",
      headers: authTokenHeaders,
    }
  );
  // console.log(authResponse);
  const authData = await authResponse.json();
  res.json(authData.access);
});

// `GET/cors` utilizing alternative Bird API with headers
app.get("/bird", async (req, res) => {
  const lat = 38.9072;
  const lon = -77.0369;
  const radius = 5250; //in meters

  const birdHeaders = {
    Authorization: `Bearer ${req.query.auth}`,
    "User-Agent":
      "Bird/4.119.0(co.bird.Ride; build:3; iOS 14.3.0) Alamofire/5.2.2",
    legacyrequest: false,
    "Device-Id": process.env.GUID,
    Platform: "ios",
    "App-Version": "4.119.0",
    Location: JSON.stringify({
      latitude: lat,
      longitude: lon,
      altitude: 500,
      accuracy: 90,
      speed: -1,
      heading: -1,
    }),
  };

  const birdAppURL = `https://api-bird.prod.birdapp.com/bird/nearby?latitude=${lat}&longitude=${lon}&radius=${radius}`;

  const birdResponse = await fetch(birdAppURL, {
    headers: birdHeaders,
  });
  const birdData = await birdResponse.json();

  return res.json(birdData);
});

// Heroku sets process.env.PORT in production; use 8000 in dev
const PORT = process.env.PORT || 8000;
// start up a server listening at PORT; on success, log a message
app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`);
});
