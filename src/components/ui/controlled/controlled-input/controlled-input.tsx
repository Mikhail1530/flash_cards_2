import { UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

export type ControlledCheckboxProps = UseControllerProps<any> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = ({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Input
      {...{
        checked: value,
        id: name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
