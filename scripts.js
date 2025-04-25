document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("changeBtn");
    const img = document.getElementById("animImage");
  
    const colors = ["#ffe4e1", "#e0ffff", "#e6e6fa", "#f0fff0"];
    let index = 0;
  
    // Load saved background
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
    }
  
    btn.addEventListener("click", () => {
      // Change background color
      index = (index + 1) % colors.length;
      const newColor = colors[index];
      document.body.style.backgroundColor = newColor;
      localStorage.setItem("bgColor", newColor);
  
      // Trigger bounce animation
      img.classList.remove("bounce");
      void img.offsetWidth; // Trigger reflow
      img.classList.add("bounce");
    });
  });
  
