const { stdout, stdin, exit } = process;
const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(__dirname, 'input.txt'));
stdout.write('Hello! Write your text:\n');

stdin.on('data', data => {
    const text = data.toString().trim();
    if (text === 'exit') {
        exit();
    }
    writeStream.write(text + '\n');
})
process.on('exit', () => console.log('Good bye!'));
process.on('SIGINT', () => {
    exit();
})
