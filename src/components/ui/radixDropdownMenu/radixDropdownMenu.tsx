import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import MenuIcon from '@/assets/icons/menuIcon'
import { Button } from '@/components/ui/button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './radixDropdownMenu.module.scss'

export type RadixDropdownMenuProps<T extends ElementType = 'nav'> = {
  children?: ReactNode
  className?: string
  triggerContent?: ReactNode
} & ComponentPropsWithoutRef<T>

const RadixDropdownMenu: React.FC<RadixDropdownMenuProps> = (
  {
    // children,
    // className,
    // triggerContent,
  }
) => {
  // const [isOpen, setIsOpen] = useState(true)
  // const handleToggle = () => {
  //   setIsOpen(!isOpen)
  // }
  const menuItems = [
    { name: 'Edit', shortcut: '⌘ E' },
    { name: 'Duplicate', shortcut: '⌘ D' },
    { name: 'Contact', shortcut: '⌘ C' },
  ]
  const menuItemsSub = [
    { name: 'Move to project…', shortcut: '⌘ P' },
    { name: 'Move to folder…', shortcut: '' },
  ]

  return (
    <DropdownMenu.Root>
      {/*<DropdownMenu.Trigger>*/}
      <DropdownMenu.Trigger asChild>
        <Button aria-label={'Customise options'} className={s.BtnMenu}>
          <MenuIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent}>
          {/*<DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>*/}
          {menuItems.map(i => (
            // eslint-disable-next-line react/jsx-key
            <DropdownMenu.Item>{i.name}</DropdownMenu.Item>
            // <DropdownMenu.Item shortcut={i.shortcut}>{i.name}</DropdownMenu.Item>
          ))}

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent className={s.DropdownMenuSubContent}>
              {menuItemsSub.map(i => (
                // eslint-disable-next-line react/jsx-key
                <DropdownMenu.Item> {i.name}</DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />

          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />

          <DropdownMenu.Item color={'red'}>Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

interface MenuItemProps {
  children: ReactNode
  shortcut?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, shortcut }) => (
  <div className={s.menuItem}>
    <span>{children}</span>
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

export default RadixDropdownMenu
