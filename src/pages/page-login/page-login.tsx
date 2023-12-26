import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import cx from 'clsx'
import { z } from 'zod'

import s from './page-login.module.scss'

// type FormValues = {
//   email: string
//   password: string
//   rememberMe: boolean
// }

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, { message: 'Too short password' }),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>
export const PageLogin = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)

    return
  }
  const {
    field: { onChange, ref, value },
  } = useController({ control, name: 'rememberMe' })

  return (
    <div className={s.wrapperCard}>
      <DevTool control={control} />
      <Card className={s.intoAuthCard}>
        <Typography className={s.h1} variant={'large'}>
          Sign In
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={'Email'}
            type={'email'}
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            label={'Password'}
            type={'password'}
            {...register('password')}
            error={errors.password?.message}
          />
          <CheckBox
            label={'Remember me'}
            {...register('rememberMe')}
            checked={value}
            onCheckedChange={onChange}
            ref={ref}
          />

          <Button as={'a'} className={s.link} href={'//'} rel={'noopener nopener'} variant={'link'}>
            Forgot Password?
          </Button>
          <Button className={s.button} variant={'primary'}>
            Sign In
          </Button>
          <div className={s.linkButton}>
            <Button
              as={'a'}
              className={cx(s.link, s.dontHaveAccount)}
              href={'/sign_up'}
              rel={'noopener nopener'}
              variant={'link'}
            >
              Dont have an account?
            </Button>
          </div>
          <div className={s.underlineLinkWrapper}>
            <Button
              as={'a'}
              className={s.underlineLink}
              href={'/sign_up'}
              rel={'noopener nopener'}
              variant={'link'}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
