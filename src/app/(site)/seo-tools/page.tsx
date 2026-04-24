'use client'

import { useState } from 'react'
import { Send, CheckCircle2, XCircle, Loader2, RefreshCw } from 'lucide-react'

const PRIORITY_PAGES = [
  'https://papajohns-menus.us/',
  'https://papajohns-menus.us/best-pizza-delivery-near-me',
  'https://papajohns-menus.us/posts/papa-johns-menu-prices-guide',
  'https://papajohns-menus.us/posts/papa-johns-nutrition-guide',
  'https://papajohns-menus.us/posts/classic-pizzas',
  'https://papajohns-menus.us/posts/super-loaded',
  'https://papajohns-menus.us/posts/sides',
  'https://papajohns-menus.us/posts/papa-johns-pan-pizza',
  'https://papajohns-menus.us/posts/papa-johns-wings',
  'https://papajohns-menus.us/posts/papa-johns-desserts',
  'https://papajohns-menus.us/menus-prices',
  'https://papajohns-menus.us/papa-johns-rewards',
  'https://papajohns-menus.us/locations/orlando-fl',
  'https://papajohns-menus.us/locations/louisville-ky',
  'https://papajohns-menus.us/locations/baltimore-md',
  'https://papajohns-menus.us/locations/tucson-az',
  'https://papajohns-menus.us/locations/oklahoma-city-ok',
]

export default function SeoToolsPage() {
  const [results, setResults] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({})
  const [batchStatus, setBatchStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const SECRET = 'papa-johns-indexing-secret-2026-v1'

  async function submitSingle(url: string) {
    setResults(prev => ({ ...prev, [url]: 'loading' }))
    try {
      const res = await fetch('/api/index-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, secret: SECRET })
      })
      const data = await res.json()
      setResults(prev => ({ ...prev, [url]: data.success ? 'success' : 'error' }))
    } catch {
      setResults(prev => ({ ...prev, [url]: 'error' }))
    }
  }

  async function submitAll() {
    setBatchStatus('loading')
    for (const url of PRIORITY_PAGES) {
      await submitSingle(url)
      await new Promise(r => setTimeout(r, 800))
    }
    setBatchStatus('done')
  }

  return (
    <div className="min-h-screen bg-[#1A3D17] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-widest text-[11px] px-6 py-2 rounded-full mb-4">
            🔒 Admin Only
          </span>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
            SEO Indexing Tools
          </h1>
          <p className="text-white/60 font-bold text-sm">
            Manual Google Indexing Panel — papajohns-menus.us
          </p>
        </div>

        {/* Batch Submit */}
        <div className="bg-white/10 rounded-3xl p-8 mb-8 border border-white/10">
          <h2 className="text-white font-black uppercase tracking-tighter text-xl mb-2">Submit All Pages at Once</h2>
          <p className="text-white/50 text-sm font-medium mb-6">
            Ye button sari priority pages ek sath Google ko submit karega. Cron job bhi automatically har roz 9 AM UTC karta he — ye sirf testing ke liye he.
          </p>
          <button
            onClick={submitAll}
            disabled={batchStatus === 'loading'}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${
              batchStatus === 'loading' ? 'bg-gray-500 cursor-not-allowed text-white' :
              batchStatus === 'done' ? 'bg-green-500 text-white' :
              'bg-[#CCEE18] hover:bg-white text-[#1A3D17]'
            }`}
          >
            {batchStatus === 'loading' ? <Loader2 size={18} className="animate-spin" /> :
             batchStatus === 'done' ? <CheckCircle2 size={18} /> :
             <RefreshCw size={18} />}
            {batchStatus === 'loading' ? 'Submitting All Pages...' :
             batchStatus === 'done' ? 'All Pages Submitted!' :
             'Submit All Pages to Google'}
          </button>
        </div>

        {/* Individual Pages */}
        <div className="bg-white/10 rounded-3xl p-8 border border-white/10">
          <h2 className="text-white font-black uppercase tracking-tighter text-xl mb-6">Individual Page Submit</h2>
          <div className="space-y-3">
            {PRIORITY_PAGES.map(url => {
              const status = results[url] || 'idle'
              const path = url.replace('https://papajohns-menus.us', '') || '/'
              return (
                <div key={url} className="flex items-center justify-between bg-white/5 rounded-2xl px-5 py-4 border border-white/10">
                  <span className="text-white/80 font-bold text-sm font-mono">{path}</span>
                  <button
                    onClick={() => submitSingle(url)}
                    disabled={status === 'loading'}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${
                      status === 'loading' ? 'bg-gray-500 text-white cursor-not-allowed' :
                      status === 'success' ? 'bg-green-500 text-white' :
                      status === 'error' ? 'bg-red-500 text-white' :
                      'bg-[#CCEE18] hover:bg-white text-[#1A3D17]'
                    }`}
                  >
                    {status === 'loading' ? <Loader2 size={12} className="animate-spin" /> :
                     status === 'success' ? <CheckCircle2 size={12} /> :
                     status === 'error' ? <XCircle size={12} /> :
                     <Send size={12} />}
                    {status === 'loading' ? 'Sending...' :
                     status === 'success' ? 'Done!' :
                     status === 'error' ? 'Failed' :
                     'Index'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-center text-white/30 text-xs font-bold mt-8 uppercase tracking-widest">
          Ye page sirf aapke liye he — kisi ko share mat karo 🔒
        </p>
      </div>
    </div>
  )
}
