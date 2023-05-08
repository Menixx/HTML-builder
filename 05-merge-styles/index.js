const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', err => {
    if (err) throw err;
}) 

fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if (err) throw err;

    let cssFiles = [];
    for (file of files) {
        if (path.extname(file) === '.css') {
            cssFiles.push(file);
        }
    }
    
    for (file of cssFiles) {
        const readStream = fs.createReadStream(path.join(__dirname, 'styles', file));
        const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'), {flags: 'a'});
        readStream.pipe(writeStream);
    }
})