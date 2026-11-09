/*const createButton = document.getElementById("createAccountButton");

createButton.addEventListener("click", () => {
  
  const username = document.getElementById("newUsername").value;

  const password = document.getElementById("newPassword").value;

  if (username.trim() === "" || password.trim() === "") {
    
    alert("Username and password are required.");

    return;
  }
});
*/
const createButton =
    document.getElementById("createAccountButton");

createButton.addEventListener("click", () => {

    const username =
        document.getElementById("newUsername").value;

    const password =
        document.getElementById("newPassword").value;

    console.log("Button clicked");
    console.log(username);
    console.log(password);

    if (
        username.trim() === "" ||
        password.trim() === ""
    ) {
        alert("Username and password are required.");
        return;
    }

    alert("Account creation is working!");
});
