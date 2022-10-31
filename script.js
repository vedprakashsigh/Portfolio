const current = new Date();

const currentTime = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  hour12: false,
});

if (currentTime < "19") {
  // Light Mode
  document.querySelector(".nav").style.backgroundColor = "#5F5F5F";
  document.querySelector("body").style.backgroundColor = "#9C9C9C";
} else {
  // Dark Mode
  document.querySelector(".nav").style.backgroundColor = "#9C9C9C";
  document.querySelector("body").style.backgroundColor = "#5F5F5F";
}

// Hamburger Operation
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});