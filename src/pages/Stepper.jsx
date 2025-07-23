import React from 'react';

const Stepper = () => {
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white"/>
      <path d="M11.9961 1.99998C6.48611 1.99998 1.99609 6.48998 1.99609 12C1.99609 17.51 6.48609 22 11.9961 22C17.5061 22 21.9961 17.51 21.9961 12C21.9961 6.48998 17.5061 1.99998 11.9961 1.99998ZM16.7761 9.7L11.1061 15.37C10.9661 15.51 10.7761 15.59 10.5761 15.59C10.3761 15.59 10.1861 15.51 10.0461 15.37L7.21612 12.54C6.92612 12.25 6.92612 11.77 7.21612 11.48C7.50611 11.19 7.98611 11.19 8.27612 11.48L10.5761 13.78L15.7161 8.63997C16.0061 8.34998 16.4861 8.34998 16.7761 8.63997C17.0661 8.92996 17.0661 9.39998 16.7761 9.69998L16.7761 9.7Z" fill="#0DAF51"/>
    </svg>
  );

  const DashedLine = () => (
    <div style={{ flex: '1 0 0', display: 'flex', alignItems: 'center', margin: '0 8px', height: '20px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="4" viewBox="0 0 193 6" fill="none" preserveAspectRatio="none">
        <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM187 3C187 4.47276 188.194 5.66667 189.667 5.66667C191.139 5.66667 192.333 4.47276 192.333 3C192.33 1.52724 191.139 0.333333 189.667 0.333333C188.194 0.333333 187 1.52724 187 3ZM3 3V3.5H5.91667V3V2.5H3V3ZM11.75 3V3.5H17.5833V3V2.5H11.75V3ZM23.4167 3V3.5H29.25V3V2.5H23.4167V3ZM35.0833 3V3.5H40.9167V3V2.5H35.0833V3ZM46.75 3V3.5H52.5833V3V2.5H46.75V3ZM58.4167 3V3.5H64.25V3V2.5H58.4167V3ZM70.0833 3V3.5H75.9167V3V2.5H70.0833V3ZM81.75 3V3.5H87.5833V3V2.5H81.75V3ZM93.4167 3V3.5H99.25V3V2.5H93.4167V3ZM105.083 3V3.5H110.917V3V2.5H105.083V3ZM116.75 3V3.5H122.583V3V2.5H116.75V3ZM128.417 3V3.5H134.25V3V2.5H128.417V3ZM140.083 3V3.5H145.917V3V2.5H140.083V3ZM151.75 3V3.5H157.583V3V2.5H151.75V3ZM163.417 3V3.5H169.25V3V2.5H163.417V3ZM175.083 3V3.5H180.917V3V2.5H175.083V3ZM186.75 3V3.5H189.667V3V2.5H186.75V3Z" fill="#09A2E3"/>
      </svg>
    </div>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0px', padding: '12px', fontFamily: 'Roboto, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CheckIcon />
        <span style={{ color: '#1E1E1E', fontSize: '13px', fontWeight: '500', opacity: '0.5' }}>Basic Information</span>
      </div>
      
      <DashedLine />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CheckIcon />
        <span style={{ color: '#1E1E1E', fontSize: '13px', fontWeight: '500', opacity: '0.5' }}>Anatomical Information</span>
      </div>
      
      <DashedLine />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CheckIcon />
        <span style={{ color: '#1E1E1E', fontSize: '13px', fontWeight: '500', opacity: '0.5' }}>Body Fitness</span>
      </div>
      
      <DashedLine />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ display: 'flex', width: '20px', height: '20px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '1px solid #09A2E3', background: '#09A2E3' }}>
          <span style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '11px', fontWeight: '600' }}>4</span>
        </div>
        <span style={{ color: '#09A2E3', fontSize: '13px', fontWeight: '500' }}>Review</span>
      </div>
    </div>
  );
};

export default Stepper;