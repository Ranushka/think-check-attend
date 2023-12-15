import { useEffect } from 'react'

const useVersionCheck = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentAppVersion = process.env.NEXT_PUBLIC_APP_VERSION || '0.1.1'
      const storedVersion = localStorage.getItem('appVersion')

      if (storedVersion !== currentAppVersion) {
        localStorage.clear()
        localStorage.setItem('appVersion', currentAppVersion)
      }
    }
  }, [])
}

export default useVersionCheck
