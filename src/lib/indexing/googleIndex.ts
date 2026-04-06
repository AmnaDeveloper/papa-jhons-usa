import { GoogleAuth } from 'google-auth-library'

// DO NOT INITIALIZE HERE - Initialize inside functions to avoid module-level errors if env vars aren't ready
function getAuthClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  const projectId = process.env.GOOGLE_PROJECT_ID || 'swift-rite-492505-d2';

  if (!email || !key) {
    throw new Error(`Missing Credentials: EMAIL=${email ? '✅' : '❌'} KEY=${key ? '✅' : '❌'}`);
  }

  return new GoogleAuth({
    credentials: {
      type: 'service_account',
      project_id: projectId,
      private_key: key.replace(/\\n/g, '\n'),
      client_email: email,
    },
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
}

export async function submitUrlToGoogle(url: string): Promise<boolean> {
  try {
    const auth = getAuthClient();
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
    
    return response.ok;
  } catch (error) {
    console.error(`❌ Error submitting ${url}:`, error)
    return false
  }
}

// Batch submit
export async function submitBatchUrls(urls: string[]): Promise<void> {
  for (const url of urls) {
    await submitUrlToGoogle(url)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

export async function submitUrlWithDetails(url: string): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    const auth = getAuthClient();
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
