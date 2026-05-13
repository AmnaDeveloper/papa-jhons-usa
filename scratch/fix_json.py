
import json
import os

file_path = 'src/app/data/posts.json'
with open(file_path, 'r') as f:
    content = f.read()

# Find the start of the Pepsi post (the one before the mess)
pepsi_slug = '"slug": "papa-johns-pepsi-cola-guide"'
pepsi_idx = content.find(pepsi_slug)

if pepsi_idx != -1:
    obj_start = content.rfind('{', 0, pepsi_idx)
    clean_json_str = content[:obj_start].rstrip().rstrip(',')
    
    # Check if the array is already closed or not
    clean_json_str = clean_json_str.strip()
    if clean_json_str.endswith('['):
        # Array started but no items yet? Unlikely, but handle it.
        clean_json_str += ']'
    else:
        # Add the closing bracket for the array
        clean_json_str += ']'
    
    try:
        data = json.loads(clean_json_str)
        
        # Now add the posts back CLEANLY
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
            "content": "<p>Pepsi is the <strong>most ordered drink at Papa Johns</strong> across all US locations — and for good reason. In 2024, Papa Johns became an official exclusive PepsiCo partner, which means every location nationwide now serves only Pepsi products. No Coca-Cola, no exceptions. This complete 2026 guide covers everything about <strong>Papa Johns Pepsi</strong>: exact prices for every size, full nutrition breakdown, allergen information, how it compares to Diet Pepsi and Pepsi Zero Sugar, the science behind pizza and cola pairings, and how to save money on every order.</p>",
            "metaTitle": "Papa Johns Pepsi Price 2026: Every Size & Nutrition Guide",
            "metaDesc": "How much is Pepsi at Papa Johns in 2026? View prices for 20oz and 2-Liter bottles, full nutrition facts, caffeine details, and money-saving pizza pairings."
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
            "content": "<p>If you've been hearing rumors about Papa Johns shutting down locations near you — they're true. In February 2026, Papa Johns officially confirmed it is closing <strong>up to 300 North American stores</strong> by the end of 2027, with roughly <strong>200 of those closures happening by the end of 2026</strong>.</p>",
            "metaTitle": "Papa Johns Closing Stores 2026: How Many, Why & Is Your Location Safe?",
            "metaDesc": "Papa Johns is closing 200+ stores in 2026. We cover exactly how many locations are closing, why it's happening, which stores are at risk, and what it means for customers."
        }
        
        data.append(pepsi_post)
        data.append(closures_post)
        
        with open(file_path, 'w') as f3:
            json.dump(data, f3, indent=2)
        print('Successfully fixed JSON')
    except Exception as e:
        print(f'JSON parsing error: {e}')
else:
    print('Could not find Pepsi post anchor')
