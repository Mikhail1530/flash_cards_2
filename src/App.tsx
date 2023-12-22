import { RadioButtons } from '@/components/ui/radio-buttons/radio-buttons'
import PageLogin from '@/pages/page-login/page-login'

export function App() {
  return (
    <div>
      <PageLogin />
      <RadioButtons
        option={[
          { isDisabled: false, name: 'Option1', value: 1 },
          { isDisabled: false, name: 'Option2', value: 2 },
        ]}
      />
    </div>
  )
}
