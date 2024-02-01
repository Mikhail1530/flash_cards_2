import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'

import s from '@/components/ui/tabSwitcher/tabSwitcher.module.scss'

export type TabSwitcherBtnType = {
  name: string
  value: string
}
export type TabSwitcherProps = {
  activeBtn: string
  buttonsData: Array<TabSwitcherBtnType>
  buttonsVariant?: 'link' | 'primary' | 'secondary' | 'tertiary'
  className?: string
  onChange: (value: TabSwitcherBtnType) => void
  title?: string
  variant?: 'average' | 'dark' | 'light'
} & ComponentPropsWithoutRef<'div'>

export const TabSwitcher = (props: TabSwitcherProps) => {
  const {
    activeBtn,
    buttonsData,
    buttonsVariant = 'primary',
    className,
    onChange,
    title,
    variant = 'dark',
    ...rest
  } = props

  const btnHandler = (b: TabSwitcherBtnType) => {
    onChange(b)
  }

  return (
    <div className={`${s.tabSwitcher} ${variant && s[variant]} ${className}`} {...rest}>
      <h4>{title}</h4>
      {buttonsData.map((b: TabSwitcherBtnType, i: number) => (
        <Button
          className={` ${s.button}  ${activeBtn === b.value && s.btnActive}`}
          key={i}
          onClick={() => btnHandler(b)}
          variant={buttonsVariant && buttonsVariant}>
          {b.name}
        </Button>
      ))}
    </div>
  )
}
