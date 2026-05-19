import json

with open('src/app/data/posts.json') as f:
    data = json.load(f)

posts = data if isinstance(data, list) else data.get('posts', [])

new_post = {
    "id": 26,
    "title": "The Complete Garlic Sauce Guide: Everything You've Been Doing Wrong (And How to Finally Get It Right)",
    "slug": "complete-garlic-sauce-guide",
    "date": "2026-05-19",
    "author": "Deals Team",
    "category": "Food Guide",
    "excerpt": "From Lebanese toum to roasted garlic cream sauce and classic garlic butter, this complete guide covers every style, technique, and troubleshooting tip you need to master garlic sauce at home.",
    "image": "/complete-garlic-sauce-guide.webp",
    "imageAlt": "Complete garlic sauce guide with toum, roasted garlic, and garlic butter sauces",
    "metaTitle": "The Complete Garlic Sauce Guide: Every Style, Technique & Tip (2026)",
    "metaDesc": "Master every type of garlic sauce - toum, roasted garlic, garlic butter, and aioli - with this complete guide covering techniques, troubleshooting, storage, and creative uses.",
    "content": """
<p><span style="background:#CCEE18;color:#1A3D17;font-weight:900;padding:4px 10px;border-radius:6px;display:inline-block;margin-bottom:8px;">Last Updated: May 2026</span> | <strong>papajohns-menus.us</strong></p>

<p>Let's start with a confession. The first time I tried making garlic sauce from scratch, I ended up with something that looked like wallpaper paste and tasted like regret. I added too much raw garlic, rushed the emulsification, and completely ignored texture. The result? My family still brings it up at dinner tables. Not fondly.</p>

<p>But here's what changed everything - I stopped treating garlic sauce like a simple condiment and started treating it like a craft.</p>

<p>Garlic sauce is one of those things that sounds stupidly easy until you actually make it. Then suddenly you realize there are a hundred little decisions happening at once: Which garlic? Raw or roasted? Oil-based or cream-based? How much acid? The whole thing can spiral fast. This guide exists to stop that spiral before it starts.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">What Actually Is Garlic Sauce? (It's Not Just One Thing)</h2>

<p>Most people say "garlic sauce" and picture something white and creamy - probably the stuff that comes with shawarma or Lebanese takeout. And sure, that's one version. But garlic sauce is actually a whole family of condiments that spans dozens of cultures, cooking traditions, and flavor profiles.</p>

<p>The Lebanese version is toum - a thick, airy, almost whipped sauce made entirely from garlic, oil, lemon juice, and salt. No eggs, no dairy. It's technically a garlic emulsion, and it's genuinely one of the most versatile things you can keep in your fridge.</p>

<p>Then there's the Italian agliata - darker, rougher, made with vinegar-soaked bread and sometimes almonds. Nothing like toum. Or the Greek skordalia, which brings potato or walnuts into the equation. Or the simple buttery garlic sauces you'll find drenching pasta or steak in Western kitchens. Same name, completely different DNA.</p>

<p>Understanding which type you're making is step one. Because the mistake of applying the technique for one to another is how you end up with something confused and unpleasant. So let's walk through each major style and actually understand them.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">The Lebanese Toum: The Queen of All Garlic Sauces</h2>

<p>Toum deserves its own section because it is, without question, the most technically demanding garlic sauce - and the most rewarding when you nail it.</p>

<p>The word "toum" literally means garlic in Arabic. No fluff, no pretension. Just garlic, transformed by science and patience into something magical.</p>

<p>Here's how the chemistry works: garlic contains natural emulsifiers in its cell walls. When you process raw garlic with oil and an acid (lemon juice), those emulsifiers trap tiny oil droplets between water molecules, creating a stable foam-like emulsion. The result is thick, bright white, and almost fluffy. Think mayonnaise, but garlic is doing the heavy lifting instead of egg yolk.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">The Ingredients Are Shockingly Simple</h3>

<p>Whole garlic cloves, kosher salt, neutral oil (sunflower or vegetable - NOT olive oil, which breaks the emulsion), fresh lemon juice, and ice water.</p>

<p>That's it. Five ingredients, infinite ways to mess it up.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">The Process Matters Enormously</h3>

<p>Start by processing the garlic and salt until it becomes a smooth paste. Then - and this is where most people go wrong - you add the oil incredibly slowly. Not slowly like you think. Slower. A thin, steady drizzle while the food processor runs continuously. Alternate the oil with small splashes of lemon juice and ice water to keep the temperature down and help the emulsion stabilize.</p>

<p>If you dump the oil in too fast, the whole thing breaks and becomes oily and separated. It's not recoverable. You're starting over. This is why patience isn't optional here - it's the actual technique.</p>

<p>A good batch of toum takes about 15 minutes of slow, attentive work. But what you get is a sauce that keeps in the fridge for up to a month, pairs with everything from grilled chicken to roasted vegetables to flatbread, and genuinely impresses people every single time you put it on the table.</p>

<p>One more thing: raw garlic is sharp and aggressive. Toum made on Monday tastes noticeably mellower by Wednesday. The harshness fades as the sulfur compounds break down. If you find fresh toum too pungent, give it 24 to 48 hours. It becomes a completely different, gentler experience.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Roasted Garlic Sauce: The Laid-Back Sibling</h2>

<p>Not everyone wants that sharp, punchy garlic hit. Some people want something sweeter, deeper, and more rounded. That's where roasted garlic becomes your best friend.</p>

<p>When garlic roasts, the harsh allicin compounds that cause that raw bite break down entirely. The sugars in the cloves caramelize. What you get is something almost nutty, sweet, and incredibly mellow. You can eat roasted garlic like butter. And a sauce built on that foundation has a completely different personality.</p>

<p>Roasted garlic sauce is incredibly forgiving compared to toum. You can mix it with cream, with olive oil, with mayonnaise, with Greek yogurt. It doesn't break. It doesn't sulk. It just gets along with everything.</p>

<p>The basic method: cut the top off a full head of garlic to expose the cloves, drizzle with olive oil, wrap in foil, and roast at around 200 degrees C (400 F) for 40 to 45 minutes until the cloves are golden and completely soft. Squeeze the cloves out - they'll pop out like little golden pillows - and then blend or mash them into your base.</p>

<p>A simple roasted garlic cream sauce for pasta takes just these roasted cloves, butter, heavy cream, a bit of parmesan, salt, and pepper. It's done in ten minutes and tastes like you spent hours on it. That's the magic of roasting the garlic first.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">The Butter and Garlic Situation</h2>

<p>Let's be honest - garlic butter sauce is probably the most universally loved version. And yet most people make it worse than they should.</p>

<p>The biggest mistake is burning the garlic. Garlic goes from perfect to bitter in seconds when the heat is too high. The moment you smell it starting to brown, you've waited too long. Medium-low heat, enough butter to protect the garlic from direct pan contact, and patience. That's the whole trick.</p>

<p>The second mistake is using garlic powder. Look, there are places where garlic powder has its merits. This isn't one of them. Fresh minced garlic in butter creates a completely different flavor compound - it blooms in the fat, releases its oils, and creates that addictive rounded flavor that garlic powder simply cannot replicate. The difference isn't subtle. It's night and day.</p>

<p>A proper garlic butter sauce for seafood or pasta works like this: melt butter over medium-low heat, add freshly minced garlic (about three to four cloves per 60 grams of butter), let it soften and become fragrant - not brown - for about two minutes, then add your liquid. White wine, cream, stock, lemon juice, depending on what you're making. Season well, finish with fresh parsley or chives, and you've just made something restaurant-quality in your own kitchen.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Aioli: The Mediterranean Cousin That Gets Misrepresented</h2>

<p>Here's a piece of food history that might surprise you: real aioli is technically just garlic and olive oil. That's it. The word comes from the Occitan "all i oli" - garlic and oil. No eggs in the traditional Provencal version.</p>

<p>What most restaurants and supermarkets sell as aioli is actually garlic mayonnaise. Which is delicious, don't get me wrong. But it's not the same thing. Traditional aioli is a slow, brutal emulsion made in a mortar and pestle - garlic pounded to a paste with salt, then oil beaten in drop by drop with sheer elbow grease. It's thick, intensely flavored, and almost custardy in texture.</p>

<p>The garlic mayo version is far easier and more approachable for home cooks: take good quality mayonnaise, add freshly minced or pressed garlic, a squeeze of lemon, and a pinch of salt. That's your "aioli." It's ready in 90 seconds and works brilliantly with fries, fish, roasted vegetables, and basically everything.</p>

<p>If you want to make a more authentic version without spending 20 minutes at a mortar and pestle, the food processor method using egg yolk as an emulsifier gets you closer to the real texture. Use half olive oil, half neutral oil - pure olive oil tends to turn bitter when over-processed.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Understanding Garlic: The Ingredient Itself</h2>

<p>None of this matters if you're starting with bad garlic. And a lot of people are.</p>

<p>Old garlic - the kind that's been sitting in that braided bunch on your counter for three months - has developed a green sprout through the center. That sprout is bitter. It's not dangerous, but it throws off the flavor of anything delicate, including these sauces. When you cut a clove in half, if you see a green shoot, take it out. Takes five seconds, makes a real difference.</p>

<p>Fresh, firm, white garlic with tight papery skin is what you're after. Avoid anything that feels soft, has visible mold spots, or smells musty rather than sharp. Freshness in garlic translates directly into flavor quality in your sauce.</p>

<p>There's also the question of what type of garlic to use. Softneck varieties (the most common grocery store type) are milder and keep longer. Hardneck varieties - Rocambole, Purple Stripe, Porcelain - tend to have more complex flavor and work beautifully in sauces where garlic is the star. If you have access to a farmers market, ask about hardneck varieties. You might never go back.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Salt and Acid: The Two Things Most People Underestimate</h2>

<p>Salt isn't just about making things taste saltier. In garlic sauce, salt actually draws moisture from the garlic cells, which helps with both texture and the release of flavor compounds. This is why most garlic sauce recipes ask you to pound or process the garlic with salt first - it's not just seasoning, it's a technique.</p>

<p>Acid - whether lemon juice, vinegar, or white wine - serves multiple functions. It brightens the flavor, cuts through the richness of oil or cream, and in emulsion-based sauces like toum, it actively helps stabilize the texture. Without enough acid, garlic sauces can taste flat and heavy even when they're technically seasoned correctly.</p>

<p>The balance between salt and acid is personal and somewhat regional. Lebanese toum leans toward lemon. Greek skordalia sometimes prefers wine vinegar. Garlic butter sauces often use a squeeze of lemon right at the end, off the heat. There's no universal answer - but if your garlic sauce tastes somehow "off" and you can't identify why, a small addition of acid usually solves it.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Troubleshooting: When Things Go Wrong</h2>

<p><strong>Toum broke and turned oily?</strong> Don't throw it away. Start fresh with one new garlic clove processed with a bit of salt, then slowly pour the broken mixture into it as if it's the oil. The new emulsifier gives the broken sauce a second chance.</p>

<p><strong>Garlic butter sauce turned bitter?</strong> The garlic burned. There's no fixing it - scrape the pan, wipe it clean, and start again with lower heat. It hurts, but it's the only way.</p>

<p><strong>Sauce too sharp and raw-tasting?</strong> Give it time. Refrigerate for 24 hours. Or if you need it now, a pinch of sugar and a bit more acid can balance out harsh garlic notes somewhat, though time remains the best solution.</p>

<p><strong>Too thin?</strong> For cream-based sauces, keep simmering to reduce. For oil-based sauces, you may have added too much water - keep processing and the emulsion may tighten up. For a quick fix in butter sauces, whisk in cold butter off the heat piece by piece.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">How to Use Garlic Sauce (Beyond the Obvious)</h2>

<p>Most people use garlic sauce as a dip and stop there. That's genuinely leaving a lot of potential on the table.</p>

<p>Toum spread on flatbread before topping with vegetables and cheese makes for an extraordinary pizza base. Roasted garlic sauce stirred into mashed potatoes replaces butter and takes the whole dish somewhere else entirely. Garlic butter sauce spooned over poached eggs makes a breakfast that people will ask about for weeks. A spoonful of aioli stirred into soup just before serving adds body and richness without cream.</p>

<p>The Lebanese use toum as a marinade for chicken - coat the chicken completely, leave it overnight, grill it. The garlic penetrates deeply and the oil keeps everything moist. It's one of the simplest and most effective marinades in existence.</p>

<p>Cold garlic sauce spread onto sandwiches instead of mayo transforms a basic lunch into something genuinely memorable. Once you start thinking of garlic sauce as a versatile cooking ingredient rather than just a dipping condiment, your whole kitchen opens up.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">A Word on Storage and Shelf Life</h2>

<div class="overflow-x-auto my-8">
<table class="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
<thead>
<tr class="bg-[#1A3D17] text-white uppercase text-xs font-black">
<th class="p-4 border border-gray-100">Sauce Type</th>
<th class="p-4 border border-gray-100">Storage Method</th>
<th class="p-4 border border-gray-100">Shelf Life</th>
</tr>
</thead>
<tbody>
<tr><td class="p-4 border border-gray-100 font-bold">Toum (Lebanese garlic emulsion)</td><td class="p-4 border border-gray-100">Airtight container, refrigerator</td><td class="p-4 border border-gray-100">Up to 4 weeks</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Roasted garlic cream sauce</td><td class="p-4 border border-gray-100">Airtight container, refrigerator</td><td class="p-4 border border-gray-100">Up to 1 week</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Roasted garlic oil sauce</td><td class="p-4 border border-gray-100">Airtight container, refrigerator</td><td class="p-4 border border-gray-100">Up to 2 weeks</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Garlic butter (solid)</td><td class="p-4 border border-gray-100">Wrapped log, freezer</td><td class="p-4 border border-gray-100">Up to 3 months</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Aioli / garlic mayo (no raw egg)</td><td class="p-4 border border-gray-100">Airtight container, refrigerator</td><td class="p-4 border border-gray-100">Up to 1 week</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Aioli with raw egg yolk</td><td class="p-4 border border-gray-100">Airtight container, refrigerator</td><td class="p-4 border border-gray-100">4 to 5 days</td></tr>
</tbody>
</table>
</div>

<p>Important note on toum: do not freeze it. The emulsion breaks on thawing and you'll be left with separated oil and garlic paste. The high acid content is what keeps it shelf-stable in the fridge for so long - use that to your advantage.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Final Thoughts</h2>

<p>Garlic sauce isn't complicated once you understand what it's actually doing. The chemistry, the balance of fat and acid and salt, the importance of temperature and timing - these aren't obstacles. They're the things that separate a forgettable condiment from something people actually remember.</p>

<p>The truth is, most people who think they don't like garlic sauce have just never had a well-made version. A properly emulsified toum, light and airy and bright with lemon, bears almost no resemblance to the heavy, oily garlic sauces you get from mediocre takeout spots. Roasted garlic cream sauce tastes nothing like the harsh, sharp dressings that put people off.</p>

<p>Start with one version. Master it. Then try another. Your cooking will be richer for it, your fridge will be more interesting, and your guests will start asking what your secret is.</p>

<p>The secret is just this guide. And a whole lot of garlic.</p>

<p>👉 <strong><a href="/menus-prices">View Full Papa Johns Menu with Prices -></a></strong><br/>
👉 <strong><a href="/coupons">Check Today's Papa Johns Coupons &amp; Deals -></a></strong><br/>
👉 <strong><a href="/store-locator">Find Your Nearest Papa Johns -></a></strong></p>

<p><em>Content on papajohns-menus.us is independently maintained and updated. We are not affiliated with Papa Johns International, Inc.</em></p>

""",
    "faqs": [
        {
            "question": "What is toum and how is it different from regular garlic sauce?",
            "answer": "Toum is a Lebanese garlic emulsion made from just garlic, neutral oil, lemon juice, and salt - no eggs or dairy. It's thick, white, and almost fluffy in texture. Unlike regular garlic sauces that use mayonnaise or cream as a base, toum relies on natural emulsifiers in the garlic cells themselves to hold the oil and water together."
        },
        {
            "question": "Why does my garlic sauce taste too sharp and raw?",
            "answer": "Sharp, harsh garlic flavor in a fresh sauce is completely normal. The sulfur compounds responsible for the raw bite break down over time. Refrigerate your garlic sauce for 24 to 48 hours and you'll notice a significantly mellower, more rounded flavor. If you need it now, a small pinch of sugar and a touch more lemon juice can help balance the sharpness."
        },
        {
            "question": "Why did my toum break and turn oily?",
            "answer": "Toum breaks when oil is added too quickly, disrupting the emulsion. To fix it, start fresh with one new garlic clove processed with a pinch of salt, then very slowly drizzle the broken sauce back in as if it were oil. The fresh garlic acts as a new emulsifier and can rescue the broken batch."
        },
        {
            "question": "Can I use olive oil for toum?",
            "answer": "No. Olive oil breaks the emulsion in toum and can also turn bitter when over-processed in a food processor. Always use a neutral oil like sunflower, vegetable, or canola oil for toum. Olive oil is better suited for roasted garlic sauces and aioli."
        },
        {
            "question": "How long does homemade garlic sauce last in the fridge?",
            "answer": "It depends on the type. Toum lasts up to 4 weeks in an airtight container thanks to its high acid content. Roasted garlic cream sauce lasts about 1 week. Garlic butter in solid form can be frozen for up to 3 months. Aioli made with raw egg yolk should be used within 4 to 5 days."
        },
        {
            "question": "What is the difference between aioli and garlic mayo?",
            "answer": "Traditional aioli is made from just garlic and olive oil emulsified together - no eggs. What most restaurants and stores sell as aioli is actually garlic mayonnaise: regular mayo mixed with garlic and lemon. Both are delicious, but they're different products. The garlic mayo version is much easier to make at home."
        },
        {
            "question": "What type of garlic is best for making garlic sauce?",
            "answer": "Fresh, firm garlic with tight papery skin is essential. Always remove any green sprout from the center of a clove as it tastes bitter. For the most flavorful sauces, hardneck garlic varieties like Rocambole or Purple Stripe (available at farmers markets) offer more complex flavor than standard grocery store softneck garlic."
        },
        {
            "question": "Can I freeze toum?",
            "answer": "No. Freezing toum causes the emulsion to break when it thaws, resulting in separated oil and garlic paste. Store toum in an airtight container in the refrigerator where it will keep for up to four weeks due to its high lemon juice content."
        }
    ]
}

posts.append(new_post)

if isinstance(data, list):
    output = posts
else:
    data['posts'] = posts
    output = data

with open('src/app/data/posts.json', 'w') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print("Done! Total posts:", len(posts))
print("New post slug:", new_post['slug'])
