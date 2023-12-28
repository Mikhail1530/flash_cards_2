import HeaderIcon from '@/assets/icons/headerIcon'
import { Button } from '@/components/ui/button'
import Header from '@/components/ui/header/header'
import s from '@/app.module.scss'
import DesksPage from '@/pages/desksPage/desksPage'

export function App() {
  const isLogedIn = true
  const loginData = isLogedIn ? (
    <div className={s.userProfile}>
      {' '}
      userName{' '}
      <img
        src={
          'https://banner2.cleanpng.com/20180707/puq/kisspng-computer-icons-avatar-clip-art-5b40601d5c8c75.9330992415309455653791.jpg'
        }
        style={{ width: '30px', borderRadius: '30px' }}
      />
    </div>
  ) : (
    <Button className={s.headerButton} style={{ marginLeft: '4%' }}>
      Sign In
    </Button>
  )

  return (
    <>
      <div className={s.appWrap}>
        <Header
          logoImg={<HeaderIcon />}
          logoLink={
            'https://ui-kit.it-incubator.io/?path=/story/components-data-display-card--primary-with-icon'
          }
        >
          {loginData}
        </Header>
        <DesksPage />
      </div>
    </>
  )
}
