import { SVGProps, memo } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement> & { colorFill?: string }) => (
  <svg
    fill={'none'}
    height={24}
    width={24}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}>
    <path
      d="M20.05 11H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95ZM20.05 16H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95ZM20.05 6H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95Z"
      fill={props.colorFill ? props.colorFill : '#000'}
    />
  </svg>
)
const Memo = memo(MenuIcon)

export default Memo
