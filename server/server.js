import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

const message = [
  {
    subject: "testing subject",
    message: "test message",
  },
];

app.get("/", function (request, response) {
  response.json("This is my root");
});

app.get("/reviews", function (request, response) {
  response.json(message);
});

app.listen(8080, function () {
  console.log("Set to port 8080");
});
