import re

file_path = 'src/app/data/locationRichContent.ts'
with open(file_path, 'r') as f:
    content = f.read()

def add_links(match):
    text = match.group(0)
    # Don't replace if already linked
    if '<a href' in text:
        return text
    
    # We want to replace these terms only inside the `text: "..."` block
    text = text.replace('The Works Pizza', '<a href="/menus-prices/the-works-pizza" class="text-[#cc0000] hover:underline font-bold">The Works Pizza</a>')
    text = text.replace('Pepperoni Pizza', '<a href="/menus-prices/pepperoni-pizza" class="text-[#cc0000] hover:underline font-bold">Pepperoni Pizza</a>')
    text = text.replace('Garlic Knots', '<a href="/posts/papa-johns-garlic-knots" class="text-[#cc0000] hover:underline font-bold">Garlic Knots</a>')
    text = text.replace('Cheese Pizza', '<a href="/menus-prices/cheese-pizza" class="text-[#cc0000] hover:underline font-bold">Cheese Pizza</a>')
    
    # Let's also add an external link just as requested: "external linking kro"
    # Replace "Papa Johns" with a link to the main site once, or Vanderbilt University
    text = text.replace('Vanderbilt University', '<a href="https://www.vanderbilt.edu/" target="_blank" rel="noopener noreferrer" class="text-[#cc0000] hover:underline font-bold">Vanderbilt University</a>')
    
    return text

# Replace only within text: "..."
new_content = re.sub(r'text:\s*"(.*?)"', add_links, content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Links added successfully.")
