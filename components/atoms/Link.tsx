import React from 'react'
import NextLink, { LinkProps } from 'next/link'
import { classNames } from '@/helpers/classNames'

interface LinkPropsEx extends LinkProps {
  children: React.ReactNode
  className?: string
  title?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'default'
  [key: string]: any
}

const getVariant = {
  primary: 'text-primary',
  secondary: 'hover:bg-primary text-primary hover:text-white',
  default: 'text-gray-900',
}

const getSize = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-lg',
}

const Link: React.FC<LinkPropsEx> = ({
  children,
  className,
  title,
  size = 'md',
  variant = 'default',
  onClick,
  ...rest
}) => {
  const buttonClasses = classNames(
    'cursor-pointer font-semibold will-change-transform',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'duration-150 active:scale-95',
    getSize[size],
    getVariant[variant],
    className,
  )

  return (
    <NextLink
      aria-label={title}
      onClick={onClick}
      className={buttonClasses}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

export default Link
