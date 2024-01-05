import { ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react'

import s from './customDropdownMenu.module.scss'

export type CustomDropdownMenuProps<T extends ElementType = 'nav'> = {
  children: ReactNode
  className?: string
  triggerContent: ReactNode
} & ComponentPropsWithoutRef<T>

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  children,
  className,
  triggerContent,
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={s.dropdownMenu}>
      <div className={s.trigger} onClick={handleToggle}>
        {' '}
        {triggerContent}{' '}
      </div>
      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  )
}

interface MenuItemProps {
  children: ReactNode | string
  // children: ReactNode
  path?: string
  shortcut?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, path, shortcut }) => (
  <div className={s.menuItem}>
    {/*<NavLink to={`path? '{path}': '/'`}>{children}</NavLink>*/}
    <div>{children}</div>
    {shortcut && <span className={s.shortcut}>{shortcut}</span>}
  </div>
)

interface MenuSeparatorProps {}

export const MenuSeparator: React.FC<MenuSeparatorProps> = () => <div className={s.menuSeparator} />

interface SubMenuProps {
  children: ReactNode
  triggerContent: ReactNode
}

export const SubMenu: React.FC<SubMenuProps> = ({ children, triggerContent }) => {
  return (
    <div className={s.subMenu}>
      <div className={s.subTrigger}>{triggerContent}</div>
      <div className={s.subContent}>{children}</div>
    </div>
  )
}

export default CustomDropdownMenu
