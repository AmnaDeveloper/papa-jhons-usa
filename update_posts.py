import json
import traceback

try:
    with open('src/app/data/posts.json', 'r', encoding='utf-8') as f:
        posts = json.load(f)

    new_post = {
        "id": 16,
        "title": "PAPA JOHNS PAPADIAS DISCONTINUED 2026: Why They Were Removed, What Replaced Them & Fan Reactions",
        "slug": "papa-johns-papadias-discontinued-2026",
        "date": "2026-04-22",
        "excerpt": "Papa Johns officially discontinued Papadias in Q2 2026. Learn why they were removed, the complete 6-year history, all flavors ever sold, what replaced them, and fan reactions.",
        "category": "Papadias",
        "author": "Papa Johns Menu Expert",
        "image": "/new-papadias-flavors-2026.webp",
        "imageAlt": "Papa Johns Papadias discontinued 2026 - all flavors history and replacement",
        "price": "Discontinued",
        "calories": "800 - 910 cal",
        "pricing": [
            {
                "item": "Italian Papadia (Was)",
                "price": "$6–$8.99",
                "calories": "940 cal",
                "icon": "🍕"
            },
            {
                "item": "Philly Cheesesteak (Was)",
                "price": "$6–$8.99",
                "calories": "800 cal",
                "icon": "🍕"
            },
            {
                "item": "Grilled BBQ Chicken & Bacon (Was)",
                "price": "$6–$8.99",
                "calories": "830 cal",
                "icon": "🍕"
            },
            {
                "item": "New Toasted Sandwich (Replacement)",
                "price": "$7.99",
                "calories": "~600-800 cal",
                "icon": "🥖",
                "popular": True
            }
        ],
        "faqs": [
            {
                "question": "Are Papa Johns Papadias discontinued in 2026?",
                "answer": "Yes. Papa Johns officially announced on February 27, 2026 that Papadias would be discontinued in Q2 2026. The removal began rolling out from March 2026 onwards alongside the launch of the new Oven-Toasted Sandwiches."
            },
            {
                "question": "Why did Papa Johns discontinue Papadias?",
                "answer": "Papa Johns discontinued Papadias for three main reasons: (1) they disrupted kitchen operations and slowed down pizza orders, (2) the company needed menu simplification as part of its 2026 transformation plan, and (3) the brand was cutting costs while closing 300 underperforming stores."
            },
            {
                "question": "What replaced Papadias at Papa Johns?",
                "answer": "Papa Johns launched three new Oven-Toasted Sandwiches in March 2026 as the replacement: Philly Cheesesteak, Chicken Bacon Ranch, and Steak & Mushroom. These are served on ciabatta bread at $7.99 each."
            },
            {
                "question": "When were Papadias removed from the menu?",
                "answer": "Papadias began disappearing from US locations in late March/early April 2026 following the launch of the new Oven-Toasted Sandwiches on March 30, 2026. Full removal was scheduled for Q2 2026."
            },
            {
                "question": "Are Papadias still available in Canada?",
                "answer": "Reports suggest Papadias may still be available at some Canadian Papa Johns locations as of April 2026. Check your local Canadian Papa Johns app for current menu availability."
            },
            {
                "question": "What were all the Papadia flavors?",
                "answer": "The permanent Papadia flavors were: Italian, Philly Cheesesteak, Grilled BBQ Chicken & Bacon, Meatball Pepperoni, and Grilled Buffalo Chicken. Limited-time flavors included Doritos Cool Ranch (chicken, beef, steak) and Double Cheeseburger."
            },
            {
                "question": "How much did Papadias cost?",
                "answer": "Papadias were originally priced at $6 when launched in 2020. By 2024-2026, the price had increased to $8.99. A Parmesan Crust upgrade was available for an additional $1."
            },
            {
                "question": "Are the new toasted sandwiches as good as Papadias?",
                "answer": "This depends on personal preference. Papadias were unique for using Papa Johns' pizza dough, creating a hybrid pizza-sandwich experience. The new Oven-Toasted Sandwiches use ciabatta bread and are more of a classic sandwich format. Many fans prefer the Papadia style, while others appreciate the more straightforward toasted sandwich."
            },
            {
                "question": "Will Papadias come back as a limited-time item?",
                "answer": "As of April 2026, Papa Johns has not announced any plans to bring Papadias back — even as a limited-time offer. However, Papa Johns has previously brought back discontinued LTO items, so a temporary return is possible in the future."
            },
            {
                "question": "What were Papa Bites?",
                "answer": "Papa Bites were bite-sized, oven-baked pockets of fresh pizza dough filled with various ingredients. They were introduced around 2022 and discontinued alongside Papadias in Q2 2026 for the same operational efficiency reasons."
            }
        ],
        "content": """<style>
  body { font-family: Georgia, serif; width: 100%; color: #1A3D17; line-height: 1.75; font-size: 17px; }
  h2 { font-size: 1.5rem; margin-top: 2.5rem; margin-bottom: 0.75rem; border-bottom: 2px solid #e8e8e8; padding-bottom: 6px; font-weight: bold; }
  h3 { font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.5rem; font-weight: bold; }
  .meta { font-size: 14px; color: #666; margin-bottom: 1.5rem; }
  .hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 2rem 0; }
  .stat-box { background: #f8f4ef; border-radius: 10px; padding: 16px; text-align: center; border: 1.5px solid #eee; }
  .stat-box .emoji { font-size: 1.5rem; }
  .stat-box .label { font-size: 12px; color: #666; font-weight: bold; text-transform: uppercase; margin-top: 4px; }
  .stat-box .value { font-size: 1rem; font-weight: bold; color: #1A3D17; margin-top: 2px; }
  .comp-table { width: 100%; border-collapse: collapse; font-size: 15px; margin: 1.5rem 0; }
  .comp-table th { background: #1A3D17; color: white; padding: 10px 14px; text-align: left; }
  .comp-table td { padding: 10px 14px; border-bottom: 1px solid #eee; vertical-align: top; }
  .comp-table tr:nth-child(even) td { background: #fafafa; }
  .timeline-table { width: 100%; border-collapse: collapse; font-size: 14px; margin: 1.5rem 0; }
  .timeline-table th { background: #1A3D17; color: white; padding: 10px 14px; }
  .timeline-table td { padding: 10px 14px; border-bottom: 1px solid #eee; }
  .timeline-table tr:nth-child(even) td { background: #fafafa; }
  .quote-box { background: #1A3D17; color: white; border-radius: 10px; padding: 20px 24px; margin: 2rem 0; }
  .quote-box blockquote { font-size: 1.1rem; font-style: italic; line-height: 1.7; margin: 0 0 8px 0; }
  .quote-box cite { font-size: 13px; opacity: 0.8; }
  .info-box { background: #fff8e1; border-left: 4px solid #f59e0b; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 1.5rem 0; }
  .discontinued-badge { display: inline-block; background: #cc0000; color: white; font-size: 12px; font-weight: bold; padding: 3px 10px; border-radius: 4px; margin-bottom: 8px; text-transform: uppercase; }
  .fan-quote { border-left: 3px solid #cc0000; padding: 10px 16px; margin: 12px 0; font-style: italic; background: #fafafa; border-radius: 0 6px 6px 0; }
  @media (max-width: 600px) { .hero-stats { grid-template-columns: 1fr; } }
</style>

<p class="meta">
  Last Updated: April 2026 &nbsp;|&nbsp; papajohns-menus.us
</p>

<div class="hero-stats">
  <div class="stat-box">
    <div class="emoji">🍕</div>
    <div class="label">Introduced</div>
    <div class="value">February 2020</div>
  </div>
  <div class="stat-box">
    <div class="emoji">❌</div>
    <div class="label">Discontinued</div>
    <div class="value">Q2 2026</div>
  </div>
  <div class="stat-box">
    <div class="emoji">🔄</div>
    <div class="label">Replaced By</div>
    <div class="value">Toasted Sandwiches</div>
  </div>
</div>

<h2>1. What Were Papa Johns Papadias?</h2>
<p>Papa Johns Papadias were a unique menu item that blurred the line between a pizza and a sandwich. Launched in February 2020, they quickly became one of the most beloved and talked-about items on the Papa Johns menu — beloved by fans for their crispy, hand-folded flatbread crust and generous fillings.</p>
<p>Inspired by the Italian piadina — a traditional flatbread street food from Northern Italy — Papadias used Papa Johns' own fresh, never-frozen pizza dough as the base. The dough was hand-stretched, loaded with fresh toppings, folded in half like a quesadilla, and baked in the oven until the outside became shatteringly crisp. Each order came with a dipping sauce on the side, a nod to Papa Johns' famous garlic sauce culture.</p>

<div class="info-box">
  <strong>🍕 What Made Papadias Special?</strong><br/>
  Papadias were the first dedicated lunch item Papa Johns ever created. They used the same fresh pizza dough as the pizzas but folded and baked differently — resulting in a uniquely crispy crust unlike anything else on the fast food market. They were priced at $6–$8.99 and came with a dipping cup, making them a strong value option for solo meals.
</div>

<p>According to Papa Johns Senior VP of Menu Strategy Scott Rodriguez, the team spent nearly a year developing the piadina concept before launch. The idea was to expand into the lunch daypart by leveraging Papa Johns' core strength — fresh pizza dough — in an entirely new format.</p>

<h2>2. Complete Papadias History (2020–2026)</h2>
<p>Papadias had a 6-year run on the Papa Johns menu. Here is the complete timeline from launch to discontinuation:</p>

<div style="overflow-x: auto; width: 100%;">
<table class="timeline-table">
  <thead>
    <tr><th>📅 Year</th><th>📌 Milestone</th></tr>
  </thead>
  <tbody>
    <tr><td>February 2020</td><td>Papadias officially launched in 4 original flavors: Italian, Philly Cheesesteak, Grilled BBQ Chicken & Bacon, and Meatball Pepperoni — priced at $6</td></tr>
    <tr><td>March 2020</td><td>COVID-19 lockdowns unexpectedly boosted Papadia sales — portable handheld items surged in popularity during the pandemic</td></tr>
    <tr><td>September 2020</td><td>Grilled Buffalo Chicken Papadia added as a 5th permanent flavor</td></tr>
    <tr><td>June 2021</td><td>Parmesan Crust option added to all Papadias — customers could upgrade to a parmesan-breaded flatbread for $1 extra</td></tr>
    <tr><td>2022</td><td>Papa Johns introduced Papa Bites (bite-sized dough pockets) to complement the Papadia lineup</td></tr>
    <tr><td>2023</td><td>Limited-time Doritos Cool Ranch Papadia collab launched — drove higher same-store sales</td></tr>
    <tr><td>2024</td><td>Papadias price increased from $6 to $8.99; lineup reduced to streamline operations</td></tr>
    <tr><td>February 27, 2026</td><td>Papa Johns CFO Ravi Thanawala announces Papadias and Papa Bites will be removed in Q2 2026</td></tr>
    <tr><td>March 30, 2026</td><td>New Oven-Toasted Sandwiches launched as replacement — Papadias begin disappearing from locations</td></tr>
    <tr><td>Q2 2026</td><td><span class="discontinued-badge">Discontinued</span> Papadias officially discontinued across all US Papa Johns locations</td></tr>
  </tbody>
</table>
</div>

<h2>3. All Papadias Flavors — Complete List (All Varieties Ever Sold)</h2>
<p>Over the 6-year lifetime of Papadias, Papa Johns sold the following flavors — some permanent, some limited-time:</p>

<h3>Permanent Flavors</h3>
<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr><th>🍕 Flavor</th><th>🥗 Ingredients</th><th>🍶 Dipping Sauce</th><th>💰 Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Italian</td><td>Alfredo sauce, spicy Italian sausage, salami, mozzarella, banana peppers</td><td>Pizza sauce</td><td>$6–$8.99</td></tr>
    <tr><td>Philly Cheesesteak</td><td>Sliced Philly steak, fresh-cut onions, green peppers, mozzarella, Philly sauce</td><td>Garlic sauce</td><td>$6–$8.99</td></tr>
    <tr><td>Grilled BBQ Chicken & Bacon</td><td>Grilled chicken, bacon, onions, mozzarella, BBQ sauce drizzle</td><td>BBQ sauce</td><td>$6–$8.99</td></tr>
    <tr><td>Meatball Pepperoni</td><td>Spicy meatballs, pepperoni, pizza sauce, mozzarella, Italian seasoning</td><td>Pizza sauce</td><td>$6–$8.99</td></tr>
    <tr><td>Grilled Buffalo Chicken</td><td>Grilled chicken, buffalo sauce, mozzarella, banana peppers</td><td>Ranch dipping sauce</td><td>$6–$8.99</td></tr>
  </tbody>
</table>
</div>

<h3>Limited-Time & Special Flavors</h3>
<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr><th>🎯 Flavor</th><th>📅 Available</th><th>🔑 Key Feature</th></tr>
  </thead>
  <tbody>
    <tr><td>Double Cheeseburger Papadia</td><td>December 2020 (LTO)</td><td>Seasoned beef, dill pickles, cheese — served with burger dipping sauce</td></tr>
    <tr><td>Parmesan Crust Upgrade</td><td>June 2021 onwards</td><td>+$1 upgrade — parmesan cheese baked onto outside of crust, adds umami crunch</td></tr>
    <tr><td>Doritos Cool Ranch — Chicken</td><td>2023 (LTO)</td><td>Doritos-seasoned crust, Cool Ranch sauce, tomatoes, cheese, onions</td></tr>
    <tr><td>Doritos Cool Ranch — Beef</td><td>2023 (LTO)</td><td>Same as chicken version with seasoned ground beef filling</td></tr>
    <tr><td>Doritos Cool Ranch — Steak</td><td>2023 (LTO)</td><td>Steak, Cool Ranch Doritos sauce, tomatoes, cheese, onions — fan favorite</td></tr>
    <tr><td>Create Your Own Papadia</td><td>2021 onwards</td><td>Custom fillings from pizza toppings, max 3 toppings per Papadia</td></tr>
  </tbody>
</table>
</div>

<h2>4. Why Did Papa Johns Discontinue Papadias in 2026?</h2>
<p>The decision to discontinue Papadias was not made lightly. According to Papa Johns leadership, it came down to three main reasons: operational complexity, kitchen disruption, and a strategic refocus on core pizza.</p>

<h3>Reason 1 — Papadias Disrupted Kitchen Operations</h3>
<p>Making a Papadia required a completely different workflow than making a pizza. Staff had to hand-stretch dough to a specific size, load fillings, fold the flatbread, and bake it separately from the pizza line. During peak hours, this disrupted the flow of the kitchen and slowed down pizza orders — the core revenue driver.</p>
<p>Papa Johns CEO Todd Penegor confirmed this directly on the Q4 2026 earnings call: making Papadias often "breaks the rhythm of operations." The goal moving forward is for staff to focus on becoming, in Penegor's words, "not just the best pizza makers in the business, but over time being the best bakers."</p>

<h3>Reason 2 — Sales Decline & Same-Store Pressure</h3>
<p>Papa Johns has reported same-store sales declines for 7 of its last 8 quarters before the discontinuation. The company was under enormous financial pressure, closing 300 underperforming stores and cutting 7% of its corporate workforce simultaneously. In this environment, every menu item needed to justify its operational cost.</p>
<p>CFO Ravi Thanawala noted that removing Papadias would cause a roughly 150 basis point impact on North American comparable sales — a real short-term hit — but the company deemed the long-term operational benefit worth it.</p>

<h3>Reason 3 — Menu Simplification Strategy</h3>
<p>Under CEO Todd Penegor, who took the helm in 2024, Papa Johns embarked on a full transformation plan. A key pillar of this plan was menu simplification — fewer items, executed better. Papadias, while popular, added complexity that didn't align with this direction.</p>

<div class="info-box">
  <strong>📊 Key Stat: The Business Impact</strong><br/>
  Removing Papadias was projected to reduce North American same-store sales by approximately 150 basis points in 2026. Papa Johns accepted this short-term loss in exchange for long-term operational improvements — a bold but deliberate strategic trade-off.
</div>

<h2>5. Official Statement from Papa Johns CEO Todd Penegor</h2>
<p>On February 27, 2026, during the Q4 earnings call, Papa Johns CEO Todd Penegor made the following official statement regarding the Papadias discontinuation:</p>

<div class="quote-box">
  <blockquote>"The elimination of Papadias and Papa Bites will have an impact on our business, but it's absolutely the right thing to do ... to create great service experiences time and again moving forward."</blockquote>
  <cite>— Todd Penegor, CEO, Papa Johns International | Q4 2026 Earnings Call</cite>
</div>

<p>CFO and North American President Ravi Thanawala added that the decision followed extensive productivity studies and direct feedback from franchisees and customers. He confirmed the change would take effect during Q2 2026 and acknowledged the short-term sales impact.</p>

<h2>6. What Replaced Papadias? — New Oven-Toasted Sandwiches (2026)</h2>
<p>On March 30, 2026 — just weeks after announcing the Papadias discontinuation — Papa Johns launched a brand new menu category: Oven-Toasted Sandwiches. These are designed to fill the non-pizza, handheld sandwich gap left by the Papadias, but with a completely different format.</p>
<p>The new sandwiches are built on ciabatta-style bread (not pizza dough), brushed with Papa Johns' signature Special Garlic Sauce, and loaded with high-quality meats and white American cheese. They are baked in the same pizza ovens, maintaining the brand's "better ingredients" promise.</p>

<h3>The 3 New Oven-Toasted Sandwich Flavors</h3>
<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr><th>🥖 Sandwich</th><th>🥗 Ingredients</th><th>🍶 Sauce</th><th>💰 Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Philly Cheesesteak</td><td>Seasoned steak, roasted onions & peppers, white American cheese</td><td>Pizza ranch + Garlic sauce on bread</td><td>$7.99</td></tr>
    <tr><td>Chicken Bacon Ranch</td><td>Grilled all-white chicken, bacon, tomatoes, banana peppers, white American cheese</td><td>Pizza ranch + Garlic sauce on bread</td><td>$7.99</td></tr>
    <tr><td>Steak & Mushroom</td><td>Seasoned steak, roasted mushrooms & onions, white American cheese</td><td>Garlic truffle sauce + Garlic sauce on bread</td><td>$7.99</td></tr>
  </tbody>
</table>
</div>

<div class="info-box">
  <strong>💡 Ordering Tip — Save Money on Toasted Sandwiches</strong><br/>
  Buy 2 or more Oven-Toasted Sandwiches through Papa Pairings to get them for $6.99 each instead of $7.99. Bundle a sandwich with any Pepsi-Cola drink for $9.49. Order directly through papajohns.com or the app — third-party delivery apps add a $0.50–$1.00 markup.
</div>

<h2>7. Papadias vs New Toasted Sandwiches — Full Comparison</h2>
<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr><th>Feature</th><th>❌ Papadias (Discontinued)</th><th>✅ Toasted Sandwiches (New)</th></tr>
  </thead>
  <tbody>
    <tr><td>Bread Type</td><td>Papa Johns fresh pizza dough (folded)</td><td>Ciabatta-style bread (toasted)</td></tr>
    <tr><td>Price</td><td>$6 – $8.99</td><td>$7.99 ($6.99 via Papa Pairings)</td></tr>
    <tr><td>Calories (approx.)</td><td>800–910 cal</td><td>Varies by flavor (~600–800 cal est.)</td></tr>
    <tr><td>Dipping Sauce</td><td>Included — varies by flavor</td><td>Sauce baked into sandwich</td></tr>
    <tr><td>Flavors Available</td><td>5 permanent + multiple LTOs</td><td>3 permanent flavors at launch</td></tr>
    <tr><td>Crust Options</td><td>Original or Parmesan Crust</td><td>Ciabatta only (no options)</td></tr>
    <tr><td>Kitchen Complexity</td><td>High — disrupted pizza workflow</td><td>Low — simplified operations</td></tr>
    <tr><td>Launched</td><td>February 2020</td><td>March 30, 2026</td></tr>
    <tr><td>Status</td><td><span class="discontinued-badge">Discontinued</span> Q2 2026</td><td>Currently available nationwide</td></tr>
  </tbody>
</table>
</div>

<h2>8. Fan Reactions & Social Media Response</h2>
<p>The announcement of Papadias being discontinued sparked immediate reactions from loyal fans across social media. Many customers expressed genuine disappointment, particularly those who had been ordering Papadias regularly since 2020.</p>

<h3>What Fans Are Saying</h3>
<div class="fan-quote">"The Italian Papadia was my favorite lunch. Nothing else at Papa Johns came close — the banana peppers and crispy crust were perfect." — Reddit user, r/papajohns</div>
<div class="fan-quote">"I can't believe they're getting rid of Papadias. They were the only reason I ordered from Papa Johns for lunch." — Twitter/X comment, March 2026</div>
<div class="fan-quote">"Honestly the new toasted sandwiches look good but they're just... normal sandwiches. The Papadia was special because it felt like pizza and a sandwich at the same time." — Food blog comment</div>
<div class="fan-quote">"The Doritos Cool Ranch Papadia was a limited-time item I waited months to come back. Now it's never coming back at all." — Facebook, Papa Johns fan group</div>

<p>Despite the fan backlash, many food critics and industry analysts praised the decision as a necessary step for Papa Johns to stabilize its operations during a challenging financial period. The brand's stock responded positively to the simplification strategy announcement.</p>

<div class="info-box">
  <strong>📱 Still Searching for Papadias?</strong><br/>
  If you are in Canada, Papadias may still be available — reports suggest the Canadian menu was not immediately affected by the Q2 2026 US discontinuation. Check your local Canadian Papa Johns app for current availability.
</div>

<h2>9. Are Papa Johns Papadias Coming Back?</h2>
<p>As of April 2026, Papa Johns has made no official announcement about bringing Papadias back to the US menu. The discontinuation appears to be a permanent strategic decision tied to the company's transformation plan under CEO Todd Penegor.</p>

<p>However, there are a few scenarios under which Papadias could potentially return:</p>

<div style="overflow-x: auto; width: 100%;">
<table class="comp-table">
  <thead>
    <tr><th>Scenario</th><th>Likelihood</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>Permanent return to US menu</td><td>Very Low</td><td>Contradicts entire 2026 simplification strategy</td></tr>
    <tr><td>Limited-time return as LTO</td><td>Medium</td><td>Papa Johns has brought back LTO items before — e.g., Double Cheeseburger Papadia</td></tr>
    <tr><td>Return to Canada only</td><td>Possible</td><td>Canadian operations were not fully confirmed as discontinued</td></tr>
    <tr><td>Return under new CEO leadership</td><td>Unknown</td><td>Future management could reverse the decision post-transformation</td></tr>
    <tr><td>New Papadia-inspired item</td><td>Medium</td><td>Future innovation could incorporate Papadia-style folded pizza dough in a new format</td></tr>
  </tbody>
</table>
</div>

<p>For the most current status, always check papajohns.com or the official Papa Johns app. If Papadias return as a limited-time offer, they would likely be promoted through the app and Papa Rewards program first.</p>

<h2>Summary — Papa Johns Papadias Discontinued 2026</h2>
<p>Papadias were one of the most innovative and beloved menu items Papa Johns ever created. Launched in February 2020 as an Italian piadina-inspired flatbread sandwich, they gave Papa Johns a genuine lunch identity and drove incremental sales for six years.</p>
<p>Their discontinuation in Q2 2026 was not a reflection of their popularity — but rather a necessary business decision as Papa Johns battled falling same-store sales, 300 store closures, and a need to simplify kitchen operations. CEO Todd Penegor summed it up best: it was the right long-term decision even though it created short-term pain.</p>
<p>The new Oven-Toasted Sandwiches are now available at $7.99 and offer a different, more conventional sandwich experience. Whether they can fill the emotional gap left by Papadias remains to be seen.</p>

<div class="info-box">
  <strong>📌 Quick Summary</strong><br/>
  Papadias: Launched Feb 2020 | Discontinued Q2 2026 | 5 permanent flavors + many LTOs | Replaced by Oven-Toasted Sandwiches ($7.99) | Reason: operational complexity + menu simplification strategy
</div>

<hr style="border-color: #eee; margin: 2rem 0;"/>
<p style="font-size: 12px; color: #999; font-style: italic;">
  Disclaimer: papajohns-menus.us is an independent fan guide and is not affiliated with or endorsed by Papa Johns International, Inc. All brand names, trademarks, and product names belong to their respective owners. Menu information and pricing is based on publicly available information as of April 2026 and may vary by location.
</p>"""
    }

    # checking if already exists
    exists = False
    for i, post in enumerate(posts):
        if post['slug'] == new_post['slug']:
            posts[i] = new_post
            exists = True
            print("Post already existed, updating it.")
            break
            
    if not exists:
        posts.insert(0, new_post)
        print("New post added successfully.")

    with open('src/app/data/posts.json', 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=4)
        
except Exception as e:
    print(f"Error: {e}")
    traceback.print_exc()
