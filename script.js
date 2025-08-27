// Switch tabs
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Journal functionality
function saveJournal() {
  const input = document.getElementById('journalInput').value;
  if (!input.trim()) return;
  const entryDiv = document.createElement('div');
  entryDiv.textContent = new Date().toLocaleDateString() + ": " + input;
  document.getElementById('journalEntries').appendChild(entryDiv);
  document.getElementById('journalInput').value = "";
}

// Project functionality
let projects = JSON.parse(localStorage.getItem('projects')) || [];

function addProject() {
  const projectInput = document.getElementById('projectInput');
  const projectName = projectInput.value.trim();
  if (!projectName) return;
  projects.push(projectName);
  localStorage.setItem('projects', JSON.stringify(projects));
  projectInput.value = "";
  renderProjects();
  pickProjectOfTheDay();
}

function deleteProject(index) {
  projects.splice(index, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
  renderProjects();
  pickProjectOfTheDay();
}

function renderProjects() {
  const list = document.getElementById('projectList');
  list.innerHTML = "";
  projects.forEach((proj, index) => {
    const li = document.createElement('li');
    li.textContent = proj;
    const delBtn = document.createElement('button');
    delBtn.textContent = "X";
    delBtn.onclick = () => deleteProject(index);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function pickProjectOfTheDay() {
  if (projects.length === 0) {
    document.getElementById('projectOfTheDay').textContent = "No projects available.";
    return;
  }
  const randomProject = projects[Math.floor(Math.random() * projects.length)];
  document.getElementById('projectOfTheDay').textContent = randomProject;
}

// On page load
window.onload = () => {
  renderProjects();
  pickProjectOfTheDay();
};
