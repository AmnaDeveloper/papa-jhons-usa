const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const index = data.findIndex(p => p.slug === 'papa-johns-free-delivery');

if (index !== -1) {
    data[index].metaTitle = "Papa Johns Free Delivery Code & Promo Codes (Updated May 2026) | Papa John's Pizza Menu";
    data[index].metaDescription = "Get Papa Johns free delivery today with verified promo codes and coupon codes. Find free delivery codes for new and existing users, minimum order requirements, and more. - updated May 2, 2026.";
    
    fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
    console.log("Updated Free Delivery meta title and description successfully");
} else {
    console.log("Article not found");
}
