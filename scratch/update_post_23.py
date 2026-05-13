
import json

file_path = 'src/app/data/posts.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

full_content = """<p>If you've been hearing rumors about Papa Johns shutting down locations near you — they're true. In February 2026, Papa Johns officially confirmed it is closing <strong>up to 300 North American stores</strong> by the end of 2027, with roughly <strong>200 of those closures happening by the end of 2026</strong>.</p>
<p>This is the biggest contraction in Papa Johns' history. And if you're a regular customer, the question on your mind is simple: is my local store closing?</p>
<p>This guide covers everything confirmed — exactly how many stores are closing, why it's happening, which types of locations are most at risk, what Papa Johns says about the future, and how to check if your nearest store is affected.</p>
<hr class="my-10 border-gray-100"/>
<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">The Numbers — How Many Papa Johns Are Closing?</h2>
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
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Closures expected in 2026</td><td class="p-4 border border-gray-100 font-black text-[#cc0000]">~200 stores</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Closures expected in 2027</td><td class="p-4 border border-gray-100 font-bold">Remaining ~100 stores</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Total Papa Johns locations (end of 2025)</td><td class="p-4 border border-gray-100 font-bold">~3,500 stores</td></tr>
<tr><td class="p-4 border border-gray-100 font-bold">Percentage of total locations affected</td><td class="p-4 border border-gray-100 font-bold">~9%</td></tr>
<tr class="bg-gray-50"><td class="p-4 border border-gray-100 font-bold">Corporate layoffs announced alongside</td><td class="p-4 border border-gray-100 font-bold">7% of ~700-person staff</td></tr>
</tbody>
</table>
</div>
<p>To put that in perspective: closing 9% of your locations is significant but not catastrophic. Papa Johns will still have approximately 3,200 North American locations after the closures are complete.</p>
<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Why Is Papa Johns Closing Stores?</h2>
<p>Papa Johns CFO Ravi Thanawala was direct on the earnings call. The stores being closed are those that are <strong>"not meeting brand expectations or lack a clear path to sustainable financial improvement."</strong></p>
<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">1. Seven Straight Quarters of Sales Declines</h3>
<p>Papa Johns reported a <strong>5.4% decline in same-store sales in North America</strong> in Q4 2025. When sales decline quarter after quarter, underperforming locations become mathematically unsustainable.</p>
<h3 class="text-xl font-black text-[#1A3D17] mt-8 mb-4">2. Net Income Collapsed</h3>
<p>For full year 2025, Papa Johns reported net income fell <strong>62%</strong> to just <strong>$32 million</strong>. A 62% drop in net income in a single year explains why drastic action was necessary.</p>
<h2 class="text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6">Is Papa Johns Going Out of Business?</h2>
<p>No. Closing 300 locations out of 6,000+ worldwide is a portfolio optimization, not a collapse. Papa Johns still operates in approximately 50 countries and its international business is growing. It is getting smaller to get stronger.</p>
"""

faqs = [
    {"question": "How many Papa Johns stores are closing in 2026?", "answer": "Papa Johns confirmed it plans to close approximately 200 North American stores in 2026, with total up to 300 by end of 2027."},
    {"question": "Why is Papa Johns closing stores in 2026?", "answer": "Closures follow seven of eight quarters of same-store sales declines and a 62% drop in net income for 2025."},
    {"question": "Is Papa Johns going out of business?", "answer": "No. Closing 300 locations is a portfolio optimization, not a collapse. The international business is growing."},
    {"question": "Which Papa Johns locations are closing?", "answer": "No specific list is released. Closures focus on franchise-owned stores that are 10+ years old or have low sales."},
    {"question": "When will Papa Johns stores close?", "answer": "200 stores by end of 2026, remaining by end of 2027."},
    {"question": "Is Pizza Hut also closing stores in 2026?", "answer": "Yes. Pizza Hut announced plans to close approximately 250 underperforming U.S. locations in 2026."}
]

# Update post ID 23
for post in data:
    if post['id'] == 23:
        post['content'] = full_content
        post['faqs'] = faqs

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)
print('Successfully updated post 23')
