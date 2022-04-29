import { useRef, useState } from 'react';
import dom2image from 'dom-to-image';

import Setting from './setting';

import './index.scss';

const initialSetting = {
  fontSize: 72,
  hubBackgroundColor: '#ff9900',
  pornTextColor: '#ffffff',
  hubTextColor: '#000000',
};

function PornHub(): JSX.Element {
  const [setting, setSetting] = useState(initialSetting);
  const previewRef = useRef<HTMLDivElement>(null);

  const { fontSize, hubBackgroundColor, pornTextColor, hubTextColor } = setting;

  const handleExport = (): void => {
    dom2image
      .toPng(previewRef.current!)
      .then((dataUrl: string) => {
        const dataImg = new Image();
        dataImg.src = dataUrl;
        const alink = document.createElement('a');
        alink.href = dataImg.src;
        alink.download = 'logo.png';
        alink.click();
      })
      .catch((error: Error) => {
        alert('好像出错了...');
        throw error;
      });
  };

  return (
    <div className='ph-page'>
      <div className='w-full pt-10 flex justify-center mb-24'>
        <span className='ph-logo bg-black text-white'>Porn</span>
        <span className='ph-logo ph-logo-logo'>Hub</span>
      </div>
      <div className='flex justify-center mb-24 text-white text-4xl font-bold'>Just For Fun</div>
      <div className='ph-preview'>
        <div className='ph-preview-box'>
          <div className='ph-view' ref={previewRef}>
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
      <div className='flex justify-center mt-20 pb-20'>
        <div className='ph-export' onClick={handleExport}>
          export
        </div>
      </div>
    </div>
  );
}

export default PornHub;
