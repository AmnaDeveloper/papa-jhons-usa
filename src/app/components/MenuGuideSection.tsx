import React from 'react';

const MenuGuideSection = () => {
    return (
        <section className="py-20 bg-[#fcfaf8] w-full overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#cc0000] text-white font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-full mb-4 shadow-lg">
                        Ultimate Price Guide
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4" style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}>
                        Papa John's <span className="text-[#cc0000]">Complete Menu</span>
                    </h2>
                    <p className="text-gray-500 font-bold max-w-2xl mx-auto flex items-center justify-center gap-3">
                        <span>Last Updated: April 2026</span>
                        <span className="w-1.5 h-1.5 bg-[#CCEE18] rounded-full"></span>
                        <span>All Prices in USD</span>
                    </p>
                </div>

                {/* 1. PIZZAS */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#cc0000] rounded-2xl flex items-center justify-center text-2xl shadow-lg">🍕</div>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                            Pizza Menu <span className="text-gray-400">— All Sizes & Prices</span>
                        </h2>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-6 md:p-10 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCEE18] opacity-[0.05] rounded-full -mr-32 -mt-32"></div>

                        <div className="bg-[#fff8e1] border-l-4 border-[#ffe082] p-6 rounded-2xl mb-10 text-[#555] text-sm font-medium leading-relaxed">
                            <span className="font-black text-[#1A3D17] uppercase tracking-wider block mb-2">💡 Price Notes:</span>
                            Prices shown are for Original Crust. Epic Stuffed Crust adds +$3.00 | Garlic Stuffed Crust adds +$3.50 | Thin Crust & NY Style: same price as Original Crust | Gluten-Free Crust: add +$2.00
                        </div>

                        {/* Classic Pizzas */}
                        <div className="mb-12">
                            <h3 className="text-xl font-black text-[#cc0000] uppercase mb-6 flex items-center gap-2">
                                <span className="w-6 h-1 bg-[#cc0000] rounded-full"></span>
                                Classic Pizzas
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b-2 border-gray-100">
                                            <th className="py-4 px-2 font-black uppercase text-[11px] text-gray-400 tracking-widest">Pizza Name</th>
                                            <th className="py-4 px-2 font-black uppercase text-[11px] text-gray-400 tracking-widest">S (10")</th>
                                            <th className="py-4 px-2 font-black uppercase text-[11px] text-gray-400 tracking-widest">M (12")</th>
                                            <th className="py-4 px-2 font-black uppercase text-[11px] text-gray-400 tracking-widest">L (14")</th>
                                            <th className="py-4 px-2 font-black uppercase text-[11px] text-gray-400 tracking-widest">XL (16")</th>
                                            <th className="py-4 px-2 font-black uppercase text-[11px] text-gray-400 tracking-widest">Calories</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {[
                                            { name: "Cheese Pizza", s: "$10.99", m: "$12.99", l: "$14.99", xl: "$17.99", cal: "260 cal" },
                                            { name: "Pepperoni Pizza", s: "$10.99", m: "$12.99", l: "$14.99", xl: "$17.99", cal: "300 cal" },
                                            { name: "Sausage Pizza", s: "$10.99", m: "$12.99", l: "$14.99", xl: "$17.99", cal: "310 cal" },
                                            { name: "Create Your Own", s: "$10.99+", m: "$12.99+", l: "$14.99+", xl: "$17.99+", cal: "Varies" },
                                        ].map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-5 px-2 font-bold text-[#1A3D17]">{item.name}</td>
                                                <td className="py-5 px-2 font-black text-[#cc0000]">{item.s}</td>
                                                <td className="py-5 px-2 font-black text-[#cc0000]">{item.m}</td>
                                                <td className="py-5 px-2 font-black text-[#cc0000]">{item.l}</td>
                                                <td className="py-5 px-2 font-black text-[#cc0000]">{item.xl}</td>
                                                <td className="py-5 px-2 text-gray-500 font-medium text-xs">{item.cal}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Specialty Pizzas */}
                        <div className="mb-12">
                            <h3 className="text-xl font-black text-[#cc0000] uppercase mb-6 flex items-center gap-2">
                                <span className="w-6 h-1 bg-[#cc0000] rounded-full"></span>
                                Specialty Pizzas (Super Loaded)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: "The Works Pizza", s: "$13.99", l: "$17.99", desc: "Pepperoni, sausage, onions, green peppers, mushrooms, black olives" },
                                    { name: "The Meats Pizza", s: "$13.99", l: "$17.99", desc: "Pepperoni, sausage, Canadian bacon, beef — four premium meats" },
                                    { name: "Ultimate Pepperoni", s: "$13.99", l: "$17.99", desc: "Double layer of pepperoni — classic & robustly flavored" },
                                    { name: "BBQ Chicken Bacon", s: "$13.99", l: "$17.99", desc: "Grilled chicken, bacon, BBQ sauce base, mozzarella" },
                                    { name: "Fiery Buffalo Chicken", s: "$13.99", l: "$17.99", desc: "Buffalo sauce base, grilled chicken, banana peppers, mozzarella" },
                                    { name: "Philly Cheesesteak", s: "$13.99", l: "$17.99", desc: "Steak strips, green peppers, onions, creamy cheese sauce" },
                                    { name: "Super Hawaiian", s: "$13.99", l: "$17.99", desc: "Ham, pineapple, mozzarella — tropical sweet & savory combo" },
                                    { name: "Shaq-a-Roni", s: "$13.99", l: "$17.99", desc: "Oversized XL slices, extra cheese, double pepperoni" },
                                    { name: "Spicy Italian Pizza", s: "$13.99", l: "$17.99", desc: "Spicy Italian sausage, pepperoni, crushed red chili" },
                                    { name: "Hawaiian BBQ Chicken", s: "$13.99", l: "$17.99", desc: "Grilled chicken, pineapple, smoky-sweet BBQ sauce" },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-[#fcfaf8] p-5 rounded-3xl border border-gray-100 hover:border-[#CCEE18] transition-all group">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-black text-[#1A3D17] uppercase text-sm group-hover:text-[#cc0000] transition-colors">{item.name}</h4>
                                            <div className="flex gap-2">
                                                <span className="bg-white px-2 py-1 rounded-lg text-[10px] font-black text-[#cc0000] shadow-sm">S {item.s}</span>
                                                <span className="bg-[#cc0000] px-2 py-1 rounded-lg text-[10px] font-black text-white shadow-sm">L {item.l}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-[11px] leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stuffed Crust Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                           <div className="lg:col-span-2">
                                <h3 className="text-xl font-black text-[#cc0000] uppercase mb-6 flex items-center gap-2">
                                    <span className="w-6 h-1 bg-[#cc0000] rounded-full"></span>
                                    Epic Stuffed Crust
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Epic Stuffed Crust Pepperoni", l: "$16.99", xl: "$19.99" },
                                        { name: "Epic Stuffed Crust Cheese", l: "$16.99", xl: "$19.99" },
                                        { name: "Create Your Own Stuffed Crust", l: "$16.99+", xl: "$19.99+" },
                                        { name: "Garlic Epic Stuffed Crust", l: "$17.49+", xl: "$20.49+" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 shadow-sm">
                                            <span className="font-bold text-[#1A3D17] text-sm">{item.name}</span>
                                            <div className="flex gap-4">
                                                <span className="text-xs font-black text-[#cc0000]">Large: {item.l}</span>
                                                <span className="text-xs font-black text-[#cc0000]">XL: {item.xl}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                           </div>
                           <div className="bg-[#1A3D17] rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3D17] to-transparent opacity-50"></div>
                                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCEE18] text-[#1A3D17] px-4 py-1.5 rounded-full mb-4">Crust Upgrade</span>
                                <h4 className="relative z-10 text-2xl font-black mb-4 uppercase leading-tight">Gluten-Free <br/><span className="text-[#CCEE18]">Ancient Grains</span></h4>
                                <p className="relative z-10 text-[11px] text-gray-300 font-medium mb-6">Available in Medium size only. Not recommended for Celiac Disease — prepared in shared kitchen.</p>
                                <span className="relative z-10 text-2xl font-black text-[#CCEE18]">$14.99+</span>
                           </div>
                        </div>
                    </div>
                </div>

                {/* 2. PAPADIAS & 3. WINGS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                    {/* Papadias */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#1A3D17] rounded-xl flex items-center justify-center text-xl shadow-lg">🥙</div>
                            <h2 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                Papadias Menu
                            </h2>
                        </div>
                        <div className="bg-white rounded-[2rem] shadow-lg p-6 space-y-4">
                            {[
                                { name: "Italian Papadia", price: "$8.99", cal: "800 cal" },
                                { name: "Philly Cheesesteak", price: "$8.99", cal: "800 cal" },
                                { name: "BBQ Chicken & Bacon", price: "$8.99", cal: "830 cal" },
                                { name: "Grilled Buffalo Chicken", price: "$8.99", cal: "910 cal" },
                                { name: "Create Your Own Papadia", price: "$8.99", cal: "800 cal" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between group cursor-default">
                                    <div>
                                        <h4 className="font-bold text-[#1A3D17] group-hover:text-[#cc0000] transition-colors">{item.name}</h4>
                                        <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{item.cal}</span>
                                    </div>
                                    <span className="font-black text-[#cc0000] text-lg">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wings */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#cc0000] rounded-xl flex items-center justify-center text-xl shadow-lg">🍗</div>
                            <h2 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tight" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                Wings Menu
                            </h2>
                        </div>
                        <div className="bg-white rounded-[2rem] shadow-lg p-6 overflow-hidden">
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">8 Pieces — Bone-in or Boneless</h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Traditional Bone-In", price: "$10.99", desc: "Oven-roasted to perfection" },
                                    { name: "Crispy Boneless", price: "$8.49", desc: "All-white meat breaded" },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-[#fcfaf8] p-4 rounded-2xl flex items-center justify-between border-2 border-transparent hover:border-[#CCEE18] transition-all">
                                        <div>
                                            <h4 className="font-black text-[#1A3D17] uppercase text-xs">{item.name}</h4>
                                            <p className="text-[10px] text-gray-400 font-medium">{item.desc}</p>
                                        </div>
                                        <span className="font-black text-[#cc0000] text-lg">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                                {["Buffalo", "BBQ", "Honey Chipotle", "Garlic Parm"].map((flavor) => (
                                    <span key={flavor} className="text-[9px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full">{flavor}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4, 5, 6 — Sides, Bites, Bowls */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sides */}
                    <div className="bg-[#1A3D17] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.05] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                        <h2 className="text-3xl font-black uppercase mb-6 italic" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>Sides <br/><span className="text-[#CCEE18]">Menu</span></h2>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex justify-between border-b border-white/10 pb-2"><span>10 Breadsticks</span> <span className="font-black text-[#CCEE18]">$7.29</span></li>
                            <li className="flex justify-between border-b border-white/10 pb-2"><span>14 Cheesesticks</span> <span className="font-black text-[#CCEE18]">$7.99</span></li>
                            <li className="flex justify-between border-b border-white/10 pb-2"><span>8 Garlic Knots</span> <span className="font-black text-[#CCEE18]">$6.99</span></li>
                            <li className="flex justify-between border-b border-white/10 pb-2"><span>16 Jalapeño Bites</span> <span className="font-black text-[#CCEE18]">$9.49</span></li>
                        </ul>
                    </div>

                    {/* Papa Bowls */}
                    <div className="bg-[#cc0000] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-[0.05] rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
                        <h2 className="text-3xl font-black uppercase mb-6 italic" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>Papa <br/><span className="text-[#CCEE18]">Bowls</span></h2>
                        <p className="text-xs text-red-100 font-bold mb-6">Lowe Carb, No Crust. All the flavor, zero regret.</p>
                        <div className="space-y-2">
                             <div className="bg-white/10 p-4 rounded-2xl flex justify-between items-center">
                                <span className="text-xs font-black uppercase">Any Bowl</span>
                                <span className="text-xl font-black text-[#CCEE18]">$8.49</span>
                             </div>
                             <p className="text-[10px] text-red-200">Chicken Alfredo, Garden Veggie, or Create Your Own</p>
                        </div>
                    </div>

                    {/* Desserts */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 group">
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase mb-6 italic" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>Sweet <br/><span className="text-[#cc0000]">Treats</span></h2>
                        <div className="space-y-4">
                            {[
                                { name: "Double Choc Brownie", price: "$7.29" },
                                { name: "Choc Chip Cookie", price: "$7.29" },
                                { name: "Cinnamon Pull Aparts", price: "$7.29" },
                                { name: "Oreo Cookie Bites", price: "$6.99" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                                    <span className="text-sm font-bold text-gray-600">{item.name}</span>
                                    <span className="font-black text-[#cc0000]">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 8. DRINKS & 9. DIPPING SAUCES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Dipping Sauces */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-black text-[#1A3D17] uppercase mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#CCEE18] rounded-full flex items-center justify-center text-sm">🫙</span>
                            Dipping Sauces
                        </h3>
                        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 grid grid-cols-1 gap-2">
                            <div className="bg-[#1A3D17] text-[#CCEE18] p-4 rounded-2xl mb-2 flex justify-between items-center shadow-lg">
                                <span className="font-black uppercase text-[10px] tracking-widest">Special Garlic Sauce</span>
                                <span className="font-black text-white">FREE!</span>
                            </div>
                            {["Original Pizza", "Ranch", "Blue Cheese", "Cheese Sauce", "Spicy Garlic", "Honey Chipotle"].map((s) => (
                                <div key={s} className="flex justify-between items-center px-4 py-2 border-b border-gray-200 last:border-0 hover:bg-white rounded-lg transition-colors group">
                                    <span className="text-xs font-bold text-gray-500 group-hover:text-[#1A3D17]">{s}</span>
                                    <span className="text-xs font-black text-[#cc0000]">$0.59</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Drinks */}
                    <div className="lg:col-span-2">
                         <h3 className="text-xl font-black text-[#1A3D17] uppercase mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">🥤</span>
                            Refreshments
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { name: "Pepsi / Diet Pepsi", price: "$3.99" },
                                        { name: "Pepsi Zero Sugar", price: "$3.99" },
                                        { name: "Mountain Dew", price: "$3.99" },
                                        { name: "Starry / Zero", price: "$3.99 / $2.99" },
                                        { name: "Mug Root Beer", price: "$3.99" },
                                        { name: "Aquafina Water", price: "$2.99" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center justify-between">
                                            <span className="font-bold text-[#1A3D17] text-sm">{item.name}</span>
                                            <span className="font-black text-[#cc0000]">{item.price}</span>
                                        </div>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 11 & 12 — Deals & Party */}
                <div className="mt-20">
                    <div className="bg-gradient-to-r from-[#1A3D17] to-[#112a0f] rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                        
                        <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>Special Deals & <span className="text-[#CCEE18]">Promos</span></h2>
                        <p className="text-gray-300 font-medium mb-10 max-w-xl mx-auto">Check the official app for these deep discounts and party packages.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center">
                                <span className="text-[10px] font-black uppercase text-[#CCEE18] mb-2 tracking-[0.2em]">App Exclusive</span>
                                <h4 className="font-black text-xl mb-1 italic">Lrg 2-Topping</h4>
                                <span className="text-3xl font-black text-[#CCEE18]">$10.99</span>
                            </div>
                            <div className="bg-[#cc0000] p-6 rounded-3xl shadow-xl transform scale-105 flex flex-col items-center">
                                <span className="text-[10px] font-black uppercase text-white mb-2 tracking-[0.2em]">Hot Deal</span>
                                <h4 className="font-black text-xl mb-1 italic">Family Night</h4>
                                <span className="text-3xl font-black text-white">~$29.99</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col items-center">
                                <span className="text-[10px] font-black uppercase text-[#CCEE18] mb-2 tracking-[0.2em]">Bulk Order</span>
                                <h4 className="font-black text-xl mb-1 italic">Catering Pack</h4>
                                <span className="text-3xl font-black text-[#CCEE18]">$99.99+</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 text-center">
                     <div className="inline-block bg-gray-100 p-8 rounded-[2rem] border border-gray-200 max-w-4xl">
                        <p className="text-[11px] text-gray-500 font-medium leading-[1.8] text-justify">
                            <strong className="text-[#1A3D17] uppercase tracking-widest block mb-2 text-center text-xs">Price Disclaimer & Legal Note:</strong>
                            All prices shown are average US prices for 2026 and are based on current market trends. Actual prices may vary significantly by franchise location, city, and state. These figures do not include delivery fees (which vary from $3.99-$5.99), taxes, or service charges. Please verify current prices at your local Papa Johns Store or via the official papajohns.com website before ordering. <br/><br/>
                            <span className="text-[#cc0000] font-black">papajohns-menus.us is an independent fan resource and is NOT affiliated with, endorsed by, or sponsored by Papa John’s International. All trademarks are the property of their respective owners.</span>
                        </p>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default MenuGuideSection;
