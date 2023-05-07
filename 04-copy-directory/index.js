const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
    if (err) throw err;
})

fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) throw err;
    for (file of files) {
        fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), err => {
            if (err) throw err;
        })
    }
    console.log('files copied')
})