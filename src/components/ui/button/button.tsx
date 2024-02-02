import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  iconBtn?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

// С помощью Omit мы убираем из пропсов переданного компонента все пропсы, которые уже есть в наших кастомных пропсах, тем самым избегая коллизий.
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    iconBtn = false,
    variant = 'primary',
    ...rest
  } = props

  return (
    <>
      {iconBtn ? (
        <Component className={`${s.button} ${s.iconBtn} ${className}`} {...rest} />
      ) : (
        <Component
          className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
          {...rest}
        />
      )}
      {/*<Component className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}  style={iconBtn?iconBtnStyles:undefined}*/}
      {/*   {...rest}/>*/}
    </>
  )
}
