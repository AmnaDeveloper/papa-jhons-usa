const baseUrl = 'https://papajohns-menus.us';

export const generateRestaurantSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": `${baseUrl}/#restaurant`,
        "name": "Papa John's Pizza",
        "image": `${baseUrl}/images/store-front.jpg`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Headquarters: 2002 Papa John's Blvd",
            "addressLocality": "Louisville",
            "addressRegion": "KY",
            "postalCode": "40299",
            "addressCountry": "US"
        },
        "servesCuisine": ["Pizza", "Italian-American", "Fast Food"],
        "priceRange": "$$",
        "url": baseUrl,
        "telephone": "+1800-PAPA-JOHNS",
        "sameAs": [
            "https://www.facebook.com/papajohns",
            "https://twitter.com/papajohns",
            "https://www.instagram.com/papajohns/"
        ]
    };
};

export const generateMenuSchema = (sections: Array<{ name: string; url: string; hasMenuItem: any[] }>) => {
    return {
        "@context": "https://schema.org",
        "@type": "Menu",
        "@id": `${baseUrl}/menus-prices/#menu`,
        "name": "Papa John's Full Menu",
        "url": `${baseUrl}/menus-prices`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/menus-prices`
        },
        "hasMenuSection": sections.map(section => ({
            "@type": "MenuSection",
            "name": section.name,
            "url": section.url,
            "hasMenuItem": section.hasMenuItem
        }))
    };
};

export const generateMenuItemSchema = (name: string, price: string, image: string, description: string, url: string) => {
    return {
        "@context": "https://schema.org",
        "@type": "MenuItem",
        "name": name,
        "description": description,
        "image": image,
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": "USD",
            "url": url,
            "availability": "https://schema.org/InStock"
        }
    };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
};

export const generateArticleSchema = (title: string, excerpt: string, image: string, date: string, author: string, url: string) => {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": excerpt,
        "image": image,
        "datePublished": date,
        "dateModified": date,
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Papa John's Pizza",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };
};
