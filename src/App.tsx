import MenuIcon from '@/assets/icons/menuIcon.tsx'
import { Button } from '@/components/ui/button'
import CustomDropdownMenu, { MenuItem, MenuSeparator, SubMenu } from "@/components/ui/customDropdownMenu/customDropdownMenu.tsx";
import Header from '@/components/ui/header/header'
import s from '@/components/ui/header/header.module.scss'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import HeaderIcon from '@/assets/icons/headerIcon'

export function App() {
  const isLogedIn=true
  const loginData = (isLogedIn?<div style={{marginLeft:'4%', display:'flex'}}> userName <img src={'https://banner2.cleanpng.com/20180707/puq/kisspng-computer-icons-avatar-clip-art-5b40601d5c8c75.9330992415309455653791.jpg'} style={{width:'30px',borderRadius:'30px'}}/></div> : <Button className={s.headerButton} style={{marginLeft:'4%'}}>Sign In</Button>);


  return (
    <div>
      <Header logoImg={<HeaderIcon />} logoLink={'#'}>
        <CustomDropdownMenu triggerContent={ <Button className={s.btnMenu}><MenuIcon /></Button>}>
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
      {/*<Button variant={'primary'}>Link Button</Button>*/}
      <TabSwitcher buttonsName={['first-btn', 'second-btn', 'last btn']} />
    </div>
  );
}
