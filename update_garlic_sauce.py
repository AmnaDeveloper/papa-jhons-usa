import json, re

# ── 1. Add the FAQ schema to faq-schemas.json ──────────────────────────────
with open('src/app/data/faq-schemas.json') as f:
    schemas = json.load(f)

schemas['complete-garlic-sauce-guide'] = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is garlic sauce made of?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Garlic sauce can be made from several base ingredients depending on the type. The Lebanese version (toum) uses just garlic, neutral oil, lemon juice, and salt. Roasted garlic sauce often includes cream or butter. Aioli traditionally uses garlic and olive oil, while the popular garlic mayo version adds egg yolk or store-bought mayonnaise."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between aioli and garlic sauce?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional aioli is made purely from garlic and olive oil, originating from Southern France and Spain. Garlic sauce is a broader term that covers many styles -- including toum, garlic butter sauce, roasted garlic cream sauce, and garlic mayo. Most modern restaurants sell garlic-flavored mayonnaise as aioli, which is technically a simplified version of the original."
            }
        },
        {
            "@type": "Question",
            "name": "How long does homemade garlic sauce last in the fridge?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on the type. Lebanese toum lasts up to 4 weeks in an airtight container in the refrigerator due to its high acid content. Roasted garlic cream sauce keeps for about 5 to 7 days. Garlic butter sauce should be used within 3 to 4 days. Garlic mayo or aioli made with raw egg yolk should be consumed within 4 to 5 days."
            }
        },
        {
            "@type": "Question",
            "name": "Why does my garlic sauce taste bitter?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bitter garlic sauce is usually caused by one of three things: burned garlic (even slightly overcooked garlic turns bitter), using old garlic with a green sprout inside the clove, or over-processing garlic in a blender which can release harsh compounds. Always cook garlic on medium-low heat, remove the green sprout from older cloves, and avoid over-blending for smoother sauces."
            }
        },
        {
            "@type": "Question",
            "name": "Why did my toum (garlic sauce) break and turn oily?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Toum breaks when the oil is added too quickly and the emulsion fails to form properly. To fix broken toum, start fresh with one clove of garlic processed with a pinch of salt, then very slowly pour the broken sauce into it as if it were oil. The new garlic acts as a fresh emulsifier and can bring the sauce back together."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use olive oil to make toum?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, olive oil is not recommended for making toum. Olive oil turns bitter when over-processed in a food processor or blender, which ruins the flavor of the sauce. Use a neutral oil like sunflower, vegetable, or canola oil instead. These oils emulsify smoothly and let the garlic flavor shine without any bitterness."
            }
        },
        {
            "@type": "Question",
            "name": "How do I make garlic sauce less strong and pungent?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best way to reduce the sharpness of garlic sauce is to let it rest in the refrigerator for 24 to 48 hours. The harsh sulfur compounds in raw garlic naturally break down over time, making the sauce significantly milder and more balanced. Alternatively, roasting the garlic before making the sauce eliminates almost all of the sharpness and creates a sweeter, nuttier flavor profile."
            }
        },
        {
            "@type": "Question",
            "name": "What can I use garlic sauce for besides dipping?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Garlic sauce is incredibly versatile. You can use it as a pizza base instead of tomato sauce, as a marinade for chicken or lamb, stirred into mashed potatoes, spread on sandwiches instead of mayo, spooned over poached eggs, swirled into soups for extra richness, or tossed with pasta as a quick sauce. Lebanese toum especially works well as an overnight chicken marinade before grilling."
            }
        },
        {
            "@type": "Question",
            "name": "What is the white garlic sauce at Lebanese restaurants called?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The thick, white, fluffy garlic sauce served at Lebanese restaurants is called toum. It is made by emulsifying raw garlic with neutral oil, fresh lemon juice, and salt -- no dairy or eggs involved. The result is a light, airy sauce with a sharp garlic flavor that mellows after a day or two in the refrigerator."
            }
        },
        {
            "@type": "Question",
            "name": "Is garlic sauce healthy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Garlic itself is well known for its health benefits, including antioxidant properties and potential cardiovascular support. However, garlic sauce is often high in fat due to its oil or butter base, so portion size matters. Toum made with neutral oil is dairy-free and egg-free, making it suitable for vegans. Roasted garlic sauces made with cream are higher in saturated fat. Overall, garlic sauce can be part of a balanced diet when consumed in moderate amounts."
            }
        }
    ]
}

with open('src/app/data/faq-schemas.json', 'w') as f:
    json.dump(schemas, f, indent=2, ensure_ascii=False)

print("FAQ schema added to faq-schemas.json")

# ── 2. Fix content in posts.json ──────────────────────────────────────────
with open('src/app/data/posts.json') as f:
    posts = json.load(f)

post = next(p for p in posts if p['slug'] == 'complete-garlic-sauce-guide')
content = post['content']

# Remove em-dashes — replace with a simple hyphen or nothing
content = content.replace('\u2014', '-')   # — (em dash)
content = content.replace('\u2013', '-')   # – (en dash)
content = content.replace('&mdash;', '-')
content = content.replace('&ndash;', '-')

# Remove underscores used as text separators (standalone _ patterns)
content = re.sub(r'\s_\s', ' ', content)
content = re.sub(r'^_+$', '', content, flags=re.MULTILINE)

# ── 3. Add internal links ──────────────────────────────────────────────────
# Link "garlic knots" -> /posts/papa-johns-garlic-knots  (first occurrence only)
content = content.replace(
    'garlic knots',
    '<a href="/posts/papa-johns-garlic-knots">garlic knots</a>',
    1
)

# Link "chicken" (in marinade context) -> /posts/papa-johns-wings (first occurrence)
content = content.replace(
    'coat the chicken completely',
    'coat the <a href="/posts/papa-johns-wings">chicken</a> completely',
    1
)

# Link "flatbread" -> /posts/new-papadias-flavors-2026 (first occurrence)
content = content.replace(
    'Toum spread on flatbread',
    'Toum spread on <a href="/posts/new-papadias-flavors-2026">flatbread</a>',
    1
)

# Link "mashed potatoes" context -> /posts/sides
content = content.replace(
    'Roasted garlic sauce stirred into mashed potatoes',
    'Roasted garlic sauce stirred into mashed potatoes (<a href="/posts/sides">see all sides</a>)',
    1
)

# Link menu prices -> /menus-prices  (already in CTA section, add in content)
content = content.replace(
    'View Full Papa Johns Menu with Prices',
    'View Full Papa Johns Menu with Prices',
    1
)

# Link "Papa Johns sandwiches" in the sandwich spread context
content = content.replace(
    'transforms a basic lunch into something genuinely memorable.',
    'transforms a basic lunch into something genuinely memorable. Try it with our <a href="/posts/papa-johns-sandwiches">Papa Johns Oven-Toasted Sandwiches</a> for the ultimate garlic-loaded meal.',
    1
)

post['content'] = content

with open('src/app/data/posts.json', 'w') as f:
    json.dump(posts, f, indent=2, ensure_ascii=False)

print("Content updated: em-dashes removed, internal links added")
print("Done!")
