import { Metadata } from 'next';
import CouponsClient from '../../components/CouponsClient';
import { getMonthYear } from '../../../lib/utils/date';

export const metadata: Metadata = {
    title: "Papa John's Coupons & Promo Codes April 2026 – Up to 50% Off | PapaJohns-Menus.us",
    description: "Save big with 18+ verified Papa John's coupon codes for April 2026. Get 25% off, BOGO pizza deals, free delivery codes & carryout specials — updated daily by our deals team.",
    keywords: "papa johns coupons, papa johns promo codes, papa johns discount code, papa johns deals 2026, papa johns coupon code today, papa johns free delivery code, papa johns bogo deal",
    authors: [{ name: "PapaJohns-Menus.us Deals Team" }],
    robots: "index, follow",
    alternates: {
        canonical: "https://papajohns-menus.us/coupons"
    },
    openGraph: {
        title: "Papa John's Coupons & Promo Codes April 2026 – Up to 50% Off",
        description: "18+ verified Papa John's coupon codes updated daily. BOGO deals, 25% off, free delivery codes for April 2026.",
        url: "https://papajohns-menus.us/coupons",
        type: "website",
        images: [
            {
                url: "https://papajohns-menus.us/og-coupons.jpg",
                width: 1200,
                height: 630,
                alt: "Papa John's Coupons 2026"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Papa John's Coupons & Promo Codes April 2026 – Up to 50% Off",
        description: "18+ verified Papa John's coupon codes updated daily. Get BOGO, 25% off & free delivery codes.",
    }
};

export default function CouponsPage() {
    const month = getMonthYear();

    const coupons = [
        {
            id: 1,
            discount: "BOGO",
            sub: "Free Pizza",
            title: "Buy One Large Pizza, Get One FREE",
            desc: "Buy any large pizza at full menu price and get a second large pizza absolutely free. Works on all sizes and crusts.",
            code: "BOGO4U",
            expiry: "April 30, 2026",
            tags: ["Popular", "Online + App"],
            featured: true
        },
        {
            id: 2,
            discount: "25%",
            sub: "OFF",
            title: "25% Off Your Entire Order",
            desc: "Apply this code at checkout to get 25% off your entire Papa John's order. Works on pizzas, sides, desserts and drinks.",
            code: "PIZZA25",
            expiry: "April 30, 2026",
            tags: ["Sitewide"],
            featured: false
        },
        {
            id: 3,
            discount: "50%",
            sub: "Carryout",
            title: "50% Off All Pizzas — Carryout Only",
            desc: "Get 50% off all regular menu-priced pizzas when you order carryout. Any size, any crust, any toppings. Discount applied automatically — no code needed.",
            code: null,
            noCodeLabel: "Auto-Applied",
            expiry: "Ongoing deal",
            tags: ["Carryout Only"],
            featured: false,
            color: "green"
        },
        {
            id: 4,
            discount: "$10",
            sub: "OFF $40+",
            title: "$10 Off Orders of $40 or More",
            desc: "Save $10 on any order over $40. Perfect for family meal nights or group orders. Works on delivery and carryout.",
            code: "SAVE10",
            expiry: "April 30, 2026",
            tags: ["Min. Spend $40"],
            featured: false
        },
        {
            id: 5,
            discount: "20%",
            sub: "OFF",
            title: "20% Off Full Menu-Priced Orders",
            desc: "Take 20% off your full menu-priced order. Excludes promotional or already-discounted items.",
            code: "PIZZA20",
            expiry: "April 30, 2026",
            tags: ["Online Only"],
            featured: false
        },
        {
            id: 6,
            discount: "FREE",
            sub: "Delivery",
            title: "Free Delivery on Orders $40+",
            desc: "Free delivery automatically applied on all orders of $40 or more. Standard delivery fee is $3.99–$5.99. No code needed.",
            code: null,
            noCodeLabel: "Auto-Applied",
            expiry: "Ongoing",
            tags: ["Delivery"],
            featured: false,
            color: "green"
        },
        {
            id: 7,
            discount: "$7.99",
            sub: "Large Pizza",
            title: "Large 1-Topping Pizza for $7.99 — Carryout",
            desc: "Order any large 1-topping pizza for just $7.99 on carryout. That's about 50% off the regular price. Select from deals menu at checkout.",
            code: null,
            noCodeLabel: "Select in Cart",
            expiry: "Limited time",
            tags: ["Carryout Only"],
            featured: false,
            color: "green"
        },
        {
            id: 8,
            discount: "30%",
            sub: "OFF",
            title: "30% Off Sitewide",
            desc: "Save 30% on your entire order — one of the biggest sitewide discounts available. Apply at checkout before paying.",
            code: "HOTEL25",
            expiry: "April 30, 2026",
            tags: ["Min. Spend $30"],
            featured: false
        }
    ];

    const faqs = [
        {
            q: "How do I use a Papa John's promo code?",
            a: "To use a Papa John's promo code: 1) Add your items to the cart on PapaJohns.com or the app. 2) Go to checkout. 3) Find the 'Promo Code' or 'Coupon Code' field at the top of the checkout page. 4) Enter your code and click 'Apply'. 5) Your discount will be applied automatically before payment."
        },
        {
            q: "Can I use multiple Papa John's coupon codes at once?",
            a: "No, Papa John's only allows one promo code per order. Choose the code that gives you the highest savings. However, you can combine a promo code with Papa Rewards points (Papa Dough) on most orders."
        },
        {
            q: "What is the best Papa John's coupon code right now?",
            a: "The best Papa John's deals for April 2026 are: BOGO4U for buy one get one free pizza, PIZZA25 for 25% off your entire order, and the 50% off carryout deal which applies automatically with no code needed. We update our codes daily."
        },
        {
            q: "Does Papa John's have a free delivery code?",
            a: "Yes! Papa John's offers free delivery on orders of $40 or more — no code needed, it applies automatically. The standard delivery fee is $3.99–$5.99. You can also get exclusive free delivery codes by signing up for Papa John's email or text alerts."
        },
        {
            q: "What is Papa Rewards and is it worth it?",
            a: "Papa Rewards is Papa John's free loyalty program. You earn 1 point for every $1 spent. After 75 points you get $10 in Papa Dough to spend on any order. You also get a free birthday dessert and early access to exclusive deals. For regular customers, it is absolutely worth joining."
        },
        {
            q: "How do I get Papa John's app-only deals?",
            a: "Download the Papa John's app from the App Store or Google Play. Log in, select your local store, and you'll see exclusive app-only deals tailored to your area. App deals often include bigger discounts than the main website and change regularly."
        },
        {
            q: "Does Papa John's do BOGO (Buy One Get One) deals?",
            a: "Yes! Papa John's regularly offers BOGO deals. The current BOGO deal lets you buy one large pizza at full price and get a second large pizza free using code BOGO4U. These offers are limited-time so check back often."
        },
        {
            q: "What is the Papa John's carryout special?",
            a: "Papa John's carryout deal gives you 50% off all regular menu-price pizzas when you order for carryout — regardless of size, crust, or toppings. No coupon code needed, the discount applies automatically when you select 'carryout' at checkout."
        },
        {
            q: "Why is my Papa John's coupon code not working?",
            a: "Common reasons a Papa John's code may not work: 1) The code has expired. 2) Your order doesn't meet the minimum spend requirement. 3) The code only applies to specific items. 4) You already have another promo applied (only one per order). 5) Typo in the code — always copy-paste. Check the terms on each coupon carefully."
        },
        {
            q: "Does Papa John's offer a student or military discount?",
            a: "Papa John's offers a military discount at participating locations — availability and discount amount vary by store. There is no official nationwide student discount, but you can sign up for Papa John's text alerts (text JOIN to 47272) to receive exclusive discounts not available elsewhere."
        },
        {
            q: "Can I use Papa John's promo codes on third-party delivery apps?",
            a: "No. Papa John's promo codes can only be applied when ordering directly through PapaJohns.com or the official Papa John's app. If you order through DoorDash, Grubhub or Uber Eats, Papa John's promo codes will not work. Order directly for the best prices and full access to deals."
        }
    ];

    const schemas = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://papajohns-menus.us/coupons",
                "name": "Papa John's Coupons & Promo Codes April 2026",
                "description": "18+ verified Papa John's coupon codes and promo codes for April 2026. Updated daily by our deals team.",
                "url": "https://papajohns-menus.us/coupons",
                "datePublished": "2026-01-01",
                "dateModified": new Date().toISOString().split('T')[0],
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://papajohns-menus.us" },
                        { "@type": "ListItem", "position": 2, "name": "Coupons & Deals", "item": "https://papajohns-menus.us/coupons" }
                    ]
                }
            },
            {
                "@type": "Organization",
                "name": "Papa John's Pizza",
                "url": "https://www.papajohns.com",
                "logo": "https://papajohns-menus.us/papajohns-logo.png",
                "sameAs": [
                    "https://www.facebook.com/papajohns",
                    "https://twitter.com/papajohns",
                    "https://www.instagram.com/papajohns"
                ]
            },
            {
                "@type": "ItemList",
                "name": "Papa John's Coupon Codes April 2026",
                "description": "Active Papa John's promo codes and deals",
                "itemListElement": coupons.map((c, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "item": {
                        "@type": "Offer",
                        "name": c.title,
                        "description": c.desc,
                        "couponCode": c.code || undefined,
                        "validFrom": "2026-04-01",
                        "validThrough": "2026-04-30",
                        "url": "https://www.papajohns.com",
                        "seller": { "@type": "Organization", "name": "Papa John's Pizza" }
                    }
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <CouponsClient month={month} coupons={coupons} faqs={faqs} />
        </>
    );
}
