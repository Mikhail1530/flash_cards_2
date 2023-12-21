import * as React from 'react'

interface SvgComponentProps {
  fillColor?: string
}

const UnSelectedSVGRadioButton: React.FC<SvgComponentProps> = ({ fillColor = '#8C61FF' }) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'}>
    <path
      d={
        'M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Zm0 14.4A6.398 6.398 0 0 1 1.6 8c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4Z'
      }
      fill={fillColor}
    />
  </svg>
)

export default UnSelectedSVGRadioButton
