import React from 'react';

const LeftReviewPanel = () => {
  const containerStyle = {
    padding: '16px',
    fontFamily: 'Roboto, sans-serif',
    maxWidth: '400px',
    border: '2px solid #B7C8E580',
    borderRadius: '8px'
  };
  
  const titleStyle = {
    color: '#1E1E1E',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '18px',
    marginBottom: '16px'
  };
  
  const lightBoxStyle = {
    borderRadius: '6px',
    background: 'rgba(9, 162, 227, 0.10)',
    padding: '20px',
    marginBottom: '20px'
  };
  
  const blueBoxStyle = {
    borderRadius: '6px',
    background: '#09A2E3',
    padding: '20px',
    marginBottom: '20px'
  };
  
  const sectionTitleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: 'normal',
    marginBottom: '8px'
  };
  
  const darkSectionTitle = { ...sectionTitleStyle, color: '#1E1E1E' };
  const whiteSectionTitle = { ...sectionTitleStyle, color: '#FFF' };
  
  const textStyle = {
    color: '#818181',
    fontSize: '11px',
    fontWeight: '400',
    lineHeight: '1.3'
  };
  
  const whiteTextStyle = { ...textStyle, color: '#FFF' };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Observations & Special Instructions</div>
      
      <div style={lightBoxStyle}>
        <div style={darkSectionTitle}>Any Special Test Required</div>
        <div style={textStyle}>
          Lorem ipsum dolor sit amet consectetur.<br/>
          lorem proin enim pretium nisi quis.
        </div>
      </div>
      
      <div style={blueBoxStyle}>
        <div style={whiteSectionTitle}>Any Opinion of Specialist Considered Necessary</div>
        <div style={whiteTextStyle}>
          Lorem ipsum dolor sit amet consectetur.<br/>
          lorem proin enim pretium nisi quis.
        </div>
      </div>
      
      <div style={lightBoxStyle}>
        <div style={darkSectionTitle}>Any Other Test Considered Necessary by Examining Authority</div>
        <div style={textStyle}>
          Lorem ipsum dolor sit amet consectetur. lorem proin enim pretium nisi quis.
        </div>
      </div>
      
      <div style={blueBoxStyle}>
        <div style={whiteSectionTitle}>Remarks</div>
        <div style={whiteTextStyle}>
          Lorem ipsum dolor sit amet consectetur. lorem proin enim pretium nisi quis.
        </div>
      </div>
    </div>
  );
};

export default LeftReviewPanel;