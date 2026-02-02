document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Great's Furniture — feature coming soon 🚀");
  });
});
// Select all cards and buttons
const cards = document.querySelectorAll(".Cards");
const buttons = document.querySelectorAll(".Cards button");

// Card click
cards.forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h2").innerText;
        alert(`You clicked on ${title}`);
    });
});

// Button click (stop card click bubbling)
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Viewing all products...");
    });
}); 