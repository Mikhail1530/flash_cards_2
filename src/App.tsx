import HeaderIcon from '@/assets/icons/headerIcon'
import MenuIcon from '@/assets/icons/menuIcon.tsx'
import { Button } from '@/components/ui/button'
import CustomDropdownMenu, { MenuItem, MenuSeparator, SubMenu } from "@/components/ui/customDropdownMenu/customDropdownMenu.tsx";
import Header from '@/components/ui/header/header'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import s from './app.module.scss'

import PageLogin from "@/pages/page-login/page-login";

export function App() {
  const isLogedIn=false
  const loginData = (isLogedIn?
    <div className={s.userProfile}> userName <img src={'https://banner2.cleanpng.com/20180707/puq/kisspng-computer-icons-avatar-clip-art-5b40601d5c8c75.9330992415309455653791.jpg'} style={{width:'30px',borderRadius:'30px'}}/></div>
    : <Button className={s.headerButton} style={{marginLeft:'4%'}}>Sign In</Button>);


  return (
    <div className={s.appWrap}>
      <Header logoImg={<HeaderIcon />} logoLink={'#'}>
        <CustomDropdownMenu
          triggerContent={
            <Button className={s.btnMenu}>
              <MenuIcon />
            </Button>
          }
        >
          <MenuItem shortcut={'⌘ E'}>Edit</MenuItem>
          <MenuItem shortcut={'⌘ D'}>Duplicate</MenuItem>
          <MenuSeparator />
          <MenuItem shortcut={'⌘ N'}>Archive</MenuItem>

          <SubMenu triggerContent={<div>More</div>}>
            <MenuItem>Move to project…</MenuItem>
            <MenuItem>Move to folder…</MenuItem>
            <MenuSeparator />
            <MenuItem>Advanced options…</MenuItem>
          </SubMenu>
        </CustomDropdownMenu>
        {loginData}
      </Header>


      <PageLogin/>
    </div>
  );
}
