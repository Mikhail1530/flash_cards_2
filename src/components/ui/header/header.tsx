import HeaderIcon from '@/assets/icons/headerIcon'
import { Button } from '@/components/ui/button'

import s from './header.module.scss'
export const Header = () => {
  return (
    <div className={s.header}>
      <HeaderIcon className={s.headerIcon} />
      <Button className={s.headerButton}>Sign In</Button>
    </div>
  )
}
