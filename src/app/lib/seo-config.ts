import type { Metadata } from 'next';

const siteName = "Papa John's Pizza Menu";
const defaultUrl = 'https://papajohns-menus.us';

export function generatePageSEO(
    title: string,
    description: string,
    path: string,
    keywords?: string,
    image?: string
): Metadata {
    const url = `${defaultUrl}${path}`;
    const imageUrl = image || `${defaultUrl}/og-image.jpg`;

    return {
        title: `${title} | ${siteName}`,
        description,
        keywords: keywords || 'Papa Johns menu, Papa Johns prices, pizza delivery',
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName,
            images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    };
}

export function generateMenuItemSEO(
    itemName: string,
    price: string,
    slug: string,
    description: string
): Metadata {
    return generatePageSEO(
        `${itemName} — $${price} | Papa John's Menu`,
        `Check out the ${itemName} at Papa John's for $${price}. ${description}`,
        `/menus-prices/${slug}`,
        `Papa Johns ${itemName}, Papa Johns ${itemName} price, pizza menu, Papa Johns specials`
    );
}

export function generateArticleSEO(
    title: string,
    description: string,
    slug: string,
    author: string = 'Papa John\'s Menu Experts'
): Metadata {
    return {
        ...generatePageSEO(title, description, `/posts/${slug}`, 'Papa Johns news, pizza blog'),
        authors: [{ name: author }],
    };
}
