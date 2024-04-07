document.addEventListener("DOMContentLoaded", function() {
  const indexToggle = document.getElementById("toggleButton1"); // For index.html
  const blogToggle = document.getElementById("toggleButton2"); // For blog.html
  const header = document.getElementById("header")

  function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
      // If dark mode is enabled, disable it
      body.classList.remove("dark-mode");      
      header.classList.remove("dark-mode");
    } else {
      // If dark mode is disabled, enable it
      body.classList.add("dark-mode");      
      header.classList.add("dark-mode");
    }
    console.log("Toggle button clicked");
  }
  
  if (indexToggle){
    indexToggle.addEventListener("click", toggleDarkMode); // For index.html
  } else {
    blogToggle.addEventListener("click", toggleDarkMode); // For blog.html
  }
});

