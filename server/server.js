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
    reviewer: "Nick",
    date: "11/04/2024 16:28:00",
    rating: 5,
  },
];

app.get("/", function (request, response) {
  response.json("This is my root");
});

app.get("/reviews", function (request, response) {
  // response.json(message);
  const reviews = db.prepare("SELECT * FROM review").all();
  response.json(reviews);
});

app.post("/reviews", function (request, response) {
  const newReview = request.body;

  // response.json(newReview);

  // response.json("test");
  console.log(request.body);
});

app.listen(8080, function () {
  console.log("Set to port 8080");
});
