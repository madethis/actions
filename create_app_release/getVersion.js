/**
 * @returns {`${number}.${number}.${number}`}
 */
function getVersion() {
  // 2018.5.221514
  const now = new Date();

  return `${now.getUTCFullYear()}.${now.getUTCMonth() + 1}.${
    now.getUTCDate() * 10000 + now.getHours() * 100 + now.getMinutes()
  }`;
}

module.exports.getVersion = getVersion;
