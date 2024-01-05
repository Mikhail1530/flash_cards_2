import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import DropdownMenuAvatar from '@/components/ui/customDropdownMenu/dropdownMenuAvatar'

import s from './header.module.scss'

export type HeaderProps<T extends ElementType = 'header'> = {
  as?: T
  buttonsVariant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  isAuth?: boolean
  logoImg: ReactNode
  logoLink: string
  variant?: 'average' | 'dark' | 'light'
} & ComponentPropsWithoutRef<T>

export const Header = (props: HeaderProps) => {
  const { as: Component = 'header', className, logoImg, logoLink } = props

  return (
    <Component className={`${s.header} ${className}`}>
      <a className={`${s.headerIcon}`} href={logoLink}>
        {logoImg}
      </a>
      {props.isAuth ? (
        <div>
          <DropdownMenuAvatar />
        </div>
      ) : (
        ''
      )}
    </Component>
  )
}

export default Header
