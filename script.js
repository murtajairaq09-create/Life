// ======== Date ========
const dateElem = document.getElementById("date");
const today = new Date();
dateElem.textContent = today.toDateString();

// ======== Tasks & Progress ========
const tasks = [task1, task2, task3, task4];
const progressDisplay = document.getElementById("progressDisplay");
const progressFill = document.getElementById("progressFill");
const statusMsg = document.getElementById("statusMsg");

const updateProgress = () => {
  const checkedCount = tasks.filter(t => t.checked).length;
  const total = tasks.length;
  const progress = Math.round((checkedCount / total) * 100);

  // Update progress bar and text
  progressFill.style.width = progress + "%";
  progressDisplay.textContent = `${progress}% Complete`;

  // Update status message
  switch (checkedCount) {
    case 0: statusMsg.textContent = "Let’s start strong!"; break;
    case 1: statusMsg.textContent = "Good start!"; break;
    case 2: statusMsg.textContent = "Making progress!"; break;
    case 3: statusMsg.textContent = "Almost there!"; break;
    case 4: statusMsg.textContent = "You crushed it today!"; break;
  }

  // Save to localStorage
  localStorage.setItem('tasksStatus', JSON.stringify(tasks.map(t => t.checked)));
};

// Restore tasks from localStorage
const savedStatus = JSON.parse(localStorage.getItem('tasksStatus'));
if (savedStatus) {
  tasks.forEach((t, i) => t.checked = savedStatus[i]);
}
updateProgress();

// Event listeners
tasks.forEach(t => t.addEventListener('change', updateProgress));

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
const projectIndex = today.getDate() % projects.length;
todayProjectElem.textContent = projects[projectIndex];

// ======== Projects Tab ========
const projectsListElem = document.getElementById("projectsList");
projects.forEach(p => {
  const li = document.createElement("li");
  li.textContent = p;
  projectsListElem.appendChild(li);
});

// ======== Tab Navigation ========
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active class
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Add active to clicked tab and corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
