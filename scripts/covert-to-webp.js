import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images";

const files = fs.readdirSync(inputDir).filter((file) => file.endsWith(".png"));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(inputDir, file.replace(".png", ".webp"));

  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`✔ Converted: ${file}`))
    .catch(console.error);
}
