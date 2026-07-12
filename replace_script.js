const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
let changedCount = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.match(/Buddha/i)) {
        let newContent = content.replace(/Buddha/g, 'Dhamma')
                                .replace(/buddha/g, 'dhamma')
                                .replace(/BUDDHA/g, 'DHAMMA');
        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf8');
            changedCount++;
            console.log('Modified: ' + file);
        }
    }
});
console.log('Total files changed: ' + changedCount);
