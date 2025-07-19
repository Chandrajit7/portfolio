function openModal(project) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalGithub = document.getElementById("modalGithub");

  if (project === "rudra") {
    modalTitle.innerText = "RUDRA";
    modalImage.src = "assets/rudra.png";
    modalDescription.innerText = "RUDRA is a drowsiness detection system built using Arduino and IR sensors. It alerts the driver with a buzzer if eyes remain closed for over 3 seconds.";
    modalGithub.href = "https://github.com/yourusername/rudra"; // Replace with actual repo
  } else if (project === "drone") {
    modalTitle.innerText = "Specialized Drone";
    modalImage.src = "assets/drone.png";
    modalDescription.innerText = "A drone equipped with a camera and Raspberry Pi for real-time surveillance and rare plant identification using image classification.";
    modalGithub.href = "https://github.com/yourusername/drone"; // Replace with actual repo
  } else if (project === "evote") {
    modalTitle.innerText = "E-Voting System";
    modalImage.src = "assets/evote.png";
    modalDescription.innerText = "An e-voting platform developed using HTML, CSS, and JavaScript with user login, profile view, and secure voting interface.";
    modalGithub.href = "https://github.com/yourusername/evoting"; // Replace with actual repo
  } else if (project === "fraud") {
    modalTitle.innerText = "Fraud Detection System";
    modalImage.src = "assets/fraud.png";
    modalDescription.innerText = "A machine learning-based system that detects fraudulent transactions using Python and various ML algorithms.";
    modalGithub.href = "https://github.com/yourusername/evoting"; // Replace with actual repo
  } else if (project === "tcga") { 
    modalTitle.innerText = "TCGA Data Analysis";
    modalImage.src = "assets/tcga.png";
    modalDescription.innerText = "A project analyzing The Cancer Genome Atlas (TCGA) data using Python, focusing on cancer research and data visualization.";
    modalGithub.href = "https://github.com/yourusername/evoting"; // Replace with actual repo
  }
}
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Optional: Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};
// Optional: Close modal on Escape key press
