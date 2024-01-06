import { AuthWrapper } from '@/components/auth/auth-wrapper/auth-wrapper'
import { Input } from '@/components/ui/input'

const AuthForgotPasswordCreatePass = () => {
  return (
    <AuthWrapper
      button={'Create New Password'}
      labelAbove={'Create new password and we will send you further instructions to email'}
      redirectText={'Send Instructions'}
      title={'Create new password'}
    >
      <div>
        <Input label={'Password'} type={'password'} />
      </div>
    </AuthWrapper>
  )
}

export default AuthForgotPasswordCreatePass
