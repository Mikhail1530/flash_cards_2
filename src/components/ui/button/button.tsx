import { ComponentPropsWithoutRef, ElementType } from 'react'

import cx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  // children?: ReactNode
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, variant = 'primary', ...rest } = props

  return <Component className={cx(s.button, s[variant], className)} {...rest} />
}
