import { NextRequest, NextResponse } from 'next/server'
import { submitUrlToGoogle } from '@/lib/indexing/googleIndex'

// Secret key to protect the endpoint
const API_SECRET = process.env.INDEXING_API_SECRET || 'your-secret-key-here'

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
    
    const success = await submitUrlToGoogle(url)
    
    return NextResponse.json({
      success,
      url,
      message: success ? 'URL submitted to Google' : 'Failed to submit URL'
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
