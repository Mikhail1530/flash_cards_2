import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
} & Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const {
    field: { onChange, ref, value },
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return (
    <TextField
      {...props}
      errorMessage={error?.message}
      id={props.name}
      onChange={onChange}
      ref={ref}
      value={value}
    />
  )
}
