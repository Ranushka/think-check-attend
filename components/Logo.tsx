import React from 'react'
import Link from '@/components/atoms/Link'
import Image from 'next/image'

interface LogoProps {
  width?: string
}

const Logo: React.FC<LogoProps> = ({ width }) => {
  return (
    <Link href={'/'} aria-label="logo">
      <span className="sr-only">Think. Check. Attend.</span>
      <Image
        alt="Think. Check. Attend. - Logo"
        width={190}
        height={54}
        src={'/images/logo.svg'}
        className="pointer-events-none"
      />
    </Link>
  )
}

export default Logo
