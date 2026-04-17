import React from 'react';

const MenuGuideSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[960px] mx-auto px-4 menu-guide-container">
        <style dangerouslySetInnerHTML={{ __html: `
          .menu-guide-container { font-family: Arial, sans-serif; font-size: 15px; color: #222; }
          .menu-guide-container h1 { font-size: 28px; color: #d32f2f; margin-bottom: 6px; font-weight: bold; }
          .menu-guide-container .subtitle { font-size: 14px; color: #666; margin-bottom: 30px; border-bottom: 2px solid #d32f2f; padding-bottom: 12px; }
          .menu-guide-container h2 { font-size: 20px; color: #fff; background: #d32f2f; padding: 10px 16px; margin: 30px 0 0; border-radius: 6px 6px 0 0; font-weight: bold; }
          .menu-guide-container h3 { font-size: 15px; color: #d32f2f; background: #fff3f3; padding: 8px 14px; margin: 0; border-left: 4px solid #d32f2f; font-weight: bold; }
          .menu-guide-container table { width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px; }
          .menu-guide-container thead th { background: #333; color: #fff; padding: 9px 12px; text-align: left; font-size: 13px; }
          .menu-guide-container tbody tr:nth-child(even) { background: #f9f9f9; }
          .menu-guide-container tbody tr:hover { background: #fff3f3; }
          .menu-guide-container td { padding: 9px 12px; border-bottom: 1px solid #eee; vertical-align: top; }
          .menu-guide-container td.price { font-weight: bold; color: #d32f2f; white-space: nowrap; }
          .menu-guide-container td.cal { color: #888; font-size: 13px; white-space: nowrap; }
          .menu-guide-container td.desc { color: #555; font-size: 13px; }
          .menu-guide-container .section-wrap { border: 1px solid #ddd; border-radius: 0 0 6px 6px; margin-bottom: 10px; overflow: hidden; }
          .menu-guide-container .note { background: #fff8e1; border: 1px solid #ffe082; border-radius: 4px; padding: 8px 14px; font-size: 13px; color: #555; margin: 8px 0; }
          .menu-guide-container .menu-group { margin-bottom: 4px; }
          @media print {
            .menu-guide-container h2 { background: #d32f2f !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .menu-guide-container thead th { background: #333 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        `}} />

        <h1>Papa Johns Complete Menu with Prices 2026</h1>
        <p className="subtitle">Last Updated: April 2026 | All prices in USD | Prices may vary slightly by location | papajohns-menus.us</p>

        {/* ═══════════════════════════════════════════ */}
        {/* 1. PIZZAS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🍕 1. Pizza Menu — All Sizes & Prices</h2>
        <div className="section-wrap">
          <p className="note">Prices shown are for Original Crust. Epic Stuffed Crust adds +$3.00 | Garlic Stuffed Crust adds +$3.50 | Thin Crust & NY Style: same price as Original Crust | Gluten-Free Crust: add +$2.00</p>

          <div className="menu-group">
            <h3>Classic Pizzas</h3>
            <table>
              <thead>
                <tr><th>Pizza Name</th><th>Small (10")</th><th>Medium (12")</th><th>Large (14")</th><th>XL (16")</th><th>Calories (per slice, Large)</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Cheese Pizza</td><td className="price">$10.99</td><td className="price">$12.99</td><td className="price">$14.99</td><td className="price">$17.99</td><td className="cal">260 cal</td><td className="desc">Classic tomato sauce & mozzarella cheese on fresh-baked dough</td></tr>
                <tr><td>Pepperoni Pizza</td><td className="price">$10.99</td><td className="price">$12.99</td><td className="price">$14.99</td><td className="price">$17.99</td><td className="cal">300 cal</td><td className="desc">Classic pepperoni layered on tomato sauce & mozzarella</td></tr>
                <tr><td>Sausage Pizza</td><td className="price">$10.99</td><td className="price">$12.99</td><td className="price">$14.99</td><td className="price">$17.99</td><td className="cal">310 cal</td><td className="desc">Italian sausage crumbles on tomato sauce & mozzarella</td></tr>
                <tr><td>Create Your Own Pizza</td><td className="price">$10.99+</td><td className="price">$12.99+</td><td className="price">$14.99+</td><td className="price">$17.99+</td><td className="cal">Varies</td><td className="desc">Choose your own crust, sauce, cheese & toppings (up to 5 free toppings on Large)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="menu-group">
            <h3>Handcrafted Specialty Pizzas (Super Loaded)</h3>
            <table>
              <thead>
                <tr><th>Pizza Name</th><th>Small (10")</th><th>Medium (12")</th><th>Large (14")</th><th>XL (16")</th><th>Calories (per slice, Large)</th><th>Key Toppings</th></tr>
              </thead>
              <tbody>
                <tr><td>The Works Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">340 cal</td><td className="desc">Pepperoni, sausage, onions, green peppers, mushrooms, black olives</td></tr>
                <tr><td>The Meats Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">390 cal</td><td className="desc">Pepperoni, sausage, Canadian bacon, beef — four premium meats</td></tr>
                <tr><td>Ultimate Pepperoni Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">360 cal</td><td className="desc">Double layer of pepperoni — classic & robustly flavored</td></tr>
                <tr><td>BBQ Chicken Bacon Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">310 cal</td><td className="desc">Grilled chicken, bacon, BBQ sauce base, mozzarella</td></tr>
                <tr><td>Fiery Buffalo Chicken Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">330 cal</td><td className="desc">Buffalo sauce base, grilled chicken, banana peppers, mozzarella</td></tr>
                <tr><td>Philly Cheesesteak Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">360 cal</td><td className="desc">Steak strips, green peppers, onions, creamy cheese sauce</td></tr>
                <tr><td>Super Hawaiian Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">260 cal</td><td className="desc">Ham, pineapple, mozzarella — tropical sweet & savory combo</td></tr>
                <tr><td>Shaq-a-Roni Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">390 cal</td><td className="desc">Oversized XL slices, extra cheese, double pepperoni</td></tr>
                <tr><td>Spicy Italian Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">350 cal</td><td className="desc">Spicy Italian sausage, pepperoni, crushed red chili</td></tr>
                <tr><td>Hawaiian BBQ Chicken Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">360 cal</td><td className="desc">Grilled chicken, pineapple, smoky-sweet BBQ sauce</td></tr>
              </tbody>
            </table>
          </div>

          <div className="menu-group">
            <h3>Handcrafted Meatless / Vegetarian Specialty Pizzas</h3>
            <table>
              <thead>
                <tr><th>Pizza Name</th><th>Small (10")</th><th>Medium (12")</th><th>Large (14")</th><th>XL (16")</th><th>Calories (per slice, Large)</th><th>Key Toppings</th></tr>
              </thead>
              <tbody>
                <tr><td>Tuscan Six Cheese Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">320 cal</td><td className="desc">Mozzarella, provolone, cheddar, Asiago, Romano, Fontina — six-cheese blend</td></tr>
                <tr><td>Garden Fresh Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">280 cal</td><td className="desc">Onions, mushrooms, green peppers, black olives, tomatoes</td></tr>
                <tr><td>Fresh Spinach & Tomato Alfredo Pizza</td><td className="price">$13.99</td><td className="price">$15.99</td><td className="price">$17.99</td><td className="price">$20.99</td><td className="cal">290 cal</td><td className="desc">Creamy Alfredo sauce base, fresh spinach, tomatoes, mozzarella</td></tr>
              </tbody>
            </table>
          </div>

          <div className="menu-group">
            <h3>Epic Stuffed Crust Pizzas</h3>
            <table>
              <thead>
                <tr><th>Pizza Name</th><th>Large (14")</th><th>XL (16")</th><th>Calories (per slice)</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Epic Stuffed Crust Pepperoni</td><td className="price">$16.99</td><td className="price">$19.99</td><td className="cal">330 cal</td><td className="desc">Pepperoni on cheese-stuffed crust pizza</td></tr>
                <tr><td>Epic Stuffed Crust Cheese</td><td className="price">$16.99</td><td className="price">$19.99</td><td className="cal">330 cal</td><td className="desc">Classic cheese pizza with mozzarella-stuffed crust edge</td></tr>
                <tr><td>Epic Stuffed Crust Create Your Own</td><td className="price">$16.99+</td><td className="price">$19.99+</td><td className="cal">Varies</td><td className="desc">Build your own pizza on cheese-stuffed crust</td></tr>
                <tr><td>Garlic Epic Stuffed Crust (any pizza)</td><td className="price">$17.49+</td><td className="price">$20.49+</td><td className="cal">370 cal</td><td className="desc">Garlic herb butter + cheese baked into the crust edge</td></tr>
              </tbody>
            </table>
          </div>

          <div className="menu-group">
            <h3>Gluten-Free Crust Pizzas (Ancient Grains)</h3>
            <p className="note">Available in Medium size only. Not recommended for Celiac Disease — prepared in shared kitchen. Add $2.00 to regular price.</p>
            <table>
              <thead>
                <tr><th>Pizza Name</th><th>Medium (12")</th><th>Calories (per slice)</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Create Your Own Gluten-Free Crust</td><td className="price">$14.99</td><td className="cal">150 cal</td><td className="desc">Sorghum, teff, amaranth & quinoa crust — 6 slices</td></tr>
                <tr><td>Cheese Pizza (GF Crust)</td><td className="price">$14.99</td><td className="cal">150 cal</td><td className="desc">Classic cheese on gluten-free ancient grains crust</td></tr>
                <tr><td>Pepperoni Pizza (GF Crust)</td><td className="price">$14.99</td><td className="cal">190 cal</td><td className="desc">Pepperoni & cheese on gluten-free crust</td></tr>
              </tbody>
            </table>
          </div>

          <div className="menu-group">
            <h3>Pizza Crust Options — Price Add-ons</h3>
            <table>
              <thead>
                <tr><th>Crust Type</th><th>Extra Cost</th><th>Slices</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Original Hand-Tossed Crust</td><td className="price">Included</td><td>8 slices</td><td className="desc">Classic soft & chewy signature crust — never frozen</td></tr>
                <tr><td>Thin Crust</td><td className="price">Included</td><td>8 slices</td><td className="desc">Crispy, light crust — lets toppings take center stage</td></tr>
                <tr><td>New York Style Crust</td><td className="price">Included</td><td>6 slices</td><td className="desc">Oversized, foldable slices — authentic NY pizzeria style</td></tr>
                <tr><td>Epic Stuffed Crust</td><td className="price">+$3.00</td><td>8 slices</td><td className="desc">Real mozzarella cheese baked into the crust edge</td></tr>
                <tr><td>Garlic Epic Stuffed Crust</td><td className="price">+$3.50</td><td>8 slices</td><td className="desc">Garlic herb butter + cheese in the crust</td></tr>
                <tr><td>Gluten-Free Ancient Grains Crust</td><td className="price">+$2.00</td><td>6 slices</td><td className="desc">Sorghum, teff, amaranth & quinoa blend</td></tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 2. PAPADIAS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🥙 2. Papadias Menu — Flatbread Sandwiches</h2>
        <div className="section-wrap">
          <p className="note">Papadias are Papa Johns' signature folded flatbread sandwiches — part pizza, part sandwich, oven-baked to perfection. Each comes with a dipping sauce.</p>
          <table>
            <thead>
              <tr><th>Papadia Name</th><th>Price</th><th>Calories</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Italian Papadia</td><td className="price">$8.99</td><td className="cal">800 cal</td><td className="desc">Salami, banana peppers, onions, mozzarella — served with pizza sauce</td></tr>
              <tr><td>Philly Cheesesteak Papadia</td><td className="price">$8.99</td><td className="cal">800 cal</td><td className="desc">Steak, onions, green peppers, three-cheese blend — served with cheese sauce</td></tr>
              <tr><td>BBQ Chicken & Bacon Papadia</td><td className="price">$8.99</td><td className="cal">830 cal</td><td className="desc">Grilled chicken, bacon, BBQ sauce, mozzarella</td></tr>
              <tr><td>Grilled Buffalo Chicken Papadia</td><td className="price">$8.99</td><td className="cal">910 cal</td><td className="desc">Grilled chicken, buffalo sauce, mozzarella — served with ranch</td></tr>
              <tr><td>Create Your Own Papadia</td><td className="price">$8.99</td><td className="cal">800 cal</td><td className="desc">Choose your own fillings, cheese & sauce</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 3. WINGS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🍗 3. Wings Menu — Bone-In & Boneless</h2>
        <div className="section-wrap">
          <p className="note">All Papa Johns wings are oven-baked, never fried. Each order includes your choice of dipping sauce.</p>

          <div className="menu-group">
            <h3>Boneless Wings (8 pieces)</h3>
            <table>
              <thead>
                <tr><th>Flavor</th><th>Price (8 pc)</th><th>Calories</th><th>Sauce Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Buffalo Boneless Wings</td><td className="price">$8.49</td><td className="cal">630 cal</td><td className="desc">Classic tangy buffalo hot sauce</td></tr>
                <tr><td>BBQ Boneless Wings</td><td className="price">$8.49</td><td className="cal">640 cal</td><td className="desc">Bold smoky BBQ glaze</td></tr>
                <tr><td>Honey Chipotle Boneless Wings</td><td className="price">$8.49</td><td className="cal">630 cal</td><td className="desc">Sweet honey + smoky chipotle</td></tr>
                <tr><td>Garlic Parmesan Boneless Wings</td><td className="price">$8.49</td><td className="cal">930 cal</td><td className="desc">Creamy garlic parmesan butter sauce</td></tr>
                <tr><td>Unsauced Boneless Wings</td><td className="price">$8.49</td><td className="cal">590 cal</td><td className="desc">Plain, crispy — dip in your choice of sauce</td></tr>
              </tbody>
            </table>
          </div>

          <div className="menu-group">
            <h3>Traditional Bone-In Wings (8 pieces)</h3>
            <table>
              <thead>
                <tr><th>Flavor</th><th>Price (8 pc)</th><th>Calories</th><th>Sauce Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Buffalo Wings (Bone-In)</td><td className="price">$10.99</td><td className="cal">840 cal</td><td className="desc">Classic tangy buffalo hot sauce</td></tr>
                <tr><td>BBQ Wings (Bone-In)</td><td className="price">$10.99</td><td className="cal">880 cal</td><td className="desc">Bold smoky BBQ glaze</td></tr>
                <tr><td>Honey Chipotle Wings (Bone-In)</td><td className="price">$10.99</td><td className="cal">900 cal</td><td className="desc">Sweet honey + smoky chipotle pepper</td></tr>
                <tr><td>Garlic Parmesan Wings (Bone-In)</td><td className="price">$10.99</td><td className="cal">1,040 cal</td><td className="desc">Rich, creamy garlic parmesan sauce</td></tr>
                <tr><td>Unsauced Roasted Wings (Bone-In)</td><td className="price">$10.99</td><td className="cal">810 cal</td><td className="desc">Oven-roasted, plain — customize with any dipping sauce</td></tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 4. PAPA BITES */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🧆 4. Papa Bites Menu</h2>
        <div className="section-wrap">
          <p className="note">Bite-sized rolls baked fresh — available in savory & sweet varieties. Each order = 8 rolls.</p>
          <table>
            <thead>
              <tr><th>Papa Bites Flavor</th><th>Price</th><th>Calories (per roll)</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Jalapeño Papa Bites</td><td className="price">$6.99</td><td className="cal">80 cal/roll</td><td className="desc">Jalapeños, creamy Alfredo sauce & cheese in original dough — served with ranch</td></tr>
              <tr><td>Chicken Parmesan Papa Bites</td><td className="price">$6.99</td><td className="cal">110 cal/roll</td><td className="desc">Chicken & parmesan wrapped in original dough — served with pizza sauce</td></tr>
              <tr><td>OREO® Cookie Papa Bites</td><td className="price">$6.99</td><td className="cal">100 cal/roll</td><td className="desc">OREO cookie pieces baked in sweet dough — dessert bites</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 5. SIDES */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🥖 5. Sides Menu</h2>
        <div className="section-wrap">
          <table>
            <thead>
              <tr><th>Side Item</th><th>Price</th><th>Calories</th><th>Quantity / Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Original Breadsticks</td><td className="price">$7.29</td><td className="cal">150 cal/stick</td><td className="desc">10 sticks — classic oven-baked, served with pizza sauce</td></tr>
              <tr><td>Garlic Parmesan Breadsticks</td><td className="price">$7.99</td><td className="cal">170 cal/stick</td><td className="desc">10 sticks — garlic butter & parmesan, served with pizza sauce</td></tr>
              <tr><td>Cheesesticks</td><td className="price">$7.99</td><td className="cal">90 cal/stick</td><td className="desc">14 sticks — mozzarella cheese on original dough</td></tr>
              <tr><td>Bacon Cheesesticks</td><td className="price">$8.49</td><td className="cal">110 cal/stick</td><td className="desc">14 sticks — mozzarella + crispy bacon</td></tr>
              <tr><td>Jalapeño Cheesesticks</td><td className="price">$9.49</td><td className="cal">110 cal/stick</td><td className="desc">16 sticks — cheese + jalapeño on fresh dough</td></tr>
              <tr><td>Jalapeño Bacon Cheesesticks</td><td className="price">$9.49</td><td className="cal">130 cal/stick</td><td className="desc">16 sticks — cheese, bacon & jalapeño on fresh dough</td></tr>
              <tr><td>Tuscan 6-Cheese Cheesesticks</td><td className="price">$8.49</td><td className="cal">110 cal/stick</td><td className="desc">14 sticks — six-cheese blend on original dough</td></tr>
              <tr><td>Garlic Knots</td><td className="price">$6.99</td><td className="cal">110 cal/knot</td><td className="desc">8 knots — soft garlic-seasoned dough knots</td></tr>
              <tr><td>Pepperoni Rolls</td><td className="price">$6.99</td><td className="cal">Varies</td><td className="desc">Pepperoni wrapped in fresh-baked dough rolls</td></tr>
              <tr><td>Jalapeño Papa Bites (Sides)</td><td className="price">$6.99</td><td className="cal">80 cal/roll</td><td className="desc">8 rolls — jalapeño & cheese in original dough, served with ranch</td></tr>
              <tr><td>Chicken Parmesan Papa Bites (Sides)</td><td className="price">$6.99</td><td className="cal">110 cal/roll</td><td className="desc">8 rolls — chicken & parmesan in original dough</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 6. PAPA BOWLS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🥣 6. Papa Bowls Menu — Low Carb, No Crust</h2>
        <div className="section-wrap">
          <p className="note">Papa Bowls = all the pizza flavors, zero crust. Oven-baked, keto-friendly, high protein options.</p>
          <table>
            <thead>
              <tr><th>Papa Bowl</th><th>Price</th><th>Calories</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Chicken Alfredo Papa Bowl</td><td className="price">$8.49</td><td className="cal">Varies</td><td className="desc">Grilled chicken, Alfredo sauce, mozzarella, baked in a bowl</td></tr>
              <tr><td>Garden Veggie Papa Bowl</td><td className="price">$8.49</td><td className="cal">Varies</td><td className="desc">Mushrooms, peppers, onions, tomatoes, cheese — no crust</td></tr>
              <tr><td>Create Your Own Papa Bowl</td><td className="price">$8.49</td><td className="cal">Varies</td><td className="desc">Choose your own meats, veggies, sauce & cheese — fully customizable</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 7. DESSERTS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🍪 7. Desserts Menu</h2>
        <div className="section-wrap">
          <table>
            <thead>
              <tr><th>Dessert Item</th><th>Price</th><th>Calories</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Chocolate Chip Cookie</td><td className="price">$7.29</td><td className="cal">190 cal/slice</td><td className="desc">Family-sized warm cookie, 8 slices — loaded with chocolate chips</td></tr>
              <tr><td>Double Chocolate Chip Brownie</td><td className="price">$7.29</td><td className="cal">240 cal/square</td><td className="desc">Rich, fudgy brownie — 9 squares per order</td></tr>
              <tr><td>Cinnamon Pull Aparts</td><td className="price">$7.29</td><td className="cal">1,960 cal total</td><td className="desc">Sweet cinnamon dough rolls drizzled with cream cheese icing</td></tr>
              <tr><td>OREO® Cookie Papa Bites (Dessert)</td><td className="price">$6.99</td><td className="cal">100 cal/roll</td><td className="desc">8 rolls — OREO cookie baked into sweet dough bites</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 8. DRINKS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🥤 8. Drinks Menu</h2>
        <div className="section-wrap">
          <table>
            <thead>
              <tr><th>Drink</th><th>Price</th><th>Calories</th><th>Size / Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Pepsi</td><td className="price">$3.99</td><td className="cal">150 cal</td><td className="desc">20 oz bottle — classic cola</td></tr>
              <tr><td>Diet Pepsi</td><td className="price">$3.99</td><td className="cal">0 cal</td><td className="desc">20 oz bottle — zero sugar cola</td></tr>
              <tr><td>Pepsi Zero Sugar</td><td className="price">$3.99</td><td className="cal">0 cal</td><td className="desc">20 oz bottle — bold taste, zero calories</td></tr>
              <tr><td>Mountain Dew</td><td className="price">$3.99</td><td className="cal">170 cal</td><td className="desc">20 oz bottle — citrus soda</td></tr>
              <tr><td>Starry</td><td className="price">$3.99</td><td className="cal">150 cal</td><td className="desc">20 oz bottle — lemon-lime soda</td></tr>
              <tr><td>Starry Zero</td><td className="price">$2.99</td><td className="cal">10 cal</td><td className="desc">20 oz bottle — zero-sugar lemon-lime</td></tr>
              <tr><td>Crush Orange</td><td className="price">$3.99</td><td className="cal">195 cal</td><td className="desc">20 oz bottle — orange soda</td></tr>
              <tr><td>Mug Root Beer</td><td className="price">$3.99</td><td className="cal">160 cal</td><td className="desc">20 oz bottle — classic root beer</td></tr>
              <tr><td>Schweppes Ginger Ale</td><td className="price">$2.99</td><td className="cal">200 cal</td><td className="desc">20 oz bottle — light ginger ale</td></tr>
              <tr><td>Aquafina Water</td><td className="price">$2.99</td><td className="cal">0 cal</td><td className="desc">Pure bottled water</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 9. DIPPING SAUCES */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🫙 9. Dipping Sauces Menu</h2>
        <div className="section-wrap">
          <p className="note">Every Papa Johns order comes with one FREE Special Garlic Sauce. Additional sauces available separately.</p>
          <table>
            <thead>
              <tr><th>Sauce Name</th><th>Price</th><th>Calories</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Special Garlic Sauce ⭐ (FREE with every order)</td><td className="price">$0.00 / $0.59</td><td className="cal">150 cal</td><td className="desc">Papa Johns' signature buttery garlic dipping sauce</td></tr>
              <tr><td>Original Pizza Sauce</td><td className="price">$0.59</td><td className="cal">20 cal</td><td className="desc">Classic tomato pizza sauce for dipping</td></tr>
              <tr><td>Ranch Sauce</td><td className="price">$0.59</td><td className="cal">150 cal</td><td className="desc">Cool, creamy ranch dressing</td></tr>
              <tr><td>Blue Cheese Sauce</td><td className="price">$0.59</td><td className="cal">160 cal</td><td className="desc">Tangy, creamy blue cheese dipping sauce</td></tr>
              <tr><td>Cheese Sauce</td><td className="price">$0.59</td><td className="cal">40 cal</td><td className="desc">Warm, creamy cheddar cheese sauce</td></tr>
              <tr><td>Spicy Garlic Sauce</td><td className="price">$0.59</td><td className="cal">150 cal</td><td className="desc">Signature garlic sauce with a fiery kick</td></tr>
              <tr><td>Honey Chipotle Sauce</td><td className="price">$0.59</td><td className="cal">150 cal</td><td className="desc">Sweet honey + smoky chipotle blend</td></tr>
              <tr><td>Garlic Parmesan Sauce</td><td className="price">$0.59</td><td className="cal">150 cal</td><td className="desc">Creamy garlic parmesan butter sauce</td></tr>
              <tr><td>Buffalo Spicy Sauce</td><td className="price">$0.59</td><td className="cal">150 cal</td><td className="desc">Tangy, bold buffalo hot sauce</td></tr>
              <tr><td>Cream Cheese Icing</td><td className="price">$0.59</td><td className="cal">150 cal</td><td className="desc">Sweet cream cheese drizzle — for desserts</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 10. EXTRAS / ADD-ONS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>➕ 10. Extras & Add-Ons Menu</h2>
        <div className="section-wrap">
          <table>
            <thead>
              <tr><th>Extra Item</th><th>Price</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Extra Cheese</td><td className="price">$1.50</td><td className="desc">Add extra mozzarella to any pizza</td></tr>
              <tr><td>Extra Sauce</td><td className="price">$0.59</td><td className="desc">Extra dipping sauce of your choice</td></tr>
              <tr><td>Seasoning Packet (Garlic & Herb)</td><td className="price">Free / $0.25</td><td className="desc">Garlic & herb seasoning shaker packet</td></tr>
              <tr><td>Crushed Red Pepper</td><td className="price">Free</td><td className="desc">Spice packet included on request</td></tr>
              <tr><td>Pepperoncini Peppers</td><td className="price">Free</td><td className="desc">Every pizza order includes a pepperoncini pepper</td></tr>
              <tr><td>Individual Toppings (per topping, Large pizza)</td><td className="price">$1.50–$2.00</td><td className="desc">Add pepperoni, sausage, chicken, veggies, extra cheese etc.</td></tr>
              <tr><td>Premium Toppings (anchovies, etc.)</td><td className="price">$2.00+</td><td className="desc">Specialty toppings available at select locations</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 11. COMBO DEALS / SPECIALS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>💰 11. Current Deals & Combo Offers 2026</h2>
        <div className="section-wrap">
          <p className="note">Deals available via Papa Johns app, website, and Papa Rewards program. Check papajohns.com for current promos.</p>
          <table>
            <thead>
              <tr><th>Deal Name</th><th>Price</th><th>What's Included</th></tr>
            </thead>
            <tbody>
              <tr><td>Large 2-Topping Pizza (App Deal)</td><td className="price">$10.99</td><td className="desc">Order via app — large 2-topping any crust</td></tr>
              <tr><td>40% Off All Menu-Priced Pizzas</td><td className="price">40% OFF</td><td className="desc">Select days via app — all regular menu pizzas</td></tr>
              <tr><td>Papa Rewards Free Pizza</td><td className="price">Free</td><td className="desc">Earn 1 point per $1 spent — redeem at 75 points for free large 1-topping pizza</td></tr>
              <tr><td>Large Pizza + Breadsticks Combo</td><td className="price">~$19.99</td><td className="desc">Large pizza + original breadsticks combo</td></tr>
              <tr><td>Family Night Bundle</td><td className="price">~$29.99</td><td className="desc">Two large pizzas + breadsticks + 2-liter drink (varies by location)</td></tr>
            </tbody>
          </table>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* 12. CATERING / PARTY ORDERS */}
        {/* ═══════════════════════════════════════════ */}

        <h2>🎉 12. Catering & Party Orders</h2>
        <div className="section-wrap">
          <table>
            <thead>
              <tr><th>Item</th><th>Price</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>Catering Tray — Pizza Slices</td><td className="price">$49.99–$129.99</td><td className="desc">Large trays of pizza slices for parties — call your local store</td></tr>
              <tr><td>Catering Tray — Wings</td><td className="price">$39.99–$89.99</td><td className="desc">Large party packs of wings (call for options)</td></tr>
              <tr><td>Catering Bundle</td><td className="price">$99.99+</td><td className="desc">Multiple pizzas + sides + drinks for events — pricing varies by location</td></tr>
            </tbody>
          </table>
          <p className="note">For large catering orders call your local Papa Johns or order via papajohns.com/catering</p>
        </div>


        {/* ═══════════════════════════════════════════ */}
        {/* PRICE DISCLAIMER */}
        {/* ═══════════════════════════════════════════ */}

        <div style={{ marginTop: '30px', padding: '14px 18px', background: '#f5f5f5', borderRadius: '6px', fontSize: '13px', color: '#666', borderLeft: '4px solid #d32f2f' }}>
          <strong>Price Disclaimer:</strong> All prices shown are average US prices for 2026. Actual prices may vary by location, city, state, and delivery vs. carryout. Prices are subject to change. Delivery fees ($3.99–$5.99) and taxes are not included. Always verify current prices at your local Papa Johns or at papajohns.com. | <strong>papajohns-menus.us is an independent fan guide — not affiliated with or endorsed by Papa John's International.</strong>
        </div>
      </div>
    </section>
  );
};

export default MenuGuideSection;
