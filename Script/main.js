// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const typedText = document.getElementById("typedText");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("closeChatbot");
const chatbotInput = document.getElementById("chatbotInput");
const sendMessage = document.getElementById("sendMessage");
const chatbotMessages = document.getElementById("chatbotMessages");

// Typing Effect
const texts = [
  "QA Automation Engineer",
  "Backend Developer",
  "Manual & Automation Testing ",
  "Software Engineer in Test",
  "API & Database Testing",
  "Problem Solver",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Mobile Navigation
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Project Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Chatbot Functionality
chatbotToggle.addEventListener("click", () => {
  chatbot.classList.add("active");
});

closeChatbot.addEventListener("click", () => {
  chatbot.classList.remove("active");
});

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(isUser ? "user-message" : "bot-message");
  messageDiv.textContent = message;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

sendMessage.addEventListener("click", () => {
  const message = chatbotInput.value.trim();
  if (message) {
    addMessage(message, true);
    chatbotInput.value = "";

    // Simple bot responses
    setTimeout(() => {
      if (
        message.toLowerCase().includes("hi") ||
        message.toLowerCase().includes("hello")
      ) {
        addMessage("Hello! How can I help you today?");
      } else if (message.toLowerCase().includes("project")) {
        addMessage(
          "I've worked on various projects including e-commerce dashboards, test automation frameworks, and CI/CD pipelines. You can check them out in the Projects section!"
        );
      } else if (message.toLowerCase().includes("skill")) {
        addMessage(
          "My skills include JavaScript, React, Node.js, Java, Selenium, Cypress, and more. See the Skills section for details."
        );
      } else if (message.toLowerCase().includes("contact")) {
        addMessage(
          "You can reach me via email at siddharam@example.com or through the contact form on this page."
        );
      } else if (message.toLowerCase().includes("resume")) {
        addMessage(
          "You can download my resume using the download button at the top of the page or the floating button at the bottom right."
        );
      } else {
        addMessage(
          "I'm a simple chatbot. For more detailed information, please check the relevant sections of my portfolio or contact me directly."
        );
      }
    }, 500);
  }
});

chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage.click();
  }
});

// Initialize typing effect
document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".card, .timeline-item, .skill-category")
  .forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

document.getElementById("year").textContent = new Date().getFullYear();

// ========== 3D SPHERE FUNCTIONALITY ==========

// 3D Sphere Functionality
function init3DSphere() {
  const sphereContainer = document.getElementById("sphereContainer");
  const profileImg = document.getElementById("profileImg");
  const sphere = document.getElementById("sphere");

  // Check counter for alternate display
  let viewCounter = localStorage.getItem("viewCounter") || 0;
  viewCounter = parseInt(viewCounter);

  if (viewCounter % 2 === 0) {
    // Even count - Show 3D sphere
    profileImg.classList.add("hidden");
    sphereContainer.classList.add("active");
    create3DSphere();
  } else {
    // Odd count - Show profile image
    profileImg.classList.remove("hidden");
    sphereContainer.classList.remove("active");
  }

  // Increment counter for next time
  localStorage.setItem("viewCounter", viewCounter + 1);
}

function create3DSphere() {
  const sphere = document.getElementById("sphere");
  if (!sphere) return;

  sphere.innerHTML = ""; // Clear existing content

  const totalIcons = 50;
  const iconsArray = [
    "fab fa-html5",
    "fab fa-css3",
    "fab fa-js",
    "fab fa-react",
    "fab fa-node-js",
    "fab fa-git",
    "fab fa-npm",
    "fab fa-microsoft",
    "fab fa-java",
    "fab fa-python",
    "fab fa-aws",
    "fab fa-docker",
    "fab fa-github",
    "fas fa-database",
    "fas fa-code",
    "fas fa-cloud",
    "fas fa-server",
    "fas fa-mobile",
    "fas fa-bolt",
    "fas fa-cogs",
  ];

  // Create icons
  for (let i = 0; i < totalIcons; i++) {
    let icon = document.createElement("i");
    icon.className = iconsArray[i % iconsArray.length] + " icon-3d";
    sphere.appendChild(icon);
  }

  const icons = document.querySelectorAll(".icon-3d");
  const radius = 150;
  let rotationX = 0,
    rotationY = 0;
  let targetX = 0,
    targetY = 0;
  let autoRotateX = 0,
    autoRotateY = 0.01;
  const smoothFactor = 0.05;

  // Position icons in 3D sphere
  icons.forEach((icon, index) => {
    let phi = Math.acos(1 - (2 * (index + 0.5)) / totalIcons);
    let theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

    let x = radius * Math.sin(phi) * Math.cos(theta);
    let y = radius * Math.sin(phi) * Math.sin(theta);
    let z = radius * Math.cos(phi);

    icon.dataset.x = x;
    icon.dataset.y = y;
    icon.dataset.z = z;
  });

  function animateIcons() {
    // Auto rotation
    rotationX += autoRotateX;
    rotationY += autoRotateY;

    // Smooth mouse movement
    rotationX += (targetX - rotationX) * smoothFactor;
    rotationY += (targetY - rotationY) * smoothFactor;

    icons.forEach((icon) => {
      let x = parseFloat(icon.dataset.x);
      let y = parseFloat(icon.dataset.y);
      let z = parseFloat(icon.dataset.z);

      let cosX = Math.cos(rotationX);
      let sinX = Math.sin(rotationX);
      let cosY = Math.cos(rotationY);
      let sinY = Math.sin(rotationY);

      // Rotate around X
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotate around Y
      let x2 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      icon.style.transform = `translate3d(${x2}px, ${y1}px, ${z2}px)`;

      // Opacity based on Z position
      let opacity = (z2 + radius) / (2 * radius);
      icon.style.opacity = opacity * 0.8 + 0.2;

      // Scale based on Z position
      let scale = 0.7 + ((z2 + radius) / (2 * radius)) * 0.6;
      icon.style.fontSize = `${scale * 1.3}rem`;
    });

    requestAnimationFrame(animateIcons);
  }

  // Mouse movement effect
  document.addEventListener("mousemove", (event) => {
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    targetX = ((event.clientY - centerY) / centerY) * (Math.PI / 2);
    targetY = ((event.clientX - centerX) / centerX) * (Math.PI / 2);
  });

  // Touch movement for mobile
  document.addEventListener("touchmove", (event) => {
    if (event.touches.length > 0) {
      let touch = event.touches[0];
      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      targetX = ((touch.clientY - centerY) / centerY) * (Math.PI / 2);
      targetY = ((touch.clientX - centerX) / centerX) * (Math.PI / 2);
    }
  });

  animateIcons();
}

// ========== INITIALIZE WHEN PAGE LOADS ==========

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Start typing effect
  if (typedText) {
    setTimeout(typeEffect, 1000);
  }

  // Initialize 3D sphere
  setTimeout(init3DSphere, 100);
});
