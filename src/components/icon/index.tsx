import React, { ForwardedRef, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  color?: string;
  size?: number;
}

function Icon(
  { name, color, style, size = 16, ...props }: IconProps,
  ref?: ForwardedRef<SVGSVGElement>
): JSX.Element {
  const _style: React.CSSProperties = {
    ...style,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <svg {...props} ref={ref} style={_style}>
      <use href={`#${name}`} fill={color} />
    </svg>
  );
}

export default React.forwardRef<SVGSVGElement, IconProps>(Icon);
