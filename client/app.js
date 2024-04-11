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

    h2.textContent = review.subject;
    p.textContent = review.message;

    previousReviews.appendChild(h2);
    previousReviews.appendChild(p);
  });
}

getReviews();
