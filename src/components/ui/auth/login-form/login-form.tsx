import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, { message: 'Too short password' }),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(loginSchema),
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    name: 'rememberMe',
  })
  const onSubmit = (data: FormValues) => {
    return data
  }

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} error={errors.email?.message} label={'Email'} />
        <Input {...register('password')} error={errors.password?.message} label={'Password'} />
        <CheckBox checked={value} label={'remember Me'} onCheckedChange={onChange} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
