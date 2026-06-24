const sharp = require("sharp");

sharp("public/Home/banner1.webp")
  .webp({
    quality: 60,
    effort: 6,
  })
  .toFile("public/Home/banner1-compressed.webp")
  .then(() => console.log("Compression complete"))
  .catch(console.error);