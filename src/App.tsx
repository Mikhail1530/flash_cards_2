import { Provider } from 'react-redux'

import HeaderIcon from '@/assets/icons/headerIcon'
import { Header } from '@/components/ui/header'
import { RadioButtons } from '@/components/ui/radio-buttons/index'
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
      <RadioButtons
        option={[
          { isDisabled: false, name: 'Option1', value: 1 },
          { isDisabled: false, name: 'Option2', value: 1 },
        ]}
        variant={'Enable'}
      />
    </Provider>
  )
}
