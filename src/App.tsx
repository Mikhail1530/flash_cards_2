import { Button } from '@/components/ui/button'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import {SignIn} from "@/features/auth/signIn";
import PageLogin from "@/pages/page-login";

export function App() {
  return (
    <div>
      {/*<Button variant={'primary'}>Link Button</Button>*/}
      {/*<TabSwitcher buttonsName={['first-btn']} />*/}
        <PageLogin/>
    </div>
  )
}
