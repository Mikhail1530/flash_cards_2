import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './card.module.scss'

export type TitleType = {
  iconElement?: ReactNode
  iconSize?: string
  text?: string
}
export type CardProps = {
  className?: string
  title?: TitleType
  variant?: 'dark' | 'light' | 'white'
  width?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = (props: CardProps) => {
  const { className, variant = 'dark', ...rest } = props
  const sizeCard = {
    width: props.width,
  }

  return (
    <div {...rest} className={`${s.card} ${s[variant]} ${className}`} style={sizeCard}>
      {props.title && (
        <div className={s.cardHeader}>
          {props.title.iconElement && <div className={s.iconSize}>{props.title.iconElement}</div>}
          <h3>{props.title.text}</h3>
        </div>
      )}

      {props.children && <div className={s.body}>{props.children}</div>}
    </div>
  )
}
