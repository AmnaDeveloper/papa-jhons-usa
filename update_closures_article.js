const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const articleIndex = data.findIndex(p => p.slug === 'papa-johns-closing-stores-2026');

if (articleIndex === -1) {
    console.error('Article not found!');
    process.exit(1);
}

const htmlContent = `
<p><span style="background:#CCEE18;color:#1A3D17;font-weight:900;padding:4px 10px;border-radius:6px;display:inline-block;margin-bottom:8px;">Last Updated: May 2026</span> | <strong>papajohns-menus.us</strong></p>

<p>If you've been hearing rumors about Papa Johns shutting down locations near you - they're true. In February 2026, Papa Johns officially confirmed it is closing <strong>up to 300 North American stores</strong> by the end of 2027, with roughly <strong>200 of those closures happening by the end of 2026</strong>.</p>

<p>This is the biggest contraction in Papa Johns' history. And if you're a regular customer, the question on your mind is simple: is my local store closing?</p>

<p>This guide covers everything confirmed - exactly how many stores are closing, why it's happening, which types of locations are most at risk, what Papa Johns says about the future, and how to check if your nearest store is affected. If you're looking to save on your last few orders at a closing location, check out the <a href="/posts/papa-johns-50-off-deal">Papa Johns 50% off deal</a> guide.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">The Numbers - How Many Papa Johns Are Closing?</h2>

<p>Here is what Papa Johns has officially confirmed, based on the company's February 26, 2026 earnings call and subsequent filings:</p>

<div class="overflow-x-auto my-8">
<table class="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
<thead>
<tr class="bg-[#1A3D17] text-white uppercase text-xs font-black">
<th class="p-4 border border-gray-100">Detail</th>
<th class="p-4 border border-gray-100">Number</th>
</tr>
</thead>
<tbody>
<tr><td class="p-4 border border-gray-100 font-bold">Total planned closures (North America)</td><td class="p-4 border border-gray-100 font-black text-[#cc0000]">Up to 300 stores</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Closures expected in 2026</td><td class="p-4 border border-gray-100 font-black text-[#cc0000]">Approximately 200 stores</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Closures expected in 2027</td><td class="p-4 border border-gray-100 font-bold">Remaining ~100 stores</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Total Papa Johns locations (end of 2025)</td><td class="p-4 border border-gray-100 font-bold">~3,500 stores</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Percentage of total locations affected</td><td class="p-4 border border-gray-100 font-bold">~9%</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Corporate layoffs announced alongside</td><td class="p-4 border border-gray-100 font-bold">7% of ~700-person corporate workforce</td></tr>
</tbody>
</table>
</div>

<p>To put that in perspective: closing 9% of your locations is significant but not catastrophic. Papa Johns will still have approximately 3,200 North American locations after the closures are complete - still one of the largest pizza delivery chains in the country, alongside competitors like <a href="/posts/papa-johns-vs-dominos">Domino's and Pizza Hut</a>.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Why Is Papa Johns Closing Stores?</h2>

<p>Papa Johns CFO Ravi Thanawala was direct on the earnings call. The stores being closed are those that are <strong>"not meeting brand expectations or lack a clear path to sustainable financial improvement."</strong></p>

<p>But that corporate language covers a much larger story. Here is the honest picture:</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">1. Seven Straight Quarters of Sales Declines</h3>

<p>Papa Johns reported a <strong>5.4% decline in same-store sales in North America</strong> in Q4 2025 - the fourth quarter ended December 28, 2025. That followed similarly weak results across seven of the previous eight quarters. When sales decline quarter after quarter, underperforming locations become mathematically unsustainable.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">2. Net Income Collapsed</h3>

<p>For full year 2025, Papa Johns reported:</p>
<ul>
    <li>Total revenues down slightly to <strong>$2.1 billion</strong></li>
    <li>Net income fell <strong>62%</strong> to just <strong>$32 million</strong></li>
    <li>Q4 net income dropped to <strong>$9 million</strong> from $15 million the prior year</li>
</ul>

<p>A 62% drop in net income in a single year is a serious number. It explains why drastic action was necessary.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">3. The Weak Consumer Environment</h3>

<p>CEO Todd Penegor acknowledged the results "reflected a weak consumer backdrop and elevated promotional environment." In plain terms: consumers are spending less on pizza delivery, and every chain has been discounting heavily to compete - which compresses margins. Many are looking for a <a href="/posts/papa-johns-small-pizza">small pizza price</a> or <a href="/posts/papa-johns-free-delivery">free delivery</a> just to justify an order. Inflation-weary customers are making fewer impulse orders.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">4. Domino's Is Dominating</h3>

<p>The competitive context matters here. Domino's has <strong>34% buyer penetration</strong> in the U.S. QSR pizza market according to Circana's 2026 Definitive Restaurant Rankings. Papa Johns has just <strong>11%</strong>. Domino's is actively targeting <strong>50% market share</strong> - and it is executing on that goal. Papa Johns is fighting for relevance in a category increasingly dominated by one player. You can read our full <a href="/posts/papa-johns-vs-dominos">Papa Johns vs Domino's</a> comparison to see how the two stack up.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">5. Old, Underperforming Franchise Locations</h3>

<p>The majority of closing stores share a profile: they are <strong>more than 10 years old</strong>, <strong>franchise-owned</strong>, and operating in markets where either foot traffic has declined or a nearby Papa Johns already serves the same customer base. The CFO noted some closures are happening simply where stores are close enough together "to effectively transfer sales" to a remaining location.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Which Stores Are Closing? Is There a List?</h2>

<p>This is the question everyone wants answered - and the honest answer is: <strong>Papa Johns has not released a specific list of closing locations.</strong></p>

<p>Multiple major outlets including Fast Company, CNN, and USA TODAY have requested the list directly from Papa Johns. The company has declined to provide one.</p>

<p>What we do know about the profile of closing stores:</p>

<ul>
    <li><strong>Franchise-owned</strong> (not corporate-owned) locations</li>
    <li><strong>More than 10 years old</strong> in many cases</li>
    <li>Locations with <strong>consistently low sales volumes</strong></li>
    <li>Stores in markets with <strong>nearby overlapping Papa Johns locations</strong></li>
    <li>Stores without <strong>"a clear path to sustainable financial improvement"</strong></li>
</ul>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">How to Check If Your Local Store Is Closing</h3>

<p>Since no official list exists, the most reliable way to check is:</p>

<p><strong>Step 1:</strong> Go to the <a href="/store-locator">Papa Johns Store Locator</a> and find your nearest location.</p>

<p><strong>Step 2:</strong> Call the store directly and ask. Staff typically know their store's status.</p>

<p><strong>Step 3:</strong> Check the Papa Johns app - stores that have been scheduled for closure are sometimes removed from the ordering system before the physical closure.</p>

<p><strong>Step 4:</strong> Watch for local news coverage in your city - regional outlets have been tracking specific closures as they happen.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">What Papa Johns Says About the Future</h2>

<p>Despite the scale of the closures, Papa Johns leadership is framing this as a strategic cleanup rather than a retreat - and there is some data to support that position.</p>

<p>CFO Thanawala stated the closures are expected to <strong>increase average unit volumes by at least 3%</strong> by removing underperforming stores that drag down system-wide averages. When weak locations close, customers often migrate to nearby locations, boosting the remaining stores' numbers.</p>

<p>CEO Todd Penegor said in February 2026:</p>

<blockquote>"In 2026, we are focused on continuing our transformation work to best position Papa Johns to win in a dynamic QSR category. Our strong balance sheet is supporting investment in these initiatives, which we believe will deliver high returns. We look forward with confidence in our ability to generate sustainable, profitable growth, and value creation."</blockquote>

<p>Papa Johns has also committed to <strong>opening 180 to 220 gross new restaurants internationally in 2026</strong> - focused on markets where growth is still strong. International same-store sales actually grew 5% in 2025, while North America struggled. The international business is the bright spot.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">What Papa Johns Is Doing to Turn Things Around</h2>

<p>The closures are not happening in isolation - they are part of a broader transformation plan under CEO Todd Penegor. Several parallel moves are underway:</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">New Menu Items</h3>
<p>Papa Johns launched its <strong>Oven-Toasted Sandwiches</strong> in March 2026 - three flavors built on ciabatta bread and brushed with garlic sauce. These replaced the <a href="/posts/papa-johns-papadias-discontinued-2026">discontinued Papadias</a> and Papa Bites, which were cut to simplify operations. The new <a href="/posts/papa-johns-pan-pizza">Pan Pizza</a> was also a major 2025-2026 launch.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">Oven Recalibration</h3>
<p>Penegor recalibrated ovens across all locations to improve cooking consistency - one of the most fundamental product quality moves the chain has made in years. This affects everything from the <a href="/posts/classic-pizzas">classic pizzas</a> to the new <a href="/posts/papa-johns-stuffed-crust-pizza">stuffed crust pizza</a>.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">Menu Simplification</h3>
<p>By cutting Papadias and Papa Bites, Papa Johns reduced operational complexity that was slowing down kitchen times and disrupting normal workflows. Simpler menus mean faster service and fewer mistakes. You can see the full current lineup in our <a href="/posts/papa-johns-menu-prices-guide">Papa Johns menu prices guide</a>.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">Technology Investment</h3>
<p>Papa Johns launched <strong>"Lou AI"</strong> in April 2026 - a digital pizza assistant designed to help groups navigate ordering decisions and reduce order friction. The chain is betting that better digital experiences will capture more online orders through the <a href="/posts/papa-johns-order">Papa Johns order</a> system.</p>

<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">Chicken Innovation Coming</h3>
<p>Papa Johns is testing chicken tenders with dipping sauces in the U.K. market with plans to bring the concept to North America. This would expand the menu into a category Domino's and Pizza Hut have not fully owned, building on the existing popularity of <a href="/posts/papa-johns-wings">Papa Johns wings</a>.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Is Papa Johns Going Out of Business?</h2>

<p>No. This question has come up repeatedly since the closure announcement - and the answer is clearly no.</p>

<p>Closing 300 locations out of 6,000+ worldwide is a portfolio optimization, not a collapse. Papa Johns still operates in approximately 50 countries and territories and remains the world's third-largest pizza delivery company. Its international business is growing. Its balance sheet is described as strong, often highlighted in our <a href="/posts/papa-johns-nutrition-guide">nutrition and brand guide</a>.</p>

<p>Companies in genuine financial distress do not invest in new menu categories, new technology platforms, and international expansion simultaneously. What Papa Johns is doing is painful but strategic: cutting the weakest 9% of its North American locations to make the remaining 91% healthier and more profitable.</p>

<p>For comparison: Pizza Hut announced the closure of <strong>250 U.S. locations</strong> in early 2026 for nearly identical reasons. Wendy's announced significant closures. Even larger chains are rationalizing portfolios in a difficult consumer environment.</p>

<p>Papa Johns is not going out of business. It is getting smaller to get stronger.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">My Analysis - What This Really Means</h2>

<p>Having tracked the Papa Johns story closely, here is an honest read of the situation:</p>

<p>The closures are necessary and probably overdue. Papa Johns spent years expanding aggressively, and some of those locations never found their footing. Carrying 300 underperforming stores creates drag on franchisee morale, average unit economics, and brand perception. Cutting them is the right call.</p>

<p>The more interesting question is whether the menu innovation will work. The Oven-Toasted Sandwiches are a genuinely good product - read my <a href="/posts/new-papadias-flavors-2026">full review here</a> - and the Pan Pizza has been well received. But launching new items while simultaneously closing 200 stores creates noise that is hard to manage from a brand messaging standpoint.</p>

<p>The real risk for Papa Johns is not the closures themselves - it is whether the remaining stores can hold their customer base as Domino's continues its aggressive push. Domino's operational advantage in delivery logistics is real, and 11% buyer penetration versus 34% is a gap that new sandwiches alone will not close. Check out our <a href="/posts/papa-johns-desserts">Papa Johns desserts</a> guide to see if their sweets can help bridge the gap.</p>

<p><strong>Short-term forecast:</strong> 2026 will be a rough year by Papa Johns' own admission - they have guided for North American same-store sales to drop 2-4% this year. Expect more promotional activity, more deal-heavy ordering, and continued pressure.</p>

<p><strong>Medium-term forecast:</strong> If the menu simplification and oven recalibration genuinely improve quality consistency, and if the new items attract new customer types, Papa Johns could exit 2026-2027 as a leaner, more focused chain. The international growth story is real and underappreciated.</p>

<p><strong>For customers:</strong> If your local store is not on the closure list, your experience should improve as operational focus concentrates on fewer, healthier locations.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Papa Johns Closures vs Competitors - Industry Context</h2>

<p>Papa Johns is not alone. The entire fast casual pizza sector is under pressure:</p>

<div class="overflow-x-auto my-8">
<table class="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
<thead>
<tr class="bg-[#1A3D17] text-white uppercase text-xs font-black">
<th class="p-4 border border-gray-100">Chain</th>
<th class="p-4 border border-gray-100">2026 Closures</th>
<th class="p-4 border border-gray-100">Reason</th>
</tr>
</thead>
<tbody>
<tr><td class="p-4 border border-gray-100 font-bold">Papa Johns</td><td class="p-4 border border-gray-100">~200 in 2026</td><td class="p-4 border border-gray-100">Sales declines, franchise underperformance</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Pizza Hut</td><td class="p-4 border border-gray-100">~250 in first half 2026</td><td class="p-4 border border-gray-100">Competition from Domino's, declining sales</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Wendy's</td><td class="p-4 border border-gray-100">Multiple locations</td><td class="p-4 border border-gray-100">Consumer spending decline</td></tr>
</tbody>
</table>
</div>

<p>The common thread is clear: inflation-weary consumers are making fewer fast food orders, every chain is over-discounting to compete, and margins have been crushed. The chains that emerge strongest will be those that rationalized their footprints early rather than waiting for the situation to force their hand.</p>

<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">How to Find Your Nearest Open Papa Johns</h2>

<p>With closures ongoing through 2026 and 2027, it makes sense to verify your local store's status before placing an order:</p>

<ul>
    <li><strong>Online:</strong> <a href="/store-locator">Papa Johns Store Locator</a></li>
    <li><strong>App:</strong> The Papa Johns app shows real-time store availability for delivery and carryout</li>
    <li><strong>Phone:</strong> Call your local store directly - the number is listed in the store locator</li>
</ul>

<p>If your usual location has closed, the app and website will automatically show the next nearest available store.</p>

<p>👉 <strong><a href="/store-locator">Find Your Nearest Papa Johns -></a></strong><br/>
👉 <strong><a href="/coupons">Check Today's Papa Johns Coupons & Deals -></a></strong><br/>
👉 <strong><a href="/menus-prices">View Full Papa Johns Menu with Prices -></a></strong><br/>
👉 <strong><a href="/posts/new-papadias-flavors-2026">Read: Papa Johns Oven-Toasted Sandwiches Review -></a></strong></p>

<p><em>Content on papajohns-menus.us is independently maintained and updated. We are not affiliated with Papa Johns International, Inc. Store closure information is based on publicly available company statements and news reports. Individual store closure dates have not been confirmed by Papa Johns.</em></p>
`;

data[articleIndex].content = htmlContent;
data[articleIndex].date = "2026-05-13";

fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));

console.log('Papa Johns Closures article updated successfully!');
