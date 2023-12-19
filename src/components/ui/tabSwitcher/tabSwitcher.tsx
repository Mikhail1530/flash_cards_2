import { Button } from '@/components/ui/button'
import { ComponentPropsWithoutRef, useState } from 'react'
import s from './tabSwitcher.module.scss'


export type TabSwitcherProps = {
  variant?: 'light' | 'average' | 'dark'
  buttonsVariant?: 'primary' | 'secondary' | 'tertiary'
  buttonsName: Array<string>
  className?: string
} & ComponentPropsWithoutRef<'div'>


export const TabSwitcher = (props: TabSwitcherProps) => {
  const { className, buttonsName, variant = 'dark', buttonsVariant = 'primary',...rest } = props;
  const [active, setStatus] = useState<number>(0)

  const borderRadiusBtn = (i: number) => {
    let borderRadius = '0 0 0 0'
    if (i === 0) {
      borderRadius = '2px 0px 0px 2px'
    }
    if (i === buttonsName.length - 1) {
      borderRadius = '0px 2px 2px 0px'
    }
    return borderRadius
  }

  const btnHandler = (i: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setStatus(i)
    console.log(e)
  }


  return (
    <div className={`${s.tabSwitcher} ${variant && s[variant]}  ${className}`} {...rest}>
      <h4>title</h4>
      {buttonsName.map((b: string, i: number) => <Button key={i} variant={buttonsVariant && buttonsVariant} className={` ${s.button}  ${active === i && s.btnActive}`}
          style={{ borderRadius: borderRadiusBtn(i) }} onClick={(e) => btnHandler(i, e)}>
          {b}
        </Button>
      )}
    </div>
  )
}