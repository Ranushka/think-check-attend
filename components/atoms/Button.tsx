import { classNames } from '../../helpers/classNames'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'default'
}

const getVariant = {
  primary:
    'border-primary bg-primary hover:bg-primary-600 active:bg-primary-700 text-primary-950',
  secondary:
    'border-primary hover:bg-primary-200 active:bg-primary-300 text-primary hover:text-primary-700',
  default: 'border-gray-200 hover:bg-gray-200 text-gray-900',
}

const getSize = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-8 py-3 text-lg',
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = 'md',
  variant = 'default',
  onClick,
  ...rest
}) => {
  const buttonClasses = classNames(
    'border cursor-pointer rounded-md shadow-sm font-semibold select-none',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    getSize[size],
    getVariant[variant],
    className,
  )

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
