import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import RadioGroup, {
  ButtonRadioGroupType,
  RadioButtonProps,
} from '@/components/ui/radio-group/radio-group'

export type ControlledTextFieldProps<TRadioGroupValues extends FieldValues> = {
  control?: Control<TRadioGroupValues>
  name: FieldPath<TRadioGroupValues>
  option: ButtonRadioGroupType[]
} & Omit<RadioButtonProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <TRadioGroupValues extends FieldValues>(
  props: ControlledTextFieldProps<TRadioGroupValues>
) => {
  const {
    field: { ref },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <RadioGroup {...props} ref={ref} />
}
