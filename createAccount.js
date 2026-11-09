const createButton = document.getElementById("createAccountButton");

createButton.addEventListener("click", async () => {
  
  const username = document.getElementById("newUsername").value;

  const password = document.getElementById("newPassword").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password are required.");
        return;
    }

    try {

        const response = await fetch(
            "/createAccount",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data =await response.json();

        alert(data.message);

    }
    catch(error) {

      console.error(error);

      alert("Unable to contact server.");
  }

});
