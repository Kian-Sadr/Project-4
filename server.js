const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "index.html")
    );
});

app.post("/createAccount", (req, res) => {

    const { username, password } =
        req.body;

    const accountsFile =
        "./data/accounts.json";

    const accounts =
        JSON.parse(
            fs.readFileSync(
                accountsFile,
                "utf8"
            )
        );

    const id = Date.now();

    accounts.push({
        id,
        username,
        password,
        accountFile: `${id}.json`
    });

    fs.writeFileSync(
        accountsFile,
        JSON.stringify(
            accounts,
            null,
            2
        )
    );

    fs.writeFileSync(
        `./data/users/${id}.json`,
        JSON.stringify({
            id,
            fullName: "",
            platform: "",
            major: "",
            year: "",
            satisfaction: "",
            comments: ""
        },
        null,
        2)
    );

    res.json({
        message:
            `Account created with ID ${id}`
    });

});
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
