import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://papajohns-menus.us';
  const defaultLastMod = '2026-05-07T07:11:54.310Z';

  return [
    // ==================== CORE PAGES ====================
    {
      url: `${baseUrl}`,
      lastModified: defaultLastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/menus-prices`,
      lastModified: defaultLastMod,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: defaultLastMod,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coupons`,
      lastModified: defaultLastMod,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/papa-johns-rewards`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/store-locator`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hours`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/best-pizza-delivery-near-me`,
      lastModified: '2026-03-01T10:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-05-08T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ads.txt`,
      lastModified: '2026-05-08T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: defaultLastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },

    // ==================== BLOG / POSTS ====================
    {
      url: `${baseUrl}/posts/papa-johns-sandwiches`,
      lastModified: '2026-05-14T00:00:00.000Z',
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/posts/papa-johns-50-off-deal`,
      lastModified: '2026-05-02T00:00:00.000Z',
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/posts/papa-johns-free-delivery`,
      lastModified: '2026-05-02T00:00:00.000Z',
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/posts/papa-johns-small-pizza`,
      lastModified: '2026-04-29T10:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-papadias-discontinued-2026`,
      lastModified: '2026-04-22T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-vs-dominos`,
      lastModified: '2026-04-15T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-bbq-chicken-bacon-pizza`,
      lastModified: '2026-04-11T12:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-pan-pizza`,
      lastModified: '2026-04-06T18:26:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-wings`,
      lastModified: '2026-04-03T15:24:01.412Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-desserts`,
      lastModified: '2026-04-03T10:43:45.267Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-menu-prices-guide`,
      lastModified: '2026-04-14T10:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/new-papadias-flavors-2026`,
      lastModified: '2026-03-10T14:30:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/classic-pizzas`,
      lastModified: '2026-03-31T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/super-loaded`,
      lastModified: '2026-03-31T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/sides`,
      lastModified: '2026-03-31T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-nutrition-guide`,
      lastModified: '2026-03-30T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-garlic-knots`,
      lastModified: '2026-04-12T12:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-order`,
      lastModified: '2026-04-16T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-stuffed-crust-pizza`,
      lastModified: '2026-04-16T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-spicy-italian-pizza`,
      lastModified: '2026-04-16T12:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/posts/papa-johns-mountain-dew-drink`,
      lastModified: '2026-04-21T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/posts/papa-johns-pepsi-drink`,
      lastModified: '2026-04-21T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/drinks`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // ==================== MENU PRICE PAGES ====================
    {
      url: `${baseUrl}/menus-prices/pepperoni-pizza`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/menus-prices/the-works-pizza`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/menus-prices/philly-cheesesteak-papadia`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/menus-prices/cheese-pizza`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/menus-prices/drinks`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ==================== LOCATION PAGES ====================
    ...[
      'new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az',
      'philadelphia-pa', 'dallas-tx', 'san-antonio-tx', 'san-diego-ca', 'miami-fl',
      'austin-tx', 'seattle-wa', 'denver-co', 'washington-dc', 'boston-ma',
      'atlanta-ga', 'las-vegas-nv', 'san-francisco-ca', 'nashville-tn', 'charlotte-nc',
      'san-jose-ca', 'indianapolis-in', 'jacksonville-fl', 'columbus-oh', 'fort-worth-tx',
      'orlando-fl', 'louisville-ky', 'baltimore-md', 'tucson-az', 'oklahoma-city-ok',
      'detroit-mi', 'portland-or', 'tampa-fl', 'sacramento-ca', 'raleigh-nc'
    ].map(slug => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified: defaultLastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
