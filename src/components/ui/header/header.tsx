import HeaderIcon from '@/assets/icons/headerIcon'
import { Button } from '@/components/ui/button'

import s from './header.module.scss'
export const Header = () => {
  return (
    <div className={s.header}>
      <HeaderIcon />
      <div className={s.buttonWrap}>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}
