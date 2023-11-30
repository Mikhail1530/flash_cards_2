import { SVGProps, memo } from 'react'
export const CheckBoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'100%'}
    viewBox={'0 0 18 18'}
    width={'100%'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M16 0H2a1 2 0 00-2 2v14a1 2 0 002 2h14a1 2 0 002-2V2a1 2 0 00-2-2zM7 14L2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const Memo = memo(CheckBoxIcon)

export default Memo
