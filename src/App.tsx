import { Provider } from 'react-redux'

import HeaderIcon from '@/assets/icons/headerIcon'
import { Button } from '@/components/ui/button'
import CustomDropdownMenu, {
  MenuItem,
  MenuSeparator,
  SubMenu,
} from '@/components/ui/customDropdownMenu/customDropdownMenu'
import Header from '@/components/ui/header/header'
import DesksPage from '@/pages/desksPage/desksPage'
import { store } from '@/services/store'

import s from '@/app.module.scss'

export function App() {
  const isLogedIn = true

  return (
    <Provider store={store}>
      <div className={s.appWrap}>
        <Header
          logoImg={<HeaderIcon />}
          logoLink={
            'https://ui-kit.it-incubator.io/?path=/story/components-data-display-card--primary-with-icon'
          }
        >
          {/*<RadixDropdownMenu />*/}
          {isLogedIn ? (
            <CustomDropdownMenu
              triggerContent={
                <Button className={s.btnMenu}>
                  <img
                    className={s.avatar}
                    src={
                      'https://banner2.cleanpng.com/20180707/puq/kisspng-computer-icons-avatar-clip-art-5b40601d5c8c75.9330992415309455653791.jpg'
                    }
                  />
                </Button>
              }
            >
              <MenuItem path={'/'} shortcut={'⌘ E'}>
                Edit
              </MenuItem>
              <MenuItem path={'/'} shortcut={'⌘ D'}>
                Duplicate
              </MenuItem>
              <MenuSeparator />
              <MenuItem shortcut={'⌘ N'}>Archive</MenuItem>

              <SubMenu triggerContent={<div>More</div>}>
                <MenuItem path={'/'}>Move to project…</MenuItem>
                <MenuItem path={'/'}>Move to folder…</MenuItem>
                <MenuSeparator />
                <MenuItem path={'/'}>Advanced options…</MenuItem>
              </SubMenu>
            </CustomDropdownMenu>
          ) : (
            <Button className={s.headerButton} style={{ marginLeft: '4%' }}>
              Sign In
            </Button>
          )}
        </Header>
        <DesksPage />
      </div>
    </Provider>
  )
}
