interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js' | 'set' | 'consent',
    targetId: string | Date | 'update' | 'default',
    config?: {
      page_path?: string
      analytics_storage?: 'granted' | 'denied'
      [key: string]: any
    }
  ) => void
  dataLayer?: any[]
}

