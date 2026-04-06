// Dynamic date utility for title generation
export function getTodayFormatted(): string {
  const now = new Date()
  return now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function getMonthYear(): string {
  const now = new Date()
  return now.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })
}

export function getLastUpdated(): string {
  return `Updated ${getTodayFormatted()}`
}
