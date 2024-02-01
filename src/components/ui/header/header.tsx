import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './header.module.scss'

export type HeaderProps<T extends ElementType = 'header'> = {
  as?: T
  buttonsVariant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  logoImg: ReactNode
  logoLink: string
  variant?: 'average' | 'dark' | 'light'
} & ComponentPropsWithoutRef<T>

export const Header = (props: HeaderProps) => {
  const { as: Component = 'header', children, className, logoImg, logoLink, ...rest } = props

  return (
    <Component className={s.header}>
      <a className={`${s.headerIcon}  ${className}`} href={logoLink}>
        {logoImg}
      </a>
      {children && <div className={s.body}>{children}</div>}
    </Component>
  )
}

export default Header
