// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const typedText = document.getElementById("typedText");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contactForm");
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

// Contact Form Submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // EmailJS integration
  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target)
    .then(() => {
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    })
    .catch(() => {
      alert("Sorry, there was an error. Please try again later.");
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

// // DOM Elements
// const themeToggle = document.getElementById("themeToggle");
// const hamburger = document.getElementById("hamburger");
// const navLinks = document.querySelector(".nav-links");
// const typedText = document.getElementById("typedText");
// const filterBtns = document.querySelectorAll(".filter-btn");
// const projectCards = document.querySelectorAll(".project-card");
// const contactForm = document.getElementById("contactForm");
// const chatbotToggle = document.getElementById("chatbotToggle");
// const chatbot = document.getElementById("chatbot");
// const closeChatbot = document.getElementById("closeChatbot");
// const chatbotInput = document.getElementById("chatbotInput");
// const sendMessage = document.getElementById("sendMessage");
// const chatbotMessages = document.getElementById("chatbotMessages");

// // Typing Effect
// const texts = [
//   "Frontend Developer",
//   "SDET",
//   "QA Automation Engineer",
//   "Problem Solver",
// ];
// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeEffect() {
//   const currentText = texts[textIndex];

//   if (isDeleting) {
//     typedText.textContent = currentText.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     typedText.textContent = currentText.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   if (!isDeleting && charIndex === currentText.length) {
//     isDeleting = true;
//     setTimeout(typeEffect, 1000);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     textIndex = (textIndex + 1) % texts.length;
//     setTimeout(typeEffect, 500);
//   } else {
//     setTimeout(typeEffect, isDeleting ? 50 : 100);
//   }
// }

// // Theme Toggle
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   if (document.body.classList.contains("dark-mode")) {
//     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//   } else {
//     themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//   }
// });

// // Mobile Navigation
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// // Project Filtering
// filterBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // Remove active class from all buttons
//     filterBtns.forEach((b) => b.classList.remove("active"));
//     // Add active class to clicked button
//     btn.classList.add("active");

//     const filter = btn.getAttribute("data-filter");

//     projectCards.forEach((card) => {
//       if (filter === "all" || card.getAttribute("data-category") === filter) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });

// // Contact Form Submission
// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Thank you for your message! I will get back to you soon.");
//   contactForm.reset();
// });

// // Chatbot Functionality
// chatbotToggle.addEventListener("click", () => {
//   chatbot.classList.add("active");
// });

// closeChatbot.addEventListener("click", () => {
//   chatbot.classList.remove("active");
// });

// function addMessage(message, isUser = false) {
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");
//   messageDiv.classList.add(isUser ? "user-message" : "bot-message");
//   messageDiv.textContent = message;
//   chatbotMessages.appendChild(messageDiv);
//   chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
// }

// sendMessage.addEventListener("click", () => {
//   const message = chatbotInput.value.trim();
//   if (message) {
//     addMessage(message, true);
//     chatbotInput.value = "";

//     // Simple bot responses
//     setTimeout(() => {
//       if (
//         message.toLowerCase().includes("hi") ||
//         message.toLowerCase().includes("hello")
//       ) {
//         addMessage("Hello! How can I help you today?");
//       } else if (message.toLowerCase().includes("project")) {
//         addMessage(
//           "I've worked on various projects including e-commerce dashboards, test automation frameworks, and CI/CD pipelines. You can check them out in the Projects section!"
//         );
//       } else if (message.toLowerCase().includes("skill")) {
//         addMessage(
//           "My skills include JavaScript, React, Node.js, Java, Selenium, Cypress, and more. See the Skills section for details."
//         );
//       } else if (message.toLowerCase().includes("contact")) {
//         addMessage(
//           "You can reach me via email at siddharam@example.com or through the contact form on this page."
//         );
//       } else if (message.toLowerCase().includes("resume")) {
//         addMessage(
//           "You can download my resume using the download button at the top of the page or the floating button at the bottom right."
//         );
//       } else {
//         addMessage(
//           "I'm a simple chatbot. For more detailed information, please check the relevant sections of my portfolio or contact me directly."
//         );
//       }
//     }, 500);
//   }
// });

// chatbotInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     sendMessage.click();
//   }
// });

// // Initialize typing effect
// document.addEventListener("DOMContentLoaded", typeEffect);

// // Scroll animations
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// }, observerOptions);

// // Observe elements for animation
// document
//   .querySelectorAll(".card, .timeline-item, .skill-category")
//   .forEach((el) => {
//     el.style.opacity = 0;
//     el.style.transform = "translateY(20px)";
//     el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
//     observer.observe(el);
//   });

// document.getElementById("year").textContent = new Date().getFullYear();
