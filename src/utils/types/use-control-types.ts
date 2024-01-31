import { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form'

export type UseControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>
  defaultValue?: FieldPathValue<TFieldValues, TName>
  disabled?: boolean
  name: TName
  shouldUnregister?: boolean
}
