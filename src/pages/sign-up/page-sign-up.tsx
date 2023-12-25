import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './page-sign-up.module.scss'

type FormValues = {
  confirmPassword: string
  email: string
  password: string
}
const loginSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, { message: 'Too short password' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  })

export const PageSignUp = () => {
  const linkHref = 'https://www.google.com/'
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
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
                error={errors.email?.message}
                label={'Email'}
                type={'email'}
                {...register('email')}
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
          <div className={s.linkButton}>
            <Button
              as={'a'}
              className={`${s.link} ${s.alreadyHaveAccount}`}
              href={linkHref}
              rel={'noopener nopener'}
              target={'_blank'}
              variant={'link'}
            >
              Already have an account?
            </Button>
          </div>
          <div className={s.underlineLinkWrapper}>
            <Button
              as={'a'}
              className={s.underlineLink}
              href={linkHref}
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
