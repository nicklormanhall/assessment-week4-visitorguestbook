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
  const reviews = db.prepare("SELECT * FROM review ORDER BY id DESC").all();
  response.json(reviews);
});

app.post("/reviews", function (request, response) {
  const newReview = request.body;

  console.log(newReview);

  // Insert the new review into the database
  const insertReview = db.prepare(
    "INSERT INTO review (reviewer, subject, message, date, rating) VALUES (?, ?, ?, datetime('now'), ?)"
  );
  const result = insertReview.run(
    newReview.reviewer,
    newReview.subject,
    newReview.message,
    newReview.rating
  );

  // Return the inserted review
  response.json(newReview);
});

app.delete("/reviews/:reviewId", function (request, response) {
  const reviewId = request.params.reviewId;

  const result = db.prepare("DELETE FROM review WHERE id = ?").run(reviewId);
  response.json();
});

app.listen(8080, function () {
  console.log("Set to port 8080");
});
