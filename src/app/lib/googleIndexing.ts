import { google } from 'googleapis';

/**
 * Service to handle Google Indexing API
 * Required: GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY environment variables
 */

export async function notifyGoogle(url: string, type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED') {
    try {
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!clientEmail || !privateKey) {
            console.warn('Google Indexing API credentials missing. Skipping indexing.');
            return { success: false, error: 'Credentials missing' };
        }

        const jwtClient = new google.auth.JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        await jwtClient.authorize();

        const indexing = google.indexing({
            version: 'v3',
            auth: jwtClient,
        });

        const response = await indexing.urlNotifications.publish({
            requestBody: {
                url: url,
                type: type,
            },
        });

        console.log(`Successfully notified Google about ${url}`);
        return { success: true, data: response.data };
    } catch (error) {
        console.error(`Error notifying Google about ${url}:`, error);
        return { success: false, error: (error as Error).message };
    }
}

export async function notifyCouponUpdates() {
    const baseUrl = 'https://papajohns-menus.us';
    const urls = [
        baseUrl,
        `${baseUrl}/coupons`
    ];

    const results = [];
    for (const url of urls) {
        const result = await notifyGoogle(url);
        results.push({ url, ...result });
    }

    return results;
}
