import { Provider } from 'react-redux'

import HeaderIcon from '@/assets/icons/headerIcon'
import Header from '@/components/ui/header/header'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Header
        isAuth
        logoImg={<HeaderIcon />}
        logoLink={'https://www.google.com/imghp?hl=en'}
      ></Header>
      <Router />
    </Provider>
  )
}
