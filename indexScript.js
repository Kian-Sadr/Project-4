const usernameInput = document.getElementById("username");
const rememberBox = document.getElementById("remember");
const loginBtn = document.getElementById("loginBtn");

window.addEventListener("load", () => {
  
  const savedRemember = localStorage.getItem("remember");

  if (savedRemember === "true") {
      rememberBox.checked = true;
      usernameInput.value =
      localStorage.getItem("username") || "";
  }
});

loginBtn.addEventListener("click", () => {
  
  if (rememberBox.checked) {
    
    localStorage.setItem("username", usernameInput.value);

    localStorage.setItem("remember", "true");
  }
  else {
  
    localStorage.removeItem("username");

    localStorage.setItem("remember", "false");
  }

});
