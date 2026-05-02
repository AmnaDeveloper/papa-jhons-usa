const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const index = data.findIndex(p => p.slug === 'papa-johns-free-delivery');

if (index !== -1) {
    data[index].pricing = [
        {
            "icon": "🚚",
            "item": "Standard Papa Johns Delivery Fee",
            "price": "$3.99 - $5.99",
            "calories": "N/A",
            "popular": false
        },
        {
            "icon": "🆓",
            "item": "Free Delivery (Orders $40+)",
            "price": "$0.00",
            "calories": "N/A",
            "popular": true
        },
        {
            "icon": "🎟️",
            "item": "Free Delivery via Promo Code",
            "price": "$0.00",
            "calories": "N/A",
            "popular": true
        },
        {
            "icon": "🍕",
            "item": "Large 1-Topping Pizza (Cart Builder)",
            "price": "$14.99",
            "calories": "300 cal",
            "popular": false
        },
        {
            "icon": "🥖",
            "item": "Garlic Knots (Best to reach $40 min)",
            "price": "$6.99",
            "calories": "110 cal",
            "popular": false
        },
        {
            "icon": "🥤",
            "item": "2-Liter Pepsi (Cart Add-on)",
            "price": "$3.99",
            "calories": "250 cal",
            "popular": false
        }
    ];

    // Check for any weird spaces in the title or content
    // They might mean removing extra spaces from title if any
    data[index].title = data[index].title.replace(/\s+/g, ' ').trim();
    
    fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
    console.log("Updated pricing successfully");
} else {
    console.log("Article not found");
}
