app.post("/createAccount", (req, res) => {

    try {

        const { username, password } = req.body;

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

        res.json({
            message: `Account created with ID ${id}`
        });

    }
    catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }
});
