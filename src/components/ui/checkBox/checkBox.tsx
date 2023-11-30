import { ComponentPropsWithoutRef, FC } from 'react'

import { CheckBoxIcon } from '@/assets/icons/checkBoxIcon'
import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkBox.module.scss'
type CheckBoxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof Checkbox.Root>
export const CheckBox: FC<CheckBoxProps> = ({ className, label, ...rest }) => {
  return (
    <form className={s.box}>
      <div className={s.checkBoxWrapper}>
        <Checkbox.Root className={s.checkboxRoot} {...rest}>
          <Checkbox.Indicator asChild>
            <CheckBoxIcon className={s.iconCheckBox} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <Typography className={s.label} variant={'body2'}>
        {label}
      </Typography>
    </form>
  )
}
