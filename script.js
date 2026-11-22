const types = {
  success: [
    "#6c7d36",
    "fa-circle-check",
    "Success!",
    "Your changes were saved.",
  ],
  error: [
    "#871014",
    "fa-circle-xmark",
    "Something went wrong",
    "Please try again.",
  ],
  warning: [
    "#c04815",
    "fa-triangle-exclamation",
    "Heads up!",
    "Please review your details.",
  ],
};

function showToast(type) {
  const [color, icon, title, text] = types[type];
  const toast = document.createElement("div");

  toast.className = "toast";
  toast.style.setProperty("--color", color);

  toast.innerHTML = `
  <i class="fa-solid ${icon}" style="color:${color}"></i>
  <div class="message">
    <strong>${title}</strong>
    <small>${text}</small>
  </div> 
  <button class="close" aria-label="Dismiss">
    <i class="fa-solid fa-xmark"></i>
  </button>
`;

  document.querySelector("#stack").prepend(toast);
  toast.querySelector(".close").onclick = () => toast.remove();

  setTimeout(() => toast.remove(), 3000);
}
