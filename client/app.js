const form = document.getElementById("reviewForm");
const previousReviews = document.getElementById("previousReviews");

async function getReviews() {
  const response = await fetch(
    "https://assessment-week4-visitorguestbook.onrender.com/reviews"
  );
  const reviews = await response.json();

  console.log(reviews);

  reviews.forEach(function (review) {
    const reviewContainer = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    const p3 = document.createElement("p3");
    const p4 = document.createElement("p4");
    const deleteButton = document.createElement("deletebutton");

    h2.textContent = review.subject;
    p.textContent = review.message;
    p2.textContent = `Reviewed by: ${review.reviewer} | `;
    p3.textContent = `On: ${review.date} | `;
    p4.textContent = `Rating: ${review.rating} \u2605`;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteReview(review.id);
    });

    reviewContainer.appendChild(deleteButton);
    reviewContainer.appendChild(h2);
    reviewContainer.appendChild(p2);
    reviewContainer.appendChild(p3);
    reviewContainer.appendChild(p4);
    reviewContainer.appendChild(p);

    previousReviews.appendChild(reviewContainer);
  });
}

getReviews();

async function handleSubmit(event) {
  console.log("handlesubmit"); //added to test
  event.preventDefault();
  const reviewer = event.target.reviewer.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;
  const rating = event.target.rating.value;

  // Check if any field is empty
  if (!reviewer || !subject || !message || !rating) {
    // Display error message
    const errorElement = document.getElementById("error");
    errorElement.textContent =
      "Please fill in all fields and choose the star rating.";
    return; // Stop form submission
  }

  console.log({
    reviewer: reviewer,
    subject: subject,
    message: message,
    rating: rating,
  });

  await fetch(
    "https://assessment-week4-visitorguestbook.onrender.com/reviews",
    {
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
    }
  );
  location.reload();
}

form.addEventListener("submit", handleSubmit);

async function deleteReview(reviewId) {
  const response = await fetch(
    `https://assessment-week4-visitorguestbook.onrender.com/reviews/${reviewId}`,
    {
      method: "DELETE",
    }
  );

  location.reload();
}
