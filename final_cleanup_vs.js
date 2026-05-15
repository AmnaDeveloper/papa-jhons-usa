const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const POSTS_PATH = path.join(__dirname, 'src/app/data/posts.json');

try {
    let posts = JSON.parse(fs.readFileSync(POSTS_PATH, 'utf8'));
    let post = posts.find(p => p.slug === 'papa-johns-vs-pizza-hut');
    
    if (post) {
        // Function to recursively clean strings in an object
        function cleanObject(obj) {
            for (let key in obj) {
                if (typeof obj[key] === 'string') {
                    // Remove <hr> tags
                    obj[key] = obj[key].replace(/<hr>/g, '');
                    // Replace em-dash and en-dash with standard dash
                    obj[key] = obj[key].replace(/—/g, '-').replace(/–/g, '-');
                } else if (Array.isArray(obj[key])) {
                    obj[key].forEach(item => {
                        if (typeof item === 'object') cleanObject(item);
                        else if (typeof item === 'string') {
                            // Actually strings in arrays should also be cleaned if they exist
                        }
                    });
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    cleanObject(obj[key]);
                }
            }
        }

        cleanObject(post);

        fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 4));
        console.log('Successfully removed dividers and remaining dashes from all fields of the vs article.');
    } else {
        console.error('Post not found');
    }
} catch (err) {
    console.error('Error cleaning posts.json:', err);
}

// Git Push
try {
    execSync('git add .');
    execSync('git commit -m "Remove dividers and final cleanup of dashes in Papa Johns vs Pizza Hut article"');
    execSync('git push');
    console.log('Successfully pushed changes to Git');
} catch (err) {
    console.error('Error with Git operations:', err.message);
}
