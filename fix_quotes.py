import re

file_path = 'src/app/data/locationRichContent.ts'
with open(file_path, 'r') as f:
    content = f.read()

# I want to replace double quotes inside my injected <a> tags with single quotes
# Actually, let's just find and replace the exact substrings I injected
replacements = [
    '<a href="/menus-prices/the-works-pizza" class="text-[#cc0000] hover:underline font-bold">',
    '<a href="/menus-prices/pepperoni-pizza" class="text-[#cc0000] hover:underline font-bold">',
    '<a href="/posts/papa-johns-garlic-knots" class="text-[#cc0000] hover:underline font-bold">',
    '<a href="/menus-prices/cheese-pizza" class="text-[#cc0000] hover:underline font-bold">',
    '<a href="https://www.vanderbilt.edu/" target="_blank" rel="noopener noreferrer" class="text-[#cc0000] hover:underline font-bold">',
    '<a href="/coupons" class="text-[#cc0000] underline">Papa Johns coupons page</a>'
]

for rep in replacements:
    # replace double quotes inside `rep` with single quotes
    fixed_rep = rep.replace('"', "'")
    content = content.replace(rep, fixed_rep)
    
# also fix if the script was run multiple times or slightly differently
content = content.replace('<a href="/coupons" class="text-[#cc0000] underline">', "<a href='/coupons' class='text-[#cc0000] underline'>")

with open(file_path, 'w') as f:
    f.write(content)
print("Quotes fixed.")
