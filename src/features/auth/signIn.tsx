import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './signIn.module.scss'
export const SignIn = () => {
  return (
    <Card className={s.form}>
      <Typography as={'h1'} className={s.label} variant={'h1'}>
        Sign In
      </Typography>
      <Input label={'Email'} type={'email'} />
      <Input label={'Password'} type={'password'} />
      <CheckBox label={'Remember Me'} />
      <Typography as={'p'} className={s.caption} variant={'caption'}>
        Forgot Password?
      </Typography>
      <Button>Sign In</Button>
      <Typography as={'p'} className={s.caption} variant={'caption'}>
        Do not have an account?
      </Typography>
      <Button as={'a'} variant={'link'}>
        Sign Up
      </Button>
    </Card>
  )
}
