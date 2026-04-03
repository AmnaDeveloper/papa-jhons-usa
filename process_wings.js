const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImageAndData() {
    const publicDir = path.join(__dirname, 'public');
    const postsPath = path.join(__dirname, 'src', 'app', 'data', 'posts.json');
    const menuPricesPath = path.join(__dirname, 'src', 'app', '(site)', 'menus-prices', 'page.tsx');
    
    const oldImage = path.join(publicDir, 'wings.png');
    const newImageName = 'papa-johns-wings-flavors.webp';
    const newImagePath = path.join(publicDir, newImageName);
    
    // 1. Convert Image
    if (fs.existsSync(oldImage)) {
        await sharp(oldImage)
            .webp({ quality: 80 })
            .toFile(newImagePath);
        console.log("Converted wings.png to", newImageName);
        fs.unlinkSync(oldImage);
    } else {
        console.log("old image wings.png not found, maybe already converted?");
    }

    // 2. Update posts.json
    let data = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
    let postIndex = data.findIndex(p => p.slug === "papa-johns-wings");
    
    if (postIndex !== -1) {
        // Set new image properties
        data[postIndex].image = "/" + newImageName;
        data[postIndex].imageAlt = "Papa Johns Wings All Flavors and BBQ Nutrition";

        // Remove dashes and underscores
        let cleanText = (str) => {
            if(!str) return str;
            return str.replace(/—/g, ' ')
                      .replace(/-/g, ' ')
                      .replace(/_/g, ' ');
        };

        data[postIndex].title = cleanText(data[postIndex].title);
        data[postIndex].excerpt = cleanText(data[postIndex].excerpt);

        // For content, be careful not to break HTML tags and hrefs
        // Usually, these dashes are just hanging in the text nodes, but let's do a cautious replace.
        // It's safer to only replace em-dash "—" which doesn't affect HTML,
        // and standalone hyphens " - " which are clearly text.
        let content = data[postIndex].content;
        content = content.replace(/—/g, ' ').replace(/ - /g, ' ').replace(/_/g, '');

        // Add external link randomly in the text
        if (!content.includes("https://en.wikipedia.org/wiki/Buffalo_wing")) {
            content = content.replace(
                "Buffalo is the definitive Papa Johns wing flavor", 
                "Buffalo is the definitive Papa Johns wing flavor (inspired by authentic <a href=\"https://en.wikipedia.org/wiki/Buffalo_wing\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#cc0000] underline\">Buffalo wing tradition</a>)"
            );
        }

        // We already have internal links like /posts/classic-pizzas, /coupons, /store-locator.
        // Let's add one more internal link just in case
        if (!content.includes("/menus-prices")) {
            content += `<p>View the complete menu catalog at <a href="/menus-prices" class="text-[#cc0000] underline font-bold">Papa Johns Menu with Prices</a>.</p>`;
        }

        data[postIndex].content = content;
        fs.writeFileSync(postsPath, JSON.stringify(data, null, 4));
        console.log("Updated posts.json successfully.");
    }

    // 3. Update the menus-prices/page.tsx hardcoded image reference
    let menuPricesContent = fs.readFileSync(menuPricesPath, 'utf8');
    menuPricesContent = menuPricesContent.replace(/"\/honey-chipotle-wings\.jpg"/g, `"/` + newImageName + `"`);
    fs.writeFileSync(menuPricesPath, menuPricesContent);
    console.log("Updated menus-prices/page.tsx image reference.");
}

processImageAndData().catch(console.error);
