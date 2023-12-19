import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './header.module.scss'



export type HeaderProps = {
  variant?: 'light' | 'average' | 'dark'
  buttonsVariant?: 'primary' | 'secondary' | 'tertiary'
  logoImg: ReactNode
  logoLink:string
  className?: string
} & ComponentPropsWithoutRef<'div'>



export const Header = (props:HeaderProps) => {
  const { logoImg, logoLink, className,children, ...rest } = props


  return (
    <div className={s.header}>
      <a href={logoLink} className={`${s.headerIcon}  ${className}`}>{logoImg}</a>
      {children && <div className={s.body}>{children}</div>}
    </div>
  )
}

export default Header
