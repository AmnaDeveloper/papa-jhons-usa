const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const index = data.findIndex(p => p.slug === 'papa-johns-free-delivery');

if (index !== -1) {
    data[index].faqs = [
        {
            "question": "Is there a Papa Johns free delivery code today?",
            "answer": "Yes. We currently have verified Papa Johns free delivery codes active for May 2026. All working codes are updated daily on this page."
        },
        {
            "question": "Does Papa Johns offer free delivery without a promo code?",
            "answer": "Yes — orders over approximately $40 at most US locations qualify for free delivery automatically. Papa Rewards members can also unlock free delivery through earned points without needing a separate promo code."
        },
        {
            "question": "Can I use a Papa Johns free delivery code more than once?",
            "answer": "Most free delivery promo codes are single-use per account. Papa Rewards-based free delivery offers can be earned repeatedly through normal ordering."
        },
        {
            "question": "Why is my Papa Johns free delivery code not working?",
            "answer": "Common reasons include: the code has expired, the order does not meet the minimum requirement, the code is for new users only, or the code does not apply to your specific location. Try an alternative code from the list on this page or check your Papa Rewards account for active delivery rewards."
        },
        {
            "question": "Does Papa Johns have a free delivery code for existing users?",
            "answer": "Yes. Papa Johns sends exclusive free delivery promo codes to existing customers via email and SMS. You can also earn free delivery through Papa Rewards points, or find existing user codes in the Papa Johns app under notifications and offers."
        },
        {
            "question": "What is the minimum order for Papa Johns free delivery?",
            "answer": "At most US Papa Johns locations, orders of $40 or more automatically qualify for free delivery with no code needed. With a free delivery promo code, the minimum is typically $15 to $20 or no minimum at all depending on the offer."
        },
        {
            "question": "Does Papa Johns have free delivery on the first order?",
            "answer": "Yes. New Papa Johns customers can get free delivery on their first order by downloading the Papa Johns app, which often sends a free delivery code to your registered email on signup. First-order free delivery codes are also sometimes shown as a welcome banner on the Papa Johns homepage."
        }
    ];
    fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
    console.log("Updated faqs successfully");
} else {
    console.log("Article not found");
}
