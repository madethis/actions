const fs = require("fs");
const { getVersion } = require("./getVersion");

function run() {
  // Generate app.json
  fs.writeFileSync(
    "./app.json",
    JSON.stringify(
      {
        expo: {
          version: getVersion(),
        },
      },
      null,
      2
    )
  );

  // Remove app.json from .gitignore
  const gitignore = fs.readFileSync("./.gitignore", "utf8");
  const gitIgnoreLines = gitignore.split("\n");
  const newGitIgnoreLines = gitIgnoreLines.filter(
    (line) => !line.includes("app.json")
  );
  fs.writeFileSync("./.gitignore", newGitIgnoreLines.join("\n"));
}

run();
