import { NextResponse } from 'next/server';
import { notifyGoogle } from '../../lib/googleIndexing';

export async function GET() {
    const baseUrl = 'https://papajohns-menus.us';

    // Example array of priority URLs to auto-index daily/weekly
    const priorityUrls = [
        baseUrl,
        `${baseUrl}/menus-prices`,
        `${baseUrl}/coupons`,
        `${baseUrl}/store-locator`,
        `${baseUrl}/posts`
    ];

    try {
        const results = [];
        for (const url of priorityUrls) {
            const res = await notifyGoogle(url, 'URL_UPDATED');
            results.push({ url, status: res.success ? 'Success' : 'Failed', error: res.error });
        }

        return NextResponse.json({
            success: true,
            message: "Batch auto-indexing complete via Vercel Cron",
            reports: results
        });

    } catch (error) {
        console.error('Auto-index error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error processing auto-index' },
            { status: 500 }
        );
    }
}
