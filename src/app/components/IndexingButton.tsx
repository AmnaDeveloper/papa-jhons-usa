'use client'

import { useState } from 'react'
import { Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react'

export default function IndexingButton({ url }: { url: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function triggerIndexing() {
    setStatus('loading')
    try {
      const response = await fetch('/api/index-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: url,
          secret: process.env.NEXT_PUBLIC_INDEXING_SECRET || 'papa-johns-indexing-secret-2026-v1'
        })
      })
      
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setMessage('URL submitted to Google!')
      } else {
        setStatus('error')
        setMessage(result.error || 'Failed to submit')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error occurred')
    }
    
    // Reset after 3 seconds
    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 3000)
  }

  return (
    <div className="mt-6 border-t border-gray-100 pt-6">
      <button 
        onClick={triggerIndexing}
        disabled={status === 'loading'}
        className={`w-full flex items-center justify-center gap-2 font-black uppercase tracking-widest py-3 rounded-xl transition-all text-[10px] shadow-sm border ${
          status === 'loading' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
          status === 'success' ? 'bg-green-50 text-green-600 border-green-200' :
          status === 'error' ? 'bg-red-50 text-red-600 border-red-200' :
          'bg-[#1A3D17] hover:bg-[#cc0000] text-white border-transparent'
        }`}
      >
        {status === 'loading' ? (
          <Loader2 size={14} className="animate-spin" />
        ) : status === 'success' ? (
          <CheckCircle2 size={14} />
        ) : status === 'error' ? (
          <XCircle size={14} />
        ) : (
          <Send size={14} />
        )}
        {status === 'loading' ? 'Submitting...' : 
         status === 'success' ? 'Submitted!' : 
         status === 'error' ? 'Failed!' : 
         'Request Google Indexing'}
      </button>
      {message && (
        <p className={`text-center mt-2 text-[9px] font-bold uppercase tracking-tighter ${
          status === 'success' ? 'text-green-500' : 'text-red-500'
        }`}>
          {message}
        </p>
      )}
    </div>
  )
}
