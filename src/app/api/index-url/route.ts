import { NextRequest, NextResponse } from 'next/server'
import { submitUrlToGoogle, submitUrlWithDetails } from '@/lib/indexing/googleIndex'

// Secret key to protect the endpoint
const API_SECRET = process.env.INDEXING_API_SECRET || 'papa-johns-indexing-secret-2026-v1'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, secret } = body
    
    // Security check
    if (secret !== API_SECRET) {
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
