const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src', 'app', 'data', 'posts.json');

const newPost = {
  id: "post-8", // increment ID
  slug: "papa-johns-desserts",
  title: "Papa Johns Desserts Menu: Every Sweet Treat, Price & Calorie (2026)",
  excerpt: "Discover every Papa Johns dessert in 2026 \u2014 Chocolate Chip Cookie, Double Chocolate Brownie, Cinnamon Pull Aparts & Oreo Papa Bites. Prices, calories & honest reviews.",
  content: `
<p>Most people order Papa John's for the pizza. But here's what the regulars know: the desserts are just as good as the main event. The Chocolate Chip Cookie alone has developed a cult following that rivals the Pepperoni Pizza in terms of repeat orders — and for good reason.</p>

<p>In this complete 2026 guide, we break down every Papa Johns dessert — the Chocolate Chip Cookie, Double Chocolate Chip Brownie, Cinnamon Pull Aparts, and Oreo Cookie Papa Bites — with full prices, calories, honest reviews, and the best ways to order them. Whether you're finishing a family pizza night or just need something sweet, this guide tells you everything before you order.</p>

<h2>What Makes Papa Johns Desserts Different?</h2>

<p>Papa John's applies the same \"Better Ingredients\" philosophy to their desserts that they use for their pizzas. Every dessert is:</p>

<ul>
<li><strong>Baked fresh</strong> — never frozen or pre-made off-site</li>
<li><strong>Made with real ingredients</strong> — no artificial flavors in standard recipes</li>
<li><strong>Served warm</strong> — timed to come out of the oven with your pizza order</li>
<li><strong>Shareable portions</strong> — designed for groups, though solo ordering is completely valid</li>
</ul>

<p>The result is a dessert lineup that consistently outperforms expectations for a pizza chain. These are not afterthought menu fillers — they are genuinely good baked goods.</p>

<h2>All Papa Johns Desserts — Complete Menu with Prices (2026)</h2>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>Dessert</th>
<th>Price</th>
<th>Calories</th>
<th>Serves</th>
</tr>
</thead>
<tbody>
<tr><td>Chocolate Chip Cookie</td><td>$7.29</td><td>190 cal/slice (8 slices)</td><td>2–4 people</td></tr>
<tr><td>Double Chocolate Chip Brownie</td><td>$7.29</td><td>240 cal/square (9 squares)</td><td>2–4 people</td></tr>
<tr><td>Cinnamon Pull Aparts</td><td>$7.29</td><td>1,960 cal total / ~245 per piece</td><td>2–4 people</td></tr>
<tr><td>Oreo Cookie Papa Bites</td><td>$6.99</td><td>100 cal/roll (8 rolls)</td><td>1–3 people</td></tr>
</tbody>
</table>
</div>

<p><em>*Prices may vary slightly by location. Always check your local Papa Johns app for current pricing.</em></p>

<h2>1. Papa Johns Chocolate Chip Cookie — Full Review</h2>

<p><strong>Price:</strong> $7.29 | <strong>Calories:</strong> ~190 cal per slice | <strong>Serves:</strong> 2–4 people</p>

<p>If there is one Papa Johns dessert that every first-timer should try, it is the Chocolate Chip Cookie. This is not a standard cookie — it is a large, family-sized skillet-style cookie baked fresh and cut into 8 slices, served warm with gooey melted chocolate chips throughout.</p>

<h3>What It Tastes Like</h3>
<p>The texture sits somewhere between a classic cookie and a soft cookie cake — slightly crisp on the very outer edge, soft and chewy through the middle, with pockets of melted semi-sweet chocolate chips in every bite. The cookie is buttery and rich without being overwhelming, and the size means each slice is substantial enough to satisfy a genuine dessert craving.</p>

<h3>Why People Love It</h3>
<p>It arrives warm. That is genuinely the secret — the chocolate chips are still melted and gooey when the cookie comes out of the oven, which creates an entirely different experience from a pre-baked or refrigerated cookie. Combined with the soft, fresh-baked texture, it is hard to beat as a dessert for sharing at a pizza night.</p>

<h3>Best Way to Order It</h3>
<p>The Chocolate Chip Cookie pairs perfectly with a vanilla ice cream scoop if you have some at home. Order it as part of a Papa Pairings deal if available — combining a large pizza and a cookie frequently offers savings over ordering separately.</p>

<h3>Nutrition Breakdown (per slice, large cookie):</h3>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>Nutrient</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
<tr><td>Calories</td><td>~190 cal</td></tr>
<tr><td>Fat</td><td>~9g</td></tr>
<tr><td>Carbohydrates</td><td>~26g</td></tr>
<tr><td>Sugar</td><td>~15g</td></tr>
<tr><td>Protein</td><td>~2g</td></tr>
</tbody>
</table>
</div>

<p><strong>Allergens:</strong> Contains wheat, dairy, eggs, soy. Not gluten-free.</p>

<h2>2. Papa Johns Double Chocolate Chip Brownie — Full Review</h2>

<p><strong>Price:</strong> $7.29 | <strong>Calories:</strong> ~240 cal per square | <strong>Serves:</strong> 2–4 people</p>

<p>The Double Chocolate Chip Brownie is for serious chocolate lovers. Where the Chocolate Chip Cookie is sweet and buttery, the brownie is dense, fudgy, and intensely chocolatey — a completely different eating experience on the same dessert menu.</p>

<h3>What It Tastes Like</h3>
<p>Each order comes as 9 individual brownie squares — soft and slightly cakey on the outside, warm and fudgy in the center, packed with semi-sweet chocolate chips throughout. The \"double chocolate\" comes from both chocolate in the batter and the extra chocolate chips baked in, creating a rich, layered chocolate flavor that genuine chocolate lovers will appreciate immediately.</p>

<h3>Why People Love It</h3>
<p>It is the most indulgent item on the Papa Johns dessert menu. If the Chocolate Chip Cookie is the safe, crowd-pleasing choice, the Double Chocolate Chip Brownie is the choice for people who want maximum chocolate in every bite. The 9-square format also makes it easy to share without anyone feeling shortchanged.</p>

<h3>Best Way to Order It</h3>
<p>Order it fresh and eat it warm — the brownie texture is at its absolute best within the first 20 minutes after baking. If you have leftovers, reheat in a conventional oven at 300°F for 5 minutes to restore the warm, fudgy center. Microwaving works in a pinch but can make the texture rubbery.</p>

<h3>Nutrition Breakdown (per square):</h3>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>Nutrient</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
<tr><td>Calories</td><td>~240 cal</td></tr>
<tr><td>Fat</td><td>~12g</td></tr>
<tr><td>Carbohydrates</td><td>~32g</td></tr>
<tr><td>Sugar</td><td>~23g</td></tr>
<tr><td>Protein</td><td>~3g</td></tr>
</tbody>
</table>
</div>

<p><strong>Allergens:</strong> Contains wheat, dairy, eggs. Not gluten-free. Not vegan.</p>

<h2>3. Papa Johns Cinnamon Pull Aparts — Full Review</h2>

<p><strong>Price:</strong> $7.29 | <strong>Calories:</strong> ~1,960 cal total (~245 per piece) | <strong>Serves:</strong> 2–4 people</p>

<p>The Cinnamon Pull Aparts are the most unique item on the Papa Johns dessert menu — and in many ways, the most addictive. These are soft, bakery-style dough pieces dusted in cinnamon sugar and drizzled with a sweet white icing, served warm and designed to be pulled apart piece by piece.</p>

<h3>What It Tastes Like</h3>
<p>The dough is soft and pillowy — the same quality fresh dough that Papa Johns uses for their pizza crust — with a generous coating of cinnamon sugar on the outside and a warm, sweet icing drizzle that soaks into the dough slightly as it bakes. Each piece has a fluffy interior and a lightly crisped cinnamon exterior. The flavor is warm, comforting, and unmistakably cinnamon-forward without being overwhelming.</p>

<h3>Why People Love It</h3>
<p>The pull-apart format makes it uniquely social — it is genuinely more fun to eat than a standard cookie or brownie. The dough quality is noticeably better than typical fast food cinnamon items because Papa Johns uses real, fresh-made dough. For anyone who loves cinnamon rolls, soft pretzels, or warm baked goods, the Cinnamon Pull Aparts are the standout on the Papa Johns dessert menu.</p>

<h3>Best Way to Order It</h3>
<p>Eat immediately — these are best hot from the oven when the icing is still slightly warm and the dough is at peak softness. They do not reheat as well as the brownie or cookie. Order them only if you plan to eat them right away.</p>

<h3>Nutrition Breakdown (full order):</h3>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>Nutrient</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
<tr><td>Calories</td><td>~1,960 total</td></tr>
<tr><td>Per Piece</td><td>~245 cal</td></tr>
<tr><td>Fat</td><td>~7g per piece</td></tr>
<tr><td>Carbohydrates</td><td>~40g per piece</td></tr>
<tr><td>Sugar</td><td>~18g per piece</td></tr>
</tbody>
</table>
</div>

<p><strong>Allergens:</strong> Contains wheat, dairy. Check local menu for full allergen list.</p>

<h2>4. Papa Johns Oreo Cookie Papa Bites — Full Review</h2>

<p><strong>Price:</strong> $6.99 | <strong>Calories:</strong> ~100 cal per roll | <strong>Serves:</strong> 1–3 people</p>

<p>The Oreo Cookie Papa Bites are the most playful item on the Papa Johns dessert menu — and at $6.99 for 8 rolls, also the most affordable. These are Papa Johns' fresh dough formed into small rolls, filled with an Oreo-inspired filling, baked until soft, and drizzled with a sweet cream cheese-style icing.</p>

<h3>What It Tastes Like</h3>
<p>The combination of Papa Johns' signature soft dough and the Oreo cookie filling creates something genuinely unexpected — a warm, gooey, cookies-and-cream flavor in a pull-apart format. The icing drizzle adds extra sweetness and a creamy contrast to the chocolate Oreo filling. Each roll is about two bites, making them easy to snack through.</p>

<h3>Why People Love It</h3>
<p>They are the lightest dessert on the menu — at 100 calories per roll, they are the easiest to justify compared to the brownie or cookie. They are also the most fun to eat, and the Oreo flavor combination is genuinely surprising in the best way. For kids especially, the Oreo Cookie Papa Bites are consistently the most-ordered dessert on family pizza nights.</p>

<h3>Best Way to Order It</h3>
<p>These work best as a lighter dessert after a big pizza order, or as a fun snack for younger family members. They are best eaten warm but hold their texture slightly better than the Cinnamon Pull Aparts if there are leftovers.</p>

<h3>Nutrition Breakdown (per roll):</h3>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>Nutrient</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
<tr><td>Calories</td><td>~100 cal</td></tr>
<tr><td>Fat</td><td>~3g</td></tr>
<tr><td>Carbohydrates</td><td>~16g</td></tr>
<tr><td>Sugar</td><td>~7g</td></tr>
<tr><td>Protein</td><td>~2g</td></tr>
</tbody>
</table>
</div>

<p><strong>Allergens:</strong> Contains wheat, dairy, soy. Contains Oreo (wheat, dairy, soy).</p>

<h2>Papa Johns Desserts Compared — Which One Should You Order?</h2>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>If you want...</th>
<th>Order this</th>
</tr>
</thead>
<tbody>
<tr><td>Classic, crowd-pleasing sweet</td><td>Chocolate Chip Cookie</td></tr>
<tr><td>Maximum chocolate intensity</td><td>Double Chocolate Chip Brownie</td></tr>
<tr><td>Warm, bakery-style comfort food</td><td>Cinnamon Pull Aparts</td></tr>
<tr><td>Lightest option / fun for kids</td><td>Oreo Cookie Papa Bites</td></tr>
<tr><td>Best value for money</td><td>Oreo Cookie Papa Bites ($6.99)</td></tr>
<tr><td>Best for sharing 4+ people</td><td>Chocolate Chip Cookie or Brownie</td></tr>
</tbody>
</table>
</div>

<h2>How to Save Money on Papa Johns Desserts</h2>

<p><strong>1. Papa Rewards:</strong> Every dessert order earns Papa Dough points toward free food. Join the <a href=\"/papa-johns-rewards\">Papa Rewards program</a> for free and earn on every order.</p>

<p><strong>2. Bundle deals:</strong> Papa Johns frequently bundles a dessert with a large pizza order at a discounted combo price. Always check for active bundle deals before ordering separately.</p>

<p><strong>3. Promo codes:</strong> Desserts are included in sitewide percentage-off promo codes. A 25% off code on a $25 order saves you nearly $2 on your dessert alone. Check <a href=\"/coupons\">Papa Johns coupons</a> before every order.</p>

<p><strong>4. App-only deals:</strong> The Papa Johns app occasionally offers exclusive dessert deals not available on the website. Download the app and enable notifications for the best dessert prices.</p>

<h2>Papa Johns Desserts — Calories & Nutrition Summary</h2>

<p>For anyone managing their intake, here is the full calorie comparison across all Papa Johns desserts:</p>

<div class=\"overflow-x-auto\">
<table>
<thead>
<tr>
<th>Dessert</th>
<th>Serving Size</th>
<th>Calories per Serving</th>
<th>Total Order Calories</th>
</tr>
</thead>
<tbody>
<tr><td>Chocolate Chip Cookie</td><td>1 slice (1/8 cookie)</td><td>~190 cal</td><td>~1,520 total</td></tr>
<tr><td>Double Chocolate Chip Brownie</td><td>1 square</td><td>~240 cal</td><td>~2,160 total</td></tr>
<tr><td>Cinnamon Pull Aparts</td><td>1 piece</td><td>~245 cal</td><td>~1,960 total</td></tr>
<tr><td>Oreo Cookie Papa Bites</td><td>1 roll</td><td>~100 cal</td><td>~800 total</td></tr>
</tbody>
</table>
</div>

<p><strong>Lowest calorie choice:</strong> Oreo Cookie Papa Bites at 100 cal per roll — by far the lightest option.<br>
<strong>Highest calorie choice:</strong> Double Chocolate Chip Brownie at 240 cal per square — but also the most satisfying for chocolate lovers.</p>

<p>For complete nutrition and allergen details, see our <a href=\"/posts/papa-johns-nutrition-guide\">Papa Johns Nutrition Guide</a>.</p>

<h2>Frequently Asked Questions — Papa Johns Desserts</h2>

<p><strong>What desserts does Papa Johns have in 2026?</strong><br>
Papa Johns offers four desserts in 2026: Chocolate Chip Cookie ($7.29), Double Chocolate Chip Brownie ($7.29), Cinnamon Pull Aparts ($7.29), and Oreo Cookie Papa Bites ($6.99). All are baked fresh and available for delivery or carryout.</p>

<p><strong>How much do Papa Johns desserts cost?</strong><br>
Papa Johns desserts range from $6.99 (Oreo Cookie Papa Bites) to $7.29 (Chocolate Chip Cookie, Double Chocolate Chip Brownie, and Cinnamon Pull Aparts). Prices may vary slightly by location.</p>

<p><strong>Are Papa Johns desserts good?</strong><br>
Yes — Papa Johns desserts consistently receive strong reviews, particularly the Chocolate Chip Cookie and Double Chocolate Chip Brownie. The key differentiator is that they are baked fresh using real dough, creating a noticeably better texture than pre-baked fast food desserts.</p>

<p><strong>How many calories are in Papa Johns Chocolate Chip Cookie?</strong><br>
One slice of the Papa Johns Chocolate Chip Cookie (1/8 of the full cookie) contains approximately 190 calories. The full cookie contains approximately 1,520 calories total across 8 slices.</p>

<p><strong>Are Papa Johns desserts vegan?</strong><br>
No standard Papa Johns desserts are fully vegan — all contain dairy and/or eggs. The Cinnamon Pull Aparts may have fewer dairy components but should be confirmed at your local store. Papa Johns does not currently offer a dedicated vegan dessert option.</p>

<p><strong>Can I order Papa Johns desserts without pizza?</strong><br>
Yes — all Papa Johns desserts can be ordered as standalone items for delivery or carryout without requiring a pizza or any minimum order beyond the standard delivery minimum.</p>

<p><strong>What is the best Papa Johns dessert?</strong><br>
For overall crowd appeal, the Chocolate Chip Cookie is the most popular Papa Johns dessert. For chocolate lovers specifically, the Double Chocolate Chip Brownie is the strongest choice. For something lighter and fun, Oreo Cookie Papa Bites at 100 cal per roll are the best option.</p>

<p><strong>Does Papa Johns have seasonal desserts?</strong><br>
Papa Johns occasionally introduces limited-time seasonal desserts around major holidays including pumpkin-flavored options in fall and gingerbread-inspired items in winter. Check the current menu at <a href=\"/menus-prices\">papajohns-menus.us/menus-prices</a> for any active seasonal items.</p>

<h2>Final Verdict — Are Papa Johns Desserts Worth Ordering?</h2>

<p>Absolutely — and the price makes the decision easy. At $6.99–$7.29 per dessert order serving 2–4 people, Papa Johns desserts represent excellent value for a freshly baked sweet treat.</p>

<p>The Chocolate Chip Cookie is the safest choice for groups. The Double Chocolate Chip Brownie is the right call for serious chocolate lovers. The Cinnamon Pull Aparts are the most unique and social experience on the menu. The Oreo Cookie Papa Bites are the best choice for kids or when you want something lighter.</p>

<p>Whatever you choose, order it warm and eat it fresh. That is when Papa Johns desserts are at their absolute best.</p>

<p>👉 Find your nearest Papa John's: <a href=\"/store-locator\">Store Locator</a><br>
👉 Check current dessert deals: <a href=\"/coupons\">Papa Johns Coupons</a><br>
👉 View full menu with prices: <a href=\"/menus-prices\">Papa Johns Menu 2026</a><br>
👉 Also read: <a href=\"/posts/sides\">Papa Johns Sides & Dips Guide</a> | <a href=\"/posts/classic-pizzas\">Classic Pizzas</a></p>
  `,
  date: new Date().toISOString(),
  author: "Papa John's Experts",
  category: "Menu Guides",
  image: "/oreo-cookie-papa-bites.webp",
  imageAlt: "Papa Johns Desserts Menu Chocolate Chunk Cookie",
  price: "From $6.99",
  calories: "100-245 / piece",
  prepTime: "Baked Fresh to Order",
  serves: "1-4 People",
  rating: 4.8,
  ingredients: [
    "Semi-sweet chocolate chips",
    "Real butter and brown sugar",
    "Fresh-baked original dough",
    "Cinnamon sugar & icing"
  ]
};

try {
  let data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
  // Remove existing if any
  data = data.filter(p => p.slug !== newPost.slug);
  // Add new post
  data.unshift(newPost);
  
  fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
  console.log("Successfully added Papa Johns Desserts to posts.json");
} catch (error) {
  console.error("Error updating posts.json:", error);
}
