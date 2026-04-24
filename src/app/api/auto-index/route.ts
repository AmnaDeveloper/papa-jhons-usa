import { NextRequest, NextResponse } from 'next/server'
import { submitBatchUrls } from '@/lib/indexing/googleIndex'

// Yeh pages priority pe submit honge
const PRIORITY_PAGES = [
  'https://papajohns-menus.us/',
  'https://papajohns-menus.us/best-pizza-delivery-near-me',
  'https://papajohns-menus.us/posts/papa-johns-menu-prices-guide',
  'https://papajohns-menus.us/posts/papa-johns-nutrition-guide',
  'https://papajohns-menus.us/posts/classic-pizzas',
  'https://papajohns-menus.us/posts/super-loaded',
  'https://papajohns-menus.us/posts/sides',
  'https://papajohns-menus.us/menus-prices',
  'https://papajohns-menus.us/papa-johns-rewards',
  'https://papajohns-menus.us/coupons',
]

export async function GET(request: NextRequest) {
  // Vercel Cron Job authentication
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  try {
    await submitBatchUrls(PRIORITY_PAGES)
    
    return NextResponse.json({
      success: true,
      message: `Successfully submitted ${PRIORITY_PAGES.length} URLs`,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Cron job failed', details: error },
      { status: 500 }
    )
  }
}
