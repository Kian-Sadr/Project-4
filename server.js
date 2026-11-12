const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

// Create users folder if it doesn't exist
if (!fs.existsSync("./data/users")) {
    fs.mkdirSync("./data/users", {
        recursive: true
    });
}

app.use(express.json());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "index.html")
    );
});

app.post("/createAccount", (req, res) => {

    try {

        console.log("Route reached");
        console.log(req.body);

        const { username, password } =
            req.body;

        const accountsFile =
            "./data/accounts.json";

        console.log("Reading accounts");

        const accounts =
            JSON.parse(
                fs.readFileSync(
                    accountsFile,
                    "utf8"
                )
            );

        console.log("Accounts loaded");

        const id = Date.now();

        accounts.push({
            id,
            username,
            password,
            accountFile: `${id}.json`
        });

        console.log("Writing accounts");

        fs.writeFileSync(
            accountsFile,
            JSON.stringify(
                accounts,
                null,
                2
            )
        );

        console.log("Writing user file");

        fs.writeFileSync(
            `./data/users/${id}.json`,
            JSON.stringify(
                {
                    id,
                    fullName: "",
                    platform: "",
                    major: "",
                    year: "",
                    satisfaction: "",
                    comments: ""
                },
                null,
                2
            )
        );

        console.log("Success");

        res.json({
            message: `Account created with ID ${id}`
        });

    }
    catch (error) {

        console.error("CREATE ACCOUNT ERROR:");
        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
