// Date Display
const dateElement = document.getElementById("date");
const today = new Date();
dateElement.textContent = today.toDateString();

// Tabs Functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// Goals Checkbox + Background Color
const goalCheckboxes = document.querySelectorAll("#goal-list input");
const body = document.body;

function updateBackground() {
  const checkedCount = document.querySelectorAll("#goal-list input:checked").length;
  const colors = ["#f8f9fa", "#d4edda", "#c3e6cb", "#a5d6a7", "#81c784"];
  body.style.background = colors[checkedCount] || colors[0];
}

goalCheckboxes.forEach(box => {
  box.addEventListener("change", () => {
    localStorage.setItem(box.dataset.goal, box.checked);
    updateBackground();
  });

  // Load previous state
  const saved = localStorage.getItem(box.dataset.goal) === "true";
  box.checked = saved;
});

updateBackground();

// Daily Reset at midnight
setInterval(() => {
  const now = new Date();
  if (now.getHours() === 0 && now.getMinutes() === 0) {
    goalCheckboxes.forEach(box => {
      box.checked = false;
      localStorage.setItem(box.dataset.goal, false);
    });
    updateBackground();
  }
}, 60000);

// Project of the Day
const projects = [
  "Build a mini weather station",
  "Write a blog post",
  "Learn a new Arduino concept",
  "Create a simple game",
  "Experiment with ESP32 LCD"
];

document.getElementById("get-project").addEventListener("click", () => {
  const randomProject = projects[Math.floor(Math.random() * projects.length)];
  document.getElementById("project-text").textContent = randomProject;
});
