import re

with open('src/app/(site)/locations/nashville-tn/page.tsx', 'r') as f:
    content = f.read()

# Replace em-dashes and en-dashes
content = content.replace(' — ', ' ')
content = content.replace('—', ' ')
content = content.replace(' – ', ' to ')
content = content.replace('–', ' to ')
content = content.replace('_', ' ')

# Add internal linking
replacements = [
    ("Cheese Pizza", "<Link href=\"/menus-prices/cheese-pizza\">Cheese Pizza</Link>"),
    ("Pepperoni Pizza", "<Link href=\"/menus-prices/pepperoni-pizza\">Pepperoni Pizza</Link>"),
    ("The Works", "<Link href=\"/menus-prices/the-works-pizza\">The Works</Link>"),
    ("Garlic Knots", "<Link href=\"/posts/papa-johns-garlic-knots\">Garlic Knots</Link>"),
    ("Wings", "<Link href=\"/posts/papa-johns-wings\">Wings</Link>"),
    ("Pan Pizza", "<Link href=\"/posts/papa-johns-pan-pizza\">Pan Pizza</Link>")
]

# We want to replace only inside the <td> and <p> elements without messing up existing links or attributes
# So we'll target specific strings that we know are safe
content = content.replace("<td>Cheese Pizza</td>", "<td><Link href=\"/menus-prices/cheese-pizza\">Cheese Pizza</Link></td>")
content = content.replace("<td>Pepperoni Pizza</td>", "<td><Link href=\"/menus-prices/pepperoni-pizza\">Pepperoni Pizza</Link></td>")
content = content.replace("<td>The Works</td>", "<td><Link href=\"/menus-prices/the-works-pizza\">The Works</Link></td>")
content = content.replace("<td>Garlic Knots (8 pieces)</td>", "<td><Link href=\"/posts/papa-johns-garlic-knots\">Garlic Knots (8 pieces)</Link></td>")
content = content.replace("<td>Wings (8 pieces)</td>", "<td><Link href=\"/posts/papa-johns-wings\">Wings (8 pieces)</Link></td>")
content = content.replace("<strong>Pan Pizza (NEW 2026)</strong>", "<strong><Link href=\"/posts/papa-johns-pan-pizza\">Pan Pizza (NEW 2026)</Link></strong>")

# A couple of text replacements (only the first instance or specific instances to avoid breaking JSX)
content = content.replace("The Works Pizza,", "<Link href=\"/menus-prices/the-works-pizza\">The Works Pizza</Link>,")
content = content.replace("and Garlic Knots are consistently", "and <Link href=\"/posts/papa-johns-garlic-knots\">Garlic Knots</Link> are consistently")

with open('src/app/(site)/locations/nashville-tn/page.tsx', 'w') as f:
    f.write(content)

