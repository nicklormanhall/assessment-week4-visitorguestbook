const form = document.getElementById("reviewForm");
const previousReviews = document.getElementById("previousReviews");
const error = document.getElementById("error");

async function getReviews() {
  const response = await fetch("http://localhost:8080/reviews");
  const reviews = await response.json();

  console.log(reviews);

  reviews.forEach(function (review) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");
    const p4 = document.createElement("p4");

    h2.textContent = review.subject;
    p.textContent = review.message;
    p2.textContent = `Reviewed by: ${review.reviewer} | `;
    p3.textContent = `On: ${review.date} | `;
    p4.textContent = `Rating: ${review.rating} \u2605`;

    previousReviews.appendChild(h2);
    previousReviews.appendChild(p2);
    previousReviews.appendChild(p3);
    previousReviews.appendChild(p4);
    previousReviews.appendChild(p);
  });
}

getReviews();

function handleSubmit(event) {
  event.preventDefault();
  const reviewer = event.target.reviewer.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;
  const rating = event.target.rating.value;

  // Check if any field is empty -
  if (!reviewer || !subject || !message || !rating) {
    // Display error message
    const errorElement = document.getElementById("error");
    errorElement.textContent =
      "Please fill in all fields and choose the star rating .";
    return; // Stop form submission
  }

  console.log({
    reviewer: reviewer,
    subject: subject,
    message: message,
    rating: rating,
  });

  fetch("http://localhost:8080/reviews", {
    method: "POST",
    body: JSON.stringify({
      reviewer: reviewer,
      subject: subject,
      message: message,
      rating: rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  location.reload();
}

form.addEventListener("submit", handleSubmit);

// Get all the radio buttons
const ratingInputs = document.querySelectorAll('input[name="rating"]');

// Add event listener to each radio button
ratingInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const selectedRating = input.value;
    // console.log("Selected rating:", selectedRating);
  });
});
