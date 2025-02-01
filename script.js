function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  
  // Check for saved user preference in localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }
  
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  
    // Save preference to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });