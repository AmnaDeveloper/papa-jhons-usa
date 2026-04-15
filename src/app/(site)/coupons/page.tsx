import { Metadata } from 'next';
import CouponsClient from '../../components/CouponsClient';
import { getMonthYear } from '../../../lib/utils/date';

export const metadata: Metadata = {
    title: "Papa John's Coupons & Promo Codes April 2026 – Up to 50% Off | PapaJohns-Menus.us",
    description: "Save big with 18+ verified Papa John's coupon codes for April 2026. Get 25% off, BOGO pizza deals, free delivery codes & carryout specials — updated daily by our deals team.",
    alternates: {
        canonical: "https://papajohns-menus.us/coupons"
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
            a: "Go to PapaJohns.com or the app, add items to your cart, and proceed to checkout. Find the 'Promo Code' or 'Coupon Code' field at the top of the checkout page, enter your code, and click 'Apply'. The discount is deducted from your total before payment."
        },
        {
            q: "Can I use multiple Papa John's coupon codes?",
            a: "No — Papa John's only allows one promo code per order. Choose the code that gives you the highest savings. However, you can use a promo code together with Papa Rewards Papa Dough on most orders, which is effectively combining two discounts."
        },
        {
            q: "What is the best Papa John's coupon code right now?",
            a: "For April 2026, the best codes are: BOGO4U (buy one large pizza, get one free), PIZZA25 (25% off entire order), and HOTEL25 (30% off with a minimum spend). The no-code 50% carryout deal is also outstanding if you can pick up your order."
        },
        {
            q: "Does Papa John's have a free delivery code?",
            a: "Yes — free delivery is automatically applied on orders of $40 or more. The standard delivery fee is $3.99–$5.99. You can also receive exclusive free delivery promo codes by signing up for Papa John's email newsletter or text alerts (text JOIN to 47272)."
        },
        {
            q: "What is Papa Rewards and is it worth joining?",
            a: "Papa Rewards is Papa John's free loyalty program. You earn 1 point for every $1 spent, and 75 points converts to $10 in Papa Dough (a spending credit). Members also get a free birthday dessert and access to member-only deals. It is completely free to join and absolutely worth it for regular customers."
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
                "dateModified": "2026-04-15",
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://papajohns-menus.us" },
                        { "@type": "ListItem", "position": 2, "name": "Coupons & Deals", "item": "https://papajohns-menus.us/coupons" }
                    ]
                }
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
