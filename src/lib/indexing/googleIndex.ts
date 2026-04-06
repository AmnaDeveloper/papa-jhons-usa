import { GoogleAuth } from 'google-auth-library'

const auth = new GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  },
  scopes: ['https://www.googleapis.com/auth/indexing'],
})

export async function submitUrlToGoogle(url: string): Promise<boolean> {
  try {
    const client = await auth.getClient()
    const accessToken = await client.getAccessToken()
    
    const response = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken.token}`,
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED',
        }),
      }
    )
    
    if (response.ok) {
      console.log(`✅ Successfully submitted: ${url}`)
      return true
    } else {
      const error = await response.json()
      console.error(`❌ Failed to submit ${url}:`, error)
      return false
    }
  } catch (error) {
    console.error(`❌ Error submitting ${url}:`, error)
    return false
  }
}

// Batch submit - multiple URLs ek baar mein
export async function submitBatchUrls(urls: string[]): Promise<void> {
  console.log(`📤 Submitting ${urls.length} URLs to Google...`)
  
  for (const url of urls) {
    await submitUrlToGoogle(url)
    // 1 second delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  
  console.log('✅ Batch submission complete!')
}

export async function submitUrlWithDetails(url: string): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    const client = await auth.getClient()
    const accessToken = await client.getAccessToken()
    
    const response = await fetch(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken.token}`,
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED',
        }),
      }
    )
    
    const data = await response.json()
    
    if (response.ok) {
      return { success: true, message: 'Successfully submitted' }
    } else {
      return { 
        success: false, 
        message: 'Google API Error', 
        error: data.error?.message || 'Unknown error' 
      }
    }
  } catch (error: any) {
    return { 
      success: false, 
      message: 'Auth Error', 
      error: error.message || 'Failed to authenticate' 
    }
  }
}
