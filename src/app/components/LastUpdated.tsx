import { getTodayFormatted } from '../../lib/utils/date'

export default function LastUpdated() {
  const date = getTodayFormatted()
  
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: '6px',
      padding: '4px 12px',
      fontSize: '13px',
      color: '#0369a1',
      marginBottom: '16px'
    }}>
      <span>🕐</span>
      <span>Last Updated: <strong>{date}</strong></span>
    </div>
  )
}
