const usernameInput = document.getElementById("username");
const rememberBox = document.getElementById("remember");
const loginButton = document.getElementById("loginButton");

window.addEventListener("load", () => {
  
  const savedRemember = localStorage.getItem("remember");

  if (savedRemember === "true") {
      rememberBox.checked = true;
      usernameInput.value =
      localStorage.getItem("username") || "";
  }
});

loginButton.addEventListener("click", () => {
  
  if (rememberBox.checked) {
    
    localStorage.setItem("username", usernameInput.value);

    localStorage.setItem("remember", "true");
  }
  else {
  
    localStorage.removeItem("username");

    localStorage.setItem("remember", "false");
  }
});
