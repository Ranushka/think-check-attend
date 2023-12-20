import { useEffect } from 'react'

const useVersionCheck = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentAppVersion = process.env.NEXT_PUBLIC_APP_VERSION || '0.1.4'
      const storedVersion = localStorage.getItem('appVersion')

      if (storedVersion !== currentAppVersion) {
        localStorage.clear()
        localStorage.setItem('appVersion', currentAppVersion)
        window.location.reload()
      }
    }
  }, [])
}

export default useVersionCheck
