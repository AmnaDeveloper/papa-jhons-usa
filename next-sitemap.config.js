/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://papajohns-menus.us',
    generateRobotsTxt: false,
    generateIndexSitemap: false,
    exclude: ['/admin/*', '/api/*', '/onesignal-debug', '/push-test', '/guestpost/*'],
    transform: async (config, path) => {
        // Custom Priority logic matching TR setup
        let priority = config.priority;

        if (path === '/') {
            priority = 1.0;
        } else if (path.startsWith('/posts/') || path.startsWith('/blog/')) {
            priority = 0.99;
        } else if (
            path === '/menus-prices' ||
            path === '/store-locator' ||
            path === '/coupons'
        ) {
            priority = 0.95;
        } else {
            priority = 0.7;
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        };
    },
};
