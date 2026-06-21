import { Metadata } from 'next';
import CouponsClient from '../../components/CouponsClient';
import { getMonthYear } from '../../../lib/utils/date';

export const metadata: Metadata = {
    title: "Papa John's Coupons & Promo Codes May 2026 | PapaJohns-Menus.us",
    description: "Recently reviewed Papa John's coupon notes, promo code examples, carryout deals, BOGO-style offers, and savings tips for May 2026. Availability varies by store.",
    keywords: "papa johns coupons, papa johns promo codes, papa johns discount code, papa johns deals 2026, papa johns coupon code today, papa johns free delivery code, papa johns bogo deal",
    authors: [{ name: "PapaJohns-Menus.us Deals Team" }],
    robots: "index, follow",
    alternates: {
        canonical: "https://papajohns-menus.us/coupons"
    },
    openGraph: {
        title: "Papa John's Coupons & Promo Codes May 2026",
        description: "Recently reviewed Papa John's coupon notes, BOGO-style offers, carryout deals, and savings tips for May 2026. Availability varies by location.",
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
        title: "Papa John's Coupons & Promo Codes May 2026",
        description: "Recently reviewed Papa John's coupon notes, promo examples, and ordering tips. Check official checkout for current eligibility.",
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
            expiry: "May 31, 2026",
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
            expiry: "May 31, 2026",
            tags: ["Sitewide"],
            featured: false
        },
        {
            id: 3,
            discount: "SAVE",
            sub: "Carryout",
            title: "Carryout Pizza Savings — Store Terms Vary",
            desc: "Carryout orders may show pizza discounts or store-level specials. Check your official cart because availability, eligible items, and discount amounts vary by location.",
            code: null,
            noCodeLabel: "Check Cart",
            expiry: "Terms vary",
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
            expiry: "May 31, 2026",
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
            expiry: "May 31, 2026",
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
            expiry: "May 31, 2026",
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
            a: "The best Papa John's deal depends on your location, cart, and whether you choose delivery or carryout. Check official checkout for live eligibility, then compare any BOGO-style offer, percentage-off code, and carryout special before paying."
        },
        {
            q: "Does Papa John's have a free delivery code?",
            a: "Free delivery offers may appear at participating locations or during limited promotions, but they are not guaranteed for every store or order. Check the official checkout page for the current delivery fee and any available free-delivery offer."
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
            a: "Papa John's sometimes offers BOGO-style deals, but terms vary by location and date. Always confirm the offer in the official Papa Johns checkout before relying on it."
        },
        {
            q: "What is the Papa John's carryout special?",
            a: "Carryout specials can be one of the strongest ways to save, but exact discounts vary by store, time, and promotion. Compare carryout and delivery totals in the official checkout before placing the order."
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
                "name": "Papa John's Coupons & Promo Codes May 2026",
                "description": "Recently reviewed Papa John's coupon notes, promo examples, and ordering tips for May 2026. Availability varies by location and checkout terms.",
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
                "name": "Papa John's Coupon Codes May 2026",
                "description": "Papa John's promo examples and deals to verify before checkout",
                "itemListElement": coupons.map((c, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "item": {
                        "@type": "Offer",
                        "name": c.title,
                        "description": c.desc,
                        "couponCode": c.code || undefined,
                        "validFrom": "2026-05-01",
                        "validThrough": "2026-05-31",
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


export const revalidate = 86400; // 24 hours ISR
