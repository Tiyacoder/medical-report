import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Body Condition');

  const tabs = [
    { id: 'Basic Information', label: 'Basic Information', completed: true },
    { id: 'Anatomical Information', label: 'Anatomical Information', completed: true },
    { id: 'Body Condition', label: 'Body Condition', completed: false }
  ];

  const tabStyle = {
    padding: '12px 20px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    color: '#666',
    borderBottom: '2px solid transparent',
    position: 'relative'
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#007acc',
    backgroundColor: '#e6f3ff',
    borderBottom: '2px solid #007acc'
  };

  const checkmarkStyle = {
    color: '#28a745',
    fontSize: '12px',
    marginLeft: '8px'
  };

  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #ddd',
    backgroundColor: 'white'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Review</h1>
      <div style={tabsContainerStyle}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={activeTab === tab.id ? activeTabStyle : tabStyle}
          >
            {tab.label}
            {tab.completed && <span style={checkmarkStyle}>✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;