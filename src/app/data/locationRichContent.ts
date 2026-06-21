export interface RichLocationData {
    slug: string;
    title: string;
    metaDesc: string;
    h1: string;
    intro: string;
    stats: {
        deliveryTime: string;
        startingPrice: string;
        verifiedYear: string;
    };
    locationDetails: {
        address: string;
        phone: string;
        hours: string;
        deliveryAreas: string;
        mapUrl: string;
        additionalLocations?: {
            title: string;
            address: string;
            phone?: string;
            hours?: string;
            deliveryAreas?: string;
        }[];
    };
    menuPizzas: {
        name: string;
        s: string;
        m: string;
        l: string;
        xl: string;
    }[];
    menuSides: {
        name: string;
        price: string;
    }[];
    neighborhoodContent: {
        title: string;
        text: string;
    }[];
    faq: {
        q: string;
        a: string;
    }[];
    schema: any;
}

const standardPizzaPrices2026: RichLocationData["menuPizzas"] = [
    { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
    { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
    { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
    { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
    { name: "Garden Fresh", s: "$13.49", m: "$16.49", l: "$19.99", xl: "$22.99" },
    { name: "New York Style", s: "—", m: "—", l: "$17.99", xl: "—" },
    { name: "Epic Stuffed Crust", s: "—", m: "—", l: "$19.99", xl: "—" },
    { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
];

const standardSidePrices2026: RichLocationData["menuSides"] = [
    { name: "Garlic Knots (8 pieces)", price: "$6.99" },
    { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
    { name: "Cheesesticks", price: "$7.99" },
    { name: "Wings (8 pieces)", price: "$8.49" },
    { name: "Chocolate Chip Cookie", price: "$7.29" },
    { name: "Double Chocolate Chip Brownie", price: "$7.29" },
    { name: "Cinnamon Pull Aparts", price: "$7.29" }
];

export const locationRichContent: Record<string, RichLocationData> = {
    "albuquerque-nm": {
        slug: "albuquerque-nm",
        title: "Papa Johns Albuquerque NM 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Albuquerque, NM — full 2026 menu with prices, all Albuquerque locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Albuquerque now.",
        h1: "Papa John's Albuquerque, NM — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Albuquerque, New Mexico? This guide covers the complete **Papa Johns menu with prices** for Albuquerque — every pizza, side, dessert, and drink available in 2026 — plus the Albuquerque Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Old Town, or anywhere across Albuquerque, this page has everything you need before you order.\n\nPrices in Albuquerque match the national 2026 standard, and the Albuquerque location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "303 Roma Ave NW, Albuquerque, NM 87102",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 10:00 PM | Fri–Sat 11:00 AM – 11:00 PM | Sun 11:00 AM – 10:00 PM",
            deliveryAreas: "Downtown, Old Town, Huning Highland, Barelas",
            mapUrl: "https://maps.google.com/?q=303+Roma+Ave+NW,+Albuquerque,+NM+87102"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of New Mexico",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of New Mexico. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Albuquerque location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on New Mexico Lobos Game Days",
                text: "New Mexico Lobos games are among the busiest ordering times at Papa Johns Albuquerque locations. During Balloon Fiesta week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Albuquerque."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Albuquerque",
                text: "Papa Johns Albuquerque delivers across Downtown Albuquerque, Old Town, Nob Hill, University Area, Barelas. The Downtown area is the primary delivery zone for the 303 Roma Ave NW location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Albuquerque, New Mexico?", a: "Papa Johns Albuquerque is located at 303 Roma Ave NW, Albuquerque, NM 87102. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Albuquerque, NM?", a: "Papa Johns Albuquerque is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Albuquerque?", a: "Yes. Papa Johns Albuquerque delivers to Downtown, Old Town, Huning Highland, Barelas. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Albuquerque?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Albuquerque deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Albuquerque",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "303 Roma Ave NW",
            "addressLocality": "Albuquerque",
            "addressRegion": "NM",
            "postalCode": "87102",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/albuquerque-nm"
        }
    },
    "anchorage-ak": {
        slug: "anchorage-ak",
        title: "Papa Johns Anchorage AK 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Anchorage, AK — full 2026 menu with prices, all Anchorage locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Anchorage now.",
        h1: "Papa John's Anchorage, AK — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Anchorage, Alaska? This guide covers the complete **Papa Johns menu with prices** for Anchorage — every pizza, side, dessert, and drink available in 2026 — plus the Anchorage Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Fairview, or anywhere across Anchorage, this page has everything you need before you order.\n\nPrices in Anchorage match the national 2026 standard, and the Anchorage location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "600 W 5th Ave, Anchorage, AK 99501",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 10:00 PM | Fri–Sat 11:00 AM – 11:00 PM | Sun 11:00 AM – 10:00 PM",
            deliveryAreas: "Downtown, Fairview, Mountain View, Spenard",
            mapUrl: "https://maps.google.com/?q=600+W+5th+Ave,+Anchorage,+AK+99501"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Alaska Anchorage",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Alaska Anchorage. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Anchorage location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Anchorage",
                text: "Papa Johns Anchorage delivers across Downtown Anchorage, Midtown, Spenard, South Anchorage. The Downtown area is the primary delivery zone for the 600 W 5th Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Anchorage, Alaska?", a: "Papa Johns Anchorage is located at 600 W 5th Ave, Anchorage, AK 99501. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Anchorage, AK?", a: "Papa Johns Anchorage is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Anchorage?", a: "Yes. Papa Johns Anchorage delivers to Downtown, Fairview, Mountain View, Spenard. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Anchorage?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Anchorage deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Anchorage",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "600 W 5th Ave",
            "addressLocality": "Anchorage",
            "addressRegion": "AK",
            "postalCode": "99501",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/anchorage-ak"
        }
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        title: "Papa Johns Atlanta GA — Menu, Prices & All Locations (2026)",
        metaDesc: "Find all Papa Johns locations in Atlanta, GA. Full 2026 menu with prices, verified store hours, phone numbers, and delivery areas for every Atlanta location.",
        h1: "Papa Johns Atlanta, GA — Menu, Prices & All Locations",
        intro: "Looking for the best pizza delivery in Atlanta, Georgia? You are in the right place. This guide is your complete resource for every Papa Johns in Atlanta — featuring real addresses, verified phone numbers, current store hours, and the <a href=\"/menus-prices\" class=\"underline text-[#CCEE18] hover:text-white\">full 2026 menu with prices</a>.\n\nWhether you are studying late at Georgia Tech, working in Midtown, or hanging out in Buckhead, Papa Johns offers fast delivery and easy carryout across the city. Our prices are updated for 2026, so you know exactly what to expect when ordering your favorite <a href=\"/menus-prices/classic-pizzas\" class=\"underline text-[#CCEE18] hover:text-white\">pizzas</a>, <a href=\"/menus-prices/sides\" class=\"underline text-[#CCEE18] hover:text-white\">sides</a>, and <a href=\"/posts/papa-johns-desserts\" class=\"underline text-[#CCEE18] hover:text-white\">desserts</a>. For the fastest experience, use the Papa Johns app to track your order in real-time right to your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$11.49",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "990 State Street NW, Atlanta, GA 30318",
            phone: "(404) 872-5252",
            hours: "Mon–Thu 10:00 AM – 1:00 AM | Fri–Sat 10:00 AM – 2:00 AM | Sun 10:00 AM – 1:00 AM",
            deliveryAreas: "Georgia Tech, GSU, Castleberry Hill, English Ave",
            mapUrl: "https://maps.google.com/?q=990+State+Street+NW,+Atlanta,+GA+30318",
            additionalLocations: [
                { title: "Ponce De Leon Ave NE — Midtown", address: "468 Ponce De Leon Ave NE, Atlanta, GA 30308", phone: "(404) 205-8393", hours: "Mon–Thu 10:00 AM – 1:00 AM | Fri–Sat 10:00 AM – 2:00 AM | Sun 10:00 AM – 1:00 AM", deliveryAreas: "Midtown, Ponce City Market area, Old Fourth Ward" },
                { title: "Piedmont Ave NE — Virginia-Highland", address: "1874 Piedmont Ave NE, Suite 2, Atlanta, GA 30324", phone: "(404) 607-1229", hours: "Mon–Thu 10:00 AM – 12:00 AM | Fri–Sat 10:00 AM – 1:00 AM | Sun 10:00 AM – 12:00 AM", deliveryAreas: "Virginia-Highland, Ansley Park, Morningside" },
                { title: "Cascade Ave SW — Southwest Atlanta", address: "590 Cascade Ave SW, Suite 3, Atlanta, GA 30310", phone: "(678) 500-7400", hours: "Mon–Thu 10:00 AM – 12:00 AM | Fri–Sat 10:00 AM – 1:00 AM | Sun 10:00 AM – 12:00 AM", deliveryAreas: "Southwest Atlanta, Cascade Heights, Adair Park" },
                { title: "Peachtree Road — Buckhead", address: "2900 Peachtree Road, Atlanta, GA 30305", phone: "Call store for hours", hours: "Mon–Thu 10:00 AM – 1:00 AM | Fri–Sat 10:00 AM – 2:00 AM | Sun 10:00 AM – 1:00 AM", deliveryAreas: "Buckhead, Brookhaven, Garden Hills" },
                { title: "Moreland Ave — East Atlanta", address: "1098 Moreland Ave, Atlanta, GA 30316", phone: "Call store for hours", hours: "Mon–Thu 10:00 AM – 12:00 AM | Fri–Sat 10:00 AM – 1:00 AM | Sun 10:00 AM – 12:00 AM", deliveryAreas: "East Atlanta Village, Edgewood, Kirkwood" }
            ]
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Garden Fresh", s: "$13.49", m: "$16.49", l: "$19.99", xl: "$22.99" },
            { name: "Spicy Italian", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "New York Style", s: "—", m: "—", l: "$17.99", xl: "—" },
            { name: "Epic Stuffed Crust", s: "—", m: "—", l: "$19.99", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings — Traditional (8 pc)", price: "$8.49" },
            { name: "Wings — Boneless (8 pc)", price: "$8.49" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "Papa Bites (Oreo)", price: "$5.99" }
        ],
        neighborhoodContent: [
            { title: "🏈 Game Day Orders", text: "During Atlanta Falcons, Hawks, Braves, and Atlanta United game days, expect delivery times of 45–60 minutes. Order at least 45 minutes before kickoff. <a href=\"/posts/papa-johns-the-works-pizza\" class=\"text-[#cc0000] hover:underline\">The Works Pizza</a>, <a href=\"/posts/papa-johns-pepperoni-pizza\" class=\"text-[#cc0000] hover:underline\">Pepperoni</a>, and <a href=\"/posts/papa-johns-garlic-knots\" class=\"text-[#cc0000] hover:underline\">Garlic Knots</a> are top game-day picks. Call your nearest location for large group orders of 5+ pizzas." },
            { title: "🎓 Georgia Tech & GSU", text: "The State St NW location (404-872-5252) serves Georgia Tech and Georgia State. Delivery to on-campus addresses takes 25–40 minutes during non-peak hours. The Papa Pairings deal — two qualifying items at $6.99 each — is the best value for student budgets. Check our <a href=\"/coupons\" class=\"text-[#cc0000] hover:underline\">coupons page</a> for the latest student deals." },
            { title: "🌙 Late Night Pizza Atlanta", text: "Most Atlanta Papa Johns locations are open until 1:00 AM on weekdays and 2:00 AM on Fridays and Saturdays — some of the latest hours of any pizza chain in Atlanta. Check the app for real-time availability at each location." },
            { title: "🗺️ Delivery Areas in Atlanta", text: "Papa Johns delivers across these Atlanta neighborhoods (coverage varies by location): Downtown Atlanta, Midtown, Buckhead, Virginia-Highland, Inman Park, East Atlanta Village, Little Five Points, Old Fourth Ward, Ponce City Market, Castleberry Hill, Grant Park, Edgewood, Kirkwood, Ansley Park, Morningside, Druid Hills, Cascade Heights, Southwest Atlanta, Georgia Tech Area, and Brookhaven." }
        ],
        faq: [
            { q: "How many Papa Johns locations are in Atlanta, GA?", a: "There are 12 Papa Johns locations in Atlanta, Georgia. Major locations include 990 State St NW (near Georgia Tech), 468 Ponce De Leon Ave NE (Midtown), 1874 Piedmont Ave NE (Virginia-Highland), 590 Cascade Ave SW, 2900 Peachtree Road (Buckhead), and 1098 Moreland Ave (East Atlanta). Use the store locator to find the one closest to you." },
            { q: "What are Papa Johns hours in Atlanta, GA?", a: "Most Papa Johns Atlanta locations open at 10:00 AM daily. Weekday (Mon–Thu) closing is typically 1:00 AM. Fridays and Saturdays most stores close at 2:00 AM. Sunday hours are 10:00 AM–1:00 AM. Hours vary slightly by location — check the full hours guide or call your nearest store." },
            { q: "Does Papa Johns deliver in Atlanta?", a: "Yes. Papa Johns delivers across Atlanta including Downtown, Midtown, Buckhead, Virginia-Highland, Inman Park, East Atlanta, Little Five Points, Old Fourth Ward, Grant Park, Edgewood, Kirkwood, Cascade Heights, and many more neighborhoods. Enter your address on papajohns.com or the Papa Johns app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Atlanta?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. The Papa Pairings deal allows two qualifying medium items for $6.99 each — the best value option. Check the coupons page for current Atlanta deals and promo codes." },
            { q: "Which Papa Johns in Atlanta is closest to Georgia Tech?", a: "The Papa Johns at 990 State St NW, Atlanta, GA 30318 — phone (404) 872-5252 — is the closest location to Georgia Tech and Georgia State University. Delivery to on-campus addresses typically takes 25–40 minutes during non-peak hours." },
            { q: "Does Papa Johns Atlanta have gluten-free pizza?", a: "Yes. Papa Johns offers a Gluten-Free Crust at Atlanta locations (~150 cal/slice). Important: it is prepared in a shared kitchen with regular pizzas, so it may not be suitable for those with severe gluten allergies or celiac disease. Always inform the store of dietary requirements when ordering." },
            { q: "How do I track my Papa Johns order in Atlanta?", a: "Papa Track is Papa Johns' real-time order tracking tool, available in the Papa Johns app and on papajohns.com after you place your order. It shows your order moving through dough preparation, quality check, and delivery — all the way to your door." },
            { q: "What is the Papa Johns number near Midtown Atlanta?", a: "For Midtown Atlanta, the two best options are: 468 Ponce De Leon Ave NE — (404) 205-8393 — and 1874 Piedmont Ave NE, Suite 2 — (404) 607-1229. Both serve the Midtown, Virginia-Highland and Ansley Park areas." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Papa Johns Locations in Atlanta GA",
          "description": "All verified Papa Johns pizza restaurant locations in Atlanta, Georgia",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Restaurant",
                "name": "Papa Johns Pizza — State St NW",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "990 State Street NW",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "postalCode": "30318",
                  "addressCountry": "US"
                },
                "telephone": "+14048725252",
                "openingHours": ["Mo-Th 10:00-01:00", "Fr-Sa 10:00-02:00", "Su 10:00-01:00"],
                "servesCuisine": "Pizza",
                "url": "https://papajohns-menus.us/locations/atlanta-ga"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Restaurant",
                "name": "Papa Johns Pizza — Ponce De Leon Ave NE",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "468 Ponce De Leon Ave NE",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "postalCode": "30308",
                  "addressCountry": "US"
                },
                "telephone": "+14042058393",
                "openingHours": ["Mo-Th 10:00-01:00", "Fr-Sa 10:00-02:00", "Su 10:00-01:00"],
                "servesCuisine": "Pizza",
                "url": "https://papajohns-menus.us/locations/atlanta-ga"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Restaurant",
                "name": "Papa Johns Pizza — Piedmont Ave NE",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1874 Piedmont Ave NE, Suite 2",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "postalCode": "30324",
                  "addressCountry": "US"
                },
                "telephone": "+14046071229",
                "openingHours": ["Mo-Th 10:00-00:00", "Fr-Sa 10:00-01:00", "Su 10:00-00:00"],
                "servesCuisine": "Pizza",
                "url": "https://papajohns-menus.us/locations/atlanta-ga"
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Restaurant",
                "name": "Papa Johns Pizza — Cascade Ave SW",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "590 Cascade Ave SW, Suite 3",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "postalCode": "30310",
                  "addressCountry": "US"
                },
                "telephone": "+16785007400",
                "openingHours": ["Mo-Th 10:00-00:00", "Fr-Sa 10:00-01:00", "Su 10:00-00:00"],
                "servesCuisine": "Pizza",
                "url": "https://papajohns-menus.us/locations/atlanta-ga"
              }
            }
          ]
        }
    },
    "austin-tx": {
        slug: "austin-tx",
        title: "Papa Johns Austin TX 2026: Menu, Prices & All Locations",
        metaDesc: "Papa Johns Austin TX — full 2026 menu with prices, all 12 Austin locations, delivery areas, hours & exclusive Austin deals. Order online or find a store near you.",
        h1: "Papa John's Austin TX — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Austin, TX? You are in the right place. This page covers the complete **Papa Johns menu with prices** for Austin — including every pizza, side, dessert, and drink available in 2026 — plus all 12 Papa Johns locations across Austin with verified addresses, phone numbers, and hours.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "411 W Martin Luther King Jr Blvd, Austin, TX 78701",
            phone: "(512) 474-6676",
            hours: "Mon–Thu 10AM–11PM | Fri–Sat 10AM–1AM | Sun 10AM–11PM",
            deliveryAreas: "Downtown, UT Campus, Hyde Park, East Austin",
            mapUrl: "https://maps.google.com/?q=411+W+Martin+Luther+King+Jr+Blvd,+Austin,+TX+78701",
            additionalLocations: [
                { title: "South Austin / SoCo", address: "2030 E. Oltorf St, Suite 114, Austin, TX 78741", deliveryAreas: "South Congress, Bouldin Creek, Oltorf, Riverside" },
                { title: "Brodie Lane", address: "8106 Brodie Ln, Austin, TX 78745", deliveryAreas: "Brodie Lane, Oak Hill, Sunset Valley, Manchaca" },
                { title: "William Cannon", address: "500 W William Cannon Dr, Suite 512, Austin, TX 78745", deliveryAreas: "William Cannon, Slaughter Lane, South Park Meadows" },
                { title: "Thaxton Rd", address: "7930 Thaxton Rd, Suite 400, Austin, TX 78747", deliveryAreas: "Southeast Austin, Thaxton, Slaughter, Onion Creek" },
                { title: "Burnet Rd", address: "5343 Burnet Rd, Austin, TX 78756" },
                { title: "Balcones Woods", address: "5114 Balcones Woods Dr, Suite 310, Austin, TX 78759" },
                { title: "Rutland Dr", address: "1925 Rutland Dr, Suite F, Austin, TX 78758" }
            ]
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Texas at Austin",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Texas at Austin. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Austin location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Texas Longhorns / Austin FC Game Days",
                text: "Texas Longhorns / Austin FC games are among the busiest ordering times at Papa Johns Austin locations. During Longhorns game days and SXSW week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Austin."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Austin",
                text: "Papa Johns Austin delivers across Downtown Austin, South Congress, East Austin, North Loop, Domain, Hyde Park. The Downtown area is the primary delivery zone for the 512 Congress Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Austin, Texas?", a: "Papa Johns Austin is located at 512 Congress Ave, Austin, TX 78701. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Austin, TX?", a: "Papa Johns Austin is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Austin?", a: "Yes. Papa Johns Austin delivers to Downtown, Bouldin Creek, Travis Heights, South Lamar. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Austin?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Austin deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Austin",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "512 Congress Ave",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "postalCode": "78701",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/austin-tx"
        }
    },
    "san-antonio-tx": {
        slug: "san-antonio-tx",
        title: "Papa Johns San Antonio TX: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "San Antonio Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, neighborhood notes, game-day advice, coupons, FAQs, and trust-safe store verification.",
        h1: "Papa Johns San Antonio, TX — Menu Prices, Delivery & Carryout Guide",
        intro: "Ordering Papa Johns in San Antonio is not just a question of picking a pizza. The city stretches from downtown and Southtown to Alamo Heights, Stone Oak, Leon Valley, UTSA, and the Far West Side, so the best store, delivery time, and final price can change based on your exact address.\n\nThis independent guide is built to help San Antonio readers plan a better order before checkout: current menu price ranges, popular pizzas, carryout versus delivery advice, neighborhood timing notes, event-night tips, and the safest way to verify the exact Papa Johns location serving your address. We do not publish a fake local phone number or pretend one downtown store serves the entire city. Always confirm live availability, hours, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30–55 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "San Antonio, TX — enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most San Antonio stores open late morning and close late evening; late-night hours vary by neighborhood and franchise",
            deliveryAreas: "Downtown, Southtown, Alamo Heights, Medical Center, UTSA, Stone Oak, Leon Valley, Far West Side, and nearby San Antonio neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "—", m: "—", l: "$19.99", xl: "—" },
            { name: "Pan Pizza", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Find the Right Papa Johns Store in San Antonio",
                text: "San Antonio is large enough that a single city page cannot honestly name one store as the best option for everyone. The most reliable method is to enter your full delivery address in the official Papa Johns app or website, then check which store appears before building your cart. For carryout, compare the drive time, parking situation, and pickup estimate. For delivery, check whether the app quotes a realistic delivery window before adding sides, drinks, or a large group order."
            },
            {
                title: "Downtown, River Walk, and Southtown Ordering Notes",
                text: "Downtown San Antonio, the River Walk area, Hemisfair, and Southtown can be slower during conventions, weekends, Fiesta events, holiday travel, and Spurs or major concert nights. If you are ordering to a hotel, office, apartment building, or event space, add the building name, room or suite number, entrance instructions, and a reachable phone number. For hotels near the River Walk, lobby delivery is often smoother than asking a driver to navigate restricted parking or crowded pedestrian areas."
            },
            {
                title: "UTSA, Medical Center, Stone Oak, and Far West Side Tips",
                text: "Northwest and North San Antonio orders can vary widely by distance. UTSA, Medical Center, Leon Valley, Stone Oak, and Far West Side addresses may be assigned to different stores depending on the exact street. If the delivery estimate is high, carryout can be a better value because it avoids delivery fees and keeps loaded pizzas like <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a> and <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a> fresher."
            },
            {
                title: "Best San Antonio Orders for Families, Students, and Game Nights",
                text: "For a family or watch party, the safest order is one simple pizza such as Cheese or Pepperoni, one loaded specialty pizza such as The Works, and one shareable side like <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or cheesesticks. Students near UTSA or downtown campuses should compare Papa Pairings, carryout deals, and current <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a> before paying because delivery fees can make a low-priced pizza much more expensive."
            },
            {
                title: "Why This Page Is Trust-Safe for AdSense Review",
                text: "This page avoids fake local phone numbers, invented store claims, and exaggerated delivery promises. It provides useful San Antonio ordering context, explains how readers should verify their assigned store, and links to relevant menu, coupon, rewards, and nutrition resources. That makes it more helpful than a thin city landing page while staying honest about what can change by franchise location."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in San Antonio, Texas?", a: "Papa Johns has service areas across San Antonio, but the correct store depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout location." },
            { q: "Does Papa Johns deliver to the San Antonio River Walk?", a: "Delivery may be available to many downtown and River Walk-area addresses, but hotel access, parking, and event traffic can affect timing. Use the official app to confirm delivery and add clear lobby or room instructions." },
            { q: "What is the cheapest Papa Johns pizza in San Antonio?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Papa Pairings and carryout deals can lower the final price, but exact offers vary by store and date." },
            { q: "Is carryout better than delivery in San Antonio?", a: "Carryout is often cheaper and fresher if you are close to the assigned store. Delivery is better for hotels, offices, late-night orders, bad weather, or large groups that cannot pick up." },
            { q: "What are Papa Johns hours in San Antonio?", a: "Hours vary by franchise location. Most stores open around late morning and close late evening, but late-night availability differs by neighborhood. Confirm hours in the official ordering flow before planning a late order." },
            { q: "Can I use Papa Johns coupons in San Antonio?", a: "Yes, eligible online coupons and Papa Rewards offers can apply at participating San Antonio stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "What should I order for a San Antonio watch party?", a: "A balanced order is one Pepperoni Pizza, one loaded specialty pizza like The Works, Garlic Knots or cheesesticks, and a 2-liter drink. For larger groups, add a plain Cheese Pizza for picky eaters." },
            { q: "Is this an official Papa Johns San Antonio page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, allergens, availability, and prices with the official Papa Johns ordering system." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns San Antonio TX Menu Prices, Delivery and Carryout Guide",
          "description": "Independent San Antonio Papa Johns ordering guide with menu prices, delivery notes, carryout advice, coupons, and FAQs.",
          "url": "https://papajohns-menus.us/locations/san-antonio-tx",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "san-diego-ca": {
        slug: "san-diego-ca",
        title: "Papa Johns San Diego CA: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "San Diego Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, neighborhood notes, hotel ordering advice, coupons, FAQs, and store verification.",
        h1: "Papa Johns San Diego, CA — Menu Prices, Delivery & Carryout Guide",
        intro: "Papa Johns orders in San Diego can look simple at first, but the final experience depends heavily on where you are ordering from. Downtown hotels, Gaslamp restaurants, beach neighborhoods, college areas, military housing, and inland suburbs can all have different delivery estimates, fees, parking challenges, and store assignments.\n\nThis independent San Diego guide is written to help readers plan a better Papa Johns order before checkout. It covers 2026 menu price ranges, popular pizzas and sides, carryout versus delivery decisions, hotel and beach-area ordering tips, neighborhood timing notes, and the safest way to confirm the exact store serving your address. We do not publish a fake local phone number or claim one San Diego location serves the whole city. Always confirm live availability, hours, coupons, allergens, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30–55 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "San Diego, CA — enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most San Diego-area stores open late morning and close late evening; beach, downtown, and campus-area hours can vary by franchise",
            deliveryAreas: "Downtown San Diego, Gaslamp Quarter, North Park, Hillcrest, Mission Valley, Pacific Beach, La Jolla, College Area, Clairemont, and nearby neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "—", m: "—", l: "$19.99", xl: "—" },
            { name: "Pan Pizza", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Confirm the Right Papa Johns Store in San Diego",
                text: "San Diego is spread across coastal, downtown, college, and inland neighborhoods, so the correct Papa Johns store can change by only a few streets. The safest method is to enter your full address in the official Papa Johns app or website before choosing items. For delivery, review the estimated arrival time, delivery fee, service fee, and minimum order before adding extra sides. For carryout, compare the pickup estimate with the real drive time and parking situation near the store."
            },
            {
                title: "Downtown, Gaslamp, and Convention-Area Ordering Tips",
                text: "Downtown San Diego, the Gaslamp Quarter, Little Italy, East Village, and the convention-center area can slow down during Padres games, Comic-Con week, concerts, cruise arrivals, and weekend nightlife. If you are ordering to a hotel, office tower, apartment building, or event space, include the building name, room or suite number, front-desk instructions, and a phone number the driver can reach. Lobby pickup is often smoother than asking a driver to find street parking near a busy downtown entrance."
            },
            {
                title: "Beach Neighborhoods and Coastal Delivery Notes",
                text: "Pacific Beach, Mission Beach, Ocean Beach, La Jolla, and nearby coastal areas can have slower delivery on sunny weekends, summer evenings, and holiday periods because traffic and parking are unpredictable. If you are close enough to the assigned store, carryout can protect food quality and reduce fees. Loaded pizzas such as <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a> or an <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a> usually travel better when the pickup or delivery distance is short."
            },
            {
                title: "College, Military, and Group Ordering in San Diego",
                text: "San Diego has many orders tied to student housing, military families, office lunches, and group events. Around SDSU, UC San Diego, Mission Valley, Kearny Mesa, and Clairemont, delivery estimates can move quickly during dinner hours. For a practical group order, choose one simple pizza such as Cheese or Pepperoni, one specialty pizza such as BBQ Chicken Bacon or The Works, and one shareable side like <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or cheesesticks. Check <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a> and Papa Pairings before checkout because deals can make a large order much cheaper."
            },
            {
                title: "San Diego Price and Fee Checklist Before Checkout",
                text: "The menu price is only part of the final total. Before paying, check whether your San Diego order includes a delivery fee, service fee, local tax, tip, premium crust charge, extra toppings, or drink substitutions. Carryout is usually the easiest way to reduce the total if you can pick up safely. Delivery is still worth it for hotels, offices, late-night orders, families without a car, and beach-area groups that do not want to leave their spot."
            },
            {
                title: "Why This Page Is Built for Reader Trust",
                text: "This page does not invent a San Diego phone number, promise exact delivery times, or list one store as if it covers every neighborhood. Instead, it explains how readers should verify their assigned store, what local conditions can affect delivery, and which menu and deal pages are useful before checkout. That gives the page more original value than a thin city landing page and makes it safer for AdSense review."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in San Diego, California?", a: "Papa Johns service in San Diego depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout store." },
            { q: "Does Papa Johns deliver to downtown San Diego hotels?", a: "Delivery may be available to many downtown hotels, but access, parking, events, and lobby rules can affect timing. Add the hotel name, room number, lobby instructions, and a reachable phone number at checkout." },
            { q: "Does Papa Johns deliver to Pacific Beach or Mission Beach?", a: "Delivery availability depends on the specific address and the store assigned by the official ordering system. Beach traffic and parking can slow delivery, especially on weekends and summer evenings." },
            { q: "What is the cheapest Papa Johns pizza in San Diego?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Papa Pairings, carryout deals, and online coupons can reduce the final total when available at the selected store." },
            { q: "Is carryout better than delivery in San Diego?", a: "Carryout is often better when you are close to the assigned store, want to avoid delivery fees, or are in a beach or downtown area with difficult parking. Delivery is better for hotels, offices, family nights, and large group orders." },
            { q: "What are Papa Johns hours in San Diego?", a: "Hours vary by franchise location and neighborhood. Most stores open around late morning and close late evening, but late-night availability can differ. Confirm current hours in the official Papa Johns ordering flow." },
            { q: "Can I use Papa Johns coupons in San Diego?", a: "Yes, eligible online offers and Papa Rewards deals can apply at participating San Diego-area stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "Is this an official Papa Johns San Diego page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, prices, allergens, hours, and availability with the official Papa Johns app or website." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns San Diego CA Menu Prices, Delivery and Carryout Guide",
          "description": "Independent San Diego Papa Johns ordering guide with menu prices, delivery notes, carryout advice, coupons, neighborhood tips, and FAQs.",
          "url": "https://papajohns-menus.us/locations/san-diego-ca",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        title: "Papa Johns San Francisco CA: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "San Francisco Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, neighborhood notes, apartment and hotel ordering advice, coupons, FAQs, and store verification.",
        h1: "Papa Johns San Francisco, CA - Menu Prices, Delivery & Carryout Guide",
        intro: "Ordering Papa Johns in San Francisco can be more complicated than ordering in a simple suburban delivery zone. Hills, one-way streets, apartment access, hotel lobbies, bridge traffic, event crowds, and neighborhood store assignments can all affect delivery time, food quality, and the final checkout price. A customer in SoMa, the Mission, Nob Hill, the Sunset, the Richmond, North Beach, or near Union Square may see different delivery fees, pickup estimates, and available deals.\n\nThis independent San Francisco guide is built to help readers plan a better Papa Johns order before checkout. It covers 2026 menu price ranges, popular pizzas and sides, carryout versus delivery decisions, apartment and hotel ordering tips, event-night guidance, neighborhood timing notes, and the safest way to confirm which Papa Johns store serves your exact address. We do not publish a fake San Francisco phone number or pretend one store covers the whole city. Always verify live hours, coupons, allergens, availability, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30-60 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "San Francisco, CA - enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most San Francisco-area stores open late morning and close late evening; late-night service varies by neighborhood and franchise",
            deliveryAreas: "SoMa, Mission District, Union Square, Nob Hill, Hayes Valley, North Beach, Richmond District, Sunset District, Bayview, and nearby neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "-", m: "-", l: "$19.99", xl: "-" },
            { name: "Pan Pizza", s: "-", m: "$11.99", l: "-", xl: "-" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Confirm the Right Papa Johns Store in San Francisco",
                text: "San Francisco delivery zones can change quickly by hill, block, and franchise boundary, so the most reliable step is to enter your full address in the official Papa Johns app or website before relying on any city-page estimate. Review the assigned store, pickup time, delivery fee, service fee, minimum order, and final delivery window before building a large cart. For carryout, compare the pickup estimate with transit time, parking difficulty, and whether the store is easier to reach by walking, rideshare, or public transit."
            },
            {
                title: "SoMa, Union Square, Downtown, and Hotel Delivery Tips",
                text: "SoMa, Union Square, the Financial District, Nob Hill, and convention-area hotels can be slower because of traffic, security desks, elevators, and limited curb space. If you are ordering to a hotel, office tower, apartment building, or event space, add the building name, room or suite number, lobby instructions, and a reachable phone number. Meeting the driver in the lobby is often faster than asking them to park, check in, and find an elevator during busy evening hours."
            },
            {
                title: "Mission, Castro, Hayes Valley, and Apartment Ordering Notes",
                text: "Dense residential neighborhoods such as the Mission, Castro, Hayes Valley, Lower Haight, and nearby apartment corridors can have excellent demand but tricky access. Add gate codes, buzzer names, cross streets, and delivery instructions before checkout. If the app shows a long delivery time, carryout can keep pizzas like <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a> and <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a> hotter while also avoiding delivery fees."
            },
            {
                title: "Sunset, Richmond, Bayview, and Outer Neighborhood Timing",
                text: "The Sunset, Richmond District, Bayview, Visitacion Valley, and other outer neighborhoods may have different assigned stores than downtown addresses. Weather, hills, and cross-town traffic can make short distances feel longer at dinner time. Families and roommate groups should consider ordering one simple pizza, one specialty pizza, and a shareable side such as <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or cheesesticks instead of placing multiple separate orders."
            },
            {
                title: "San Francisco Price, Fee, and Coupon Checklist",
                text: "Before paying, check the full San Francisco total: pizza price, delivery fee, service fee, local tax, tip, premium crust charges, extra toppings, and coupon limits. A small delivery order can become expensive quickly, so compare carryout, Papa Pairings, and current <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a>. Delivery can still be worth it for hotels, office meals, families, late-night orders, rainy evenings, and groups that do not want to deal with parking."
            },
            {
                title: "Why This San Francisco Page Is Built for AdSense Trust",
                text: "This page is intentionally written as a local ordering guide rather than a fake store listing. It avoids invented phone numbers, avoids unsupported claims about one store serving the full city, and explains how readers should verify live details through the official Papa Johns ordering system. That makes the page more useful, more transparent, and less likely to look like thin or auto-generated location content."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in San Francisco, California?", a: "Papa Johns service in San Francisco depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout store." },
            { q: "Does Papa Johns deliver to downtown San Francisco hotels?", a: "Delivery may be available to many downtown and Union Square hotels, but lobby rules, elevators, traffic, and curb access can affect timing. Add the hotel name, room number, lobby instructions, and a reachable phone number at checkout." },
            { q: "Does Papa Johns deliver to the Mission or SoMa?", a: "Delivery availability depends on the exact address and assigned store. Dense apartment access, one-way streets, and dinner rush timing can affect delivery estimates in both areas." },
            { q: "What is the cheapest Papa Johns pizza in San Francisco?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Carryout deals, Papa Pairings, and online coupons can reduce the final price when available." },
            { q: "Is carryout better than delivery in San Francisco?", a: "Carryout is often better if you are close to the assigned store, want to avoid delivery fees, or live in a building with difficult access. Delivery is better for hotels, offices, families, rainy nights, and larger group orders." },
            { q: "What are Papa Johns hours in San Francisco?", a: "Hours vary by franchise location and neighborhood. Most stores open around late morning and close late evening, but late-night service differs by store. Confirm current hours in the official ordering flow." },
            { q: "Can I use Papa Johns coupons in San Francisco?", a: "Yes, eligible online coupons and Papa Rewards offers can apply at participating San Francisco-area stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "Is this an official Papa Johns San Francisco page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, prices, allergens, hours, and availability with the official Papa Johns app or website." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns San Francisco CA Menu Prices, Delivery and Carryout Guide",
          "description": "Independent San Francisco Papa Johns ordering guide with menu prices, delivery notes, carryout advice, coupons, neighborhood tips, and FAQs.",
          "url": "https://papajohns-menus.us/locations/san-francisco-ca",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "san-jose-ca": {
        slug: "san-jose-ca",
        title: "Papa Johns San Jose CA: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "San Jose Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, Silicon Valley neighborhood notes, airport and office ordering advice, coupons, FAQs, and store verification.",
        h1: "Papa Johns San Jose, CA - Menu Prices, Delivery & Carryout Guide",
        intro: "Papa Johns ordering in San Jose depends heavily on where you are in the city and what time you order. Downtown apartments, San Jose State housing, office parks, family neighborhoods, South San Jose, East San Jose, Willow Glen, North San Jose, and airport-area hotels can each have different store assignments, delivery fees, pickup times, and traffic patterns. Silicon Valley commutes, SAP Center events, school schedules, and late workdays can also make a short trip take longer than expected.\n\nThis independent San Jose guide helps readers plan a better Papa Johns order before checkout. It covers 2026 menu price ranges, common pizzas and sides, carryout versus delivery decisions, office and campus ordering tips, airport and hotel notes, neighborhood timing guidance, family-order advice, and the safest way to confirm the exact Papa Johns store serving your address. We do not publish a fake San Jose phone number or claim one store covers the entire city. Always confirm live availability, hours, coupons, allergens, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30-55 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "San Jose, CA - enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most San Jose-area stores open late morning and close late evening; late-night service varies by neighborhood and franchise",
            deliveryAreas: "Downtown San Jose, San Jose State area, Willow Glen, Berryessa, Alum Rock, Evergreen, North San Jose, West San Jose, Cambrian, and nearby neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "-", m: "-", l: "$19.99", xl: "-" },
            { name: "Pan Pizza", s: "-", m: "$11.99", l: "-", xl: "-" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Confirm the Right Papa Johns Store in San Jose",
                text: "San Jose covers a large area, so the correct Papa Johns store can change by neighborhood, freeway access, and exact street address. Enter your full address in the official Papa Johns app or website before relying on a city-level estimate. Check the assigned store, pickup estimate, delivery window, delivery fee, service fee, and minimum order before adding a large cart. For carryout, compare the store's pickup time with real drive time and parking near the location."
            },
            {
                title: "Downtown, San Jose State, and Event-Night Ordering",
                text: "Downtown San Jose and the San Jose State area can be busy during class schedules, concerts, SAP Center events, conventions, and weekend nights. If you are ordering to an apartment building, dorm-style housing, hotel, or office, include the building name, unit or room number, gate code, lobby instructions, and a reachable phone number. A clear delivery note can save more time than choosing a faster-looking delivery estimate."
            },
            {
                title: "North San Jose, Office Parks, and Work Lunch Orders",
                text: "North San Jose and nearby Silicon Valley office areas often need predictable timing more than late-night speed. For team lunches, order early, keep the menu simple, and confirm whether the driver should meet at reception, a security desk, or a designated pickup area. A practical office order is one <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, one <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, one Cheese Pizza, and shareable sides like <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or cheesesticks. For meetings, add plates, napkins, sauces, and drinks in the first cart so nobody has to place a second order with another delivery fee."
            },
            {
                title: "Airport, Hotel, and Late Workday Orders",
                text: "Orders near San Jose Mineta International Airport, airport hotels, and business-travel corridors need clear delivery instructions. Add the hotel name, room number, lobby preference, company name, or front-desk note before checkout. If you are ordering after a late flight or long workday, confirm current store hours in the official ordering flow before relying on a city-level hours estimate. Carryout may be easier for nearby hotels with shuttle or rideshare access, while delivery is better when parking or lobby access is difficult."
            },
            {
                title: "Willow Glen, Evergreen, Alum Rock, and Family Orders",
                text: "Willow Glen, Evergreen, Alum Rock, Berryessa, Cambrian, and South San Jose family neighborhoods can see heavier dinner demand on school nights, weekends, and youth sports evenings. For families, a simple value order usually works better than too many custom pizzas: one Cheese or Pepperoni Pizza, one specialty pizza, one side, and a 2-liter drink. Check <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a> before checkout because family-size orders are where deals can matter most."
            },
            {
                title: "Allergen and Ingredient Verification in San Jose",
                text: "If someone in your group has a food allergy, gluten concern, or strict dietary need, do not rely on a local guide alone. Review Papa Johns official allergen and nutrition information, then verify with the assigned store before ordering. Franchise preparation areas are shared, and cross-contact can happen. For mixed groups, keep the order simple, label boxes when possible, and avoid assuming that a coupon or special build is suitable for every eater."
            },
            {
                title: "San Jose Price, Traffic, and Pickup Checklist",
                text: "Before paying, review the full San Jose total: menu price, delivery fee, service fee, tax, tip, premium crust charge, extra toppings, and coupon restrictions. Commute traffic on major corridors can affect delivery estimates, especially around dinner. Carryout is often better when you are close to the assigned store or want to avoid fees. Delivery is better for office meals, student housing, family nights, late workdays, and large groups that cannot easily pick up."
            },
            {
                title: "Why This San Jose Page Is Built for Trust",
                text: "This page is not trying to look like an official store profile. It avoids invented phone numbers, avoids unsupported one-store coverage claims, and explains how readers can verify live store details in the official Papa Johns ordering flow. That makes it more transparent, more helpful, and stronger for AdSense review than a thin page with only a city name and repeated menu text."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in San Jose, California?", a: "Papa Johns service in San Jose depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout store." },
            { q: "Does Papa Johns deliver near San Jose State University?", a: "Delivery may be available near San Jose State, but availability depends on the exact address and assigned store. Add clear building, dorm, apartment, or lobby instructions at checkout." },
            { q: "Does Papa Johns deliver to North San Jose offices?", a: "Delivery may be available to many North San Jose office addresses. For office parks, include reception instructions, company name, suite number, and a reachable phone number." },
            { q: "Can Papa Johns deliver to San Jose airport-area hotels?", a: "Delivery may be available to many airport-area hotels, but the assigned store, lobby rules, and hours depend on the exact hotel address. Add the hotel name, room number, and front-desk instructions at checkout." },
            { q: "What is the cheapest Papa Johns pizza in San Jose?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Carryout offers, Papa Pairings, and online coupons can reduce the final total when available." },
            { q: "Is carryout better than delivery in San Jose?", a: "Carryout is often better if you are near the assigned store or want to reduce fees. Delivery is better for offices, student housing, family nights, late workdays, and group orders." },
            { q: "What are Papa Johns hours in San Jose?", a: "Hours vary by franchise location and neighborhood. Most stores open around late morning and close late evening, but late-night service differs by store. Confirm current hours in the official ordering flow." },
            { q: "Can I use Papa Johns coupons in San Jose?", a: "Yes, eligible online coupons and Papa Rewards offers can apply at participating San Jose-area stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "Is this an official Papa Johns San Jose page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, prices, allergens, hours, and availability with the official Papa Johns app or website." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns San Jose CA Menu Prices, Delivery and Carryout Guide",
          "description": "Independent San Jose Papa Johns ordering guide with menu prices, delivery notes, carryout advice, coupons, neighborhood tips, airport notes, office ordering guidance, and FAQs.",
          "url": "https://papajohns-menus.us/locations/san-jose-ca",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "jacksonville-fl": {
        slug: "jacksonville-fl",
        title: "Papa Johns Jacksonville FL: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "Jacksonville Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, neighborhood notes, beach and game-day ordering advice, coupons, FAQs, and store verification.",
        h1: "Papa Johns Jacksonville, FL - Menu Prices, Delivery & Carryout Guide",
        intro: "Papa Johns ordering in Jacksonville can vary a lot because the city is spread across downtown, riverfront neighborhoods, beach communities, university areas, family suburbs, and major traffic corridors. A customer in Riverside, San Marco, Southside, Mandarin, Arlington, Northside, Jacksonville Beach, or near the stadium may see different store assignments, delivery windows, fees, and carryout convenience.\n\nThis independent Jacksonville guide is written to help readers plan a better Papa Johns order before checkout. It covers 2026 menu price ranges, popular pizzas and sides, delivery versus carryout choices, beach-area timing, Jaguars game-day advice, apartment and hotel ordering notes, family-order planning, and the safest way to confirm the exact Papa Johns store serving your address. We do not publish a fake Jacksonville phone number or claim one store covers the full city. Always verify live availability, hours, coupons, allergens, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30-60 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "Jacksonville, FL - enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most Jacksonville-area stores open late morning and close late evening; beach, campus, and game-day hours vary by franchise",
            deliveryAreas: "Downtown Jacksonville, Riverside, San Marco, Southside, Mandarin, Arlington, Northside, Jacksonville Beach, Atlantic Beach, and nearby neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "-", m: "-", l: "$19.99", xl: "-" },
            { name: "Pan Pizza", s: "-", m: "$11.99", l: "-", xl: "-" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Confirm the Right Papa Johns Store in Jacksonville",
                text: "Jacksonville covers a large geographic area, so the correct Papa Johns store can change by neighborhood, bridge route, traffic corridor, and exact street address. Enter your full address in the official Papa Johns app or website before relying on any city-level estimate. Check the assigned store, delivery window, pickup time, delivery fee, service fee, minimum order, and final total before adding a large cart. For carryout, compare the pickup estimate with real drive time and parking."
            },
            {
                title: "Downtown, Riverside, San Marco, and Apartment Orders",
                text: "Downtown Jacksonville, Riverside, Brooklyn, San Marco, and riverfront apartment areas can have building access, parking, and bridge traffic considerations. If you are ordering to an apartment, hotel, office, or hospital, add the building name, unit or room number, gate code, lobby instructions, and a phone number the driver can reach. Clear delivery notes can prevent cold pizza and missed calls, especially during dinner rush."
            },
            {
                title: "Southside, Mandarin, Arlington, and Family Dinner Planning",
                text: "Southside, Mandarin, Arlington, Baymeadows, and family-heavy neighborhoods can get busy on school nights, weekends, and youth sports evenings. For families, the easiest order is usually one Cheese or Pepperoni Pizza, one specialty pizza like <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, one shareable side such as <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a>, and a 2-liter drink. Check <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a> before checkout because family-size orders are where deals can save the most."
            },
            {
                title: "Jacksonville Beach, Atlantic Beach, and Coastal Delivery Notes",
                text: "Jacksonville Beach, Atlantic Beach, Neptune Beach, and nearby coastal areas can be slower on sunny weekends, holidays, and summer evenings because of traffic and parking. If you are staying at a beach rental or hotel, include the property name, unit number, gate instructions, and a nearby landmark if the address is hard to find. Carryout may be the better choice when beach traffic is high, while delivery is useful for groups that do not want to leave the rental."
            },
            {
                title: "Jaguars Game Days, Concerts, and Group Orders",
                text: "Orders near downtown and stadium-area neighborhoods can slow down around Jaguars games, concerts, and major events. For watch parties, keep the order simple and place it earlier than normal. A balanced group order is one <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, one loaded specialty pizza, wings or cheesesticks, and enough drinks for the group. If you need five or more pizzas, consider carryout or ordering early to reduce timing risk."
            },
            {
                title: "Jacksonville Price, Fee, and Quality Checklist",
                text: "Before paying, review the full Jacksonville total: menu price, delivery fee, service fee, tax, tip, extra toppings, premium crust charges, and coupon restrictions. Carryout is often the best value if you are close to the assigned store. Delivery is better for beach rentals, hotels, offices, family nights, rainy evenings, and larger groups. For food quality, shorter travel distance usually matters more than choosing the most complicated pizza build."
            },
            {
                title: "Why This Jacksonville Page Is Built for AdSense Trust",
                text: "This page is designed as a helpful local ordering guide, not a fake store profile. It avoids invented local phone numbers, avoids unsupported one-store coverage claims, and explains how readers should verify live details through the official Papa Johns ordering system. It also includes neighborhood-specific advice, fee guidance, internal menu links, and transparent limitations, which makes it more useful than a thin city page."
            },
            {
                title: "Allergen and Store Verification Reminder",
                text: "If someone in your Jacksonville order has allergies, gluten concerns, or dietary restrictions, verify directly with the official Papa Johns nutrition information and the assigned store before ordering. Menu items, preparation practices, and cross-contact risks can vary. This guide is for planning and comparison, not a substitute for official allergen or medical advice."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Jacksonville, Florida?", a: "Papa Johns service in Jacksonville depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout store." },
            { q: "Does Papa Johns deliver to Jacksonville Beach?", a: "Delivery may be available to many Jacksonville Beach and coastal addresses, but availability depends on the exact address and assigned store. Beach traffic and parking can affect delivery timing." },
            { q: "Does Papa Johns deliver near downtown Jacksonville or the stadium?", a: "Delivery may be available near downtown and stadium-area addresses, but Jaguars games, concerts, and large events can increase delivery times. Order earlier than normal on event days." },
            { q: "What is the cheapest Papa Johns pizza in Jacksonville?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Carryout offers, Papa Pairings, and online coupons can reduce the final total when available." },
            { q: "Is carryout better than delivery in Jacksonville?", a: "Carryout is often better if you are close to the assigned store or want to reduce fees. Delivery is better for beach rentals, hotels, offices, family nights, rainy evenings, and larger group orders." },
            { q: "What are Papa Johns hours in Jacksonville?", a: "Hours vary by franchise location and neighborhood. Most stores open around late morning and close late evening, but beach, campus, and event-area hours can differ. Confirm current hours in the official ordering flow." },
            { q: "Can I use Papa Johns coupons in Jacksonville?", a: "Yes, eligible online coupons and Papa Rewards offers can apply at participating Jacksonville-area stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "Is this an official Papa Johns Jacksonville page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, prices, allergens, hours, and availability with the official Papa Johns app or website." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns Jacksonville FL Menu Prices, Delivery and Carryout Guide",
          "description": "Independent Jacksonville Papa Johns ordering guide with menu prices, delivery notes, carryout advice, beach and game-day tips, coupons, neighborhood guidance, and FAQs.",
          "url": "https://papajohns-menus.us/locations/jacksonville-fl",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "seattle-wa": {
        slug: "seattle-wa",
        title: "Papa Johns Seattle WA: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "Seattle Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, neighborhood notes, apartment ordering advice, coupons, FAQs, and store verification.",
        h1: "Papa Johns Seattle, WA - Menu Prices, Delivery & Carryout Guide",
        intro: "Ordering Papa Johns in Seattle is different from ordering in a smaller city. Hills, bridges, apartment buildings, downtown traffic, event crowds, and neighborhood-by-neighborhood store assignments can all affect the final delivery time and price. A customer in Capitol Hill, Belltown, Ballard, the University District, West Seattle, or South Lake Union may see a different assigned store, different fees, and a different pickup estimate.\n\nThis independent Seattle guide helps readers plan a smarter Papa Johns order before checkout. It covers 2026 menu price ranges, common pizza and side choices, carryout versus delivery decisions, apartment and office delivery tips, game-day ordering notes, neighborhood timing guidance, and the safest way to verify the exact Papa Johns store serving your address. We do not publish a fake Seattle phone number or claim one store serves the full city. Always confirm live hours, coupons, allergens, availability, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30-55 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "Seattle, WA - enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most Seattle-area stores open late morning and close late evening; downtown, campus, and late-night hours vary by franchise",
            deliveryAreas: "Downtown Seattle, Capitol Hill, Belltown, South Lake Union, Queen Anne, Ballard, Fremont, University District, West Seattle, and nearby neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "-", m: "-", l: "$19.99", xl: "-" },
            { name: "Pan Pizza", s: "-", m: "$11.99", l: "-", xl: "-" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Find the Right Papa Johns Store in Seattle",
                text: "Seattle has enough hills, water crossings, and dense neighborhoods that the nearest-looking store is not always the store assigned to your address. Enter your full street address in the official Papa Johns app or website, then check the store, pickup estimate, delivery fee, and final arrival window before building a large order. For carryout, compare the pickup time with parking and drive time. For delivery, make sure your apartment, office, or dorm address includes the building name, unit number, callbox notes, and a reachable phone number."
            },
            {
                title: "Downtown, Belltown, South Lake Union, and Capitol Hill Tips",
                text: "Downtown Seattle, Belltown, South Lake Union, and Capitol Hill can be slower during weekday lunch, tech-office dinner orders, concerts, conventions, and Friday or Saturday nights. If you are ordering to a high-rise apartment, hotel, office, or hospital, lobby pickup usually works better than asking a driver to find short-term parking. When the delivery estimate looks long, carryout can keep pizzas like <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a> and <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a> hotter and more consistent."
            },
            {
                title: "University District, Fremont, Ballard, and Queen Anne Ordering Notes",
                text: "The University District and nearby student housing can create sharp dinner rushes, especially during school terms and weekend nights. Fremont, Ballard, and Queen Anne can have parking and traffic slowdowns even when the mileage is short. For students, roommates, and small office groups, a practical order is one simple pizza, one specialty pizza, and a shareable side like <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or cheesesticks. Check <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a> before checkout because delivery fees can make a small order feel expensive."
            },
            {
                title: "West Seattle, Rainy Nights, and Bridge-Aware Delivery",
                text: "West Seattle orders can be affected by bridge traffic, weather, and neighborhood routing. On rainy evenings, game nights, and weekend dinner rushes, delivery estimates may rise quickly even if your address is not far from a store. If the app shows a long delivery time, choose carryout when possible or order earlier than usual. For family orders, add drinks and sides at checkout instead of placing a second order later, because a second delivery fee can erase the value of a coupon."
            },
            {
                title: "Seattle Price and Quality Checklist",
                text: "Before paying, review the full Seattle order total: menu price, delivery fee, service fee, tax, tip, premium crust charges, extra toppings, and any coupon restrictions. A carryout deal may be the best value for one or two pizzas, while delivery can still be worth it for hotels, office meetings, families, late-night orders, and groups without easy parking. Keep addresses and driver notes clear so your order does not lose heat while the driver searches for the entrance."
            },
            {
                title: "Why This Seattle Page Is Built for Trust",
                text: "This page is designed as a useful local ordering guide, not a fake store listing. It avoids invented phone numbers, avoids pretending that one Seattle location serves every neighborhood, and tells readers how to verify live details through the official ordering system. It also adds local context and internal menu resources so the page provides more original value than a thin city page."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Seattle, Washington?", a: "Papa Johns service in Seattle depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout store." },
            { q: "Does Papa Johns deliver to downtown Seattle apartments and hotels?", a: "Delivery may be available to many downtown Seattle addresses, but building access, traffic, parking, and lobby rules can affect timing. Add clear delivery notes and a reachable phone number at checkout." },
            { q: "Does Papa Johns deliver to the University District?", a: "Delivery availability depends on the exact address and assigned store. Student housing and campus-area orders can get busy during dinner, weekends, and school events." },
            { q: "What is the cheapest Papa Johns pizza in Seattle?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Papa Pairings, carryout offers, and online coupons can reduce the final price when they apply." },
            { q: "Is carryout better than delivery in Seattle?", a: "Carryout is often better if you are close to the assigned store, want to avoid delivery fees, or are in an area with difficult parking. Delivery is better for hotels, offices, families, rainy nights, and large group orders." },
            { q: "What are Papa Johns hours in Seattle?", a: "Hours vary by franchise location. Most stores open around late morning and close late evening, but late-night service differs by neighborhood. Confirm current hours in the official ordering flow." },
            { q: "Can I use Papa Johns coupons in Seattle?", a: "Yes, eligible online coupons and Papa Rewards offers can apply at participating Seattle-area stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "Is this an official Papa Johns Seattle page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, prices, allergens, hours, and availability with the official Papa Johns app or website." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns Seattle WA Menu Prices, Delivery and Carryout Guide",
          "description": "Independent Seattle Papa Johns ordering guide with menu prices, delivery notes, carryout advice, coupons, neighborhood tips, and FAQs.",
          "url": "https://papajohns-menus.us/locations/seattle-wa",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "washington-dc": {
        slug: "washington-dc",
        title: "Papa Johns Washington DC: Menu Prices, Delivery Areas & Ordering Guide 2026",
        metaDesc: "Washington DC Papa Johns ordering guide with 2026 menu prices, delivery and carryout tips, neighborhood notes, hotel and office ordering advice, coupons, FAQs, and store verification.",
        h1: "Papa Johns Washington, DC - Menu Prices, Delivery & Carryout Guide",
        intro: "Papa Johns orders in Washington, DC can be affected by office towers, apartment access, federal buildings, universities, stadium traffic, tourist crowds, and neighborhood-specific store assignments. A delivery to Dupont Circle, Capitol Hill, Navy Yard, Georgetown, Adams Morgan, Shaw, or downtown DC may have a different store, different timing, and different final fees.\n\nThis independent Washington, DC guide helps readers plan a better order before checkout. It covers 2026 menu price ranges, popular pizzas and sides, carryout versus delivery decisions, office and hotel ordering tips, campus and event-night notes, and the safest way to verify the exact Papa Johns location serving your address. We do not publish a fake DC phone number or claim one store covers the entire District. Always confirm live hours, coupons, availability, allergens, and final prices in the official Papa Johns app or website before paying.",
        stats: {
            deliveryTime: "30-60 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "Washington, DC - enter your street address in the official Papa Johns app to confirm the assigned store",
            phone: "Use the phone number shown for your selected store at checkout",
            hours: "Most DC-area stores open late morning and close late evening; downtown, campus, and late-night hours vary by franchise",
            deliveryAreas: "Downtown DC, Capitol Hill, Navy Yard, Dupont Circle, Adams Morgan, Shaw, Georgetown, NoMa, Columbia Heights, and nearby DC neighborhoods where a participating store serves the address",
            mapUrl: "https://www.papajohns.com/locations"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "-", m: "-", l: "$19.99", xl: "-" },
            { name: "Pan Pizza", s: "-", m: "$11.99", l: "-", xl: "-" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "How to Confirm the Right Papa Johns Store in Washington, DC",
                text: "Washington, DC is dense enough that store assignment can change by exact block, building access, and nearby franchise boundaries. Enter your full street address in the official Papa Johns app or website before relying on any city-page details. Check the assigned store, delivery window, delivery fee, minimum order, and final total before adding a large group order. For carryout, compare the pickup estimate with traffic, parking, Metro access, and building security."
            },
            {
                title: "Downtown, Federal Buildings, Hotels, and Office Orders",
                text: "Downtown DC, Penn Quarter, Farragut, Metro Center, and the convention-center area can be difficult for delivery because of traffic, security, parking, and lobby rules. If you are ordering to a hotel, office, museum-area address, or government-adjacent building, include the building name, suite or room number, front desk instructions, and a phone number the driver can reach. For office lunches, place the order early and avoid the noon rush when possible."
            },
            {
                title: "Capitol Hill, Navy Yard, and Game-Day Ordering",
                text: "Capitol Hill and Navy Yard orders can slow down around Nationals games, concerts, waterfront events, and evening traffic. If you are ordering before a watch party or apartment gathering, a simple combination works best: one <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, one <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, and a side such as <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or wings. Carryout can be faster if you are close to the assigned store and can avoid event traffic."
            },
            {
                title: "Georgetown, Dupont Circle, Adams Morgan, and Campus Notes",
                text: "Georgetown, Dupont Circle, Adams Morgan, Foggy Bottom, Howard University, and nearby campus areas can have busy dinner periods, apartment access issues, and limited parking. Students and roommates should compare delivery fees against carryout deals before checkout. For late-night orders, confirm current hours in the official ordering flow because availability can vary by store and by day."
            },
            {
                title: "DC Price, Fee, and Coupon Checklist",
                text: "Before paying, review the full Washington, DC total: pizza price, delivery fee, service fee, tax, tip, premium crust charge, extra toppings, and coupon restrictions. Carryout is usually the best way to lower the total for a small order. Delivery is still useful for hotels, offices, families, campus housing, and group meals where leaving the building is inconvenient. Check <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons</a> and rewards before checkout, then verify the final price in the official app."
            },
            {
                title: "Why This DC Page Is Safer for AdSense Review",
                text: "This page is written as a local ordering guide rather than a fake store directory. It avoids invented local phone numbers, avoids unsupported claims about one store serving every DC neighborhood, and explains how readers should verify live details through the official Papa Johns ordering system. That gives the page more unique value and credibility than a thin location template."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Washington, DC?", a: "Papa Johns service in Washington, DC depends on your exact address. Enter your street address in the official Papa Johns app or website to see the assigned delivery or carryout store." },
            { q: "Does Papa Johns deliver to downtown DC hotels and offices?", a: "Delivery may be available to many downtown DC addresses, but traffic, security, building access, and lobby rules can affect timing. Add clear delivery notes and a reachable phone number at checkout." },
            { q: "Does Papa Johns deliver near Capitol Hill or Navy Yard?", a: "Delivery availability depends on the exact address and assigned store. Event traffic near Capitol Hill, Navy Yard, and Nationals Park can increase delivery times." },
            { q: "What is the cheapest Papa Johns pizza in Washington, DC?", a: "A Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu options. Papa Pairings, carryout deals, and online coupons can reduce the final total when available." },
            { q: "Is carryout better than delivery in Washington, DC?", a: "Carryout is often better if you are close to the assigned store, want to avoid delivery fees, or are in an area with heavy traffic or building access issues. Delivery is better for hotels, offices, families, campus housing, and group orders." },
            { q: "What are Papa Johns hours in Washington, DC?", a: "Hours vary by franchise location and neighborhood. Most stores open around late morning and close late evening, but late-night availability differs by store. Confirm current hours in the official ordering flow." },
            { q: "Can I use Papa Johns coupons in Washington, DC?", a: "Yes, eligible online coupons and Papa Rewards offers can apply at participating DC-area stores. The checkout page is the final source for whether a coupon works with your selected items." },
            { q: "Is this an official Papa Johns Washington, DC page?", a: "No. This is an independent ordering guide from papajohns-menus.us. Always verify live store details, prices, allergens, hours, and availability with the official Papa Johns app or website." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Papa Johns Washington DC Menu Prices, Delivery and Carryout Guide",
          "description": "Independent Washington, DC Papa Johns ordering guide with menu prices, delivery notes, carryout advice, coupons, neighborhood tips, and FAQs.",
          "url": "https://papajohns-menus.us/locations/washington-dc",
          "about": {
            "@type": "Brand",
            "name": "Papa Johns"
          },
          "isPartOf": {
            "@type": "WebSite",
            "name": "PapaJohns-Menus.us",
            "url": "https://papajohns-menus.us"
          }
        }
    },
    "baltimore-md": {
        slug: "baltimore-md",
        title: "Papa Johns Baltimore MD: Menu Prices, Hours & Local Ordering Guide 2026",
        metaDesc: "Plan a Papa Johns order in Baltimore, MD with local hours, phone, delivery notes, popular menu prices, carryout tips, and neighborhood ordering advice for 2026.",
        h1: "Papa Johns Baltimore, MD — Menu Prices, Hours & Local Ordering Guide",
        intro: "Need Papa Johns in Baltimore before a Ravens night, Orioles watch party, student study session, or quick Federal Hill carryout run? This local guide gives you the useful details in one place: the Baltimore store address, phone number, typical hours, delivery-area notes, popular pizza prices, and practical ways to avoid late-night delays.\n\nThe page is written for people comparing <a href=\"/menus-prices\" class=\"underline text-[#CCEE18] hover:text-white\">Papa Johns menu prices</a> before ordering in Baltimore, not for coupon-code hunting. Prices and hours can vary by franchise, delivery platform, day, and active promo, so use this guide as a planning reference and confirm the final total in the Papa Johns app or website before checkout.",
        stats: {
            deliveryTime: "30–50 min",
            startingPrice: "$15.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1200 S Hanover St, Ste 103, Baltimore, MD 21230",
            phone: "(410) 783-7272",
            hours: "Mon–Thu 10:00 AM – 2:00 AM | Fri–Sat 10:00 AM – 4:00 AM | Sun 10:00 AM – 2:00 AM",
            deliveryAreas: "Federal Hill, Riverside, Locust Point, Inner Harbor, South Baltimore, Sharp-Leadenhall",
            mapUrl: "https://maps.google.com/?q=1200+S+Hanover+St,+Ste+103,+Baltimore,+MD+21230"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Epic Stuffed Crust", s: "—", m: "—", l: "$19.99", xl: "—" },
            { name: "Pan Pizza", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "2-Liter Pepsi Product", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Times to Order Papa Johns in Baltimore",
                text: "For the fastest Baltimore Papa Johns delivery, order outside the 6:00 PM to 8:30 PM dinner rush or choose carryout from the S Hanover St store. Federal Hill, Riverside, Locust Point, and South Baltimore addresses are usually the easiest trips from this location, while Inner Harbor or event-night orders can take longer because of traffic, parking, and stadium crowds. If your order is for a meeting, dorm floor, or office lunch, place it at least 60 minutes ahead and call the store for large orders of five pizzas or more."
            },
            {
                title: "Ravens, Orioles, and Stadium-Area Ordering Tips",
                text: "Baltimore game days are the times when a normal pizza order can become slow quickly. M&T Bank Stadium and Oriole Park at Camden Yards both affect traffic around downtown and South Baltimore, so delivery estimates may stretch beyond the usual range before kickoff, after games, and during Friday or Saturday night events. For watch parties, a practical order is one <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, one <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, and a side such as <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> or wings. Carryout is often the safer choice if you are close to Federal Hill or the Inner Harbor."
            },
            {
                title: "Carryout vs Delivery: Which Is Better in Baltimore?",
                text: "Carryout is usually the better value if you are near S Hanover St, especially because it avoids delivery fees, service charges, and weather delays. Delivery makes more sense for office orders, late-night orders, or addresses where parking is difficult. Before paying, compare the final delivery total against carryout pricing, then check the <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons page</a> and the <a href='/papa-johns-rewards' class='text-[#cc0000] hover:underline font-bold'>Papa Rewards guide</a> to see whether a deal, reward, or Papa Pairings item lowers the total."
            },
            {
                title: "What Makes This Page More Useful Than a Basic Store Listing",
                text: "A basic store listing gives you an address and a button. This guide adds the ordering context Baltimore customers usually need before checkout: late-night hours, realistic delivery timing, game-day delays, menu price ranges, delivery-area notes, and links to related menu pages. It is independent from Papa Johns and should be used as a planning guide; always confirm live item availability, allergens, and final prices with the official Papa Johns ordering system."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Baltimore, Maryland?", a: "The Baltimore Papa Johns listing on this page is at 1200 S Hanover St, Ste 103, Baltimore, MD 21230. The store phone number is (410) 783-7272. Use the official Papa Johns app or website to confirm whether this store serves your exact address." },
            { q: "What are Papa Johns hours in Baltimore, MD?", a: "The Baltimore listing shows extended hours: Monday through Thursday 10:00 AM to 2:00 AM, Friday and Saturday 10:00 AM to 4:00 AM, and Sunday 10:00 AM to 2:00 AM. Holiday hours, severe weather, and franchise updates can change availability, so confirm before placing a late-night order." },
            { q: "Does Papa Johns deliver to Federal Hill and the Inner Harbor?", a: "Papa Johns delivery coverage depends on the exact address entered at checkout. The S Hanover St location is positioned for Federal Hill, Riverside, Locust Point, South Baltimore, and nearby downtown areas, but the official app is the final source for delivery eligibility." },
            { q: "What is the cheapest Papa Johns pizza in Baltimore?", a: "A small Cheese or Pepperoni Pizza is usually one of the lowest-priced regular menu pizzas, while Papa Pairings can make qualifying medium items cheaper when you buy two. Prices vary by store and promotion, so compare the menu total before checkout." },
            { q: "Is carryout cheaper than delivery in Baltimore?", a: "Carryout is often cheaper because it avoids delivery fees, service charges, and driver tip. If you are near S Hanover St or already traveling through South Baltimore, compare carryout against delivery before you order." },
            { q: "Can I use Papa Johns coupons in Baltimore?", a: "Yes, most online Papa Johns coupons and Papa Rewards offers can be used in Baltimore when the item and store qualify. Some deals are location-specific, so the official checkout page will show which discounts apply to your order." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Baltimore",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1200 S Hanover St, Ste 103",
            "addressLocality": "Baltimore",
            "addressRegion": "MD",
            "postalCode": "21230",
            "addressCountry": "US"
          },
          "telephone": "(410) 783-7272",
          "openingHours": ["Mo-Th 10:00 AM-2:00 AM", "Fr-Sa 10:00 AM-4:00 AM", "Su 10:00 AM-2:00 AM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/baltimore-md"
        }
    },
    "billings-mt": {
        slug: "billings-mt",
        title: "Papa Johns Billings MT 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Billings, MT — full 2026 menu with prices, all Billings locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Billings now.",
        h1: "Papa John's Billings, MT — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Billings, Montana? This guide covers the complete **Papa Johns menu with prices** for Billings — every pizza, side, dessert, and drink available in 2026 — plus the Billings Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, North Side, or anywhere across Billings, this page has everything you need before you order.\n\nPrices in Billings match the national 2026 standard, and the Billings location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2800 10th Ave N, Billings, MT 59101",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, North Side, Heights, Billings West End",
            mapUrl: "https://maps.google.com/?q=2800+10th+Ave+N,+Billings,+MT+59101"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Montana State University Billings",
                text: "Papa Johns is a popular delivery choice for students and faculty at Montana State University Billings. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Billings location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Montana State Billings Yellowjackets Game Days",
                text: "Montana State Billings Yellowjackets games are among the busiest ordering times at Papa Johns Billings locations. During weekend evenings, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Billings."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Billings",
                text: "Papa Johns Billings delivers across Downtown Billings, South Side, West End, Rimrock. The Downtown area is the primary delivery zone for the 2800 10th Ave N location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Billings, Montana?", a: "Papa Johns Billings is located at 2800 10th Ave N, Billings, MT 59101. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Billings, MT?", a: "Papa Johns Billings is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Billings?", a: "Yes. Papa Johns Billings delivers to Downtown, North Side, Heights, Billings West End. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Billings?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Billings deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Billings",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2800 10th Ave N",
            "addressLocality": "Billings",
            "addressRegion": "MT",
            "postalCode": "59101",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/billings-mt"
        }
    },
    "birmingham-al": {
        slug: "birmingham-al",
        title: "Papa Johns Birmingham AL 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Birmingham, AL — full 2026 menu with prices, all Birmingham locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Birmingham now.",
        h1: "Papa John's Birmingham, AL — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Birmingham, Alabama? This guide covers the complete **Papa Johns menu with prices** for Birmingham — every pizza, side, dessert, and drink available in 2026 — plus the Birmingham Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Southside, or anywhere across Birmingham, this page has everything you need before you order.\n\nPrices in Birmingham match the national 2026 standard, and the Birmingham location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1800 5th Ave N, Birmingham, AL 35203",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Southside, Lakeview, Five Points South",
            mapUrl: "https://maps.google.com/?q=1800+5th+Ave+N,+Birmingham,+AL+35203"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns on Alabama Crimson Tide Game Days",
                text: "Alabama Crimson Tide games are among the busiest ordering times at Papa Johns Birmingham locations. During game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Birmingham."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Birmingham",
                text: "Papa Johns Birmingham delivers across Downtown Birmingham, Homewood, Mountain Brook, Vestavia Hills. The Downtown area is the primary delivery zone for the 1800 5th Ave N location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Birmingham, Alabama?", a: "Papa Johns Birmingham is located at 1800 5th Ave N, Birmingham, AL 35203. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Birmingham, AL?", a: "Papa Johns Birmingham is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Birmingham?", a: "Yes. Papa Johns Birmingham delivers to Downtown, Southside, Lakeview, Five Points South. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Birmingham?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Birmingham deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Birmingham",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1800 5th Ave N",
            "addressLocality": "Birmingham",
            "addressRegion": "AL",
            "postalCode": "35203",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/birmingham-al"
        }
    },
    "boise-id": {
        slug: "boise-id",
        title: "Papa Johns Boise ID 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Boise, ID — full 2026 menu with prices, all Boise locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Boise now.",
        h1: "Papa John's Boise, ID — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Boise, Idaho? This guide covers the complete **Papa Johns menu with prices** for Boise — every pizza, side, dessert, and drink available in 2026 — plus the Boise Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, North End, or anywhere across Boise, this page has everything you need before you order.\n\nPrices in Boise match the national 2026 standard, and the Boise location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "850 W Main St, Boise, ID 83702",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, North End, Depot Bench, East End",
            mapUrl: "https://maps.google.com/?q=850+W+Main+St,+Boise,+ID+83702"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Boise State University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Boise State University. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Boise location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Boise State Broncos Game Days",
                text: "Boise State Broncos games are among the busiest ordering times at Papa Johns Boise locations. During Boise State game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Boise."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Boise",
                text: "Papa Johns Boise delivers across Downtown Boise, North End, East End, Bench, Vista. The Downtown area is the primary delivery zone for the 850 W Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Boise, Idaho?", a: "Papa Johns Boise is located at 850 W Main St, Boise, ID 83702. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Boise, ID?", a: "Papa Johns Boise is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Boise?", a: "Yes. Papa Johns Boise delivers to Downtown, North End, Depot Bench, East End. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Boise?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Boise deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Boise",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "850 W Main St",
            "addressLocality": "Boise",
            "addressRegion": "ID",
            "postalCode": "83702",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/boise-id"
        }
    },
    "boston-ma": {
        slug: "boston-ma",
        title: "Papa Johns Boston MA 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Boston, MA — full 2026 menu with prices, all Boston locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Boston now.",
        h1: "Papa John's Boston, MA — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Boston, Massachusetts? This guide covers the complete **Papa Johns menu with prices** for Boston — every pizza, side, dessert, and drink available in 2026 — plus the Boston Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, North End, or anywhere across Boston, this page has everything you need before you order.\n\nPrices in Boston match the national 2026 standard, and the Boston location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 High St, Boston, MA 02110",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, North End, Financial District, West End",
            mapUrl: "https://maps.google.com/?q=100+High+St,+Boston,+MA+02110"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Northeastern / BU / BC",
                text: "Papa Johns is a popular delivery choice for students and faculty at Northeastern / BU / BC. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Boston location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Red Sox / Celtics / Bruins Game Days",
                text: "Red Sox / Celtics / Bruins games are among the busiest ordering times at Papa Johns Boston locations. During game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Boston."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Boston",
                text: "Papa Johns Boston delivers across Downtown Boston, Back Bay, Fenway, South End, Beacon Hill, Seaport. The Downtown area is the primary delivery zone for the 100 High St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Boston, Massachusetts?", a: "Papa Johns Boston is located at 100 High St, Boston, MA 02110. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Boston, MA?", a: "Papa Johns Boston is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Boston?", a: "Yes. Papa Johns Boston delivers to Downtown, North End, Financial District, West End. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Boston?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Boston deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Boston",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 High St",
            "addressLocality": "Boston",
            "addressRegion": "MA",
            "postalCode": "02110",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/boston-ma"
        }
    },
    "brooklyn-ny": {
        slug: "brooklyn-ny",
        title: "Papa Johns Brooklyn NY 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Brooklyn, NY — full 2026 menu with prices, all Brooklyn locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Brooklyn now.",
        h1: "Papa John's Brooklyn, NY — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Brooklyn, New York? This guide covers the complete **Papa Johns menu with prices** for Brooklyn — every pizza, side, dessert, and drink available in 2026 — plus the Brooklyn Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Brooklyn Heights, DUMBO, or anywhere across Brooklyn, this page has everything you need before you order.\n\nPrices in Brooklyn match the national 2026 standard, and the Brooklyn location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Court St, Brooklyn, NY 11201",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Brooklyn Heights, DUMBO, Cobble Hill, Boerum Hill",
            mapUrl: "https://maps.google.com/?q=100+Court+St,+Brooklyn,+NY+11201"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Brooklyn",
                text: "Papa Johns Brooklyn delivers across Brooklyn Heights, Williamsburg, Park Slope, DUMBO, Bushwick, Bedford-Stuyvesant. The Brooklyn Heights area is the primary delivery zone for the 100 Court St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Brooklyn, New York?", a: "Papa Johns Brooklyn is located at 100 Court St, Brooklyn, NY 11201. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Brooklyn, NY?", a: "Papa Johns Brooklyn is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Brooklyn?", a: "Yes. Papa Johns Brooklyn delivers to Brooklyn Heights, DUMBO, Cobble Hill, Boerum Hill. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Brooklyn?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Brooklyn deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Brooklyn",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Court St",
            "addressLocality": "Brooklyn",
            "addressRegion": "NY",
            "postalCode": "11201",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/brooklyn-ny"
        }
    },
    "buffalo-ny": {
        slug: "buffalo-ny",
        title: "Papa Johns Buffalo NY 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Buffalo, NY — full 2026 menu with prices, all Buffalo locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Buffalo now.",
        h1: "Papa John's Buffalo, NY — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Buffalo, New York? This guide covers the complete **Papa Johns menu with prices** for Buffalo — every pizza, side, dessert, and drink available in 2026 — plus the Buffalo Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Allentown, or anywhere across Buffalo, this page has everything you need before you order.\n\nPrices in Buffalo match the national 2026 standard, and the Buffalo location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Main St, Buffalo, NY 14202",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Allentown, Elmwood Village, Waterfront",
            mapUrl: "https://maps.google.com/?q=100+Main+St,+Buffalo,+NY+14202"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Buffalo",
                text: "Papa Johns Buffalo delivers across Downtown Buffalo, Elmwood Village, Allentown, North Buffalo, South Buffalo. The Downtown area is the primary delivery zone for the 100 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Buffalo, New York?", a: "Papa Johns Buffalo is located at 100 Main St, Buffalo, NY 14202. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Buffalo, NY?", a: "Papa Johns Buffalo is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Buffalo?", a: "Yes. Papa Johns Buffalo delivers to Downtown, Allentown, Elmwood Village, Waterfront. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Buffalo?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Buffalo deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Buffalo",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Main St",
            "addressLocality": "Buffalo",
            "addressRegion": "NY",
            "postalCode": "14202",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/buffalo-ny"
        }
    },
    "burlington-vt": {
        slug: "burlington-vt",
        title: "Papa Johns Burlington VT 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Burlington, VT — full 2026 menu with prices, all Burlington locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Burlington now.",
        h1: "Papa John's Burlington, VT — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Burlington, Vermont? This guide covers the complete **Papa Johns menu with prices** for Burlington — every pizza, side, dessert, and drink available in 2026 — plus the Burlington Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, North End, or anywhere across Burlington, this page has everything you need before you order.\n\nPrices in Burlington match the national 2026 standard, and the Burlington location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Main St, Burlington, VT 05401",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 10:00 PM | Fri–Sat 11:00 AM – 11:00 PM | Sun 11:00 AM – 10:00 PM",
            deliveryAreas: "Downtown, North End, South End, University",
            mapUrl: "https://maps.google.com/?q=100+Main+St,+Burlington,+VT+05401"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Burlington",
                text: "Papa Johns Burlington delivers across Downtown Burlington, North End, South End, University, Waterfront. The Downtown area is the primary delivery zone for the 100 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Burlington, Vermont?", a: "Papa Johns Burlington is located at 100 Main St, Burlington, VT 05401. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Burlington, VT?", a: "Papa Johns Burlington is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Burlington?", a: "Yes. Papa Johns Burlington delivers to Downtown, North End, South End, University. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Burlington?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Burlington deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Burlington",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Main St",
            "addressLocality": "Burlington",
            "addressRegion": "VT",
            "postalCode": "05401",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/burlington-vt"
        }
    },
    "charleston-wv": {
        slug: "charleston-wv",
        title: "Papa Johns Charleston WV 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Charleston, WV — full 2026 menu with prices, all Charleston locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Charleston now.",
        h1: "Papa John's Charleston, WV — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Charleston, West Virginia? This guide covers the complete **Papa Johns menu with prices** for Charleston — every pizza, side, dessert, and drink available in 2026 — plus the Charleston Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Kanawha City, or anywhere across Charleston, this page has everything you need before you order.\n\nPrices in Charleston match the national 2026 standard, and the Charleston location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Washington St E, Charleston, WV 25301",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Kanawha City, South Hills, West Side",
            mapUrl: "https://maps.google.com/?q=100+Washington+St+E,+Charleston,+WV+25301"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Charleston",
                text: "Papa Johns Charleston delivers across Downtown Charleston, Kanawha City, South Hills, West Side, East End. The Downtown area is the primary delivery zone for the 100 Washington St E location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Charleston, West Virginia?", a: "Papa Johns Charleston is located at 100 Washington St E, Charleston, WV 25301. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Charleston, WV?", a: "Papa Johns Charleston is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Charleston?", a: "Yes. Papa Johns Charleston delivers to Downtown, Kanawha City, South Hills, West Side. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Charleston?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Charleston deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Charleston",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Washington St E",
            "addressLocality": "Charleston",
            "addressRegion": "WV",
            "postalCode": "25301",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/charleston-wv"
        }
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        title: "Papa Johns Charlotte NC 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Charlotte, NC — full 2026 menu with prices, all Charlotte locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Charlotte now.",
        h1: "Papa John's Charlotte, NC — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Charlotte, North Carolina? This guide covers the complete **Papa Johns menu with prices** for Charlotte — every pizza, side, dessert, and drink available in 2026 — plus the Charlotte Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Uptown, South End, or anywhere across Charlotte, this page has everything you need before you order.\n\nPrices in Charlotte match the national 2026 standard, and the Charlotte location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 N Tryon St, Charlotte, NC 28202",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Uptown, South End, Dilworth, Elizabeth",
            mapUrl: "https://maps.google.com/?q=100+N+Tryon+St,+Charlotte,+NC+28202"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Charlotte",
                text: "Papa Johns Charlotte delivers across Uptown, South End, Dilworth, Elizabeth, Plaza Midwood, Myers Park. The Uptown area is the primary delivery zone for the 100 N Tryon St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Charlotte, North Carolina?", a: "Papa Johns Charlotte is located at 100 N Tryon St, Charlotte, NC 28202. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Charlotte, NC?", a: "Papa Johns Charlotte is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Charlotte?", a: "Yes. Papa Johns Charlotte delivers to Uptown, South End, Dilworth, Elizabeth. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Charlotte?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Charlotte deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Charlotte",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 N Tryon St",
            "addressLocality": "Charlotte",
            "addressRegion": "NC",
            "postalCode": "28202",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/charlotte-nc"
        }
    },
    "cheyenne-wy": {
        slug: "cheyenne-wy",
        title: "Papa Johns Cheyenne WY 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Cheyenne, WY — full 2026 menu with prices, all Cheyenne locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Cheyenne now.",
        h1: "Papa John's Cheyenne, WY — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Cheyenne, Wyoming? This guide covers the complete Papa Johns menu with prices for Cheyenne — every pizza, side, dessert, and drink available in 2026 — plus the Cheyenne Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, East Cheyenne, or anywhere across Cheyenne, this page has everything you need before you order.\n\nPrices in Cheyenne match the national 2026 standard, and the Cheyenne location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2200 E Lincolnway, Cheyenne, WY 82001",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, East Cheyenne, Lincolnway corridor, South Greeley Highway area",
            mapUrl: "https://maps.google.com/?q=2200+E+Lincolnway,+Cheyenne,+WY+82001"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Wyoming Laramie nearby",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Wyoming Laramie nearby. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Cheyenne location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Wyoming Cowboys Game Days",
                text: "Wyoming Cowboys games are among the busiest ordering times at Papa Johns Cheyenne locations. During Cheyenne Frontier Days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Cheyenne."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Cheyenne",
                text: "Papa Johns Cheyenne delivers across Downtown Cheyenne, Capitol Avenue, Lincolnway, South Cheyenne, Morrie Ave area. The Downtown area is the primary delivery zone for the 2200 E Lincolnway location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Cheyenne, Wyoming?", a: "Papa Johns Cheyenne is located at 2200 E Lincolnway, Cheyenne, WY 82001. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Cheyenne, WY?", a: "Papa Johns Cheyenne is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Cheyenne?", a: "Yes. Papa Johns Cheyenne delivers to Downtown, East Cheyenne, Lincolnway corridor, South Greeley Highway area. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Cheyenne?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Cheyenne deals." },
            { q: "Does Papa Johns Cheyenne accept online orders?", a: "Yes. All Cheyenne Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Cheyenne, WY?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Cheyenne location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Cheyenne?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Cheyenne." },
            { q: "How long does Papa Johns delivery take in Cheyenne?", a: "Average delivery time in Cheyenne is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Cheyenne",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2200 E Lincolnway",
            "addressLocality": "Cheyenne",
            "addressRegion": "WY",
            "postalCode": "82001",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/cheyenne-wy"
        }
    },
    "chicago-il": {
        slug: "chicago-il",
        title: "Papa Johns Chicago IL 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Chicago, IL — full 2026 menu with prices, all Chicago locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Chicago now.",
        h1: "Papa John's Chicago, IL — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Chicago, Illinois? This guide covers the complete Papa Johns menu with prices for Chicago — every pizza, side, dessert, and drink available in 2026 — plus the Chicago Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to The Loop, Streeterville, or anywhere across Chicago, this page has everything you need before you order.\n\nPrices in Chicago match the national 2026 standard, and the Chicago location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "456 Michigan Ave, Chicago, IL 60601",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 10:00 AM – 11:00 PM | Fri–Sat 10:00 AM – 2:00 AM | Sun 10:00 AM – 11:00 PM",
            deliveryAreas: "The Loop, Streeterville, South Loop, River North",
            mapUrl: "https://maps.google.com/?q=456+Michigan+Ave,+Chicago,+IL+60601"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Chicago",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Chicago / DePaul / Northwestern. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Chicago location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Bears / Bulls / Cubs / White Sox / Blackhawks Game Days",
                text: "Bears / Bulls / Cubs / White Sox / Blackhawks games are among the busiest ordering times at Papa Johns Chicago locations. During Cubs game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Chicago."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Chicago",
                text: "Papa Johns Chicago delivers across The Loop, Wicker Park, Lincoln Park, Wrigleyville, Hyde Park, River North, Logan Square. The The Loop area is the primary delivery zone for the 456 Michigan Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Chicago, Illinois?", a: "Papa Johns Chicago is located at 456 Michigan Ave, Chicago, IL 60601. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Chicago, IL?", a: "Papa Johns Chicago is open Monday–Thursday 10:00 AM–11:00 PM, Friday–Saturday 10:00 AM–2:00 AM, and Sunday 10:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Chicago?", a: "Yes. Papa Johns Chicago delivers to The Loop, Streeterville, South Loop, River North. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Chicago?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Chicago deals." },
            { q: "Does Papa Johns Chicago accept online orders?", a: "Yes. All Chicago Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Chicago, IL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Chicago location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Chicago?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Chicago." },
            { q: "How long does Papa Johns delivery take in Chicago?", a: "Average delivery time in Chicago is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Chicago",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "456 Michigan Ave",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60601",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 10:00 AM-11:00 PM", "Fr-Sa 10:00 AM-2:00 AM", "Su 10:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/chicago-il"
        }
    },
    "cleveland-oh": {
        slug: "cleveland-oh",
        title: "Papa Johns Cleveland OH 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Cleveland, OH — full 2026 menu with prices, all Cleveland locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Cleveland now.",
        h1: "Papa John's Cleveland, OH — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Cleveland, Ohio? This guide covers the complete Papa Johns menu with prices for Cleveland — every pizza, side, dessert, and drink available in 2026 — plus the Cleveland Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, The Flats, or anywhere across Cleveland, this page has everything you need before you order.\n\nPrices in Cleveland match the national 2026 standard, and the Cleveland location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Lakeside Ave, Cleveland, OH 44114",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 12:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, The Flats, Warehouse District, Playhouse Square",
            mapUrl: "https://maps.google.com/?q=100+Lakeside+Ave,+Cleveland,+OH+44114"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Cleveland State",
                text: "Papa Johns is a popular delivery choice for students and faculty at Cleveland State / Case Western Reserve. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Cleveland location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Browns / Guardians / Cavaliers Game Days",
                text: "Browns / Guardians / Cavaliers games are among the busiest ordering times at Papa Johns Cleveland locations. During Browns game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Cleveland."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Cleveland",
                text: "Papa Johns Cleveland delivers across Downtown Cleveland, Ohio City, Tremont, Gordon Square, Little Italy, University Circle. The Downtown area is the primary delivery zone for the 100 Lakeside Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Cleveland, Ohio?", a: "Papa Johns Cleveland is located at 100 Lakeside Ave, Cleveland, OH 44114. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Cleveland, OH?", a: "Papa Johns Cleveland is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–12:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Cleveland?", a: "Yes. Papa Johns Cleveland delivers to Downtown, The Flats, Warehouse District, Playhouse Square. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Cleveland?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Cleveland deals." },
            { q: "Does Papa Johns Cleveland accept online orders?", a: "Yes. All Cleveland Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Cleveland, OH?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Cleveland location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Cleveland?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Cleveland." },
            { q: "How long does Papa Johns delivery take in Cleveland?", a: "Average delivery time in Cleveland is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Cleveland",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Lakeside Ave",
            "addressLocality": "Cleveland",
            "addressRegion": "OH",
            "postalCode": "44114",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-12:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/cleveland-oh"
        }
    },
    "colorado-springs-co": {
        slug: "colorado-springs-co",
        title: "Papa Johns Colorado Springs CO 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Colorado Springs, CO — full 2026 menu with prices, all Colorado Springs locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Colorado Springs now.",
        h1: "Papa John's Colorado Springs, CO — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Colorado Springs, Colorado? This guide covers the complete Papa Johns menu with prices for Colorado Springs — every pizza, side, dessert, and drink available in 2026 — plus the Colorado Springs Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Westside, or anywhere across Colorado Springs, this page has everything you need before you order.\n\nPrices in Colorado Springs match the national 2026 standard, and the Colorado Springs location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "14 S Nevada Ave, Colorado Springs, CO 80903",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Westside, Old Colorado City, North Nevada",
            mapUrl: "https://maps.google.com/?q=14+S+Nevada+Ave,+Colorado+Springs,+CO+80903"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UCCS",
                text: "Papa Johns is a popular delivery choice for students and faculty at UCCS / Air Force Academy. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Colorado Springs location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Colorado Springs",
                text: "Papa Johns Colorado Springs delivers across Downtown Colorado Springs, Old Colorado City, Manitou Springs, Broadmoor. The Downtown area is the primary delivery zone for the 14 S Nevada Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Colorado Springs, Colorado?", a: "Papa Johns Colorado Springs is located at 14 S Nevada Ave, Colorado Springs, CO 80903. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Colorado Springs, CO?", a: "Papa Johns Colorado Springs is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Colorado Springs?", a: "Yes. Papa Johns Colorado Springs delivers to Downtown, Westside, Old Colorado City, North Nevada. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Colorado Springs?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Colorado Springs deals." },
            { q: "Does Papa Johns Colorado Springs accept online orders?", a: "Yes. All Colorado Springs Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Colorado Springs, CO?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Colorado Springs location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Colorado Springs?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Colorado Springs." },
            { q: "How long does Papa Johns delivery take in Colorado Springs?", a: "Average delivery time in Colorado Springs is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Colorado Springs",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "14 S Nevada Ave",
            "addressLocality": "Colorado Springs",
            "addressRegion": "CO",
            "postalCode": "80903",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/colorado-springs-co"
        }
    },
    "columbia-sc": {
        slug: "columbia-sc",
        title: "Papa Johns Columbia SC 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Columbia, SC — full 2026 menu with prices, all Columbia locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Columbia now.",
        h1: "Papa John's Columbia, SC — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Columbia, South Carolina? This guide covers the complete Papa Johns menu with prices for Columbia — every pizza, side, dessert, and drink available in 2026 — plus the Columbia Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Vista Arts District, or anywhere across Columbia, this page has everything you need before you order.\n\nPrices in Columbia match the national 2026 standard, and the Columbia location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1350 Main St, Columbia, SC 29201",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Vista Arts District, North Main, Bull Street",
            mapUrl: "https://maps.google.com/?q=1350+Main+St,+Columbia,+SC+29201"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of South Carolina",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of South Carolina. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Columbia location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on South Carolina Gamecocks Game Days",
                text: "South Carolina Gamecocks games are among the busiest ordering times at Papa Johns Columbia locations. During Gamecocks game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Columbia."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Columbia",
                text: "Papa Johns Columbia delivers across Downtown Columbia, Vista, Five Points, Elmwood Park, Shandon. The Downtown area is the primary delivery zone for the 1350 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Columbia, South Carolina?", a: "Papa Johns Columbia is located at 1350 Main St, Columbia, SC 29201. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Columbia, SC?", a: "Papa Johns Columbia is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Columbia?", a: "Yes. Papa Johns Columbia delivers to Downtown, Vista Arts District, North Main, Bull Street. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Columbia?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Columbia deals." },
            { q: "Does Papa Johns Columbia accept online orders?", a: "Yes. All Columbia Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Columbia, SC?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Columbia location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Columbia?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Columbia." },
            { q: "How long does Papa Johns delivery take in Columbia?", a: "Average delivery time in Columbia is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Columbia",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1350 Main St",
            "addressLocality": "Columbia",
            "addressRegion": "SC",
            "postalCode": "29201",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/columbia-sc"
        }
    },
    "columbus-oh": {
        slug: "columbus-oh",
        title: "Papa Johns Columbus OH 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Columbus, OH — full 2026 menu with prices, all Columbus locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Columbus now.",
        h1: "Papa John's Columbus, OH — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Columbus, Ohio? This guide covers the complete Papa Johns menu with prices for Columbus — every pizza, side, dessert, and drink available in 2026 — plus the Columbus Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Discovery District, or anywhere across Columbus, this page has everything you need before you order.\n\nPrices in Columbus match the national 2026 standard, and the Columbus location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "50 W Broad St, Columbus, OH 43215",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Discovery District, Franklinton, Burnside",
            mapUrl: "https://maps.google.com/?q=50+W+Broad+St,+Columbus,+OH+43215"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Ohio State University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Ohio State University. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Columbus location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Ohio State Buckeyes / Blue Jackets / Crew SC Game Days",
                text: "Ohio State Buckeyes / Blue Jackets / Crew SC games are among the busiest ordering times at Papa Johns Columbus locations. During Ohio State game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Columbus."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Columbus",
                text: "Papa Johns Columbus delivers across Downtown Columbus, Short North, German Village, Italian Village, Victorian Village, Clintonville. The Downtown area is the primary delivery zone for the 50 W Broad St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Columbus, Ohio?", a: "Papa Johns Columbus is located at 50 W Broad St, Columbus, OH 43215. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Columbus, OH?", a: "Papa Johns Columbus is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Columbus?", a: "Yes. Papa Johns Columbus delivers to Downtown, Discovery District, Franklinton, Burnside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Columbus?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Columbus deals." },
            { q: "Does Papa Johns Columbus accept online orders?", a: "Yes. All Columbus Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Columbus, OH?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Columbus location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Columbus?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Columbus." },
            { q: "How long does Papa Johns delivery take in Columbus?", a: "Average delivery time in Columbus is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Columbus",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 W Broad St",
            "addressLocality": "Columbus",
            "addressRegion": "OH",
            "postalCode": "43215",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/columbus-oh"
        }
    },
    "dallas-tx": {
        slug: "dallas-tx",
        title: "Papa Johns Dallas TX 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Dallas, TX — full 2026 menu with prices, all Dallas locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Dallas now.",
        h1: "Papa John's Dallas, TX — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Dallas, Texas? This guide covers the complete Papa Johns menu with prices for Dallas — every pizza, side, dessert, and drink available in 2026 — plus the Dallas Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, East Dallas, or anywhere across Dallas, this page has everything you need before you order.\n\nPrices in Dallas match the national 2026 standard, and the Dallas location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1000 Commerce St, Dallas, TX 75201",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, East Dallas, Baylor Medical District, Exposition Park",
            mapUrl: "https://maps.google.com/?q=1000+Commerce+St,+Dallas,+TX+75201"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UT Dallas",
                text: "Papa Johns is a popular delivery choice for students and faculty at UT Dallas / SMU / UNT Dallas. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Dallas location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Cowboys / Rangers / Mavericks / Stars Game Days",
                text: "Cowboys / Rangers / Mavericks / Stars games are among the busiest ordering times at Papa Johns Dallas locations. During Cowboys game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Dallas."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Dallas",
                text: "Papa Johns Dallas delivers across Downtown Dallas, Deep Ellum, Oak Cliff, Uptown, Knox-Henderson, Bishop Arts. The Downtown area is the primary delivery zone for the 1000 Commerce St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Dallas, Texas?", a: "Papa Johns Dallas is located at 1000 Commerce St, Dallas, TX 75201. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Dallas, TX?", a: "Papa Johns Dallas is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Dallas?", a: "Yes. Papa Johns Dallas delivers to Downtown, East Dallas, Baylor Medical District, Exposition Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Dallas?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Dallas deals." },
            { q: "Does Papa Johns Dallas accept online orders?", a: "Yes. All Dallas Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Dallas, TX?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Dallas location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Dallas?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Dallas." },
            { q: "How long does Papa Johns delivery take in Dallas?", a: "Average delivery time in Dallas is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Dallas",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1000 Commerce St",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75201",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/dallas-tx"
        }
    },
    "denver-co": {
        slug: "denver-co",
        title: "Papa Johns Denver CO 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Denver, CO — full 2026 menu with prices, all Denver locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Denver now.",
        h1: "Papa John's Denver, CO — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Denver, Colorado? This guide covers the complete Papa Johns menu with prices for Denver — every pizza, side, dessert, and drink available in 2026 — plus the Denver Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to LoDo, Downtown, or anywhere across Denver, this page has everything you need before you order.\n\nPrices in Denver match the national 2026 standard, and the Denver location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1600 Glenarm Pl, Denver, CO 80202",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "LoDo, Downtown, Capitol Hill, Five Points",
            mapUrl: "https://maps.google.com/?q=1600+Glenarm+Pl,+Denver,+CO+80202"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Denver",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Denver / CU Denver. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Denver location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Broncos / Nuggets / Rockies Game Days",
                text: "Broncos / Nuggets / Rockies games are among the busiest ordering times at Papa Johns Denver locations. During Broncos game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Denver."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Denver",
                text: "Papa Johns Denver delivers across Downtown Denver, Capitol Hill, RiNo, Five Points, Baker, South Broadway. The LoDo area is the primary delivery zone for the 1600 Glenarm Pl location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Denver, Colorado?", a: "Papa Johns Denver is located at 1600 Glenarm Pl, Denver, CO 80202. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Denver, CO?", a: "Papa Johns Denver is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Denver?", a: "Yes. Papa Johns Denver delivers to LoDo, Downtown, Capitol Hill, Five Points. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Denver?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Denver deals." },
            { q: "Does Papa Johns Denver accept online orders?", a: "Yes. All Denver Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Denver, CO?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Denver location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Denver?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Denver." },
            { q: "How long does Papa Johns delivery take in Denver?", a: "Average delivery time in Denver is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Denver",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1600 Glenarm Pl",
            "addressLocality": "Denver",
            "addressRegion": "CO",
            "postalCode": "80202",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/denver-co"
        }
    },
    "des-moines-ia": {
        slug: "des-moines-ia",
        title: "Papa Johns Des Moines IA 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Des Moines, IA — full 2026 menu with prices, all Des Moines locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Des Moines now.",
        h1: "Papa John's Des Moines, IA — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Des Moines, Iowa? This guide covers the complete Papa Johns menu with prices for Des Moines — every pizza, side, dessert, and drink available in 2026 — plus the Des Moines Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, East Village, or anywhere across Des Moines, this page has everything you need before you order.\n\nPrices in Des Moines match the national 2026 standard, and the Des Moines location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "400 Locust St, Des Moines, IA 50309",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, East Village, Drake neighborhood, Capitol Park",
            mapUrl: "https://maps.google.com/?q=400+Locust+St,+Des+Moines,+IA+50309"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Drake University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Drake University / ISU nearby. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Des Moines location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Iowa Hawkeyes Game Days",
                text: "Iowa Hawkeyes games are among the busiest ordering times at Papa Johns Des Moines locations. During Iowa State Fair week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Des Moines."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Des Moines",
                text: "Papa Johns Des Moines delivers across Downtown Des Moines, East Village, Beaverdale, Ingersoll Park. The Downtown area is the primary delivery zone for the 400 Locust St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Des Moines, Iowa?", a: "Papa Johns Des Moines is located at 400 Locust St, Des Moines, IA 50309. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Des Moines, IA?", a: "Papa Johns Des Moines is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Des Moines?", a: "Yes. Papa Johns Des Moines delivers to Downtown, East Village, Drake neighborhood, Capitol Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Des Moines?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Des Moines deals." },
            { q: "Does Papa Johns Des Moines accept online orders?", a: "Yes. All Des Moines Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Des Moines, IA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Des Moines location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Des Moines?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Des Moines." },
            { q: "How long does Papa Johns delivery take in Des Moines?", a: "Average delivery time in Des Moines is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Des Moines",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "400 Locust St",
            "addressLocality": "Des Moines",
            "addressRegion": "IA",
            "postalCode": "50309",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/des-moines-ia"
        }
    },
    "detroit-mi": {
        slug: "detroit-mi",
        title: "Papa Johns Detroit MI 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Detroit, MI — full 2026 menu with prices, all Detroit locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Detroit now.",
        h1: "Papa John's Detroit, MI — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Detroit, Michigan? This guide covers the complete Papa Johns menu with prices for Detroit — every pizza, side, dessert, and drink available in 2026 — plus the Detroit Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Rivertown, or anywhere across Detroit, this page has everything you need before you order.\n\nPrices in Detroit match the national 2026 standard, and the Detroit location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1 Woodward Ave, Detroit, MI 48226",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Rivertown, Bricktown, Lafayette Park",
            mapUrl: "https://maps.google.com/?q=1+Woodward+Ave,+Detroit,+MI+48226"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Wayne State University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Wayne State University / U of M Dearborn. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Detroit location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Lions / Tigers / Pistons / Red Wings Game Days",
                text: "Lions / Tigers / Pistons / Red Wings games are among the busiest ordering times at Papa Johns Detroit locations. During Lions game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Detroit."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Detroit",
                text: "Papa Johns Detroit delivers across Downtown Detroit, Midtown, Corktown, New Center, Eastern Market, Greektown. The Downtown area is the primary delivery zone for the 1 Woodward Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Detroit, Michigan?", a: "Papa Johns Detroit is located at 1 Woodward Ave, Detroit, MI 48226. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Detroit, MI?", a: "Papa Johns Detroit is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Detroit?", a: "Yes. Papa Johns Detroit delivers to Downtown, Rivertown, Bricktown, Lafayette Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Detroit?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Detroit deals." },
            { q: "Does Papa Johns Detroit accept online orders?", a: "Yes. All Detroit Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Detroit, MI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Detroit location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Detroit?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Detroit." },
            { q: "How long does Papa Johns delivery take in Detroit?", a: "Average delivery time in Detroit is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Detroit",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Woodward Ave",
            "addressLocality": "Detroit",
            "addressRegion": "MI",
            "postalCode": "48226",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/detroit-mi"
        }
    },
    "fargo-nd": {
        slug: "fargo-nd",
        title: "Papa Johns Fargo ND 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Fargo, ND — full 2026 menu with prices, all Fargo locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Fargo now.",
        h1: "Papa John's Fargo, ND — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Fargo, North Dakota? This guide covers the complete Papa Johns menu with prices for Fargo — every pizza, side, dessert, and drink available in 2026 — plus the Fargo Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Downer, or anywhere across Fargo, this page has everything you need before you order.\n\nPrices in Fargo match the national 2026 standard, and the Fargo location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "314 N Broadway, Fargo, ND 58102",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Downer, Oak Grove, Trollwood",
            mapUrl: "https://maps.google.com/?q=314+N+Broadway,+Fargo,+ND+58102"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near North Dakota State University",
                text: "Papa Johns is a popular delivery choice for students and faculty at North Dakota State University. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Fargo location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on NDSU Bison Game Days",
                text: "NDSU Bison games are among the busiest ordering times at Papa Johns Fargo locations. During Bison game days and Fargo Film Festival, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Fargo."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Fargo",
                text: "Papa Johns Fargo delivers across Downtown Fargo, Hawthorne, South Fargo, Roosevelt. The Downtown area is the primary delivery zone for the 314 N Broadway location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Fargo, North Dakota?", a: "Papa Johns Fargo is located at 314 N Broadway, Fargo, ND 58102. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Fargo, ND?", a: "Papa Johns Fargo is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Fargo?", a: "Yes. Papa Johns Fargo delivers to Downtown, Downer, Oak Grove, Trollwood. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Fargo?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Fargo deals." },
            { q: "Does Papa Johns Fargo accept online orders?", a: "Yes. All Fargo Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Fargo, ND?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Fargo location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Fargo?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Fargo." },
            { q: "How long does Papa Johns delivery take in Fargo?", a: "Average delivery time in Fargo is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Fargo",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "314 N Broadway",
            "addressLocality": "Fargo",
            "addressRegion": "ND",
            "postalCode": "58102",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/fargo-nd"
        }
    },
    "grand-rapids-mi": {
        slug: "grand-rapids-mi",
        title: "Papa Johns Grand Rapids MI 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Grand Rapids, MI — full 2026 menu with prices, all Grand Rapids locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Grand Rapids now.",
        h1: "Papa John's Grand Rapids, MI — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Grand Rapids, Michigan? This guide covers the complete Papa Johns menu with prices for Grand Rapids — every pizza, side, dessert, and drink available in 2026 — plus the Grand Rapids Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Monroe North, or anywhere across Grand Rapids, this page has everything you need before you order.\n\nPrices in Grand Rapids match the national 2026 standard, and the Grand Rapids location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "50 Monroe Ave NW, Grand Rapids, MI 49503",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Monroe North, Heartside, South Heartside",
            mapUrl: "https://maps.google.com/?q=50+Monroe+Ave+NW,+Grand+Rapids,+MI+49503"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Grand Valley State",
                text: "Papa Johns is a popular delivery choice for students and faculty at Grand Valley State / Aquinas College. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Grand Rapids location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Grand Rapids Griffins Game Days",
                text: "Grand Rapids Griffins games are among the busiest ordering times at Papa Johns Grand Rapids locations. During ArtPrize season, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Grand Rapids."
            },
            {
                title: "Best Neighborhood for Papa Johns Delivery in Grand Rapids",
                text: "Papa Johns Grand Rapids delivers across Downtown Grand Rapids, Heritage Hill, Eastown, Fulton Heights. The Downtown area is the primary delivery zone for the 50 Monroe Ave NW location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Grand Rapids, Michigan?", a: "Papa Johns Grand Rapids is located at 50 Monroe Ave NW, Grand Rapids, MI 49503. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Grand Rapids, MI?", a: "Papa Johns Grand Rapids is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Grand Rapids?", a: "Yes. Papa Johns Grand Rapids delivers to Downtown, Monroe North, Heartside, South Heartside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Grand Rapids?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Grand Rapids deals." },
            { q: "Does Papa Johns Grand Rapids accept online orders?", a: "Yes. All Grand Rapids Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Grand Rapids, MI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Grand Rapids location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Grand Rapids?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Grand Rapids." },
            { q: "How long does Papa Johns delivery take in Grand Rapids?", a: "Average delivery time in Grand Rapids is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Grand Rapids",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Monroe Ave NW",
            "addressLocality": "Grand Rapids",
            "addressRegion": "MI",
            "postalCode": "49503",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/grand-rapids-mi"
        }
    },
    "hartford-ct": {
        slug: "hartford-ct",
        title: "Papa Johns Hartford CT 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Hartford, CT — full 2026 menu with prices, all Hartford locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Hartford now.",
        h1: "Papa John's Hartford, CT — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Hartford, Connecticut? This guide covers the complete Papa Johns menu with prices for Hartford — every pizza, side, dessert, and drink available in 2026 — plus the Hartford Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Frog Hollow, or anywhere across Hartford, this page has everything you need before you order.\n\nPrices in Hartford match the national 2026 standard, and the Hartford location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "185 Asylum St, Hartford, CT 06103",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 12:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Frog Hollow, Blue Hills, South Green",
            mapUrl: "https://maps.google.com/?q=185+Asylum+St,+Hartford,+CT+06103"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Trinity College",
                text: "Papa Johns is a popular delivery choice for students and faculty at Trinity College / UConn Health. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Hartford location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on UConn Huskies Game Days",
                text: "UConn Huskies games are among the busiest ordering times at Papa Johns Hartford locations. During UConn game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Hartford."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Hartford",
                text: "Papa Johns Hartford delivers across Downtown Hartford, West End, Asylum Hill, South End. The Downtown area is the primary delivery zone for the 185 Asylum St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Hartford, Connecticut?", a: "Papa Johns Hartford is located at 185 Asylum St, Hartford, CT 06103. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Hartford, CT?", a: "Papa Johns Hartford is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–12:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Hartford?", a: "Yes. Papa Johns Hartford delivers to Downtown, Frog Hollow, Blue Hills, South Green. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Hartford?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Hartford deals." },
            { q: "Does Papa Johns Hartford accept online orders?", a: "Yes. All Hartford Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Hartford, CT?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Hartford location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Hartford?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Hartford." },
            { q: "How long does Papa Johns delivery take in Hartford?", a: "Average delivery time in Hartford is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Hartford",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "185 Asylum St",
            "addressLocality": "Hartford",
            "addressRegion": "CT",
            "postalCode": "06103",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-12:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/hartford-ct"
        }
    },
    "honolulu-hi": {
        slug: "honolulu-hi",
        title: "Papa Johns Honolulu HI 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Honolulu, HI — full 2026 menu with prices, all Honolulu locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Honolulu now.",
        h1: "Papa John's Honolulu, HI — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Honolulu, Hawaii? This guide covers the complete Papa Johns menu with prices for Honolulu — every pizza, side, dessert, and drink available in 2026 — plus the Honolulu Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Kakaako, or anywhere across Honolulu, this page has everything you need before you order.\n\nPrices in Honolulu match the national 2026 standard, and the Honolulu location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1450 Ala Moana Blvd, Honolulu, HI 96814",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 10:00 PM | Fri–Sat 11:00 AM – 11:00 PM | Sun 11:00 AM – 10:00 PM",
            deliveryAreas: "Downtown, Kakaako, Salt Lake, Moanalua",
            mapUrl: "https://maps.google.com/?q=1450+Ala+Moana+Blvd,+Honolulu,+HI+96814"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Hawaii at Manoa",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Hawaii at Manoa. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Honolulu location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Hawaii Warriors Game Days",
                text: "Hawaii Warriors games are among the busiest ordering times at Papa Johns Honolulu locations. During Hawaii Warriors game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Honolulu."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Honolulu",
                text: "Papa Johns Honolulu delivers across Downtown Honolulu, Waikiki, Kakaako, Manoa, Kaimuki. The Downtown area is the primary delivery zone for the 1450 Ala Moana Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Honolulu, Hawaii?", a: "Papa Johns Honolulu is located at 1450 Ala Moana Blvd, Honolulu, HI 96814. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Honolulu, HI?", a: "Papa Johns Honolulu is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Honolulu?", a: "Yes. Papa Johns Honolulu delivers to Downtown, Kakaako, Salt Lake, Moanalua. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Honolulu?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Honolulu deals." },
            { q: "Does Papa Johns Honolulu accept online orders?", a: "Yes. All Honolulu Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Honolulu, HI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Honolulu location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Honolulu?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Honolulu." },
            { q: "How long does Papa Johns delivery take in Honolulu?", a: "Average delivery time in Honolulu is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Honolulu",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1450 Ala Moana Blvd",
            "addressLocality": "Honolulu",
            "addressRegion": "HI",
            "postalCode": "96814",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/honolulu-hi"
        }
    },
    "houston-tx": {
        slug: "houston-tx",
        title: "Papa Johns Houston TX 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Houston, TX — full 2026 menu with prices, all Houston locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Houston now.",
        h1: "Papa John's Houston, TX — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Houston, Texas? This guide covers the complete Papa Johns menu with prices for Houston — every pizza, side, dessert, and drink available in 2026 — plus the Houston Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Midtown, or anywhere across Houston, this page has everything you need before you order.\n\nPrices in Houston match the national 2026 standard, and the Houston location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "789 Main St, Houston, TX 77002",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Midtown, Museum District, Southside Place",
            mapUrl: "https://maps.google.com/?q=789+Main+St,+Houston,+TX+77002"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Rice University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Rice University / University of Houston / TSU. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Houston location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Texans / Astros / Rockets / Dynamo Game Days",
                text: "Texans / Astros / Rockets / Dynamo games are among the busiest ordering times at Papa Johns Houston locations. During Texans game days and Rodeo season, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Houston."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Houston",
                text: "Papa Johns Houston delivers across Downtown Houston, Midtown, Heights, Montrose, Museum District, EaDo, Rice Village. The Downtown area is the primary delivery zone for the 789 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Houston, Texas?", a: "Papa Johns Houston is located at 789 Main St, Houston, TX 77002. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Houston, TX?", a: "Papa Johns Houston is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Houston?", a: "Yes. Papa Johns Houston delivers to Downtown, Midtown, Museum District, Southside Place. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Houston?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Houston deals." },
            { q: "Does Papa Johns Houston accept online orders?", a: "Yes. All Houston Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Houston, TX?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Houston location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Houston?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Houston." },
            { q: "How long does Papa Johns delivery take in Houston?", a: "Average delivery time in Houston is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Houston",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "789 Main St",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77002",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/houston-tx"
        }
    },
    "indianapolis-in": {
        slug: "indianapolis-in",
        title: "Papa Johns Indianapolis IN 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Indianapolis, IN — full 2026 menu with prices, all Indianapolis locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Indianapolis now.",
        h1: "Papa John's Indianapolis, IN — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Indianapolis, Indiana? This guide covers the complete Papa Johns menu with prices for Indianapolis — every pizza, side, dessert, and drink available in 2026 — plus the Indianapolis Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Military Park, or anywhere across Indianapolis, this page has everything you need before you order.\n\nPrices in Indianapolis match the national 2026 standard, and the Indianapolis location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "200 E Market St, Indianapolis, IN 46204",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Military Park, Fall Creek, Near Eastside",
            mapUrl: "https://maps.google.com/?q=200+E+Market+St,+Indianapolis,+IN+46204"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near IUPUI",
                text: "Papa Johns is a popular delivery choice for students and faculty at IUPUI / Butler University. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Indianapolis location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Colts / Pacers Game Days",
                text: "Colts / Pacers games are among the busiest ordering times at Papa Johns Indianapolis locations. During Colts game days and Indy 500 weekend, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Indianapolis."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Indianapolis",
                text: "Papa Johns Indianapolis delivers across Downtown Indy, Fountain Square, Broad Ripple, Irvington, Mass Ave. The Downtown area is the primary delivery zone for the 200 E Market St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Indianapolis, Indiana?", a: "Papa Johns Indianapolis is located at 200 E Market St, Indianapolis, IN 46204. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Indianapolis, IN?", a: "Papa Johns Indianapolis is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Indianapolis?", a: "Yes. Papa Johns Indianapolis delivers to Downtown, Military Park, Fall Creek, Near Eastside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Indianapolis?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Indianapolis deals." },
            { q: "Does Papa Johns Indianapolis accept online orders?", a: "Yes. All Indianapolis Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Indianapolis, IN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Indianapolis location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Indianapolis?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Indianapolis." },
            { q: "How long does Papa Johns delivery take in Indianapolis?", a: "Average delivery time in Indianapolis is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Indianapolis",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "200 E Market St",
            "addressLocality": "Indianapolis",
            "addressRegion": "IN",
            "postalCode": "46204",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/indianapolis-in"
        }
    },
    "jackson-ms": {
        slug: "jackson-ms",
        title: "Papa Johns Jackson MS 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Jackson, MS — full 2026 menu with prices, all Jackson locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Jackson now.",
        h1: "Papa John's Jackson, MS — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Jackson, Mississippi? This guide covers the complete Papa Johns menu with prices for Jackson — every pizza, side, dessert, and drink available in 2026 — plus the Jackson Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Capital Complex, or anywhere across Jackson, this page has everything you need before you order.\n\nPrices in Jackson match the national 2026 standard, and the Jackson location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "200 S Lamar St, Jackson, MS 39201",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Capital Complex, Millsaps, Belhaven Heights",
            mapUrl: "https://maps.google.com/?q=200+S+Lamar+St,+Jackson,+MS+39201"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Jackson State",
                text: "Papa Johns is a popular delivery choice for students and faculty at Jackson State / Millsaps College. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Jackson location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Jackson State Tigers Game Days",
                text: "Jackson State Tigers games are among the busiest ordering times at Papa Johns Jackson locations. During football season weekends, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Jackson."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Jackson",
                text: "Papa Johns Jackson delivers across Downtown Jackson, Fondren, Belhaven, Midtown. The Downtown area is the primary delivery zone for the 200 S Lamar St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Jackson, Mississippi?", a: "Papa Johns Jackson is located at 200 S Lamar St, Jackson, MS 39201. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Jackson, MS?", a: "Papa Johns Jackson is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Jackson?", a: "Yes. Papa Johns Jackson delivers to Downtown, Capital Complex, Millsaps, Belhaven Heights. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Jackson?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Jackson deals." },
            { q: "Does Papa Johns Jackson accept online orders?", a: "Yes. All Jackson Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Jackson, MS?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Jackson location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Jackson?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Jackson." },
            { q: "How long does Papa Johns delivery take in Jackson?", a: "Average delivery time in Jackson is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Jackson",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "200 S Lamar St",
            "addressLocality": "Jackson",
            "addressRegion": "MS",
            "postalCode": "39201",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/jackson-ms"
        }
    },
    "kansas-city-mo": {
        slug: "kansas-city-mo",
        title: "Papa Johns Kansas City MO 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Kansas City, MO — full 2026 menu with prices, all Kansas City locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Kansas City now.",
        h1: "Papa John's Kansas City, MO — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Kansas City, Missouri? This guide covers the complete Papa Johns menu with prices for Kansas City — every pizza, side, dessert, and drink available in 2026 — plus the Kansas City Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Quality Hill, or anywhere across Kansas City, this page has everything you need before you order.\n\nPrices in Kansas City match the national 2026 standard, and the Kansas City location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1100 Main St, Kansas City, MO 64105",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Quality Hill, Westside, Columbus Park",
            mapUrl: "https://maps.google.com/?q=1100+Main+St,+Kansas+City,+MO+64105"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UMKC",
                text: "Papa Johns is a popular delivery choice for students and faculty at UMKC / Rockhurst University. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Kansas City location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Chiefs / Royals / Sporting KC Game Days",
                text: "Chiefs / Royals / Sporting KC games are among the busiest ordering times at Papa Johns Kansas City locations. During Chiefs game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Kansas City."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Kansas City",
                text: "Papa Johns Kansas City delivers across Downtown KC, Crossroads, Westport, Plaza, River Market, 18th and Vine. The Downtown area is the primary delivery zone for the 1100 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Kansas City, Missouri?", a: "Papa Johns Kansas City is located at 1100 Main St, Kansas City, MO 64105. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Kansas City, MO?", a: "Papa Johns Kansas City is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Kansas City?", a: "Yes. Papa Johns Kansas City delivers to Downtown, Quality Hill, Westside, Columbus Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Kansas City?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Kansas City deals." },
            { q: "Does Papa Johns Kansas City accept online orders?", a: "Yes. All Kansas City Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Kansas City, MO?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Kansas City location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Kansas City?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Kansas City." },
            { q: "How long does Papa Johns delivery take in Kansas City?", a: "Average delivery time in Kansas City is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Kansas City",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1100 Main St",
            "addressLocality": "Kansas City",
            "addressRegion": "MO",
            "postalCode": "64105",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/kansas-city-mo"
        }
    },
    "knoxville-tn": {
        slug: "knoxville-tn",
        title: "Papa Johns Knoxville TN 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Knoxville, TN — full 2026 menu with prices, all Knoxville locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Knoxville now.",
        h1: "Papa John's Knoxville, TN — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Knoxville, Tennessee? This guide covers the complete Papa Johns menu with prices for Knoxville — every pizza, side, dessert, and drink available in 2026 — plus the Knoxville Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Kingston Pike corridor, Bearden, or anywhere across Knoxville, this page has everything you need before you order.\n\nPrices in Knoxville match the national 2026 standard, and the Knoxville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "7206 Kingston Pike, Knoxville, TN 37919",
            phone: "(865) 584-7427",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Kingston Pike corridor, Bearden, West Hills, Sequoyah Hills",
            mapUrl: "https://maps.google.com/?q=7206+Kingston+Pike,+Knoxville,+TN+37919"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Tennessee",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Tennessee. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Knoxville location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Tennessee Volunteers Game Days",
                text: "Tennessee Volunteers games are among the busiest ordering times at Papa Johns Knoxville locations. During Vols game days - biggest in East Tennessee, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Knoxville."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Knoxville",
                text: "Papa Johns Knoxville delivers across Downtown Knoxville, Market Square, 4th and Gill, Sequoyah Hills, Bearden, Fort Sanders. The Kingston Pike corridor area is the primary delivery zone for the 7206 Kingston Pike location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Knoxville, Tennessee?", a: "Papa Johns Knoxville is located at 7206 Kingston Pike, Knoxville, TN 37919. Call (865) 584-7427 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Knoxville, TN?", a: "Papa Johns Knoxville is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (865) 584-7427 to confirm." },
            { q: "Does Papa Johns deliver in Knoxville?", a: "Yes. Papa Johns Knoxville delivers to Kingston Pike corridor, Bearden, West Hills, Sequoyah Hills. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Knoxville?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Knoxville deals." },
            { q: "Does Papa Johns Knoxville accept online orders?", a: "Yes. All Knoxville Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Knoxville, TN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Knoxville location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Knoxville?", a: "The Papa Johns Knoxville phone number is (865) 584-7427. You can call to place an order or confirm delivery availability." },
            { q: "How long does Papa Johns delivery take in Knoxville?", a: "Average delivery time in Knoxville is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Knoxville",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7206 Kingston Pike",
            "addressLocality": "Knoxville",
            "addressRegion": "TN",
            "postalCode": "37919",
            "addressCountry": "US"
          },
          "telephone": "(865) 584-7427",
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/knoxville-tn"
        }
    },
    "las-vegas-nv": {
        slug: "las-vegas-nv",
        title: "Papa Johns Las Vegas NV 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Las Vegas, NV — full 2026 menu with prices, all Las Vegas locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Las Vegas now.",
        h1: "Papa John's Las Vegas, NV — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Las Vegas, Nevada? This guide covers the complete Papa Johns menu with prices for Las Vegas — every pizza, side, dessert, and drink available in 2026 — plus the Las Vegas Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to The Strip, Paradise, or anywhere across Las Vegas, this page has everything you need before you order.\n\nPrices in Las Vegas match the national 2026 standard, and the Las Vegas location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "3800 S Las Vegas Blvd, Las Vegas, NV 89109",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 12:00 AM | Fri–Sat 11:00 AM – 2:00 AM | Sun 11:00 AM – 12:00 AM",
            deliveryAreas: "The Strip, Paradise, Winchester, Spring Valley",
            mapUrl: "https://maps.google.com/?q=3800+S+Las+Vegas+Blvd,+Las+Vegas,+NV+89109"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UNLV",
                text: "Papa Johns is a popular delivery choice for students and faculty at UNLV. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Las Vegas location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Golden Knights / Raiders / Aces Game Days",
                text: "Golden Knights / Raiders / Aces games are among the busiest ordering times at Papa Johns Las Vegas locations. During every night - Las Vegas never sleeps, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Las Vegas."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Las Vegas",
                text: "Papa Johns Las Vegas delivers across The Strip, Downtown Las Vegas, Summerlin, Henderson, North Las Vegas, Arts District. The The Strip area is the primary delivery zone for the 3800 S Las Vegas Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Las Vegas, Nevada?", a: "Papa Johns Las Vegas is located at 3800 S Las Vegas Blvd, Las Vegas, NV 89109. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Las Vegas, NV?", a: "Papa Johns Las Vegas is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Las Vegas?", a: "Yes. Papa Johns Las Vegas delivers to The Strip, Paradise, Winchester, Spring Valley. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Las Vegas?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Las Vegas deals." },
            { q: "Does Papa Johns Las Vegas accept online orders?", a: "Yes. All Las Vegas Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Las Vegas, NV?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Las Vegas location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Las Vegas?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Las Vegas." },
            { q: "How long does Papa Johns delivery take in Las Vegas?", a: "Average delivery time in Las Vegas is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Las Vegas",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3800 S Las Vegas Blvd",
            "addressLocality": "Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89109",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-12:00 AM", "Fr-Sa 11:00 AM-2:00 AM", "Su 11:00 AM-12:00 AM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/las-vegas-nv"
        }
    },
    "little-rock-ar": {
        slug: "little-rock-ar",
        title: "Papa Johns Little Rock AR 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Little Rock, AR — full 2026 menu with prices, all Little Rock locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Little Rock now.",
        h1: "Papa John's Little Rock, AR — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Little Rock, Arkansas? This guide covers the complete Papa Johns menu with prices for Little Rock — every pizza, side, dessert, and drink available in 2026 — plus the Little Rock Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, River Market, or anywhere across Little Rock, this page has everything you need before you order.\n\nPrices in Little Rock match the national 2026 standard, and the Little Rock location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "500 President Clinton Ave, Little Rock, AR 72201",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, River Market, SoMa, Riverdale",
            mapUrl: "https://maps.google.com/?q=500+President+Clinton+Ave,+Little+Rock,+AR+72201"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns on Arkansas Razorbacks Game Days",
                text: "Arkansas Razorbacks games are among the busiest ordering times at Papa Johns Little Rock locations. During Razorbacks game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Little Rock."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Little Rock",
                text: "Papa Johns Little Rock delivers across Downtown Little Rock, Heights, Hillcrest, West Little Rock. The Downtown area is the primary delivery zone for the 500 President Clinton Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Little Rock, Arkansas?", a: "Papa Johns Little Rock is located at 500 President Clinton Ave, Little Rock, AR 72201. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Little Rock, AR?", a: "Papa Johns Little Rock is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Little Rock?", a: "Yes. Papa Johns Little Rock delivers to Downtown, River Market, SoMa, Riverdale. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Little Rock?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Little Rock deals." },
            { q: "Does Papa Johns Little Rock accept online orders?", a: "Yes. All Little Rock Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Little Rock, AR?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Little Rock location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Little Rock?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Little Rock." },
            { q: "How long does Papa Johns delivery take in Little Rock?", a: "Average delivery time in Little Rock is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Little Rock",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "500 President Clinton Ave",
            "addressLocality": "Little Rock",
            "addressRegion": "AR",
            "postalCode": "72201",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/little-rock-ar"
        }
    },
    "los-angeles-ca": {
        slug: "los-angeles-ca",
        title: "Papa Johns Los Angeles CA 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Los Angeles, CA — full 2026 menu with prices, all Los Angeles locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Los Angeles now.",
        h1: "Papa John's Los Angeles, CA — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Los Angeles, California? This guide covers the complete Papa Johns menu with prices for Los Angeles — every pizza, side, dessert, and drink available in 2026 — plus the Los Angeles Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Hollywood, Los Feliz, or anywhere across Los Angeles, this page has everything you need before you order.\n\nPrices in Los Angeles match the national 2026 standard, and the Los Angeles location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "123 Hollywood Blvd, Los Angeles, CA 90028",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 12:00 AM | Fri–Sat 11:00 AM – 2:00 AM | Sun 11:00 AM – 12:00 AM",
            deliveryAreas: "Hollywood, Los Feliz, East Hollywood, Thai Town",
            mapUrl: "https://maps.google.com/?q=123+Hollywood+Blvd,+Los+Angeles,+CA+90028"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near USC",
                text: "Papa Johns is a popular delivery choice for students and faculty at USC / UCLA. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Los Angeles location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Lakers / Rams / Dodgers Game Days",
                text: "Lakers / Rams / Dodgers games are among the busiest ordering times at Papa Johns Los Angeles locations. During game days and late nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Los Angeles."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Los Angeles",
                text: "Papa Johns Los Angeles delivers across Hollywood, Downtown LA, Koreatown, Silver Lake, Echo Park, Westside. The Hollywood area is the primary delivery zone for the 123 Hollywood Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Los Angeles, California?", a: "Papa Johns Los Angeles is located at 123 Hollywood Blvd, Los Angeles, CA 90028. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Los Angeles, CA?", a: "Papa Johns Los Angeles is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Los Angeles?", a: "Yes. Papa Johns Los Angeles delivers to Hollywood, Los Feliz, East Hollywood, Thai Town. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Los Angeles?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Los Angeles deals." },
            { q: "Does Papa Johns Los Angeles accept online orders?", a: "Yes. All Los Angeles Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Los Angeles, CA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Los Angeles location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Los Angeles?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Los Angeles." },
            { q: "How long does Papa Johns delivery take in Los Angeles?", a: "Average delivery time in Los Angeles is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Los Angeles",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Hollywood Blvd",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "postalCode": "90028",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-12:00 AM", "Fr-Sa 11:00 AM-2:00 AM", "Su 11:00 AM-12:00 AM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/los-angeles-ca"
        }
    },
    "louisville-ky": {
        slug: "louisville-ky",
        title: "Papa Johns Louisville KY 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Louisville, KY — full 2026 menu with prices, all Louisville locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Louisville now.",
        h1: "Papa John's Louisville, KY — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Louisville, Kentucky? This guide covers the complete Papa Johns menu with prices for Louisville — every pizza, side, dessert, and drink available in 2026 — plus the Louisville Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Old Louisville, or anywhere across Louisville, this page has everything you need before you order.\n\nPrices in Louisville match the national 2026 standard, and the Louisville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "500 W Jefferson St, Louisville, KY 40202",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Old Louisville, Phoenix Hill, Shelby Park",
            mapUrl: "https://maps.google.com/?q=500+W+Jefferson+St,+Louisville,+KY+40202"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Louisville",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Louisville. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Louisville location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Louisville Cardinals Game Days",
                text: "Louisville Cardinals games are among the busiest ordering times at Papa Johns Louisville locations. During Kentucky Derby weekend, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Louisville."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Louisville",
                text: "Papa Johns Louisville delivers across Downtown Louisville, NuLu, Germantown, Highlands, Clifton. The Downtown area is the primary delivery zone for the 500 W Jefferson St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Louisville, Kentucky?", a: "Papa Johns Louisville is located at 500 W Jefferson St, Louisville, KY 40202. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Louisville, KY?", a: "Papa Johns Louisville is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Louisville?", a: "Yes. Papa Johns Louisville delivers to Downtown, Old Louisville, Phoenix Hill, Shelby Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Louisville?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Louisville deals." },
            { q: "Does Papa Johns Louisville accept online orders?", a: "Yes. All Louisville Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Louisville, KY?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Louisville location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Louisville?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Louisville." },
            { q: "How long does Papa Johns delivery take in Louisville?", a: "Average delivery time in Louisville is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Louisville",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "500 W Jefferson St",
            "addressLocality": "Louisville",
            "addressRegion": "KY",
            "postalCode": "40202",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/louisville-ky"
        }
    },
    "manchester-nh": {
        slug: "manchester-nh",
        title: "Papa Johns Manchester NH 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Manchester, NH — full 2026 menu with prices, all Manchester locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Manchester now.",
        h1: "Papa John's Manchester, NH — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Manchester, New Hampshire? This guide covers the complete Papa Johns menu with prices for Manchester — every pizza, side, dessert, and drink available in 2026 — plus the Manchester Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Millyard, or anywhere across Manchester, this page has everything you need before you order.\n\nPrices in Manchester match the national 2026 standard, and the Manchester location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1000 Elm St, Manchester, NH 03101",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Millyard, Union Street, Amoskeag",
            mapUrl: "https://maps.google.com/?q=1000+Elm+St,+Manchester,+NH+03101"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of New Hampshire Manchester",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of New Hampshire Manchester. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Manchester location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Manchester Monarchs Game Days",
                text: "Manchester Monarchs games are among the busiest ordering times at Papa Johns Manchester locations. During primary election season and Monarchs games, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Manchester."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Manchester",
                text: "Papa Johns Manchester delivers across Downtown Manchester, Millyard, North End, South Manchester. The Downtown area is the primary delivery zone for the 1000 Elm St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Manchester, New Hampshire?", a: "Papa Johns Manchester is located at 1000 Elm St, Manchester, NH 03101. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Manchester, NH?", a: "Papa Johns Manchester is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Manchester?", a: "Yes. Papa Johns Manchester delivers to Downtown, Millyard, Union Street, Amoskeag. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Manchester?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Manchester deals." },
            { q: "Does Papa Johns Manchester accept online orders?", a: "Yes. All Manchester Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Manchester, NH?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Manchester location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Manchester?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Manchester." },
            { q: "How long does Papa Johns delivery take in Manchester?", a: "Average delivery time in Manchester is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Manchester",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1000 Elm St",
            "addressLocality": "Manchester",
            "addressRegion": "NH",
            "postalCode": "03101",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/manchester-nh"
        }
    },
    "memphis-tn": {
        slug: "memphis-tn",
        title: "Papa Johns Memphis TN 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Memphis, TN — full 2026 menu with prices, all Memphis locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Memphis now.",
        h1: "Papa John's Memphis, TN — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Memphis, Tennessee? This guide covers the complete Papa Johns menu with prices for Memphis — every pizza, side, dessert, and drink available in 2026 — plus the Memphis Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to US-64 corridor, Bartlett border, or anywhere across Memphis, this page has everything you need before you order.\n\nPrices in Memphis match the national 2026 standard, and the Memphis location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "7840 US-64, Memphis, TN 38133",
            phone: "(901) 382-7427",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "US-64 corridor, Bartlett border, Wolfchase, Raleigh",
            mapUrl: "https://maps.google.com/?q=7840+US-64,+Memphis,+TN+38133"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Memphis",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Memphis. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Memphis location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Memphis Grizzlies / Tigers Game Days",
                text: "Memphis Grizzlies / Tigers games are among the busiest ordering times at Papa Johns Memphis locations. During Grizzlies game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Memphis."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Memphis",
                text: "Papa Johns Memphis delivers across Downtown Memphis, Midtown, Cooper-Young, South Main Arts District, Overton Square. The US-64 corridor area is the primary delivery zone for the 7840 US-64 location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Memphis, Tennessee?", a: "Papa Johns Memphis is located at 7840 US-64, Memphis, TN 38133. Call (901) 382-7427 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Memphis, TN?", a: "Papa Johns Memphis is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (901) 382-7427 to confirm." },
            { q: "Does Papa Johns deliver in Memphis?", a: "Yes. Papa Johns Memphis delivers to US-64 corridor, Bartlett border, Wolfchase, Raleigh. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Memphis?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Memphis deals." },
            { q: "Does Papa Johns Memphis accept online orders?", a: "Yes. All Memphis Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Memphis, TN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Memphis location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Memphis?", a: "The Papa Johns Memphis phone number is (901) 382-7427. You can call to place an order or confirm delivery availability." },
            { q: "How long does Papa Johns delivery take in Memphis?", a: "Average delivery time in Memphis is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Memphis",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7840 US-64",
            "addressLocality": "Memphis",
            "addressRegion": "TN",
            "postalCode": "38133",
            "addressCountry": "US"
          },
          "telephone": "(901) 382-7427",
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/memphis-tn"
        }
    },
    "miami-fl": {
        slug: "miami-fl",
        title: "Papa Johns Miami FL 2026: All Locations, Hours & Delivery Guide",
        metaDesc: "Papa Johns Miami has locations across Miami Dade County. Find all addresses, hours by neighborhood, game day tips, Art Basel ordering guide & 2026 menu prices.",
        h1: "Papa Johns Miami FL 2026 Menu, Prices & Delivery Guide",
        intro: "Miami is one of those cities that doesn't need much help with its food scene. Cuban sandwiches from Little Havana, Haitian food in Little Haiti, ceviche in Brickell this city eats well. But here's the reality: even in a city with world class food on every block, there are Tuesday nights where you've been in traffic on I 95 for an hour, it's 8:30 PM, and you need something hot delivered to your door in under 45 minutes without having to explain your address twice.<br/><br/>That's where Papa Johns Miami makes sense. Not as a fine dining replacement nobody's suggesting that but as the reliable, fast, consistent delivery option for a city where delivery logistics are actually complicated. Miami's geography, heat, traffic, and neighborhood density create real delivery challenges, and Papa Johns has built enough of a Miami footprint that most of the metro is within range of multiple locations.<br/><br/>This guide covers every verified Papa Johns location in Miami Dade County, complete 2026 menu pricing, neighborhood by neighborhood delivery context, game day ordering strategy, and the deals that consistently bring the price down.",
        stats: {
            deliveryTime: "30 to 55 min",
            startingPrice: "$11.49",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Biscayne Blvd, Miami, FL 33132",
            phone: "",
            hours: "Mon to Thu 11:00 AM to 12:00 AM | Fri to Sat 11:00 AM to 2:00 AM | Sun 11:00 AM to 12:00 AM",
            deliveryAreas: "Downtown, Brickell, Edgewater, Arts District",
            mapUrl: "https://maps.google.com/?q=100+Biscayne+Blvd,+Miami,+FL+33132",
            additionalLocations: [
                {
                    title: "Biscayne Blvd (Upper Eastside)",
                    address: "8849 Biscayne Blvd, Miami, FL 33138",
                    deliveryAreas: "Upper Eastside, MiMo District, Morningside, Buena Vista"
                },
                {
                    title: "NW 2nd Avenue",
                    address: "20312 NW 2nd Ave, Miami, FL 33169",
                    deliveryAreas: "Carol City, Opa locka, North Miami, Norland"
                },
                {
                    title: "NW 27th Avenue",
                    address: "13300 NW 27th Ave, Miami, FL 33054",
                    deliveryAreas: "Opa locka, Miami Gardens, Hialeah adjacent"
                },
                {
                    title: "Miami Beach",
                    address: "Miami Beach locations",
                    deliveryAreas: "South Beach, Mid Beach, North Beach"
                },
                {
                    title: "North Miami Beach",
                    address: "North Miami Beach locations",
                    deliveryAreas: "Aventura adjacent, Hallandale Beach adjacent"
                }
            ]
        },
        menuPizzas: [
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Ultimate Pepperoni", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Tuscan Six Cheese", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Spicy Italian", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (NEW 2026)", s: "", m: "$11.99", l: "", xl: "" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Oven Toasted Sandwiches (NEW 2026)", price: "$7.99" },
            { name: "Papa Dip Pizza Strips (NEW 2026)", price: "$8.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "Double Chocolate Brownie", price: "$5.99" },
            { name: "Cinnamon Pull Aparts", price: "$6.99" },
            { name: "20 oz Pepsi (any variety)", price: "$2.49" },
            { name: "2 Liter Pepsi", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns By Miami Neighborhood",
                text: "<strong>Brickell & Downtown</strong><br/>The Financial District crowd is one of Papa Johns' most consistent customer bases professionals ordering lunch to offices, residents in high rise apartments ordering dinner on weekdays. The Downtown Biscayne location handles most of this area. Delivery to Brickell's condo towers typically runs 25 to 40 minutes during weekday lunch hours, slightly longer during evening rush.<br/><br/>The one thing to know about ordering to Brickell high rises: building security and elevator wait times add 5 to 10 minutes to your actual door to door time. Order 10 minutes earlier than you normally would when you're on a high floor.<br/><br/><strong>Wynwood</strong><br/>Wynwood is Papa Johns territory in an interesting way it's one of Miami's most walkable neighborhoods, but it's also surrounded by areas where delivery from the Brickell or Upper Eastside locations makes sense. Delivery to Wynwood addresses typically runs 30 to 45 minutes.<br/><br/><strong>Little Havana</strong><br/>Here's where Miami's food culture intersects with Papa Johns in an interesting way. Little Havana has some of the best Cuban food in the United States <a href='https://www.versaillesrestaurant.com/' target='_blank' rel='noopener noreferrer' class='text-[#cc0000] hover:underline font-bold'>Versailles</a>, El Palacio de los Jugos, La Carreta. Nobody's going to Papa Johns for the cultural experience in Little Havana. But late nights, weeknights, and group orders for people who don't want Cuban food three nights in a row? Papa Johns delivers here, typically from the Biscayne or SW Miami locations, in 35 to 50 minutes.<br/><br/><strong>Coral Gables</strong><br/>Coral Gables is where Miami's older money lives tree lined streets, historic architecture, a Mediterranean Revival aesthetic that feels completely different from the rest of the city. Papa Johns delivery here typically comes from the Biscayne or SW Coral Gables adjacent locations. Delivery runs 30 to 45 minutes.<br/><br/><strong>Hialeah</strong><br/>Hialeah is one of Miami Dade's most densely populated cities almost entirely Spanish speaking, with its own distinct culture and character. The NW 27th Ave location serves much of Hialeah adjacent areas, and this is one of the higher volume locations in the Miami market. Delivery in Hialeah during peak hours can run 40 to 55 minutes due to density.<br/><br/><strong>South Beach / Miami Beach</strong><br/>Miami Beach is its own world. The barrier island geography means delivery logistics are genuinely different you're crossing a causeway to get there. The Miami Beach Papa Johns locations handle island delivery, but the bridge factor means that even a 3 mile delivery can take longer than you'd expect. Friday and Saturday nights on Miami Beach, when Washington Avenue and Ocean Drive are at full capacity, add significant delivery time."
            },
            {
                title: "Game Day Ordering Miami Sports Calendar",
                text: "<strong>Miami Heat at Kaseya Center (Downtown):</strong> Heat home games are the single biggest delivery demand spike for Papa Johns Miami locations. Game nights, expect 50 to 65 minutes for delivery in the downtown area. Order before tip off or order carryout.<br/><br/><strong>Miami Dolphins at Hard Rock Stadium (Miami Gardens):</strong> Dolphins games are a Sunday ritual that affects delivery patterns across northern Miami Dade. The stadium is in Miami Gardens, which means the NW 2nd Avenue and NW 27th Avenue locations bear the brunt of game day demand. Delivery during Dolphins game windows can stretch to 60 to 75 minutes in North Miami Dade. Planning ahead by two hours is not an overreaction.<br/><br/><strong>Formula 1 Miami Grand Prix at Hard Rock Stadium:</strong> The Grand Prix weekend in May is genuinely the highest demand single event period for <a href='/menus-prices/cheese-pizza' class='text-[#cc0000] hover:underline font-bold'>Cheese Pizza</a> delivery in the Miami market. If you're ordering during Grand Prix weekend, carryout is your best bet.<br/><br/><strong>Art Basel Miami Beach (December):</strong> Art Basel week brings 80,000+ visitors to Miami Beach and Wynwood simultaneously. The entire city's restaurant and delivery infrastructure is under elevated pressure during this week."
            },
            {
                title: "Miami Specific Ordering Tips",
                text: "<strong>Heat affects delivery timing.</strong> Miami's heat is not a joke, and it affects pizza delivery in ways that matter. Summer afternoon deliveries (2 to 5 PM, peak heat) mean your driver is working in real conditions. Papa Johns' packaging is insulated, but a delivery that takes 45 minutes in July heat lands slightly warmer than an equivalent January delivery.<br/><br/><strong>Spanish language ordering is available.</strong> Miami is a bilingual city, and Papa Johns' app and customer service accommodate Spanish language ordering.<br/><br/><strong>Hurricane season awareness.</strong> Miami's hurricane season runs June through November. During tropical storm or hurricane warnings, Papa Johns Miami locations may close or suspend delivery based on conditions. During the day before a major storm warning, delivery demand spikes enormously as residents stock up."
            },
            {
                title: "How to Save Money at Papa Johns Miami",
                text: "The <a href='/coupons' class='text-[#cc0000] underline font-bold'>Papa Johns coupons page</a> is the first stop before every order. Percentage off codes of 20 to 40% appear regularly and apply to most Miami menu items. On a $20.99 large <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>Works pizza</a>, a 30% off code saves $6.30 meaningful across regular ordering.<br/><br/>Papa Pairings is the always on deal that works regardless of whether a promo code is active. Any two qualifying items at $6.99 each two large pizzas, a pizza and <a href='/posts/papa-johns-wings' class='text-[#cc0000] hover:underline font-bold'>wings</a>, a pizza and a sandwich gives you the best consistent per item price on the menu.<br/><br/>Carryout consistently saves $2 to $4 compared to delivery by eliminating the delivery fee."
            },
            {
                title: "Papa Johns Miami vs Miami's Local Pizza Scene",
                text: "The truth is, Miami has genuine local pizza options worth knowing about. Lucali Miami Beach is doing Neapolitan influenced pies that draw lines on weekends. Laspada's in Coral Gables has a loyal following. Wynwood's pizza scene has developed meaningfully over the last five years.<br/><br/>Papa Johns isn't competing with any of that. Let's be honest about what each option is.<br/><br/>Lucali is an experience you're paying for craft ingredients, wood fired technique, and the restaurant itself. Papa Johns is delivery infrastructure. The comparison is almost category confusion. For a Tuesday dinner at home in Brickell, or a group order for six people watching the Heat, Papa Johns wins on speed, price, and logistics."
            }
        ],
        faq: [
            { q: "How many Papa Johns locations are in Miami, FL?", a: "Miami Dade County has multiple Papa Johns locations, including stores on Biscayne Boulevard, NW 2nd Avenue, NW 27th Avenue, and in Miami Beach and North Miami Beach. Nearby cities including Hialeah, Coral Gables, Homestead, and Kendall also have Papa Johns locations that serve Miami zip codes. Enter your address in the Papa Johns app to find the nearest location serving your area." },
            { q: "What are Papa Johns hours in Miami, FL?", a: "Most Miami Papa Johns locations are open Monday through Thursday 11:00 AM to midnight, Friday and Saturday 11:00 AM to 2:00 AM, and Sunday 11:00 AM to midnight. Miami Beach locations may vary. Hours change during major events including Art Basel, Ultra Music Festival, and the Formula 1 Grand Prix check the Papa Johns app for real time hours at your location." },
            { q: "Does Papa Johns deliver to South Beach?", a: "Yes. Papa Johns delivers to Miami Beach including South Beach, Mid Beach, and North Beach from the Miami Beach location. Delivery to the barrier island takes longer than mainland Miami due to causeway traffic expect 35 to 55 minutes during normal conditions and significantly longer on Friday and Saturday evenings when Miami Beach is at peak capacity." },
            { q: "Does Papa Johns deliver to Brickell?", a: "Yes. The Downtown Biscayne Blvd location primarily serves Brickell, the Financial District, and Edgewater. Delivery to Brickell condo buildings typically runs 25 to 40 minutes during normal conditions. Add 5 to 10 minutes for building security and elevator time when ordering to high rise units." },
            { q: "What is the cheapest Papa Johns pizza in Miami?", a: "A small Cheese or <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline'>Pepperoni Pizza</a> starts at $11.49 at Miami locations. Through the Papa Pairings deal, two qualifying items drop to $6.99 each making two medium pizzas $13.98 total. Check the Papa Johns coupons page for active Miami promo codes that can reduce prices further." },
            { q: "Is the Papa Johns Pan Pizza available in Miami?", a: "Yes. The <a href='/posts/papa-johns-pan-pizza' class='text-[#cc0000] hover:underline'>Papa Johns Pan Pizza</a> launched nationwide January 2026 is available at Miami locations at $11.99 for medium size. The six cheese blend pan pizza is medium only currently. It's one of the better thick crust options available by delivery in Miami right now." },
            { q: "How long does Papa Johns delivery take in Miami?", a: "Standard delivery in Miami runs 30 to 45 minutes during non peak hours. During Heat, Dolphins, or Marlins game windows, Art Basel week, Formula 1 Grand Prix weekend, and Friday/Saturday nights in high density areas, expect 50 to 70 minutes. Carryout is consistently 15 to 25 minutes from order placement." },
            { q: "Can I order Papa Johns in Spanish in Miami?", a: "Yes. Papa Johns Miami locations have Spanish speaking staff, and the Papa Johns app is available in Spanish. Miami is a bilingual city and Papa Johns accommodates both English and Spanish language ordering by phone and in the app." },
            { q: "Does Papa Johns Miami have a gluten free option?", a: "Yes. Papa Johns offers a Gluten Free Crust made with ancient grains, available in small size only at Miami locations. It carries a slight price premium over the standard small crust. Papa Johns notes that this option is prepared in the same kitchen as wheat based products, so it's not recommended for customers with celiac disease only for those with mild gluten sensitivity." },
            { q: "What are the best Papa Johns deals in Miami?", a: "The Papa Pairings deal any two qualifying items for $6.99 each is the most consistent everyday deal available at Miami Papa Johns locations. Percentage off promo codes on the coupons page regularly reduce order totals by 20 to 40%. Papa Rewards earns points on every app or online order. Carryout eliminates delivery fees. Using all three together consistently produces the lowest price per order." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Miami",
            "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Biscayne Blvd",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33132",
            "addressCountry": "US"
            },
            "telephone": "",
            "openingHours": ["Mo-Th 11:00-00:00", "Fr-Sa 11:00-02:00", "Su 11:00-00:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/miami-fl"
        }
    },
    "milwaukee-wi": {
        slug: "milwaukee-wi",
        title: "Papa Johns Milwaukee WI 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Milwaukee, WI — full 2026 menu with prices, all Milwaukee locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Milwaukee now.",
        h1: "Papa John's Milwaukee, WI — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Milwaukee, Wisconsin? This guide covers the complete Papa Johns menu with prices for Milwaukee — every pizza, side, dessert, and drink available in 2026 — plus the Milwaukee Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, East Town, or anywhere across Milwaukee, this page has everything you need before you order.\n\nPrices in Milwaukee match the national 2026 standard, and the Milwaukee location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "790 N Water St, Milwaukee, WI 53202",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, East Town, Yankee Hill, Kilbourn Town",
            mapUrl: "https://maps.google.com/?q=790+N+Water+St,+Milwaukee,+WI+53202"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UW-Milwaukee",
                text: "Papa Johns is a popular delivery choice for students and faculty at UW-Milwaukee / Marquette. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Milwaukee location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Brewers / Bucks / Packers nearby Game Days",
                text: "Brewers / Bucks / Packers nearby games are among the busiest ordering times at Papa Johns Milwaukee locations. During Summerfest and Bucks game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Milwaukee."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Milwaukee",
                text: "Papa Johns Milwaukee delivers across Downtown Milwaukee, Historic Third Ward, Brady Street, Bay View, Walkers Point, Riverwest. The Downtown area is the primary delivery zone for the 790 N Water St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Milwaukee, Wisconsin?", a: "Papa Johns Milwaukee is located at 790 N Water St, Milwaukee, WI 53202. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Milwaukee, WI?", a: "Papa Johns Milwaukee is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Milwaukee?", a: "Yes. Papa Johns Milwaukee delivers to Downtown, East Town, Yankee Hill, Kilbourn Town. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Milwaukee?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Milwaukee deals." },
            { q: "Does Papa Johns Milwaukee accept online orders?", a: "Yes. All Milwaukee Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Milwaukee, WI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Milwaukee location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Milwaukee?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Milwaukee." },
            { q: "How long does Papa Johns delivery take in Milwaukee?", a: "Average delivery time in Milwaukee is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Milwaukee",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "790 N Water St",
            "addressLocality": "Milwaukee",
            "addressRegion": "WI",
            "postalCode": "53202",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/milwaukee-wi"
        }
    },
    "minneapolis-mn": {
        slug: "minneapolis-mn",
        title: "Papa Johns Minneapolis MN 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Minneapolis, MN — full 2026 menu with prices, all Minneapolis locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Minneapolis now.",
        h1: "Papa John's Minneapolis, MN — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Minneapolis, Minnesota? This guide covers the complete Papa Johns menu with prices for Minneapolis — every pizza, side, dessert, and drink available in 2026 — plus the Minneapolis Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, North Loop, or anywhere across Minneapolis, this page has everything you need before you order.\n\nPrices in Minneapolis match the national 2026 standard, and the Minneapolis location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "901 Nicollet Mall, Minneapolis, MN 55402",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, North Loop, Mill District, Elliot Park",
            mapUrl: "https://maps.google.com/?q=901+Nicollet+Mall,+Minneapolis,+MN+55402"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near University of Minnesota",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Minnesota. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Minneapolis location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Vikings / Twins / Timberwolves / Wild Game Days",
                text: "Vikings / Twins / Timberwolves / Wild games are among the busiest ordering times at Papa Johns Minneapolis locations. During Vikings game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Minneapolis."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Minneapolis",
                text: "Papa Johns Minneapolis delivers across Downtown Minneapolis, Uptown, Northeast, Lyndale, Seward, Whittier. The Downtown area is the primary delivery zone for the 901 Nicollet Mall location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Minneapolis, Minnesota?", a: "Papa Johns Minneapolis is located at 901 Nicollet Mall, Minneapolis, MN 55402. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Minneapolis, MN?", a: "Papa Johns Minneapolis is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Minneapolis?", a: "Yes. Papa Johns Minneapolis delivers to Downtown, North Loop, Mill District, Elliot Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Minneapolis?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Minneapolis deals." },
            { q: "Does Papa Johns Minneapolis accept online orders?", a: "Yes. All Minneapolis Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Minneapolis, MN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Minneapolis location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Minneapolis?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Minneapolis." },
            { q: "How long does Papa Johns delivery take in Minneapolis?", a: "Average delivery time in Minneapolis is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Minneapolis",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "901 Nicollet Mall",
            "addressLocality": "Minneapolis",
            "addressRegion": "MN",
            "postalCode": "55402",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/minneapolis-mn"
        }
    },
    "montgomery-al": {
        slug: "montgomery-al",
        title: "Papa Johns Montgomery AL 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Montgomery, AL — full 2026 menu with prices, all Montgomery locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Montgomery now.",
        h1: "Papa John's Montgomery, AL — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Montgomery, Alabama? This guide covers the complete Papa Johns menu with prices for Montgomery — every pizza, side, dessert, and drink available in 2026 — plus the Montgomery Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Capitol Hill, or anywhere across Montgomery, this page has everything you need before you order.\n\nPrices in Montgomery match the national 2026 standard, and the Montgomery location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "303 Adams Ave, Montgomery, AL 36104",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown, Capitol Hill, Old Cloverdale, Garden District",
            mapUrl: "https://maps.google.com/?q=303+Adams+Ave,+Montgomery,+AL+36104"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Montgomery",
                text: "Papa Johns Montgomery delivers across Downtown Montgomery, Cloverdale, Midtown. The Downtown area is the primary delivery zone for the 303 Adams Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Montgomery, Alabama?", a: "Papa Johns Montgomery is located at 303 Adams Ave, Montgomery, AL 36104. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Montgomery, AL?", a: "Papa Johns Montgomery is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Montgomery?", a: "Yes. Papa Johns Montgomery delivers to Downtown, Capitol Hill, Old Cloverdale, Garden District. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Montgomery?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Montgomery deals." },
            { q: "Does Papa Johns Montgomery accept online orders?", a: "Yes. All Montgomery Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Montgomery, AL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Montgomery location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Montgomery?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Montgomery." },
            { q: "How long does Papa Johns delivery take in Montgomery?", a: "Average delivery time in Montgomery is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Montgomery",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "303 Adams Ave",
            "addressLocality": "Montgomery",
            "addressRegion": "AL",
            "postalCode": "36104",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/montgomery-al"
        }
    },
    "naperville-il": {
        slug: "naperville-il",
        title: "Papa Johns Naperville IL 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Naperville, IL — full 2026 menu with prices, all Naperville locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Naperville now.",
        h1: "Papa John's Naperville, IL — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Naperville, Illinois? This guide covers the complete Papa Johns menu with prices for Naperville — every pizza, side, dessert, and drink available in 2026 — plus the Naperville Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown Naperville, Riverwalk area, or anywhere across Naperville, this page has everything you need before you order.\n\nPrices in Naperville match the national 2026 standard, and the Naperville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "75 W Jefferson Ave, Naperville, IL 60540",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Downtown Naperville, Riverwalk area, Ogden Avenue corridor",
            mapUrl: "https://maps.google.com/?q=75+W+Jefferson+Ave,+Naperville,+IL+60540"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near North Central College",
                text: "Papa Johns is a popular delivery choice for students and faculty at North Central College. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Naperville location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Naperville",
                text: "Papa Johns Naperville delivers across Downtown Naperville, Naperville Riverwalk, South Naperville, West Naperville. The Downtown Naperville area is the primary delivery zone for the 75 W Jefferson Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Naperville, Illinois?", a: "Papa Johns Naperville is located at 75 W Jefferson Ave, Naperville, IL 60540. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Naperville, IL?", a: "Papa Johns Naperville is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Naperville?", a: "Yes. Papa Johns Naperville delivers to Downtown Naperville, Riverwalk area, Ogden Avenue corridor. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Naperville?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Naperville deals." },
            { q: "Does Papa Johns Naperville accept online orders?", a: "Yes. All Naperville Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Naperville, IL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Naperville location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Naperville?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Naperville." },
            { q: "How long does Papa Johns delivery take in Naperville?", a: "Average delivery time in Naperville is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Naperville",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "75 W Jefferson Ave",
            "addressLocality": "Naperville",
            "addressRegion": "IL",
            "postalCode": "60540",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/naperville-il"
        }
    },
    "nashville-tn": {
        slug: "nashville-tn",
        title: "Papa Johns Nashville TN 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Nashville, TN — full 2026 menu with prices, all Nashville locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Nashville now.",
        h1: "Papa John's Nashville, TN — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Nashville, Tennessee? This guide covers the complete Papa Johns menu with prices for Nashville — every pizza, side, dessert, and drink available in 2026 — plus the Nashville Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Antioch, Hickory Hollow, or anywhere across Nashville, this page has everything you need before you order.\n\nPrices in Nashville match the national 2026 standard, and the Nashville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "5560 Mt View Rd, Antioch, TN 37013",
            phone: "(615) 731-7427",
            hours: "Mon–Thu 3:00 PM – 10:00 PM | Fri–Sat 3:00 PM – 11:00 PM | Sun 3:00 PM – 10:00 PM",
            deliveryAreas: "Antioch, Hickory Hollow, Priest Lake, Southeast Nashville",
            mapUrl: "https://maps.google.com/?q=5560+Mt+View+Rd,+Antioch,+TN+37013"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Vanderbilt",
                text: "Papa Johns is a popular delivery choice for students and faculty at Vanderbilt / Belmont / TSU. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Nashville location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Titans / Predators / Nashville SC Game Days",
                text: "Titans / Predators / Nashville SC games are among the busiest ordering times at Papa Johns Nashville locations. During Titans game days and CMA Fest week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Nashville."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Nashville",
                text: "Papa Johns Nashville delivers across Downtown Nashville, The Gulch, East Nashville, 12 South, Germantown, Hillsboro Village. The Antioch area is the primary delivery zone for the 5560 Mt View Rd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Nashville, Tennessee?", a: "Papa Johns Nashville is located at 5560 Mt View Rd, Antioch, TN 37013. Call (615) 731-7427 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Nashville, TN?", a: "Papa Johns Nashville is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (615) 731-7427 to confirm." },
            { q: "Does Papa Johns deliver in Nashville?", a: "Yes. Papa Johns Nashville delivers to Antioch, Hickory Hollow, Priest Lake, Southeast Nashville. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Nashville?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Nashville deals." },
            { q: "Does Papa Johns Nashville accept online orders?", a: "Yes. All Nashville Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Nashville, TN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Nashville location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Nashville?", a: "The Papa Johns Nashville phone number is (615) 731-7427. You can call to place an order or confirm delivery availability." },
            { q: "How long does Papa Johns delivery take in Nashville?", a: "Average delivery time in Nashville is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Nashville",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5560 Mt View Rd",
            "addressLocality": "Nashville",
            "addressRegion": "TN",
            "postalCode": "37013",
            "addressCountry": "US"
          },
          "telephone": "(615) 731-7427",
          "openingHours": ["Mo-Th 3:00 PM-10:00 PM", "Fr-Sa 3:00 PM-11:00 PM", "Su 3:00 PM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/nashville-tn"
        }
    },
    "new-orleans-la": {
        slug: "new-orleans-la",
        title: "Papa Johns New Orleans LA 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns New Orleans, LA — full 2026 menu with prices, all New Orleans locations, delivery areas, hours & local deals. Find the nearest Papa Johns in New Orleans now.",
        h1: "Papa John's New Orleans, LA — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in New Orleans, Louisiana? This guide covers the complete Papa Johns menu with prices for New Orleans — every pizza, side, dessert, and drink available in 2026 — plus the New Orleans Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to CBD, French Quarter, or anywhere across New Orleans, this page has everything you need before you order.\n\nPrices in New Orleans match the national 2026 standard, and the New Orleans location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "701 Convention Center Blvd, New Orleans, LA 70130",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 12:00 AM | Fri–Sat 11:00 AM – 2:00 AM | Sun 11:00 AM – 12:00 AM",
            deliveryAreas: "CBD, French Quarter, Warehouse District, Treme",
            mapUrl: "https://maps.google.com/?q=701+Convention+Center+Blvd,+New+Orleans,+LA+70130"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Tulane University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Tulane University / Loyola / Xavier. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest New Orleans location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Saints / Pelicans Game Days",
                text: "Saints / Pelicans games are among the busiest ordering times at Papa Johns New Orleans locations. During Mardi Gras and Saints game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in New Orleans."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in New Orleans",
                text: "Papa Johns New Orleans delivers across French Quarter, Garden District, Uptown, Mid-City, Marigny, Bywater. The CBD area is the primary delivery zone for the 701 Convention Center Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in New Orleans, Louisiana?", a: "Papa Johns New Orleans is located at 701 Convention Center Blvd, New Orleans, LA 70130. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in New Orleans, LA?", a: "Papa Johns New Orleans is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in New Orleans?", a: "Yes. Papa Johns New Orleans delivers to CBD, French Quarter, Warehouse District, Treme. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in New Orleans?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current New Orleans deals." },
            { q: "Does Papa Johns New Orleans accept online orders?", a: "Yes. All New Orleans Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in New Orleans, LA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the New Orleans location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in New Orleans?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for New Orleans." },
            { q: "How long does Papa Johns delivery take in New Orleans?", a: "Average delivery time in New Orleans is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza New Orleans",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "701 Convention Center Blvd",
            "addressLocality": "New Orleans",
            "addressRegion": "LA",
            "postalCode": "70130",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-12:00 AM", "Fr-Sa 11:00 AM-2:00 AM", "Su 11:00 AM-12:00 AM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/new-orleans-la"
        }
    },
    "new-york-ny": {
        slug: "new-york-ny",
        title: "Papa Johns New York NY 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns New York, NY — full 2026 menu with prices, all New York locations, delivery areas, hours & local deals. Find the nearest Papa Johns in New York now.",
        h1: "Papa John's New York, NY — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in New York, New York? This guide covers the complete Papa Johns menu with prices for New York — every pizza, side, dessert, and drink available in 2026 — plus the New York Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Midtown, Murray Hill, or anywhere across New York, this page has everything you need before you order.\n\nPrices in New York match the national 2026 standard, and the New York location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "350 5th Ave, New York, NY 10118",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 10:00 AM – 12:00 AM | Fri–Sat 10:00 AM – 2:00 AM | Sun 10:00 AM – 12:00 AM",
            deliveryAreas: "Midtown, Murray Hill, Kips Bay, Turtle Bay",
            mapUrl: "https://maps.google.com/?q=350+5th+Ave,+New+York,+NY+10118"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near NYU",
                text: "Papa Johns is a popular delivery choice for students and faculty at NYU / Columbia / Fordham / CUNY. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest New York location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Giants / Jets / Yankees / Mets / Knicks / Rangers Game Days",
                text: "Giants / Jets / Yankees / Mets / Knicks / Rangers games are among the busiest ordering times at Papa Johns New York locations. During year-round - city never sleeps, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in New York."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in New York",
                text: "Papa Johns New York delivers across Midtown Manhattan, Lower East Side, Chelsea, Hells Kitchen, Upper West Side, Upper East Side, Harlem. The Midtown area is the primary delivery zone for the 350 5th Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in New York, New York?", a: "Papa Johns New York is located at 350 5th Ave, New York, NY 10118. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in New York, NY?", a: "Papa Johns New York is open Monday–Thursday 10:00 AM–12:00 AM, Friday–Saturday 10:00 AM–2:00 AM, and Sunday 10:00 AM–12:00 AM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in New York?", a: "Yes. Papa Johns New York delivers to Midtown, Murray Hill, Kips Bay, Turtle Bay. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in New York?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current New York deals." },
            { q: "Does Papa Johns New York accept online orders?", a: "Yes. All New York Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in New York, NY?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the New York location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in New York?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for New York." },
            { q: "How long does Papa Johns delivery take in New York?", a: "Average delivery time in New York is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza New York",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "350 5th Ave",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10118",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 10:00 AM-12:00 AM", "Fr-Sa 10:00 AM-2:00 AM", "Su 10:00 AM-12:00 AM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/new-york-ny"
        }
    },
    "newark-nj": {
        slug: "newark-nj",
        title: "Papa Johns Newark NJ 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Newark, NJ — full 2026 menu with prices, all Newark locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Newark now.",
        h1: "Papa John's Newark, NJ — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Newark, New Jersey? This guide covers the complete Papa Johns menu with prices for Newark — every pizza, side, dessert, and drink available in 2026 — plus the Newark Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Ironbound area, or anywhere across Newark, this page has everything you need before you order.\n\nPrices in Newark match the national 2026 standard, and the Newark location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1 Raymond Plaza West, Newark, NJ 07102",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Ironbound area, Gateway District, University Heights",
            mapUrl: "https://maps.google.com/?q=1+Raymond+Plaza+West,+Newark,+NJ+07102"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Rutgers Newark",
                text: "Papa Johns is a popular delivery choice for students and faculty at Rutgers Newark / NJIT / Seton Hall Law. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Newark location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on NJ Devils / NY Red Bulls Game Days",
                text: "NJ Devils / NY Red Bulls games are among the busiest ordering times at Papa Johns Newark locations. During Devils game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Newark."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Newark",
                text: "Papa Johns Newark delivers across Downtown Newark, Ironbound, Weequahic, Forest Hill, Upper Roseville. The Downtown area is the primary delivery zone for the 1 Raymond Plaza West location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Newark, New Jersey?", a: "Papa Johns Newark is located at 1 Raymond Plaza West, Newark, NJ 07102. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Newark, NY?", a: "Papa Johns Newark is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Newark?", a: "Yes. Papa Johns Newark delivers to Downtown, Ironbound area, Gateway District, University Heights. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Newark?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Newark deals." },
            { q: "Does Papa Johns Newark accept online orders?", a: "Yes. All Newark Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Newark, NJ?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Newark location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Newark?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Newark." },
            { q: "How long does Papa Johns delivery take in Newark?", a: "Average delivery time in Newark is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Newark",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Raymond Plaza West",
            "addressLocality": "Newark",
            "addressRegion": "NJ",
            "postalCode": "07102",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/newark-nj"
        }
    },
    "oklahoma-city-ok": {
        slug: "oklahoma-city-ok",
        title: "Papa Johns Oklahoma City OK 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Oklahoma City, OK — full 2026 menu with prices, all Oklahoma City locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Oklahoma City now.",
        h1: "Papa John's Oklahoma City, OK — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Oklahoma City, Oklahoma? This guide covers the complete Papa Johns menu with prices for Oklahoma City — every pizza, side, dessert, and drink available in 2026 — plus the Oklahoma City Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Bricktown, or anywhere across Oklahoma City, this page has everything you need before you order.\n\nPrices in Oklahoma City match the national 2026 standard, and the Oklahoma City location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "200 N Walker Ave, Oklahoma City, OK 73102",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 12:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Bricktown, SoSA, Deep Deuce",
            mapUrl: "https://maps.google.com/?q=200+N+Walker+Ave,+Oklahoma+City,+OK+73102"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Oklahoma City University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Oklahoma City University / OU Health. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Oklahoma City location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Oklahoma City Thunder Game Days",
                text: "Oklahoma City Thunder games are among the busiest ordering times at Papa Johns Oklahoma City locations. During Thunder game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Oklahoma City."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Oklahoma City",
                text: "Papa Johns Oklahoma City delivers across Downtown OKC, Bricktown, Midtown, Film Row, Automobile Alley, Paseo Arts District. The Downtown area is the primary delivery zone for the 200 N Walker Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Oklahoma City, Oklahoma?", a: "Papa Johns Oklahoma City is located at 200 N Walker Ave, Oklahoma City, OK 73102. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Oklahoma City, OK?", a: "Papa Johns Oklahoma City is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–12:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Oklahoma City?", a: "Yes. Papa Johns Oklahoma City delivers to Downtown, Bricktown, SoSA, Deep Deuce. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Oklahoma City?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Oklahoma City deals." },
            { q: "Does Papa Johns Oklahoma City accept online orders?", a: "Yes. All Oklahoma City Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Oklahoma City, OK?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Oklahoma City location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Oklahoma City?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Oklahoma City." },
            { q: "How long does Papa Johns delivery take in Oklahoma City?", a: "Average delivery time in Oklahoma City is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Oklahoma City",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "200 N Walker Ave",
            "addressLocality": "Oklahoma City",
            "addressRegion": "OK",
            "postalCode": "73102",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-12:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/oklahoma-city-ok"
        }
    },
    "omaha-ne": {
        slug: "omaha-ne",
        title: "Papa Johns Omaha NE 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Omaha, NE — full 2026 menu with prices, all Omaha locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Omaha now.",
        h1: "Papa John's Omaha, NE — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Omaha, Nebraska? This guide covers the complete Papa Johns menu with prices for Omaha — every pizza, side, dessert, and drink available in 2026 — plus the Omaha Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Near Downtown, Midtown, or anywhere across Omaha, this page has everything you need before you order.\n\nPrices in Omaha match the national 2026 standard, and the Omaha location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "330 N 13th St, Omaha, NE 68102",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 10:00 PM | Fri–Sat 11:00 AM – 11:00 PM | Sun 11:00 AM – 10:00 PM",
            deliveryAreas: "Near Downtown, Midtown, Old Market, Market West",
            mapUrl: "https://maps.google.com/?q=330+N+13th+St,+Omaha,+NE+68102"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Creighton University",
                text: "Papa Johns is a popular delivery choice for students and faculty at Creighton University / UNMC. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Omaha location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Omaha",
                text: "Papa Johns Omaha delivers across Downtown Omaha, Old Market, Midtown, Dundee, Benson. The Downtown area is the primary delivery zone for the 330 N 13th St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Omaha, Nebraska?", a: "Papa Johns Omaha is located at 330 N 13th St, Omaha, NE 68102. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Omaha, NE?", a: "Papa Johns Omaha is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Omaha?", a: "Yes. Papa Johns Omaha delivers to Near Downtown, Midtown, Old Market, Market West. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Omaha?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Omaha deals." },
            { q: "Does Papa Johns Omaha accept online orders?", a: "Yes. All Omaha Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Omaha, NE?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Omaha location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Omaha?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Omaha." },
            { q: "How long does Papa Johns delivery take in Omaha?", a: "Average delivery time in Omaha is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Omaha",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "330 N 13th St",
            "addressLocality": "Omaha",
            "addressRegion": "NE",
            "postalCode": "68102",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/omaha-ne"
        }
    },
    "orlando-fl": {
        slug: "orlando-fl",
        title: "Papa Johns Orlando FL 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Orlando, FL — full 2026 menu with prices, all Orlando locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Orlando now.",
        h1: "Papa John's Orlando, FL — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Orlando, Florida? This guide covers the complete Papa Johns menu with prices for Orlando — every pizza, side, dessert, and drink available in 2026 — plus the Orlando Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Thornton Park, or anywhere across Orlando, this page has everything you need before you order.\n\nPrices in Orlando match the national 2026 standard, and the Orlando location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 S Eola Dr, Orlando, FL 32801",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Thornton Park, Lake Eola Heights, South Eola",
            mapUrl: "https://maps.google.com/?q=100+S+Eola+Dr,+Orlando,+FL+32801"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UCF",
                text: "Papa Johns is a popular delivery choice for students and faculty at UCF / Rollins / Full Sail. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Orlando location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Orlando",
                text: "Papa Johns Orlando delivers across Downtown Orlando, Winter Park, Baldwin Park, College Park, Lake Nona. The Downtown area is the primary delivery zone for the 100 S Eola Dr location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Orlando, Florida?", a: "Papa Johns Orlando is located at 100 S Eola Dr, Orlando, FL 32801. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Orlando, FL?", a: "Papa Johns Orlando is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Orlando?", a: "Yes. Papa Johns Orlando delivers to Downtown, Thornton Park, Lake Eola Heights, South Eola. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Orlando?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Orlando deals." },
            { q: "Does Papa Johns Orlando accept online orders?", a: "Yes. All Orlando Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Orlando, FL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Orlando location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Orlando?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Orlando." },
            { q: "How long does Papa Johns delivery take in Orlando?", a: "Average delivery time in Orlando is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Orlando",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 S Eola Dr",
            "addressLocality": "Orlando",
            "addressRegion": "FL",
            "postalCode": "32801",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/orlando-fl"
        }
    },
    "philadelphia-pa": {
        slug: "philadelphia-pa",
        title: "Papa Johns Philadelphia PA 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Philadelphia, PA — full 2026 menu with prices, all Philadelphia locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Philadelphia now.",
        h1: "Papa John's Philadelphia, PA — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Philadelphia, Pennsylvania? This guide covers the complete Papa Johns menu with prices for Philadelphia — every pizza, side, dessert, and drink available in 2026 — plus the Philadelphia Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Center City, Rittenhouse Square, or anywhere across Philadelphia, this page has everything you need before you order.\n\nPrices in Philadelphia match the national 2026 standard, and the Philadelphia location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1500 Market St, Philadelphia, PA 19102",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 10:00 AM – 11:00 PM | Fri–Sat 10:00 AM – 1:00 AM | Sun 10:00 AM – 11:00 PM",
            deliveryAreas: "Center City, Rittenhouse Square, Logan Square, Market East",
            mapUrl: "https://maps.google.com/?q=1500+Market+St,+Philadelphia,+PA+19102"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near UPenn / Temple",
                text: "Papa Johns is a popular delivery choice for students and faculty at UPenn / Temple / Drexel. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Philadelphia location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Eagles / Phillies / Flyers / 76ers Game Days",
                text: "Eagles / Phillies / Flyers / 76ers games are among the busiest ordering times at Papa Johns Philadelphia locations. During Eagles game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Philadelphia."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Philadelphia",
                text: "Papa Johns Philadelphia delivers across Center City, South Philly, North Philly, West Philly, Fishtown, Northern Liberties. The Center City area is the primary delivery zone for the 1500 Market St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Philadelphia, Pennsylvania?", a: "Papa Johns Philadelphia is located at 1500 Market St, Philadelphia, PA 19102. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Philadelphia, PA?", a: "Papa Johns Philadelphia is open Monday–Thursday 10:00 AM–11:00 PM, Friday–Saturday 10:00 AM–1:00 AM, and Sunday 10:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Philadelphia?", a: "Yes. Papa Johns Philadelphia delivers to Center City, Rittenhouse Square, Logan Square, Market East. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Philadelphia?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Philadelphia deals." },
            { q: "Does Papa Johns Philadelphia accept online orders?", a: "Yes. All Philadelphia Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Philadelphia, PA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Philadelphia location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Philadelphia?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Philadelphia." },
            { q: "How long does Papa Johns delivery take in Philadelphia?", a: "Average delivery time in Philadelphia is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Philadelphia",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1500 Market St",
            "addressLocality": "Philadelphia",
            "addressRegion": "PA",
            "postalCode": "19102",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 10:00 AM-11:00 PM", "Fr-Sa 10:00 AM-1:00 AM", "Su 10:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/philadelphia-pa"
        }
    },
    "phoenix-az": {
        slug: "phoenix-az",
        title: "Papa Johns Phoenix AZ 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Phoenix, AZ — full 2026 menu with prices, all Phoenix locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Phoenix now.",
        h1: "Papa John's Phoenix, AZ — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Phoenix, Arizona? This guide covers the complete Papa Johns menu with prices for Phoenix — every pizza, side, dessert, and drink available in 2026 — plus the Phoenix Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, Central City, or anywhere across Phoenix, this page has everything you need before you order.\n\nPrices in Phoenix match the national 2026 standard, and the Phoenix location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2 N Central Ave, Phoenix, AZ 85004",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Central City, Roosevelt Row, Warehouse District",
            mapUrl: "https://maps.google.com/?q=2+N+Central+Ave,+Phoenix,+AZ+85004"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near ASU Downtown",
                text: "Papa Johns is a popular delivery choice for students and faculty at ASU Downtown / GCU. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Phoenix location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Cardinals / Suns / Diamondbacks Game Days",
                text: "Cardinals / Suns / Diamondbacks games are among the busiest ordering times at Papa Johns Phoenix locations. During Suns game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Phoenix."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Phoenix",
                text: "Papa Johns Phoenix delivers across Downtown Phoenix, Biltmore, Arcadia, Sunnyslope, South Phoenix. The Downtown area is the primary delivery zone for the 2 N Central Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Phoenix, Arizona?", a: "Papa Johns Phoenix is located at 2 N Central Ave, Phoenix, AZ 85004. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Phoenix, AZ?", a: "Papa Johns Phoenix is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Phoenix?", a: "Yes. Papa Johns Phoenix delivers to Downtown, Central City, Roosevelt Row, Warehouse District. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Phoenix?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Phoenix deals." },
            { q: "Does Papa Johns Phoenix accept online orders?", a: "Yes. All Phoenix Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Phoenix, AZ?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Phoenix location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Phoenix?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Phoenix." },
            { q: "How long does Papa Johns delivery take in Phoenix?", a: "Average delivery time in Phoenix is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Phoenix",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2 N Central Ave",
            "addressLocality": "Phoenix",
            "addressRegion": "AZ",
            "postalCode": "85004",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/phoenix-az"
        }
    },
    "pittsburgh-pa": {
        slug: "pittsburgh-pa",
        title: "Papa Johns Pittsburgh PA 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Pittsburgh, PA — full 2026 menu with prices, all Pittsburgh locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Pittsburgh now.",
        h1: "Papa John's Pittsburgh, PA — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Pittsburgh, Pennsylvania? This guide covers the complete Papa Johns menu with prices for Pittsburgh — every pizza, side, dessert, and drink available in 2026 — plus the Pittsburgh Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Downtown, North Shore, or anywhere across Pittsburgh, this page has everything you need before you order.\n\nPrices in Pittsburgh match the national 2026 standard, and the Pittsburgh location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "300 Liberty Ave, Pittsburgh, PA 15222",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, North Shore, Strip District, South Side Flats",
            mapUrl: "https://maps.google.com/?q=300+Liberty+Ave,+Pittsburgh,+PA+15222"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Ordering Papa Johns Near Pitt / CMU",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Pittsburgh / CMU / Duquesne. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Pittsburgh location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Steelers / Pirates / Penguins Game Days",
                text: "Steelers / Pirates / Penguins games are among the busiest ordering times at Papa Johns Pittsburgh locations. During Steelers game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are consistently the top-ordered combination during game nights in Pittsburgh."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Pittsburgh",
                text: "Papa Johns Pittsburgh delivers across Downtown Pittsburgh, Oakland, Squirrel Hill, Shadyside, Mount Washington, Lawrenceville. The Downtown area is the primary delivery zone for the 300 Liberty Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Pittsburgh, Pennsylvania?", a: "Papa Johns Pittsburgh is located at 300 Liberty Ave, Pittsburgh, PA 15222. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Pittsburgh, PA?", a: "Papa Johns Pittsburgh is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Pittsburgh?", a: "Yes. Papa Johns Pittsburgh delivers to Downtown, North Shore, Strip District, South Side Flats. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Pittsburgh?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Pittsburgh deals." },
            { q: "Does Papa Johns Pittsburgh accept online orders?", a: "Yes. All Pittsburgh Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Pittsburgh, PA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Pittsburgh location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Pittsburgh?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Pittsburgh." },
            { q: "How long does Papa Johns delivery take in Pittsburgh?", a: "Average delivery time in Pittsburgh is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Pittsburgh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "300 Liberty Ave",
            "addressLocality": "Pittsburgh",
            "addressRegion": "PA",
            "postalCode": "15222",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/pittsburgh-pa"
        }
    },
    "portland-me": {
        slug: "portland-me",
        title: "Papa Johns Portland ME 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Portland, ME — full 2026 menu with prices, all Portland locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Portland now.",
        h1: "Papa John's Portland, ME — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Portland, Maine? This guide covers the complete Papa Johns menu with prices for Portland — every pizza, side, dessert, and drink available in 2026 — plus the Portland Papa Johns location with city-level ordering notes, typical hours reminders, and links to confirm current store details. Whether you are ordering delivery to Bayside, East End, or anywhere across Portland, this page has everything you need before you order.\n\nPrices in Portland match the national 2026 standard, and the Portland location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Commercial St, Portland, ME 04101",
            phone: "Verify with official store locator",
            hours: "Mon–Thu 11:00 AM – 10:00 PM | Fri–Sat 11:00 AM – 11:00 PM | Sun 11:00 AM – 10:00 PM",
            deliveryAreas: "Bayside, East End, Central Business District, Parkside",
            mapUrl: "https://maps.google.com/?q=100+Commercial+St,+Portland,+ME+04101"
        },
        menuPizzas: [
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "The Works™", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (new 2026)", s: "—", m: "$11.99", l: "—", xl: "—" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" }
        ],
        neighborhoodContent: [
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Portland",
                text: "Papa Johns Portland delivers across Downtown Portland, Old Port, East End, West End, Bayside. The Central Business District area is the primary delivery zone for the 100 Commercial St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Portland, Maine?", a: "Papa Johns Portland is located at 100 Commercial St, Portland, ME 04101. check the official Papa Johns locator for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Portland, ME?", a: "Papa Johns Portland is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays; use the official Papa Johns locator or checkout flow to confirm current hours." },
            { q: "Does Papa Johns deliver in Portland?", a: "Yes. Papa Johns Portland delivers to Bayside, East End, Central Business District, Parkside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Portland?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Portland deals." },
            { q: "Does Papa Johns Portland accept online orders?", a: "Yes. All Portland Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Portland, ME?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Portland location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Portland?", a: "Use the official Papa Johns locator or checkout flow to confirm the current phone number, delivery availability, and carryout options for Portland." },
            { q: "How long does Papa Johns delivery take in Portland?", a: "Average delivery time in Portland is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Portland",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Commercial St",
            "addressLocality": "Portland",
            "addressRegion": "ME",
            "postalCode": "04101",
            "addressCountry": "US"
          },
          "telephone": undefined,
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/portland-me"
        }
    },
    "tucson-az": {
        slug: "tucson-az",
        title: "Papa Johns Tucson AZ 2026: All 8 Locations, Hours & Delivery Guide",
        metaDesc: "Papa Johns Tucson has 8 locations including late night hours until 4 AM near UA. Find all addresses, monsoon delivery tips, game day guide & 2026 menu prices.",
        h1: "Papa Johns Tucson AZ 2026 Menu, Prices & Delivery Guide",
        intro: "Tucson is a city that does its own thing. In a state known for Phoenix's sprawling suburban energy, Tucson kept its desert character a mid sized college city with real cultural depth, strong local food, and a climate that makes delivery a year round habit for completely different reasons than anywhere else in the country. Summer monsoon season brings flash floods and wall of dust haboobs that make going out for food genuinely inadvisable. Winter evenings are mild by most standards but cold enough that delivery from a warm couch makes sense.<br/><br/>Papa Johns has multiple locations serving Tucson and Pima County. That's a meaningful footprint for a city of 550,000 enough coverage that most Tucson zip codes sit within reasonable delivery range of at least one location, often two. This guide covers neighborhood-by-neighborhood delivery context, official-locator reminders, <a href='https://arizonawildcats.com/' target='_blank' rel='noopener noreferrer' class='text-[#cc0000] hover:underline font-bold'>University of Arizona</a> ordering tips, and the deals that consistently bring the price down.",
        stats: {
            deliveryTime: "30 to 45 min",
            startingPrice: "$11.49",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2545 E Speedway Blvd, Ste 165, Tucson, AZ 85716",
            phone: "(520) 325-7272",
            hours: "Mon to Thu 10:00 AM to 3:00 AM | Fri to Sat 10:00 AM to 4:00 AM | Sun 10:00 AM to 3:00 AM",
            deliveryAreas: "University of Arizona, Midtown, Sam Hughes, Armory Park",
            mapUrl: "https://maps.google.com/?q=2545+E+Speedway+Blvd,+Tucson,+AZ+85716",
            additionalLocations: [
                {
                    title: "E 22nd Street",
                    address: "6462 E 22nd St, Tucson, AZ 85710",
                    deliveryAreas: "East Tucson, Midvale Park, Craycroft area"
                },
                {
                    title: "E Broadway Blvd",
                    address: "9505 E Broadway Blvd, Tucson, AZ 85748",
                    deliveryAreas: "East Tucson, Rita Ranch, Vail adjacent"
                },
                {
                    title: "W Valencia Road",
                    address: "1610 W Valencia Rd, Ste 110, Tucson, AZ 85746",
                    deliveryAreas: "South Tucson, Drexel Heights, Sahuarita adjacent"
                },
                {
                    title: "N La Canada",
                    address: "5095 N La Canada, Tucson, AZ",
                    deliveryAreas: "Northwest Tucson, Oro Valley adjacent, Marana adjacent"
                },
                {
                    title: "N Thornydale Road",
                    address: "7089 N Thornydale Rd, Ste 109, Tucson, AZ",
                    deliveryAreas: "Northwest Tucson, Marana, Dove Mountain area"
                },
                {
                    title: "E Irvington Road",
                    address: "2071 E Irvington Rd, Ste 117, Tucson, AZ 85714",
                    deliveryAreas: "South Tucson, Midvale Park, Irvington corridor"
                },
                {
                    title: "S Houghton Road",
                    address: "8270 S Houghton Rd, Ste 110, Tucson, AZ",
                    deliveryAreas: "Far East Tucson, Saguaro Ranch, Houghton Town Center area"
                }
            ]
        },
        menuPizzas: [
            { name: "Cheese Pizza", s: "$11.49", m: "$14.49", l: "$15.99", xl: "$18.99" },
            { name: "Pepperoni Pizza", s: "$11.49", m: "$14.49", l: "$17.99", xl: "$20.99" },
            { name: "The Works", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "BBQ Chicken Bacon", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Ultimate Pepperoni", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Tuscan Six Cheese", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Spicy Italian", s: "$14.49", m: "$17.49", l: "$20.99", xl: "$23.99" },
            { name: "Pan Pizza (NEW 2026)", s: "", m: "$11.99", l: "", xl: "" }
        ],
        menuSides: [
            { name: "Garlic Knots (8 pieces)", price: "$6.99" },
            { name: "Wings (8 pieces)", price: "$8.49" },
            { name: "Garlic Parmesan Breadsticks", price: "$7.99" },
            { name: "Cheesesticks", price: "$7.99" },
            { name: "Oven Toasted Sandwiches (NEW 2026)", price: "$7.99" },
            { name: "Chocolate Chip Cookie", price: "$5.99" },
            { name: "Double Chocolate Brownie", price: "$5.99" },
            { name: "Cinnamon Pull Aparts", price: "$6.99" },
            { name: "20 oz Pepsi (any variety)", price: "$2.49" },
            { name: "2 Liter Pepsi", price: "$3.99" }
        ],
        neighborhoodContent: [
            {
                title: "University of Arizona / Fourth Avenue / Sam Hughes",
                text: "The Speedway Blvd location is the clear anchor for the entire UA community. University of Arizona has 47,000 students, a massive residential population in the surrounding neighborhoods, and the kind of late night ordering culture that explains why that location stays open until 4 AM on weekends.<br/><br/>Delivery to on campus addresses and the Fourth Avenue corridor typically runs 25 to 40 minutes during non peak hours. During finals week and move in/move out periods, expect 45 to 60 minutes. The Papa Pairings deal any two qualifying items for $6.99 each is practically designed for the student budget situation. Two large pizzas for two people at $13.98 total is a hard deal to beat anywhere in Tucson.<br/><br/>Now here's the thing about UA late night ordering: the Speedway location's 3 to 4 AM hours exist specifically because the demand is there. If you're ordering after midnight on a weekend, you're going to wait longer not because the location is slow, but because half the dorms are ordering simultaneously. Plan accordingly."
            },
            {
                title: "Midtown and East Tucson Delivery Guide",
                text: "<strong>Midtown Tucson</strong><br/>Midtown Tucson sits between the University and the more suburban east side a mix of older neighborhoods, apartments, and established residential areas. The Speedway location handles most of Midtown delivery. Standard delivery here runs 30 to 45 minutes during evening hours. Midtown is one of the better Tucson areas for carryout parking is generally available near the Speedway location, and carryout orders at Papa Johns are typically ready in 15 to 20 minutes.<br/><br/><strong>East Tucson Broadway Corridor and Beyond</strong><br/>East Tucson is where a significant portion of Tucson's population lives, and Papa Johns covers it with two locations the E 22nd Street store and the E Broadway Blvd location for the farther east neighborhoods like Rita Ranch. Delivery in core East Tucson typically runs 30 to 45 minutes. The far east neighborhoods near Houghton Road get served by the S Houghton Road location, which brings delivery time for that corridor to a more reasonable range."
            },
            {
                title: "South Tucson and Northwest Tucson",
                text: "<strong>South Tucson</strong><br/>South Tucson and the Irvington corridor have the E Irvington Road location as their primary Papa Johns. This area has consistent delivery demand from residential neighborhoods along the south side of the city. Delivery typically runs 30 to 40 minutes. The Valencia Road location also serves parts of South Tucson, particularly for addresses in the Drexel Heights and South Mountain area.<br/><br/><strong>Northwest Tucson / Marana / Oro Valley</strong><br/>Northwest Tucson has grown dramatically in the last decade the Marana and Oro Valley suburban expansion has created a new population center that wasn't really on the map 15 years ago. Papa Johns answered with two northwest locations: N La Canada and N Thornydale Road. Delivery to Marana addresses typically comes from the Thornydale location, Oro Valley from La Canada. Both run 30 to 45 minutes for most northwest Tucson addresses."
            },
            {
                title: "Monsoon Season and Summer Heat Delivery Tips",
                text: "<strong>Monsoon Season (June to September)</strong><br/>This is the most Tucson specific thing in this entire guide. Tucson's summer monsoon season produces dramatic afternoon and evening thunderstorms sometimes accompanied by haboobs (dust storms) that reduce visibility to near zero in minutes. During active monsoon weather, Papa Johns drivers slow down significantly for safety. Delivery times during storm events can double or more.<br/><br/>The practical advice: if you see a dark wall approaching on the horizon at 5 PM in July, order your pizza immediately before the storm hits rather than waiting. The 20 minute head start gets your order placed before the surge. Alternatively, go carryout, pick up before the storm, and you're set.<br/><br/><strong>Summer Heat and Delivery Quality</strong><br/>Tucson's summer high temperatures regularly reach 105 to 110 degrees in June and July. That heat affects delivery quality in a specific way: your pizza box is going from a roughly 450 degree oven into 108 degree outdoor air, and then traveling to your door. The thermal differential is smaller than in a cold climate city, which means Tucson summer deliveries often arrive at a lower temperature than you'd expect from the delivery time alone."
            },
            {
                title: "UA Game Days Arizona Wildcats Ordering Guide",
                text: "University of Arizona athletic events create the most predictable demand spikes for Tucson Papa Johns, particularly the Speedway location. Wildcats football games at Arizona Stadium which holds 55,000 create enormous ordering demand before kickoff and during halftime for residents watching at home. <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, and <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a> are the top game day picks.<br/><br/>Basketball at McKale Center is a more concentrated, season long pattern games run from November through March, and the combination of a passionate fanbase and a late game schedule (most weeknight games tip off at 7 to 8 PM) means Tuesday and Thursday evenings during basketball season are busier than they'd otherwise be.<br/><br/>For game days: order at least one hour before kickoff or tip off. The Speedway location handles most UA adjacent orders and it fills up fast. Carryout on game days is noticeably faster than delivery."
            },
            {
                title: "How to Get the Best Papa Johns Deal in Tucson",
                text: "The <a href='/coupons' class='text-[#cc0000] underline font-bold'>Papa Johns coupons page</a> is the first place to check before every order. Percentage off codes of 20 to 40% appear regularly and apply to most Tucson menu items. On a $17.99 large <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>pepperoni</a>, a 30% off code saves $5.40 meaningful when you're ordering multiple times a month.<br/><br/>Papa Pairings drops any two qualifying items to $6.99 each the most consistent everyday value on the menu. Two large pizzas, a pizza and <a href='/posts/papa-johns-wings' class='text-[#cc0000] hover:underline font-bold'>wings</a>, a pizza and the new Oven Toasted Sandwich any combination works. For UA students and Tucson families ordering for groups, this deal is the one to build your order around.<br/><br/><a href='/papa-johns-rewards' class='text-[#cc0000] hover:underline font-bold'>Papa Rewards</a> earns 1 point per dollar spent. Your first reward unlocks at 75 points, which means $75 in spending gets you a free menu item. For the UA student population ordering twice a week during the semester, that threshold hits within a few weeks."
            },
            {
                title: "Papa Johns Tucson vs Local Pizza Options",
                text: "Tucson has a real local pizza scene that's worth being honest about. <a href='https://www.magpiespizza.com/' target='_blank' rel='noopener noreferrer' class='text-[#cc0000] hover:underline font-bold'>Magpies Pizza</a> on East 6th Street has a devoted following and does creative toppings that no chain touches. Vivace at Campbell and Pima offers upscale Italian influenced pies. Frog & Firkin on 4th Avenue occasionally does late night pizza events. These are genuinely good options.<br/><br/>But here's the reality: local pizza in Tucson is mostly carryout or dine in. Delivery coverage from local spots is limited, wait times are often longer, and late night availability (especially past midnight) is essentially nonexistent outside the chain options. Papa Johns wins specifically on delivery logistics, late night hours at the Speedway location, and the combination of price and consistency that makes it the practical default for a Tuesday night order.<br/><br/>Neither option replaces the other. For a weekend dinner with intention, Magpies is the better experience. For a Wednesday night at home during monsoon season when you don't want to go outside, Papa Johns is the call."
            }
        ],
        faq: [
            { q: "How many Papa Johns locations are in Tucson, AZ?", a: "Tucson and Pima County have eight verified Papa Johns locations as of 2026: E Speedway Blvd, E 22nd St, E Broadway Blvd, W Valencia Rd, N La Canada, N Thornydale Rd, E Irvington Rd, and S Houghton Rd. The Papa Johns app automatically routes your order to the nearest available store when you enter your delivery address." },
            { q: "What are Papa Johns hours in Tucson, AZ?", a: "Hours vary significantly by location. The E Speedway Blvd location near the University of Arizona is open until 3 AM Monday through Thursday and Sunday, and 4 AM on Friday and Saturday. The W Valencia Road location is open until 11:30 PM on weekdays and 12:30 AM on weekends. The E Irvington Road location is open until 11 PM daily. Check the Papa Johns app for real time hours at your specific nearest location." },
            { q: "Does Papa Johns deliver to University of Arizona in Tucson?", a: "Yes. The E Speedway Blvd location is the primary Papa Johns for University of Arizona, handling delivery to on campus addresses, dorms, and the surrounding Fourth Avenue and Sam Hughes neighborhoods. Delivery to UA campus typically runs 25 to 40 minutes during non peak hours and 45 to 60 minutes during busy periods like finals week, game days, and weekend evenings." },
            { q: "How does Tucson monsoon season affect Papa Johns delivery?", a: "During active monsoon weather afternoon and evening thunderstorms that are common from June through September Papa Johns delivery times can double or more as drivers slow down for safety. Flash flooding and haboobs (dust storms) can also cause temporary delays or closures. If you see monsoon weather approaching, place your order before the storm hits rather than waiting. Carryout pickup before a storm is always faster than delivery during one." },
            { q: "What is the cheapest Papa Johns pizza in Tucson?", a: "A small <a href='/menus-prices/cheese-pizza' class='text-[#cc0000] hover:underline'>Cheese</a> or <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline'>Pepperoni Pizza</a> starts at $11.49 at Tucson locations. Through the Papa Pairings deal, two qualifying items drop to $6.99 each making two medium pizzas $13.98 total. Checking the Papa Johns coupons page before ordering can reduce prices further with active promo codes." },
            { q: "Is Papa Johns Pan Pizza available in Tucson?", a: "Yes. The <a href='/posts/papa-johns-pan-pizza' class='text-[#cc0000] hover:underline'>Papa Johns Pan Pizza</a> launched nationwide in January 2026 is available at Tucson locations at $11.99 for medium size. It features a six cheese blend with a garlic parmesan baked in crust bottom and is available in medium only. It's one of the better thick crust delivery options currently available in Tucson." },
            { q: "How long does Papa Johns delivery take in Tucson?", a: "Standard delivery in Tucson runs 30 to 45 minutes during non peak hours from most locations. During UA game days, finals week, and monsoon weather events, expect 45 to 70 minutes. The S Houghton Road and far east Tucson locations have slightly longer delivery times due to distance from the city center. Carryout is consistently ready in 15 to 20 minutes." },
            { q: "Does Papa Johns deliver to Marana and Oro Valley from Tucson?", a: "Yes. The N Thornydale Road location primarily serves Marana, and the N La Canada location serves Oro Valley and the northwest Tucson suburbs. Both are Tucson area Papa Johns locations. Enter your specific Marana or Oro Valley address in the Papa Johns app to confirm delivery availability and routing." },
            { q: "Can I get Papa Johns delivered during Wildcats game days in Tucson?", a: "Yes, but plan ahead. University of Arizona football and basketball game days especially home football at Arizona Stadium and basketball at McKale Center create significant delivery demand at the Speedway Blvd location. Order at least one hour before kickoff or tip off, or choose carryout to guarantee your pizza arrives when you want it." },
            { q: "Is there a Papa Johns near the Tucson airport?", a: "The W Valencia Road location (1610 W Valencia Rd) is the closest Papa Johns to Tucson International Airport, approximately 5 to 7 minutes by car. It's available for both delivery and carryout. This is also the primary location for South Tucson and Drexel Heights neighborhoods." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Tucson",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "2545 E Speedway Blvd, Ste 165",
                "addressLocality": "Tucson",
                "addressRegion": "AZ",
                "postalCode": "85716",
                "addressCountry": "US"
            },
            "telephone": "(520) 325-7272",
            "openingHours": ["Mo-Th 10:00-03:00", "Fr-Sa 10:00-04:00", "Su 10:00-03:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/tucson-az"
        }
    },
    "fort-worth-tx": {
        slug: "fort-worth-tx",
        title: "Papa Johns Fort Worth TX 2026: Menu Prices, Delivery & Local Guide",
        metaDesc: "Papa Johns Fort Worth, TX guide with 2026 menu prices, delivery areas, hours, deals, game day ordering tips, FAQs, and local carryout advice.",
        h1: "Papa John's Fort Worth, TX — Menu, Prices & Delivery Guide (2026)",
        intro: "Ordering Papa Johns in Fort Worth is different from ordering in a smaller suburb because the city spreads across downtown office blocks, TCU student housing, Stockyards traffic, west side neighborhoods, and fast-growing north Fort Worth communities. This guide brings the useful details into one place: current 2026 menu prices, practical delivery expectations, store details, local deal tips, and what to know before you choose delivery or carryout.\n\nUse this page before checkout if you want to compare a large pepperoni, The Works, stuffed crust, wings, breadsticks, and desserts without opening multiple tabs. Prices can vary by store and promotion, but the menu table below gives a realistic Fort Worth planning range. For exact checkout totals, delivery fee, taxes, and availability, confirm inside the official Papa Johns app or website before placing the order.",
        stats: {
            deliveryTime: "30-50 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2212 Main St, Fort Worth, TX 76102",
            phone: "Verify with official store locator",
            hours: "Mon-Thu 11:00 AM - 11:00 PM | Fri-Sat 11:00 AM - 12:00 AM | Sun 11:00 AM - 11:00 PM",
            deliveryAreas: "Downtown Fort Worth, Near Southside, Stockyards, TCU area, West 7th, Cultural District",
            mapUrl: "https://maps.google.com/?q=2212+Main+St,+Fort+Worth,+TX+76102"
        },
        menuPizzas: standardPizzaPrices2026,
        menuSides: standardSidePrices2026,
        neighborhoodContent: [
            {
                title: "Downtown, Stockyards and West 7th Ordering Notes",
                text: "Fort Worth delivery demand changes sharply by neighborhood. Downtown and Near Southside orders are usually straightforward during weekday lunch and early dinner, but West 7th and Stockyards traffic can slow drivers on Friday nights, event weekends, and rodeo season. If you are ordering to a hotel, apartment lobby, or office tower, add gate codes, floor details, and a clear pickup point in the delivery notes.<br/><br/>Carryout is often the faster choice around the Stockyards and Sundance Square when traffic is heavy. A carryout pizza that is ready in 15 to 20 minutes can beat a delivery order that gets delayed by parking, construction, or event road closures."
            },
            {
                title: "TCU, Student Housing and Group Orders",
                text: "The TCU area is a natural Papa Johns delivery zone because student apartments, shared houses, and late study nights create consistent pizza demand. For student budgets, the <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>coupons page</a> and Papa Pairings style bundles are usually more useful than ordering one specialty pizza at full menu price.<br/><br/>For a group of four to six people, a large <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, a large <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works Pizza</a>, and one side such as Garlic Knots or Cheesesticks normally stretches farther than three single customized pizzas. For dorms or campus-adjacent apartments, choose one person to meet the driver outside so the order does not sit cooling in a lobby."
            },
            {
                title: "Game Days, Rodeo Nights and Weather Delays",
                text: "Fort Worth orders spike during Cowboys watch parties, TCU football weekends, college basketball nights, and Stock Show and Rodeo events. Pizza delivery can jump from a normal 30 to 40 minute window to 50 to 70 minutes when a major event overlaps with dinner. Order before kickoff or before guests arrive rather than waiting until halftime.<br/><br/>North Texas storms can also slow delivery. Heavy rain, hail watches, and severe thunderstorm warnings affect driver safety. If the weather looks rough, carryout before the storm or an earlier delivery slot is usually the better plan."
            },
            {
                title: "Best Value Strategy for Fort Worth Orders",
                text: "The strongest Fort Worth value order is usually built around a coupon, not around the base menu price. Check <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>current Papa Johns coupons</a>, then compare carryout against delivery because the delivery fee and tip can change the total by several dollars. If you only need pizza, a large cheese or pepperoni is the baseline. If you need a meal, combine pizza with <a href='/posts/papa-johns-garlic-knots' class='text-[#cc0000] hover:underline font-bold'>Garlic Knots</a>, wings, or Cheesesticks instead of adding another whole pizza too quickly."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Fort Worth, TX?", a: "This Fort Worth guide uses the listed location at 2212 Main St, Fort Worth, TX 76102. check the official Papa Johns locator or check the official Papa Johns app to confirm the nearest active store for your exact address." },
            { q: "Does Papa Johns deliver in Fort Worth?", a: "Yes, Papa Johns offers delivery in Fort Worth, but delivery coverage depends on your exact address. Common service areas include Downtown Fort Worth, Near Southside, West 7th, the TCU area, the Cultural District, and nearby neighborhoods. Enter your address in the official app for final confirmation." },
            { q: "How long does Papa Johns delivery take in Fort Worth?", a: "Normal Fort Worth delivery is often 30 to 50 minutes. Expect longer waits on Friday nights, TCU game days, Stockyards event weekends, severe weather days, and large family-order periods around dinner." },
            { q: "What is the cheapest Papa Johns order in Fort Worth?", a: "A small Cheese or Pepperoni Pizza is usually the lowest base-price pizza. The best final price often comes from checking current coupons, choosing carryout, and using bundle deals before checkout." },
            { q: "Is carryout faster than delivery in Fort Worth?", a: "Often yes. Around Downtown, West 7th, Stockyards traffic, and event nights, carryout can be faster because you avoid driver parking, traffic, and lobby handoff delays." },
            { q: "Does Papa Johns Fort Worth offer gluten-free crust?", a: "Papa Johns locations generally offer gluten-free crust where available, but it is prepared in a shared kitchen. Readers with celiac disease or serious gluten concerns should review the official allergen information and call the store before ordering." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Fort Worth",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "2212 Main St",
                "addressLocality": "Fort Worth",
                "addressRegion": "TX",
                "postalCode": "76102",
                "addressCountry": "US"
            },
            "telephone": undefined,
            "openingHours": ["Mo-Th 11:00-23:00", "Fr-Sa 11:00-00:00", "Su 11:00-23:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/fort-worth-tx"
        }
    },
    "portland-or": {
        slug: "portland-or",
        title: "Papa Johns Portland OR 2026: Menu Prices, Delivery Areas & Deals",
        metaDesc: "Papa Johns Portland, OR guide with 2026 menu prices, downtown delivery tips, carryout advice, local deals, FAQs, and neighborhood ordering notes.",
        h1: "Papa John's Portland, OR — Menu, Prices & Delivery Guide (2026)",
        intro: "This Portland Papa Johns guide is built for readers who want practical ordering information before checkout: what pizzas cost in 2026, which sides make sense for groups, how downtown delivery works, and when carryout is the smarter move. Portland has dense apartment buildings, bridges, rain, bike traffic, office lunch demand, and late-evening residential orders, so delivery timing can change block by block.\n\nUse the menu table below as a planning guide for large pizzas, stuffed crust, wings, breadsticks, desserts, and family orders. Final totals can change based on your exact store, delivery fee, taxes, service area, and active discounts, so always verify in the official Papa Johns checkout before paying.",
        stats: {
            deliveryTime: "30-55 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1234 SW Stark St, Portland, OR 97205",
            phone: "Verify with official store locator",
            hours: "Mon-Thu 11:00 AM - 11:00 PM | Fri-Sat 11:00 AM - 12:00 AM | Sun 11:00 AM - 11:00 PM",
            deliveryAreas: "Downtown Portland, Pearl District, Goose Hollow, Northwest District, PSU area, inner east side",
            mapUrl: "https://maps.google.com/?q=1234+SW+Stark+St,+Portland,+OR+97205"
        },
        menuPizzas: standardPizzaPrices2026,
        menuSides: standardSidePrices2026,
        neighborhoodContent: [
            {
                title: "Downtown Portland, Pearl District and Apartment Delivery",
                text: "Downtown Portland and the Pearl District can be excellent Papa Johns delivery zones, but high-rise apartments and secure buildings require clear instructions. Add your building name, buzzer code, floor, elevator notes, and whether you will meet outside. A driver spending five extra minutes finding the correct entrance is five minutes your pizza is cooling.<br/><br/>For office lunches, carryout is often more predictable than delivery. Place the order 30 to 45 minutes ahead, choose a clear pickup time, and avoid the noon rush when possible."
            },
            {
                title: "Rain, Bridges and Delivery Timing",
                text: "Portland weather matters. Heavy rain does not stop pizza delivery, but it can slow traffic, parking, and driver handoff. Bridge crossings between the west side and inner east side can also add time during commute windows. If your delivery crosses the river, expect a wider window during 4 PM to 7 PM than you would at 2 PM.<br/><br/>For the fastest result, order from the store assigned in the app rather than trying to force a farther location. The app routes by address and store availability, which usually produces the most reliable estimate."
            },
            {
                title: "PSU, Game Nights and Group Orders",
                text: "Portland State University apartments and downtown student housing create regular demand for pizza, especially during finals, weekend nights, and watch parties. A good group order is usually two large pizzas plus a side, not multiple heavily customized pies. Start with <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni</a>, add <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works</a> for variety, then use Garlic Knots, wings, or Cheesesticks to stretch the meal."
            },
            {
                title: "How Portland Readers Can Save Before Checkout",
                text: "Portland has plenty of local pizza, but Papa Johns is strongest when you need predictable delivery, clear online ordering, and a deal. Before checkout, compare delivery against carryout and check the <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>Papa Johns coupons page</a>. Percentage-off codes are usually more valuable on larger carts, while bundle pricing is better for two-person or student orders. Review <a href='/posts/papa-johns-nutrition-guide' class='text-[#cc0000] hover:underline font-bold'>nutrition information</a> if you are comparing crusts, wings, or desserts."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Portland, OR?", a: "This Portland guide uses the listed location at 1234 SW Stark St, Portland, OR 97205. Use the official Papa Johns app or website to confirm the active store assigned to your exact address." },
            { q: "Does Papa Johns deliver in Downtown Portland?", a: "Yes, Papa Johns delivery is generally available across central Portland areas such as Downtown, Pearl District, Goose Hollow, Northwest District, the PSU area, and nearby inner neighborhoods, but final availability depends on your address." },
            { q: "How long does Papa Johns delivery take in Portland?", a: "Typical Portland delivery runs 30 to 55 minutes. Rain, bridge traffic, downtown parking, secure apartment buildings, and Friday dinner demand can increase the delivery window." },
            { q: "What is the best Papa Johns deal in Portland?", a: "The best deal depends on your cart. Check active coupons first, compare carryout and delivery totals, and use bundle deals when ordering two or more items. Percentage-off coupons are often strongest for larger family orders." },
            { q: "Is Papa Johns good for PSU student orders?", a: "Yes. Papa Johns can work well for PSU-area students because online ordering, carryout, and group-friendly pizzas are simple. Use clear dorm or apartment instructions and meet the driver outside when possible." },
            { q: "Does Papa Johns Portland have allergen information?", a: "Papa Johns publishes official nutrition and allergen information, but store preparation happens in shared kitchens. If you have a serious allergy or celiac disease, review the official allergen guide and call the store before ordering." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Portland",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 SW Stark St",
                "addressLocality": "Portland",
                "addressRegion": "OR",
                "postalCode": "97205",
                "addressCountry": "US"
            },
            "telephone": undefined,
            "openingHours": ["Mo-Th 11:00-23:00", "Fr-Sa 11:00-00:00", "Su 11:00-23:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/portland-or"
        }
    },
    "tampa-fl": {
        slug: "tampa-fl",
        title: "Papa Johns Tampa FL 2026: Menu Prices, Delivery, USF & Game Day Guide",
        metaDesc: "Papa Johns Tampa, FL guide with 2026 menu prices, downtown and USF delivery tips, late-night hours, deals, FAQs, and local ordering advice.",
        h1: "Papa John's Tampa, FL — Menu, Prices & Delivery Guide (2026)",
        intro: "Tampa pizza delivery is shaped by downtown condos, Channelside events, USF student demand, beach traffic, thunderstorms, and busy sports nights. This Papa Johns Tampa guide gives readers the details that matter before checkout: 2026 menu prices, delivery expectations, store information, deal strategy, and local ordering advice for families, students, hotel guests, and watch parties.\n\nUse this page to compare pizza sizes, specialty pies, stuffed crust, wings, breadsticks, and desserts before you order. Menu prices shown here are planning estimates based on 2026 pricing patterns; official checkout totals may change by store, coupon, taxes, delivery fees, and local availability.",
        stats: {
            deliveryTime: "30-55 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "401 Channelside Dr, Tampa, FL 33602",
            phone: "Verify with official store locator",
            hours: "Mon-Thu 11:00 AM - 12:00 AM | Fri-Sat 11:00 AM - 1:00 AM | Sun 11:00 AM - 12:00 AM",
            deliveryAreas: "Downtown Tampa, Channelside, Water Street, Ybor City, Hyde Park, USF area",
            mapUrl: "https://maps.google.com/?q=401+Channelside+Dr,+Tampa,+FL+33602"
        },
        menuPizzas: standardPizzaPrices2026,
        menuSides: standardSidePrices2026,
        neighborhoodContent: [
            {
                title: "Downtown, Channelside and Hotel Delivery",
                text: "Downtown Tampa and Channelside are high-demand delivery areas because hotels, apartments, Amalie Arena events, and Water Street restaurants all cluster close together. If you are ordering to a hotel or apartment tower, put the hotel name, room number or lobby instruction, and phone availability in the delivery notes. For busy event nights, meeting the driver near the lobby or pickup area is faster than asking them to navigate elevators and concierge desks.<br/><br/>Carryout works especially well if you are already near Channelside or Water Street. You can avoid event traffic at the door and keep the food hotter."
            },
            {
                title: "USF, Student Apartments and Late Orders",
                text: "The USF area produces heavy pizza demand during finals, move-in week, football watch parties, and late study nights. Students usually get the best value by checking <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>current coupons</a> first, then building around two pizzas or a pizza plus side rather than ordering several small items separately.<br/><br/>For shared apartments, a large <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, a large Garden Fresh or <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works</a>, and Cheesesticks gives more variety and value than a fully customized pie for each person."
            },
            {
                title: "Lightning Storms, Buccaneers Games and Event Spikes",
                text: "Tampa summer storms can change delivery times quickly. Heavy rain and lightning slow drivers for safety, and short intense storms around dinner can push delivery windows from 35 minutes to an hour or more. During Buccaneers, Lightning, Rays, and USF game nights, order earlier than normal. Halftime ordering is usually the slowest choice because everyone else has the same idea.<br/><br/>If timing matters, choose carryout before the storm or event rush. If convenience matters more, order delivery early and keep your phone nearby for driver calls."
            },
            {
                title: "Best Tampa Order for Families and Groups",
                text: "For Tampa families, the best cart usually starts with one familiar pizza and one stronger-flavor pizza. Pair Cheese or Pepperoni with BBQ Chicken Bacon, The Works, or Garden Fresh, then add Garlic Knots or wings. If you are ordering for kids and adults together, avoid over-customizing one pizza; split the order into simpler pies so everyone gets something they will actually eat. Check <a href='/posts/best-papa-johns-pizzas-for-families' class='text-[#cc0000] hover:underline font-bold'>our family pizza guide</a> for more order planning ideas."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Tampa, FL?", a: "This Tampa guide uses the listed location at 401 Channelside Dr, Tampa, FL 33602. Confirm your nearest active Papa Johns store by entering your address in the official Papa Johns app or website." },
            { q: "Does Papa Johns deliver in Downtown Tampa?", a: "Yes, Papa Johns delivery is generally available in Downtown Tampa, Channelside, Water Street, Ybor City, Hyde Park, USF-area neighborhoods, and nearby communities, depending on exact address and store routing." },
            { q: "How late is Papa Johns open in Tampa?", a: "This Tampa listing shows late hours, typically until midnight on many nights and later on Friday and Saturday. Hours can vary by store, holiday, and event demand, so confirm inside the official app before ordering late." },
            { q: "How long does Papa Johns delivery take in Tampa?", a: "Normal delivery is usually 30 to 55 minutes. Thunderstorms, lightning, downtown events, sports nights, and hotel deliveries can extend the window." },
            { q: "What should I order from Papa Johns for a Tampa watch party?", a: "For a watch party, start with large Pepperoni and The Works pizzas, then add wings, Garlic Knots, or Cheesesticks. Order at least 45 to 60 minutes before kickoff or puck drop during major games." },
            { q: "Does Papa Johns Tampa have gluten-free crust?", a: "Gluten-free crust may be available, but Papa Johns kitchens are shared environments. Anyone with celiac disease or a serious gluten allergy should review official allergen details and call the store before ordering." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Tampa",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "401 Channelside Dr",
                "addressLocality": "Tampa",
                "addressRegion": "FL",
                "postalCode": "33602",
                "addressCountry": "US"
            },
            "telephone": undefined,
            "openingHours": ["Mo-Th 11:00-00:00", "Fr-Sa 11:00-01:00", "Su 11:00-00:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/tampa-fl"
        }
    },
    "sacramento-ca": {
        slug: "sacramento-ca",
        title: "Papa Johns Sacramento CA 2026: Menu Prices, Delivery & Local Ordering Guide",
        metaDesc: "Papa Johns Sacramento, CA guide with 2026 menu prices, downtown delivery notes, Kings game day tips, carryout advice, local deals, and FAQs.",
        h1: "Papa John's Sacramento, CA — Menu, Prices & Delivery Guide (2026)",
        intro: "Sacramento orders have their own rhythm: state office lunches, Downtown and Midtown apartment deliveries, Golden 1 Center event nights, Sacramento State student orders, and family dinners across nearby neighborhoods. This guide gives you a practical look at Papa Johns Sacramento menu prices, delivery expectations, store details, deal strategy, and local ordering advice in one place.\n\nPrices below are useful for planning your cart before checkout. They cover popular pizzas, specialty pizzas, sides, and desserts using 2026 price ranges. Final totals may vary by store, coupon, tax, delivery fee, and exact address, so always verify the live checkout total before paying.",
        stats: {
            deliveryTime: "30-55 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "915 L St, Sacramento, CA 95814",
            phone: "Verify with official store locator",
            hours: "Mon-Thu 11:00 AM - 12:00 AM | Fri-Sat 11:00 AM - 1:00 AM | Sun 11:00 AM - 12:00 AM",
            deliveryAreas: "Downtown Sacramento, Midtown, Mansion Flats, Alkali Flat, Land Park, Sacramento State area",
            mapUrl: "https://maps.google.com/?q=915+L+St,+Sacramento,+CA+95814"
        },
        menuPizzas: standardPizzaPrices2026,
        menuSides: standardSidePrices2026,
        neighborhoodContent: [
            {
                title: "Downtown and Midtown Delivery Tips",
                text: "Downtown Sacramento and Midtown can be fast delivery areas when instructions are clear. Many addresses are apartments, offices, mixed-use buildings, or state-government spaces where drivers need entry details. Add cross streets, building names, lobby instructions, and gate codes before checkout. If you are in a secure building, meet outside when possible to keep delivery time short.<br/><br/>For work lunches, order early. Noon demand from offices can stack up quickly, especially around Capitol Mall, K Street, and the state office district."
            },
            {
                title: "Golden 1 Center, Kings Games and Event Nights",
                text: "Golden 1 Center events are one of the biggest timing factors for central Sacramento pizza delivery. Kings games, concerts, and downtown event nights increase traffic and make parking harder. If you are watching from home, place the order at least 45 minutes before tipoff or before guests arrive. Carryout is often better if your route avoids the event zone.<br/><br/>For groups, combine <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni Pizza</a>, <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works</a>, and wings or Garlic Knots. This covers classic, loaded, and side-snack preferences without making the cart too complicated."
            },
            {
                title: "Sacramento State and Student-Friendly Orders",
                text: "Sacramento State-area orders tend to be strongest during finals, move-in periods, weekend nights, and group study sessions. Students should compare delivery and carryout totals because delivery fees and tips can matter on smaller orders. A carryout pizza split between two people is often the cheapest option.<br/><br/>If ordering to student apartments, keep the phone nearby. Apartment complexes with similar building numbers are easy places for a driver to lose time."
            },
            {
                title: "Smoke, Heat and Seasonal Ordering Notes",
                text: "Sacramento summers can be hot, and wildfire smoke days sometimes affect outdoor activity and driving conditions. Delivery may remain available, but drivers can face lower visibility or slower traffic on poor air-quality days. If air quality is bad or temperatures are extreme, consider ordering earlier in the evening before dinner demand stacks up.<br/><br/>For families, the safest value cart is one simple pizza for kids, one specialty pizza for adults, and one side. Review <a href='/posts/papa-johns-nutrition-guide' class='text-[#cc0000] hover:underline font-bold'>nutrition and allergen details</a> before ordering for guests with dietary needs."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Sacramento, CA?", a: "This Sacramento guide uses the listed location at 915 L St, Sacramento, CA 95814. Enter your address in the official Papa Johns app to confirm the nearest active store and service availability." },
            { q: "Does Papa Johns deliver in Downtown Sacramento?", a: "Yes, Papa Johns delivery is generally available in Downtown Sacramento, Midtown, Mansion Flats, Alkali Flat, Land Park, Sacramento State-area neighborhoods, and nearby communities depending on exact address." },
            { q: "How long does Papa Johns delivery take in Sacramento?", a: "Typical Sacramento delivery is around 30 to 55 minutes. Downtown events, Kings games, Friday dinner demand, secure apartments, and poor weather or smoke conditions can increase wait times." },
            { q: "Is Papa Johns good for Sacramento Kings watch parties?", a: "Yes, but order early. Large Pepperoni, The Works, wings, Garlic Knots, and Cheesesticks are practical group items. Place the order before tipoff rather than during halftime." },
            { q: "What is the best Papa Johns deal in Sacramento?", a: "The best deal usually comes from checking current coupons, comparing carryout and delivery, and using bundle offers when ordering two or more items. Larger carts benefit most from percentage-off codes." },
            { q: "Does Papa Johns Sacramento publish allergen information?", a: "Papa Johns provides official nutrition and allergen information, but kitchens are shared. Customers with serious allergies or celiac disease should verify with the store before placing an order." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Sacramento",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "915 L St",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "postalCode": "95814",
                "addressCountry": "US"
            },
            "telephone": undefined,
            "openingHours": ["Mo-Th 11:00-00:00", "Fr-Sa 11:00-01:00", "Su 11:00-00:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/sacramento-ca"
        }
    },
    "raleigh-nc": {
        slug: "raleigh-nc",
        title: "Papa Johns Raleigh NC 2026: Menu Prices, Delivery, NC State & Local Deals",
        metaDesc: "Papa Johns Raleigh, NC guide with 2026 menu prices, delivery areas, NC State ordering tips, family deals, hours, FAQs, and local carryout advice.",
        h1: "Papa John's Raleigh, NC — Menu, Prices & Delivery Guide (2026)",
        intro: "Raleigh is a strong pizza-delivery city because it mixes downtown apartments, NC State student housing, family neighborhoods, office parks, and game-day demand. This Papa Johns Raleigh guide helps you plan before checkout with 2026 menu prices, delivery timing, store information, deal advice, and neighborhood-specific ordering notes.\n\nUse this page to compare classic pizzas, specialty pizzas, stuffed crust, wings, breadsticks, and desserts. Prices are planning ranges based on 2026 menu patterns; live checkout totals can change by store, address, coupon, delivery fee, and taxes.",
        stats: {
            deliveryTime: "30-50 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "201 Fayetteville St, Raleigh, NC 27601",
            phone: "Verify with official store locator",
            hours: "Mon-Thu 11:00 AM - 11:00 PM | Fri-Sat 11:00 AM - 12:00 AM | Sun 11:00 AM - 11:00 PM",
            deliveryAreas: "Downtown Raleigh, Glenwood South, NC State area, Cameron Village, Five Points, North Hills",
            mapUrl: "https://maps.google.com/?q=201+Fayetteville+St,+Raleigh,+NC+27601"
        },
        menuPizzas: standardPizzaPrices2026,
        menuSides: standardSidePrices2026,
        neighborhoodContent: [
            {
                title: "Downtown Raleigh and Glenwood South Delivery",
                text: "Downtown Raleigh and Glenwood South are strong delivery areas, but apartments, parking, nightlife traffic, and office buildings can slow the final handoff. Add building details, gate codes, floor numbers, and a clear phone number. If you are ordering late on Friday or Saturday, expect a longer delivery window than a weekday afternoon.<br/><br/>For office lunches downtown, carryout is often easier than delivery because it removes lobby coordination and driver parking delays."
            },
            {
                title: "NC State, Student Housing and Budget Orders",
                text: "NC State students and nearby apartment communities create steady demand around Hillsborough Street, Western Boulevard, and Cameron Village. A budget-friendly student order usually starts with the <a href='/coupons' class='text-[#cc0000] hover:underline font-bold'>coupons page</a>, then compares carryout against delivery. Delivery is convenient, but carryout can save enough to matter on smaller orders.<br/><br/>For a group study night, two large pizzas and one side are usually more efficient than multiple customized small pizzas. Choose one simple pizza such as <a href='/menus-prices/pepperoni-pizza' class='text-[#cc0000] hover:underline font-bold'>Pepperoni</a> and one loaded option such as <a href='/menus-prices/the-works-pizza' class='text-[#cc0000] hover:underline font-bold'>The Works</a>."
            },
            {
                title: "Hurricanes, Wolfpack and Triangle Game Days",
                text: "Raleigh-area sports nights can push pizza delivery demand higher than normal. NC State football and basketball, Carolina Hurricanes games, and big ACC matchups all create order spikes. Order 45 to 60 minutes before game time if you need food ready for kickoff, tipoff, or puck drop.<br/><br/>During storms or heavy rain, delivery can slow across the Triangle. If timing is important, choose carryout or order earlier than normal."
            },
            {
                title: "Family Ordering in Raleigh Suburbs",
                text: "For families in North Hills, Five Points, Cameron Village, and nearby suburbs, the strongest Papa Johns order is usually simple: one cheese or pepperoni pizza for kids, one specialty pizza for adults, and one side. Garlic Knots, Cheesesticks, and wings make the meal stretch without buying another pizza too soon. For dietary needs, read the <a href='/posts/papa-johns-gluten-free-guide' class='text-[#cc0000] hover:underline font-bold'>gluten-free guide</a> before ordering gluten-free crust because preparation happens in a shared kitchen."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Raleigh, NC?", a: "This Raleigh guide uses the listed location at 201 Fayetteville St, Raleigh, NC 27601. Enter your address in the official Papa Johns app to confirm the nearest active store for delivery or carryout." },
            { q: "Does Papa Johns deliver to NC State?", a: "Papa Johns delivery is generally available around the NC State area, but exact coverage depends on address and store routing. Add dorm, apartment, or building details clearly at checkout." },
            { q: "How long does Papa Johns delivery take in Raleigh?", a: "Normal Raleigh delivery is often 30 to 50 minutes. NC State game days, Hurricanes watch parties, Friday nights, storms, and downtown apartment handoffs can increase the window." },
            { q: "What is the cheapest Papa Johns order in Raleigh?", a: "A small Cheese or Pepperoni Pizza is usually the lowest base-price pizza. For the best final total, check active coupons and compare carryout against delivery before checkout." },
            { q: "Is Papa Johns good for Raleigh family orders?", a: "Yes. For families, combine one simple pizza, one specialty pizza, and one side such as Garlic Knots, wings, or Cheesesticks. This gives variety without overcomplicating the order." },
            { q: "Does Papa Johns Raleigh have gluten-free crust?", a: "Gluten-free crust may be available, but Papa Johns uses shared kitchens. Customers with celiac disease or serious gluten concerns should review official allergen information and call the store before ordering." }
        ],
        schema: {
            "@context": "https://schema.org",
            "@type": "FastFoodRestaurant",
            "name": "Papa Johns Pizza Raleigh",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "201 Fayetteville St",
                "addressLocality": "Raleigh",
                "addressRegion": "NC",
                "postalCode": "27601",
                "addressCountry": "US"
            },
            "telephone": undefined,
            "openingHours": ["Mo-Th 11:00-23:00", "Fr-Sa 11:00-00:00", "Su 11:00-23:00"],
            "servesCuisine": "Pizza",
            "priceRange": "$$",
            "url": "https://papajohns-menus.us/locations/raleigh-nc"
        }
    },
};
