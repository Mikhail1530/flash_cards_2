import { ComponentPropsWithoutRef, FC } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  max?: number
  min?: number
  onChange: (value: number[]) => void
  sliderValue?: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>
export const Slider: FC<SliderProps> = ({ max, min, onChange, sliderValue, value, ...rest }) => {
  const onHandlerChange = () => {
    if (value) {
      onChange(value)
    }
  }

  return (
    <form>
      <div className={s.boxSlider}>
        <div className={s.boxNumber}>{min}</div>
        <SliderRadix.Root
          className={s.sliderRoot}
          max={max}
          min={min}
          onValueChange={onHandlerChange}
          step={1}
          value={sliderValue}
          {...rest}
        >
          <SliderRadix.Track className={s.sliderTrack}>
            <SliderRadix.Range className={s.sliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb aria-label={'Volume'} className={s.sliderThumb} />
          <SliderRadix.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        </SliderRadix.Root>
        <div className={s.boxNumber}>{max}</div>
      </div>
    </form>
  )
}
