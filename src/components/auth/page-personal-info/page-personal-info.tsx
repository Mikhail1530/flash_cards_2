import img from '@/assets/icons/icon-png/user.png'
import { AuthWrapper } from '@/components/auth/auth-wrapper/auth-wrapper'

import s from '@/components/auth/page-personal-info/page-personal-info.module.scss'

const PagePersonalInfo = () => {
  return (
    <AuthWrapper
      button={'Logout'}
      buttonStyle={'secondary'}
      labelAbove={'j&johnson@gmail.com'}
      labelAboveStyle={s.label}
      redirectText={'Send Instructions'}
      title={'Personal Information'}
    >
      <div className={s.img}>
        <img alt={'Your Image'} className={s.yourImageClass} src={img} />
      </div>
    </AuthWrapper>
  )
}

export default PagePersonalInfo
