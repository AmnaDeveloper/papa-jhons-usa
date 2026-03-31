const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const articleIndex = data.findIndex(p => p.slug === 'classic-pizzas');

if (articleIndex === -1) {
    console.error('Article not found!');
    process.exit(1);
}

const htmlContent = `
<p>Before stuffed crusts, specialty flatbreads, and loaded meats pizzas came along — there were the <strong>Papa Johns classic pizzas</strong>. And here's the truth: after more than 40 years, the classics are still the most ordered items on the entire menu. The Pepperoni Pizza alone has been Papa Johns' best-selling pizza every single year since the chain launched in 1984.</p>

<p><span style="background:#CCEE18;color:#1A3D17;font-weight:900;padding:4px 10px;border-radius:6px;display:inline-block;margin-bottom:8px;">Last Updated: March 2026</span></p>

<p>In this complete 2026 guide, we break down every <a href="/posts/classic-pizzas">Papa Johns classic pizza</a> — Pepperoni, Cheese, Sausage, and Create Your Own — with detailed reviews, up-to-date prices, calorie counts, a full toppings list, crust options, and our honest ranking of which one to order. Whether you're a first-timer or a loyal <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer">Papa Johns</a> fan, this guide tells you everything you need before placing your next order.</p>

<p>Let's get into it. 🍕</p>

<h2>What Makes Papa Johns Classic Pizzas Different?</h2>
<p>Papa Johns has built their entire reputation on one simple promise — 'Better Ingredients. Better Pizza.' And when it comes to their classic pizza lineup, that philosophy shows up in every single ingredient:</p>
<ul>
    <li><strong>Fresh dough</strong> — made fresh daily at every Papa Johns location, never frozen or pre-made</li>
    <li><strong>100% real mozzarella cheese</strong> — made from pasteurized milk with no fillers, blends, or imitation cheese</li>
    <li><strong>Vine-ripened tomato sauce</strong> — slow-cooked from real tomatoes with garlic, olive oil, and Italian herbs</li>
    <li><strong>No MSG</strong> — none of Papa Johns' standard ingredients contain monosodium glutamate</li>
    <li><strong>Quality toppings</strong> — pepperoni made from pork and beef, Italian sausage with real herbs and spices</li>
</ul>
<p>This commitment to quality ingredients is why <a href="/posts/papa-johns-menu-prices-guide">Papa Johns pizza review</a> scores consistently outperform competitors in blind taste tests. The crust is noticeably fresher, the cheese melts more richly, and the sauce has a genuine tomato flavor that you simply don't find at most fast-food pizza chains.</p>

<p>The <a href="/posts/classic-pizzas">Papa Johns original pizza</a> lineup is deliberately simple — and that simplicity is a strength. These are the pizzas that have satisfied millions of customers for over four decades, and they continue to be the foundation of everything Papa Johns does.</p>

<h2>All Classic Pizzas + Complete Price Table</h2>
<p>Papa Johns offers four core classic pizzas in 2026, available in four <a href="/posts/classic-pizzas">Papa Johns pizza sizes</a> with multiple crust options. Here is the complete pricing guide:</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Classic Pizza</th>
<th>Small (6 slices)</th>
<th>Medium (8 slices)</th>
<th>Large (8 slices)</th>
<th>XL (10 slices)</th>
</tr>
</thead>
<tbody>
<tr><td>Cheese Pizza</td><td>$10.99</td><td>$12.99</td><td>$15.78 ✅</td><td>$16.99</td></tr>
<tr><td>Pepperoni Pizza</td><td>$10.99</td><td>$12.99</td><td>$15.78 ✅</td><td>$16.99</td></tr>
<tr><td>Sausage Pizza</td><td>$10.99</td><td>$12.99</td><td>$14.99 ✅</td><td>$16.99</td></tr>
<tr><td>Create Your Own</td><td>$10.99+</td><td>$12.99+</td><td>$14.99+ ✅</td><td>$16.99+</td></tr>
</tbody>
</table>
</div>

<p>💡 <strong>Best Value:</strong> Large pizza is the sweet spot — same 8 slices as medium but more generous size. Add a <a href="/coupons">Papa Pairings deal</a> to get even better value per slice.</p>
<p>📌 <strong>Price Note:</strong> Prices may vary slightly by location. Always check papajohns.com for your exact local pricing before ordering.</p>

<h2>Papa Johns Pepperoni Pizza — Deep Review</h2>
<p>🏆 <strong>Rating:</strong> 4.5 / 5 | <strong>#1 Best Seller</strong> | <strong>Best For:</strong> Everyone</p>
<p>If there's one pizza that defines Papa Johns — it's the <a href="/posts/classic-pizzas">Papa Johns pepperoni pizza</a>. This is the most ordered pizza in the entire chain's history, and for very good reason. Made with Papa Johns' fresh hand-tossed dough, vine-ripened tomato sauce, 100% real mozzarella cheese, and generous slices of premium pepperoni, this is classic American pizza done right.</p>
<p>What sets this <a href="/posts/classic-pizzas">Papa Johns pepperoni pizza review</a> apart from competitors? The pepperoni. Papa Johns uses a higher-quality pepperoni blend made from pork and beef with a distinct combination of spices that creates the signature slightly spicy, savory, smoky flavor. The pepperoni slices are also cut slightly thicker than industry standard — meaning you get a real meaty bite in every slice, not just a thin wafer of processed meat.</p>
<ul>
    <li><strong>Sauce:</strong> Vine-ripened original pizza sauce</li>
    <li><strong>Cheese:</strong> 100% real mozzarella + Parmesan-Romano blend</li>
    <li><strong>Topping:</strong> Premium pork-and-beef pepperoni slices</li>
    <li><strong>Best Crust:</strong> Original Hand Tossed (classic) or Thin Crust (lighter)</li>
    <li><strong>Best Size:</strong> Large — best value per slice and most generous topping coverage</li>
    <li><strong>Pairs Well With:</strong> Garlic knots, extra garlic dipping sauce, Cheesesticks</li>
</ul>

<h3>Pepperoni Pizza — Calories Per Slice (Large, Original Crust):</h3>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Crust Type</th>
<th>Calories</th>
<th>Fat</th>
<th>Carbs</th>
<th>Protein</th>
</tr>
</thead>
<tbody>
<tr><td>Thin Crust (large)</td><td>~200 cal ✅</td><td>~9g</td><td>~22g</td><td>~9g</td></tr>
<tr><td>Original Crust (large)</td><td>~300–350 cal</td><td>~14g</td><td>~30g</td><td>~13g</td></tr>
<tr><td>NY Style (XL)</td><td>~320 cal</td><td>~14g</td><td>~32g</td><td>~14g</td></tr>
<tr><td>Epic Stuffed Crust</td><td>~390–480 cal</td><td>~20g</td><td>~34g</td><td>~18g</td></tr>
</tbody>
</table>
</div>
<p>💡 <strong>Pro Tip:</strong> Order thin crust pepperoni if you're watching calories — same great flavor at nearly half the calories of stuffed crust!</p>

<h2>Papa Johns Cheese Pizza — Deep Review</h2>
<p>⭐ <strong>Rating:</strong> 4.3 / 5 | <strong>Best For:</strong> Purists, kids, sharing, pizza nights</p>
<p>The <a href="/posts/classic-pizzas">Papa Johns cheese pizza</a> is the ultimate test of any pizza chain's quality — because when there's nothing to hide behind, every ingredient has to perform. No toppings, no distractions. Just dough, sauce, and cheese. And Papa Johns passes this test with flying colors.</p>
<p>What makes it stand out is the cheese itself. Papa Johns uses a blend of 100% real mozzarella made from whole milk, combined with a Parmesan-Romano blend that adds a subtle, nutty depth of flavor you don't get with standard mozzarella alone. The result is a cheese pizza with an unusually rich, complex flavor for what is essentially the simplest pizza on the menu. If you love cheese, ordering a <a href="/posts/classic-pizzas">Papa Johns extra cheese pizza</a> is a must.</p>

<p>The Cheese Pizza is also the most customizable starting point — if you want to add toppings, starting from cheese gives you full control over the flavor profile. Many regular customers use the Cheese Pizza as their 'Create Your Own' base.</p>
<ul>
    <li><strong>Sauce:</strong> Vine-ripened original pizza sauce</li>
    <li><strong>Cheese:</strong> 100% real mozzarella + Parmesan-Romano blend — generous coverage</li>
    <li><strong>No Toppings:</strong> Pure, unadulterated cheese pizza</li>
    <li><strong>Best Crust:</strong> Original Hand Tossed for maximum cheese pull, or NY Style for extra-large slices</li>
    <li><strong>Best For:</strong> Kids, pizza parties, cheese lovers, customization base</li>
    <li><strong>Extra Cheese Option:</strong> Add extra mozzarella for $1.50 — worth every penny</li>
</ul>

<h3>Cheese Pizza — Prices & Calories:</h3>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Price</th>
<th>Cal/Slice</th>
<th>Slices</th>
<th>Total Cal</th>
</tr>
</thead>
<tbody>
<tr><td>Small</td><td>$10.99</td><td>~180 cal</td><td>6</td><td>~1,080</td></tr>
<tr><td>Medium</td><td>$12.99</td><td>~240 cal</td><td>8</td><td>~1,920</td></tr>
<tr><td>Large</td><td>$15.78</td><td>~270 cal</td><td>8</td><td>~2,160</td></tr>
<tr><td>Extra Large</td><td>$16.99</td><td>~300 cal</td><td>10</td><td>~3,000</td></tr>
</tbody>
</table>
</div>

<h2>Papa Johns Sausage Pizza — Deep Review</h2>
<p>⭐ <strong>Rating:</strong> 4.1 / 5 | <strong>Best For:</strong> Italian food lovers, savory flavor seekers</p>
<p>The <a href="/posts/classic-pizzas">Papa Johns sausage pizza</a> is, in our opinion, the most underrated classic pizza on the entire menu. While pepperoni gets all the glory, the Sausage Pizza quietly delivers one of the most satisfying, flavor-forward eating experiences in the Papa Johns lineup.</p>
<p>Papa Johns uses a premium Italian-style pork sausage that is seasoned with a proprietary blend of herbs and spices — including fennel, black pepper, paprika, and Italian seasoning. The result is a sausage with a distinctly bold, aromatic flavor that pairs beautifully with Papa Johns' vine-ripened tomato sauce and rich mozzarella cheese. The sausage is also crumbled rather than sliced, which means better coverage across the pizza and a more consistent flavor in every bite.</p>
<ul>
    <li><strong>Sausage Type:</strong> Premium Italian-style pork sausage — crumbled for even coverage</li>
    <li><strong>Flavor Profile:</strong> Savory, herby, with fennel and black pepper notes</li>
    <li><strong>Best Crust:</strong> Original Hand Tossed — the soft crust complements the bold sausage</li>
    <li><strong>Calories per slice (large, original crust):</strong> ~320 cal</li>
    <li><strong>Best For:</strong> Italian food fans, anyone who loves bold, savory flavors</li>
    <li><strong>Versus Pepperoni:</strong> Sausage is milder in spice but richer in herb flavor — equally satisfying</li>
</ul>
<p>💡 <strong>Insider Tip:</strong> Try the Sausage Pizza with Extra Cheese and a drizzle of garlic butter sauce — this combination elevates it to an entirely different level.</p>

<h2>Papa Johns Create Your Own Pizza — Complete Guide</h2>
<p>The <a href="/posts/classic-pizzas">Papa Johns create your own pizza</a> is exactly what it sounds like — a blank canvas where you choose every single element of your pizza. Starting at $10.99 for a small, you pick your crust, sauce, cheese level, and up to any combination of available <a href="/posts/classic-pizzas">Papa Johns pizza toppings</a>.</p>

<h3>Available Sauces (Choose 1):</h3>
<ul>
    <li><strong>Original Pizza Sauce</strong> — the classic, vine-ripened tomato base</li>
    <li><strong>Garlic Parmesan Sauce</strong> — creamy, rich, and buttery</li>
    <li><strong>BBQ Sauce</strong> — sweet and smoky, great with chicken or bacon</li>
    <li><strong>Buffalo Sauce</strong> — spicy and tangy, pairs well with chicken</li>
    <li><strong>Alfredo Sauce</strong> — Italian cream sauce, pairs with veggies and chicken</li>
</ul>

<h3>Available Meats & Vegetables (Each ~$1.50 extra):</h3>
<ul>
    <li><strong>Meats:</strong> Pepperoni, Italian Sausage, Grilled Chicken, Bacon, Beef, Anchovies, Ham, Salami</li>
    <li><strong>Veggies:</strong> Mushrooms, Green Bell Peppers, Black Olives, Onions, Banana Peppers, Tomatoes, Spinach, Jalapeños, Pineapple, Roasted Garlic</li>
</ul>

<h3>Papa Johns Best Toppings Combo for Create Your Own:</h3>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Combo Name</th>
<th>Toppings</th>
<th>Sauce</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr><td>The Meat Lover</td><td>Pepperoni + Sausage + Bacon</td><td>Original</td><td>Meat lovers, hearty appetite</td></tr>
<tr><td>The Veggie Delight</td><td>Mushrooms + Peppers + Onions + Spinach + Olives</td><td>Original</td><td>Vegetarians, light eaters</td></tr>
<tr><td>The BBQ Chicken</td><td>Grilled Chicken + Bacon + Onions</td><td>BBQ Sauce</td><td>BBQ flavor fans</td></tr>
<tr><td>The Italian</td><td>Sausage + Salami + Banana Peppers</td><td>Alfredo</td><td>Italian food lovers</td></tr>
<tr><td>The Spicy Chicken</td><td>Grilled Chicken + Jalapeños + Onions</td><td>Buffalo Sauce</td><td>Spice lovers</td></tr>
<tr><td>The Cheese Lover</td><td>Extra Mozzarella + Parmesan + Romano</td><td>Garlic Parmesan</td><td>Cheese obsessives</td></tr>
</tbody>
</table>
</div>

<h2>Papa Johns Pizza Sizes — Which Size Is Right for You?</h2>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Size</th>
<th>Diameter</th>
<th>Slices</th>
<th>Price Range</th>
<th>Best For</th>
</tr>
</thead>
<tbody>
<tr><td>Small</td><td>10 inch</td><td>6 slices</td><td>$10.99</td><td>Solo meal or light appetite — 1 person</td></tr>
<tr><td>Medium</td><td>12 inch</td><td>8 slices</td><td>$12.99</td><td>2 people, or 1 very hungry person</td></tr>
<tr><td>Large</td><td>14 inch</td><td>8 slices</td><td>$14.99–$15.78</td><td>2-3 people — the sweet spot ✅</td></tr>
<tr><td>Extra Large</td><td>16 inch</td><td>10 slices</td><td>$16.99</td><td>3-4 people or game day orders</td></tr>
</tbody>
</table>
</div>
<p>💡 <strong>Size Tip:</strong> Large is almost always the best value. You get 8 generous slices at a price that works out cheaper per slice than a medium.</p>

<h2>All Crust Options for Classic Pizzas</h2>
<p>All Papa Johns classic pizzas are available in all six <a href="/posts/classic-pizzas">Papa Johns pizza crust types</a>. Here's which crust works best with each classic pizza:</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Crust</th>
<th>Cal/Slice</th>
<th>Extra Cost</th>
<th>Best Paired With</th>
</tr>
</thead>
<tbody>
<tr><td>Original Hand Tossed</td><td>~270 cal</td><td>Included</td><td>All classic pizzas — the classic choice ✅</td></tr>
<tr><td>Thin Crust</td><td>~200 cal ✅</td><td>Included</td><td>Cheese & Pepperoni — light and crispy</td></tr>
<tr><td>New York Style</td><td>~320 cal</td><td>Included</td><td>Cheese Pizza — authentic NYC slice experience</td></tr>
<tr><td>Epic Stuffed Crust</td><td>~330 cal</td><td>+$2–$3</td><td>Pepperoni — cheese edge + cheese topping = heaven</td></tr>
<tr><td>Garlic Epic Stuffed</td><td>~370 cal</td><td>+$2–$3</td><td>Sausage — garlic + herbs = Italian perfection</td></tr>
<tr><td>Gluten-Free Crust</td><td>~150 cal ✅</td><td>+$1–$2</td><td>Cheese Pizza — lowest calorie option*</td></tr>
</tbody>
</table>
</div>
<p>⚠️ <strong>GF Crust:</strong> Gluten-Free Crust is baked in shared ovens — NOT safe for celiac disease. Suitable for mild gluten sensitivity only.</p>

<h2>Full Nutrition Table — Papa Johns Classic Pizza Calories</h2>
<p>Here is the complete nutrition breakdown for all Papa Johns classic pizzas per slice on original crust large size. For a full breakdown, check out our <a href="/posts/papa-johns-nutrition-guide">Papa Johns Nutrition Guide</a>:</p>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Classic Pizza</th>
<th>Cal/Slice</th>
<th>Fat</th>
<th>Carbs</th>
<th>Protein</th>
<th>Sodium</th>
</tr>
</thead>
<tbody>
<tr><td>Cheese Pizza (large, orig)</td><td>~270 cal</td><td>~10g</td><td>~35g</td><td>~12g</td><td>~580mg</td></tr>
<tr><td>Pepperoni Pizza (large, orig)</td><td>~300 cal</td><td>~13g</td><td>~35g</td><td>~13g</td><td>~720mg</td></tr>
<tr><td>Sausage Pizza (large, orig)</td><td>~320 cal</td><td>~14g</td><td>~34g</td><td>~14g</td><td>~700mg</td></tr>
<tr><td>Thin Crust Pepperoni (large)</td><td>~200 cal ✅</td><td>~9g</td><td>~22g</td><td>~9g</td><td>~530mg ✅</td></tr>
<tr><td>Stuffed Crust Pepperoni (large)</td><td>~390 cal</td><td>~19g</td><td>~38g</td><td>~18g</td><td>~870mg</td></tr>
</tbody>
</table>
</div>
<p>💡 <strong>Lowest Cal Pick:</strong> Thin Crust Cheese or Thin Crust Pepperoni — both under 200 cal per slice. Perfect for calorie-conscious orders.</p>

<h2>Papa Johns vs Domino's Classic Pizza — Honest Comparison</h2>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Factor</th>
<th>Papa Johns</th>
<th>Domino's</th>
</tr>
</thead>
<tbody>
<tr><td>Dough</td><td>Fresh daily, never frozen ✅</td><td>Made fresh but different recipe</td></tr>
<tr><td>Cheese</td><td>100% real mozzarella + Parm-Romano ✅</td><td>100% real mozzarella</td></tr>
<tr><td>Sauce</td><td>Vine-ripened, no added sugar ✅</td><td>Slightly sweeter sauce</td></tr>
<tr><td>Pepperoni Quality</td><td>Thicker cut, pork-beef blend ✅</td><td>Standard cut, slightly thinner</td></tr>
<tr><td>Starting Price</td><td>$10.99 (small)</td><td>$7.99 (carryout special)</td></tr>
<tr><td>Crust Options</td><td>6 crust types ✅</td><td>5 crust types</td></tr>
<tr><td>Free Extras</td><td>Garlic sauce + pepperoncini ✅</td><td>No free extras</td></tr>
<tr><td>Delivery Speed</td><td>~30 min avg</td><td>~28 min avg ✅</td></tr>
<tr><td>Loyalty Program</td><td>Papa Rewards ✅</td><td>Domino's Rewards ✅</td></tr>
<tr><td>Overall Winner</td><td>Quality, ingredients, extras ✅</td><td>Price, speed</td></tr>
</tbody>
</table>
</div>
<p>💡 <strong>Our Verdict:</strong> For overall pizza quality, ingredient freshness, and value — <a href="/posts/classic-pizzas">Papa Johns pizza vs dominos</a> is an easy win for Papa Johns. For the absolute cheapest carryout price, Domino's has the edge. But when you factor in the free garlic sauce, better pepperoni, and fresher dough, Papa Johns delivers more value per bite.</p>

<h2>Best Papa Johns Classic Pizza — Ranked #1 to #4</h2>
<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Rank</th>
<th>Pizza</th>
<th>Rating</th>
<th>Why It Wins</th>
</tr>
</thead>
<tbody>
<tr><td>#1</td><td>Pepperoni Pizza</td><td>4.5 / 5 🏆</td><td>The all-time champion. Premium pepperoni, perfect cheese coverage, consistent quality every time. Order this first.</td></tr>
<tr><td>#2</td><td>Cheese Pizza</td><td>4.3 / 5 ⭐</td><td>Deceptively simple, genuinely impressive. The Parm-Romano blend elevates it above standard cheese pizza.</td></tr>
<tr><td>#3</td><td>Sausage Pizza</td><td>4.1 / 5 ⭐</td><td>Most underrated on the menu. The Italian herb sausage is bold, aromatic, and deeply satisfying.</td></tr>
<tr><td>#4</td><td>Create Your Own</td><td>Unlimited ✨</td><td>Best ceiling — unlimited customization means unlimited potential. Perfect when you know what you want.</td></tr>
</tbody>
</table>
</div>

<h2>Final Thoughts — The Papa Johns Classic Pizza Is Still the Best</h2>
<p>After 40+ years, the Papa Johns classic pizza lineup remains as relevant, satisfying, and delicious as ever. The Pepperoni is the undisputed best-seller for good reason — but don't sleep on the Sausage Pizza or the pure simplicity of the Cheese. Whatever you choose, make sure you check for a <a href="/coupons">promo code</a> before ordering and join Papa Rewards if you haven't already.</p>
<p>Start with a Large Pepperoni on Original Crust with extra garlic dipping sauce. You'll understand exactly why this pizza has stood the test of time.</p>
<p>👉 Order your classic pizza now: <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer">papajohns.com</a></p>
<p>💡 Also read: <a href="/posts/papa-johns-menu-prices-guide">Papa Johns Full Menu & Prices 2026</a> | <a href="/coupons">Papa Johns Promo Codes</a> | <a href="/posts/papa-johns-nutrition-guide">Papa Johns Nutrition Guide</a> | <a href="/posts/new-papadias-flavors-2026">Papa Johns Papadias Guide</a></p>
`;

const faqs = [
    {
        "question": "What are the classic pizzas at Papa Johns?",
        "answer": "Papa Johns classic pizzas include four core offerings: Cheese Pizza, Pepperoni Pizza, Sausage Pizza, and Create Your Own Pizza. These are the foundational menu items that have been available at Papa Johns since the chain launched in 1984. They are available in small, medium, large, and extra-large sizes, with all six crust types, and are priced from $10.99 for a small to $16.99+ for an extra-large."
    },
    {
        "question": "How much does a Papa Johns pepperoni pizza cost?",
        "answer": "A Papa Johns Pepperoni Pizza costs $10.99 for a small, $12.99 for a medium, $15.78 for a large, and $16.99 for an extra-large (original crust). These prices are for standard ordering — you can save 25-50% by using a promo code from papajohns.com/coupons. The Papa Pairings deal also allows you to get two large 1-topping pizzas for $6.99 each, making the <a href='/posts/classic-pizzas'>Papa Johns pepperoni pizza price</a> significantly cheaper."
    },
    {
        "question": "How many calories are in a Papa Johns pepperoni pizza?",
        "answer": "One slice of <a href='/posts/classic-pizzas'>Papa Johns pepperoni pizza calories</a> (large, original crust) count is approximately 300-350 calories. An entire large pepperoni pizza (8 slices) contains around 2,400-2,800 calories total. Choosing thin crust reduces calories to approximately 200 calories per slice. The Epic Stuffed Crust version contains the most calories at approximately 390-480 calories per slice depending on size."
    },
    {
        "question": "How many slices are in a Papa Johns pizza?",
        "answer": "Papa Johns pizzas are cut into different numbers of slices depending on size. A small pizza is cut into 6 slices, a medium pizza is cut into 8 slices, a large pizza is cut into 8 slices, and an extra-large pizza is cut into 10 slices. Note that the large and medium are both cut into 8 slices — but the large slices are noticeably bigger because the pizza itself is 2 inches larger in diameter. So when asking <a href='/posts/classic-pizzas'>how many slices in papa johns pizza</a>, always remember to factor in the size of the slice."
    },
    {
        "question": "What is the best classic pizza at Papa Johns?",
        "answer": "Based on overall popularity, taste, and value, the Papa Johns Pepperoni Pizza is considered the <a href='/posts/classic-pizzas'>best papa johns pizza</a> on the menu. It has been Papa Johns' best-selling pizza every year since the chain launched in 1984. For those who prefer a milder flavor, the Cheese Pizza is an excellent choice — Papa Johns uses a superior cheese blend that makes their cheese pizza stand out from competitors. The Sausage Pizza is our top pick for anyone who enjoys bold, herby Italian flavors."
    },
    {
        "question": "Can I customize a classic Papa Johns pizza?",
        "answer": "Yes, all Papa Johns classic pizzas are fully customizable. You can add any of the available toppings, change the sauce, adjust the cheese level (light, normal, or extra), choose from all six crust types, and request a well-done bake for a crispier crust. You can also start with the Cheese Pizza as a base and add any combination of toppings to effectively create your own pizza at the classic pizza price point."
    },
    {
        "question": "What crust is best for Papa Johns classic pizzas?",
        "answer": "For the Pepperoni Pizza, the Original Hand Tossed crust is the classic choice — but the Thin Crust is an excellent lower-calorie option. For the Cheese Pizza, the New York Style crust creates an authentic, large-slice experience. The Epic Stuffed Crust pairs especially well with Pepperoni — the cheese-filled edge and pepperoni topping create an indulgent combination. For the Sausage Pizza, the Garlic Epic Stuffed Crust pairs beautifully with the Italian herb sausage."
    },
    {
        "question": "Is Papa Johns classic pizza better than Domino's?",
        "answer": "In terms of ingredient quality, Papa Johns classic pizza generally outperforms Domino's. Papa Johns uses fresh, never-frozen dough made daily, thicker-cut pepperoni with a premium pork-and-beef blend, 100% real mozzarella with a Parmesan-Romano addition, and vine-ripened tomato sauce without added sugar. Papa Johns also includes free garlic dipping sauce and pepperoncini with every order. Domino's has an advantage in delivery speed and sometimes in carryout pricing, but for overall pizza quality and ingredient freshness, Papa Johns is the stronger choice."
    }
];

const pricing = [
    { "item": "Cheese Pizza (Small)", "price": "$10.99", "calories": "180 cal/slice", "icon": "🧀" },
    { "item": "Cheese Pizza (Large)", "price": "$15.78", "calories": "270 cal/slice", "icon": "🧀", "popular": true },
    { "item": "Pepperoni Pizza (Small)", "price": "$10.99", "calories": "210 cal/slice", "icon": "🍕" },
    { "item": "Pepperoni Pizza (Large)", "price": "$15.78", "calories": "300 cal/slice", "icon": "🍕", "popular": true },
    { "item": "Sausage Pizza (Large)", "price": "$14.99", "calories": "320 cal/slice", "icon": "🥩", "popular": true },
    { "item": "Create Your Own (Large)", "price": "$14.99+", "calories": "Varies", "icon": "✨" }
];

data[articleIndex].title = "Papa Johns Classic Pizzas: Every Flavor Ranked, Reviewed & Priced (2026)";
data[articleIndex].excerpt = "Explore all Papa Johns classic pizzas in 2026 — Pepperoni, Cheese, Sausage & more. Full prices, calories, honest reviews & which one to order. Complete guide inside!";
data[articleIndex].content = htmlContent;
data[articleIndex].faqs = faqs;
data[articleIndex].pricing = pricing;
data[articleIndex].date = "2026-03-31"; // Keeps internal meta updated

fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));

console.log('Article 4 (classic-pizzas) updated successfully!');
