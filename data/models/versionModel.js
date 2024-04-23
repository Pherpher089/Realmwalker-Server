const db = require("../knexConfig.js");

module.exports = {
    getVersion,
    updateVersion
}

async function getVersion() {
    return await db('version').first();
}

async function updateVersion(versionInfo) {
    const newVersion = { id: 0, version: versionInfo }
    const updatedVersion = await db('version')
        .where('id', 1)
        .update(newVersion);
    if (updatedVersion) {
        return updatedVersion
    } else {
        return await db('version')
            .add(newVersion);
    }
}