// ======== DATE DISPLAY ========
function updateDate() {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  document.getElementById("date").textContent = today.toLocaleDateString('en-US', options);
}
updateDate();

// ======== TAB SWITCHING ========
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active class to selected
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ======== DAILY GOALS PROGRESS ========
const tasks = document.querySelectorAll(".task input");
const progressFill = document.getElementById("progressFill");
const progressDisplay = document.getElementById("progressDisplay");

function updateProgress() {
  const total = tasks.length;
  const completed = [...tasks].filter(task => task.checked).length;
  const percent = Math.round((completed / total) * 100);

  progressFill.style.width = percent + "%";
  progressDisplay.textContent = `${percent}% Complete`;

  // Update status message
  const statusMsg = document.getElementById("statusMsg");
  if (percent === 100) {
    statusMsg.textContent = "Great job! All tasks done!";
  } else if (percent > 0) {
    statusMsg.textContent = "Keep going!";
  } else {
    statusMsg.textContent = "Let’s start strong!";
  }
}

// Attach listeners
tasks.forEach(task => task.addEventListener("change", updateProgress));

// ======== PROJECT OF THE DAY ========
const projects = [
  "Build Arduino ISS Tracker",
  "Complete AI Dialect Project",
  "Read Chapter 5 of Babel",
  "Create Scratch Multiplayer Game"
];

function showRandomProject() {
  const randomIndex = Math.floor(Math.random() * projects.length);
  document.getElementById("todayProject").textContent = projects[randomIndex];
}
showRandomProject();

// ======== JOURNAL SAVE ========
const notes = document.getElementById("notes");

// Load saved notes
if (localStorage.getItem("journalNotes")) {
  notes.value = localStorage.getItem("journalNotes");
}

// Save on change
notes.addEventListener("input", () => {
  localStorage.setItem("journalNotes", notes.value);
});
