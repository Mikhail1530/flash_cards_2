import { useForm } from 'react-hook-form'

import { AuthWrapper } from '@/components/auth/auth-wrapper/auth-wrapper'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/services/base-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './page-sign-up.module.scss'

// type FormValues = {
//   confirmPassword: string
//   email: string
//   password: string
// }
const loginSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(3, { message: 'Too short password' })
      .max(30, { message: 'Too long password' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof loginSchema>

export const PageSignUp = () => {
  const [signUp, { error }] = useSignUpMutation()
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    signUp({ email: data.email, password: data.password })
  }

  return (
    <div className={s.wrapperCard}>
      <Card className={s.intoAuthCard}>
        <Typography className={s.h1} variant={'large'}>
          Sign Up
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <ul className={s.ul}>
            <li className={s.li}>
              <Input
                error={errors.email?.message ?? error?.data.errorMessages[0]}
                label={'Email'}
                type={'email'}
                {...register('email')}
                onChange={() => clearErrors()}
              />
            </li>
            <li className={s.li}>
              <Input
                error={errors.password?.message}
                label={'Password'}
                type={'password'}
                {...register('password')}
              />
            </li>
            <li className={s.li}>
              <Input
                error={errors.confirmPassword?.message}
                label={'Confirm Password'}
                type={'password'}
                {...register('confirmPassword')}
              />
            </li>
          </ul>
          <Button className={s.button} variant={'primary'}>
            Sign Up
          </Button>
          <Typography className={s.alreadyHaveAccount} variant={'caption'}>
            Already have an account?
          </Typography>
          <div className={s.underlineLinkWrapper}>
            <Button
              as={'a'}
              className={s.underlineLink}
              href={'/#'}
              rel={'noopener nopener'}
              target={'_blank'}
              variant={'link'}
            >
              Sign In
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default PageSignUp

export const PageSignUp2 = () => {
  return (
    <AuthWrapper
      button={'Sign Up'}
      firstLink={'Already have an account?'}
      redirectText={'Send Instructions'}
      secondLink={'Sign In'}
      title={'Sign Up'}
    >
      <div>
        <ul className={s.ul}>
          <li className={s.li}>
            <Input label={'Email'} />
          </li>
          <li className={s.li}>
            <Input label={'Password'} type={'password'} />
          </li>
          <li className={s.li}>
            <Input label={'Confirm Password'} type={'password'} />
          </li>
        </ul>
      </div>
    </AuthWrapper>
  )
}
