const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", e => e.preventDefault());
});
