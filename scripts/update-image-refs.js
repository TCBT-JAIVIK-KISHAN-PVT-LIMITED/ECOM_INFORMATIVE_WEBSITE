const fs = require("fs");
const path = require("path");

const ROOT = "./src";

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = content
    .replace(/\.png(['"`])/g, ".webp$1")
    .replace(/\.jpg(['"`])/g, ".webp$1")
    .replace(/\.jpeg(['"`])/g, ".webp$1");

  fs.writeFileSync(filePath, content);
  console.log("Updated:", filePath);
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (
      fullPath.endsWith(".tsx") ||
      fullPath.endsWith(".ts") ||
      fullPath.endsWith(".jsx") ||
      fullPath.endsWith(".js")
    ) {
      processFile(fullPath);
    }
  }
}

walk(ROOT);

console.log("✅ All image references updated to .webp");