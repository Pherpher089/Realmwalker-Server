const db = require("../knexConfig.js");

module.exports = {
    getVersion,
    updateVersion
}

async function getVersion() {
    return await db('version').first();
}

async function updateVersion(versionInfo) {
    const newVersion = { id: 1, version: versionInfo }
    return await db('version')
        .where('id', 1)
        .update(newVersion);
}