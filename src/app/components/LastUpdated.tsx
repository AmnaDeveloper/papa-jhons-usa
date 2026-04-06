import { getTodayFormatted } from '../../lib/utils/date'

export default function LastUpdated() {
  const date = getTodayFormatted()
  
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: '6px',
      padding: '4px 12px',
      fontSize: '13px',
      color: '#15803d',
      marginBottom: '16px'
    }}>
      <span>🕐</span>
      <span>Last Updated: <strong>{date}</strong></span>
    </div>
  )
}
