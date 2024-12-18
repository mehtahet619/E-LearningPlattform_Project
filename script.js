
("#menu-btn").click(function () {
  ("nav .navigation ul").addClass("active");
});
("#menu-close").click(function () {
  ("nav .navigation ul").removeClass("active");
});

// script.js

async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", fetchData);
  
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("menu-close");
  const navMenu = document.querySelector("nav .navigation ul");
  
  menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
  
  const contactForm = document.querySelector("#contact .form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const formDetails = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch("https://example.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDetails),
        });
        const result = await response.json();
        console.log("Form submission successful:", result);
      } catch (error) {
        console.error("Form submission error:", error);
      }
    });
  }
  