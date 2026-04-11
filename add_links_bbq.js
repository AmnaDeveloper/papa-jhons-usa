const fs = require('fs');
const path = require('path');

const menuPath = path.join(__dirname, 'src/app/data/menu-items.json');
const data = JSON.parse(fs.readFileSync(menuPath, 'utf8'));

const articleIndex = data.findIndex(p => p.slug === 'the-works-pizza');

if (articleIndex !== -1) {
    let content = data[articleIndex].fullContent;
    
    // Add SEO Links safely (first occurrence only usually, or targeted)
    if (!content.includes('href="/"')) {
        content = content.replace(
            'Papa Johns BBQ Chicken Bacon Pizza',
            '<a href="/" class="text-[#cc0000] underline font-black">Papa Johns</a> BBQ Chicken Bacon Pizza'
        );
    }
    
    if (!content.includes('href="/menus-prices"')) {
        content = content.replace(
            'pizza menu',
            '<a href="/menus-prices" class="text-[#cc0000] underline font-black">pizza menu</a>'
        );
    }

    if (!content.includes('href="/posts/super-loaded"')) {
        content = content.replace(
            'specialty pizzas',
            '<a href="/posts/super-loaded" class="text-[#cc0000] underline font-black">specialty pizzas</a>'
        );
    }

    if (!content.includes('href="/classic-pizzas"')) {
        content = content.replace(
             'Original Crust',
             '<a href="/posts/classic-pizzas" class="text-[#cc0000] underline font-black">Original Crust</a>'
        );
    }

    if (!content.includes('href="/menus-prices/cheese-pizza"')) {
        content = content.replace(
             'real mozzarella cheese',
             '<a href="/menus-prices/cheese-pizza" class="text-[#cc0000] underline font-black">real mozzarella cheese</a>'
        );
    }
    
    // Update the content
    data[articleIndex].fullContent = content;
    
    fs.writeFileSync(menuPath, JSON.stringify(data, null, 4));
    console.log('Internal links added for SEO!');
}
