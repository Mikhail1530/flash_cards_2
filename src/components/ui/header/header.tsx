import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './header.module.scss'



export type HeaderProps = {
  buttonsVariant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  logoImg: ReactNode
  logoLink: string
  variant?: 'average' | 'dark' | 'light'
} & ComponentPropsWithoutRef<'div'>



export const Header = (props:HeaderProps) => {
  const { children, className, logoImg,logoLink, ...rest } = props


  return (
    <header className={s.header}>
      <a className={`${s.headerIcon}  ${className}`} href={logoLink}>{logoImg}</a>
      {children && <div className={s.body}>{children}</div>}
    </header>
  )
}

export default Header
