import { FieldValues, useController } from 'react-hook-form'

import { CheckBox, CheckBoxProps } from '@/components/ui/checkBox/checkBox'
import { UseControllerProps } from '@/utils/types/use-control-types'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckBoxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
    shouldUnregister,
  })

  return (
    <CheckBox
      {...{
        checked: value,
        id: name,
        onChange,
        ref,
        ...checkboxProps,
      }}
    />
  )
}
