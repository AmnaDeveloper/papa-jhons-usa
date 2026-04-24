const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const articleIndex = data.findIndex(p => p.slug === 'super-loaded');

if (articleIndex === -1) {
    console.error('Article not found!');
    process.exit(1);
}

const htmlContent = `
<p>If you've ever stared at a regular pizza and thought "this needs more" — you're exactly who Papa Johns built the Super Loaded Pizzas for. These aren't your average pies. We're talking edge-to-edge toppings, premium meats stacked generously, fresh-cut vegetables, and enough cheese to make any ordinary pizza feel underdressed.</p>

<p><span style="background:#CCEE18;color:#1A3D17;font-weight:900;padding:4px 10px;border-radius:6px;display:inline-block;margin-bottom:8px;">Last Updated: March 2026</span></p>

<p>In this complete 2026 guide, we break down every <a href="/posts/super-loaded">Super Loaded Pizza</a> on the Papa Johns menu — including full prices by size, calories per slice, honest flavor reviews, and the best ways to order them. Whether you're feeding a crowd or treating yourself, this is the only guide you need.</p>

<h2>What Are Papa Johns Super Loaded Pizzas?</h2>
<p>Super Loaded Pizzas are Papa Johns' specialty pizza lineup — the highest-tier, most topping-packed options on the entire menu. While <a href="/posts/classic-pizzas">Classic Pizzas</a> like Pepperoni or Cheese are crowd-pleasers, Super Loaded Pizzas are built for those who want maximum flavor in every bite.</p>

<p><strong>What sets them apart:</strong></p>
<ul>
    <li>More toppings than any Classic Pizza — up to 6 premium ingredients per pizza</li>
    <li>Higher-quality cuts — julienne-cut Canadian bacon, fresh-cut onions, crisp green peppers</li>
    <li>Every slice is loaded — no thin spots, no bare edges</li>
    <li>Available on any crust — Original, Thin, New York Style, or Epic Stuffed Crust</li>
</ul>

<p>These pizzas start at $14.99 and range up to $23.99 depending on size. Yes, they cost more than Classic Pizzas — but the difference in toppings and flavor density makes every extra dollar count.</p>

<h2>Full Super Loaded Pizza Menu with Prices (2026)</h2>
<p>Here's a complete breakdown of every Super Loaded Pizza at Papa Johns, with current estimated prices and calories:</p>

<h3>🍕 The Works</h3>
<p>The most popular Super Loaded Pizza at Papa Johns.</p>
<p><strong>Toppings:</strong> Pepperoni, julienne-cut Canadian bacon, spicy Italian sausage, fresh-cut onions, crisp green peppers, mushrooms</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Calories/Slice</th>
</tr>
</thead>
<tbody>
<tr><td>Small (10")</td><td>$14.99</td><td>210 cal</td></tr>
<tr><td>Medium (12")</td><td>$17.99</td><td>280 cal</td></tr>
<tr><td>Large (14")</td><td>$20.99</td><td>360 cal</td></tr>
<tr><td>Extra Large (16")</td><td>$23.99</td><td>450 cal</td></tr>
</tbody>
</table>
</div>
<p><strong>Why order it:</strong> The Works is the ultimate "I want everything" pizza. Six distinct ingredients come together in a way that's surprisingly balanced — the spicy sausage plays off the mild mushrooms, and the green peppers cut through the richness of the meats. If you're new to Super Loaded Pizzas, start here.</p>

<h3>🥩 The Meats</h3>
<p>For serious meat lovers only.</p>
<p><strong>Toppings:</strong> Pepperoni, spicy Italian sausage, julienne-cut Canadian bacon, beef, and a generous layer of extra mozzarella</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Calories/Slice</th>
</tr>
</thead>
<tbody>
<tr><td>Small (10")</td><td>$14.99</td><td>240 cal</td></tr>
<tr><td>Medium (12")</td><td>$17.99</td><td>310 cal</td></tr>
<tr><td>Large (14")</td><td>$20.99</td><td>390 cal</td></tr>
<tr><td>Extra Large (16")</td><td>$23.99</td><td>460 cal</td></tr>
</tbody>
</table>
</div>
<p><strong>Why order it:</strong> No vegetables, no compromise. The Meats is exactly what it sounds like — a full-on meat feast built for those who believe vegetables have no place on a pizza. The combination of four different proteins creates a layered savory experience that's genuinely hard to match anywhere else.</p>

<h3>🍍 Super Hawaiian</h3>
<p>Sweet, savory, and completely unapologetic.</p>
<p><strong>Toppings:</strong> Canadian bacon, pineapple tidbits, extra mozzarella cheese</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Calories/Slice</th>
</tr>
</thead>
<tbody>
<tr><td>Large (14")</td><td>$20.99</td><td>260 cal</td></tr>
<tr><td>Extra Large (16")</td><td>$23.99</td><td>320 cal</td></tr>
</tbody>
</table>
</div>
<p><strong>Why order it:</strong> Hawaiian pizza debates aside, Papa Johns' Super Hawaiian does it right. The pineapple is sweet but not overwhelming, and the Canadian bacon adds a smoky saltiness that balances everything out. At 260 calories per slice, it's also one of the lighter Super Loaded options.</p>

<h3>🔥 BBQ Chicken Bacon</h3>
<p>Smoky, tangy, and boldly flavored.</p>
<p><strong>Toppings:</strong> Grilled chicken, crispy bacon, onions, BBQ sauce base instead of tomato sauce</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Calories/Slice</th>
</tr>
</thead>
<tbody>
<tr><td>Large (14")</td><td>$20.99</td><td>310 cal</td></tr>
<tr><td>Extra Large (16")</td><td>$23.99</td><td>375 cal</td></tr>
</tbody>
</table>
</div>
<p><strong>Why order it:</strong> The BBQ sauce base changes everything. Instead of the traditional tomato base, this pizza uses a smoky BBQ sauce that soaks into the crust and coats every ingredient. The grilled chicken keeps it leaner, while the crispy bacon adds a crunch element you don't get anywhere else on the Super Loaded menu.</p>

<h3>🌶️ Fiery Buffalo Chicken</h3>
<p>Heat seekers, this one's built for you.</p>
<p><strong>Toppings:</strong> Grilled chicken, buffalo sauce base, banana peppers, onions, drizzle of ranch</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Calories/Slice</th>
</tr>
</thead>
<tbody>
<tr><td>Large (14")</td><td>$20.99</td><td>290 cal</td></tr>
<tr><td>Extra Large (16")</td><td>$23.99</td><td>350 cal</td></tr>
</tbody>
</table>
</div>
<p><strong>Why order it:</strong> Buffalo chicken on a pizza sounds like a shortcut, but Papa Johns executes it seriously. The buffalo sauce base brings real heat — not fake spicy — and the banana peppers add a vinegary brightness that cuts through the richness. The ranch drizzle cools everything down just enough.</p>

<h3>🧀 Fresh Tuscan Six Cheese</h3>
<p>For cheese lovers who want maximum dairy drama.</p>
<p><strong>Toppings:</strong> Six-cheese blend including mozzarella, provolone, Parmesan, romano, Asiago, and fontina</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Calories/Slice</th>
</tr>
</thead>
<tbody>
<tr><td>Large (14")</td><td>$20.99</td><td>280 cal</td></tr>
<tr><td>Extra Large (16")</td><td>$23.99</td><td>340 cal</td></tr>
</tbody>
</table>
</div>
<p><strong>Why order it:</strong> This is the pizza for people who believe that cheese is a topping. Six different cheeses create a complex, layered flavor profile that you simply can't get from a basic mozzarella pizza. The Asiago and fontina give it a slight sharpness that keeps it from feeling heavy.</p>

<h2>Crust Options for Super Loaded Pizzas</h2>
<p>Every Super Loaded Pizza can be ordered on any of Papa Johns' available crusts. Here's how each crust changes the experience:</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Crust</th>
<th>Extra Cost</th>
<th>Best Paired With</th>
</tr>
</thead>
<tbody>
<tr><td>Original</td><td>Included</td><td>The Works, The Meats</td></tr>
<tr><td>Thin Crust</td><td>Included</td><td>Super Hawaiian, Tuscan Six Cheese</td></tr>
<tr><td>New York Style</td><td>Included</td><td>The Meats, BBQ Chicken Bacon</td></tr>
<tr><td>Epic Stuffed Crust</td><td>+$3.00</td><td>The Works, Fiery Buffalo Chicken</td></tr>
<tr><td>Garlic Stuffed Crust</td><td>+$3.50</td><td>Tuscan Six Cheese, Super Hawaiian</td></tr>
</tbody>
</table>
</div>
<p>💡 <strong>Pro tip:</strong> The Epic Stuffed Crust upgrade ($3.00) adds warm, gooey mozzarella baked directly into the outer crust. On a pizza as loaded as The Works, this takes the experience from great to unforgettable. It adds approximately 60 calories per slice.</p>

<h2>How Super Loaded Pizzas Compare to Classic Pizzas</h2>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Feature</th>
<th>Classic Pizzas</th>
<th>Super Loaded Pizzas</th>
</tr>
</thead>
<tbody>
<tr><td>Toppings per pizza</td><td>1–3</td><td>4–6</td></tr>
<tr><td>Starting price</td><td>From $10.99</td><td>From $14.99</td></tr>
<tr><td>Calories/slice</td><td>180–250</td><td>210–460</td></tr>
<tr><td>Best for</td><td>Everyday meals</td><td>Special occasions, sharing</td></tr>
<tr><td>Customizable</td><td>Yes</td><td>Yes</td></tr>
</tbody>
</table>
</div>
<p>The price difference between Classic and Super Loaded averages about $4–6 per pizza. When you factor in the extra toppings — which would cost $1.50–$2.00 each if added individually — Super Loaded Pizzas actually deliver better value per topping than building a comparable pizza from scratch.</p>

<h2>Which Super Loaded Pizza Should You Order?</h2>
<p>Here's a quick guide based on what you're craving:</p>
<ul>
    <li><strong>I want the classic experience</strong> → <strong>The Works.</strong> It's the benchmark against which all other loaded pizzas should be judged.</li>
    <li><strong>I don't eat vegetables</strong> → <strong>The Meats.</strong> Zero vegetables, maximum protein.</li>
    <li><strong>I want something lighter</strong> → <strong>Super Hawaiian.</strong> Fewest calories on the Super Loaded menu.</li>
    <li><strong>I want bold, smoky flavors</strong> → <strong>BBQ Chicken Bacon.</strong> The BBQ sauce base makes this unlike anything else on the menu.</li>
    <li><strong>I like spicy food</strong> → <strong>Fiery Buffalo Chicken.</strong> Real heat, balanced by the ranch drizzle.</li>
    <li><strong>I love cheese above all else</strong> → <strong>Fresh Tuscan Six Cheese.</strong> Six-cheese blend is genuinely impressive.</li>
</ul>

<h2>Ordering Tips for Super Loaded Pizzas</h2>
<ol>
    <li><strong>Order a size up if you're sharing.</strong> Super Loaded Pizzas are heavy and filling — a Large comfortably feeds 3 people, but if you're adding <a href="/posts/sides">sides</a>, an Extra Large gives everyone more room.</li>
    <li><strong>Add the Epic Stuffed Crust on The Works.</strong> This is the single best upgrade you can make. The cheese-stuffed crust completes the "more is more" philosophy of the entire Super Loaded category.</li>
    <li><strong>Pair with Garlic Parmesan Breadsticks.</strong> The lighter, herby flavor of the breadsticks balances the intensity of a Super Loaded pizza better than any other <a href="/posts/sides">Papa Johns sides & dips</a>.</li>
    <li><strong>Use Papa Rewards for free points.</strong> Every dollar you spend on Papa Johns earns Papa Dough through the <a href="/papa-johns-rewards">Papa Rewards program</a>. A Large Super Loaded Pizza earns enough points toward a future free side.</li>
    <li><strong>Check for coupons before ordering.</strong> Super Loaded Pizzas occasionally appear in combo deals and weekly specials. Always check the latest <a href="/coupons">Papa Johns coupons</a> before placing your order — you can often get a Large Super Loaded for close to Classic Pizza prices.</li>
</ol>

<h2>Super Loaded Pizza Nutrition Guide</h2>
<p>Managing your intake while enjoying Super Loaded Pizzas is very possible. Here's what to know:</p>
<ul>
    <li><strong>Lowest calorie option:</strong> Super Hawaiian at 260 cal/slice (Large)</li>
    <li><strong>Highest calorie option:</strong> The Meats at 460 cal/slice (Extra Large)</li>
    <li><strong>Most protein-dense:</strong> The Meats (four types of protein per slice)</li>
    <li><strong>Vegetarian-friendly:</strong> Fresh Tuscan Six Cheese (no meat)</li>
</ul>
<p>For full nutritional details including sodium, carbohydrates, and allergen information, visit the <a href="/posts/papa-johns-nutrition-guide">Papa Johns Nutrition Guide</a>.</p>

<h2>Final Verdict: Are Papa Johns Super Loaded Pizzas Worth It?</h2>
<p>Short answer: yes, absolutely.</p>
<p>The price premium over <a href="/posts/classic-pizzas">Classic Pizzas</a> is real, but so is the difference in eating experience. Super Loaded Pizzas are built for occasions when you want a pizza that actually impresses — whether that's a family dinner, a game-night order, or simply a moment when only maximum flavor will do.</p>
<p>If you've never tried one, start with The Works on the Original Crust with Epic Stuffed Crust upgrade. It's the definitive Super Loaded experience and the reason these pizzas have become one of the most-ordered categories on the entire Papa Johns menu.</p>
<p>Ready to order? Find your nearest <a href="/store-locator">Papa Johns store locator</a> and explore the <a href="/posts/papa-johns-menu-prices-guide">Papa Johns Full Menu with Prices</a> — hot, fresh, and ready when you are.</p>
<p>👉 Looking for <a href="/best-pizza-delivery-near-me">best pizza delivery near you</a>?</p>
<p><em>Prices and calorie counts are estimates and may vary by location and date. For the most current pricing, visit the Papa Johns official menu.</em></p>
`;

const faqs = [
    {
        "question": "What is on 'The Works' pizza at Papa Johns?",
        "answer": "The Works includes pepperoni, julienne-cut Canadian bacon, spicy Italian sausage, fresh-cut onions, crisp green peppers, and mushrooms — six toppings total."
    },
    {
        "question": "How much does a Super Loaded Pizza cost at Papa Johns?",
        "answer": "Super Loaded Pizzas start at $14.99 for a Small (10\") and go up to $23.99 for an Extra Large (16\"). Crust upgrades like Epic Stuffed Crust add $3.00–$3.50."
    },
    {
        "question": "Are Super Loaded Pizzas more expensive than Classic Pizzas?",
        "answer": "Yes — Super Loaded Pizzas typically cost $4–6 more than comparable Classic Pizzas. However, the significantly higher topping count makes the price-per-topping ratio better than adding extras individually."
    },
    {
        "question": "Can I customize a Super Loaded Pizza?",
        "answer": "Absolutely. You can remove or substitute any topping on a Super Loaded Pizza using the online order builder. You can also add extra cheese or sauce for an additional charge."
    },
    {
        "question": "What is the Epic Stuffed Crust upgrade?",
        "answer": "The Epic Stuffed Crust bakes warm, gooey mozzarella cheese directly into the outer crust of the pizza. It's available as a $3.00 upgrade on any size Super Loaded Pizza."
    },
    {
        "question": "Which Super Loaded Pizza has the most toppings?",
        "answer": "The Works and The Meats both come with five to six distinct ingredients, making them the most loaded options on the Super Loaded menu."
    },
    {
        "question": "Is there a vegetarian Super Loaded Pizza?",
        "answer": "The Fresh Tuscan Six Cheese is the only Super Loaded Pizza without meat. You can also customize any other Super Loaded Pizza to remove the meat toppings."
    },
    {
        "question": "Do Super Loaded Pizzas come in all sizes?",
        "answer": "The Works and The Meats are available in Small, Medium, Large, and Extra Large. Other Super Loaded varieties like Super Hawaiian, BBQ Chicken Bacon, Fiery Buffalo Chicken, and Tuscan Six Cheese are typically available in Large and Extra Large."
    }
];

const pricing = [
    { "item": "The Works (Large)", "price": "$20.99", "calories": "360 cal", "icon": "🍕", "popular": true },
    { "item": "The Meats (Large)", "price": "$20.99", "calories": "390 cal", "icon": "🥩", "popular": true },
    { "item": "Super Hawaiian (Large)", "price": "$20.99", "calories": "260 cal", "icon": "🍍" },
    { "item": "BBQ Chicken Bacon (Large)", "price": "$20.99", "calories": "310 cal", "icon": "🔥" },
    { "item": "Fiery Buffalo Chicken (Large)", "price": "$20.99", "calories": "290 cal", "icon": "🌶️" },
    { "item": "Fresh Tuscan Six Cheese (Large)", "price": "$20.99", "calories": "280 cal", "icon": "🧀" }
];

data[articleIndex].title = "Papa Johns Super Loaded Pizzas: All Flavors & Prices 2026";
data[articleIndex].excerpt = "Discover every Papa Johns Super Loaded Pizza in 2026 — The Works, The Meats, BBQ Chicken Bacon & more. Full prices, calories, honest reviews & ordering tips inside.";
data[articleIndex].content = htmlContent;
data[articleIndex].faqs = faqs;
data[articleIndex].pricing = pricing;
data[articleIndex].date = "2026-03-31"; // Handled site-wide

fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));

console.log('Article 6 (super-loaded) updated successfully!');
