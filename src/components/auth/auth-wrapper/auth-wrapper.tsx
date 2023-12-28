import { Button, ButtonProps } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import s from '@/components/auth/auth-wrapper/auth-wrapper.module.scss'

type CustomComponentProps = {
  button: string
  buttonStyle?: ButtonProps['variant']
  children: React.ReactNode
  firstLink?: string
  labelAbove?: string
  labelAboveStyle?: string
  redirectText: string
  secondLink?: string
  title: string
}
const linkHref = 'https://www.google.com/'

export const AuthWrapper = (props: CustomComponentProps) => {
  return (
    <div className={s.wrapperCard}>
      <Card className={s.intoAuthCard}>
        <h1 className={s.h1}>{props.title}</h1>
        <div style={{ width: '100%' }}>
          {props.children}
          {props.labelAbove && (
            <label className={s.label + ' ' + props.labelAboveStyle}>{props.labelAbove}</label>
          )}
          <div className={s.footer}>
            <Button
              className={s.button}
              variant={props.buttonStyle ? props.buttonStyle : 'primary'}
            >
              {props.button}
            </Button>
            {props.firstLink && (
              <Button
                as={'a'}
                className={`${s.link} ${s.dontHaveAccount}`}
                href={linkHref}
                rel={'noopener nopener'}
                target={'_blank'}
                variant={'link'}
              >
                {props.firstLink}
              </Button>
            )}
            {props.secondLink && (
              <div className={s.underlineLinkWrapper}>
                <Button
                  as={'a'}
                  className={s.underlineLink}
                  href={linkHref}
                  rel={'noopener nopener'}
                  target={'_blank'}
                  variant={'link'}
                >
                  {props.secondLink}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
