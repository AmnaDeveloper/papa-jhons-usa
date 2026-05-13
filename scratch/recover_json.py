
import json
import os

file_path = 'src/app/data/posts.json'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target: Find the last clean post before the mess
# We know the Pepsi post starts with a specific slug
target_slug = '"slug": "papa-johns-pepsi-cola-guide"'
idx = content.find(target_slug)

if idx != -1:
    # Go back to the opening brace of this object
    start_obj = content.rfind('{', 0, idx)
    if start_obj != -1:
        # Keep everything before this object
        clean_base = content[:start_obj].strip()
        if clean_base.endswith(','):
            clean_base = clean_base[:-1].strip()
        
        # Ensure it ends with a closing brace of the previous object and then maybe some whitespace
        # We need to make sure we don't break the array
        if not clean_base.endswith(']'):
             # If it doesn't end with ], it means we are still inside the array
             pass
        
        # Actually, let's just parse the clean part to be sure
        try:
            # Try to close the array and parse
            test_json = clean_base + ']'
            data = json.loads(test_json)
            
            # If successful, we have a clean base list!
            # Now add the two missing posts properly
            
            pepsi_post = {
                "id": 15,
                "title": "Papa Johns Pepsi Price 2026: Every Size, Nutrition & Deals",
                "slug": "papa-johns-pepsi-cola-guide",
                "date": "2026-05-13",
                "author": "Deals Team",
                "category": "Drinks",
                "excerpt": "Full guide to Papa Johns Pepsi in 2026. Exact prices for 20oz and 2-Liter bottles, nutrition facts, caffeine content, and how to save on every order.",
                "image": "/blog/papa-johns-pepsi.webp",
                "imageAlt": "Papa Johns Pepsi Bottle",
                "faqs": [
                    {
                        "question": "How much is Pepsi at Papa Johns?",
                        "answer": "Pepsi at Papa Johns costs **$2.99 for a 20 oz bottle** and **$3.49 to $3.99 for a 2-Liter bottle** in 2026. Prices may vary by up to $0.50 depending on your region and specific franchise location."
                    },
                    {
                        "question": "Does Papa Johns have Pepsi or Coke?",
                        "answer": "Papa Johns exclusively serves **Pepsi products**. Papa Johns is an official exclusive PepsiCo partner and does not carry Coca-Cola products."
                    }
                ],
                "content": "<p>Pepsi is the <strong>most ordered drink at Papa Johns</strong> across all US locations. In 2024, Papa Johns became an official exclusive PepsiCo partner, which means every location nationwide now serves only Pepsi products.</p>",
                "metaTitle": "Papa Johns Pepsi Price 2026: Every Size & Nutrition Guide",
                "metaDesc": "How much is Pepsi at Papa Johns in 2026? View prices for 20oz and 2-Liter bottles, full nutrition facts, and money-saving pizza pairings."
            }
            
            closures_post = {
                "id": 23,
                "title": "Papa Johns Closing Stores 2026: How Many, Why, and What It Means for You",
                "slug": "papa-johns-closing-stores-2026",
                "date": "2026-05-13",
                "author": "Deals Team",
                "category": "News",
                "excerpt": "Papa Johns officially confirmed it is closing up to 300 North American stores by the end of 2027. Find out if your local store is affected and why this is happening.",
                "image": "/blog/papa-johns-closures.webp",
                "imageAlt": "Papa Johns closing stores in 2026",
                "content": "<p>If you've been hearing rumors about Papa Johns shutting down locations near you — they're true. In February 2026, Papa Johns officially confirmed it is closing <strong>up to 300 North American stores</strong> by the end of 2027, with roughly <strong>200 of those closures happening by the end of 2026</strong>.</p><p>This is the biggest contraction in Papa Johns' history. And if you're a regular customer, the question on your mind is simple: is my local store closing?</p><p>This guide covers everything confirmed — exactly how many stores are closing, why it's happening, which types of locations are most at risk, what Papa Johns says about the future, and how to check if your nearest store is affected.</p><h2 class=\"text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6\">The Numbers — How Many Papa Johns Are Closing?</h2><p>Here is what Papa Johns has officially confirmed, based on the company's February 26, 2026 earnings call and subsequent filings:</p><div class=\"overflow-x-auto my-8\"><table class=\"w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm\"><thead><tr class=\"bg-[#1A3D17] text-white uppercase text-xs font-black\"><th class=\"p-4 border border-gray-100\">Detail</th><th class=\"p-4 border border-gray-100\">Number</th></tr></thead><tbody><tr><td class=\"p-4 border border-gray-100 font-bold\">Total planned closures (North America)</td><td class=\"p-4 border border-gray-100 font-black text-[#cc0000]\">Up to 300 stores</td></tr><tr class=\"bg-gray-50\"><td class=\"p-4 border border-gray-100 font-bold\">Closures expected in 2026</td><td class=\"p-4 border border-gray-100 font-black text-[#cc0000]\">~200 stores</td></tr><tr><td class=\"p-4 border border-gray-100 font-bold\">Closures expected in 2027</td><td class=\"p-4 border border-gray-100 font-bold\">Remaining ~100 stores</td></tr><tr class=\"bg-gray-50\"><td class=\"p-4 border border-gray-100 font-bold\">Total Papa Johns locations (end of 2025)</td><td class=\"p-4 border border-gray-100 font-bold\">~3,500 stores</td></tr><tr><td class=\"p-4 border border-gray-100 font-bold\">Percentage of total locations affected</td><td class=\"p-4 border border-gray-100 font-bold\">~9%</td></tr><tr class=\"bg-gray-50\"><td class=\"p-4 border border-gray-100 font-bold\">Corporate layoffs announced alongside</td><td class=\"p-4 border border-gray-100 font-bold\">7% of ~700-person staff</td></tr></tbody></table></div><p>To put that in perspective: closing 9% of your locations is significant but not catastrophic. Papa Johns will still have approximately 3,200 North American locations after the closures are complete — still one of the largest pizza delivery chains in the country.</p><h2 class=\"text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6\">Why Is Papa Johns Closing Stores?</h2><p>Papa Johns CFO Ravi Thanawala was direct on the earnings call. The stores being closed are those that are <strong>\"not meeting brand expectations or lack a clear path to sustainable financial improvement.\"</strong></p><p>But that corporate language covers a much larger story. Here is the honest picture:</p><h3 class=\"text-xl font-black text-[#1A3D17] mt-8 mb-4\">1. Seven Straight Quarters of Sales Declines</h3><p>Papa Johns reported a <strong>5.4% decline in same-store sales in North America</strong> in Q4 2025. When sales decline quarter after quarter, underperforming locations become mathematically unsustainable.</p><h3 class=\"text-xl font-black text-[#1A3D17] mt-8 mb-4\">2. Net Income Collapsed</h3><p>For full year 2025, Papa Johns reported net income fell <strong>62%</strong> to just <strong>$32 million</strong>. A 62% drop in net income in a single year explains why drastic action was necessary.</p><h3 class=\"text-xl font-black text-[#1A3D17] mt-8 mb-4\">3. The Weak Consumer Environment</h3><p>Consumers are spending less on pizza delivery, and every chain has been discounting heavily to compete — which compresses margins.</p><h3 class=\"text-xl font-black text-[#1A3D17] mt-8 mb-4\">4. Domino's Is Dominating</h3><p>Domino's has <strong>34% buyer penetration</strong> in the U.S. market, while Papa Johns has just <strong>11%</strong>. Domino's is actively targeting 50% market share.</p><h2 class=\"text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6\">Which Stores Are Closing? Is There a List?</h2><p>Papa Johns has <strong>not released a specific list</strong> of closing locations. Major news outlets have requested it, but the company has declined.</p><p>What we do know about the profile of closing stores:</p><ul class=\"list-disc pl-6 space-y-2 mb-6\"><li>Franchise-owned locations</li><li>More than 10 years old</li><li>Consistently low sales volumes</li><li>Overlapping nearby locations</li></ul><div class=\"bg-[#1A3D17] text-white p-8 rounded-[2rem] my-10\"><h3 class=\"text-xl font-black mb-4 uppercase\">How to Check If Your Local Store Is Closing</h3><p class=\"mb-4\">Since no official list exists, the most reliable way to check is:</p><ol class=\"list-decimal pl-6 space-y-3\"><li>Go to the <a href=\"/store-locator\" class=\"text-[#CCEE18] underline font-bold\">Papa Johns Store Locator</a> and find your nearest location.</li><li>Call the store directly and ask.</li><li>Check the Papa Johns app — stores scheduled for closure are often removed from the system.</li></ol></div><h2 class=\"text-2xl font-black text-[#1A3D17] uppercase mt-10 mb-6\">Is Papa Johns Going Out of Business?</h2><p>No. Closing 300 locations out of 6,000+ worldwide is a portfolio optimization, not a collapse. Papa Johns still operates in approximately 50 countries and its international business is growing. It is getting smaller to get stronger.</p>",
                "metaTitle": "Papa Johns Closing Stores 2026: How Many, Why & Is Your Location Safe?",
                "metaDesc": "Papa Johns is closing 200+ stores in 2026. We cover exactly how many locations are closing, why it's happening, which stores are at risk, and what it means for customers."
            }
            
            data.append(pepsi_post)
            data.append(closures_post)
            
            with open(file_path, 'w', encoding='utf-8') as f_out:
                json.dump(data, f_out, indent=2)
            print("Successfully recovered and updated posts.json")
            
        except Exception as e:
            print(f"Failed to parse clean base: {e}")
            # Fallback: if we can't parse, just try to force close it
            # But we really should be able to parse if we found the pepsi post
    else:
        print("Could not find start of Pepsi object")
else:
    print("Could not find Pepsi slug")
