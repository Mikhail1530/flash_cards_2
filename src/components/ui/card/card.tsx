import { ComponentProps, ElementType, ReactNode } from 'react'

import cx from 'clsx'

import s from './card.module.scss'

type CardProps<T extends ElementType> = {
  as?: T
  className: string
  icon: ReactNode
} & ComponentProps<T>
export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'div', children, className, icon, ...rest } = props

  return (
    <Component className={cx(s.card, className ?? '')} {...rest}>
      {icon && <div className={s.icon}>{icon}</div>}
      {children}
    </Component>
  )
}
