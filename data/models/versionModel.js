const db = require("../knexConfig.js");

module.exports = {
    getVersion,
    updateVersion,
    addVersion
}

async function getVersion() {
    return await db('version').first();
}

async function updateVersion(versionInfo) {
    const newVersion = { id: 0, version: versionInfo }
    return await db('version')
        .where('id', 0)
        .update(newVersion);
}

async function addVersion(versionInfo) {
    const newVersion = { version: versionInfo }
    return await db('version')
        .add(newVersion);
}