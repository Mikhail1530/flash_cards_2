import * as React from 'react'

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string
}

const RadioButtonSvg: React.FC<SvgComponentProps> = ({ fillColor = '#8C61FF', ...props }) => (
  <svg
    fill={'none'}
    height={16}
    // viewBox={'0 0 20 20'}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M8 4C5.792 4 4 5.792 4 8s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4Zm0-4C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Zm0 14.4A6.398 6.398 0 0 1 1.6 8c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4Z'
      }
      fill={fillColor}
    />
  </svg>
)

export default RadioButtonSvg
