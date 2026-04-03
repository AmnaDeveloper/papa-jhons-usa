const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src', 'app', 'data', 'posts.json');

try {
  let data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
  
  // Find the post
  let postIndex = data.findIndex(p => p.slug === "papa-johns-desserts");
  if (postIndex !== -1) {
      
      // Update Pricing Data Array with MORE items
      data[postIndex].pricing = [
        { "item": "Chocolate Chip Cookie (8 slices)", "price": "$7.29", "calories": "190 cal/slice" },
        { "item": "Double Choc Brownie (9 sq)", "price": "$7.29", "calories": "240 cal/sq" },
        { "item": "Cinnamon Pull Aparts", "price": "$7.29", "calories": "245 cal/piece" },
        { "item": "Oreo Papa Bites", "price": "$6.99", "calories": "100 cal/roll" },
        { "item": "Extra Sweet Icing Cup", "price": "$0.75", "calories": "120 cal" },
        { "item": "Dessert + Dessert Bundle", "price": "$12.99", "calories": "varies" },
        { "item": "Papa Pairings Dessert (Combo)", "price": "$6.99", "calories": "varies" }
      ];

      // Remove dashes and underscores from content, title, excerpt
      // Replace em-dash "—", en-dash "-", underscore "_" with space or nothing appropriately
      let cleanString = (str) => {
          if(!str) return str;
          return str.replace(/—/g, ' ')
                    .replace(/-/g, ' ')
                    .replace(/_/g, ' ');
      };

      data[postIndex].title = cleanString(data[postIndex].title);
      data[postIndex].excerpt = cleanString(data[postIndex].excerpt);
      
      let rawContent = data[postIndex].content;
      // Inject internal link to Home Page for SEO Indexing
      // We'll append it nicely
      if (!rawContent.includes("Return to the Main Menu")) {
          rawContent += `<p>For more great options, visit our main <a href=\"/\">Papa Johns Home Page</a> where you can find complete pizza guides and discounts.</p>`;
      }

      // We should be careful cleaning HTML so we don't break tags like <a href="papa-johns...">
      // So we will just replace the text outside of HTML tags if possible, or just be careful.
      // Actually, removing `-` from `href="/papa-johns..."` would break the links!
      // The user likely meant the visible text. 
      // Let's replace "—" (em-dash) and " - " (dash with spaces).
      rawContent = rawContent.replace(/—/g, ' ').replace(/ - /g, ' ').replace(/_/g, '');

      data[postIndex].content = rawContent;

      fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
      console.log("Successfully added more pricing, added home page internal link, and removed dashes/underscores from posts.json");
  } else {
      console.error("Post not found");
  }
} catch (error) {
  console.error("Error updating posts.json:", error);
}
