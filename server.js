const usernameInput =
    document.getElementById("username");

const rememberBox =
    document.getElementById("remember");

const loginBtn =
    document.getElementById("loginButton");

window.addEventListener("load", () => {

    const savedRemember =
        localStorage.getItem("remember");

    if (savedRemember === "true") {

        rememberBox.checked = true;

        usernameInput.value =
            localStorage.getItem("username") || "";
    }

});

loginBtn.addEventListener("click", async () => {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (rememberBox.checked) {

        localStorage.setItem(
            "username",
            username
        );

        localStorage.setItem(
            "remember",
            "true"
        );

    } else {

        localStorage.removeItem(
            "username"
        );

        localStorage.setItem(
            "remember",
            "false"
        );

    }

    try {

        const response =
            await fetch(
                "/login",
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

        const data =
            await response.json();

        if (data.success) {

            window.location.href =
                "form.html";

        } else {

            alert(
                "Invalid username or password."
            );

        }

    }
    catch (error) {

        console.error(error);

        alert(
            "Login failed."
        );

    }

});
