/ 1) Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Open live site button
const openLive = document.getElementById("openLive");
openLive.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(window.location.href, "_blank");
});

// 3) Copy site link
const copyLink = document.getElementById("copyLink");
const status = document.getElementById("status");

copyLink.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(window.location.href).then(() => {
    status.textContent = "✅ Site link copied!";
    setTimeout(() => (status.textContent = ""), 2000);
  });
});

// 4) Theme toggle (simple)
const themeBtn = document.getElementById("themeBtn");
let light = false;

themeBtn.addEventListener("click", () => {
  light = !light;

  if (light) {
    document.documentElement.style.setProperty("--bg", "#f7f7fb");
    document.documentElement.style.setProperty("--text", "#101321");
    document.documentElement.style.setProperty("--muted", "rgba(16,19,33,0.70)");
    document.documentElement.style.setProperty("--panel", "rgba(16,19,33,0.06)");
    status.textContent = "🌞 Light mode";
  } else {
    document.documentElement.style.setProperty("--bg", "#0b1220");
    document.documentElement.style.setProperty("--text", "#e9eefc");
    document.documentElement.style.setProperty("--muted", "rgba(233,238,252,0.72)");
    document.documentElement.style.setProperty("--panel", "rgba(255,255,255,0.06)");
    status.textContent = "🌙 Dark mode";
  }

  setTimeout(() => (status.textContent = ""), 1500);
});

// 5) Contact form (demo)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "✅ Message sent (demo). In real projects we connect it to email/backend.";
  form.reset();
  setTimeout(() => (formMsg.textContent = ""), 3000);
})
