import React from 'react';

const BasicInfoPanel = () => {
  const sectionStyle = {
    display: 'flex',
    padding: '16px',
    alignItems: 'center',
    alignContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    borderRadius: '6px',
    border: '1px solid rgba(183, 200, 229, 0.50)',
    background: '#FFF'
  };

  const titleStyle = {
    color: '#1E1E1E',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '16px',
    marginBottom: '16px'
  };

  const labelStyle = {
    color: '#7A8699',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    marginBottom: '4px'
  };

  const valueStyle = {
    color: '#09A2E3',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '20px'
  };

  const dataItem = (label, value) => (
    <div style={{ minWidth: '120px' }}>
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      {/* Top Row */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Basic Information */}
        <div style={{ ...sectionStyle, flex: '1 0 0', paddingTop: '12px', paddingBottom: '12px', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={titleStyle}>Basic Information</div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                {dataItem('Weight', '85 kg')}
                {dataItem('Height', '176 Cm')}
                {dataItem('Glucose Level', '230/ml')}
              </div>
              <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                {dataItem('Blood Pressure', '120/80')}
                {dataItem('Heartbeat', '83bpm')}
                {dataItem('Blood Count', '80-90')}
              </div>
            </div>
          </div>
        </div>

        {/* Urinalysis */}
        <div style={{ ...sectionStyle, flex: '1 0 0', paddingTop: '12px', paddingBottom: '12px', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={titleStyle}>Urinalysis</div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {dataItem('Albumin', '45 mg')}
              {dataItem('Sugar', '120')}
              <div style={{ width: '100%' }}>
                <div style={labelStyle}>Reaction</div>
                <div style={{
                  ...valueStyle,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  Lorem ipsum dolor sit amet amet amet amet met amet consectetur...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pathological */}
      <div style={{ ...sectionStyle, alignSelf: 'stretch' }}>
        <div style={{ width: '100%' }}>
          <div style={titleStyle}>Pathological</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {dataItem('Blood (Hb)', '85')}
            {dataItem('Blood (ESR)', '85')}
            {dataItem('Blood (Platelets)', '85')}
            {dataItem('Blood Sugar PP', '120/80')}
            {dataItem('Blood Sugar Fasting', '85')}
            {dataItem('Lupid Profile', '80')}
            {dataItem('Blood Urea', '90')}
            {dataItem('Creatinine / LFT', '80-90')}
            {dataItem('Urine Routine', '15')}
            {dataItem('Stool Routine', '5')}
          </div>
        </div>
      </div>

      {/* Physical Characteristics */}
      <div style={{ ...sectionStyle, alignSelf: 'stretch' }}>
        <div style={{ width: '100%' }}>
          <div style={titleStyle}>Physical Characteristics</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {/* Identification Mark */}
            <div style={{
              flex: '1',
              alignSelf: 'stretch',
              borderRadius: '6px',
              background: '#E8F4FB',
              padding: '20px'
            }}>
              <div style={{
                color: '#1E1E1E',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: 'normal',
                marginBottom: '12px'
              }}>
                Identification Mark
              </div>
              <div style={{
                color: '#818181',
                fontFamily: 'Roboto',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>
                Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
              </div>
            </div>

            {/* General Development */}
            <div style={{
              flex: '1',
              alignSelf: 'stretch',
              borderRadius: '6px',
              background: '#09A2E3',
              padding: '20px'
            }}>
              <div style={{
                color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: 'normal',
                marginBottom: '12px'
              }}>
                General Development
              </div>
              <div style={{
                color: '#FFF',
                fontFamily: 'Roboto',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '1.4'
              }}>
                Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoPanel;