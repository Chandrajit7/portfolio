// ========== PROJECT MODAL FUNCTIONALITY ==========

function openProjectModal(projectId) {
  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalProjectContent");

  const projects = {
    rudra: {
      title: "RUDRA – Driver Drowsiness Detection",
      image: "pic.png",
      description: `
        <ul style="text-align: left;">
          <li>Real-time eye-closure detection using Arduino Nano & QRD1114 sensor.</li>
          <li>Buzzer alert activates when eye is closed for >2 seconds.</li>
          <li>Designed for safety in driving environments.</li>
        </ul>
        <a href="https://github.com/Chandrajit7/Rudra.git" class="github-button" target="_blank">GitHub Repo</a>
      `
    },

    heartbeat: {
      title: "Heartbeat Detection System",
      image: "heartbeat.png",
      description: `
        <ul style="text-align: left;">
          <li>Pulse monitoring using Arduino and analog heartbeat sensor.</li>
          <li>Real-time pulse displayed on serial monitor.</li>
          <li>LED blinks with detected pulse.</li>
        </ul>
        <a href="https://github.com/yourusername/heartbeat-detector" class="github-button" target="_blank">GitHub Repo</a>
      `
    },

    drone: {
      title: "Smart Drone for Delivery Surveillance",
      image: "https://dfimg.dfrobot.com/5f5e1778c913a99430e40127/makelog/19b4c8ed010c33887f79a2417de0e830.jpg",
      description: `
        <ul style="text-align: left;">
          <li>Custom-built quadcopter with GPS and camera for delivery monitoring.</li>
          <li>Programmed path-following via flight controller.</li>
          <li>Used in prototype demo for smart city logistics.</li>
        </ul>
        <a href="https://github.com/yourusername/smart-drone" class="github-button" target="_blank">GitHub Repo</a>
      `
    },

    gun: {
      title: "Gun Detection using YOLO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZPB9WIzSPea7PlMeN0yUgJa3G5mCKTfgyg&s",
      description: `
        <ul style="text-align: left;">
          <li>Trained Model using Cascade for gun detection in real-time video/photo feeds.</li>
          <li>Built a custom dataset of weapon images.</li>
          <li>Deployed with OpenCV for live detection.</li>
        </ul>
        <a href="https://github.com/Chandrajit7/gun-detection-.git" class="github-button" target="_blank">GitHub Repo</a>
      `
    },

    evote: {
      title: "E-Voting System",
      image: "https://www.ids.ac.uk/wp-content/uploads/2024/05/Blognews-story-1024x600-px-1.jpg",
      description: `
        <ul style="text-align: left;">
          <li>Static web-based voting portal built with HTML, CSS, and JavaScript.</li>
          <li>Includes login, voter profile, voting feature, and predefined credentials.</li>
          <li>UI designed for demo of secure voting interaction.</li>
        </ul>
        <a href="https://github.com/Chandrajit7/evoting.git" class="github-button" target="_blank">GitHub Repo</a>
      `
    },

    // shop: {
    //   title: "Android Shopping Interface",
    //   image: "shop.png",
    //   description: `
    //     <ul style="text-align: left;">
    //       <li>Product list with images, price, quantity, rating, and add-to-cart functionality.</li>
    //       <li>Includes “Go to Cart” button and quantity selector.</li>
    //       <li>Built on Android Studio in Java as part of existing login system.</li>
    //     </ul>
    //     <a href="https://github.com/yourusername/shopping-app" class="github-button" target="_blank">GitHub Repo</a>
    //   `
    // },

    fraud: {
      title: "Credit Card Fraud Detection",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirwq_3Z4oPlxOY_bXiP5JM_0oghQ2bcNUfg&shttps://iet.ucdavis.edu/sites/g/files/dgvnsk14931/files/styles/sf_landscape_16x9/public/media/images/Untitled%20design-23_0.png?h=d1cb525d&itok=UyjeARyX",
      description: `
        <ul style="text-align: left;">
          <li>ML model to classify legitimate vs fraudulent transactions.</li>
          <li>Used Logistic Regression, Random Forest, XGBoost on imbalanced dataset.</li>
          <li>Achieved 95%+ precision using SMOTE + undersampling.</li>
        </ul>
        <a href="https://github.com/Chandrajit7/Credit-Card-Fraud-Detection-.git" class="github-button" target="_blank">GitHub Repo</a>
      `
    },

    tcga: {
      title: "Cancer Type Classification (TCGA)",
      image: "https://www.surrey.ac.uk/sites/default/files/styles/image_gallery/public/2019-12/cancer-cells-1200x675.jpg?itok=3-IpM8hd",
      description: `
        <ul style="text-align: left;">
          <li>Processed TCGA gene expression data for multi-class cancer prediction.</li>
          <li>Trained SVM, Random Forest, XGBoost; visualized confusion matrix.</li>
          <li>Preprocessed large-scale biomedical data with normalization + PCA.</li>
        </ul>
        <a href="https://github.com/yourusername/tcga-cancer-classifier" class="github-button" target="_blank">GitHub Repo</a>
      `
    }
  };

  const project = projects[projectId];
  if (!project) return;

  content.innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="${project.title}" />
    ${project.description}
  `;

  modal.style.display = "block";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

function toggleChatUI() {
  const chatBox = document.getElementById("chatbot");
  const miniBtn = document.getElementById("chatbotMini");
  chatBox.classList.toggle("hidden");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text === "") return;

  const chatBody = document.getElementById("chatBody");

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = text;
  chatBody.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.textContent = getBotResponse(text);
  chatBody.appendChild(botMsg);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hi")) return "Hello! I'm Chandrajit Banerjee, a B.Tech student at BCREC. How can I assist you today?";
  if (input.includes("project")) return "You can scroll down to view my projects! or you can go to my GitHub profile to see all my projects:";
  if (input.includes("email")) return "You can reach me at chandrajitbanerjee11@gmail.com or chandrajitbanerjee.bcrec@gmail.com.";
  if (input.includes("number")) return "Sure! Here's my contact number: +91 6289317043 (WhatsApp preferred).";
  if (input.includes("linkedin")) return "Sure! Here's my LinkedIn:https://linkedin.com/in/chandrajit-banerjee-042912293";
  if (input.includes("github")) return "Sure! Here's my GitHub: https://github.com/Chandrajit7";
  if (input.includes("address")) return "I'm currently based in Kolkata, West Bengal, India.";
  if (input.includes("where are you from")) return "I'm currently based in Kolkata, West Bengal, India.";

  return "I'm still learning! Try asking about my skills or projects.";
}
// ========== DARK MODE TOGGLE WITH SUN/MOON ICON ==========

// Wait for the DOM to finish loading!
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const sunIcon = "🌞";
  const moonIcon = "🌙";
  
  function setToggleIcon(isDark) {
    if (darkModeToggle) {
      darkModeToggle.textContent = isDark ? moonIcon : sunIcon;
    }
  }
  
  // On page load: set mode based on preference
  const saved = localStorage.getItem('darkMode');
  if (saved === 'enabled') {
    document.body.classList.add('dark-mode');
    setToggleIcon(true);
  } else {
    document.body.classList.remove('dark-mode');
    setToggleIcon(false);
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      setToggleIcon(isDark);
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    });
  }
});
