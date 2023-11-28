import { ComponentPropsWithoutRef, forwardRef } from 'react'

import IconClose from '@/assets/icons/iconClose'
import IconSearch from '@/assets/icons/iconSearch'
import { IconEye } from '@/components/ui/input/icons/iconEye'
import { Typography } from '@/components/ui/typography'
import cx from 'clsx'

import s from './input.module.scss'

type InputProps = {
  clearInput?: () => void
  error?: string
  label?: string
  showPass?: () => void
} & ComponentPropsWithoutRef<'input'>
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, clearInput, error, label, placeholder, showPass, type = 'text', ...rest }, ref) => {
    const showClearButton = type === 'search' && rest?.value?.toString().length! > 0
    const showError = !!error && error.length > 0
    const classInput = cx(s[type], s.input, showError && s.error)

    return (
      <div className={s.box}>
        <Typography as={'label'} style={{ color: 'gray' }} variant={'body1'}>
          {type === 'search' ? '' : label}
        </Typography>
        <div className={s.inputBox}>
          {type === 'search' && <IconSearch className={s.searchIcon} />}
          <input className={classInput} type={type} {...rest} placeholder={placeholder} ref={ref} />
          {showClearButton && (
            <button className={s.buttonIcon} onClick={clearInput} type={'button'}>
              <IconClose />
            </button>
          )}
          {type === 'password' && (
            <button className={s.buttonIcon} onClick={showPass} type={'button'}>
              <IconEye />
            </button>
          )}
        </div>
        {showError && (
          <Typography as={'label'} className={s.error} variant={'caption'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
