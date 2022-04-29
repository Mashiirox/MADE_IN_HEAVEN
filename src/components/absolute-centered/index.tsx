import { ReactNode, CSSProperties } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

const style: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

function AbsoluteCentered({ className = '', children }: IProps): JSX.Element {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}

export default AbsoluteCentered;
