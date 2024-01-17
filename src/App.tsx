import { Provider } from 'react-redux'

import HeaderIcon from '@/assets/icons/headerIcon'
import { Header } from '@/components/ui/header'
import { RadioGroup } from '@/components/ui/radio-group/index'
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
      <RadioGroup
        option={[
          { isDisabled: false, name: 'Option1', value: 1 },
          { isDisabled: false, name: 'Option2', value: 1 },
        ]}
        variant={'Enable'}
      />
    </Provider>
  )
}
