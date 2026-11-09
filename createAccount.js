const createButton = document.getElementById("createAccountButton");

createButton.addEventListener("click", () => {
  
  const username = document.getElementById("newUsername").value;

  const password = document.getElementById("newPassword").value;

  if (username.trim() === "" || password.trim() === "") {
    
    alert("Username and password are required.");

    return;
  }
});
