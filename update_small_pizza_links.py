import json

# 1. Update faq-schemas.json
with open("src/app/data/faq-schemas.json", "r", encoding="utf-8") as f:
    faq_schemas = json.load(f)

faq_schemas["papa-johns-small-pizza"] = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a small Papa Johns pizza cost in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A small Papa Johns pizza starts at $8.99 for a cheese pizza (0 toppings) and goes up to $12.99 for specialty pizzas like The Works or BBQ Chicken Bacon. A 1-topping small (e.g., pepperoni) costs approximately $9.99. Prices may be slightly higher in major urban markets. Always check current local prices via the Papa Johns app or papajohns-menus.us."
      }
    },
    {
      "@type": "Question",
      "name": "How big is a small Papa Johns pizza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A small Papa Johns pizza is 10 inches in diameter and is cut into 6 slices. It serves 1–2 people and has approximately 78.5 square inches of pizza surface. It is larger than a personal pan pizza but significantly smaller than the medium (12 inch) or large (14 inch) options."
      }
    },
    {
      "@type": "Question",
      "name": "How many slices does a small Papa Johns pizza have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A small Papa Johns pizza comes with 6 slices. This is standard for all small size orders regardless of crust type or toppings. By comparison, medium and large pizzas both come with 8 slices, and XL comes with 10 slices."
      }
    },
    {
      "@type": "Question",
      "name": "Is the small pizza available with stuffed crust at Papa Johns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Epic Stuffed Crust and Garlic Epic Stuffed Crust are only available on large (14 inch) pizzas at Papa Johns. They are not offered on small or medium sizes. If you want stuffed crust, you need to order a large pizza."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest pizza at Papa Johns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cheapest pizza at Papa Johns is the small cheese pizza at approximately $8.99. This is a 10-inch, 6-slice cheese pizza with original crust and no toppings. Using a promo code from the Papa Johns coupons page can reduce this price further."
      }
    },
    {
      "@type": "Question",
      "name": "Is the small or medium better value at Papa Johns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The medium is better value on a price-per-slice basis. A medium cheese pizza at approximately $11.09 gives 8 slices at $1.39 per slice, while a small at $8.99 gives 6 slices at $1.50 per slice. The large is the best value of all three sizes. The small only makes financial sense if you genuinely cannot eat a medium, need the gluten-free crust, or want two different pizza flavors by ordering two smalls."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns have a gluten-free small pizza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Papa Johns offers a Gluten-Free Crust exclusively in the small (10 inch) size. It is made with ancient grains and costs approximately $1.00 to $2.00 more than the standard original crust small. However, it is prepared in the same kitchen as wheat-based products, so it is not suitable for those with celiac disease — only for mild gluten sensitivity."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories are in a Papa Johns small pizza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single slice of a small Papa Johns Cheese Pizza (original crust) contains approximately 180 calories. The full small cheese pizza (6 slices) is approximately 1,080 calories total. A small Pepperoni Pizza slice is around 210 calories. Thin crust reduces this by roughly 20 to 30 calories per slice, and gluten-free crust is the lightest at around 150 calories per slice."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order a small pizza for delivery at Papa Johns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The small pizza is available for both delivery and carryout at all Papa Johns locations. Ordering via the Papa Johns app or website is recommended for the best pricing, promo code access, and to earn Papa Rewards points. Delivery fees and minimum order requirements may apply depending on your location."
      }
    },
    {
      "@type": "Question",
      "name": "What toppings are available on Papa Johns small pizzas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All standard Papa Johns toppings are available on the small pizza, including pepperoni, sausage, chicken, beef, Canadian bacon, mushrooms, green peppers, onions, black olives, banana peppers, and jalapeños. Specialty pizza builds like The Works and BBQ Chicken Bacon are also available in small. The only limitation is crust type — stuffed crust and New York Style are large-only options."
      }
    },
    {
      "@type": "Question",
      "name": "How does Papa Johns small pizza price compare to Domino's?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns and Domino's small pizzas are similarly priced — both around $8.99 to $9.99 for a cheese or 1-topping small. Papa Johns has an advantage in dough quality (fresh, never-frozen) and includes a free Special Garlic Sauce with every order that Domino's charges extra for."
      }
    }
  ]
}

with open("src/app/data/faq-schemas.json", "w", encoding="utf-8") as f:
    json.dump(faq_schemas, f, ensure_ascii=False, indent=2)

# 2. Update posts.json to add internal links
with open("src/app/data/posts.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

for post in posts:
    if post.get("slug") == "papa-johns-small-pizza":
        content = post["content"]
        # Add internal links
        content = content.replace("Domino's", "<a href=\"/posts/papa-johns-vs-dominos\" style=\"color: #cc0000; font-weight: bold; text-decoration: underline;\">Domino's</a>")
        content = content.replace("cheese pizza", "<a href=\"/menus-prices/cheese-pizza\" style=\"color: #cc0000; font-weight: bold; text-decoration: underline;\">cheese pizza</a>", 1)
        content = content.replace("Pepperoni Pizza", "<a href=\"/menus-prices/pepperoni-pizza\" style=\"color: #cc0000; font-weight: bold; text-decoration: underline;\">Pepperoni Pizza</a>", 1)
        content = content.replace("Sausage Pizza", "<a href=\"/menus-prices/sausage-pizza\" style=\"color: #cc0000; font-weight: bold; text-decoration: underline;\">Sausage Pizza</a>", 1)
        content = content.replace("The Works", "<a href=\"/menus-prices/the-works-pizza\" style=\"color: #cc0000; font-weight: bold; text-decoration: underline;\">The Works</a>", 1)
        content = content.replace("Papadias", "<a href=\"/posts/new-papadias-flavors-2026\" style=\"color: #cc0000; font-weight: bold; text-decoration: underline;\">Papadias</a>", 1)
        
        post["content"] = content
        break

with open("src/app/data/posts.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=4)

print("SUCCESS")
