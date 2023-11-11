import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '220px' }}>
      <Button variant={'secondary'}>Normal Button</Button>
      <Button as={'a'} href={'https://www.google.com'}>
        Link to google
      </Button>
      <Button>123</Button>
    </div>
  )
}
