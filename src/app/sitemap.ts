import { MetadataRoute } from 'next';
import postsData from './data/posts.json';
import locationsData from './data/locations.json';
import menuItemsData from './data/menu-items.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://papajohns-menus.us'; // Target USA SEO Domain

    // 1. Static Core Pages (Priority: 1.0 - 0.7)
    const staticPages = [
        { route: '', priority: 1.0, changeFreq: 'always' },
        { route: '/menus-prices', priority: 0.95, changeFreq: 'daily' },
        { route: '/coupons', priority: 0.95, changeFreq: 'daily' },
        { route: '/papa-johns-rewards', priority: 0.9, changeFreq: 'weekly' },
        { route: '/store-locator', priority: 0.9, changeFreq: 'weekly' },
        { route: '/contact', priority: 0.7, changeFreq: 'monthly' },
        { route: '/privacy-policy', priority: 0.5, changeFreq: 'monthly' },
        { route: '/terms-conditions', priority: 0.5, changeFreq: 'monthly' },
    ].map((item) => ({
        url: `${baseUrl}${item.route}`,
        lastModified: new Date(),
        changeFrequency: item.changeFreq as MetadataRoute.Sitemap[0]['changeFrequency'],
        priority: item.priority,
    }));

    // 2. Dynamic Blog Pages (Priority: 0.99 for Blog Content)
    const blogPages = postsData.map((post) => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'daily' as 'daily',
        priority: 0.99,
    }));

    // 3. Dynamic Location Pages (Priority: 0.95 for Local SEO)
    const locationPages = locationsData.map((location) => ({
        url: `${baseUrl}/locations/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.95,
    }));

    // 4. NEW: Dynamic Menu Item Pages (Priority: 0.90 for Product Depth)
    const menuItemPages = menuItemsData.map((item) => ({
        url: `${baseUrl}/menus-prices/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as 'daily',
        priority: 0.9,
    }));

    // 5. Dynamic Category Pages (Priority: 0.8)
    const uniqueBlogCategories = Array.from(new Set(postsData.map(post => post.category)));
    const uniqueMenuCategories = Array.from(new Set(menuItemsData.map(item => item.category)));

    const blogCategoryPages = uniqueBlogCategories.map((category) => ({
        url: `${baseUrl}/categories/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.8,
    }));

    const menuCategoryPages = uniqueMenuCategories.map((category) => ({
        url: `${baseUrl}/menus-prices/categories/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.8,
    }));

    return [
        ...staticPages, 
        ...blogPages, 
        ...locationPages, 
        ...menuItemPages, 
        ...blogCategoryPages, 
        ...menuCategoryPages
    ];
}
