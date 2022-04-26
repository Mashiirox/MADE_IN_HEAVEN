import { useEffect, useState } from 'react';

import './index.scss';

interface IProps {
  onChange: (value: IOnChange) => void;
}

interface IOnChange {
  fontSize: number;
  hubBackgroundColor: string;
  pornTextColor: string;
  hubTextColor: string;
}

function Setting({ onChange }: IProps): JSX.Element {
  const [fontSize, setFontSize] = useState(72);
  const [hubBackgroundColor, setHubBackgroundColor] = useState('#ff9900');
  const [pornTextColor, setPornTextColor] = useState('#ffffff');
  const [hubTextColor, setHubTextColor] = useState('#000000');

  useEffect(() => {
    onChange({ fontSize, hubBackgroundColor, pornTextColor, hubTextColor });
  }, [fontSize, hubBackgroundColor, pornTextColor, hubTextColor]);

  return (
    <div className='flex justify-center items-center'>
      <div className='ph-setting'>
        <div className='ph-setting-content'>
          <input
            type='range'
            min='30'
            max='180'
            value={fontSize}
            onChange={(e): void => setFontSize(parseInt(e.target.value))}
          />
          <span className='ml-2'>{fontSize}&nbsp;px</span>
        </div>
        <div className='ph-setting-content'>
          <span className='mr-2'>suffix background</span>
          <input
            type='color'
            value={hubBackgroundColor}
            onChange={(e): void => setHubBackgroundColor(e.target.value)}
          />
        </div>
        <div className='ph-setting-content'>
          <span className='mr-2'>prefix text color</span>
          <input
            type='color'
            value={pornTextColor}
            onChange={(e): void => setPornTextColor(e.target.value)}
          />
        </div>
        <div className='ph-setting-content'>
          <span className='mr-2'>suffix text color</span>
          <input
            type='color'
            value={hubTextColor}
            onChange={(e): void => setHubTextColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Setting;
