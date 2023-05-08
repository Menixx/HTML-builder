const fs = require('fs');
const path = require('path');

const template = fs.createReadStream(path.join(__dirname, 'template.html'), 'utf-8');


fs.mkdir(path.join(__dirname, 'project-dist'), {recursive: true}, err => {
    if (err) throw err;
})

fs.writeFile(path.join(__dirname, 'project-dist', 'style.css'), '', err => {
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
        const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'style.css'), {flags: 'a'});
        readStream.pipe(writeStream);
    }
})