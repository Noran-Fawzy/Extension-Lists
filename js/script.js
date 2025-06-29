function toggleTheme() {
document.body.classList.toggle("light");
}

const filterButtons = document.querySelectorAll(".filter-button");
const extensionCards = document.querySelectorAll(".extension-card");

filterButtons.forEach((btn) => {
btn.addEventListener("click", () => {
filterButtons.forEach((b) => b.classList.remove("active"));
btn.classList.add("active");

const filter = btn.textContent.toLowerCase();

extensionCards.forEach((card) => {
const isChecked = card.querySelector("input").checked;
if (filter === "all") {
card.style.display = "flex";
} else if (filter === "active" && isChecked) {
card.style.display = "flex";
} else if (filter === "inactive" && !isChecked) {
card.style.display = "flex";
} else {
card.style.display = "none";
}
});
});
});

const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach((btn) => {
btn.addEventListener("click", () => {
const card = btn.closest(".extension-card");
card.remove();
});
});