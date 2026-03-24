export const ultimateSchema = () => {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://papajohns-menus.us/#website",
                "url": "https://papajohns-menus.us",
                "name": "Papa John's Pizza Menus & Prices",
                "description": "Complete guide to Papa John's menu with prices.",
                "publisher": {
                    "@id": "https://papajohns-menus.us/#organization"
                },
                "potentialAction": [
                    {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://papajohns-menus.us/?s={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                ],
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": "https://papajohns-menus.us/#organization",
                "name": "Papa John's Menus",
                "url": "https://papajohns-menus.us",
                "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-US",
                    "@id": "https://papajohns-menus.us/#logo",
                    "url": "https://papajohns-menus.us/logo.png",
                    "contentUrl": "https://papajohns-menus.us/logo.png",
                    "width": 512,
                    "height": 512,
                    "caption": "Papa John's Menus"
                },
                "image": {
                    "@id": "https://papajohns-menus.us/#logo"
                }
            },
            {
                "@type": "Restaurant",
                "@id": "https://papajohns-menus.us/#restaurant",
                "name": "Papa John's Pizza",
                "image": "https://papajohns-menus.us/store-front.jpg",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2002 Papa John's Blvd",
                    "addressLocality": "Louisville",
                    "addressRegion": "KY",
                    "postalCode": "40299",
                    "addressCountry": "US"
                },
                "servesCuisine": ["Pizza", "Italian-American", "Fast Food"],
                "priceRange": "$$"
            }
        ]
    };
};

export const menuItemSchema = (
    name: string,
    price: string,
    image: string,
    description: string
) => {
    return {
        "@context": "https://schema.org",
        "@type": "MenuItem",
        "name": name,
        "description": description,
        "image": image,
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": "USD"
        }
    };
};
