import { NextRequest, NextResponse } from 'next/server'
import { submitUrlWithDetails } from '@/lib/indexing/googleIndex'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, secret } = body
    const apiSecret = process.env.INDEXING_API_SECRET

    if (!apiSecret) {
      return NextResponse.json(
        { error: 'Not found' },
        { status: 404 }
      )
    }

    // Security check
    if (secret !== apiSecret) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      )
    }

    const result = await submitUrlWithDetails(url)

    return NextResponse.json({
      success: result.success,
      url,
      message: result.message,
      error: result.error
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
