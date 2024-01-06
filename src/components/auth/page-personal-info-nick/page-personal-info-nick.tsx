import img from '@/assets/icons/icon-png/user.png'
import { AuthWrapper } from '@/components/auth/auth-wrapper/auth-wrapper'
import { Input } from '@/components/ui/input'

import s from '@/components/auth/page-personal-info-nick/page-personal-info-nick.module.scss'

const PagePersonalInfo = () => {
  return (
    <AuthWrapper
      button={'Save Changes'}
      redirectText={'Send Instructions'}
      title={'Personal Information'}
    >
      <div className={s.inputWraper}>
        <img alt={'Your Image'} src={img} />
        <Input label={'Nickname'} type={'password'} />
      </div>
    </AuthWrapper>
  )
}

export default PagePersonalInfo
