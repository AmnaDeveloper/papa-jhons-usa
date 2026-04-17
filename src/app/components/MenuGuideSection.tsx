import React from 'react';

const MenuGuideSection = () => {
    return (
        <section className="py-20 bg-white w-full">
            <div className="w-full max-w-[1100px] mx-auto px-4 menu-guide-container">
                <style dangerouslySetInnerHTML={{ __html: `
                    .menu-guide-container { 
                        font-family: Arial, sans-serif; 
                        color: #222; 
                        line-height: 1.5;
                    }
                    .menu-guide-container h2 { 
                        font-family: "PapaSans-Heavy", "Arial Black", sans-serif;
                        font-size: 28px; 
                        color: #fff; 
                        background: #cc0000; 
                        padding: 15px 25px; 
                        margin: 50px 0 0; 
                        border-radius: 12px 12px 0 0;
                        text-transform: uppercase;
                        letter-spacing: -0.02em;
                    }
                    .menu-guide-container h3 { 
                        font-family: "PapaSans-Heavy", sans-serif;
                        font-size: 18px; 
                        color: #1A3D17; 
                        background: #f4f6f4; 
                        padding: 14px 25px; 
                        margin: 0; 
                        border-left: 6px solid #1A3D17;
                        text-transform: uppercase;
                        border-bottom: 2px solid #e2e8e2;
                    }
                    .menu-guide-container .table-outer {
                        border: 2px solid #1A3D17;
                        border-radius: 0 0 16px 16px;
                        overflow: hidden;
                        margin-bottom: 35px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    }
                    .menu-guide-container table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        background: #fff;
                    }
                    .menu-guide-container thead th { 
                        background: #1A3D17; 
                        color: #CCEE18; 
                        padding: 14px 20px; 
                        text-align: left; 
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        font-family: "PapaSans-Heavy", sans-serif;
                        font-weight: 900;
                    }
                    .menu-guide-container tbody tr:nth-child(even) { background: #fcfcfc; }
                    .menu-guide-container tbody tr:hover { background: #f4f6f4; }
                    .menu-guide-container td { 
                        padding: 14px 20px; 
                        border-bottom: 1px solid #f0f0f0; 
                        font-size: 14px;
                        vertical-align: middle;
                        font-weight: 600;
                    }
                    .menu-guide-container td.price { 
                        font-weight: 900; 
                        color: #cc0000; 
                        white-space: nowrap; 
                        font-size: 16px;
                        font-family: "PapaSans-Heavy", sans-serif;
                    }
                    .menu-guide-container td.cal { 
                        color: #888; 
                        font-size: 12px; 
                        white-space: nowrap; 
                        font-weight: 800;
                    }
                    .menu-guide-container td.desc { 
                        color: #555; 
                        font-size: 13px; 
                        font-weight: 500;
                    }
                    .menu-guide-container .note { 
                        background: #fff8e1; 
                        border: 1px solid #ffe082; 
                        padding: 14px 25px; 
                        font-size: 13px; 
                        color: #7a5f00; 
                        margin: 10px 0;
                        border-radius: 8px;
                        font-weight: 700;
                    }
                    .menu-guide-header {
                        text-align: center;
                        margin-bottom: 60px;
                        padding-bottom: 30px;
                    }
                    .menu-guide-header h1 {
                        font-family: "PapaSans-Heavy", sans-serif;
                        font-size: clamp(32px, 5vw, 42px);
                        color: #1A3D17;
                        margin-bottom: 10px;
                        text-transform: uppercase;
                        font-weight: 900;
                        letter-spacing: -0.03em;
                        line-height: 1;
                    }
                    .menu-guide-header p {
                        font-family: "PapaSans-Heavy", sans-serif;
                        font-weight: 900;
                        color: #cc0000;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        font-size: 13px;
                    }
                    .price-disclaimer {
                        margin-top: 60px;
                        padding: 30px;
                        background: #fdfdfd;
                        border: 2px solid #f0f0f0;
                        font-size: 13px;
                        color: #666;
                        line-height: 1.6;
                        border-radius: 20px;
                    }
                    @media (max-width: 768px) {
                        .menu-guide-container td, .menu-guide-container thead th {
                            padding: 12px 10px;
                            font-size: 12px;
                        }
                        .menu-guide-header h1 { font-size: 28px; }
                        .table-outer { overflow-x: auto; }
                    }
                ` }} />

                <div className="menu-guide-header">
                    <h1>Papa Johns Complete Menu <br/><span className="text-[#cc0000]">with Prices 2026</span></h1>
                    <p>Last Updated: April 2026 | All prices in USD | papajohns-menus.us</p>
                </div>

                {/* 1. PIZZAS */}
                <h2>🍕 1. Pizza Menu — All Sizes & Prices</h2>
                <div className="note"> Prices shown are for Original Crust. Epic Stuffed Crust adds +$3.00 | Garlic Stuffed Crust adds +$3.50 | Thin Crust & NY Style: same price as Original Crust | Gluten-Free Crust: add +$2.00</div>
                
                <div className="table-outer">
                    <h3>Classic Pizzas</h3>
                    <table>
                        <thead>
                            <tr><th>Pizza Name</th><th>Small (10")</th><th>Medium (12")</th><th>Large (14")</th><th>XL (16")</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Cheese Pizza</td><td className="price">$10.99</td><td className="price">$12.99</td><td className="price">$14.99</td><td className="price">$17.99</td><td className="cal">260 cal</td><td className="desc">Classic tomato sauce & mozzarella cheese on fresh-baked dough</td></tr>
                            <tr><td>Pepperoni Pizza</td><td className="price">$10.99</td><td className="price">$12.99</td><td className="price">$14.99</td><td className="price">$17.99</td><td className="cal">300 cal</td><td className="desc">Classic pepperoni layered on tomato sauce & mozzarella</td></tr>
                            <tr><td>Sausage Pizza</td><td className="price">$10.99</td><td className="price">$12.99</td><td className="price">$14.99</td><td className="price">$17.99</td><td className="cal">310 cal</td><td className="desc">Italian sausage crumbles on tomato sauce & mozzarella</td></tr>
                            <tr><td>Create Your Own Pizza</td><td className="price">$10.99+</td><td className="price">$12.99+</td><td className="price">$14.99+</td><td className="price">$17.99+</td><td className="cal">Varies</td><td className="desc">Choose your own crust, sauce, cheese & toppings</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-outer">
                    <h3>Handcrafted Specialty Pizzas (Super Loaded)</h3>
                    <table>
                        <thead>
                            <tr><th>Pizza Name</th><th>Small (10")</th><th>Medium (12")</th><th>Large (14")</th><th>XL (16")</th><th>Key Toppings</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>The Works Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Pepperoni, sausage, onions, green peppers, mushrooms, black olives</td></tr>
                            <tr><td>The Meats Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Pepperoni, sausage, Canadian bacon, beef — four premium meats</td></tr>
                            <tr><td>Ultimate Pepperoni Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Double layer of pepperoni — classic & robustly flavored</td></tr>
                            <tr><td>BBQ Chicken Bacon Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Grilled chicken, bacon, BBQ sauce base, mozzarella</td></tr>
                            <tr><td>Fiery Buffalo Chicken</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Buffalo sauce base, grilled chicken, banana peppers, mozzarella</td></tr>
                            <tr><td>Philly Cheesesteak Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Steak strips, green peppers, onions, creamy cheese sauce</td></tr>
                            <tr><td>Super Hawaiian Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Ham, pineapple, mozzarella — tropical sweet & savory combo</td></tr>
                            <tr><td>Shaq-a-Roni Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Oversized XL slices, extra cheese, double pepperoni</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-outer">
                    <h3>Meatless / Vegetarian Specialty Pizzas</h3>
                    <table>
                        <thead>
                            <tr><th>Pizza Name</th><th>Small (10")</th><th>Medium (12")</th><th>Large (14")</th><th>XL (16")</th><th>Key Toppings</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Tuscan Six Cheese Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Mozzarella, provolone, cheddar, Asiago, Romano, Fontina</td></tr>
                            <tr><td>Garden Fresh Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Onions, mushrooms, green peppers, black olives, tomatoes</td></tr>
                            <tr><td>Spinach & Tomato Alfredo</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="desc">Creamy Alfredo base, fresh spinach, tomatoes, mozzarella</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-outer">
                    <h3>Epic Stuffed Crust Pizzas</h3>
                    <table>
                        <thead>
                            <tr><th>Pizza Name</th><th>Large (14")</th><th>XL (16")</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Epic Stuffed Crust Pepperoni</td><td className="price">$16.99</td><td className="price">$19.99</td><td className="cal">330 cal</td><td className="desc">Pepperoni on cheese-stuffed crust pizza</td></tr>
                            <tr><td>Epic Stuffed Crust Cheese</td><td className="price">$16.99</td><td className="price">$19.99</td><td className="cal">330 cal</td><td className="desc">Classic cheese pizza with mozzarella-stuffed crust edge</td></tr>
                            <tr><td>Garlic Epic Stuffed Crust</td><td className="price">$17.49+</td><td className="price">$20.49+</td><td className="cal">370 cal</td><td className="desc">Garlic herb butter + cheese baked into the crust edge</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-outer">
                    <h3>Gluten-Free Crust Pizzas</h3>
                    <table>
                        <thead>
                            <tr><th>Pizza Name</th><th>Medium (12")</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Create Your Own Gluten-Free</td><td className="price">$14.99</td><td className="cal">150 cal</td><td className="desc">Sorghum, teff, amaranth & quinoa crust — 6 slices</td></tr>
                            <tr><td>Cheese Pizza (GF Crust)</td><td className="price">$14.99</td><td className="cal">150 cal</td><td className="desc">Classic cheese on gluten-free ancient grains crust</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 2. PAPADIAS */}
                <h2>🥙 2. Papadias Menu — Flatbread Sandwiches</h2>
                <div className="table-outer">
                    <table>
                        <thead>
                            <tr><th>Papadia Name</th><th>Price</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Italian Papadia</td><td className="price">$8.99</td><td className="cal">800 cal</td><td className="desc">Salami, banana peppers, onions, mozzarella — served with pizza sauce</td></tr>
                            <tr><td>Philly Cheesesteak Papadia</td><td className="price">$8.99</td><td className="cal">800 cal</td><td className="desc">Steak, onions, green peppers, three-cheese blend</td></tr>
                            <tr><td>BBQ Chicken & Bacon Papadia</td><td className="price">$8.99</td><td className="cal">830 cal</td><td className="desc">Grilled chicken, bacon, BBQ sauce, mozzarella</td></tr>
                            <tr><td>Grilled Buffalo Chicken Papadia</td><td className="price">$8.99</td><td className="cal">910 cal</td><td className="desc">Grilled chicken, buffalo sauce, mozzarella — served with ranch</td></tr>
                            <tr><td>Create Your Own Papadia</td><td className="price">$8.99</td><td className="cal">800 cal</td><td className="desc">Choose your own fillings, cheese & sauce</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 3. WINGS */}
                <h2>🍗 3. Wings Menu — Bone-In & Boneless</h2>
                <div className="table-outer">
                    <h3>Wings Pricing & Flavors</h3>
                    <table>
                        <thead>
                            <tr><th>Flavor</th><th>Boneless (8 pc)</th><th>Bone-In (8 pc)</th><th>Sauce Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Buffalo Wings</td><td className="price">$8.49</td><td className="price">$10.99</td><td className="desc">Classic tangy buffalo hot sauce</td></tr>
                            <tr><td>BBQ Wings</td><td className="price">$8.49</td><td className="price">$10.99</td><td className="desc">Bold smoky BBQ glaze</td></tr>
                            <tr><td>Honey Chipotle Wings</td><td className="price">$8.49</td><td className="price">$10.99</td><td className="desc">Sweet honey + smoky chipotle</td></tr>
                            <tr><td>Garlic Parmesan Wings</td><td className="price">$8.49</td><td className="price">$10.99</td><td className="desc">Creamy garlic parmesan butter sauce</td></tr>
                            <tr><td>Unsauced Wings</td><td className="price">$8.49</td><td className="price">$10.99</td><td className="desc">Plain, crispy — dip in your choice of sauce</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 4. PAPA BITES */}
                <h2>🧆 4. Papa Bites Menu</h2>
                <div className="table-outer">
                    <table>
                        <thead>
                            <tr><th>Flavor</th><th>Price</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Jalapeño Papa Bites</td><td className="price">$6.99</td><td className="cal">80 cal/roll</td><td className="desc">Jalapeños, creamy Alfredo & cheese — served with ranch</td></tr>
                            <tr><td>Chicken Parmesan Papa Bites</td><td className="price">$6.99</td><td className="cal">110 cal/roll</td><td className="desc">Chicken & parmesan wrapped in original dough</td></tr>
                            <tr><td>OREO® Cookie Papa Bites</td><td className="price">$6.99</td><td className="cal">100 cal/roll</td><td className="desc">OREO cookie pieces baked in sweet dough</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 5. SIDES */}
                <h2>🥖 5. Sides Menu</h2>
                <div className="table-outer">
                    <table>
                        <thead>
                            <tr><th>Side Item</th><th>Price</th><th>Calories</th><th>Quantity / Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Original Breadsticks</td><td className="price">$7.29</td><td className="cal">150 cal/stick</td><td className="desc">10 sticks — served with pizza sauce</td></tr>
                            <tr><td>Garlic Parmesan Breadsticks</td><td className="price">$7.99</td><td className="cal">170 cal/stick</td><td className="desc">10 sticks — garlic butter & parmesan</td></tr>
                            <tr><td>Cheesesticks</td><td className="price">$7.99</td><td className="cal">90 cal/stick</td><td className="desc">14 sticks — mozzarella cheese</td></tr>
                            <tr><td>Bacon Cheesesticks</td><td className="price">$8.49</td><td className="cal">110 cal/stick</td><td className="desc">14 sticks — mozzarella + crispy bacon</td></tr>
                            <tr><td>Garlic Knots</td><td className="price">$6.99</td><td className="cal">110 cal/knot</td><td className="desc">8 knots — soft garlic-seasoned dough</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 6. PAPA BOWLS */}
                <h2>🥣 6. Papa Bowls Menu</h2>
                <div className="table-outer">
                    <table>
                        <thead>
                            <tr><th>Papa Bowl</th><th>Price</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Chicken Alfredo Papa Bowl</td><td className="price">$8.49</td><td className="cal">Varies</td><td className="desc">Grilled chicken, Alfredo sauce, mozzarella, baked in a bowl</td></tr>
                            <tr><td>Garden Veggie Papa Bowl</td><td className="price">$8.49</td><td className="cal">Varies</td><td className="desc">Mushrooms, peppers, onions, tomatoes, cheese — no crust</td></tr>
                            <tr><td>Create Your Own Papa Bowl</td><td className="price">$8.49</td><td className="cal">Varies</td><td className="desc">Choose your own meats, veggies, sauce & cheese</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 7. DESSERTS */}
                <h2>🍪 7. Desserts Menu</h2>
                <div className="table-outer">
                    <table>
                        <thead>
                            <tr><th>Dessert Item</th><th>Price</th><th>Calories</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Chocolate Chip Cookie</td><td className="price">$7.29</td><td className="cal">190 cal/slice</td><td className="desc">Family-sized warm cookie, 8 slices</td></tr>
                            <tr><td>Double Chocolate Chip Brownie</td><td className="price">$7.29</td><td className="cal">240 cal/square</td><td className="desc">Rich, fudgy brownie — 9 squares</td></tr>
                            <tr><td>Cinnamon Pull Aparts</td><td className="price">$7.29</td><td className="cal">1,960 total</td><td className="desc">Sweet cinnamon dough rolls with icing</td></tr>
                            <tr><td>OREO® Cookie Papa Bites</td><td className="price">$6.99</td><td className="cal">100 cal/roll</td><td className="desc">8 rolls — OREO cookie baked into sweet bites</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* disclaimer */}
                <div className="price-disclaimer">
                    <strong>Price Disclaimer:</strong> All prices shown are average US prices for 2026. Actual prices may vary by location, city, state, and delivery vs. carryout. Prices are subject to change. Delivery fees ($3.99–$5.99) and taxes are not included. Always verify current prices at your local Papa Johns or at papajohns.com. | <strong>papajohns-menus.us is an independent fan guide — not affiliated with or endorsed by Papa John's International.</strong>
                </div>
            </div>
        </section>
    );
};

export default MenuGuideSection;
