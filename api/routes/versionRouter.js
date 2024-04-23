const Version = require("../../data/models/versionModel.js");
const router = require("express").Router();
router.get("/", async (req, res) => {
    try {
        let version = await Version.getVersion();
        res.status(200).json(version);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.post("/update", async (req, res) => {
    try {
        let newVersion = await Version.updateVersion(req.body.version);
        res.status(200).json(newVersion);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.post("/add", async (req, res) => {
    try {
        let newVersion = await Version.addVersion(req.body.version);
        res.status(200).json(newVersion);
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;