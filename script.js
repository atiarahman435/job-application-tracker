// =======================
// Job Data
// =======================

const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "none",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create modern and responsive web experiences.",
    status: "none",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into powerful visuals.",
    status: "none",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Maintain scalable backend systems.",
    status: "none",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Design clean and user-friendly interfaces.",
    status: "none",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build modern web applications.",
    status: "none",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Work on scalable startup products.",
    status: "none",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build scalable web platforms.",
    status: "none",
  },
];

// =======================
// DOM Elements
// =======================

const jobsContainer = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");
const tabCountText = document.getElementById("tabCountText");
const tabButtons = document.querySelectorAll("[data-tab]");

let activeTab = "all";

// =======================
// Filter Function
// =======================

function getFilteredJobs() {
  if (activeTab === "all") return jobs;
  if (activeTab === "interview")
    return jobs.filter((job) => job.status === "Interview");
  if (activeTab === "rejected")
    return jobs.filter((job) => job.status === "Rejected");

  return jobs;
}

// =======================
// Render Function
// =======================

function renderJobs() {
  const filteredJobs = getFilteredJobs();

  tabCountText.textContent = filteredJobs.length + " jobs";

  if (filteredJobs.length === 0) {
    jobsContainer.innerHTML = "";
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  let cards = "";

  filteredJobs.forEach((job) => {
    cards += `
      <div class="job-card">
        
        <div class="job-header">
          <div>
            <h3>${job.companyName}</h3>
            <h4>${job.position}</h4>
          </div>

          <button 
            data-id="${job.id}" 
            data-action="delete"
            class="delete-btn">
            🗑️
          </button>
        </div>

        <span class="badge ${
          job.status === "Interview"
            ? "badge-interview"
            : job.status === "Rejected"
            ? "badge-rejected"
            : "badge-default"
        }">
          ${
            job.status === "Interview"
              ? "INTERVIEW"
              : job.status === "Rejected"
              ? "REJECTED"
              : "NOT APPLIED"
          }
        </span>

        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p>${job.description}</p>

        <div class="actions">
          <button 
            data-id="${job.id}" 
            data-action="interview"
            class="btn-interview">
            Interview
          </button>

          <button 
            data-id="${job.id}" 
            data-action="rejected"
            class="btn-rejected">
            Rejected
          </button>
        </div>

      </div>
    `;
  });

  jobsContainer.innerHTML = cards;
}

// =======================
// Button Click Logic
// =======================

jobsContainer.addEventListener("click", function (e) {
  const button = e.target.closest("[data-action]");
  if (!button) return;

  const jobId = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "delete") {
    const index = jobs.findIndex((job) => job.id === jobId);
    if (index !== -1) jobs.splice(index, 1);
  }

  if (action === "interview") {
    const job = jobs.find((job) => job.id === jobId);
    if (job) job.status = "Interview";
  }

  if (action === "rejected") {
    const job = jobs.find((job) => job.id === jobId);
    if (job) job.status = "Rejected";
  }

  renderJobs();
});

// =======================
// Tab Click Logic
// =======================

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    renderJobs();
  });
});

// Initial render
renderJobs();