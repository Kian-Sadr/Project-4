app.post("/createAccount", (req, res) => {

    try {

        console.log("Route reached");
        console.log(req.body);

        const { username, password } = req.body;

        const accountsFile = "./data/accounts.json";

        console.log("Reading accounts");

        const accounts = JSON.parse(
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
