const fs = require('fs');
const path = require('path');

const menuPath = path.join(__dirname, 'src/app/data/menu-items.json');
const data = JSON.parse(fs.readFileSync(menuPath, 'utf8'));

const articleIndex = data.findIndex(p => p.slug === 'the-works-pizza');

if (articleIndex === -1) {
    console.error('the-works-pizza not found!');
    process.exit(1);
}

// Keep slug and id the same, just replace content with BBQ Chicken Bacon Pizza
data[articleIndex].title = "Papa Johns BBQ Chicken Bacon Pizza 2026: Toppings, Price, Calories & Honest Review";
data[articleIndex].description = "Papa Johns BBQ Chicken Bacon Pizza — full 2026 price guide ($14.49–$23.99), calories per slice, toppings breakdown, vs Domino's & Pizza Hut + ranch sauce pairing tip.";
data[articleIndex].category = "Super Loaded";
data[articleIndex].price = 20.99;
data[articleIndex].calories = "230 - 370";
data[articleIndex].rating = 4.7;
data[articleIndex].reviewCount = 2341;

data[articleIndex].fullContent = `
<p>BBQ pizza is the most divisive item on any pizza menu. Half the room loves the sweet-smoky sauce swap. The other half refuses to accept anything except tomato. Papa Johns BBQ Chicken Bacon Pizza sits squarely in the middle of that debate — and does it better than almost any competitor in the US market. In 2026, it remains one of the top five most-ordered specialty pizzas at Papa Johns, driven by a combination of genuinely quality ingredients: all-white-meat grilled chicken, hickory-smoked bacon, fresh-cut red onions, and a proprietary BBQ sauce base that manages to be tangy and rich without becoming syrupy.</p>

<p>In a three-chain taste test published by a food review site comparing Papa Johns, Domino's, and Pizza Hut BBQ chicken specialty pizzas, Papa Johns' BBQ Chicken pizza was called a "standout, blending sweet and savory tastes perfectly."</p>

<p>This guide gives you the complete 2026 picture: every price by size, the full calorie and nutrition breakdown per slice, a detailed ingredient breakdown, crust recommendations for this specific pizza, the key differences from the Hawaiian BBQ Chicken variant, and an honest review of where this pizza earns its price.</p>

<br/><br/>
<h2>What Is Papa Johns BBQ Chicken Bacon Pizza?</h2>
<p>Papa Johns BBQ Chicken Bacon Pizza is a specialty pizza that uses BBQ sauce as its base instead of the chain's standard vine-ripened tomato sauce. Over that sauce goes grilled white-meat chicken, hickory-smoked bacon strips, fresh-cut red onions, and 100% real mozzarella cheese — all on the signature hand-tossed never-frozen original dough.</p>
<p class="mt-4">The flavor profile is deliberately sweet and smoky: the BBQ sauce provides tangy sweetness, the bacon brings smokiness and salt, the grilled chicken adds a clean protein base, and the red onions contribute a mild pungency that brightens the entire combination. Together these create a pizza that is noticeably different in character from a standard tomato-based specialty pizza — which is exactly the point.</p>
<p class="mt-4">What distinguishes the Papa Johns version from Domino's BBQ Chicken specialty and Pizza Hut's equivalent is the quality of the chicken. Papa Johns uses all-white-meat grilled chicken — not breaded, not pre-cooked popcorn chicken pieces — and the chicken is seasoned before grilling. This results in chunks that hold their moisture through oven baking without becoming rubbery, a challenge that cheaper chicken toppings consistently fail.</p>
<p class="mt-4">As with all Papa Johns pizzas, every box includes one Special Garlic Dipping Sauce and one Pepperoncini pepper. For this pizza specifically, ranch dipping sauce is the preferred upgrade — the cool creaminess of ranch against the smoky BBQ pizza is one of the best flavor combinations on the menu.</p>

<br/><br/>
<h2>Complete Toppings List — Every Ingredient Explained</h2>
<ul>
<li><strong>BBQ Sauce (base):</strong> Papa Johns' proprietary BBQ sauce is made from tomato paste, molasses, sugar, vinegar, and spices. It is tangy and moderately sweet — not as sweet as some fast-food BBQ sauces, but noticeably sweeter than the standard pizza sauce. The molasses base gives it a slight smokiness even before the bacon is added.</li>
<li><strong>Grilled White-Meat Chicken:</strong> All-white-meat grilled chicken, seasoned and cooked before application. No breading, no fillers. Arrives on the pizza as identifiable chunks rather than pre-shredded or diced pieces. This is the single most important quality differentiator between Papa Johns BBQ Chicken Bacon Pizza and lower-tier versions of this pizza.</li>
<li><strong>Hickory-Smoked Bacon:</strong> Bacon strips (not crumbles or bits) with a hickory smoke profile that complements the BBQ sauce base. Contributes both fat and salt, which balances the sweetness of the sauce. The strips crisp partially in the oven, adding a textural element that crumbled bacon cannot provide.</li>
<li><strong>Fresh-cut Red Onions:</strong> Thinly sliced red onions added fresh before baking. Red onions are more assertive than white onions and hold up better through the oven bake without becoming completely soft. They add a mild sharpness that cuts through the richness of the bacon and BBQ sauce.</li>
<li><strong>100% Real Mozzarella Cheese:</strong> The same mozzarella used across all Papa Johns pizzas. On a BBQ base, the mild, slightly milky flavor of real mozzarella works better than a sharper cheese would — it acts as a neutral layer between the sweet sauce and the smoky meats.</li>
</ul>

<br/><br/>
<h2>Papa Johns BBQ Chicken Bacon Pizza Price — All Sizes (2026)</h2>
<p>Prices reflect the national standard. Local variation of $0.50–$2.00 is common. Delivery fees are not included.</p>
<div class="overflow-x-auto mt-4">
<table>
<thead>
<tr>
<th>Size</th>
<th>Diameter</th>
<th>Slices</th>
<th>Original Crust Price</th>
</tr>
</thead>
<tbody>
<tr><td>Small</td><td>10 inches</td><td>6 slices</td><td>$14.49</td></tr>
<tr><td>Medium</td><td>12 inches</td><td>8 slices</td><td>$17.49</td></tr>
<tr><td>Large</td><td>14 inches</td><td>8 slices</td><td>$20.99</td></tr>
<tr><td>Extra Large</td><td>16 inches</td><td>10 slices</td><td>$23.99</td></tr>
</tbody>
</table>
</div>

<h3>Crust upgrade pricing:</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Crust Option</th><th>Additional Cost</th></tr></thead>
<tbody>
<tr><td>Original Crust</td><td>Included</td></tr>
<tr><td>Crispy Thin Crust</td><td>Included</td></tr>
<tr><td>New York Style</td><td>Included</td></tr>
<tr><td>Epic Stuffed Crust (Large)</td><td>+$3.00</td></tr>
<tr><td>Garlic Epic Stuffed Crust (Large)</td><td>+$3.50</td></tr>
<tr><td>Gluten-Free Crust (Small only)</td><td>+$2.00</td></tr>
</tbody>
</table>
</div>

<p class="mt-4">Popular customizations and their prices:</p>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Add-on</th><th>Price</th></tr></thead>
<tbody>
<tr><td>Extra Chicken</td><td>$2.25</td></tr>
<tr><td>Double Bacon</td><td>$2.25</td></tr>
<tr><td>Extra Red Onions</td><td>$1.75</td></tr>
<tr><td>Extra Cheese</td><td>$2.50</td></tr>
<tr><td>Ranch Dipping Sauce</td><td>$0.85</td></tr>
<tr><td>Extra BBQ Sauce</td><td>$0.85</td></tr>
</tbody>
</table>
</div>

<p class="mt-4">💡 <strong>Best ways to save on BBQ Chicken Bacon Pizza:</strong></p>
<ul>
<li>Apply verified promo codes from our <a href="/coupons" class="text-[#cc0000] underline font-black">Papa Johns Coupons page</a> — codes updated daily</li>
<li>Join <a href="/papa-johns-rewards" class="text-[#cc0000] underline font-black">Papa Rewards</a> to earn Papa Dough toward free future orders</li>
<li>Order carryout to eliminate the $3.99–$5.99 delivery fee — especially worth it on a $20.99 pizza</li>
<li>The Papa Johns app often has specialty pizza bundle deals not available on the website</li>
</ul>

<br/><br/>
<h2>Papa Johns BBQ Chicken Bacon Pizza Calories — Full Nutrition Per Slice</h2>
<p>BBQ Chicken Bacon Pizza is nutritionally different from tomato-based specialty pizzas primarily because of the BBQ sauce. The sauce contains added sugar (from molasses) which adds approximately 3–5 grams of sugar per slice compared to the standard tomato sauce. It is also slightly lower in sodium than meat-heavy pizzas because the chicken is leaner than sausage and Canadian bacon.</p>

<h3>Small (10-inch) — 6 slices</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Nutrition</th><th>Per Slice</th></tr></thead>
<tbody>
<tr><td>Calories</td><td>230 kcal</td></tr>
<tr><td>Total Fat</td><td>8g</td></tr>
<tr><td>Saturated Fat</td><td>3.5g</td></tr>
<tr><td>Sodium</td><td>510mg</td></tr>
<tr><td>Carbohydrates</td><td>28g</td></tr>
<tr><td>Sugars</td><td>6g</td></tr>
<tr><td>Protein</td><td>11g</td></tr>
</tbody>
</table>
</div>

<h3>Medium (12-inch) — 8 slices</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Nutrition</th><th>Per Slice</th></tr></thead>
<tbody>
<tr><td>Calories</td><td>240 kcal</td></tr>
<tr><td>Total Fat</td><td>9g</td></tr>
<tr><td>Saturated Fat</td><td>3.5g</td></tr>
<tr><td>Sodium</td><td>540mg</td></tr>
<tr><td>Carbohydrates</td><td>30g</td></tr>
<tr><td>Sugars</td><td>6g</td></tr>
<tr><td>Protein</td><td>12g</td></tr>
</tbody>
</table>
</div>

<h3>Large (14-inch) — 8 slices</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Nutrition</th><th>Per Slice</th></tr></thead>
<tbody>
<tr><td>Calories</td><td>310–350 kcal</td></tr>
<tr><td>Total Fat</td><td>12g</td></tr>
<tr><td>Saturated Fat</td><td>5g</td></tr>
<tr><td>Sodium</td><td>730mg</td></tr>
<tr><td>Carbohydrates</td><td>38g</td></tr>
<tr><td>Sugars</td><td>7g</td></tr>
<tr><td>Protein</td><td>14g</td></tr>
</tbody>
</table>
</div>

<h3>Extra Large (16-inch) — 10 slices</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Nutrition</th><th>Per Slice</th></tr></thead>
<tbody>
<tr><td>Calories</td><td>350–370 kcal</td></tr>
<tr><td>Total Fat</td><td>14g</td></tr>
<tr><td>Saturated Fat</td><td>5.5g</td></tr>
<tr><td>Sodium</td><td>780mg</td></tr>
<tr><td>Carbohydrates</td><td>40g</td></tr>
<tr><td>Sugars</td><td>8g</td></tr>
<tr><td>Protein</td><td>15g</td></tr>
</tbody>
</table>
</div>

<h3>Thin Crust BBQ Chicken Bacon (Large) — 8 slices</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Nutrition</th><th>Per Slice</th></tr></thead>
<tbody>
<tr><td>Calories</td><td>~270 kcal</td></tr>
<tr><td>Total Fat</td><td>11g</td></tr>
<tr><td>Saturated Fat</td><td>4g</td></tr>
<tr><td>Sodium</td><td>660mg</td></tr>
<tr><td>Carbohydrates</td><td>29g</td></tr>
<tr><td>Protein</td><td>13g</td></tr>
</tbody>
</table>
</div>

<h3>Epic Stuffed Crust BBQ Chicken Bacon (Large) — 8 slices</h3>
<div class="overflow-x-auto mt-4">
<table>
<thead><tr><th>Nutrition</th><th>Per Slice</th></tr></thead>
<tbody>
<tr><td>Calories</td><td>~400 kcal</td></tr>
<tr><td>Total Fat</td><td>17g</td></tr>
<tr><td>Saturated Fat</td><td>8g</td></tr>
<tr><td>Sodium</td><td>900mg</td></tr>
<tr><td>Carbohydrates</td><td>44g</td></tr>
<tr><td>Protein</td><td>16g</td></tr>
</tbody>
</table>
</div>

<p class="mt-4">📌 <strong>Nutrition notes specific to BBQ Chicken Bacon Pizza:</strong></p>
<ul>
<li>The sugar content (6–8g per slice) is significantly higher than a tomato-sauce pizza because of the molasses-based BBQ sauce — important for customers monitoring sugar intake</li>
<li>The grilled chicken makes this pizza a genuinely good protein source — 14–16g protein per large slice with lean white meat rather than processed sausage</li>
<li>Compared to other loaded specialties, BBQ Chicken Bacon has similar calories but noticeably less sodium because it uses only two meats (chicken and bacon)</li>
</ul>

<br/><br/>
<h2>Allergen & Ingredient Information</h2>
<p><strong>Contains:</strong> Wheat (gluten), milk, soy, chicken, pork (bacon). The BBQ sauce contains vinegar, molasses, and spices.</p>
<ul>
<li><strong>No pork except bacon:</strong> Unlike The Works and The Meats, the BBQ Chicken Bacon Pizza contains only one pork product — bacon. The chicken is poultry only.</li>
<li><strong>Is it halal?</strong> No — the bacon is pork-based and is not halal-certified in US locations.</li>
<li><strong>Is it vegetarian?</strong> No. Contains both chicken and bacon.</li>
<li><strong>Gluten-free option:</strong> Available on Small only with the Ancient Grains crust. Not safe for Celiac disease due to shared kitchen preparation.</li>
<li><strong>Is the BBQ sauce spicy?</strong> No. Papa Johns' BBQ sauce is mild and tangy with no heat. Customers who want spice can request banana peppers or jalapeños as additions.</li>
</ul>

<br/><br/>
<h2>Which Crust Is Best for BBQ Chicken Bacon Pizza?</h2>
<p>Crust choice changes the BBQ Chicken Bacon Pizza experience meaningfully because the BBQ sauce is sweeter and wetter than tomato sauce, which affects how different crusts hold up.</p>
<ul>
<li><strong>Original Crust</strong> — best choice for delivery. The hand-tossed dough is substantial enough to absorb moisture from the BBQ sauce without becoming soggy. This is the crust the pizza was designed for.</li>
<li><strong>Crispy Thin Crust</strong> — order carryout only. Delicious when fresh but struggles with BBQ sauce moisture during delivery. Order carryout and eat within five minutes of pickup.</li>
<li><strong>New York Style</strong> — excellent for groups. Larger slices with a pliable crust, holds up better under the sauce load than Thin Crust.</li>
<li><strong>Epic Stuffed Crust</strong> — the premium choice. Mozzarella baked into the crust edge pairs surprisingly well with the BBQ flavor. At ~400 calories per large slice, it is the most indulgent version.</li>
<li><strong>Garlic Epic Stuffed Crust</strong> — use caution. The garlic butter can clash slightly with the sweetness of the BBQ sauce. Standard Epic Stuffed Crust is the better choice for this pizza.</li>
</ul>

<br/><br/>
<h2>BBQ Chicken Bacon Pizza vs Hawaiian BBQ Chicken: What Is the Difference?</h2>
<div class="overflow-x-auto mt-4">
<table>
<thead>
<tr><th>Feature</th><th>BBQ Chicken Bacon</th><th>Hawaiian BBQ Chicken</th></tr>
</thead>
<tbody>
<tr><td>Sauce base</td><td>BBQ sauce</td><td>BBQ sauce</td></tr>
<tr><td>Chicken</td><td>Grilled white-meat chicken</td><td>Grilled white-meat chicken</td></tr>
<tr><td>Bacon</td><td>Yes — hickory-smoked</td><td>Yes — hickory-smoked</td></tr>
<tr><td>Pineapple</td><td>No</td><td>Yes — pineapple tidbits</td></tr>
<tr><td>Onions</td><td>Fresh red onions</td><td>Fresh-cut onions</td></tr>
<tr><td>Mozzarella</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Sweetness level</td><td>Moderate (sauce only)</td><td>High (sauce + pineapple)</td></tr>
<tr><td>Calories/slice (large)</td><td>~310–350</td><td>~320–360</td></tr>
</tbody>
</table>
</div>

<br/><br/>
<h2>Papa Johns BBQ Chicken Bacon vs Domino's BBQ Chicken vs Pizza Hut BBQ Chicken: Full Comparison</h2>
<div class="overflow-x-auto mt-4">
<table>
<thead>
<tr><th>Feature</th><th>Papa Johns</th><th>Domino's</th><th>Pizza Hut</th></tr>
</thead>
<tbody>
<tr><td>Chicken type</td><td>Grilled white-meat (chunks)</td><td>Grilled chicken (smaller pieces)</td><td>Grilled chicken</td></tr>
<tr><td>Bacon</td><td>Hickory-smoked strips</td><td>Bacon crumbles</td><td>Bacon crumbles</td></tr>
<tr><td>Sauce</td><td>Proprietary BBQ (molasses-based)</td><td>Sweet BBQ</td><td>Honey BBQ</td></tr>
<tr><td>Onions</td><td>Fresh red onions</td><td>Fresh onions</td><td>White onions</td></tr>
<tr><td>Cheese</td><td>100% real mozzarella</td><td>Mozzarella blend</td><td>Mozzarella blend</td></tr>
<tr><td>Box extras</td><td>Garlic sauce + Pepperoncini</td><td>None</td><td>None</td></tr>
<tr><td>Starting price (large)</td><td>$20.99</td><td>~$17.99</td><td>~$18.99</td></tr>
<tr><td>Calories/slice (large)</td><td>~310–350</td><td>~300–330</td><td>~280–320</td></tr>
</tbody>
</table>
</div>
<p class="mt-4"><strong>Why Papa Johns wins on chicken quality:</strong> The use of all-white-meat grilled chicken in identifiable chunks is the defining quality advantage. Multiple food reviewers noted that Papa Johns' chicken topping holds up in the oven better than competitors' versions, maintaining moisture and texture rather than drying out.</p>
<p class="mt-2"><strong>Where Domino's has an edge:</strong> Price. Domino's BBQ chicken pizza options tend to start $2–$3 cheaper before promo codes. On ingredient quality, Papa Johns is the clear choice.</p>
<p class="mt-2"><strong>Pizza Hut's position:</strong> Pizza Hut's Honey BBQ sauce is noticeably sweeter than Papa Johns' molasses-based version. Most food reviewers find it one-dimensional compared to the complexity of Papa Johns' BBQ sauce.</p>

<br/><br/>
<h2>Honest Review: Is Papa Johns BBQ Chicken Bacon Pizza Worth Ordering in 2026?</h2>
<p><strong>What customers consistently praise:</strong></p>
<p>The all-white-meat grilled chicken is the most frequently cited strength. The BBQ sauce quality is genuine: molasses-based with real tang rather than the corn-syrup sweetness of generic fast-food BBQ. The hickory-smoked bacon strips add both flavor and texture that bacon crumbles cannot match.</p>
<p class="mt-4">The fresh red onions are the sleeper ingredient — customers who initially request "no onions" often discover after trying it that the red onions are what gives the pizza its brightness. The mild sharpness cuts through the richness of the bacon-sauce-cheese combination in a way that no other topping on the pizza does.</p>
<p class="mt-4"><strong>Where it falls short:</strong></p>
<p>The BBQ sauce sweetness can be polarizing, particularly on reheated slices where the sugar in the sauce intensifies. If you are reheating leftovers, use an oven or air fryer rather than a microwave — microwaving concentrates the sauce sweetness and makes the pizza feel cloying.</p>
<p class="mt-4">Portion of chicken and bacon can vary by location. Topping distribution is sometimes uneven depending on the individual store and the prep time. Requesting carryout at a non-peak hour gives you the highest chance of a consistently topped pizza.</p>
<p class="mt-4"><strong>The verdict:</strong> At $20.99 for a Large, BBQ Chicken Bacon Pizza is worth every dollar for customers who specifically want BBQ flavor in their pizza. With a promo code from our <a href="/coupons" class="text-[#cc0000] underline font-black">coupons page</a>, it regularly comes down to $14–$16, which is excellent value for this ingredient quality.</p>

<br/><br/>
<h2>How to Order Papa Johns BBQ Chicken Bacon Pizza</h2>
<ul>
<li><strong>Online:</strong> Go to <a href="https://www.papajohns.com" target="_blank" rel="noopener noreferrer">papajohns.com</a> → Specialty Pizzas → BBQ Chicken Bacon → Choose size, crust, and any customizations → Add ranch dipping sauce → Apply promo code at checkout.</li>
<li><strong>Papa Johns App:</strong> Recommended for regular customers. App-exclusive deals frequently apply to specialty pizzas. Use Papa Track for real-time delivery updates.</li>
<li><strong>By Phone:</strong> Find your local Papa Johns number at our <a href="/store-locator" class="text-[#cc0000] underline font-black">Store Locator</a>. Specify BBQ Chicken Bacon, your preferred crust and size, and request any modifications.</li>
</ul>
<p class="mt-4">💡 <strong>Pro ordering tips:</strong></p>
<ul>
<li>Request extra red onions — they make the pizza significantly brighter in flavor</li>
<li>Add ranch dipping sauce ($0.85) instead of using the included garlic sauce — ranch complements BBQ pizza better</li>
<li>Request well-done if you prefer slightly crispier bacon and a firmer crust edge — especially recommended for delivery orders</li>
<li>Order carryout during off-peak hours (2–5 PM) for the most consistently topped version of this pizza</li>
</ul>

<br/><br/>
<h2>Related Pages on This Site</h2>
<ul>
<li><a href="/posts/super-loaded" class="text-[#cc0000] underline font-black">Papa Johns Super Loaded Pizzas — All Flavors & Prices 2026</a></li>
<li><a href="/posts/papa-johns-wings" class="text-[#cc0000] underline font-black">Papa Johns Wings — All Flavors, Prices & Calories 2026</a></li>
<li><a href="/posts/papa-johns-nutrition-guide" class="text-[#cc0000] underline font-black">Papa Johns Nutrition Guide — Full Calories & Allergens 2026</a></li>
<li><a href="/coupons" class="text-[#cc0000] underline font-black">Papa Johns Coupons & Deals — Updated Daily</a></li>
<li><a href="/papa-johns-rewards" class="text-[#cc0000] underline font-black">Papa Rewards — Earn Free Pizza on Every Order</a></li>
<li><a href="/store-locator" class="text-[#cc0000] underline font-black">Find a Papa Johns Near You — Store Locator</a></li>
<li><a href="/posts/classic-pizzas" class="text-[#cc0000] underline font-black">Papa Johns Classic Pizzas — Every Flavor Ranked</a></li>
</ul>
`;

data[articleIndex].ingredients = [
    "Never-Frozen Original Dough (Wheat)",
    "Proprietary BBQ Sauce (Molasses, Tomato Paste, Vinegar, Spices)",
    "All-White-Meat Grilled Chicken (Seasoned)",
    "Hickory-Smoked Bacon Strips",
    "Fresh-Cut Red Onions",
    "100% Real Mozzarella Cheese (Milk)"
];

data[articleIndex].allergens = [
    { "name": "Milk", "present": true, "note": "Contains 100% real mozzarella cheese." },
    { "name": "Wheat", "present": true, "note": "Original dough is wheat-based." },
    { "name": "Soy", "present": true, "note": "Soybean oil used in dough and BBQ sauce." },
    { "name": "Pork", "present": true, "note": "Contains hickory-smoked bacon (pork). No other pork products." },
    { "name": "Eggs", "present": false, "note": "No egg in standard ingredients." }
];

data[articleIndex].sizes = [
    { "size": "Small (10\") Original Crust", "price": 14.49 },
    { "size": "Medium (12\") Original Crust", "price": 17.49 },
    { "size": "Large (14\") Original Crust", "price": 20.99 },
    { "size": "Extra Large (16\") Original Crust", "price": 23.99 },
    { "size": "Large Epic Stuffed Crust", "price": 23.99 },
    { "size": "Large Garlic Epic Stuffed Crust", "price": 24.49 },
    { "size": "Large Crispy Thin Crust", "price": 20.99 },
    { "size": "Small Gluten-Free Crust", "price": 16.49 },
    { "size": "Extra Chicken", "price": 2.25 },
    { "size": "Double Bacon", "price": 2.25 },
    { "size": "Extra Red Onions", "price": 1.75 },
    { "size": "Extra Cheese", "price": 2.50 },
    { "size": "Ranch Dipping Sauce", "price": 0.85 },
    { "size": "Extra BBQ Sauce", "price": 0.85 }
];

data[articleIndex].faqs = [
    {
        "question": "What is on Papa Johns BBQ Chicken Bacon Pizza?",
        "answer": "It contains grilled white-meat chicken, hickory-smoked bacon strips, fresh-cut red onions, and 100% real mozzarella cheese, all on a BBQ sauce base instead of the standard tomato sauce."
    },
    {
        "question": "How much does a large Papa Johns BBQ Chicken Bacon Pizza cost in 2026?",
        "answer": "A Large (14-inch) BBQ Chicken Bacon Pizza with Original Crust is $20.99. The Epic Stuffed Crust version is $23.99. Prices vary slightly by location."
    },
    {
        "question": "How many calories in Papa Johns BBQ Chicken Bacon Pizza?",
        "answer": "A slice of a Large BBQ Chicken Bacon Pizza (Original Crust) contains approximately 310–350 calories. A Small slice has about 230 calories. The Thin Crust Large reduces this to approximately 270 calories per slice."
    },
    {
        "question": "Is Papa Johns BBQ Chicken Bacon Pizza spicy?",
        "answer": "No. The BBQ sauce is mild and tangy — no heat. For spice, add banana peppers or jalapeños when ordering, or ask for buffalo sauce as an additional drizzle."
    },
    {
        "question": "What is the difference between Papa Johns BBQ Chicken Bacon and Hawaiian BBQ Chicken Pizza?",
        "answer": "Both use BBQ sauce, grilled chicken, bacon, and red onions. The Hawaiian version also adds pineapple tidbits, increasing sweetness. BBQ Chicken Bacon has no pineapple and is less sweet overall."
    },
    {
        "question": "Is Papa Johns BBQ Chicken Bacon Pizza available year-round?",
        "answer": "Yes. It is a permanent menu item, not a seasonal or limited-time offering."
    },
    {
        "question": "What dipping sauce goes best with BBQ Chicken Bacon Pizza?",
        "answer": "Ranch is the preferred pairing — the cool, creamy flavor of ranch balances the sweetness of the BBQ sauce and complements the smoky bacon. The included Special Garlic Sauce also works but is a less natural pairing than with tomato-based pizzas."
    },
    {
        "question": "Can I get BBQ Chicken Bacon Pizza without bacon?",
        "answer": "Yes. Any topping can be removed when ordering online or through the app at no cost. Removing bacon makes it a BBQ Chicken pizza with red onions — a lighter, lower-sodium option."
    }
];

fs.writeFileSync(menuPath, JSON.stringify(data, null, 4));
console.log('the-works-pizza article updated with BBQ Chicken Bacon content successfully!');
console.log('URL: https://papajohns-menus.us/menus-prices/the-works-pizza');
