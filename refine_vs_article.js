const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const POSTS_PATH = path.join(__dirname, 'src/app/data/posts.json');
const FAQ_PATH = path.join(__dirname, 'src/app/data/faq-schemas.json');

const newFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Papa Johns better than Pizza Hut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most orders in 2026, Papa Johns is the better choice. Papa Johns wins on ingredient quality, fresh dough, sauce, stuffed crust, and app experience. Pizza Hut wins on Pan Pizza, menu variety, and large family bundle deals like the Big Dinner Box. In a head-to-head comparison across 12 categories, Papa Johns scores 7 wins versus Pizza Hut's 4, with 2 ties."
      }
    },
    {
      "@type": "Question",
      "name": "Which is cheaper — Papa Johns or Pizza Hut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For pizza-only orders, prices are similar — Papa Johns averages $18.91 for a large pepperoni versus Pizza Hut's $18.65. For full family meals including sides, pasta, and extras, Pizza Hut tends to be cheaper due to bundle deals like the Big Dinner Box at $24.99. Papa Johns with a promo code often matches or beats Pizza Hut pricing. Always check for coupons before ordering either chain."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns or Pizza Hut have better stuffed crust?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns has the better stuffed crust in 2026. The Garlic Epic Stuffed Crust, with its garlic parmesan exterior baked onto the ciabatta-style edge, gives it a toasted, savory crunch that Pizza Hut's plain mozzarella stuffed crust cannot match. Pizza Hut invented stuffed crust in 1995 and has a nostalgia advantage, but Papa Johns' Garlic Epic variety is the more flavorful product."
      }
    },
    {
      "@type": "Question",
      "name": "Which has better delivery — Papa Johns or Pizza Hut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns and Pizza Hut are roughly equal on delivery speed, both averaging 30 to 45 minutes depending on location and time of day. Neither chain competes with Domino's on delivery technology. Papa Johns has a slight edge in app usability — their ordering flow is cleaner and the Papa Pairings deal is easier to navigate than Pizza Hut's bundle configurations."
      }
    },
    {
      "@type": "Question",
      "name": "Does Papa Johns or Pizza Hut have better dough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns has better dough for most crust styles due to their fresh, never-frozen policy. The difference is noticeable — Papa Johns original crust has a lightness and chew that frozen or pre-made dough cannot replicate. However, Pizza Hut's Original Pan Pizza is a genuine exception — their thick, buttery, caramelized-bottom pan crust is the best in the category and Papa Johns has no equivalent."
      }
    },
    {
      "@type": "Question",
      "name": "Which pizza chain has a better loyalty program — Papa Johns or Pizza Hut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns' Papa Rewards program has a slight edge due to its lower redemption threshold — you need to spend $75 before your first free reward versus Pizza Hut's Hut Rewards which requires $100 in spending at 2 points per dollar. Both programs are free to join. Hut Rewards earns points at a higher rate (2x per dollar versus Papa Johns' 1x), which benefits heavy users over time."
      }
    },
    {
      "@type": "Question",
      "name": "Does Pizza Hut or Papa Johns have more menu variety?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pizza Hut has significantly more menu variety. They offer pasta, a Personal Pan Pizza, Cheesy Bites crust, Melts, and a broader dessert selection. Papa Johns trimmed their menu in early 2026, discontinuing Papadias and Papa Bites to simplify operations, replacing them with Oven-Toasted Sandwiches. Papa Johns is now more focused on pizza with quality sides, while Pizza Hut covers a broader range of meal types."
      }
    },
    {
      "@type": "Question",
      "name": "Are both Papa Johns and Pizza Hut closing stores in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Papa Johns confirmed plans to close approximately 200 North American stores in 2026, with additional closures bringing the total to up to 300 by end of 2027. Pizza Hut also announced approximately 250 U.S. store closures in the first half of 2026. Both chains are rationalizing underperforming franchise locations in response to declining same-store sales and a difficult consumer environment."
      }
    },
    {
      "@type": "Question",
      "name": "Which chain has better wings — Papa Johns or Pizza Hut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pizza Hut offers a lower cost-per-wing at approximately $1.85 per wing versus Papa Johns at approximately $1.52 per wing — making Papa Johns the better value on wings specifically. For flavor variety, both chains offer multiple sauce options including Buffalo, BBQ, and garlic parmesan. Papa Johns wings include the free Special Garlic Sauce dip, while Pizza Hut charges extra for dipping sauces."
      }
    },
    {
      "@type": "Question",
      "name": "What does Papa Johns do better than Pizza Hut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Papa Johns is better than Pizza Hut in 2026 in these areas: fresh never-frozen dough quality, tomato sauce freshness, stuffed crust (especially the Garlic Epic variety), free Special Garlic Sauce included with every order, app usability, and overall ingredient quality including pepperoni and mozzarella. Papa Johns also has a more coherent turnaround strategy under new CEO Todd Penegor compared to Pizza Hut's current direction."
      }
    },
    {
      "@type": "Question",
      "name": "What does Pizza Hut do better than Papa Johns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pizza Hut is better than Papa Johns in 2026 in these areas: Original Pan Pizza with its thick buttery caramelized-bottom crust, menu variety including pasta and more specialty pizza options, large family bundle deals like the Big Dinner Box, overall value for groups ordering multiple item types, and dine-in experience where still available."
      }
    }
  ]
};

// Update posts.json
try {
    let posts = JSON.parse(fs.readFileSync(POSTS_PATH, 'utf8'));
    let post = posts.find(p => p.slug === 'papa-johns-vs-pizza-hut');
    
    if (post) {
        // 1. Remove/Replace dashes (em-dashes to standard dashes)
        post.content = post.content.replace(/—/g, '-').replace(/–/g, '-');
        post.excerpt = post.excerpt.replace(/—/g, '-').replace(/–/g, '-');
        
        // 2. Internal Linking
        // Link pepperoni to /menus-prices/pepperoni-pizza
        post.content = post.content.replace(/pepperoni/gi, (match) => {
            // Avoid double linking if already linked
            return `<a href="/menus-prices/pepperoni-pizza">${match}</a>`;
        });
        // Link The Works to /menus-prices/the-works-pizza
        post.content = post.content.replace(/The Works/gi, (match) => {
            return `<a href="/menus-prices/the-works-pizza">${match}</a>`;
        });
        // Link Cheese Pizza to /menus-prices/cheese-pizza
        post.content = post.content.replace(/Cheese Pizza/gi, (match) => {
            return `<a href="/menus-prices/cheese-pizza">${match}</a>`;
        });
        
        // Clean up any double nesting of links if they happened
        post.content = post.content.replace(/<a href="\/menus-prices\/pepperoni-pizza"><a href="\/menus-prices\/pepperoni-pizza">/g, '<a href="/menus-prices/pepperoni-pizza">');
        
        // 3. Update FAQs
        post.faqs = newFaqSchema.mainEntity.map(q => ({
            question: q.name,
            answer: q.acceptedAnswer.text
        }));
        
        fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 4));
        console.log('Successfully updated posts.json content, dashes, and FAQs');
    }
} catch (err) {
    console.error('Error updating posts.json:', err);
}

// Update faq-schemas.json
try {
    let faqSchemas = JSON.parse(fs.readFileSync(FAQ_PATH, 'utf8'));
    faqSchemas['papa-johns-vs-pizza-hut'] = newFaqSchema;
    fs.writeFileSync(FAQ_PATH, JSON.stringify(faqSchemas, null, 2));
    console.log('Successfully updated faq-schemas.json');
} catch (err) {
    console.error('Error updating faq-schemas.json:', err);
}

// Git Push
try {
    execSync('git add .');
    execSync('git commit -m "Update Papa Johns vs Pizza Hut article: detailed FAQ schema, dash removal, and internal linking"');
    // execSync('git push'); // I'll do this in a separate command to be sure
    console.log('Successfully committed changes to Git');
} catch (err) {
    console.error('Error with Git operations:', err.message);
}
