import { useState } from 'react'

import UnSelectRadioButtonSvg from '@/components/ui/radio-button/UnSelectRadioButtonSvg'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-button.module.scss'

import RadioButtonSvg from './RadioButtonSvg'

export type RadioButtonProps = {
  isDisabled: boolean
  variant?: 'off' | 'on'
}

export const RadioButtons = (props: RadioButtonProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('option1')

  const handleChange = (value: string) => {
    setSelectedOption(value)
  }

  const renderRadioButton = (selectedValue: string, thisOption: string, isDisabled: boolean) => {
    const fillColor = isDisabled ? `var(--color-accent-900)` : `var(--color-accent-500)`

    if (selectedValue !== thisOption) {
      return <UnSelectRadioButtonSvg fillColor={fillColor} />
    } else {
      return <RadioButtonSvg fillColor={fillColor} />
    }
  }

  return (
    <form>
      <RadioGroup.Root
        disabled={props.isDisabled}
        onValueChange={handleChange}
        orientation={'vertical'}
        value={selectedOption}
      >
        <div className={s.radioAllItem}>
          <RadioGroup.Item className={s.radioGroupItem} value={'option1'}>
            {renderRadioButton(selectedOption, 'option1', props.isDisabled)}
          </RadioGroup.Item>
          <label>RadioGroup</label>
        </div>
        <div className={s.radioAllItem}>
          <RadioGroup.Item className={s.radioGroupItem} value={'option2'}>
            {renderRadioButton(selectedOption, 'option2', props.isDisabled)}
          </RadioGroup.Item>
          <label>RadioGroup</label>
        </div>
        <div className={s.radioAllItem}>
          <RadioGroup.Item className={s.radioGroupItem} value={'option3'}>
            {renderRadioButton(selectedOption, 'option3', props.isDisabled)}
          </RadioGroup.Item>
          <label>RadioGroup</label>
        </div>
      </RadioGroup.Root>
    </form>
  )
}

export default RadioButtons
