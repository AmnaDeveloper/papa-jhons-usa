const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public');

fs.readdir(dir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            const inputPath = path.join(dir, file);
            const fileNameWithoutExt = path.basename(file, ext);
            const outputPath = path.join(dir, fileNameWithoutExt + '.webp');

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(info => {
                    console.log(`Converted ${file} to ${fileNameWithoutExt}.webp - size: ${info.size} bytes`);
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
