const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const POSTS_PATH = path.join(__dirname, 'src/app/data/posts.json');

try {
    let posts = JSON.parse(fs.readFileSync(POSTS_PATH, 'utf8'));
    let post = posts.find(p => p.slug === 'papa-johns-vs-pizza-hut');
    
    if (post) {
        // 1. Remove all dashes (em-dashes and en-dashes)
        post.content = post.content.replace(/—/g, '-').replace(/–/g, '-');
        post.excerpt = post.excerpt.replace(/—/g, '-').replace(/–/g, '-');
        
        // 2. Fix broken papa-pairings link
        // Current: <a href="/posts/papa-pairings">Papa Pairings ($6.99 each)</a>
        // New: <a href="/coupons">Papa Pairings ($6.99 each)</a>
        post.content = post.content.replace(/\/posts\/papa-pairings/g, '/coupons');
        
        // 3. Fix pepperoni linking (only once)
        // First, strip all existing links for pepperoni to start fresh
        // Match <a href="/menus-prices/pepperoni-pizza">pepperoni</a> case-insensitive
        post.content = post.content.replace(/<a href="\/menus-prices\/pepperoni-pizza">(.*?)<\/a>/gi, '$1');
        
        // Now link it only once (the first occurrence)
        let linked = false;
        post.content = post.content.replace(/pepperoni/gi, (match) => {
            if (!linked) {
                linked = true;
                return `<a href="/menus-prices/pepperoni-pizza">${match}</a>`;
            }
            return match;
        });

        // 4. Do the same for Cheese Pizza? User didn't ask but it's good practice.
        // User only said pepperoni.
        
        fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 4));
        console.log('Successfully refined posts.json: fixed broken link, reduced pepperoni links, and removed dashes.');
    } else {
        console.error('Post not found');
    }
} catch (err) {
    console.error('Error refining posts.json:', err);
}

// Git Push
try {
    execSync('git add .');
    execSync('git commit -m "Refine Papa Johns vs Pizza Hut: fix broken papa-pairings link, reduce pepperoni links, and remove dashes"');
    execSync('git push');
    console.log('Successfully pushed changes to Git');
} catch (err) {
    console.error('Error with Git operations:', err.message);
}
