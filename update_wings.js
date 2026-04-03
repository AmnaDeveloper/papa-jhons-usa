const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src', 'app', 'data', 'posts.json');

const newPost = {
  id: "post-9",
  slug: "papa-johns-wings",
  title: "Papa Johns Wings: All Flavors, Prices & Calories (2026 Complete Guide)",
  excerpt: "Every Papa Johns wing flavor ranked in 2026 \u2014 Buffalo, BBQ, Honey Chipotle, Garlic Parmesan & more. Bone-in vs boneless, exact prices, calories & best dips guide.",
  content: `
<p>Papa Johns built its reputation on pizza — but ask any regular and they will tell you the wings are just as much of a reason to order. Papa Johns wings are oven-baked, made with all-white meat chicken, and available in more flavor combinations than most people realize. They are not an afterthought on this menu.</p>

<p>In this complete 2026 guide, we cover every Papa Johns wing flavor, the bone-in vs boneless comparison, exact prices, calories per wing, the best dipping sauce pairings, and how to get the most value on every wing order.</p>

<h2>Papa Johns Wings — Quick Overview</h2>

<p>Papa Johns offers two types of wings — traditional bone-in wings and premium all-white-meat boneless wings. Both are oven-baked (not fried), which gives them a slightly different texture than traditional deep-fried wings — leaner, with a cleaner flavor that lets the sauce shine through.</p>

<p>Available wing flavors in 2026:</p>
<ul>
<li>Buffalo (Classic)</li>
<li>BBQ</li>
<li>Honey Chipotle</li>
<li>Garlic Parmesan</li>
<li>Spicy Garlic</li>
<li>Original (unsauced)</li>
</ul>

<h2>All Papa Johns Wing Flavors — Ranked & Reviewed</h2>

<h3>1. Buffalo Wings — The Classic 🏆</h3>
<p><strong>Heat Level:</strong> Medium-High | <strong>Best Dip:</strong> Blue Cheese or Ranch</p>
<p>Buffalo is the definitive Papa Johns wing flavor and their consistent top-seller. The sauce is tangy, vinegary, and buttery with a genuine heat that builds across a few wings — not a mild, watered-down version. Papa Johns gets the Buffalo balance right by keeping the sauce sharp and the heat real without making it too intense for people who aren't hardcore heat lovers.</p>
<p><strong>Bone-in vs Boneless on Buffalo:</strong> Bone-in wins here. The richness of the dark meat amplifies the tangy buffalo sauce in a way boneless white meat simply doesn't match.</p>
<p><strong>Best pairing:</strong> Blue Cheese Sauce — the creamy, tangy sharpness of the blue cheese is the traditional Buffalo wing pairing and it works perfectly. Ranch is a good alternative if you prefer something milder.</p>
<p><strong>Rating:</strong> 5/5 — The benchmark. Order this first if you haven't tried Papa Johns wings before.</p>

<h3>2. Honey Chipotle Wings — The Surprise Favorite</h3>
<p><strong>Heat Level:</strong> Medium | <strong>Best Dip:</strong> Ranch</p>
<p>Honey Chipotle is frequently cited as the best flavor on the Papa Johns wing menu by customers who discover it, and it is genuinely excellent. The combination of sweet honey and smoky chipotle creates a complex, layered flavor that is more interesting than straight Buffalo or BBQ. The heat level is medium — present but not aggressive — which makes it accessible to a wider range of tastes.</p>
<p><strong>Why it stands out:</strong> The sweetness from the honey balances the smokiness of the chipotle in a way that makes each wing feel genuinely satisfying. The sauce clings well to both bone-in and boneless versions.</p>
<p><strong>Rating:</strong> 4.8/5 — Arguably the most underrated flavor on the menu. Order this for something beyond the standard Buffalo.</p>

<h3>3. Garlic Parmesan Wings — For Non-Spicy Fans</h3>
<p><strong>Heat Level:</strong> None | <strong>Best Dip:</strong> Ranch or Special Garlic Sauce</p>
<p>Garlic Parmesan is the go-to choice for anyone who loves wings but does not enjoy heat. The sauce is rich, creamy, buttery, and deeply garlicky with real parmesan adding a sharp, nutty edge. It is genuinely one of the most flavorful non-spicy wing options you will find at a pizza chain.</p>
<p><strong>Why it stands out:</strong> The Garlic Parmesan sauce is made with similar quality to Papa Johns' famous Special Garlic Sauce — deep, aromatic garlic flavor with a richness that coats every wing generously. No heat at all, but maximum flavor.</p>
<p><strong>Rating:</strong> 4.5/5 — Best choice for non-spicy wing lovers. Also the best option for kids.</p>

<h3>4. BBQ Wings — Sweet and Smoky</h3>
<p><strong>Heat Level:</strong> None | <strong>Best Dip:</strong> Ranch or Honey Mustard</p>
<p>BBQ wings are a reliable, crowd-pleasing choice that works well for groups where not everyone wants spice. The Papa Johns BBQ sauce is sweet and thick with a good smoky undertone — slightly sweeter than the chipotle version but without any of the heat. It clings well and gives a glossy coating on both bone-in and boneless.</p>
<p><strong>Rating:</strong> 4.2/5 — Safe, solid, and crowd-pleasing. Not the most exciting flavor but consistently good.</p>

<h3>5. Spicy Garlic Wings — Heat Meets Garlic</h3>
<p><strong>Heat Level:</strong> Medium-High | <strong>Best Dip:</strong> Ranch</p>
<p>Spicy Garlic combines the aromatic depth of Papa Johns' garlic sauce with a genuine heat kick from jalapeño and red pepper. If you enjoy both garlic flavor and real heat, this is the wing for you. The spice level is comparable to Buffalo — possibly slightly higher — with the garlic adding an extra flavor dimension.</p>
<p><strong>Rating:</strong> 4.3/5 — Excellent for spice lovers who want something beyond standard Buffalo.</p>

<h3>6. Original (Unsauced) Wings</h3>
<p><strong>Heat Level:</strong> None | <strong>Best Dip:</strong> Any sauce you choose</p>
<p>The Original wings are lightly seasoned and served without any sauce coating — designed for customers who want to apply their own dipping sauce or who prefer a cleaner wing flavor. The oven-baked chicken quality comes through clearly without any sauce competing with it.</p>
<p><strong>Rating:</strong> 3.8/5 — Good base quality but benefits significantly from a dipping sauce.</p>

<h2>Bone-In vs Boneless Wings — Which Should You Order?</h2>

<p>This is the most common Papa Johns wing question, and the honest answer depends on what you prioritize. For maximum flavor and the most satisfying wing experience, bone-in wins. For groups where ease of eating matters — especially with kids — boneless is the better choice.</p>
<p>Bone-in wings offer a richer, more complex flavor thanks to the dark and white meat combination, but are slightly higher in price. Boneless wings are cleaner, leaner all-white meat and easier to eat, commonly paired well with BBQ or Honey Chipotle.</p>

<h2>Papa Johns Wings Calories (2026)</h2>
<p>Here are the approximate calories per wing. Remember that full orders typically come in 8, 16, or 24 pieces.</p>
<ul>
<li>Original (unsauced): ~70 cal (Bone-In) | ~60 cal (Boneless)</li>
<li>Garlic Parmesan: ~90 cal (Bone-In) | ~80 cal (Boneless)</li>
<li>BBQ: ~80 cal (Bone-In) | ~75 cal (Boneless)</li>
<li>Buffalo: ~75 cal (Bone-In) | ~70 cal (Boneless)</li>
<li>Honey Chipotle: ~85 cal (Bone-In) | ~80 cal (Boneless)</li>
<li>Spicy Garlic: ~80 cal (Bone-In) | ~72 cal (Boneless)</li>
</ul>
<p>For full nutrition details including sodium and protein content, see our <a href="/posts/papa-johns-nutrition-guide">Papa Johns Nutrition Guide</a>.</p>

<h2>Best Dipping Sauces for Papa Johns Wings</h2>
<p>Papa Johns offers 9 dipping sauces. Here is exactly which sauce goes best with each wing flavor:</p>
<ul>
<li><strong>Buffalo:</strong> Blue Cheese or Ranch</li>
<li><strong>Honey Chipotle:</strong> Ranch</li>
<li><strong>Garlic Parmesan:</strong> Ranch or Garlic Sauce</li>
<li><strong>BBQ:</strong> Honey Mustard</li>
<li><strong>Spicy Garlic:</strong> Ranch</li>
<li><strong>Original:</strong> Special Garlic Sauce</li>
</ul>

<h2>How to Order Papa Johns Wings for Maximum Value</h2>
<p><strong>1. Check for combo deals first.</strong> Papa Johns frequently bundles wings with a large pizza at a combo price. Before ordering wings separately, check the <a href="/coupons">current deals page</a> — combo savings can be significant.</p>
<p><strong>2. Order 16 pieces for groups.</strong> The price per wing drops on the 16-piece order compared to two 8-piece orders. For groups of 3 or more, the 16-piece is always better value.</p>
<p><strong>3. Use Papa Rewards.</strong> Every wing order earns Papa Dough points toward free food. If you order wings regularly, joining <a href="/papa-johns-rewards">Papa Rewards</a> is a free and straightforward way to earn toward future orders.</p>

<h2>Papa Johns Wings vs Dominos vs Pizza Hut</h2>
<p>Papa Johns wings are competitive on quality — the Honey Chipotle and Garlic Parmesan flavors are genuinely superior to most competitor equivalents. The free Garlic Sauce inclusion is also a notable advantage. Domino's has a slight edge on raw flavor variety, but Papa Johns wins on quality per flavor.</p>

<h2>Final Verdict — Are Papa Johns Wings Worth Ordering?</h2>
<p>Yes — consistently. The oven-baked approach keeps the quality clean and lets the sauces do the work, which Papa Johns executes well across their full flavor lineup. Start with the Buffalo if you want the classic experience. Try the Honey Chipotle if you want to discover the best-kept secret on the menu. Order Garlic Parmesan if anyone at the table doesn't eat spicy food — it is the best non-heat option available.</p>
<p>👉 Find your nearest Papa John's: <a href="/store-locator">Store Locator</a><br>
👉 Check current wing deals: <a href="/coupons">Papa Johns Coupons</a><br>
👉 Explore all sides and dips: <a href="/posts/sides">Papa Johns Sides Guide</a><br>
👉 Also read: <a href="/posts/classic-pizzas">Papa Johns Classic Pizzas</a></p>
  `,
  date: new Date().toISOString(),
  author: "Papa John's Experts",
  category: "Sides & Dips",
  image: "/honey-chipotle-wings.jpg", // I'll assume they'll have the image or the layout will fall back
  imageAlt: "Papa Johns Wings Menu Honey Chipotle",
  price: "From $8.49",
  calories: "60-90 / piece",
  prepTime: "Oven Baked",
  serves: "1-4 People",
  rating: 4.8,
  ingredients: [
    "Oven-Baked Chicken",
    "Buffalo Hot Sauce",
    "Honey Chipotle Sauce",
    "Special Garlic Sauce"
  ],
  pricing: [
    { "item": "Bone-In Traditional Wings (8-Piece)", "price": "$10.99", "calories": "560-720 cal" },
    { "item": "Bone-In Traditional Wings (16-Piece)", "price": "$19.99", "calories": "1120-1440 cal" },
    { "item": "Boneless Wings (8-Piece)", "price": "$8.49", "calories": "480-640 cal" },
    { "item": "Boneless Wings (16-Piece)", "price": "$14.99", "calories": "960-1280 cal" },
    { "item": "Additional Sauce Cup", "price": "$0.75", "calories": "varies" }
  ],
  faqs: [
    {
      "question": "How much do Papa Johns wings cost in 2026?",
      "answer": "Papa Johns bone-in wings cost approximately $10.99 for 8 pieces and $19.99 for 16 pieces. Boneless wings start at approximately $8.49 for 8 pieces. Prices vary slightly by location."
    },
    {
      "question": "Are Papa Johns wings fried or baked?",
      "answer": "Papa Johns wings are oven-baked, not deep-fried. This gives them a slightly leaner profile and cleaner flavor compared to traditionally fried wings."
    },
    {
      "question": "What is the best Papa Johns wing flavor?",
      "answer": "Buffalo is the most popular Papa Johns wing flavor. However, many customers consider the Honey Chipotle to be the best overall \u2014 the sweet-smoky combination is excellent. Garlic Parmesan is the best choice for non-spicy orders."
    },
    {
      "question": "How many calories are in Papa Johns wings?",
      "answer": "Papa Johns wings range from approximately 60 to 90 calories per wing depending on flavor and type. An 8-piece Buffalo bone-in order contains approximately 600 total calories."
    },
    {
      "question": "What is the difference between bone-in and boneless Papa Johns wings?",
      "answer": "Bone-in wings are traditional chicken wings with the bone, offering more complex flavor. Boneless wings are made from all-white meat chicken breast \u2014 easier to eat, slightly leaner, and more uniform. Bone-in has more flavor; boneless is more convenient."
    }
  ]
};

try {
  let data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
  // Remove existing if any
  data = data.filter(p => p.slug !== newPost.slug);
  // Add new post
  data.unshift(newPost);
  
  fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
  console.log("Successfully added Papa Johns Wings to posts.json");
} catch (error) {
  console.error("Error updating posts.json:", error);
}
