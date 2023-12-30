import logOut from '@/assets/icons/icon-png/logOut.png'
import personOutline from '@/assets/icons/icon-png/personOutline.png'
import img from '@/assets/icons/icon-png/user.png'
import CustomDropdownMenu, { MenuItem } from '@/components/ui/customDropdownMenu/customDropdownMenu'
import { Typography } from '@/components/ui/typography'

import s from './dropdownMenuAvatar.module.scss'

const DropdownMenuAvatar = () => {
  return (
    <CustomDropdownMenu
      triggerContent={
        <div className={s.avatarWrapper}>
          <img alt={'Your Image'} className={s.yourImageClass} src={img} />
        </div>
      }
    >
      <MenuItem>
        <div className={s.firstItem}>
          <img alt={'User Avatar'} className={s.avatarWrapperSecond} src={img} />
          <div className={s.nameEmail}>
            <Typography className={s.name} variant={'subtitle1'}>
              Ivan
            </Typography>
            <Typography className={s.email} variant={'subtitle1'}>
              j&johnson@gmail.com
            </Typography>
          </div>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={s.simpleItem}>
          <img alt={'Person Outline'} src={personOutline} />
          <div>My Profile</div>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={s.simpleItem}>
          <img alt={'Person Outline'} src={logOut} />
          <div>Sign Out</div>
        </div>
      </MenuItem>
    </CustomDropdownMenu>
  )
}

export default DropdownMenuAvatar
