import { ComponentPropsWithoutRef, useState } from 'react'

import { Button } from '@/components/ui/button'

import s from './tabSwitcher.module.scss'

export type TabSwitcherProps = {
  buttonsName: Array<string>
  buttonsVariant?: 'link' | 'primary' | 'secondary' | 'tertiary'
  className?: string
  variant?: 'average' | 'dark' | 'light'
} & ComponentPropsWithoutRef<'div'>

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { buttonsName, buttonsVariant = 'primary', className, variant = 'dark', ...rest } = props
  const [active, setStatus] = useState<number>(0)

  const btnHandler = (i: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setStatus(i)
  }

  return (
    <div className={`${s.tabSwitcher} ${variant && s[variant]}  ${className}`} {...rest}>
      <h4>title</h4>
      {buttonsName.map((b: string, i: number) => (
        <Button
          className={` ${s.button}  ${active === i && s.btnActive}`}
          key={i}
          onClick={e => btnHandler(i, e)}
          variant={buttonsVariant && buttonsVariant}
        >
          {b}
        </Button>
      ))}
    </div>
  )
}
