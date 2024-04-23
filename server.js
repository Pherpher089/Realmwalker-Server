const express = require('express');
const versionRouter = require("./api/routes/versionRouter.js");
const Version = require("./data/models/versionModel.js");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/version", versionRouter);
app.get('/', async (req, res) => {
    res.send("Hello Realmwalker");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});