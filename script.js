// ======== Date ========
const dateElem = document.getElementById("date");
const today = new Date();
dateElem.textContent = today.toDateString();

// ======== Tasks & Progress ========
const tasks = [task1, task2, task3, task4];
const progressDisplay = document.getElementById("progressDisplay");
const statusMsg = document.getElementById("statusMsg");

const updateBackgroundAndProgress = () => {
  const checkedCount = tasks.filter(t => t.checked).length;
  const total = tasks.length;
  const progress = Math.round((checkedCount / total) * 100);

  // Update progress text
  progressDisplay.textContent = `Progress: ${progress}%`;

  // Update status message
  switch (checkedCount) {
    case 0: statusMsg.textContent = "Let’s start strong!"; break;
    case 1: statusMsg.textContent = "Good start!"; break;
    case 2: statusMsg.textContent = "Making progress!"; break;
    case 3: statusMsg.textContent = "Almost there!"; break;
    case 4: statusMsg.textContent = "You crushed it today!"; break;
  }

  // Update background color
  switch (checkedCount) {
    case 0: document.body.style.backgroundColor = '#f0f0f0'; break;
    case 1: document.body.style.backgroundColor = '#fff4b2'; break;
    case 2: document.body.style.backgroundColor = '#d0f0c0'; break;
    case 3: document.body.style.backgroundColor = '#a8e6a3'; break;
    case 4: document.body.style.backgroundColor = '#70d77e'; break;
  }

  // Save to localStorage
  localStorage.setItem('tasksStatus', JSON.stringify(tasks.map(t => t.checked)));
};

// ======== Restore tasks from localStorage ========
const savedStatus = JSON.parse(localStorage.getItem('tasksStatus'));
if (savedStatus) {
  tasks.forEach((t, i) => t.checked = savedStatus[i]);
}
updateBackgroundAndProgress();

// Add event listeners
tasks.forEach(t => t.addEventListener('change', updateBackgroundAndProgress));

// ======== Project of the Day ========
const projects = [
  "ISS Tracker Dashboard",
  "AI Arabic Project",
  "Website Enhancement",
  "New Arduino Gadget",
  "Read a New Book",
  "Mini Coding Challenge"
];

const todayProjectElem = document.getElementById("todayProject");
// Simple daily rotation based on day of month
const projectIndex = today.getDate() % projects.length;
todayProjectElem.textContent = projects[projectIndex];
