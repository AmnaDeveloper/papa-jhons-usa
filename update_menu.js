const fs = require('fs');

const path = './src/app/data/posts.json';
let data = [];
try {
  data = JSON.parse(fs.readFileSync(path, 'utf8'));
} catch(e) {
  console.error("error read file", e);
  process.exit(1);
}

const postIndex = data.findIndex(p => p.slug === 'papa-johns-menu-prices-guide');
if (postIndex === -1) {
  console.log('Post not found!');
  process.exit(1);
}

data[postIndex].title = "Papa Johns Menu with Prices (2026): Complete Guide to Every Item";

data[postIndex].content = `
<p>Planning your next <strong>Papa Johns</strong> order but not sure what's on the menu or how much it costs? You've come to the right place. This complete <strong>papa johns menu</strong> guide covers every single item available in 2026 — from their signature pizzas and crowd-pleasing wings to the newer <a href="/posts/new-papadias-flavors-2026">Papadias</a>, Papa Bites, sides, desserts, drinks, and dipping sauces — all with up-to-date prices.</p>

<p><span style="background:#CCEE18;color:#1A3D17;font-weight:900;padding:4px 10px;border-radius:6px;display:inline-block;margin-bottom:8px;">Last Updated: March 2026</span></p>

<p>Whether you're ordering for yourself, feeding a family, hunting for the <a href="/coupons">best Papa Johns deals</a>, or just curious about what Papa Johns has to offer, this guide gives you everything you need in one place. We've also included calorie information, a breakdown of all current crust types, the best current deals, and tips on how to get the most value from your order.</p>

<p>Let's explore the full Papa Johns menu — slice by slice. 🍕</p>

<h2>Why Papa Johns? A Quick Brand Overview</h2>
<p>Papa Johns was founded in 1984 by John Schnatter in Jeffersonville, Indiana — starting out of a converted broom closet in his father's tavern. Fast forward to 2026, and <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer">Papa Johns</a> is now the third-largest pizza chain in the United States, operating over 5,400 locations across more than 44 countries worldwide. You can <a href="/store-locator">find your nearest Papa Johns location</a> using our store locator.</p>

<p>What makes Papa Johns stand apart from competitors like Domino's and Pizza Hut? Their core philosophy — 'Better Ingredients. Better Pizza.' — is more than just a slogan. Papa Johns uses fresh, never-frozen dough, 100% real mozzarella cheese, vine-ripened tomato sauce, and quality toppings with no artificial flavors or MSG in their standard recipes.</p>

<p>The result is a pizza that tastes noticeably fresher. And with a menu that has grown to include wings, flatbreads, bite-sized snacks, and more, Papa Johns is now a full meal destination, not just a pizza place. Make sure to check the <a href="/papa-johns-rewards">Papa Johns Rewards program</a> before you order to earn points on every purchase.</p>

<h2>Papa Johns Crust Options — All 6 Types Explained</h2>
<p>The foundation of every great Papa Johns pizza is the crust. In 2026, Papa Johns offers six distinct crust options to suit every preference and dietary need. Check our <a href="/menus-prices">full menu &amp; prices page</a> for the latest crust availability at your location:</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Crust Type</th>
<th>Cal/Slice</th>
<th>Texture</th>
<th>Price Range</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr><td>Original Hand Tossed</td><td>~270 cal</td><td>Soft &amp; chewy</td><td>$10.99–$18.99</td><td>Classic pizza lovers</td></tr>
<tr><td>Thin Crust</td><td>~200 cal</td><td>Crispy, light</td><td>$10.99–$18.99</td><td>Calorie-conscious eaters ✅</td></tr>
<tr><td>New York Style</td><td>~320 cal</td><td>Large, foldable</td><td>$11.99 (XL deal)</td><td>Authentic NY pizza fans</td></tr>
<tr><td>Epic Stuffed Crust</td><td>~330 cal</td><td>Cheesy edge</td><td>$13.99–$22.99</td><td>Cheese lovers</td></tr>
<tr><td>Garlic Epic Stuffed Crust</td><td>~370 cal</td><td>Garlic cheesy edge</td><td>$13.99–$22.99</td><td>Garlic + cheese fans</td></tr>
<tr><td>Gluten-Free Crust</td><td>~150 cal</td><td>Lighter, crispier</td><td>$10.99–$13.99</td><td>Gluten-sensitive* only</td></tr>
</tbody>
</table>
</div>

<p>⚠️ <strong>Note:</strong> Gluten-Free Crust is baked in shared ovens — not safe for celiac disease. Contains milk, egg, and soy. For full nutrition details see our <a href="/posts/papa-johns-nutrition-guide">Papa Johns nutrition guide</a>.</p>

<h2>Papa Johns Pizza Menu with Prices (2026)</h2>
<p>The <strong>Papa Johns pizza menu</strong> is divided into classic pizzas you build yourself and handcrafted <a href="/menus-prices">specialty pizzas</a> with preset toppings. Here's the complete breakdown:</p>

<h3>Classic Pizzas — Build Your Own</h3>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Pizza</th>
<th>Small</th>
<th>Medium</th>
<th>Large</th>
<th>XL</th>
</tr>
</thead>
<tbody>
<tr><td>Cheese Pizza</td><td>$10.99</td><td>$12.99</td><td>$14.99</td><td>$16.99</td></tr>
<tr><td>Pepperoni Pizza</td><td>$10.99</td><td>$12.99</td><td>$15.78</td><td>$17.99</td></tr>
<tr><td>Sausage Pizza</td><td>$10.99</td><td>$12.99</td><td>$14.99</td><td>$16.99</td></tr>
<tr><td>Create Your Own</td><td>$10.99+</td><td>$12.99+</td><td>$14.99+</td><td>$16.99+</td></tr>
</tbody>
</table>
</div>

<h3>Handcrafted Specialty Pizzas — 2026</h3>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Specialty Pizza</th>
<th>Price</th>
<th>Cal/Slice</th>
<th>What's On It</th>
</tr>
</thead>
<tbody>
<tr><td>The Works Pizza</td><td>$18.99</td><td>~340 cal</td><td>Pepperoni, sausage, mushrooms, onions, green peppers, black olives</td></tr>
<tr><td>The Meats Pizza</td><td>$18.99</td><td>~380 cal</td><td>Pepperoni, sausage, bacon, grilled chicken</td></tr>
<tr><td>Shaq-a-Roni Pizza</td><td>$18.78</td><td>~390 cal</td><td>XL pizza, extra cheese, extra pepperoni — Shaq's signature</td></tr>
<tr><td>Philly Cheesesteak Pizza</td><td>$18.99</td><td>~360 cal</td><td>Beef, onions, green peppers, mozzarella &amp; provolone</td></tr>
<tr><td>Fiery Buffalo Chicken Pizza</td><td>$18.99</td><td>~330 cal</td><td>Buffalo sauce, chicken, onions, bacon, mozzarella</td></tr>
<tr><td>BBQ Chicken Bacon Pizza</td><td>$18.99</td><td>~350 cal</td><td>BBQ sauce, grilled chicken, bacon, onions</td></tr>
<tr><td>Super Hawaiian Pizza</td><td>$18.99</td><td>~340 cal</td><td>Ham, bacon, pineapple, banana peppers, mozzarella</td></tr>
<tr><td>Ultimate Pepperoni Pizza</td><td>$18.99</td><td>~360 cal</td><td>Double pepperoni, extra cheese — the pepperoni lover's dream</td></tr>
<tr><td>Tuscan Six Cheese Pizza</td><td>$18.99</td><td>~320 cal</td><td>Parmesan, Romano, Asiago, Fontina, Provolone &amp; Mozzarella</td></tr>
<tr><td>Garden Fresh Pizza</td><td>$18.99</td><td>~280 cal</td><td>Mushrooms, onions, green peppers, black olives, tomatoes</td></tr>
<tr><td>Spinach &amp; Tomato Alfredo</td><td>$18.99</td><td>~290 cal</td><td>Alfredo sauce, fresh spinach, diced tomatoes, mozzarella</td></tr>
<tr><td>Zesty Italian Trio Pizza</td><td>$18.99</td><td>~350 cal</td><td>Pepperoni, Italian sausage, salami, banana peppers, Italian seasoning</td></tr>
</tbody>
</table>
</div>

<p>💡 <strong>Best Value Pick:</strong> <a href="/coupons">Papa Pairings deal</a> — mix and match any 2+ medium 1-topping pizzas + sides for just $6.99 each!</p>

<h2>Papa Johns Papadias — Flatbread Sandwiches with a Pizza Twist</h2>
<p>Papadias are Papa Johns' answer to the flatbread sandwich — pizza ingredients folded into a fresh-baked, foldable flatbread. Read our detailed <a href="/posts/new-papadias-flavors-2026">Papadias flavor guide</a> for the full breakdown. They're hearty, handheld, and perfect if you want a more sandwich-style meal. Each Papadia is priced at $7.99–$8.99 and contains around 780–820 calories.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Papadia</th>
<th>Price</th>
<th>Calories</th>
<th>Key Ingredients</th>
</tr>
</thead>
<tbody>
<tr><td>Philly Cheesesteak Papadia</td><td>$7.99</td><td>~800 cal</td><td>Steak, onions, green peppers, cheese sauce</td></tr>
<tr><td>BBQ Chicken &amp; Bacon Papadia</td><td>$7.99</td><td>~820 cal</td><td>BBQ sauce, grilled chicken, bacon, mozzarella</td></tr>
<tr><td>Grilled Buffalo Chicken Papadia</td><td>$7.99</td><td>~780 cal</td><td>Buffalo sauce, grilled chicken, onions, mozzarella</td></tr>
<tr><td>Italian Papadia</td><td>$7.99</td><td>~810 cal</td><td>Alfredo sauce, Italian sausage, salami, banana peppers</td></tr>
</tbody>
</table>
</div>

<p>💡 <strong>Pro Tip:</strong> Papadias come with a dipping sauce of your choice. Order the garlic dipping sauce for the ultimate flavor boost.</p>

<h2>Papa Johns Papa Bites — Bite-Sized &amp; Boldly Flavored</h2>
<p>Papa Bites are one of the most exciting additions to the Papa Johns menu — small, pull-apart rolls available in both savory and sweet versions. Perfect as a snack, starter, or dessert. Each order contains 8 rolls and is priced at $6.99.</p>

<h3>Savory Papa Bites:</h3>
<ul>
<li><strong>Jalapeño Papa Bites</strong> — ~80 cal/roll | Cream cheese-filled, jalapeño on top, crispy finish</li>
<li><strong>Chicken Parmesan Papa Bites</strong> — ~90 cal/roll | Chicken, marinara, mozzarella, Parmesan</li>
<li><strong>Crispy Cuppy Roni Papa Bites</strong> — ~95 cal/roll | Pizza sauce, pepperoni, mozzarella (limited time 2026)</li>
</ul>

<h3>Sweet Papa Bites:</h3>
<ul>
<li><strong>OREO Cookie Papa Bites</strong> — ~85 cal/roll | OREO cookie pieces, cream cheese icing drizzle — a dessert crowd favorite</li>
</ul>

<p>🔥 <strong>New 2026:</strong> Crispy Cuppy Roni Papa Bites are a limited-time item in 2026 — order before they disappear! Check <a href="https://www.papajohns.com/order/menu" target="_blank" rel="noopener noreferrer">papajohns.com menu</a> for current availability.</p>

<h2>Papa Johns Wings Menu — Flavors, Prices &amp; Calories</h2>
<p>Papa Johns wings are oven-baked (not fried), making them slightly lighter than typical fast-food wings. Available in bone-in and boneless varieties, they're a great addition to any pizza order — or a satisfying standalone meal.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Wing Flavor</th>
<th>Type</th>
<th>Price (8 pc)</th>
<th>Cal (4 pc)</th>
<th>Flavor Profile</th>
</tr>
</thead>
<tbody>
<tr><td>Buffalo Wings</td><td>Bone-in</td><td>$8.49</td><td>~240 cal</td><td>Classic spicy &amp; tangy</td></tr>
<tr><td>Honey Chipotle Wings</td><td>Bone-in</td><td>$8.49</td><td>~260 cal</td><td>Sweet, smoky, mild heat</td></tr>
<tr><td>Garlic Parmesan Wings</td><td>Bone-in</td><td>$8.49</td><td>~270 cal</td><td>Rich, savory, garlicky</td></tr>
<tr><td>Unsauced Roasted Wings</td><td>Bone-in</td><td>$8.49</td><td>~220 cal ✅</td><td>Plain, lowest calorie</td></tr>
<tr><td>Hot Lemon Pepper Wings</td><td>Bone-in</td><td>$8.49</td><td>~245 cal</td><td>Citrusy + spicy kick</td></tr>
<tr><td>Boneless Buffalo Wings</td><td>Boneless</td><td>$8.49</td><td>~310 cal</td><td>Classic Buffalo, no bones</td></tr>
<tr><td>Boneless Honey Chipotle</td><td>Boneless</td><td>$8.49</td><td>~320 cal</td><td>Sweet &amp; smoky, no bones</td></tr>
</tbody>
</table>
</div>

<h2>Papa Johns Sides Menu — Perfect Pairings for Your Pizza</h2>
<p>Papa Johns offers a well-rounded sides menu that goes beyond just breadsticks. Here's every side available and what to expect. For a full calorie breakdown see our <a href="/posts/papa-johns-nutrition-guide">Papa Johns nutrition guide</a>:</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Side Item</th>
<th>Price</th>
<th>Cal (serving)</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr><td>Garlic Knots</td><td>$6.00</td><td>~310 cal/4pc</td><td>Fresh-baked, garlic Parmesan seasoning — the #1 side item</td></tr>
<tr><td>Breadsticks</td><td>$8.29</td><td>~290 cal/2pc</td><td>Classic garlic-buttered breadsticks, great for dipping</td></tr>
<tr><td>Cheesesticks</td><td>$8.29</td><td>~340 cal/2pc</td><td>Freshly baked with real mozzarella and garlic butter</td></tr>
<tr><td>Jalapeño Bacon Cheesesticks</td><td>$8.29</td><td>~360 cal/2pc</td><td>Cheesesticks upgraded with jalapeños and crispy bacon</td></tr>
<tr><td>Papa Bowls</td><td>$8.29</td><td>~520 cal/bowl</td><td>Crustless pizza in a bowl — great for low-carb &amp; keto eaters</td></tr>
</tbody>
</table>
</div>

<h2>Papa Johns Dessert Menu — Sweet Endings</h2>
<p>Save room for dessert! The Papa Johns dessert menu is simple but satisfying. Whether you want something chocolatey, cinnamony, or playfully sweet, there's a dessert for every craving:</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Dessert</th>
<th>Price</th>
<th>Calories</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr><td>Double Chocolate Chip Brownie</td><td>$8.49</td><td>~430 cal</td><td>Warm, fudgy brownie loaded with chocolate chips — best seller</td></tr>
<tr><td>Cinnamon Pull-Aparts</td><td>$7.49</td><td>~420 cal</td><td>Bite-sized cinnamon rolls, dusted with sugar, cream cheese drizzle</td></tr>
<tr><td>OREO Cookie Papa Bites</td><td>$6.99</td><td>~85 cal/roll</td><td>Pull-apart sweet rolls with OREO pieces and icing. 8 rolls.</td></tr>
</tbody>
</table>
</div>

<p>💡 <strong>Best Deal:</strong> Order Papa Bites (OREO) — 8 individual sweet rolls at $6.99 is better value than any single dessert if sharing with a group. Use a <a href="/coupons">Papa Johns promo code</a> to save even more!</p>

<h2>Papa Johns Dipping Sauces — Enhance Every Bite</h2>
<p>Every Papa Johns order comes with one free Special Garlic Sauce. Additional sauces are available for $0.75 each. Here are all the options:</p>
<ul>
<li><strong>Special Garlic Sauce</strong> — ~150 cal | Buttery, garlicky — the iconic Papa Johns dipping sauce. Free with every order.</li>
<li><strong>Pizza Sauce</strong> — ~25 cal | The classic tomato base. Great for dipping breadsticks.</li>
<li><strong>Blue Cheese</strong> — ~170 cal | Creamy, tangy. Best with Buffalo wings.</li>
<li><strong>Ranch</strong> — ~140 cal | Crowd-pleasing, works with everything.</li>
<li><strong>BBQ Sauce</strong> — ~50 cal | Smoky-sweet. Perfect with chicken wings or Papa Bites.</li>
<li><strong>Honey Mustard</strong> — ~130 cal | Sweet-tangy. Great with boneless wings.</li>
<li><strong>Garlic Parmesan</strong> — ~160 cal | Rich and savory. Pairs with cheesesticks or crust.</li>
</ul>

<h2>Papa Johns Drinks Menu</h2>
<p>Papa Johns keeps the drinks menu simple — Coca-Cola products in 20oz bottles or 2-liter options:</p>
<ul>
<li><strong>Coca-Cola</strong> — $2.29 (20oz) / $3.99 (2-liter)</li>
<li><strong>Diet Coke</strong> — $2.29 (20oz) / $3.99 (2-liter)</li>
<li><strong>Dr Pepper</strong> — $2.29 (20oz) / $3.99 (2-liter)</li>
<li><strong>Mug Root Beer</strong> — $2.29 (20oz)</li>
<li><strong>Crush Orange</strong> — $2.29 (20oz)</li>
</ul>
<p>💡 <strong>Tip:</strong> Order the 2-liter for group orders — it's much better value per serving than individual bottles.</p>

<h2>Best Papa Johns Deals &amp; Specials in 2026</h2>
<p>Papa Johns is known for offering some of the best pizza deals in the business. Here are the top offers to look for right now. Bookmark our <a href="/coupons">Papa Johns coupons page</a> — we update it weekly with the latest codes:</p>

<h3>Papa Pairings — Most Popular Deal:</h3>
<p>Mix and match any two or more medium 1-topping pizzas, wings, Papadias, breadsticks, cheesesticks, or desserts for just $6.99 each. This is the best value deal on the entire menu, especially for families or group orders.</p>

<h3>Game Day Deal:</h3>
<p>Get an XL New York Style pizza with one topping for just $11.99 — perfect for watching sports with friends.</p>

<h3>Papa Rewards Program:</h3>
<ul>
<li>Earn 1 point per $5 spent on every order</li>
<li>Redeem points for free pizzas, sides, and discounts</li>
<li>Birthday reward — free item on your birthday when you sign up</li>
<li>Sign up free at <a href="https://www.papajohns.com/papa-rewards" target="_blank" rel="noopener noreferrer">papajohns.com/papa-rewards</a> or view our <a href="/papa-johns-rewards">Papa Rewards guide</a></li>
</ul>

<h3>Promo Codes (Check Before Every Order):</h3>
<ul>
<li>25% off sitewide — codes updated monthly on our <a href="/coupons">Papa Johns promo codes page</a></li>
<li>Buy one get one free — available during special events and holidays</li>
<li>$10 off $20+ orders — available via email list and app notifications</li>
</ul>
<p>📌 <strong>Pro Tip:</strong> Always check for a <a href="/coupons">promo code</a> before completing your order. Papa Johns offers sitewide discounts almost every week — you can save 25-50% regularly.</p>

<h2>Final Thoughts — The Complete Papa Johns Menu Has Something for Everyone</h2>
<p>Whether you're a die-hard pepperoni fan, a wing lover, a vegetarian, or someone who just wants the most cheese possible — the <strong>Papa Johns menu in 2026</strong> truly has something for everyone. With six crust options, over a dozen specialty pizzas, new Papa Bites, satisfying <a href="/posts/new-papadias-flavors-2026">Papadias</a>, and some of the best fast-food deals around, Papa Johns continues to deliver on its 'Better Ingredients. Better Pizza.' promise.</p>

<p>Before placing your next order, always check for a current <a href="/coupons">promo code</a> — you can often save 25-50% on your entire order. And if you want to order smart and stay on track health-wise, be sure to check our full <a href="/posts/papa-johns-nutrition-guide">Papa Johns nutrition guide</a>.</p>

<p>👉 Order from the Papa Johns menu now: <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer">papajohns.com</a></p>
`;

data[postIndex].pricing = [
  { item: "Original Hand Tossed Crust", price: "$10.99–$18.99", calories: "~270 cal/slice", icon: "🍕", popular: true },
  { item: "Thin Crust", price: "$10.99–$18.99", calories: "~200 cal/slice", icon: "🍕" },
  { item: "Epic Stuffed Crust", price: "$13.99–$22.99", calories: "~330 cal/slice", icon: "🧀", popular: true },
  { item: "The Works Pizza (Large)", price: "$18.99", calories: "~340 cal/slice", icon: "🔥" },
  { item: "Pepperoni Pizza (Large)", price: "$15.78", calories: "~230 cal/slice", icon: "🍕", popular: true },
  { item: "Shaq-a-Roni Pizza (XL)", price: "$18.78", calories: "~390 cal/slice", icon: "🏀" },
  { item: "Philly Cheesesteak Papadia", price: "$7.99", calories: "~800 cal", icon: "🥪" },
  { item: "OREO Cookie Papa Bites", price: "$6.99", calories: "~85 cal/roll", icon: "🍪" },
  { item: "Buffalo Wings (8 pieces)", price: "$8.49", calories: "~480 cal", icon: "🍗", popular: true },
  { item: "Garlic Knots (8 pieces)", price: "$6.00", calories: "~620 cal", icon: "🥖" },
  { item: "Double Choc Chip Brownie", price: "$8.49", calories: "~430 cal", icon: "🍫" },
  { item: "Special Garlic Sauce", price: "$0.75", calories: "~150 cal", icon: "🍯" }
];

data[postIndex].faqs = [
  { question: "What's on the Papa Johns menu in 2026?", answer: "The Papa Johns menu in 2026 includes a wide range of items: pizzas (classic and specialty), Papadias (flatbread sandwiches), Papa Bites (savory and sweet pull-apart rolls), chicken wings (bone-in and boneless in 7 flavors), sides (garlic knots, breadsticks, cheesesticks, Papa Bowls), desserts (brownie, cinnamon pull-aparts, OREO Papa Bites), dipping sauces, and drinks. They also offer 6 crust options including gluten-free and NY Style." },
  { question: "How much does Papa Johns pizza cost in 2026?", answer: "Papa Johns pizza prices in 2026 start at $10.99 for a small pizza. Medium pizzas range from $12.99 to $15.78, large pizzas from $14.99 to $18.99, and XL pizzas from $16.99 to $22.99. Specialty and handcrafted pizzas (like The Works, Shaq-a-Roni, or Philly Cheesesteak) are priced at $18.99 for a large. Prices may vary slightly by location." },
  { question: "What are the most popular items on the Papa Johns menu?", answer: "According to Papa Johns, the most popular menu items are: Pepperoni Pizza (their all-time best seller), The Works Pizza, Garlic Knots (most popular side), Double Chocolate Chip Brownie (top dessert), and Buffalo Wings. The Shaq-a-Roni Pizza and Philly Cheesesteak Papadia have also become customer favorites since their launch." },
  { question: "Does Papa Johns have a gluten-free menu option?", answer: "Yes, Papa Johns offers a Gluten-Free Crust. However, it is important to note that this crust is baked in shared facilities alongside wheat-containing products, making it unsuitable for customers with celiac disease. People with non-celiac gluten sensitivity may be able to tolerate it. The gluten-free crust also contains milk, egg, and soy — check with your store if you have additional allergies." },
  { question: "What is the cheapest item on the Papa Johns menu?", answer: "The cheapest items on the Papa Johns menu are the dipping sauces at $0.75 each. For a full meal, small pizzas start at $10.99, garlic knots are $6.00, and Papa Bites start at $6.99. The best budget deal is the Papa Pairings offer — two medium 1-topping pizzas (or mix of items) for just $6.99 each when you order two or more qualifying items." },
  { question: "Does Papa Johns have a menu for vegetarians?", answer: "Yes, Papa Johns has several vegetarian-friendly options. The Garden Fresh Pizza features mushrooms, onions, green peppers, black olives, and tomatoes. The Spinach &amp; Tomato Alfredo Pizza is another popular veggie option. You can also create your own pizza with vegetable toppings only. Additionally, the sides (garlic knots, breadsticks, cheesesticks) and most dipping sauces are vegetarian-friendly." },
  { question: "What are Papa Johns hours and how do I order?", answer: "Most Papa Johns locations are open Monday through Sunday from 10:00 AM to 1:00 AM (hours may vary by location). You can order online at papajohns.com, through the Papa Johns mobile app (iOS and Android), or by calling your nearest location. Online ordering gives you access to the best deals and exclusive app-only promotions. Use the store locator at locations.papajohns.com to find your nearest Papa Johns." }
];

fs.writeFileSync(path, JSON.stringify(data, null, 4));
console.log('Update successful!');
