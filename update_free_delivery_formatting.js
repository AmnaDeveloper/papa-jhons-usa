const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const index = data.findIndex(p => p.slug === 'papa-johns-free-delivery');

if (index !== -1) {
    let post = data[index];
    
    // Update image
    post.image = "/free-delivery.png";
    post.imageAlt = "Papa Johns Free Delivery Codes";

    // Fix Blockquotes which were causing text to be invisible
    post.content = post.content.replace(/<blockquote>/g, '<div class="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#cc0000] my-6 text-gray-700 font-bold shadow-sm">');
    post.content = post.content.replace(/<\/blockquote>/g, '</div>');

    // Remove em-dashes
    post.content = post.content.replace(/—/g, '-');
    post.title = post.title.replace(/—/g, '-');
    post.excerpt = post.excerpt.replace(/—/g, '-');
    if (post.metaTitle) post.metaTitle = post.metaTitle.replace(/—/g, '-');
    if (post.metaDescription) post.metaDescription = post.metaDescription.replace(/—/g, '-');

    if (post.faqs) {
        post.faqs.forEach(faq => {
            faq.question = faq.question.replace(/—/g, '-');
            faq.answer = faq.answer.replace(/—/g, '-');
        });
    }

    fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
    console.log("Updated formatting and image successfully");
} else {
    console.log("Article not found");
}
