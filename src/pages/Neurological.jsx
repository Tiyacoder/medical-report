import React, { useState } from 'react';

// Mock Redux hooks with dynamic state
const useSelector = (selector) => {
  const [state] = useState({
    neurological: {
      superficialReflexes: '',
      deepReflexes: '',
      peripheralCirculation: '',
      vibrationalSyndromes: ''
    },
    neurologicalDisturbances: {
      speechDefect: '',
      emotionalChanges: '',
      tremor: '',
      adiadocokinesia: '',
      behaviourDisturbance: ''
    }
  });
  return selector(state);
};

const useDispatch = () => (action) => console.log('Dispatching:', action);

// Action creators
const updateNeurological = (data) => ({ type: 'UPDATE_NEUROLOGICAL', payload: data });
const updateNeurologicalDisturbances = (data) => ({ type: 'UPDATE_NEUROLOGICAL_DISTURBANCES', payload: data });

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto'
      }}>
        {children}
      </div>
    </div>
  );
};

// Drawer Component
const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-400px',
      width: '400px',
      height: '100vh',
      backgroundColor: 'white',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
      transition: 'right 0.3s ease',
      zIndex: 1000,
      overflow: 'auto'
    }}>
      {children}
    </div>
  );
};

// Neurological Form Component
const NeurologicalForm = ({ onClose, onSaveNeurological, onSaveDisturbances }) => {
  const neurologicalData = useSelector(state => state.neurological);
  const disturbancesData = useSelector(state => state.neurologicalDisturbances);
  
  const [formData, setFormData] = useState({
    ...neurologicalData,
    ...disturbancesData
  });
  
  const handleSubmit = () => {
    // Save neurological data
    onSaveNeurological({
      superficialReflexes: formData.superficialReflexes,
      deepReflexes: formData.deepReflexes,
      peripheralCirculation: formData.peripheralCirculation,
      vibrationalSyndromes: formData.vibrationalSyndromes
    });
    
    // Save disturbances data (excluding behaviourDisturbance)
    onSaveDisturbances({
      speechDefect: formData.speechDefect,
      emotionalChanges: formData.emotionalChanges,
      tremor: formData.tremor,
      adiadocokinesia: formData.adiadocokinesia,
      behaviourDisturbance: formData.behaviourDisturbance || ''
    });
    
    onClose();
  };
  
  const neurologicalFields = [
    { key: 'superficialReflexes', label: 'Superficial Reflexes' },
    { key: 'deepReflexes', label: 'Deep Reflexes' },
    { key: 'peripheralCirculation', label: 'Peripheral circulation' },
    { key: 'vibrationalSyndromes', label: 'Vibrational Syndromes' }
  ];

  const disturbanceFields = [
    { key: 'speechDefect', label: 'Speech Defect' },
    { key: 'emotionalChanges', label: 'Emotional Changes' },
    { key: 'tremor', label: 'Tremor' },
    { key: 'adiadocokinesia', label: 'Adiadocokinesia' }
  ];
  
  return (
    <div style={{ padding: '12px', height: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h2 style={{ color: '#1E1E1E', fontSize: '14px', margin: 0, fontWeight: '500' }}>Neurological</h2>
        <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', color: '#666' }}>×</button>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ color: '#09A2E3', fontSize: '12px', margin: '0 0 6px 0', fontWeight: '500' }}>Neurological Assessment</h3>
          
          {neurologicalFields.map(field => (
            <div key={field.key} style={{ marginBottom: '10px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '2px', 
                fontWeight: '500', 
                color: '#1E1E1E', 
                fontSize: '11px' 
              }}>
                {field.label}
              </label>
              <textarea
                value={formData[field.key] || ''}
                onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                style={{
                  width: '100%',
                  padding: '4px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  resize: 'none',
                  height: '32px',
                  boxSizing: 'border-box',
                  fontSize: '11px',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          ))}
        </div>
        
        <div>
          <h3 style={{ color: '#09A2E3', fontSize: '12px', margin: '0 0 6px 0', fontWeight: '500' }}>Neurological Disturbances</h3>
          
          {disturbanceFields.map(field => (
            <div key={field.key} style={{ marginBottom: '10px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '2px', 
                fontWeight: '500', 
                color: '#1E1E1E', 
                fontSize: '11px' 
              }}>
                {field.label}
              </label>
              <textarea
                value={formData[field.key] || ''}
                onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                style={{
                  width: '100%',
                  padding: '4px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  resize: 'none',
                  height: '32px',
                  boxSizing: 'border-box',
                  fontSize: '11px',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px', flexShrink: 0 }}>
        <button onClick={handleSubmit} style={{
          backgroundColor: '#09A2E3',
          color: 'white',
          padding: '6px 16px',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          fontSize: '11px',
          fontWeight: '500'
        }}>
          Save
        </button>
      </div>
    </div>
  );
};

// Behaviour Disturbance Form Component
const BehaviourForm = ({ onClose, onSave }) => {
  const disturbancesData = useSelector(state => state.neurologicalDisturbances);
  const [formData, setFormData] = useState(disturbancesData);
  
  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#1E1E1E', fontSize: '18px', margin: 0 }}>Behaviour Disturbance</h2>
        <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#666' }}>×</button>
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1E1E1E', fontSize: '14px' }}>
          Behaviour Disturbance
        </label>
        <textarea
          value={formData.behaviourDisturbance || ''}
          onChange={(e) => setFormData({...formData, behaviourDisturbance: e.target.value})}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            resize: 'vertical',
            minHeight: '120px',
            boxSizing: 'border-box'
          }}
        />
      </div>
      
      <button onClick={handleSubmit} style={{
        backgroundColor: '#09A2E3',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        float: 'right'
      }}>
        Save
      </button>
    </div>
  );
};

const Neurological = () => {
  const [neurologicalData, setNeurologicalData] = useState({
    superficialReflexes: '',
    deepReflexes: '',
    peripheralCirculation: '',
    vibrationalSyndromes: ''
  });
  
  const [disturbancesData, setDisturbancesData] = useState({
    speechDefect: '',
    emotionalChanges: '',
    tremor: '',
    adiadocokinesia: '',
    behaviourDisturbance: ''
  });
  
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const getDisplayText = (data, key) => {
    return data[key] || '—';
  };

  return (
    <div style={{ padding: '20px', width: '100%', maxWidth: '2000px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Neurological Assessment Section */}
      <div style={{
        display: 'flex',
        padding: '16px',
        flexDirection: 'column',
        gap: '16px',
        borderRadius: '6px',
        border: '1px solid rgba(183, 200, 229, 0.50)',
        background: '#FFF',
        cursor: 'pointer',
        minHeight: '240px',
        width: '100%'
      }}
      onClick={() => setDrawerOpen(true)}>
        <div style={{
          color: '#1E1E1E',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '20px'
        }}>
          Neurological Assessment
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
          <div style={{
            flex: '1',
            borderRadius: '6px',
            background: 'rgba(9, 162, 227, 0.10)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Superficial Reflexes
            </div>
            <div style={{
              color: neurologicalData.superficialReflexes ? '#000' : '#818181',
              fontFamily: 'Roboto',
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '18px',
              flex: 1
            }}>
              {getDisplayText(neurologicalData, 'superficialReflexes')}
            </div>
          </div>
          
          <div style={{
            flex: '1',
            borderRadius: '6px',
            background: '#09A2E3',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Deep Reflexes
            </div>
            <div style={{
              color: neurologicalData.deepReflexes ? '#000' : '#FFF',
              fontFamily: 'Roboto',
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '18px',
              flex: 1
            }}>
              {getDisplayText(neurologicalData, 'deepReflexes')}
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
          <div style={{
            flex: '1',
            borderRadius: '6px',
            background: '#09A2E3',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              color: '#FFF',
              fontFamily: 'Roboto',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Peripheral Circulation
            </div>
            <div style={{
              color: neurologicalData.peripheralCirculation ? '#000' : '#FFF',
              fontFamily: 'Roboto',
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '18px',
              flex: 1
            }}>
              {getDisplayText(neurologicalData, 'peripheralCirculation')}
            </div>
          </div>
          
          <div style={{
            flex: '1',
            borderRadius: '6px',
            background: 'rgba(9, 162, 227, 0.10)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Vibrational Syndromes
            </div>
            <div style={{
              color: neurologicalData.vibrationalSyndromes ? '#000' : '#818181',
              fontFamily: 'Roboto',
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '18px',
              flex: 1
            }}>
              {getDisplayText(neurologicalData, 'vibrationalSyndromes')}
            </div>
          </div>
        </div>
      </div>

      {/* Neurological Disturbances Section */}
      <div style={{
        display: 'flex',
        padding: '16px',
        flexDirection: 'column',
        gap: '16px',
        borderRadius: '6px',
        border: '1px solid rgba(183, 200, 229, 0.50)',
        background: '#FFF',
        cursor: 'pointer',
        minHeight: '240px',
        width: '100%'
      }}
      onClick={() => setModalOpen(true)}>
        <div style={{
          color: '#1E1E1E',
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '16px'
        }}>
          Neurological Disturbances
        </div>
        
        <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '2' }}>
            <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
              <div style={{
                flex: '1',
                borderRadius: '6px',
                background: 'rgba(9, 162, 227, 0.10)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  color: '#1E1E1E',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Speech Defect
                </div>
                <div style={{
                  color: disturbancesData.speechDefect ? '#000' : '#818181',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '16px',
                  flex: 1
                }}>
                  {getDisplayText(disturbancesData, 'speechDefect')}
                </div>
              </div>
              
              <div style={{
                flex: '1',
                borderRadius: '6px',
                background: '#09A2E3',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Emotional Changes
                </div>
                <div style={{
                  color: disturbancesData.emotionalChanges ? '#000' : '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '16px',
                  flex: 1
                }}>
                  {getDisplayText(disturbancesData, 'emotionalChanges')}
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
              <div style={{
                flex: '1',
                borderRadius: '6px',
                background: '#09A2E3',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  color: '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Tremor
                </div>
                <div style={{
                  color: disturbancesData.tremor ? '#000' : '#FFF',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '16px',
                  flex: 1
                }}>
                  {getDisplayText(disturbancesData, 'tremor')}
                </div>
              </div>
              
              <div style={{
                flex: '1',
                borderRadius: '6px',
                background: 'rgba(9, 162, 227, 0.10)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  color: '#1E1E1E',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  Adiadocokinesia
                </div>
                <div style={{
                  color: disturbancesData.adiadocokinesia ? '#000' : '#818181',
                  fontFamily: 'Roboto',
                  fontSize: '12px',
                  fontWeight: '400',
                  lineHeight: '16px',
                  flex: 1
                }}>
                  {getDisplayText(disturbancesData, 'adiadocokinesia')}
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            flex: '1',
            borderRadius: '6px',
            background: 'rgba(9, 162, 227, 0.10)',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              Behaviour Disturbance
            </div>
            <div style={{
              color: disturbancesData.behaviourDisturbance ? '#000' : '#818181',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: '400',
              lineHeight: '16px',
              flex: 1
            }}>
              {getDisplayText(disturbancesData, 'behaviourDisturbance')}
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for Neurological Assessment */}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <NeurologicalForm 
          onClose={() => setDrawerOpen(false)} 
          onSaveNeurological={setNeurologicalData}
          onSaveDisturbances={setDisturbancesData}
        />
      </Drawer>

      {/* Modal for Behaviour Disturbance */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <BehaviourForm 
          onClose={() => setModalOpen(false)} 
          onSave={setDisturbancesData}
        />
      </Modal>
      
      {/* Overlay for drawer */}
      {drawerOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default Neurological;