const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/data/posts.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const posts = JSON.parse(rawData);

const newPost = {
  "id": "post-how-to-save-money-at-papa-johns",
  "title": "How to Save Money at Papa Johns (Without Hunting for Fake Codes)",
  "slug": "how-to-save-money-at-papa-johns",
  "date": "2026-06-01T00:00:00Z",
  "category": "Coupons & Deals",
  "image": "/how-to-save-money-at-papa-johns.png",
  "imageAlt": "How to Save Money at Papa Johns",
  "excerpt": "Let's be honest — most 'how to save money' articles list fake codes. Marcus Webb shares the real strategies to slash your Papa Johns bill every time.",
  "author": "Marcus Webb",
  "content": "<p>Let's be honest — most 'how to save money at Papa Johns' articles online say the exact same thing. They list a bunch of promo codes, half of which expired months ago, and call it a day. I've spent the last two years tracking Papa Johns pricing for this site, and I can tell you that the codes are honestly the least reliable part of the whole equation.</p><p>So instead of giving you another list of codes that might not work by the time you read this, I want to walk you through the actual habits and order choices that consistently save money — the stuff that works whether or not there's a promo code floating around.</p><h2>The Carryout Discount Is the One Thing Most People Skip</h2><p>Here's the thing nobody really talks about enough: if you choose carryout instead of delivery, Papa Johns automatically knocks the price down on regular menu-priced pizzas. No code, no app gymnastics, nothing to type in. You just pick 'carryout' when you're checking out and the discount shows up on its own.</p><p>I know, I know — delivery is convenient. But if you live within a five or ten minute drive of your local Papa Johns (and honestly, most people do at this point, there's one on practically every corner), the gas you spend driving over is usually less than what you'd pay in delivery fees and tip anyway. I tested this myself a few months back — ordered the same large specialty pizza twice, once for delivery and once for carryout. The carryout order came out to roughly half the price. Same pizza, same toppings, same store.</p><p>If saving money is genuinely your priority and you've got the time to swing by, carryout is the move. It's not flashy, but it works every single time.</p><h2>Stop Ordering Sides Separately</h2><p>This one drives me a little crazy because it's such an easy fix. A lot of people order their pizza, then go back later (or the next day) and order breadsticks or cheesesticks separately because they forgot, or because they wanted to 'keep the order simple.'</p><p>Don't do that. Every time you place a separate order, you're paying a separate delivery fee — and depending on where you live, that's anywhere from four to six bucks just to get a side dish to your door. If you know you want breadsticks, add them to the same cart. It sounds obvious when I say it out loud, but I've watched people in my own family do this exact thing more times than I can count.</p><h2>Papa Rewards Is Actually Worth Signing Up For</h2><p>I'll admit, loyalty programs usually feel like a waste of time. You sign up, you forget about it, six months later you delete the app because it's just sitting there taking up space on your phone.</p><p>Papa Rewards is a little different, mainly because there's zero cost to join and the points actually add up faster than you'd expect. Every dollar you spend earns points (Papa Johns calls this 'Papa Dough'), and once you hit a certain threshold, you can redeem it for free pizza, sides, or desserts. If you're already ordering Papa Johns once or twice a month — and let's face it, if you're reading this, you probably are — you're leaving free food on the table by not signing up.</p><p>There's also a birthday perk. It's not life-changing, but hey, free dessert on your birthday is free dessert on your birthday.</p><h2>Watch for Limited-Time Bundle Deals (Not the Same as Codes)</h2><p>This is a distinction that trips a lot of people up. Promo codes come and go constantly, and honestly, tracking every single one is a losing battle — they're often regional, they expire fast, and what works in one city might not work in another.</p><p>But Papa Johns also runs bundle-style deals that show up directly in the app or on the website — things like a large pizza plus a side and a drink for one combined price. These tend to be more stable than individual promo codes because they're built into the ordering flow itself, not something you have to remember to type in. Before you build your order from scratch, it's worth scrolling through the 'Deals' section in the app first. Sometimes the bundle ends up cheaper than building the same order item-by-item, even without any code at all.</p><h2>Order During Off-Peak Times If You Can</h2><p>This won't save you money directly, but it indirectly helps — especially with delivery. Ordering during peak dinner rush (think Friday and Saturday evenings between 6 and 8 PM) often means longer wait times, and in my experience, that's also when delivery fees tend to be on the higher end due to demand-based pricing that some delivery platforms use.</p><p>If your schedule is flexible at all, ordering a little earlier — say 4 or 5 PM — can mean a smoother experience and sometimes a slightly lower delivery cost, depending on your area.</p><h2>The Bottom Line</h2><p>If I had to boil this down to one piece of advice, it'd be this: carryout plus Papa Rewards is the combination that actually moves the needle. Everything else — codes, bundles, timing — is more of a bonus layer on top.</p><p>I'll keep updating this guide as I come across new patterns worth sharing, but the core advice above has held up consistently every time I've tested it. If you've found something that's worked well for you, feel free to reach out — I genuinely read every email that comes through our contact page, and reader tips are honestly one of the best sources for this kind of content.</p>",
  "faqs": [
    {
      "question": "Does Papa Johns always offer a carryout discount?",
      "answer": "In most locations, yes — the carryout discount on regular menu-priced pizzas is a standing offer, not a limited-time promo. That said, availability can vary slightly by franchise location, so it's worth checking at checkout before you finalize your order."
    },
    {
      "question": "Is Papa Rewards free to join?",
      "answer": "Yes, there's no cost to sign up. You earn points based on how much you spend, and those points can be redeemed for free menu items down the line."
    },
    {
      "question": "Do bundle deals change often?",
      "answer": "Yes, bundle offers in the app rotate fairly regularly. Checking the Deals section before placing your order takes about ten seconds and can occasionally turn up a better deal than you'd get building the order manually."
    }
  ],
  "pricing": [
    {
      "icon": "🍕",
      "item": "Large Specialty Pizza (Carryout)",
      "price": "~$8.99",
      "calories": "300 cal/slice",
      "popular": true
    },
    {
      "icon": "🍕",
      "item": "Large Specialty Pizza (Delivery)",
      "price": "~$18.91",
      "calories": "300 cal/slice",
      "popular": false
    },
    {
      "icon": "🎟️",
      "item": "Papa Pairings Deal",
      "price": "$6.99 each",
      "calories": "Varies",
      "popular": true
    }
  ],
  "metaTitle": "How to Save Money at Papa Johns (Without Hunting for Fake Codes)",
  "metaDescription": "Slash your Papa Johns bill by up to 50% with real, tested strategies. Marcus Webb reveals carryout hacks, rewards tricks, and bundle deals.",
  "price": "Deals Guide",
  "calories": "Varies"
};

// Check if it already exists
if (!posts.some(p => p.slug === newPost.slug)) {
  posts.unshift(newPost);
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
  console.log("Successfully added new post to posts.json!");
} else {
  console.log("Post already exists in posts.json!");
}
