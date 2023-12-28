import img from '@/assets/icons/icon-png/Email.png'
import { AuthWrapper } from '@/components/auth/auth-wrapper/auth-wrapper'

import s from './auth-fogot-password-check-email.module.scss'

const AuthFogotPasswordCheckEmail = () => {
  return (
    <AuthWrapper
      button={'Back to Sign In'}
      labelAbove={'We’ve sent an Email with instructions to example@mail.com'}
      redirectText={'Send Instructions'}
      title={'Check Email'}
    >
      <div className={s.img}>
        <img alt={'Your Image'} className={s.yourImageClass} src={img} />
      </div>
    </AuthWrapper>
  )
}

export default AuthFogotPasswordCheckEmail
