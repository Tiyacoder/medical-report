import React, { useState } from 'react';

// Redux Actions
const updateVisionData = (section, data) => ({ type: 'UPDATE_VISION_DATA', payload: { section, data } });

const Vision = () => {
  // State management
  const [globalState, setGlobalState] = useState({
    vision: {
      leftEar: 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur...',
      rightEar: 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur...',
      organicDisease: 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.',
      squintPerformed: 'Yes',
      squintRemarks: 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.',
      distantVisionLeft: '-1D',
      distantVisionRight: '2.5D',
      nearVisionLeft: '-1D',
      nearVisionRight: '2.5D'
    }
  });

  const useSelector = (selector) => selector(globalState);
  const useDispatch = () => (action) => {
    if (action.type === 'UPDATE_VISION_DATA') {
      setGlobalState(prev => ({
        ...prev,
        vision: { ...prev.vision, ...action.payload.data }
      }));
    }
  };

  const dispatch = useDispatch();
  const visionData = useSelector(state => state.vision);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const openDrawer = () => {
    setFormData({
      nightBlindness: '',
      colorBlindness: '',
      organicDisease: '',
      distantVisionLeft: '',
      distantVisionRight: '',
      nearVisionLeft: '',
      nearVisionRight: ''
    });
    setDrawerOpen(true);
  };

  const openModal = () => {
    setFormData({ 
      squintPerformed: '',
      squintRemarks: ''
    });
    setModalOpen(true);
  };

  const handleSaveDrawer = () => {
    dispatch(updateVisionData('visionCondition', formData));
    setDrawerOpen(false);
  };

  const handleSaveModal = () => {
    dispatch(updateVisionData('squint', formData));
    setModalOpen(false);
  };

  const styles = {
    container: {
      display: 'flex',
      gap: '16px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      padding: '18px',
      cursor: 'pointer'
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#333'
    },
    earSection: {
      display: 'flex',
      gap: '8px',
      marginBottom: '12px'
    },
    leftEar: {
      backgroundColor: '#e3f2fd',
      padding: '7px',
      borderRadius: '5px',
      flex: 1
    },
    rightEar: {
      backgroundColor: '#2196f3',
      color: 'white',
      padding: '7px',
      borderRadius: '5px',
      flex: 1
    },
    earTitle: {
      fontSize: '12px',
      fontWeight: '600',
      marginBottom: '5px'
    },
    earText: {
      fontSize: '10px',
      opacity: 0.7,
      lineHeight: '1.25'
    },
    organicDisease: {
      backgroundColor: '#e3f2fd',
      padding: '7px',
      borderRadius: '5px'
    },
    squintRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    squintLabel: {
      fontSize: '14px',
      fontWeight: '500'
    },
    buttonGroup: {
      display: 'flex'
    },
    yesBtn: {
      backgroundColor: visionData.squintPerformed === 'Yes' ? '#2196f3' : '#f5f5f5',
      color: visionData.squintPerformed === 'Yes' ? 'white' : '#333',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '4px 0 0 4px',
      fontSize: '12px',
      fontWeight: '600'
    },
    noBtn: {
      backgroundColor: visionData.squintPerformed === 'No' ? '#2196f3' : '#f5f5f5',
      color: visionData.squintPerformed === 'No' ? 'white' : '#333',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '0 4px 4px 0',
      fontSize: '12px',
      fontWeight: '600'
    },
    remarks: {
      backgroundColor: '#e3f2fd',
      padding: '16px',
      borderRadius: '6px'
    },
    visionGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px'
    },
    visionSection: {
      marginBottom: '24px'
    },
    visionSectionTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#666',
      marginBottom: '8px'
    },
    eyeData: {
      textAlign: 'center'
    },
    eyeLabel: {
      fontSize: '12px',
      color: '#666',
      marginBottom: '4px'
    },
    eyeValue: {
      fontSize: '14px',
      color: '#2196f3',
      fontWeight: '600'
    },
    reportHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    menuIcon: {
      color: '#2196f3',
      fontSize: '18px'
    },
    pdfItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f8f9fa',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      padding: '12px',
      marginBottom: '8px'
    },
    pdfContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    pdfIcon: {
      width: '32px',
      height: '40px',
      backgroundColor: '#d32f2f',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'bold'
    },
    pdfDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    pdfName: {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '4px'
    },
    pdfSize: {
      fontSize: '12px',
      color: '#666'
    },
    deleteIcon: {
      color: '#d32f2f',
      fontSize: '18px'
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '16px'
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#ccc'
    },
    activeDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#2196f3'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <div style={styles.card} onClick={openDrawer}>
          <h3 style={styles.cardTitle}>Vision Condition</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px', flex: 1}}>
              <div style={styles.leftEar}>
                <h4 style={styles.earTitle}>Left Ear</h4>
                <p style={styles.earText}>{visionData.leftEar}</p>
              </div>
              <div style={styles.rightEar}>
                <h4 style={styles.earTitle}>Right Ear</h4>
                <p style={styles.earText}>{visionData.rightEar}</p>
              </div>
            </div>
            <div style={{...styles.organicDisease, flex: 1}}>
              <h4 style={styles.earTitle}>Any Organic Disease of Eye</h4>
              <p style={styles.earText}>{visionData.organicDisease}</p>
            </div>
          </div>
        </div>

        <div style={styles.card} onClick={openModal}>
          <h3 style={styles.cardTitle}>Squint</h3>
          <div style={styles.squintRow}>
            <span style={styles.squintLabel}>Test for Squint Performed</span>
            <div style={styles.buttonGroup}>
              <button style={styles.yesBtn}>Yes</button>
              <button style={styles.noBtn}>No</button>
            </div>
          </div>
          <div style={styles.remarks}>
            <h4 style={styles.earTitle}>Remarks</h4>
            <p style={styles.earText}>{visionData.squintRemarks}</p>
          </div>
        </div>
      </div>

      <div style={styles.rightColumn}>
        <div style={styles.card} onClick={openDrawer}>
          <h3 style={styles.cardTitle}>Vision Check</h3>
          <div style={styles.visionSection}>
            <h4 style={styles.visionSectionTitle}>Distant Vision</h4>
            <div style={styles.visionGrid}>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Left Eye</div>
                <div style={styles.eyeValue}>{visionData.distantVisionLeft}</div>
              </div>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Right Eye</div>
                <div style={styles.eyeValue}>{visionData.distantVisionRight}</div>
              </div>
            </div>
          </div>
          <div style={styles.visionSection}>
            <h4 style={styles.visionSectionTitle}>Near Vision</h4>
            <div style={styles.visionGrid}>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Left Eye</div>
                <div style={styles.eyeValue}>{visionData.nearVisionLeft}</div>
              </div>
              <div style={styles.eyeData}>
                <div style={styles.eyeLabel}>Right Eye</div>
                <div style={styles.eyeValue}>{visionData.nearVisionRight}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.reportHeader}>
            <h3 style={styles.cardTitle}>Vision Report</h3>
            <div style={styles.menuIcon}>☰</div>
          </div>
          <div style={styles.pdfItem}>
            <div style={styles.pdfContent}>
              <div style={styles.pdfIcon}>PDF</div>
              <div style={styles.pdfDetails}>
                <div style={styles.pdfName}>Name-evidence.pdf</div>
                <div style={styles.pdfSize}>PDF document - 13.7 MB</div>
              </div>
            </div>
            <div style={styles.deleteIcon}>🗑</div>
          </div>
          <div style={styles.pdfItem}>
            <div style={styles.pdfContent}>
              <div style={styles.pdfIcon}>PDF</div>
              <div style={styles.pdfDetails}>
                <div style={styles.pdfName}>Name-evidence.pdf</div>
                <div style={styles.pdfSize}>PDF document - 13.7 MB</div>
              </div>
            </div>
            <div style={styles.deleteIcon}>🗑</div>
          </div>
          <div style={styles.dots}>
            <div style={styles.activeDot}></div>
            <div style={styles.dot}></div>
            <div style={styles.dot}></div>
            <div style={styles.dot}></div>
          </div>
        </div>
      </div>

      {/* Drawer for Vision Condition */}
      {drawerOpen && (
        <>
          <div onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 999 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '350px', height: '100vh', background: '#FFF', boxShadow: '-2px 0 10px rgba(0,0,0,0.1)', zIndex: 1000, padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Vision Condition</h3>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Night Blindness</label>
                <textarea value={formData.nightBlindness || ''} onChange={(e) => setFormData({...formData, nightBlindness: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', minHeight: '40px', resize: 'vertical', fontFamily: 'Arial', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Color Blindness</label>
                <textarea value={formData.colorBlindness || ''} onChange={(e) => setFormData({...formData, colorBlindness: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', minHeight: '40px', resize: 'vertical', fontFamily: 'Arial', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Any Organic Disease of Eye</label>
                <textarea value={formData.organicDisease || ''} onChange={(e) => setFormData({...formData, organicDisease: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', minHeight: '40px', resize: 'vertical', fontFamily: 'Arial', outline: 'none' }} />
              </div>

              <h4 style={{ color: '#2196f3', margin: '12px 0 6px 0', fontSize: '13px' }}>Distant Vision</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Left Eye</label>
                  <input value={formData.distantVisionLeft || ''} onChange={(e) => setFormData({...formData, distantVisionLeft: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', fontFamily: 'Arial', outline: 'none' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Right Eye</label>
                  <input value={formData.distantVisionRight || ''} onChange={(e) => setFormData({...formData, distantVisionRight: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', fontFamily: 'Arial', outline: 'none' }} />
                </div>
              </div>

              <h4 style={{ color: '#2196f3', margin: '12px 0 6px 0', fontSize: '13px' }}>Near Vision</h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Left Eye</label>
                  <input value={formData.nearVisionLeft || ''} onChange={(e) => setFormData({...formData, nearVisionLeft: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', fontFamily: 'Arial', outline: 'none' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Right Eye</label>
                  <input value={formData.nearVisionRight || ''} onChange={(e) => setFormData({...formData, nearVisionRight: e.target.value})} style={{ width: '100%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', fontFamily: 'Arial', outline: 'none' }} />
                </div>
              </div>
              
              <div style={{ paddingTop: '12px', textAlign: 'right' }}>
                <button onClick={handleSaveDrawer} style={{ backgroundColor: '#2196f3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>Save</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal for Squint */}
      {modalOpen && (
        <>
          <div onClick={() => setModalOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', maxHeight: '80vh', background: '#FFF', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', zIndex: 1000, padding: '24px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Squint</h3>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#333' }}>Test for Squint Performed</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    onClick={() => setFormData({...formData, squintPerformed: 'Yes'})} 
                    style={{ 
                      backgroundColor: formData.squintPerformed === 'Yes' ? '#2196f3' : '#f5f5f5',
                      color: formData.squintPerformed === 'Yes' ? 'white' : '#333',
                      border: '1px solid #ccc', 
                      padding: '8px 16px', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}
                  >
                    Yes
                  </button>
                  <button 
                    onClick={() => setFormData({...formData, squintPerformed: 'No'})} 
                    style={{ 
                      backgroundColor: formData.squintPerformed === 'No' ? '#2196f3' : '#f5f5f5',
                      color: formData.squintPerformed === 'No' ? 'white' : '#333',
                      border: '1px solid #ccc', 
                      padding: '8px 16px', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '12px', color: '#333' }}>Remarks</label>
                <textarea value={formData.squintRemarks || ''} onChange={(e) => setFormData({...formData, squintRemarks: e.target.value})} style={{ width: '80%', padding: '8px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '11px', minHeight: '60px', resize: 'vertical', fontFamily: 'Arial', outline: 'none' }} />
              </div>
            </div>
            
            <div style={{ paddingTop: '20px', textAlign: 'right' }}>
              <button onClick={handleSaveModal} style={{ backgroundColor: '#2196f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>Save</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Vision;