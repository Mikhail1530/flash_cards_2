import { ForwardedRef, forwardRef, useState } from 'react'

import UnSelectRadioButtonSvg from '@/components/ui/radio-group/UnSelectRadioButtonSvg'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import RadioButtonSvg from './RadioButtonSvg'

export type ButtonRadioGroupType = {
  isDisabled: boolean
  name: string
  value: number
}
export type RadioButtonProps = {
  option: ButtonRadioGroupType[]
  variant?: 'Enable' | 'IsDisabled'
}
export const RadioGroup = forwardRef<RadioGroupPrimitive.RadioGroupProps, RadioButtonProps>(
  ({ option, ...restProps }, ref) => {
    const [selectedOption, setSelectedOption] = useState<string>('Option1')

    const handleChange = (value: string) => {
      setSelectedOption(value)
    }

    const renderRadioButton = (selectedValue: string, thisOption: string, isDisabled: boolean) => {
      const fillColor = isDisabled ? `var(--color-primary-900)` : `var(--color-primary-500)`

      if (selectedValue !== thisOption) {
        return <UnSelectRadioButtonSvg fillColor={fillColor} />
      } else {
        return <RadioButtonSvg fillColor={fillColor} />
      }
    }

    return (
      <RadioGroupPrimitive.Root
        onValueChange={handleChange}
        orientation={'vertical'}
        ref={ref as ForwardedRef<HTMLDivElement>}
        {...restProps}
      >
        {option.map((radioBtn: ButtonRadioGroupType) => {
          return (
            <div className={s.radioAllItem} key={radioBtn.value}>
              <RadioGroupPrimitive.Item className={s.radioGroupItem} value={radioBtn.name}>
                {renderRadioButton(selectedOption, radioBtn.name, radioBtn.isDisabled)}
              </RadioGroupPrimitive.Item>
              <label>{radioBtn.name}</label>
            </div>
          )
        })}
      </RadioGroupPrimitive.Root>
    )
  }
)

export default RadioGroup
