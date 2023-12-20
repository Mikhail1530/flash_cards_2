import { Button } from '@/components/ui/button'
import { TabSwitcher } from '@/components/ui/tabSwitcher'

export function App() {
  return (
    <div>
      <Button variant={'primary'}>Link Button</Button>
      <TabSwitcher buttonsName={['first-btn']} />
    </div>
  )
}
