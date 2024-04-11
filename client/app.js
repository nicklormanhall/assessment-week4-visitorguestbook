// const form = document.getElementById("messageForm");
const previousReviews = document.getElementById("previousReviews");

async function getReviews() {
  const response = await fetch("http://localhost:8080/reviews");
  const reviews = await response.json();

  console.log(reviews);

  reviews.forEach(function (review) {
    // DOM manipulation to put the games onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");
    const p4 = document.createElement("p4");

    h2.textContent = review.subject;
    p.textContent = review.message;
    p2.textContent = review.reviewer;
    p3.textContent = review.date;
    p4.textContent = review.rating;

    previousReviews.appendChild(h2);
    previousReviews.appendChild(p);
    previousReviews.appendChild(p2);
    previousReviews.appendChild(p3);
    previousReviews.appendChild(p4);
  });
}

getReviews();
