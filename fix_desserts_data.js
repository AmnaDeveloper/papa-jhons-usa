const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src', 'app', 'data', 'posts.json');

try {
  let data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
  
  // Find the post
  let postIndex = data.findIndex(p => p.slug === "papa-johns-desserts");
  if (postIndex !== -1) {
      
      // Update Pricing Data Array
      data[postIndex].pricing = [
        { "item": "Chocolate Chip Cookie", "price": "$7.29", "calories": "190 cal/slice" },
        { "item": "Double Choc Brownie", "price": "$7.29", "calories": "240 cal/sq" },
        { "item": "Cinnamon Pull Aparts", "price": "$7.29", "calories": "245 cal/piece" },
        { "item": "Oreo Papa Bites", "price": "$6.99", "calories": "100 cal/roll" }
      ];

      // Update FAQs Data Array
      data[postIndex].faqs = [
        { 
            "question": "What desserts does Papa Johns have in 2026?", 
            "answer": "Papa Johns offers four desserts in 2026: Chocolate Chip Cookie ($7.29), Double Chocolate Chip Brownie ($7.29), Cinnamon Pull Aparts ($7.29), and Oreo Cookie Papa Bites ($6.99). All are baked fresh and available for delivery or carryout." 
        },
        { 
            "question": "How much do Papa Johns desserts cost?", 
            "answer": "Papa Johns desserts range from $6.99 (Oreo Cookie Papa Bites) to $7.29 (Chocolate Chip Cookie, Double Chocolate Chip Brownie, and Cinnamon Pull Aparts). Prices may vary slightly by location." 
        },
        { 
            "question": "Are Papa Johns desserts good?", 
            "answer": "Yes — Papa Johns desserts consistently receive strong reviews, particularly the Chocolate Chip Cookie and Double Chocolate Chip Brownie. They are baked fresh using real dough, creating a noticeably better texture." 
        },
        { 
            "question": "How many calories are in Papa Johns Chocolate Chip Cookie?", 
            "answer": "One slice of the Papa Johns Chocolate Chip Cookie (1/8 of the full cookie) contains approximately 190 calories. The full cookie contains approximately 1,520 calories total across 8 slices." 
        },
        { 
            "question": "Are Papa Johns desserts vegan?", 
            "answer": "No standard Papa Johns desserts are fully vegan — all contain dairy and/or eggs. The Cinnamon Pull Aparts may have fewer dairy components but should be confirmed at your local store." 
        },
        { 
            "question": "Can I order Papa Johns desserts without pizza?", 
            "answer": "Yes — all Papa Johns desserts can be ordered as standalone items for delivery or carryout without requiring a pizza or any minimum order beyond the standard delivery minimum." 
        },
        { 
            "question": "What is the best Papa Johns dessert?", 
            "answer": "For overall crowd appeal, the Chocolate Chip Cookie is the most popular Papa Johns dessert. For chocolate lovers specifically, the Double Chocolate Chip Brownie is the strongest choice. For something lighter and fun, Oreo Cookie Papa Bites at 100 cal per roll are the best option." 
        }
      ];

      // Remove FAQs and the first massive Price Table from Content to avoid duplication
      let currentContent = data[postIndex].content;
      
      // Remove HTML FAQ section
      currentContent = currentContent.replace(/<h2>Frequently Asked Questions — Papa Johns Desserts<\/h2>[\s\S]*?(?=<h2>Final Verdict)/, '');
      
      // Remove HTML All Papa Johns Dessert table (It is shown natively in design now)
      currentContent = currentContent.replace(/<h2>All Papa Johns Desserts — Complete Menu with Prices \(2026\)<\/h2>[\s\S]*?(?=<p><em>\*Prices may vary)/, '');
      
      data[postIndex].content = currentContent;

      fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
      console.log("Successfully added FAQ and Pricing arrays, and cleaned HTML content in posts.json");
  } else {
      console.error("Post not found");
  }
} catch (error) {
  console.error("Error updating posts.json:", error);
}
