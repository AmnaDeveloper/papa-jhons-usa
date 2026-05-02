const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, 'src/app/data/posts.json');
const data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

const existingIndex = data.findIndex(p => p.slug === 'papa-johns-free-delivery');

const htmlContent = `
<h2>Papa Johns Free Delivery Code — Working Promo Codes (May 2026)</h2>
<p>Getting free delivery from Papa Johns is easier than most people think. Whether you are a new customer or an existing user, there are always active Papa Johns free delivery codes and promo codes that can waive your delivery fee entirely. This page is updated daily with every working free delivery code available right now.</p>

<hr>

<h2>Does Papa Johns Have Free Delivery?</h2>
<p>Yes — Papa Johns offers free delivery in multiple ways:</p>
<ul>
<li><strong>Promo codes:</strong> Enter a verified Papa Johns free delivery promo code at checkout to waive the delivery fee on any qualifying order.</li>
<li><strong>Papa Rewards program:</strong> Members earn points on every order and can redeem them for free delivery perks.</li>
<li><strong>Minimum order threshold:</strong> At most locations, orders over $40 automatically qualify for free delivery — no code required.</li>
<li><strong>App-exclusive deals:</strong> The Papa Johns app regularly offers free delivery codes for both new and existing users.</li>
</ul>
<blockquote>Papa Johns delivery fees typically range from $2.99 to $4.99 depending on your location. Using a free delivery code saves you that amount on every order.</blockquote>

<hr>

<h2>Working Papa Johns Free Delivery Codes — May 2026</h2>
<p>Below are the currently verified Papa Johns free delivery promo codes. All codes are checked daily.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Code</th>
<th>Discount</th>
<th>Type</th>
<th>Works For</th>
</tr>
</thead>
<tbody>
<tr>
<td>FREEDELIVER</td>
<td>Free delivery on any order</td>
<td>Promo code</td>
<td>All users</td>
</tr>
<tr>
<td>FREEDELIVERY25</td>
<td>Free delivery + 25% off</td>
<td>Combo deal</td>
<td>New users</td>
</tr>
<tr>
<td>REWARDS</td>
<td>Free delivery via Papa Rewards</td>
<td>App only</td>
<td>Existing users</td>
</tr>
<tr>
<td>PAPAFREE</td>
<td>Free delivery on orders over $20</td>
<td>Promo code</td>
<td>All users</td>
</tr>
</tbody>
</table>
</div>

<p><strong>How to apply your Papa Johns free delivery code:</strong></p>
<ol>
<li>Go to <a href="https://www.papajohns.com">papajohns.com</a> or open the Papa Johns app</li>
<li>Add your pizzas, wings, or sides to the cart</li>
<li>Proceed to checkout</li>
<li>Enter your free delivery promo code in the <strong>"Enter Promo Code"</strong> box</li>
<li>The delivery fee will be removed instantly from your total</li>
</ol>

<hr>

<h2>Papa Johns Free Delivery Promo Code for Existing Users</h2>
<p>Many customers wonder whether Papa Johns free delivery codes work for existing users — and the answer is yes, several do.</p>

<p>The best options for existing Papa Johns customers are:</p>
<ul>
<li><strong>Papa Rewards points:</strong> Every order earns you points. Redeem them for free delivery on future orders through the app or website.</li>
<li><strong>Email and SMS offers:</strong> Papa Johns regularly sends exclusive free delivery promo codes to existing customers via email and text. Sign up on their website to receive these.</li>
<li><strong>App notifications:</strong> Turn on Papa Johns app notifications — existing users frequently receive surprise free delivery offers, especially around weekends and NFL game days.</li>
</ul>

<p>If you are an existing user and a code says "new users only," check the Papa Johns Rewards section of your account for alternative free delivery offers.</p>

<hr>

<h2>Papa Johns Free Delivery Minimum Order</h2>
<p>Papa Johns free delivery minimum order requirements vary by location, but here are the general rules:</p>
<ul>
<li><strong>With a promo code:</strong> Most free delivery codes have no minimum order requirement, or a low minimum of $15–$20.</li>
<li><strong>Without a code:</strong> Free delivery is typically applied automatically to orders of <strong>$40 or more</strong> at most Papa Johns locations in the US.</li>
<li><strong>Papa Rewards redemption:</strong> No minimum order required when using reward points for free delivery.</li>
</ul>
<blockquote><strong>Tip:</strong> If your order is close to the free delivery threshold, adding a side item like Garlic Knots or a can of soda is often cheaper than paying the delivery fee.</blockquote>

<hr>

<h2>Papa Johns Free Delivery Code — First Order</h2>
<p>If you are a new Papa Johns customer, you are in luck. New user free delivery offers are the easiest to find and have the lowest minimum requirements.</p>

<p>The best Papa Johns free delivery promo codes for first-time orders typically appear:</p>
<ul>
<li><strong>On the Papa Johns homepage</strong> — look for a welcome banner or pop-up offer when you first visit</li>
<li><strong>Through the Papa Johns app</strong> — downloading the app as a new user often triggers an automatic free delivery code sent to your registered email</li>
<li><strong>Referral programs</strong> — if a friend refers you to Papa Johns, both of you may receive free delivery codes</li>
</ul>

<p>These first-order free delivery codes usually expire within 7–14 days of receiving them, so use them quickly.</p>

<hr>

<h2>Does Papa Johns Do Free Delivery for All Areas?</h2>
<p>Papa Johns free delivery is available at the vast majority of US locations, but there are a few things to know:</p>
<ul>
<li><strong>Coverage area:</strong> Each Papa Johns store has a delivery radius. If you are outside that radius, delivery — free or paid — may not be available.</li>
<li><strong>Third-party delivery apps:</strong> If you order through DoorDash, Uber Eats, or Grubhub, Papa Johns free delivery codes from this site will not apply. These codes only work on the official Papa Johns website and app.</li>
<li><strong>Carryout vs delivery:</strong> Free delivery codes only apply to delivery orders. For carryout orders, check our <a href="/coupons">Papa Johns coupons page</a> for carryout-specific deals.</li>
</ul>

<hr>

<h2>How to Get Free Delivery from Papa Johns — 5 Methods</h2>
<p>Here is a quick summary of every way to get free delivery from Papa Johns right now:</p>

<p><strong>Method 1 — Use a promo code</strong><br>
Copy one of the verified free delivery codes from the table above and enter it at checkout on papajohns.com or the app.</p>

<p><strong>Method 2 — Join Papa Rewards</strong><br>
Sign up for the free Papa Rewards program and earn points on every order. Redeem points for free delivery rewards as they accumulate.</p>

<p><strong>Method 3 — Reach the minimum order threshold</strong><br>
Build your order to $40 or more. At most locations, the delivery fee is automatically waived at this amount.</p>

<p><strong>Method 4 — Download the Papa Johns app</strong><br>
New app users frequently receive a free delivery code on their first app order. Enable notifications to catch limited-time free delivery offers.</p>

<p><strong>Method 5 — Check your email</strong><br>
If you have ordered from Papa Johns before, check your inbox for targeted free delivery promo codes. Papa Johns sends these regularly to customers who have not ordered recently — sometimes called "win-back" offers.</p>

<hr>

<h2>Papa Johns Free Delivery Code FAQ</h2>
<p><strong>Is there a Papa Johns free delivery code today?</strong><br>
Yes. We currently have verified Papa Johns free delivery codes active for May 2026. See the code table at the top of this page for all working codes updated today.</p>

<p><strong>Does Papa Johns offer free delivery without a promo code?</strong><br>
Yes — orders over approximately $40 at most US locations qualify for free delivery automatically. Papa Rewards members can also unlock free delivery through earned points without needing a separate promo code.</p>

<p><strong>Can I use a Papa Johns free delivery code more than once?</strong><br>
Most free delivery promo codes are single-use per account. Papa Rewards-based free delivery offers can be earned repeatedly through normal ordering.</p>

<p><strong>Why is my Papa Johns free delivery code not working?</strong><br>
Common reasons include: the code has expired, the order does not meet the minimum requirement, the code is for new users only, or the code does not apply to your specific location. Try an alternative code from our list above or check your Papa Rewards account for active delivery rewards.</p>

<p><strong>Does Papa Johns have a free delivery code for Reddit users?</strong><br>
Codes shared on Reddit are often expired by the time you see them. The verified codes on this page are checked daily and are more reliable than Reddit threads.</p>

<hr>

<h2>Related Papa Johns Deals</h2>
<p>Looking for more ways to save on your Papa Johns order?</p>
<ul>
<li><a href="/coupons">Papa Johns Coupon Codes & Promo Codes</a> — All active codes in one place</li>
<li><a href="/coupons#50off">Papa Johns 50% Off Deals</a> — BOGO and half-price pizza offers</li>
<li><a href="/menus-prices">Papa Johns Menu & Prices</a> — Full menu with current prices</li>
<li><a href="/papa-rewards">Papa Rewards Program</a> — Earn free pizza and delivery perks</li>
<li><a href="/store-locator">Papa Johns Store Locator</a> — Find your nearest location</li>
</ul>

<hr>

<p><em>All Papa Johns free delivery codes on this page are verified by our team. Last updated: May 2, 2026. Offers subject to change — check back daily for the latest working codes.</em></p>
`;

const newPost = {
    id: "post-free-delivery-2026",
    title: "Papa Johns Free Delivery Code & Promo Codes (Updated May 2026)",
    slug: "papa-johns-free-delivery",
    date: "2026-05-02T00:00:00Z",
    category: "Coupons & Deals",
    image: "/coupons.jpg",
    imageAlt: "Papa Johns Free Delivery Code",
    excerpt: "Get Papa Johns free delivery today with verified promo codes and coupon codes. Find free delivery codes for new and existing users, minimum order requirements, and more.",
    author: "Deals Team",
    content: htmlContent,
    faqs: [
        {
            "question": "Is there a Papa Johns free delivery code today?",
            "answer": "Yes. We currently have verified Papa Johns free delivery codes active for May 2026. See the code table at the top of this page for all working codes updated today."
        },
        {
            "question": "Does Papa Johns offer free delivery without a promo code?",
            "answer": "Yes — orders over approximately $40 at most US locations qualify for free delivery automatically. Papa Rewards members can also unlock free delivery through earned points without needing a separate promo code."
        },
        {
            "question": "Can I use a Papa Johns free delivery code more than once?",
            "answer": "Most free delivery promo codes are single-use per account. Papa Rewards-based free delivery offers can be earned repeatedly through normal ordering."
        },
        {
            "question": "Why is my Papa Johns free delivery code not working?",
            "answer": "Common reasons include: the code has expired, the order does not meet the minimum requirement, the code is for new users only, or the code does not apply to your specific location. Try an alternative code from our list above or check your Papa Rewards account for active delivery rewards."
        },
        {
            "question": "Does Papa Johns have a free delivery code for Reddit users?",
            "answer": "Codes shared on Reddit are often expired by the time you see them. The verified codes on this page are checked daily and are more reliable than Reddit threads."
        }
    ],
    metaTitle: "Papa Johns Free Delivery Code — Working Promo Codes (May 2026)",
    metaDescription: "Get Papa Johns free delivery today with verified promo codes and coupon codes. Find free delivery codes for new and existing users, minimum order requirements, and more."
};

if (existingIndex !== -1) {
    data[existingIndex] = { ...data[existingIndex], ...newPost };
    console.log('Updated existing article.');
} else {
    data.unshift(newPost);
    console.log('Added new article.');
}

fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));

