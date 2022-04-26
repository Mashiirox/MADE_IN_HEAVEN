import { useState } from 'react';

import Setting from './setting';

import './index.scss';

function PornHub(): JSX.Element {
  const [setting, setSetting] = useState({
    fontSize: 72,
    hubBackgroundColor: '#ff9900',
    pornTextColor: '#ffffff',
    hubTextColor: '#000000',
  });

  const { fontSize, hubBackgroundColor, pornTextColor, hubTextColor } = setting;

  return (
    <div className='ph-page'>
      <div className='w-full pt-10 flex justify-center mb-24'>
        <span className='ph-logo bg-black text-white'>Make</span>
        <span className='ph-logo ph-logo-logo text-black'>Logo</span>
      </div>
      <div className='ph-preview'>
        <div className='ph-preview-box'>
          <div className='ph-view' id='preview'>
            <span
              contentEditable
              suppressContentEditableWarning
              spellCheck={false}
              className='ph-preview-content ph-preview-porn'
              style={{ fontSize, color: pornTextColor }}
            >
              edit&nbsp;
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              spellCheck={false}
              className='ph-preview-content ph-preview-hub'
              style={{ fontSize, color: hubTextColor, backgroundColor: hubBackgroundColor }}
            >
              this
            </span>
          </div>
        </div>
      </div>
      <Setting onChange={(value): void => setSetting(value)} />
    </div>
  );
}

export default PornHub;
