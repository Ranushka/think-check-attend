import React from 'react'
import Link from '../components/atoms/Link'
import Image from 'next/image'

interface LogoProps {
  src: string
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Link href={'/'} aria-label="logo">
      <span className="sr-only">Think. Check. Attend.</span>
      <Image
        alt="Think. Check. Attend. - Logo"
        width={190}
        height={54}
        quality={100}
        src={src}
        className="pointer-events-none"
      />
    </Link>
  )
}

export default Logo
