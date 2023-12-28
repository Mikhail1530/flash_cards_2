import { useState } from 'react'

import UnSelectRadioButtonSvg from '@/components/ui/radio-buttons/UnSelectRadioButtonSvg'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-button.module.scss'

import RadioButtonSvg from './RadioButtonSvg'

type ButtonType = {
  isDisabled: boolean
  name: string
  value: number
}
export type RadioButtonProps = {
  option: ButtonType[]
  variant?: 'Enable' | 'IsDisabled'
}
export const RadioButtons = (props: RadioButtonProps) => {
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
    <RadioGroup.Root onValueChange={handleChange} orientation={'vertical'}>
      {props.option.map((radioBtn: ButtonType) => {
        return (
          <div className={s.radioAllItem} key={radioBtn.value}>
            <RadioGroup.Item className={s.radioGroupItem} value={radioBtn.name}>
              {renderRadioButton(selectedOption, radioBtn.name, radioBtn.isDisabled)}
            </RadioGroup.Item>
            <label>{radioBtn.name}</label>
          </div>
        )
      })}
    </RadioGroup.Root>
  )
}

export default RadioButtons
