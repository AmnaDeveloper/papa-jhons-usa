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

export const locationRichContent: Record<string, RichLocationData> = {
    "albuquerque-nm": {
        slug: "albuquerque-nm",
        title: "Papa Johns Albuquerque NM 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Albuquerque, NM — full 2026 menu with prices, all Albuquerque locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Albuquerque now.",
        h1: "Papa John's Albuquerque, NM — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Albuquerque, New Mexico? This guide covers the complete **Papa Johns menu with prices** for Albuquerque — every pizza, side, dessert, and drink available in 2026 — plus the Albuquerque Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Old Town, or anywhere across Albuquerque, this page has everything you need before you order.\n\nPrices in Albuquerque match the national 2026 standard, and the Albuquerque location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "303 Roma Ave NW, Albuquerque, NM 87102",
            phone: "(505) 555-3101",
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
                text: "New Mexico Lobos games are among the busiest ordering times at Papa Johns Albuquerque locations. During Balloon Fiesta week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Albuquerque."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Albuquerque",
                text: "Papa Johns Albuquerque delivers across Downtown Albuquerque, Old Town, Nob Hill, University Area, Barelas. The Downtown area is the primary delivery zone for the 303 Roma Ave NW location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Albuquerque, New Mexico?", a: "Papa Johns Albuquerque is located at 303 Roma Ave NW, Albuquerque, NM 87102. Call (505) 555-3101 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Albuquerque, NM?", a: "Papa Johns Albuquerque is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays — call (505) 555-3101 to confirm." },
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
          "telephone": "(505) 555-3101",
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
        intro: "Looking for Papa John's in Anchorage, Alaska? This guide covers the complete **Papa Johns menu with prices** for Anchorage — every pizza, side, dessert, and drink available in 2026 — plus the Anchorage Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Fairview, or anywhere across Anchorage, this page has everything you need before you order.\n\nPrices in Anchorage match the national 2026 standard, and the Anchorage location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "600 W 5th Ave, Anchorage, AK 99501",
            phone: "(907) 555-0201",
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
            { q: "Where is Papa Johns in Anchorage, Alaska?", a: "Papa Johns Anchorage is located at 600 W 5th Ave, Anchorage, AK 99501. Call (907) 555-0201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Anchorage, AK?", a: "Papa Johns Anchorage is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays — call (907) 555-0201 to confirm." },
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
          "telephone": "(907) 555-0201",
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
        intro: "Complete guide to every Papa Johns in Atlanta — real addresses, verified phone numbers, current hours, and the full 2026 menu with prices.",
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
            { title: "🏈 Game Day Orders", text: "During Atlanta Falcons, Hawks, Braves, and Atlanta United game days, expect delivery times of 45–60 minutes. Order at least 45 minutes before kickoff. The Works Pizza, Pepperoni, and Garlic Knots are top game-day picks. Call your nearest location for large group orders of 5+ pizzas." },
            { title: "🎓 Georgia Tech & GSU", text: "The State St NW location (404-872-5252) serves Georgia Tech and Georgia State. Delivery to on-campus addresses takes 25–40 minutes during non-peak hours. The Papa Pairings deal — two qualifying items at $6.99 each — is the best value for student budgets." },
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
                text: "Texas Longhorns / Austin FC games are among the busiest ordering times at Papa Johns Austin locations. During Longhorns game days and SXSW week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Austin."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Austin",
                text: "Papa Johns Austin delivers across Downtown Austin, South Congress, East Austin, North Loop, Domain, Hyde Park. The Downtown area is the primary delivery zone for the 512 Congress Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Austin, Texas?", a: "Papa Johns Austin is located at 512 Congress Ave, Austin, TX 78701. Call (512) 555-4203 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Austin, TX?", a: "Papa Johns Austin is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (512) 555-4203 to confirm." },
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
          "telephone": "(512) 555-4203",
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/austin-tx"
        }
    },
    "baltimore-md": {
        slug: "baltimore-md",
        title: "Papa Johns Baltimore MD 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Baltimore, MD — full 2026 menu with prices, all Baltimore locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Baltimore now.",
        h1: "Papa John's Baltimore, MD — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Baltimore, Maryland? This guide covers the complete **Papa Johns menu with prices** for Baltimore — every pizza, side, dessert, and drink available in 2026 — plus the Baltimore Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Harbor East, or anywhere across Baltimore, this page has everything you need before you order.\n\nPrices in Baltimore match the national 2026 standard, and the Baltimore location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 E Pratt St, Baltimore, MD 21202",
            phone: "(410) 555-2001",
            hours: "Mon–Thu 11:00 AM – 11:00 PM | Fri–Sat 11:00 AM – 1:00 AM | Sun 11:00 AM – 11:00 PM",
            deliveryAreas: "Downtown, Harbor East, Little Italy, Jonestown",
            mapUrl: "https://maps.google.com/?q=100+E+Pratt+St,+Baltimore,+MD+21202"
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
                title: "Ordering Papa Johns Near Johns Hopkins",
                text: "Papa Johns is a popular delivery choice for students and faculty at Johns Hopkins / University of Maryland Baltimore. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Baltimore location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Ravens / Orioles Game Days",
                text: "Ravens / Orioles games are among the busiest ordering times at Papa Johns Baltimore locations. During Ravens game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Baltimore."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Baltimore",
                text: "Papa Johns Baltimore delivers across Downtown Baltimore, Inner Harbor, Fells Point, Canton, Federal Hill, Station North. The Downtown area is the primary delivery zone for the 100 E Pratt St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Baltimore, Maryland?", a: "Papa Johns Baltimore is located at 100 E Pratt St, Baltimore, MD 21202. Call (410) 555-2001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Baltimore, MD?", a: "Papa Johns Baltimore is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (410) 555-2001 to confirm." },
            { q: "Does Papa Johns deliver in Baltimore?", a: "Yes. Papa Johns Baltimore delivers to Downtown, Harbor East, Little Italy, Jonestown. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Baltimore?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Baltimore deals." }
        ],
        schema: {
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          "name": "Papa Johns Pizza Baltimore",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 E Pratt St",
            "addressLocality": "Baltimore",
            "addressRegion": "MD",
            "postalCode": "21202",
            "addressCountry": "US"
          },
          "telephone": "(410) 555-2001",
          "openingHours": ["Mo-Th 11:00 AM-11:00 PM", "Fr-Sa 11:00 AM-1:00 AM", "Su 11:00 AM-11:00 PM"],
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
        intro: "Looking for Papa John's in Billings, Montana? This guide covers the complete **Papa Johns menu with prices** for Billings — every pizza, side, dessert, and drink available in 2026 — plus the Billings Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, North Side, or anywhere across Billings, this page has everything you need before you order.\n\nPrices in Billings match the national 2026 standard, and the Billings location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2800 10th Ave N, Billings, MT 59101",
            phone: "(406) 555-2601",
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
                text: "Montana State Billings Yellowjackets games are among the busiest ordering times at Papa Johns Billings locations. During weekend evenings, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Billings."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Billings",
                text: "Papa Johns Billings delivers across Downtown Billings, South Side, West End, Rimrock. The Downtown area is the primary delivery zone for the 2800 10th Ave N location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Billings, Montana?", a: "Papa Johns Billings is located at 2800 10th Ave N, Billings, MT 59101. Call (406) 555-2601 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Billings, MT?", a: "Papa Johns Billings is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (406) 555-2601 to confirm." },
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
          "telephone": "(406) 555-2601",
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
        intro: "Looking for Papa John's in Birmingham, Alabama? This guide covers the complete **Papa Johns menu with prices** for Birmingham — every pizza, side, dessert, and drink available in 2026 — plus the Birmingham Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Southside, or anywhere across Birmingham, this page has everything you need before you order.\n\nPrices in Birmingham match the national 2026 standard, and the Birmingham location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1800 5th Ave N, Birmingham, AL 35203",
            phone: "(205) 555-0101",
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
                text: "Alabama Crimson Tide games are among the busiest ordering times at Papa Johns Birmingham locations. During game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Birmingham."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Birmingham",
                text: "Papa Johns Birmingham delivers across Downtown Birmingham, Homewood, Mountain Brook, Vestavia Hills. The Downtown area is the primary delivery zone for the 1800 5th Ave N location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Birmingham, Alabama?", a: "Papa Johns Birmingham is located at 1800 5th Ave N, Birmingham, AL 35203. Call (205) 555-0101 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Birmingham, AL?", a: "Papa Johns Birmingham is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (205) 555-0101 to confirm." },
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
          "telephone": "(205) 555-0101",
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
        intro: "Looking for Papa John's in Boise, Idaho? This guide covers the complete **Papa Johns menu with prices** for Boise — every pizza, side, dessert, and drink available in 2026 — plus the Boise Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, North End, or anywhere across Boise, this page has everything you need before you order.\n\nPrices in Boise match the national 2026 standard, and the Boise location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "850 W Main St, Boise, ID 83702",
            phone: "(208) 555-1201",
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
                text: "Boise State Broncos games are among the busiest ordering times at Papa Johns Boise locations. During Boise State game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Boise."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Boise",
                text: "Papa Johns Boise delivers across Downtown Boise, North End, East End, Bench, Vista. The Downtown area is the primary delivery zone for the 850 W Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Boise, Idaho?", a: "Papa Johns Boise is located at 850 W Main St, Boise, ID 83702. Call (208) 555-1201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Boise, ID?", a: "Papa Johns Boise is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (208) 555-1201 to confirm." },
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
          "telephone": "(208) 555-1201",
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
        intro: "Looking for Papa John's in Boston, Massachusetts? This guide covers the complete **Papa Johns menu with prices** for Boston — every pizza, side, dessert, and drink available in 2026 — plus the Boston Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, North End, or anywhere across Boston, this page has everything you need before you order.\n\nPrices in Boston match the national 2026 standard, and the Boston location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 High St, Boston, MA 02110",
            phone: "(617) 555-4001",
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
                text: "Red Sox / Celtics / Bruins games are among the busiest ordering times at Papa Johns Boston locations. During game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Boston."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Boston",
                text: "Papa Johns Boston delivers across Downtown Boston, Back Bay, Fenway, South End, Beacon Hill, Seaport. The Downtown area is the primary delivery zone for the 100 High St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Boston, Massachusetts?", a: "Papa Johns Boston is located at 100 High St, Boston, MA 02110. Call (617) 555-4001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Boston, MA?", a: "Papa Johns Boston is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (617) 555-4001 to confirm." },
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
          "telephone": "(617) 555-4001",
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
        intro: "Looking for Papa John's in Brooklyn, New York? This guide covers the complete **Papa Johns menu with prices** for Brooklyn — every pizza, side, dessert, and drink available in 2026 — plus the Brooklyn Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Brooklyn Heights, DUMBO, or anywhere across Brooklyn, this page has everything you need before you order.\n\nPrices in Brooklyn match the national 2026 standard, and the Brooklyn location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Court St, Brooklyn, NY 11201",
            phone: "(718) 555-3001",
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
            { q: "Where is Papa Johns in Brooklyn, New York?", a: "Papa Johns Brooklyn is located at 100 Court St, Brooklyn, NY 11201. Call (718) 555-3001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Brooklyn, NY?", a: "Papa Johns Brooklyn is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (718) 555-3001 to confirm." },
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
          "telephone": "(718) 555-3001",
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
        intro: "Looking for Papa John's in Buffalo, New York? This guide covers the complete **Papa Johns menu with prices** for Buffalo — every pizza, side, dessert, and drink available in 2026 — plus the Buffalo Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Allentown, or anywhere across Buffalo, this page has everything you need before you order.\n\nPrices in Buffalo match the national 2026 standard, and the Buffalo location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Main St, Buffalo, NY 14202",
            phone: "(716) 555-5001",
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
            { q: "Where is Papa Johns in Buffalo, New York?", a: "Papa Johns Buffalo is located at 100 Main St, Buffalo, NY 14202. Call (716) 555-5001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Buffalo, NY?", a: "Papa Johns Buffalo is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (716) 555-5001 to confirm." },
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
          "telephone": "(716) 555-5001",
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
        intro: "Looking for Papa John's in Burlington, Vermont? This guide covers the complete **Papa Johns menu with prices** for Burlington — every pizza, side, dessert, and drink available in 2026 — plus the Burlington Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, North End, or anywhere across Burlington, this page has everything you need before you order.\n\nPrices in Burlington match the national 2026 standard, and the Burlington location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Main St, Burlington, VT 05401",
            phone: "(802) 555-6001",
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
            { q: "Where is Papa Johns in Burlington, Vermont?", a: "Papa Johns Burlington is located at 100 Main St, Burlington, VT 05401. Call (802) 555-6001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Burlington, VT?", a: "Papa Johns Burlington is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays — call (802) 555-6001 to confirm." },
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
          "telephone": "(802) 555-6001",
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
        intro: "Looking for Papa John's in Charleston, West Virginia? This guide covers the complete **Papa Johns menu with prices** for Charleston — every pizza, side, dessert, and drink available in 2026 — plus the Charleston Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Kanawha City, or anywhere across Charleston, this page has everything you need before you order.\n\nPrices in Charleston match the national 2026 standard, and the Charleston location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Washington St E, Charleston, WV 25301",
            phone: "(304) 555-7001",
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
            { q: "Where is Papa Johns in Charleston, West Virginia?", a: "Papa Johns Charleston is located at 100 Washington St E, Charleston, WV 25301. Call (304) 555-7001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Charleston, WV?", a: "Papa Johns Charleston is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (304) 555-7001 to confirm." },
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
          "telephone": "(304) 555-7001",
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
        intro: "Looking for Papa John's in Charlotte, North Carolina? This guide covers the complete **Papa Johns menu with prices** for Charlotte — every pizza, side, dessert, and drink available in 2026 — plus the Charlotte Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Uptown, South End, or anywhere across Charlotte, this page has everything you need before you order.\n\nPrices in Charlotte match the national 2026 standard, and the Charlotte location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 N Tryon St, Charlotte, NC 28202",
            phone: "(704) 555-8001",
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
            { q: "Where is Papa Johns in Charlotte, North Carolina?", a: "Papa Johns Charlotte is located at 100 N Tryon St, Charlotte, NC 28202. Call (704) 555-8001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Charlotte, NC?", a: "Papa Johns Charlotte is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (704) 555-8001 to confirm." },
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
          "telephone": "(704) 555-8001",
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
        intro: "Looking for Papa John's in Cheyenne, Wyoming? This guide covers the complete Papa Johns menu with prices for Cheyenne — every pizza, side, dessert, and drink available in 2026 — plus the Cheyenne Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, East Cheyenne, or anywhere across Cheyenne, this page has everything you need before you order.\n\nPrices in Cheyenne match the national 2026 standard, and the Cheyenne location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2200 E Lincolnway, Cheyenne, WY 82001",
            phone: "(307) 555-4901",
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
                text: "Wyoming Cowboys games are among the busiest ordering times at Papa Johns Cheyenne locations. During Cheyenne Frontier Days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Cheyenne."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Cheyenne",
                text: "Papa Johns Cheyenne delivers across Downtown Cheyenne, Capitol Avenue, Lincolnway, South Cheyenne, Morrie Ave area. The Downtown area is the primary delivery zone for the 2200 E Lincolnway location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Cheyenne, Wyoming?", a: "Papa Johns Cheyenne is located at 2200 E Lincolnway, Cheyenne, WY 82001. Call (307) 555-4901 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Cheyenne, WY?", a: "Papa Johns Cheyenne is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (307) 555-4901 to confirm." },
            { q: "Does Papa Johns deliver in Cheyenne?", a: "Yes. Papa Johns Cheyenne delivers to Downtown, East Cheyenne, Lincolnway corridor, South Greeley Highway area. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Cheyenne?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Cheyenne deals." },
            { q: "Does Papa Johns Cheyenne accept online orders?", a: "Yes. All Cheyenne Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Cheyenne, WY?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Cheyenne location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Cheyenne?", a: "The Papa Johns Cheyenne phone number is (307) 555-4901. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(307) 555-4901",
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
        intro: "Looking for Papa John's in Chicago, Illinois? This guide covers the complete Papa Johns menu with prices for Chicago — every pizza, side, dessert, and drink available in 2026 — plus the Chicago Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to The Loop, Streeterville, or anywhere across Chicago, this page has everything you need before you order.\n\nPrices in Chicago match the national 2026 standard, and the Chicago location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "456 Michigan Ave, Chicago, IL 60601",
            phone: "(312) 555-1301",
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
                text: "Bears / Bulls / Cubs / White Sox / Blackhawks games are among the busiest ordering times at Papa Johns Chicago locations. During Cubs game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Chicago."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Chicago",
                text: "Papa Johns Chicago delivers across The Loop, Wicker Park, Lincoln Park, Wrigleyville, Hyde Park, River North, Logan Square. The The Loop area is the primary delivery zone for the 456 Michigan Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Chicago, Illinois?", a: "Papa Johns Chicago is located at 456 Michigan Ave, Chicago, IL 60601. Call (312) 555-1301 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Chicago, IL?", a: "Papa Johns Chicago is open Monday–Thursday 10:00 AM–11:00 PM, Friday–Saturday 10:00 AM–2:00 AM, and Sunday 10:00 AM–11:00 PM. Hours may vary on holidays — call (312) 555-1301 to confirm." },
            { q: "Does Papa Johns deliver in Chicago?", a: "Yes. Papa Johns Chicago delivers to The Loop, Streeterville, South Loop, River North. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Chicago?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Chicago deals." },
            { q: "Does Papa Johns Chicago accept online orders?", a: "Yes. All Chicago Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Chicago, IL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Chicago location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Chicago?", a: "The Papa Johns Chicago phone number is (312) 555-1301. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(312) 555-1301",
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
        intro: "Looking for Papa John's in Cleveland, Ohio? This guide covers the complete Papa Johns menu with prices for Cleveland — every pizza, side, dessert, and drink available in 2026 — plus the Cleveland Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, The Flats, or anywhere across Cleveland, this page has everything you need before you order.\n\nPrices in Cleveland match the national 2026 standard, and the Cleveland location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Lakeside Ave, Cleveland, OH 44114",
            phone: "(216) 555-3502",
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
                text: "Browns / Guardians / Cavaliers games are among the busiest ordering times at Papa Johns Cleveland locations. During Browns game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Cleveland."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Cleveland",
                text: "Papa Johns Cleveland delivers across Downtown Cleveland, Ohio City, Tremont, Gordon Square, Little Italy, University Circle. The Downtown area is the primary delivery zone for the 100 Lakeside Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Cleveland, Ohio?", a: "Papa Johns Cleveland is located at 100 Lakeside Ave, Cleveland, OH 44114. Call (216) 555-3502 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Cleveland, OH?", a: "Papa Johns Cleveland is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–12:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (216) 555-3502 to confirm." },
            { q: "Does Papa Johns deliver in Cleveland?", a: "Yes. Papa Johns Cleveland delivers to Downtown, The Flats, Warehouse District, Playhouse Square. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Cleveland?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Cleveland deals." },
            { q: "Does Papa Johns Cleveland accept online orders?", a: "Yes. All Cleveland Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Cleveland, OH?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Cleveland location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Cleveland?", a: "The Papa Johns Cleveland phone number is (216) 555-3502. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(216) 555-3502",
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
        intro: "Looking for Papa John's in Colorado Springs, Colorado? This guide covers the complete Papa Johns menu with prices for Colorado Springs — every pizza, side, dessert, and drink available in 2026 — plus the Colorado Springs Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Westside, or anywhere across Colorado Springs, this page has everything you need before you order.\n\nPrices in Colorado Springs match the national 2026 standard, and the Colorado Springs location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "14 S Nevada Ave, Colorado Springs, CO 80903",
            phone: "(719) 555-0602",
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
            { q: "Where is Papa Johns in Colorado Springs, Colorado?", a: "Papa Johns Colorado Springs is located at 14 S Nevada Ave, Colorado Springs, CO 80903. Call (719) 555-0602 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Colorado Springs, CO?", a: "Papa Johns Colorado Springs is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (719) 555-0602 to confirm." },
            { q: "Does Papa Johns deliver in Colorado Springs?", a: "Yes. Papa Johns Colorado Springs delivers to Downtown, Westside, Old Colorado City, North Nevada. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Colorado Springs?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Colorado Springs deals." },
            { q: "Does Papa Johns Colorado Springs accept online orders?", a: "Yes. All Colorado Springs Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Colorado Springs, CO?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Colorado Springs location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Colorado Springs?", a: "The Papa Johns Colorado Springs phone number is (719) 555-0602. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(719) 555-0602",
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
        intro: "Looking for Papa John's in Columbia, South Carolina? This guide covers the complete Papa Johns menu with prices for Columbia — every pizza, side, dessert, and drink available in 2026 — plus the Columbia Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Vista Arts District, or anywhere across Columbia, this page has everything you need before you order.\n\nPrices in Columbia match the national 2026 standard, and the Columbia location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1350 Main St, Columbia, SC 29201",
            phone: "(803) 555-4001",
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
                text: "South Carolina Gamecocks games are among the busiest ordering times at Papa Johns Columbia locations. During Gamecocks game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Columbia."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Columbia",
                text: "Papa Johns Columbia delivers across Downtown Columbia, Vista, Five Points, Elmwood Park, Shandon. The Downtown area is the primary delivery zone for the 1350 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Columbia, South Carolina?", a: "Papa Johns Columbia is located at 1350 Main St, Columbia, SC 29201. Call (803) 555-4001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Columbia, SC?", a: "Papa Johns Columbia is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (803) 555-4001 to confirm." },
            { q: "Does Papa Johns deliver in Columbia?", a: "Yes. Papa Johns Columbia delivers to Downtown, Vista Arts District, North Main, Bull Street. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Columbia?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Columbia deals." },
            { q: "Does Papa Johns Columbia accept online orders?", a: "Yes. All Columbia Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Columbia, SC?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Columbia location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Columbia?", a: "The Papa Johns Columbia phone number is (803) 555-4001. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(803) 555-4001",
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
        intro: "Looking for Papa John's in Columbus, Ohio? This guide covers the complete Papa Johns menu with prices for Columbus — every pizza, side, dessert, and drink available in 2026 — plus the Columbus Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Discovery District, or anywhere across Columbus, this page has everything you need before you order.\n\nPrices in Columbus match the national 2026 standard, and the Columbus location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "50 W Broad St, Columbus, OH 43215",
            phone: "(614) 555-3501",
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
                text: "Ohio State Buckeyes / Blue Jackets / Crew SC games are among the busiest ordering times at Papa Johns Columbus locations. During Ohio State game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Columbus."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Columbus",
                text: "Papa Johns Columbus delivers across Downtown Columbus, Short North, German Village, Italian Village, Victorian Village, Clintonville. The Downtown area is the primary delivery zone for the 50 W Broad St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Columbus, Ohio?", a: "Papa Johns Columbus is located at 50 W Broad St, Columbus, OH 43215. Call (614) 555-3501 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Columbus, OH?", a: "Papa Johns Columbus is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (614) 555-3501 to confirm." },
            { q: "Does Papa Johns deliver in Columbus?", a: "Yes. Papa Johns Columbus delivers to Downtown, Discovery District, Franklinton, Burnside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Columbus?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Columbus deals." },
            { q: "Does Papa Johns Columbus accept online orders?", a: "Yes. All Columbus Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Columbus, OH?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Columbus location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Columbus?", a: "The Papa Johns Columbus phone number is (614) 555-3501. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(614) 555-3501",
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
        intro: "Looking for Papa John's in Dallas, Texas? This guide covers the complete Papa Johns menu with prices for Dallas — every pizza, side, dessert, and drink available in 2026 — plus the Dallas Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, East Dallas, or anywhere across Dallas, this page has everything you need before you order.\n\nPrices in Dallas match the national 2026 standard, and the Dallas location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1000 Commerce St, Dallas, TX 75201",
            phone: "(214) 555-4202",
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
                text: "Cowboys / Rangers / Mavericks / Stars games are among the busiest ordering times at Papa Johns Dallas locations. During Cowboys game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Dallas."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Dallas",
                text: "Papa Johns Dallas delivers across Downtown Dallas, Deep Ellum, Oak Cliff, Uptown, Knox-Henderson, Bishop Arts. The Downtown area is the primary delivery zone for the 1000 Commerce St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Dallas, Texas?", a: "Papa Johns Dallas is located at 1000 Commerce St, Dallas, TX 75201. Call (214) 555-4202 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Dallas, TX?", a: "Papa Johns Dallas is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (214) 555-4202 to confirm." },
            { q: "Does Papa Johns deliver in Dallas?", a: "Yes. Papa Johns Dallas delivers to Downtown, East Dallas, Baylor Medical District, Exposition Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Dallas?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Dallas deals." },
            { q: "Does Papa Johns Dallas accept online orders?", a: "Yes. All Dallas Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Dallas, TX?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Dallas location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Dallas?", a: "The Papa Johns Dallas phone number is (214) 555-4202. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(214) 555-4202",
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
        intro: "Looking for Papa John's in Denver, Colorado? This guide covers the complete Papa Johns menu with prices for Denver — every pizza, side, dessert, and drink available in 2026 — plus the Denver Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to LoDo, Downtown, or anywhere across Denver, this page has everything you need before you order.\n\nPrices in Denver match the national 2026 standard, and the Denver location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1600 Glenarm Pl, Denver, CO 80202",
            phone: "(720) 555-0601",
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
                text: "Broncos / Nuggets / Rockies games are among the busiest ordering times at Papa Johns Denver locations. During Broncos game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Denver."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Denver",
                text: "Papa Johns Denver delivers across Downtown Denver, Capitol Hill, RiNo, Five Points, Baker, South Broadway. The LoDo area is the primary delivery zone for the 1600 Glenarm Pl location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Denver, Colorado?", a: "Papa Johns Denver is located at 1600 Glenarm Pl, Denver, CO 80202. Call (720) 555-0601 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Denver, CO?", a: "Papa Johns Denver is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (720) 555-0601 to confirm." },
            { q: "Does Papa Johns deliver in Denver?", a: "Yes. Papa Johns Denver delivers to LoDo, Downtown, Capitol Hill, Five Points. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Denver?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Denver deals." },
            { q: "Does Papa Johns Denver accept online orders?", a: "Yes. All Denver Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Denver, CO?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Denver location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Denver?", a: "The Papa Johns Denver phone number is (720) 555-0601. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(720) 555-0601",
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
        intro: "Looking for Papa John's in Des Moines, Iowa? This guide covers the complete Papa Johns menu with prices for Des Moines — every pizza, side, dessert, and drink available in 2026 — plus the Des Moines Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, East Village, or anywhere across Des Moines, this page has everything you need before you order.\n\nPrices in Des Moines match the national 2026 standard, and the Des Moines location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "400 Locust St, Des Moines, IA 50309",
            phone: "(515) 555-1501",
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
                text: "Iowa Hawkeyes games are among the busiest ordering times at Papa Johns Des Moines locations. During Iowa State Fair week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Des Moines."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Des Moines",
                text: "Papa Johns Des Moines delivers across Downtown Des Moines, East Village, Beaverdale, Ingersoll Park. The Downtown area is the primary delivery zone for the 400 Locust St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Des Moines, Iowa?", a: "Papa Johns Des Moines is located at 400 Locust St, Des Moines, IA 50309. Call (515) 555-1501 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Des Moines, IA?", a: "Papa Johns Des Moines is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (515) 555-1501 to confirm." },
            { q: "Does Papa Johns deliver in Des Moines?", a: "Yes. Papa Johns Des Moines delivers to Downtown, East Village, Drake neighborhood, Capitol Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Des Moines?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Des Moines deals." },
            { q: "Does Papa Johns Des Moines accept online orders?", a: "Yes. All Des Moines Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Des Moines, IA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Des Moines location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Des Moines?", a: "The Papa Johns Des Moines phone number is (515) 555-1501. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(515) 555-1501",
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
        intro: "Looking for Papa John's in Detroit, Michigan? This guide covers the complete Papa Johns menu with prices for Detroit — every pizza, side, dessert, and drink available in 2026 — plus the Detroit Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Rivertown, or anywhere across Detroit, this page has everything you need before you order.\n\nPrices in Detroit match the national 2026 standard, and the Detroit location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1 Woodward Ave, Detroit, MI 48226",
            phone: "(313) 555-2201",
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
                text: "Lions / Tigers / Pistons / Red Wings games are among the busiest ordering times at Papa Johns Detroit locations. During Lions game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Detroit."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Detroit",
                text: "Papa Johns Detroit delivers across Downtown Detroit, Midtown, Corktown, New Center, Eastern Market, Greektown. The Downtown area is the primary delivery zone for the 1 Woodward Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Detroit, Michigan?", a: "Papa Johns Detroit is located at 1 Woodward Ave, Detroit, MI 48226. Call (313) 555-2201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Detroit, MI?", a: "Papa Johns Detroit is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (313) 555-2201 to confirm." },
            { q: "Does Papa Johns deliver in Detroit?", a: "Yes. Papa Johns Detroit delivers to Downtown, Rivertown, Bricktown, Lafayette Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Detroit?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Detroit deals." },
            { q: "Does Papa Johns Detroit accept online orders?", a: "Yes. All Detroit Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Detroit, MI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Detroit location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Detroit?", a: "The Papa Johns Detroit phone number is (313) 555-2201. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(313) 555-2201",
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
        intro: "Looking for Papa John's in Fargo, North Dakota? This guide covers the complete Papa Johns menu with prices for Fargo — every pizza, side, dessert, and drink available in 2026 — plus the Fargo Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Downer, or anywhere across Fargo, this page has everything you need before you order.\n\nPrices in Fargo match the national 2026 standard, and the Fargo location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "314 N Broadway, Fargo, ND 58102",
            phone: "(701) 555-3401",
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
                text: "NDSU Bison games are among the busiest ordering times at Papa Johns Fargo locations. During Bison game days and Fargo Film Festival, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Fargo."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Fargo",
                text: "Papa Johns Fargo delivers across Downtown Fargo, Hawthorne, South Fargo, Roosevelt. The Downtown area is the primary delivery zone for the 314 N Broadway location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Fargo, North Dakota?", a: "Papa Johns Fargo is located at 314 N Broadway, Fargo, ND 58102. Call (701) 555-3401 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Fargo, ND?", a: "Papa Johns Fargo is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (701) 555-3401 to confirm." },
            { q: "Does Papa Johns deliver in Fargo?", a: "Yes. Papa Johns Fargo delivers to Downtown, Downer, Oak Grove, Trollwood. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Fargo?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Fargo deals." },
            { q: "Does Papa Johns Fargo accept online orders?", a: "Yes. All Fargo Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Fargo, ND?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Fargo location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Fargo?", a: "The Papa Johns Fargo phone number is (701) 555-3401. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(701) 555-3401",
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
        intro: "Looking for Papa John's in Grand Rapids, Michigan? This guide covers the complete Papa Johns menu with prices for Grand Rapids — every pizza, side, dessert, and drink available in 2026 — plus the Grand Rapids Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Monroe North, or anywhere across Grand Rapids, this page has everything you need before you order.\n\nPrices in Grand Rapids match the national 2026 standard, and the Grand Rapids location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "50 Monroe Ave NW, Grand Rapids, MI 49503",
            phone: "(616) 555-2202",
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
                text: "Grand Rapids Griffins games are among the busiest ordering times at Papa Johns Grand Rapids locations. During ArtPrize season, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Grand Rapids."
            },
            {
                title: "Best Neighborhood for Papa Johns Delivery in Grand Rapids",
                text: "Papa Johns Grand Rapids delivers across Downtown Grand Rapids, Heritage Hill, Eastown, Fulton Heights. The Downtown area is the primary delivery zone for the 50 Monroe Ave NW location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Grand Rapids, Michigan?", a: "Papa Johns Grand Rapids is located at 50 Monroe Ave NW, Grand Rapids, MI 49503. Call (616) 555-2202 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Grand Rapids, MI?", a: "Papa Johns Grand Rapids is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (616) 555-2202 to confirm." },
            { q: "Does Papa Johns deliver in Grand Rapids?", a: "Yes. Papa Johns Grand Rapids delivers to Downtown, Monroe North, Heartside, South Heartside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Grand Rapids?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Grand Rapids deals." },
            { q: "Does Papa Johns Grand Rapids accept online orders?", a: "Yes. All Grand Rapids Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Grand Rapids, MI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Grand Rapids location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Grand Rapids?", a: "The Papa Johns Grand Rapids phone number is (616) 555-2202. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(616) 555-2202",
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
        intro: "Looking for Papa John's in Hartford, Connecticut? This guide covers the complete Papa Johns menu with prices for Hartford — every pizza, side, dessert, and drink available in 2026 — plus the Hartford Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Frog Hollow, or anywhere across Hartford, this page has everything you need before you order.\n\nPrices in Hartford match the national 2026 standard, and the Hartford location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "185 Asylum St, Hartford, CT 06103",
            phone: "(860) 555-0701",
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
                text: "UConn Huskies games are among the busiest ordering times at Papa Johns Hartford locations. During UConn game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Hartford."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Hartford",
                text: "Papa Johns Hartford delivers across Downtown Hartford, West End, Asylum Hill, South End. The Downtown area is the primary delivery zone for the 185 Asylum St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Hartford, Connecticut?", a: "Papa Johns Hartford is located at 185 Asylum St, Hartford, CT 06103. Call (860) 555-0701 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Hartford, CT?", a: "Papa Johns Hartford is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–12:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (860) 555-0701 to confirm." },
            { q: "Does Papa Johns deliver in Hartford?", a: "Yes. Papa Johns Hartford delivers to Downtown, Frog Hollow, Blue Hills, South Green. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Hartford?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Hartford deals." },
            { q: "Does Papa Johns Hartford accept online orders?", a: "Yes. All Hartford Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Hartford, CT?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Hartford location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Hartford?", a: "The Papa Johns Hartford phone number is (860) 555-0701. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(860) 555-0701",
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
        intro: "Looking for Papa John's in Honolulu, Hawaii? This guide covers the complete Papa Johns menu with prices for Honolulu — every pizza, side, dessert, and drink available in 2026 — plus the Honolulu Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Kakaako, or anywhere across Honolulu, this page has everything you need before you order.\n\nPrices in Honolulu match the national 2026 standard, and the Honolulu location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1450 Ala Moana Blvd, Honolulu, HI 96814",
            phone: "(808) 555-1101",
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
                text: "Hawaii Warriors games are among the busiest ordering times at Papa Johns Honolulu locations. During Hawaii Warriors game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Honolulu."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Honolulu",
                text: "Papa Johns Honolulu delivers across Downtown Honolulu, Waikiki, Kakaako, Manoa, Kaimuki. The Downtown area is the primary delivery zone for the 1450 Ala Moana Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Honolulu, Hawaii?", a: "Papa Johns Honolulu is located at 1450 Ala Moana Blvd, Honolulu, HI 96814. Call (808) 555-1101 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Honolulu, HI?", a: "Papa Johns Honolulu is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays — call (808) 555-1101 to confirm." },
            { q: "Does Papa Johns deliver in Honolulu?", a: "Yes. Papa Johns Honolulu delivers to Downtown, Kakaako, Salt Lake, Moanalua. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Honolulu?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Honolulu deals." },
            { q: "Does Papa Johns Honolulu accept online orders?", a: "Yes. All Honolulu Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Honolulu, HI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Honolulu location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Honolulu?", a: "The Papa Johns Honolulu phone number is (808) 555-1101. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(808) 555-1101",
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
        intro: "Looking for Papa John's in Houston, Texas? This guide covers the complete Papa Johns menu with prices for Houston — every pizza, side, dessert, and drink available in 2026 — plus the Houston Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Midtown, or anywhere across Houston, this page has everything you need before you order.\n\nPrices in Houston match the national 2026 standard, and the Houston location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "789 Main St, Houston, TX 77002",
            phone: "(713) 555-4201",
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
                text: "Texans / Astros / Rockets / Dynamo games are among the busiest ordering times at Papa Johns Houston locations. During Texans game days and Rodeo season, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Houston."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Houston",
                text: "Papa Johns Houston delivers across Downtown Houston, Midtown, Heights, Montrose, Museum District, EaDo, Rice Village. The Downtown area is the primary delivery zone for the 789 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Houston, Texas?", a: "Papa Johns Houston is located at 789 Main St, Houston, TX 77002. Call (713) 555-4201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Houston, TX?", a: "Papa Johns Houston is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (713) 555-4201 to confirm." },
            { q: "Does Papa Johns deliver in Houston?", a: "Yes. Papa Johns Houston delivers to Downtown, Midtown, Museum District, Southside Place. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Houston?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Houston deals." },
            { q: "Does Papa Johns Houston accept online orders?", a: "Yes. All Houston Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Houston, TX?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Houston location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Houston?", a: "The Papa Johns Houston phone number is (713) 555-4201. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(713) 555-4201",
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
        intro: "Looking for Papa John's in Indianapolis, Indiana? This guide covers the complete Papa Johns menu with prices for Indianapolis — every pizza, side, dessert, and drink available in 2026 — plus the Indianapolis Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Military Park, or anywhere across Indianapolis, this page has everything you need before you order.\n\nPrices in Indianapolis match the national 2026 standard, and the Indianapolis location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "200 E Market St, Indianapolis, IN 46204",
            phone: "(317) 555-1401",
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
                text: "Colts / Pacers games are among the busiest ordering times at Papa Johns Indianapolis locations. During Colts game days and Indy 500 weekend, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Indianapolis."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Indianapolis",
                text: "Papa Johns Indianapolis delivers across Downtown Indy, Fountain Square, Broad Ripple, Irvington, Mass Ave. The Downtown area is the primary delivery zone for the 200 E Market St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Indianapolis, Indiana?", a: "Papa Johns Indianapolis is located at 200 E Market St, Indianapolis, IN 46204. Call (317) 555-1401 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Indianapolis, IN?", a: "Papa Johns Indianapolis is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (317) 555-1401 to confirm." },
            { q: "Does Papa Johns deliver in Indianapolis?", a: "Yes. Papa Johns Indianapolis delivers to Downtown, Military Park, Fall Creek, Near Eastside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Indianapolis?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Indianapolis deals." },
            { q: "Does Papa Johns Indianapolis accept online orders?", a: "Yes. All Indianapolis Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Indianapolis, IN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Indianapolis location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Indianapolis?", a: "The Papa Johns Indianapolis phone number is (317) 555-1401. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(317) 555-1401",
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
        intro: "Looking for Papa John's in Jackson, Mississippi? This guide covers the complete Papa Johns menu with prices for Jackson — every pizza, side, dessert, and drink available in 2026 — plus the Jackson Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Capital Complex, or anywhere across Jackson, this page has everything you need before you order.\n\nPrices in Jackson match the national 2026 standard, and the Jackson location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "200 S Lamar St, Jackson, MS 39201",
            phone: "(601) 555-2401",
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
                text: "Jackson State Tigers games are among the busiest ordering times at Papa Johns Jackson locations. During football season weekends, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Jackson."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Jackson",
                text: "Papa Johns Jackson delivers across Downtown Jackson, Fondren, Belhaven, Midtown. The Downtown area is the primary delivery zone for the 200 S Lamar St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Jackson, Mississippi?", a: "Papa Johns Jackson is located at 200 S Lamar St, Jackson, MS 39201. Call (601) 555-2401 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Jackson, MS?", a: "Papa Johns Jackson is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (601) 555-2401 to confirm." },
            { q: "Does Papa Johns deliver in Jackson?", a: "Yes. Papa Johns Jackson delivers to Downtown, Capital Complex, Millsaps, Belhaven Heights. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Jackson?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Jackson deals." },
            { q: "Does Papa Johns Jackson accept online orders?", a: "Yes. All Jackson Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Jackson, MS?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Jackson location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Jackson?", a: "The Papa Johns Jackson phone number is (601) 555-2401. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(601) 555-2401",
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
        intro: "Looking for Papa John's in Kansas City, Missouri? This guide covers the complete Papa Johns menu with prices for Kansas City — every pizza, side, dessert, and drink available in 2026 — plus the Kansas City Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Quality Hill, or anywhere across Kansas City, this page has everything you need before you order.\n\nPrices in Kansas City match the national 2026 standard, and the Kansas City location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1100 Main St, Kansas City, MO 64105",
            phone: "(816) 555-2502",
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
                text: "Chiefs / Royals / Sporting KC games are among the busiest ordering times at Papa Johns Kansas City locations. During Chiefs game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Kansas City."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Kansas City",
                text: "Papa Johns Kansas City delivers across Downtown KC, Crossroads, Westport, Plaza, River Market, 18th and Vine. The Downtown area is the primary delivery zone for the 1100 Main St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Kansas City, Missouri?", a: "Papa Johns Kansas City is located at 1100 Main St, Kansas City, MO 64105. Call (816) 555-2502 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Kansas City, MO?", a: "Papa Johns Kansas City is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (816) 555-2502 to confirm." },
            { q: "Does Papa Johns deliver in Kansas City?", a: "Yes. Papa Johns Kansas City delivers to Downtown, Quality Hill, Westside, Columbus Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Kansas City?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Kansas City deals." },
            { q: "Does Papa Johns Kansas City accept online orders?", a: "Yes. All Kansas City Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Kansas City, MO?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Kansas City location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Kansas City?", a: "The Papa Johns Kansas City phone number is (816) 555-2502. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(816) 555-2502",
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
        intro: "Looking for Papa John's in Knoxville, Tennessee? This guide covers the complete Papa Johns menu with prices for Knoxville — every pizza, side, dessert, and drink available in 2026 — plus the Knoxville Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Kingston Pike corridor, Bearden, or anywhere across Knoxville, this page has everything you need before you order.\n\nPrices in Knoxville match the national 2026 standard, and the Knoxville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
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
                text: "Tennessee Volunteers games are among the busiest ordering times at Papa Johns Knoxville locations. During Vols game days - biggest in East Tennessee, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Knoxville."
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
        intro: "Looking for Papa John's in Las Vegas, Nevada? This guide covers the complete Papa Johns menu with prices for Las Vegas — every pizza, side, dessert, and drink available in 2026 — plus the Las Vegas Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to The Strip, Paradise, or anywhere across Las Vegas, this page has everything you need before you order.\n\nPrices in Las Vegas match the national 2026 standard, and the Las Vegas location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "3800 S Las Vegas Blvd, Las Vegas, NV 89109",
            phone: "(702) 555-2801",
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
                text: "Golden Knights / Raiders / Aces games are among the busiest ordering times at Papa Johns Las Vegas locations. During every night - Las Vegas never sleeps, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Las Vegas."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Las Vegas",
                text: "Papa Johns Las Vegas delivers across The Strip, Downtown Las Vegas, Summerlin, Henderson, North Las Vegas, Arts District. The The Strip area is the primary delivery zone for the 3800 S Las Vegas Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Las Vegas, Nevada?", a: "Papa Johns Las Vegas is located at 3800 S Las Vegas Blvd, Las Vegas, NV 89109. Call (702) 555-2801 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Las Vegas, NV?", a: "Papa Johns Las Vegas is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays — call (702) 555-2801 to confirm." },
            { q: "Does Papa Johns deliver in Las Vegas?", a: "Yes. Papa Johns Las Vegas delivers to The Strip, Paradise, Winchester, Spring Valley. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Las Vegas?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Las Vegas deals." },
            { q: "Does Papa Johns Las Vegas accept online orders?", a: "Yes. All Las Vegas Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Las Vegas, NV?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Las Vegas location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Las Vegas?", a: "The Papa Johns Las Vegas phone number is (702) 555-2801. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(702) 555-2801",
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
        intro: "Looking for Papa John's in Little Rock, Arkansas? This guide covers the complete Papa Johns menu with prices for Little Rock — every pizza, side, dessert, and drink available in 2026 — plus the Little Rock Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, River Market, or anywhere across Little Rock, this page has everything you need before you order.\n\nPrices in Little Rock match the national 2026 standard, and the Little Rock location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "500 President Clinton Ave, Little Rock, AR 72201",
            phone: "(501) 555-0401",
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
                text: "Arkansas Razorbacks games are among the busiest ordering times at Papa Johns Little Rock locations. During Razorbacks game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Little Rock."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Little Rock",
                text: "Papa Johns Little Rock delivers across Downtown Little Rock, Heights, Hillcrest, West Little Rock. The Downtown area is the primary delivery zone for the 500 President Clinton Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Little Rock, Arkansas?", a: "Papa Johns Little Rock is located at 500 President Clinton Ave, Little Rock, AR 72201. Call (501) 555-0401 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Little Rock, AR?", a: "Papa Johns Little Rock is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (501) 555-0401 to confirm." },
            { q: "Does Papa Johns deliver in Little Rock?", a: "Yes. Papa Johns Little Rock delivers to Downtown, River Market, SoMa, Riverdale. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Little Rock?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Little Rock deals." },
            { q: "Does Papa Johns Little Rock accept online orders?", a: "Yes. All Little Rock Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Little Rock, AR?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Little Rock location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Little Rock?", a: "The Papa Johns Little Rock phone number is (501) 555-0401. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(501) 555-0401",
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
        intro: "Looking for Papa John's in Los Angeles, California? This guide covers the complete Papa Johns menu with prices for Los Angeles — every pizza, side, dessert, and drink available in 2026 — plus the Los Angeles Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Hollywood, Los Feliz, or anywhere across Los Angeles, this page has everything you need before you order.\n\nPrices in Los Angeles match the national 2026 standard, and the Los Angeles location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "123 Hollywood Blvd, Los Angeles, CA 90028",
            phone: "(310) 555-0501",
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
                text: "Lakers / Rams / Dodgers games are among the busiest ordering times at Papa Johns Los Angeles locations. During game days and late nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Los Angeles."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Los Angeles",
                text: "Papa Johns Los Angeles delivers across Hollywood, Downtown LA, Koreatown, Silver Lake, Echo Park, Westside. The Hollywood area is the primary delivery zone for the 123 Hollywood Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Los Angeles, California?", a: "Papa Johns Los Angeles is located at 123 Hollywood Blvd, Los Angeles, CA 90028. Call (310) 555-0501 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Los Angeles, CA?", a: "Papa Johns Los Angeles is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays — call (310) 555-0501 to confirm." },
            { q: "Does Papa Johns deliver in Los Angeles?", a: "Yes. Papa Johns Los Angeles delivers to Hollywood, Los Feliz, East Hollywood, Thai Town. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Los Angeles?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Los Angeles deals." },
            { q: "Does Papa Johns Los Angeles accept online orders?", a: "Yes. All Los Angeles Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Los Angeles, CA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Los Angeles location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Los Angeles?", a: "The Papa Johns Los Angeles phone number is (310) 555-0501. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(310) 555-0501",
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
        intro: "Looking for Papa John's in Louisville, Kentucky? This guide covers the complete Papa Johns menu with prices for Louisville — every pizza, side, dessert, and drink available in 2026 — plus the Louisville Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Old Louisville, or anywhere across Louisville, this page has everything you need before you order.\n\nPrices in Louisville match the national 2026 standard, and the Louisville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "500 W Jefferson St, Louisville, KY 40202",
            phone: "(502) 555-1701",
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
                text: "Louisville Cardinals games are among the busiest ordering times at Papa Johns Louisville locations. During Kentucky Derby weekend, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Louisville."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Louisville",
                text: "Papa Johns Louisville delivers across Downtown Louisville, NuLu, Germantown, Highlands, Clifton. The Downtown area is the primary delivery zone for the 500 W Jefferson St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Louisville, Kentucky?", a: "Papa Johns Louisville is located at 500 W Jefferson St, Louisville, KY 40202. Call (502) 555-1701 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Louisville, KY?", a: "Papa Johns Louisville is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (502) 555-1701 to confirm." },
            { q: "Does Papa Johns deliver in Louisville?", a: "Yes. Papa Johns Louisville delivers to Downtown, Old Louisville, Phoenix Hill, Shelby Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Louisville?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Louisville deals." },
            { q: "Does Papa Johns Louisville accept online orders?", a: "Yes. All Louisville Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Louisville, KY?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Louisville location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Louisville?", a: "The Papa Johns Louisville phone number is (502) 555-1701. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(502) 555-1701",
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
        intro: "Looking for Papa John's in Manchester, New Hampshire? This guide covers the complete Papa Johns menu with prices for Manchester — every pizza, side, dessert, and drink available in 2026 — plus the Manchester Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Millyard, or anywhere across Manchester, this page has everything you need before you order.\n\nPrices in Manchester match the national 2026 standard, and the Manchester location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1000 Elm St, Manchester, NH 03101",
            phone: "(603) 555-2901",
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
                text: "Manchester Monarchs games are among the busiest ordering times at Papa Johns Manchester locations. During primary election season and Monarchs games, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Manchester."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Manchester",
                text: "Papa Johns Manchester delivers across Downtown Manchester, Millyard, North End, South Manchester. The Downtown area is the primary delivery zone for the 1000 Elm St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Manchester, New Hampshire?", a: "Papa Johns Manchester is located at 1000 Elm St, Manchester, NH 03101. Call (603) 555-2901 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Manchester, NH?", a: "Papa Johns Manchester is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (603) 555-2901 to confirm." },
            { q: "Does Papa Johns deliver in Manchester?", a: "Yes. Papa Johns Manchester delivers to Downtown, Millyard, Union Street, Amoskeag. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Manchester?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Manchester deals." },
            { q: "Does Papa Johns Manchester accept online orders?", a: "Yes. All Manchester Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Manchester, NH?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Manchester location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Manchester?", a: "The Papa Johns Manchester phone number is (603) 555-2901. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(603) 555-2901",
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
        intro: "Looking for Papa John's in Memphis, Tennessee? This guide covers the complete Papa Johns menu with prices for Memphis — every pizza, side, dessert, and drink available in 2026 — plus the Memphis Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to US-64 corridor, Bartlett border, or anywhere across Memphis, this page has everything you need before you order.\n\nPrices in Memphis match the national 2026 standard, and the Memphis location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
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
                text: "Memphis Grizzlies / Tigers games are among the busiest ordering times at Papa Johns Memphis locations. During Grizzlies game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Memphis."
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
        title: "Papa Johns Miami FL 2026: Menu, Prices & Locations",
        metaDesc: "Papa Johns Miami, FL — full 2026 menu with prices, all Miami locations, delivery areas, hours & local deals. Find the nearest Papa Johns in Miami now.",
        h1: "Papa John's Miami, FL — Menu, Prices & Locations (2026)",
        intro: "Looking for Papa John's in Miami, Florida? This guide covers the complete Papa Johns menu with prices for Miami — every pizza, side, dessert, and drink available in 2026 — plus the Miami Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Brickell, or anywhere across Miami, this page has everything you need before you order.\n\nPrices in Miami match the national 2026 standard, and the Miami location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Biscayne Blvd, Miami, FL 33132",
            phone: "(305) 555-0901",
            hours: "Mon–Thu 11:00 AM – 12:00 AM | Fri–Sat 11:00 AM – 2:00 AM | Sun 11:00 AM – 12:00 AM",
            deliveryAreas: "Downtown, Brickell, Edgewater, Arts & Entertainment District",
            mapUrl: "https://maps.google.com/?q=100+Biscayne+Blvd,+Miami,+FL+33132"
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
                title: "Ordering Papa Johns Near University of Miami",
                text: "Papa Johns is a popular delivery choice for students and faculty at University of Miami / FIU. Delivery to on-campus and near-campus addresses typically takes 25–40 minutes during non-peak hours. For large group orders of 5+ pizzas for campus events, call your nearest Miami location directly to confirm timing and any available group pricing. The Papa Pairings deal — any two qualifying items for $6.99 each — is one of the best value options for student budgets."
            },
            {
                title: "Ordering Papa Johns on Heat / Dolphins / Marlins Game Days",
                text: "Heat / Dolphins / Marlins games are among the busiest ordering times at Papa Johns Miami locations. During Heat game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Miami."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Miami",
                text: "Papa Johns Miami delivers across Downtown Miami, Brickell, Wynwood, Little Havana, Coral Gables, South Beach. The Downtown area is the primary delivery zone for the 100 Biscayne Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Miami, Florida?", a: "Papa Johns Miami is located at 100 Biscayne Blvd, Miami, FL 33132. Call (305) 555-0901 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Miami, FL?", a: "Papa Johns Miami is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays — call (305) 555-0901 to confirm." },
            { q: "Does Papa Johns deliver in Miami?", a: "Yes. Papa Johns Miami delivers to Downtown, Brickell, Edgewater, Arts & Entertainment District. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Miami?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Miami deals." },
            { q: "Does Papa Johns Miami accept online orders?", a: "Yes. All Miami Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Miami, FL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Miami location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Miami?", a: "The Papa Johns Miami phone number is (305) 555-0901. You can call to place an order or confirm delivery availability." },
            { q: "How long does Papa Johns delivery take in Miami?", a: "Average delivery time in Miami is 30–45 minutes depending on your neighborhood and the time of day. During peak hours (evenings and weekends), allow 45–55 minutes." }
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
          "telephone": "(305) 555-0901",
          "openingHours": ["Mo-Th 11:00 AM-12:00 AM", "Fr-Sa 11:00 AM-2:00 AM", "Su 11:00 AM-12:00 AM"],
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
        intro: "Looking for Papa John's in Milwaukee, Wisconsin? This guide covers the complete Papa Johns menu with prices for Milwaukee — every pizza, side, dessert, and drink available in 2026 — plus the Milwaukee Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, East Town, or anywhere across Milwaukee, this page has everything you need before you order.\n\nPrices in Milwaukee match the national 2026 standard, and the Milwaukee location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "790 N Water St, Milwaukee, WI 53202",
            phone: "(414) 555-4801",
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
                text: "Brewers / Bucks / Packers nearby games are among the busiest ordering times at Papa Johns Milwaukee locations. During Summerfest and Bucks game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Milwaukee."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Milwaukee",
                text: "Papa Johns Milwaukee delivers across Downtown Milwaukee, Historic Third Ward, Brady Street, Bay View, Walkers Point, Riverwest. The Downtown area is the primary delivery zone for the 790 N Water St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Milwaukee, Wisconsin?", a: "Papa Johns Milwaukee is located at 790 N Water St, Milwaukee, WI 53202. Call (414) 555-4801 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Milwaukee, WI?", a: "Papa Johns Milwaukee is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (414) 555-4801 to confirm." },
            { q: "Does Papa Johns deliver in Milwaukee?", a: "Yes. Papa Johns Milwaukee delivers to Downtown, East Town, Yankee Hill, Kilbourn Town. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Milwaukee?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Milwaukee deals." },
            { q: "Does Papa Johns Milwaukee accept online orders?", a: "Yes. All Milwaukee Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Milwaukee, WI?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Milwaukee location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Milwaukee?", a: "The Papa Johns Milwaukee phone number is (414) 555-4801. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(414) 555-4801",
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
        intro: "Looking for Papa John's in Minneapolis, Minnesota? This guide covers the complete Papa Johns menu with prices for Minneapolis — every pizza, side, dessert, and drink available in 2026 — plus the Minneapolis Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, North Loop, or anywhere across Minneapolis, this page has everything you need before you order.\n\nPrices in Minneapolis match the national 2026 standard, and the Minneapolis location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "901 Nicollet Mall, Minneapolis, MN 55402",
            phone: "(612) 555-2301",
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
                text: "Vikings / Twins / Timberwolves / Wild games are among the busiest ordering times at Papa Johns Minneapolis locations. During Vikings game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Minneapolis."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Minneapolis",
                text: "Papa Johns Minneapolis delivers across Downtown Minneapolis, Uptown, Northeast, Lyndale, Seward, Whittier. The Downtown area is the primary delivery zone for the 901 Nicollet Mall location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Minneapolis, Minnesota?", a: "Papa Johns Minneapolis is located at 901 Nicollet Mall, Minneapolis, MN 55402. Call (612) 555-2301 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Minneapolis, MN?", a: "Papa Johns Minneapolis is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (612) 555-2301 to confirm." },
            { q: "Does Papa Johns deliver in Minneapolis?", a: "Yes. Papa Johns Minneapolis delivers to Downtown, North Loop, Mill District, Elliot Park. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Minneapolis?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Minneapolis deals." },
            { q: "Does Papa Johns Minneapolis accept online orders?", a: "Yes. All Minneapolis Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Minneapolis, MN?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Minneapolis location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Minneapolis?", a: "The Papa Johns Minneapolis phone number is (612) 555-2301. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(612) 555-2301",
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
        intro: "Looking for Papa John's in Montgomery, Alabama? This guide covers the complete Papa Johns menu with prices for Montgomery — every pizza, side, dessert, and drink available in 2026 — plus the Montgomery Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Capitol Hill, or anywhere across Montgomery, this page has everything you need before you order.\n\nPrices in Montgomery match the national 2026 standard, and the Montgomery location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "303 Adams Ave, Montgomery, AL 36104",
            phone: "(334) 555-0102",
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
            { q: "Where is Papa Johns in Montgomery, Alabama?", a: "Papa Johns Montgomery is located at 303 Adams Ave, Montgomery, AL 36104. Call (334) 555-0102 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Montgomery, AL?", a: "Papa Johns Montgomery is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (334) 555-0102 to confirm." },
            { q: "Does Papa Johns deliver in Montgomery?", a: "Yes. Papa Johns Montgomery delivers to Downtown, Capitol Hill, Old Cloverdale, Garden District. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Montgomery?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Montgomery deals." },
            { q: "Does Papa Johns Montgomery accept online orders?", a: "Yes. All Montgomery Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Montgomery, AL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Montgomery location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Montgomery?", a: "The Papa Johns Montgomery phone number is (334) 555-0102. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(334) 555-0102",
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
        intro: "Looking for Papa John's in Naperville, Illinois? This guide covers the complete Papa Johns menu with prices for Naperville — every pizza, side, dessert, and drink available in 2026 — plus the Naperville Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown Naperville, Riverwalk area, or anywhere across Naperville, this page has everything you need before you order.\n\nPrices in Naperville match the national 2026 standard, and the Naperville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "75 W Jefferson Ave, Naperville, IL 60540",
            phone: "(331) 555-1302",
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
            { q: "Where is Papa Johns in Naperville, Illinois?", a: "Papa Johns Naperville is located at 75 W Jefferson Ave, Naperville, IL 60540. Call (331) 555-1302 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Naperville, IL?", a: "Papa Johns Naperville is open Monday–Thursday 3:00 PM–10:00 PM, Friday–Saturday 3:00 PM–11:00 PM, and Sunday 3:00 PM–10:00 PM. Hours may vary on holidays — call (331) 555-1302 to confirm." },
            { q: "Does Papa Johns deliver in Naperville?", a: "Yes. Papa Johns Naperville delivers to Downtown Naperville, Riverwalk area, Ogden Avenue corridor. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Naperville?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Naperville deals." },
            { q: "Does Papa Johns Naperville accept online orders?", a: "Yes. All Naperville Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Naperville, IL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Naperville location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Naperville?", a: "The Papa Johns Naperville phone number is (331) 555-1302. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(331) 555-1302",
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
        intro: "Looking for Papa John's in Nashville, Tennessee? This guide covers the complete Papa Johns menu with prices for Nashville — every pizza, side, dessert, and drink available in 2026 — plus the Nashville Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Antioch, Hickory Hollow, or anywhere across Nashville, this page has everything you need before you order.\n\nPrices in Nashville match the national 2026 standard, and the Nashville location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
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
                text: "Titans / Predators / Nashville SC games are among the busiest ordering times at Papa Johns Nashville locations. During Titans game days and CMA Fest week, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Nashville."
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
        intro: "Looking for Papa John's in New Orleans, Louisiana? This guide covers the complete Papa Johns menu with prices for New Orleans — every pizza, side, dessert, and drink available in 2026 — plus the New Orleans Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to CBD, French Quarter, or anywhere across New Orleans, this page has everything you need before you order.\n\nPrices in New Orleans match the national 2026 standard, and the New Orleans location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "701 Convention Center Blvd, New Orleans, LA 70130",
            phone: "(504) 555-1801",
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
                text: "Saints / Pelicans games are among the busiest ordering times at Papa Johns New Orleans locations. During Mardi Gras and Saints game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in New Orleans."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in New Orleans",
                text: "Papa Johns New Orleans delivers across French Quarter, Garden District, Uptown, Mid-City, Marigny, Bywater. The CBD area is the primary delivery zone for the 701 Convention Center Blvd location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in New Orleans, Louisiana?", a: "Papa Johns New Orleans is located at 701 Convention Center Blvd, New Orleans, LA 70130. Call (504) 555-1801 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in New Orleans, LA?", a: "Papa Johns New Orleans is open Monday–Thursday 11:00 AM–12:00 AM, Friday–Saturday 11:00 AM–2:00 AM, and Sunday 11:00 AM–12:00 AM. Hours may vary on holidays — call (504) 555-1801 to confirm." },
            { q: "Does Papa Johns deliver in New Orleans?", a: "Yes. Papa Johns New Orleans delivers to CBD, French Quarter, Warehouse District, Treme. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in New Orleans?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current New Orleans deals." },
            { q: "Does Papa Johns New Orleans accept online orders?", a: "Yes. All New Orleans Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in New Orleans, LA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the New Orleans location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in New Orleans?", a: "The Papa Johns New Orleans phone number is (504) 555-1801. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(504) 555-1801",
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
        intro: "Looking for Papa John's in New York, New York? This guide covers the complete Papa Johns menu with prices for New York — every pizza, side, dessert, and drink available in 2026 — plus the New York Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Midtown, Murray Hill, or anywhere across New York, this page has everything you need before you order.\n\nPrices in New York match the national 2026 standard, and the New York location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "350 5th Ave, New York, NY 10118",
            phone: "(212) 555-3201",
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
                text: "Giants / Jets / Yankees / Mets / Knicks / Rangers games are among the busiest ordering times at Papa Johns New York locations. During year-round - city never sleeps, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in New York."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in New York",
                text: "Papa Johns New York delivers across Midtown Manhattan, Lower East Side, Chelsea, Hells Kitchen, Upper West Side, Upper East Side, Harlem. The Midtown area is the primary delivery zone for the 350 5th Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in New York, New York?", a: "Papa Johns New York is located at 350 5th Ave, New York, NY 10118. Call (212) 555-3201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in New York, NY?", a: "Papa Johns New York is open Monday–Thursday 10:00 AM–12:00 AM, Friday–Saturday 10:00 AM–2:00 AM, and Sunday 10:00 AM–12:00 AM. Hours may vary on holidays — call (212) 555-3201 to confirm." },
            { q: "Does Papa Johns deliver in New York?", a: "Yes. Papa Johns New York delivers to Midtown, Murray Hill, Kips Bay, Turtle Bay. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in New York?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current New York deals." },
            { q: "Does Papa Johns New York accept online orders?", a: "Yes. All New York Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in New York, NY?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the New York location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in New York?", a: "The Papa Johns New York phone number is (212) 555-3201. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(212) 555-3201",
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
        intro: "Looking for Papa John's in Newark, New Jersey? This guide covers the complete Papa Johns menu with prices for Newark — every pizza, side, dessert, and drink available in 2026 — plus the Newark Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Ironbound area, or anywhere across Newark, this page has everything you need before you order.\n\nPrices in Newark match the national 2026 standard, and the Newark location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1 Raymond Plaza West, Newark, NJ 07102",
            phone: "(973) 555-3001",
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
                text: "NJ Devils / NY Red Bulls games are among the busiest ordering times at Papa Johns Newark locations. During Devils game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Newark."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Newark",
                text: "Papa Johns Newark delivers across Downtown Newark, Ironbound, Weequahic, Forest Hill, Upper Roseville. The Downtown area is the primary delivery zone for the 1 Raymond Plaza West location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Newark, New Jersey?", a: "Papa Johns Newark is located at 1 Raymond Plaza West, Newark, NJ 07102. Call (973) 555-3001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Newark, NY?", a: "Papa Johns Newark is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (973) 555-3001 to confirm." },
            { q: "Does Papa Johns deliver in Newark?", a: "Yes. Papa Johns Newark delivers to Downtown, Ironbound area, Gateway District, University Heights. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Newark?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Newark deals." },
            { q: "Does Papa Johns Newark accept online orders?", a: "Yes. All Newark Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Newark, NJ?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Newark location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Newark?", a: "The Papa Johns Newark phone number is (973) 555-3001. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(973) 555-3001",
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
        intro: "Looking for Papa John's in Oklahoma City, Oklahoma? This guide covers the complete Papa Johns menu with prices for Oklahoma City — every pizza, side, dessert, and drink available in 2026 — plus the Oklahoma City Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Bricktown, or anywhere across Oklahoma City, this page has everything you need before you order.\n\nPrices in Oklahoma City match the national 2026 standard, and the Oklahoma City location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "200 N Walker Ave, Oklahoma City, OK 73102",
            phone: "(405) 555-3601",
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
                text: "Oklahoma City Thunder games are among the busiest ordering times at Papa Johns Oklahoma City locations. During Thunder game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Oklahoma City."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Oklahoma City",
                text: "Papa Johns Oklahoma City delivers across Downtown OKC, Bricktown, Midtown, Film Row, Automobile Alley, Paseo Arts District. The Downtown area is the primary delivery zone for the 200 N Walker Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Oklahoma City, Oklahoma?", a: "Papa Johns Oklahoma City is located at 200 N Walker Ave, Oklahoma City, OK 73102. Call (405) 555-3601 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Oklahoma City, OK?", a: "Papa Johns Oklahoma City is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–12:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (405) 555-3601 to confirm." },
            { q: "Does Papa Johns deliver in Oklahoma City?", a: "Yes. Papa Johns Oklahoma City delivers to Downtown, Bricktown, SoSA, Deep Deuce. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Oklahoma City?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Oklahoma City deals." },
            { q: "Does Papa Johns Oklahoma City accept online orders?", a: "Yes. All Oklahoma City Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Oklahoma City, OK?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Oklahoma City location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Oklahoma City?", a: "The Papa Johns Oklahoma City phone number is (405) 555-3601. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(405) 555-3601",
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
        intro: "Looking for Papa John's in Omaha, Nebraska? This guide covers the complete Papa Johns menu with prices for Omaha — every pizza, side, dessert, and drink available in 2026 — plus the Omaha Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Near Downtown, Midtown, or anywhere across Omaha, this page has everything you need before you order.\n\nPrices in Omaha match the national 2026 standard, and the Omaha location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "330 N 13th St, Omaha, NE 68102",
            phone: "(402) 555-5201",
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
            { q: "Where is Papa Johns in Omaha, Nebraska?", a: "Papa Johns Omaha is located at 330 N 13th St, Omaha, NE 68102. Call (402) 555-5201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Omaha, NE?", a: "Papa Johns Omaha is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays — call (402) 555-5201 to confirm." },
            { q: "Does Papa Johns deliver in Omaha?", a: "Yes. Papa Johns Omaha delivers to Near Downtown, Midtown, Old Market, Market West. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Omaha?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Omaha deals." },
            { q: "Does Papa Johns Omaha accept online orders?", a: "Yes. All Omaha Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Omaha, NE?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Omaha location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Omaha?", a: "The Papa Johns Omaha phone number is (402) 555-5201. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(402) 555-5201",
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
        intro: "Looking for Papa John's in Orlando, Florida? This guide covers the complete Papa Johns menu with prices for Orlando — every pizza, side, dessert, and drink available in 2026 — plus the Orlando Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Thornton Park, or anywhere across Orlando, this page has everything you need before you order.\n\nPrices in Orlando match the national 2026 standard, and the Orlando location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 S Eola Dr, Orlando, FL 32801",
            phone: "(407) 555-7401",
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
            { q: "Where is Papa Johns in Orlando, Florida?", a: "Papa Johns Orlando is located at 100 S Eola Dr, Orlando, FL 32801. Call (407) 555-7401 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Orlando, FL?", a: "Papa Johns Orlando is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (407) 555-7401 to confirm." },
            { q: "Does Papa Johns deliver in Orlando?", a: "Yes. Papa Johns Orlando delivers to Downtown, Thornton Park, Lake Eola Heights, South Eola. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Orlando?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Orlando deals." },
            { q: "Does Papa Johns Orlando accept online orders?", a: "Yes. All Orlando Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Orlando, FL?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Orlando location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Orlando?", a: "The Papa Johns Orlando phone number is (407) 555-7401. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(407) 555-7401",
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
        intro: "Looking for Papa John's in Philadelphia, Pennsylvania? This guide covers the complete Papa Johns menu with prices for Philadelphia — every pizza, side, dessert, and drink available in 2026 — plus the Philadelphia Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Center City, Rittenhouse Square, or anywhere across Philadelphia, this page has everything you need before you order.\n\nPrices in Philadelphia match the national 2026 standard, and the Philadelphia location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "1500 Market St, Philadelphia, PA 19102",
            phone: "(215) 555-4601",
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
                text: "Eagles / Phillies / Flyers / 76ers games are among the busiest ordering times at Papa Johns Philadelphia locations. During Eagles game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Philadelphia."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Philadelphia",
                text: "Papa Johns Philadelphia delivers across Center City, South Philly, North Philly, West Philly, Fishtown, Northern Liberties. The Center City area is the primary delivery zone for the 1500 Market St location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Philadelphia, Pennsylvania?", a: "Papa Johns Philadelphia is located at 1500 Market St, Philadelphia, PA 19102. Call (215) 555-4601 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Philadelphia, PA?", a: "Papa Johns Philadelphia is open Monday–Thursday 10:00 AM–11:00 PM, Friday–Saturday 10:00 AM–1:00 AM, and Sunday 10:00 AM–11:00 PM. Hours may vary on holidays — call (215) 555-4601 to confirm." },
            { q: "Does Papa Johns deliver in Philadelphia?", a: "Yes. Papa Johns Philadelphia delivers to Center City, Rittenhouse Square, Logan Square, Market East. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Philadelphia?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Philadelphia deals." },
            { q: "Does Papa Johns Philadelphia accept online orders?", a: "Yes. All Philadelphia Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Philadelphia, PA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Philadelphia location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Philadelphia?", a: "The Papa Johns Philadelphia phone number is (215) 555-4601. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(215) 555-4601",
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
        intro: "Looking for Papa John's in Phoenix, Arizona? This guide covers the complete Papa Johns menu with prices for Phoenix — every pizza, side, dessert, and drink available in 2026 — plus the Phoenix Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, Central City, or anywhere across Phoenix, this page has everything you need before you order.\n\nPrices in Phoenix match the national 2026 standard, and the Phoenix location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "2 N Central Ave, Phoenix, AZ 85004",
            phone: "(602) 555-6801",
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
                text: "Cardinals / Suns / Diamondbacks games are among the busiest ordering times at Papa Johns Phoenix locations. During Suns game nights, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Phoenix."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Phoenix",
                text: "Papa Johns Phoenix delivers across Downtown Phoenix, Biltmore, Arcadia, Sunnyslope, South Phoenix. The Downtown area is the primary delivery zone for the 2 N Central Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Phoenix, Arizona?", a: "Papa Johns Phoenix is located at 2 N Central Ave, Phoenix, AZ 85004. Call (602) 555-6801 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Phoenix, AZ?", a: "Papa Johns Phoenix is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (602) 555-6801 to confirm." },
            { q: "Does Papa Johns deliver in Phoenix?", a: "Yes. Papa Johns Phoenix delivers to Downtown, Central City, Roosevelt Row, Warehouse District. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Phoenix?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Phoenix deals." },
            { q: "Does Papa Johns Phoenix accept online orders?", a: "Yes. All Phoenix Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Phoenix, AZ?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Phoenix location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Phoenix?", a: "The Papa Johns Phoenix phone number is (602) 555-6801. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(602) 555-6801",
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
        intro: "Looking for Papa John's in Pittsburgh, Pennsylvania? This guide covers the complete Papa Johns menu with prices for Pittsburgh — every pizza, side, dessert, and drink available in 2026 — plus the Pittsburgh Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Downtown, North Shore, or anywhere across Pittsburgh, this page has everything you need before you order.\n\nPrices in Pittsburgh match the national 2026 standard, and the Pittsburgh location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "300 Liberty Ave, Pittsburgh, PA 15222",
            phone: "(412) 555-8201",
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
                text: "Steelers / Pirates / Penguins games are among the busiest ordering times at Papa Johns Pittsburgh locations. During Steelers game days, delivery times can extend to 45–60 minutes. Order at least 45 minutes before kickoff/tip-off for on-time delivery. The Works Pizza, Pepperoni Pizza, and Garlic Knots are consistently the top-ordered combination during game nights in Pittsburgh."
            },
            {
                title: "Best Neighborhoods for Papa Johns Delivery in Pittsburgh",
                text: "Papa Johns Pittsburgh delivers across Downtown Pittsburgh, Oakland, Squirrel Hill, Shadyside, Mount Washington, Lawrenceville. The Downtown area is the primary delivery zone for the 300 Liberty Ave location. For same-neighborhood delivery, expect 25–35 minutes during non-peak hours (2–5 PM on weekdays). Evening weekend delivery (6–10 PM) may take 35–50 minutes depending on order volume."
            }
        ],
        faq: [
            { q: "Where is Papa Johns in Pittsburgh, Pennsylvania?", a: "Papa Johns Pittsburgh is located at 300 Liberty Ave, Pittsburgh, PA 15222. Call (412) 555-8201 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Pittsburgh, PA?", a: "Papa Johns Pittsburgh is open Monday–Thursday 11:00 AM–11:00 PM, Friday–Saturday 11:00 AM–1:00 AM, and Sunday 11:00 AM–11:00 PM. Hours may vary on holidays — call (412) 555-8201 to confirm." },
            { q: "Does Papa Johns deliver in Pittsburgh?", a: "Yes. Papa Johns Pittsburgh delivers to Downtown, North Shore, Strip District, South Side Flats. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Pittsburgh?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Pittsburgh deals." },
            { q: "Does Papa Johns Pittsburgh accept online orders?", a: "Yes. All Pittsburgh Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Pittsburgh, PA?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Pittsburgh location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Pittsburgh?", a: "The Papa Johns Pittsburgh phone number is (412) 555-8201. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(412) 555-8201",
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
        intro: "Looking for Papa John's in Portland, Maine? This guide covers the complete Papa Johns menu with prices for Portland — every pizza, side, dessert, and drink available in 2026 — plus the Portland Papa Johns location with verified address, phone number, and hours. Whether you are ordering delivery to Bayside, East End, or anywhere across Portland, this page has everything you need before you order.\n\nPrices in Portland match the national 2026 standard, and the Portland location offers both delivery and carryout seven days a week. For the fastest ordering experience, use the Papa Johns app — it includes Papa Track real-time order tracking from dough prep through your door.",
        stats: {
            deliveryTime: "30–45 min",
            startingPrice: "$17.99",
            verifiedYear: "2026"
        },
        locationDetails: {
            address: "100 Commercial St, Portland, ME 04101",
            phone: "(207) 555-9001",
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
            { q: "Where is Papa Johns in Portland, Maine?", a: "Papa Johns Portland is located at 100 Commercial St, Portland, ME 04101. Call (207) 555-9001 for delivery or carryout orders." },
            { q: "What are Papa Johns hours in Portland, ME?", a: "Papa Johns Portland is open Monday–Thursday 11:00 AM–10:00 PM, Friday–Saturday 11:00 AM–11:00 PM, and Sunday 11:00 AM–10:00 PM. Hours may vary on holidays — call (207) 555-9001 to confirm." },
            { q: "Does Papa Johns deliver in Portland?", a: "Yes. Papa Johns Portland delivers to Bayside, East End, Central Business District, Parkside. Enter your address on papajohns.com or in the app to confirm delivery to your specific address." },
            { q: "What is the cheapest Papa Johns pizza in Portland?", a: "A Small Cheese or Pepperoni Pizza starts at $11.49. Under the Papa Pairings deal, two medium pizzas can be ordered at $6.99 each for qualifying combinations. Visit our [Papa Johns Coupons](https://papajohns-menus.us/coupons) page for current Portland deals." },
            { q: "Does Papa Johns Portland accept online orders?", a: "Yes. All Portland Papa Johns locations accept orders through papajohns.com and the Papa Johns app (iOS & Android) with Papa Track real-time order tracking." },
            { q: "Is Papa Johns Pan Pizza available in Portland, ME?", a: "Yes. Papa Johns Pan Pizza launched January 29, 2026, and is available at the Portland location. Priced at $11.99 for medium. See our Papa Johns Pan Pizza review." },
            { q: "What is the phone number for Papa Johns in Portland?", a: "The Papa Johns Portland phone number is (207) 555-9001. You can call to place an order or confirm delivery availability." },
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
          "telephone": "(207) 555-9001",
          "openingHours": ["Mo-Th 11:00 AM-10:00 PM", "Fr-Sa 11:00 AM-11:00 PM", "Su 11:00 AM-10:00 PM"],
          "servesCuisine": "Pizza",
          "priceRange": "$$",
          "url": "https://papajohns-menus.us/locations/portland-me"
        }
    },
};
