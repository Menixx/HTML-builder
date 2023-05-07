const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
    if (err) throw err;

    for (file of files) {
        let addres = path.join(__dirname, 'secret-folder', file);
        fs.stat(addres, (err, stat) => {
            if (err) throw err;
            
            if (!stat.isDirectory()) {
                console.log(`${path.parse(addres).name} - ${path.extname(addres).slice(1)} - ${stat.size}b`)
            }
        })
    }
})