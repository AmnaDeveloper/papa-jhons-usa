import json

with open("src/app/data/posts.json", "r", encoding="utf-8") as f:
    data = json.load(f)

html_content = """<style>
  .article-body { font-family: var(--font-sans), Arial, sans-serif; width: 100%; color: #1A3D17; line-height: 1.75; font-size: 17px; }
  .article-body h2 { font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 0.75rem; border-bottom: 2px solid #e8e8e8; padding-bottom: 6px; font-weight: bold; color: #1A3D17; }
  .article-body h3 { font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.5rem; font-weight: bold; color: #cc0000; }
  .article-body p { margin-bottom: 1.2rem; }
  .article-body ul, .article-body ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
  .article-body ul { list-style-type: disc; }
  .article-body ol { list-style-type: decimal; }
  .article-body li { margin-bottom: 0.5rem; }
  .intro-box { background: #f8f4ef; border-left: 4px solid #cc0000; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 1.5rem 0; font-size: 15px; font-weight: 600; }
  .comp-table { width: 100%; border-collapse: collapse; font-size: 15px; margin: 1.5rem 0; text-align: left; }
  .comp-table th { background: #1A3D17; color: white; padding: 10px 14px; text-align: left; }
  .comp-table td { padding: 10px 14px; border-bottom: 1px solid #eee; vertical-align: top; }
  .comp-table tr:nth-child(even) td { background: #fafafa; }
</style>

<div class="article-body">

<div class="intro-box">
If you're ordering just for yourself &mdash; or want to keep costs low &mdash; the Papa Johns small pizza is worth knowing inside and out. But what does a small Papa Johns pizza actually cost in 2026? How many slices do you get? And is it genuinely worth ordering, or does the medium give you far better value?
</div>

<p>This guide answers every question: exact current prices by topping count, calories per slice, how small compares to medium and large in real value terms, the cheapest ways to order, and a straight verdict on whether the small is the right choice for your order.</p>

<p>&#x1f4a1; <strong>Quick Answer:</strong> A Papa Johns small pizza (10 inches, 6 slices) costs <strong>$8.99&ndash;$12.99</strong> in 2026 depending on toppings and location. Cheese starts at $8.99. Specialty small pizzas run $11.99&ndash;$12.99.</p>

<h2>What Size Is Papa Johns Small Pizza?</h2>

<p>Before talking price, here is exactly what you get with a small:</p>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Small</th>
      <th>Medium</th>
      <th>Large</th>
      <th>XL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Diameter</td>
      <td><strong>10 inches</strong></td>
      <td>12 inches</td>
      <td>14 inches</td>
      <td>16 inches</td>
    </tr>
    <tr>
      <td>Number of slices</td>
      <td><strong>6 slices</strong></td>
      <td>8 slices</td>
      <td>8 slices</td>
      <td>10 slices</td>
    </tr>
    <tr>
      <td>Serves</td>
      <td><strong>1&ndash;2 people</strong></td>
      <td>2&ndash;3 people</td>
      <td>3&ndash;4 people</td>
      <td>4&ndash;6 people</td>
    </tr>
    <tr>
      <td>Crust options</td>
      <td>Original, Thin, Gluten-Free</td>
      <td>All types</td>
      <td>All types</td>
      <td>Original, Thin, NY Style</td>
    </tr>
    <tr>
      <td>Stuffed crust available</td>
      <td>&#x274c; No</td>
      <td>&#x274c; No</td>
      <td>&#x2705; Yes</td>
      <td>&#x2705; Yes</td>
    </tr>
  </tbody>
</table>
</div>

<p>&#x26a0;&#xfe0f; <strong>Important:</strong> The small pizza is <strong>10 inches</strong> &mdash; not a "personal pan" pizza. It is a real full pizza, just smaller. Six slices is a satisfying meal for one hungry adult or a light meal for two.</p>

<h2>Papa Johns Small Pizza Price 2026 &mdash; Full Breakdown</h2>

<p>Prices below are current national averages. Your location may vary slightly &mdash; urban markets (New York, LA, Chicago) typically run $0.50&ndash;$1.50 higher than these figures.</p>

<h3>By Topping Count</h3>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Pizza Type</th>
      <th>Small (10") Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cheese (0 toppings)</td>
      <td><strong>$8.99</strong></td>
    </tr>
    <tr>
      <td>1 Topping (e.g., Pepperoni)</td>
      <td><strong>$9.99</strong></td>
    </tr>
    <tr>
      <td>2 Toppings</td>
      <td><strong>$10.99</strong></td>
    </tr>
    <tr>
      <td>3 Toppings</td>
      <td><strong>$10.99&ndash;$11.49</strong></td>
    </tr>
    <tr>
      <td>Specialty Pizza (e.g., The Works, BBQ Chicken)</td>
      <td><strong>$11.99&ndash;$12.99</strong></td>
    </tr>
    <tr>
      <td>Gluten-Free Crust (small only)</td>
      <td><strong>+$1.00&ndash;$2.00 upcharge</strong></td>
    </tr>
  </tbody>
</table>
</div>

<h3>By Popular Pizza &mdash; Small Size Price</h3>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Pizza</th>
      <th>Small Price</th>
      <th>Calories/Slice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cheese Pizza</td>
      <td>$8.99</td>
      <td>~180 cal</td>
    </tr>
    <tr>
      <td>Pepperoni Pizza</td>
      <td>$9.99</td>
      <td>~210 cal</td>
    </tr>
    <tr>
      <td>Sausage Pizza</td>
      <td>$9.99</td>
      <td>~205 cal</td>
    </tr>
    <tr>
      <td>The Works</td>
      <td>$11.99</td>
      <td>~230 cal</td>
    </tr>
    <tr>
      <td>BBQ Chicken Bacon</td>
      <td>$12.49</td>
      <td>~215 cal</td>
    </tr>
    <tr>
      <td>Ultimate Pepperoni</td>
      <td>$12.49</td>
      <td>~240 cal</td>
    </tr>
    <tr>
      <td>Garden Fresh</td>
      <td>$11.49</td>
      <td>~185 cal</td>
    </tr>
    <tr>
      <td>Tuscan Six Cheese</td>
      <td>$11.99</td>
      <td>~220 cal</td>
    </tr>
    <tr>
      <td>Gluten-Free Cheese (small)</td>
      <td>$10.99</td>
      <td>~150 cal</td>
    </tr>
  </tbody>
</table>
</div>

<p>&#x1f4cd; <strong>Location Note:</strong> Prices are higher in cities with higher operating costs. Always check your local price at <a href="/store-locator" style="color: #cc0000; font-weight: bold; text-decoration: underline;">papajohns-menus.us/store-locator</a> or the Papa Johns app before ordering.</p>

<h2>Small vs Medium vs Large &mdash; Which Is the Best Value?</h2>

<p>This is the real question. Let's do the math properly:</p>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Size</th>
      <th>Price (Cheese)</th>
      <th>Slices</th>
      <th>Price Per Slice</th>
      <th>Total Sq Inches</th>
      <th>Price Per Sq Inch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small (10")</td>
      <td>$8.99</td>
      <td>6</td>
      <td><strong>$1.50/slice</strong></td>
      <td>78.5 sq in</td>
      <td><strong>$0.114</strong></td>
    </tr>
    <tr>
      <td>Medium (12")</td>
      <td>$11.09</td>
      <td>8</td>
      <td><strong>$1.39/slice</strong></td>
      <td>113.1 sq in</td>
      <td><strong>$0.098</strong></td>
    </tr>
    <tr>
      <td>Large (14")</td>
      <td>$14.09</td>
      <td>8</td>
      <td><strong>$1.76/slice</strong></td>
      <td>153.9 sq in</td>
      <td><strong>$0.092</strong></td>
    </tr>
  </tbody>
</table>
</div>

<h3>What the math tells you:</h3>
<p><strong>The large is the best value by square inch</strong> &mdash; you get significantly more pizza per dollar than the small or medium.</p>
<p><strong>The medium beats the small</strong> on price per slice ($1.39 vs $1.50).</p>
<p><strong>The small makes sense only when:</strong></p>
<ul>
  <li>You are ordering for 1 person and cannot finish a medium</li>
  <li>You want a variety (ordering 2 smalls = 2 different pizzas for roughly the price of 1 large)</li>
  <li>You are combining with sides like Papadias, wings, or breadsticks for a full meal</li>
  <li>You need a gluten-free option (only available in small at Papa Johns)</li>
</ul>

<h2>Papa Johns Small Pizza Calories &mdash; Full Nutrition Table</h2>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Pizza (Small, Original Crust)</th>
      <th>Cal/Slice</th>
      <th>Total Cal (6 slices)</th>
      <th>Fat/Slice</th>
      <th>Sodium/Slice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cheese</td>
      <td>~180 cal</td>
      <td>~1,080</td>
      <td>6g</td>
      <td>~390mg</td>
    </tr>
    <tr>
      <td>Pepperoni</td>
      <td>~210 cal</td>
      <td>~1,260</td>
      <td>8g</td>
      <td>~480mg</td>
    </tr>
    <tr>
      <td>Sausage</td>
      <td>~205 cal</td>
      <td>~1,230</td>
      <td>8g</td>
      <td>~450mg</td>
    </tr>
    <tr>
      <td>The Works</td>
      <td>~230 cal</td>
      <td>~1,380</td>
      <td>9g</td>
      <td>~520mg</td>
    </tr>
    <tr>
      <td>Garden Fresh</td>
      <td>~185 cal</td>
      <td>~1,110</td>
      <td>6g</td>
      <td>~400mg</td>
    </tr>
    <tr>
      <td>BBQ Chicken Bacon</td>
      <td>~215 cal</td>
      <td>~1,290</td>
      <td>7g</td>
      <td>~460mg</td>
    </tr>
    <tr>
      <td>Gluten-Free Cheese</td>
      <td>~150 cal</td>
      <td>~900</td>
      <td>5g</td>
      <td>~360mg</td>
    </tr>
  </tbody>
</table>
</div>

<h3>For Calorie-Conscious Eaters &mdash; Best Small Pizza Options:</h3>
<ol>
  <li><strong>Gluten-Free Crust Cheese</strong> &mdash; ~150 cal/slice, lightest option overall</li>
  <li><strong>Thin Crust Cheese</strong> &mdash; ~160 cal/slice, crispy and lighter</li>
  <li><strong>Garden Fresh (Original Crust)</strong> &mdash; ~185 cal/slice, most vegetables, lowest fat</li>
  <li><strong>Cheese Pizza (Original)</strong> &mdash; ~180 cal/slice, simple and clean</li>
</ol>

<p>&#x1f4a1; <strong>Calorie Tip:</strong> Ordering a small Thin Crust with vegetable toppings is the lowest-calorie full-pizza meal at Papa Johns &mdash; around 160&ndash;190 cal per slice, 6 slices total (~960&ndash;1,140 calories for the whole pizza).</p>

<h2>Small Pizza Crust Options at Papa Johns</h2>

<p>Not all crusts are available on the small size:</p>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Crust Type</th>
      <th>Available on Small?</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Original Crust</td>
      <td>&#x2705; Yes</td>
      <td>Default option</td>
    </tr>
    <tr>
      <td>Thin Crust</td>
      <td>&#x2705; Yes</td>
      <td>Crispy, lighter, fewer calories</td>
    </tr>
    <tr>
      <td>Gluten-Free Crust</td>
      <td>&#x2705; Yes (small only)</td>
      <td>Ancient grains; +$1&ndash;$2 upcharge</td>
    </tr>
    <tr>
      <td>New York Style</td>
      <td>&#x274c; No</td>
      <td>Large/XL only</td>
    </tr>
    <tr>
      <td>Epic Stuffed Crust</td>
      <td>&#x274c; No</td>
      <td>Large/XL only</td>
    </tr>
    <tr>
      <td>Garlic Epic Stuffed Crust</td>
      <td>&#x274c; No</td>
      <td>Large/XL only</td>
    </tr>
  </tbody>
</table>
</div>

<p>&#x26a0;&#xfe0f; <strong>Gluten-Free Note:</strong> Papa Johns' Gluten-Free Crust is <strong>only available in small (10")</strong> &mdash; it is not offered in medium, large, or XL. If you need gluten-free, the small is your only size option.</p>

<h2>Cheapest Ways to Order a Small Papa Johns Pizza in 2026</h2>

<h3>1. Use a Promo Code (Save $1&ndash;$4)</h3>
<p>Before every order, check <a href="/coupons" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Papa Johns Coupons &rarr;</a> for current deals. Small pizza discounts appear regularly &mdash; especially as part of combo or bundle offers.</p>

<h3>2. Order Via the App (Exclusive App Deals)</h3>
<p>The Papa Johns app frequently runs <strong>app-only discounts</strong> that are not available on the website or by phone. A 25&ndash;40% off deal on the app applies to small pizzas too.</p>

<h3>3. Papa Rewards Program (Free Points Every Order)</h3>
<p>Every dollar spent earns <a href="/posts/papa-johns-rewards" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Papa Rewards</a> points. After $75 spent, you earn a free large 1-topping pizza &mdash; but redeeming points toward a small is also an option.</p>

<h3>4. Carryout Discount</h3>
<p>Choosing carryout instead of delivery at Papa Johns often saves $2&ndash;$4 on your order total &mdash; no delivery fee, and carryout-specific promo codes often apply.</p>

<h3>5. Order 2 Smalls Instead of 1 Large (The Variety Hack)</h3>
<p>Two small cheese pizzas (~$17.98) cost slightly more than one large (~$14.09) but give you <strong>two different flavors</strong> &mdash; ideal for two people who want different toppings without paying for two separate large orders.</p>

<h3>6. Check the <a href="/posts/papa-pairings" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Papa Pairings Deal &rarr;</a></h3>
<p>The Papa Pairings bundle lets you combine a small pizza with sides, wings, or desserts at a discounted bundle price. This is often the cheapest way to get a full meal with a small pizza.</p>

<h2>Papa Johns Small Pizza vs Competitors &mdash; Price Comparison</h2>

<p>How does Papa Johns' small pizza price compare to Domino's and Pizza Hut in 2026?</p>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Chain</th>
      <th>Small Size</th>
      <th>Small Price (Cheese)</th>
      <th>Slices</th>
      <th>Price/Slice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Papa Johns</strong></td>
      <td>10 inches</td>
      <td><strong>$8.99</strong></td>
      <td>6</td>
      <td>$1.50</td>
    </tr>
    <tr>
      <td>Domino's</td>
      <td>10 inches</td>
      <td>$7.99&ndash;$8.99</td>
      <td>6</td>
      <td>$1.33&ndash;$1.50</td>
    </tr>
    <tr>
      <td>Pizza Hut</td>
      <td>8 inches (Personal)</td>
      <td>$6.49&ndash;$7.99</td>
      <td>6</td>
      <td>$1.08&ndash;$1.33</td>
    </tr>
    <tr>
      <td>Little Caesars</td>
      <td>8 inches (Hot-N-Ready)</td>
      <td>$5.99&ndash;$6.99</td>
      <td>4</td>
      <td>$1.50&ndash;$1.75</td>
    </tr>
  </tbody>
</table>
</div>

<p><strong>Verdict:</strong> Papa Johns is priced similarly to Domino's on small pizzas. Pizza Hut's personal pizza is cheaper but smaller (8" vs 10"). Little Caesars is cheaper upfront but fewer slices and lower ingredient quality.</p>
<p><strong>Where Papa Johns wins:</strong> Fresh dough quality and the free Special Garlic Sauce included with every order &mdash; no competitor includes a free dipping sauce by default.</p>

<h2>Is the Papa Johns Small Pizza Worth It? Honest Verdict</h2>

<h3>&#x2705; Order the Small If:</h3>
<ul>
  <li>You are <strong>eating alone</strong> and cannot finish a medium</li>
  <li>You need a <strong>gluten-free crust</strong> (only available in small)</li>
  <li>You want <strong>two different pizzas</strong> &mdash; order 2 smalls for variety</li>
  <li>You are <strong>adding sides</strong> (wings, Papadias, breadsticks) and just need a small pizza component</li>
  <li>You are on a <strong>tight budget</strong> and $8.99 is your ceiling</li>
</ul>

<h3>&#x274c; Skip the Small and Order Medium/Large If:</h3>
<ul>
  <li>You are feeding <strong>2 or more people</strong></li>
  <li>You want the <strong>best price-per-slice value</strong> (medium and large both beat small)</li>
  <li>You want <strong>stuffed crust</strong> (not available on small)</li>
  <li>You want <strong>New York Style</strong> crust (not available on small)</li>
  <li>You plan to <strong>have leftovers</strong> (a medium gives much better portion for storage)</li>
</ul>

<p><strong>Overall Verdict:</strong> The small pizza is not the best value at Papa Johns &mdash; the medium and large give you more pizza per dollar. But for solo ordering, gluten-free needs, or variety hacking with 2 smalls, it is a smart choice with genuinely good quality ingredients.</p>

<h2>Storage &amp; Reheating &mdash; Small Pizza Leftovers</h2>

<p>If you do not finish your small pizza, here is how to store and reheat it properly:</p>

<p><strong>Storage:</strong></p>
<ul>
  <li>Cool to room temperature within 2 hours of delivery</li>
  <li>Wrap slices individually in foil or place in an airtight container</li>
  <li>Refrigerate for up to <strong>3 days</strong></li>
  <li>Freeze for up to <strong>1 month</strong></li>
</ul>

<p><strong>Best Reheating Methods (Ranked):</strong></p>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Temp</th>
      <th>Time</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&#x1f947; Air Fryer</td>
      <td>350&deg;F</td>
      <td>3&ndash;4 min</td>
      <td>Best &mdash; crispy base, melted cheese</td>
    </tr>
    <tr>
      <td>&#x1f948; Oven</td>
      <td>375&deg;F</td>
      <td>6&ndash;8 min</td>
      <td>Great &mdash; consistent heat</td>
    </tr>
    <tr>
      <td>&#x1f949; Skillet</td>
      <td>Medium</td>
      <td>3&ndash;5 min</td>
      <td>Good &mdash; crisps the bottom</td>
    </tr>
    <tr>
      <td>&#x274c; Microwave</td>
      <td>High</td>
      <td>45&ndash;60 sec</td>
      <td>Worst &mdash; soggy crust</td>
    </tr>
  </tbody>
</table>
</div>

<h2>Allergen Info &mdash; Papa Johns Small Pizza</h2>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr>
      <th>Allergen</th>
      <th>Original Crust</th>
      <th>Gluten-Free Crust</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wheat / Gluten</td>
      <td>&#x2705; Yes</td>
      <td>&#x26a0;&#xfe0f; Low (ancient grains, not certified GF)</td>
    </tr>
    <tr>
      <td>Milk / Dairy</td>
      <td>&#x2705; Yes (cheese)</td>
      <td>&#x2705; Yes (cheese)</td>
    </tr>
    <tr>
      <td>Eggs</td>
      <td>&#x26a0;&#xfe0f; May contain traces</td>
      <td>&#x26a0;&#xfe0f; May contain traces</td>
    </tr>
    <tr>
      <td>Soy</td>
      <td>&#x26a0;&#xfe0f; May contain traces</td>
      <td>&#x26a0;&#xfe0f; May contain traces</td>
    </tr>
    <tr>
      <td>Tree Nuts</td>
      <td>&#x274c; No</td>
      <td>&#x274c; No</td>
    </tr>
    <tr>
      <td>Peanuts</td>
      <td>&#x274c; No</td>
      <td>&#x274c; No</td>
    </tr>
  </tbody>
</table>
</div>

<p>&#x26a0;&#xfe0f; <strong>Important for Celiac Sufferers:</strong> Papa Johns' Gluten-Free Crust is made with ancient grains but is prepared in the same kitchen as wheat-based products. It is <strong>not recommended for those with celiac disease</strong> &mdash; only for mild gluten sensitivity.</p>

<h2>Related Pages on This Site</h2>
<ul>
  <li><a href="/menus-prices" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Papa Johns Full Menu with Prices 2026</a></li>
  <li><a href="/store-locator" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Find Your Nearest Papa Johns</a></li>
  <li><a href="/coupons" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Check Today's Coupons &amp; Deals</a></li>
  <li><a href="/posts/papa-johns-rewards" style="color: #cc0000; font-weight: bold; text-decoration: underline;">Earn Free Pizza with Papa Rewards</a></li>
</ul>

</div>"""

faqs = [
    {
        "question": "How much does a small Papa Johns pizza cost in 2026?",
        "answer": "A small Papa Johns pizza starts at <strong>$8.99 for a cheese pizza</strong> (0 toppings) and goes up to $12.99 for specialty pizzas like The Works or BBQ Chicken Bacon. A 1-topping small (e.g., pepperoni) costs approximately $9.99. Prices may be slightly higher in major urban markets. Always check current local prices via the Papa Johns app or <a href='/menus-prices' style='color: #cc0000; font-weight: bold; text-decoration: underline;'>papajohns-menus.us/menus-prices</a>."
    },
    {
        "question": "How big is a small Papa Johns pizza?",
        "answer": "A small Papa Johns pizza is <strong>10 inches in diameter</strong> and is cut into <strong>6 slices</strong>. It serves 1\u20132 people and has approximately 78.5 square inches of pizza surface. It is larger than a personal pan pizza but significantly smaller than the medium (12\") or large (14\") options."
    },
    {
        "question": "How many slices does a small Papa Johns pizza have?",
        "answer": "A small Papa Johns pizza comes with <strong>6 slices</strong>. This is standard for all small size orders regardless of crust type or toppings. By comparison, medium and large pizzas both come with 8 slices, and XL comes with 10 slices."
    },
    {
        "question": "Is the small pizza available with stuffed crust at Papa Johns?",
        "answer": "No. The Epic Stuffed Crust and Garlic Epic Stuffed Crust are <strong>only available on large (14\") pizzas</strong> at Papa Johns. They are not offered on small or medium sizes. If you want stuffed crust, you need to order a large."
    },
    {
        "question": "What is the cheapest pizza at Papa Johns?",
        "answer": "The cheapest pizza at Papa Johns is the <strong>small cheese pizza at approximately $8.99</strong>. This is a 10-inch, 6-slice cheese pizza with original crust and no toppings. Using a promo code from the <a href='/coupons' style='color: #cc0000; font-weight: bold; text-decoration: underline;'>Papa Johns coupons page</a> can reduce this further."
    },
    {
        "question": "Is the small or medium better value at Papa Johns?",
        "answer": "The <strong>medium is better value</strong> on a price-per-slice basis \u2014 a medium cheese pizza at ~$11.09 gives 8 slices at ~$1.39 per slice, while a small at ~$8.99 gives 6 slices at ~$1.50 per slice. The large is the best value of all three. The small only makes financial sense if you genuinely cannot eat a medium or need the gluten-free crust option."
    },
    {
        "question": "Does Papa Johns have a gluten-free small pizza?",
        "answer": "Yes. Papa Johns offers a <strong>Gluten-Free Crust</strong> exclusively in the small (10\") size. It is made with ancient grains and costs approximately $1.00\u2013$2.00 more than the standard original crust small. However, it is prepared in the same kitchen as wheat-based products, so it is not suitable for those with celiac disease \u2014 only mild gluten sensitivity."
    },
    {
        "question": "How many calories are in a Papa Johns small pizza?",
        "answer": "A single slice of a small Papa Johns Cheese Pizza (original crust) contains approximately <strong>180 calories</strong>. The full small cheese pizza (6 slices) is approximately <strong>1,080 calories</strong>. A small Pepperoni Pizza slice is around 210 calories. Thin crust reduces this by roughly 20\u201330 calories per slice, and gluten-free crust is the lightest at around 150 calories per slice."
    },
    {
        "question": "Can I order a small pizza for delivery at Papa Johns?",
        "answer": "Yes. The small pizza is available for both <strong>delivery and carryout</strong> at all Papa Johns locations. Ordering via the Papa Johns app or website is recommended for the best pricing, promo code access, and to earn Papa Rewards points. Note that delivery fees and minimum order requirements may apply depending on your location."
    },
    {
        "question": "What toppings are available on Papa Johns small pizzas?",
        "answer": "All standard Papa Johns toppings are available on the small pizza, including pepperoni, sausage, chicken, beef, Canadian bacon, mushrooms, green peppers, onions, black olives, banana peppers, jalape\u00f1os, and all cheese types. Specialty pizza builds (The Works, BBQ Chicken Bacon, etc.) are also available in small. The only limitation is crust \u2014 stuffed crust and New York style are large-only."
    },
    {
        "question": "How does Papa Johns small pizza price compare to Domino's?",
        "answer": "Papa Johns and Domino's small pizzas are similarly priced \u2014 both around <strong>$8.99\u2013$9.99 for a cheese or 1-topping small</strong>. Papa Johns edges ahead on dough quality (fresh, never-frozen) and includes a <strong>free Special Garlic Sauce</strong> with every order that Domino's charges extra for."
    }
]

pricing = [
    { "item": "Small Cheese Pizza", "price": "$8.99", "calories": "1,080 cal total" },
    { "item": "Small Pepperoni Pizza", "price": "$9.99", "calories": "1,260 cal total" },
    { "item": "Small The Works", "price": "$11.99", "calories": "1,380 cal total" },
    { "item": "Small Gluten-Free Cheese", "price": "$10.99", "calories": "900 cal total" }
]

new_post = {
    "id": "post-papa-johns-small-pizza",
    "title": "Papa Johns Small Pizza Price 2026: Cost, Size, Calories & Is It Worth It?",
    "slug": "papa-johns-small-pizza",
    "date": "2026-04-29T10:00:00Z",
    "category": "Menu Guides",
    "image": "/best-pizza-delivery-near-me.jpg", 
    "imageAlt": "Papa Johns small pizza comparison",
    "excerpt": "Everything you need to know about the Papa Johns small pizza in 2026: exact prices, 10-inch size details, calories per slice, and whether it's better value than medium.",
    "author": {
        "name": "Sarah Jenkins",
        "avatar": "/author.jpg"
    },
    "content": html_content,
    "faqs": faqs,
    "pricing": pricing,
    "price": "Starts at $8.99",
    "calories": "180 cal/slice"
}

# check if it already exists
for i, p in enumerate(data):
    if p.get("slug") == "papa-johns-small-pizza":
        data[i] = new_post
        break
else:
    data.insert(0, new_post)

with open("src/app/data/posts.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
print("SUCCESS")
