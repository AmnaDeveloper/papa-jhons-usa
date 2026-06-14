import re

file_path = 'src/app/data/locationRichContent.ts'
with open(file_path, 'r') as f:
    content = f.read()

if '"miami-fl": {' in content or "'miami-fl': {" in content:
    print("miami-fl already exists!")
else:
    miami_data = """
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
"""
    
    # insert it right after `export const locationRichContent: Record<string, RichLocationData> = {`
    insert_pos = content.find('export const locationRichContent: Record<string, RichLocationData> = {') + len('export const locationRichContent: Record<string, RichLocationData> = {')
    
    new_content = content[:insert_pos] + "\n" + miami_data + content[insert_pos:]
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("miami-fl added to locationRichContent.ts")

