import React, { useState } from 'react';

// Redux Actions
const updateHearingData = (section, data) => ({ type: 'UPDATE_HEARING_DATA', payload: { section, data } });
const updateAudiometryData = (data) => ({ type: 'UPDATE_AUDIOMETRY_DATA', payload: data });

const Hearing = () => {
  // State management
  const [globalState, setGlobalState] = useState({
    hearing: { earConduction: { leftEar: '', rightEar: '' }, boneConduction: { leftEar: '', rightEar: '' }, hearingFindings: { leftEar: '', rightEar: '', organicDisease: '' } },
    audiometry: { files: [], remarks: '' }
  });

  const useSelector = (selector) => selector(globalState);
  const useDispatch = () => (action) => {
    console.log('Dispatched:', action);
    if (action.type === 'UPDATE_HEARING_DATA') {
      setGlobalState(prev => ({
        ...prev,
        hearing: { ...prev.hearing, ...action.payload.data }
      }));
    }
  };

  const dispatch = useDispatch();
  const hearingData = useSelector(state => state.hearing);
  const audiometryData = useSelector(state => state.audiometry);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const openDrawer = () => {
    setFormData(hearingData);
    setDrawerOpen(true);
  };

  const openModal = () => {
    setFormData(audiometryData);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (drawerOpen) {
      dispatch(updateHearingData('all', formData));
    } else {
      dispatch(updateAudiometryData(formData));
    }
    setDrawerOpen(false);
    setModalOpen(false);
  };

  const pdfIcon = <svg width="39" height="50" viewBox="0 0 39 50" fill="none"><path d="M31.7344 18.7855L21.2356 8.4344C21.101 8.326 20.9335 8.26506 20.7598 8.26124H8.48258C8.29907 8.26055 8.11688 8.29182 7.94438 8.35359L7.47638 8.81535C7.408 8.98194 7.36972 9.15906 7.36328 9.33868V41.0577C7.36972 41.2374 7.408 41.4145 7.47638 41.5811L7.94438 42.0428C8.11445 42.1107 8.29532 42.1485 8.47868 42.1544H30.8062C30.9909 42.149 31.1731 42.1112 31.3444 42.0428L31.8124 41.5811C31.879 41.414 31.9172 41.2371 31.9255 41.0577V19.255C31.9172 19.0817 31.8499 18.9163 31.7344 18.7855ZM31.2118 41.2155L30.97 41.4579C30.9165 41.4726 30.8616 41.4817 30.8062 41.4849H8.48258C8.42717 41.4817 8.37225 41.4726 8.31878 41.4579L8.07308 41.2155C8.06118 41.1636 8.05336 41.1109 8.04968 41.0577V9.33868C8.05336 9.28558 8.06118 9.23283 8.07308 9.18091L8.33438 8.93849C8.38785 8.92379 8.44277 8.91476 8.49818 8.91155H20.4673V19.532H31.2391V41.0577C31.2357 41.1111 31.2266 41.164 31.2118 41.2155Z" fill="#D32F2F"/></svg>;

  const deleteIcon = <svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M7 21.9502C6.45 21.9502 5.97933 21.7545 5.588 21.3632C5.196 20.9712 5 20.5002 5 19.9502V6.9502H4V4.9502H9V3.9502H15V4.9502H20V6.9502H19V19.9502C19 20.5002 18.8043 20.9712 18.413 21.3632C18.021 21.7545 17.55 21.9502 17 21.9502H7ZM17 6.9502H7V19.9502H17V6.9502ZM9 17.9502H11V8.9502H9V17.9502ZM13 17.9502H15V8.9502H13V17.9502Z" fill="#D11A2A"/></svg>;

  const infoIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#09A2E3"/></svg>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Roboto, sans-serif' }}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
        {/* Ear Conduction */}
        <div onClick={openDrawer} style={{ display: 'flex', padding: '12px', flexDirection: 'column', gap: '8px', flex: '1', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', cursor: 'pointer' }}>
          <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '700', lineHeight: '16px' }}>Ear Conduction</div>
          <div style={{ height: '78px', borderRadius: '6px', background: 'rgba(9, 162, 227, 0.10)', padding: '12px' }}>
            <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Left Ear</div>
            <div style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400' }}>{hearingData.earConduction?.leftEar || 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.'}</div>
          </div>
          <div style={{ height: '78px', borderRadius: '6px', background: '#09A2E3', padding: '12px' }}>
            <div style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Right Ear</div>
            <div style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400' }}>{hearingData.earConduction?.rightEar || 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.'}</div>
          </div>
        </div>

        {/* Bone Conduction */}
        <div onClick={openDrawer} style={{ display: 'flex', padding: '12px', flexDirection: 'column', gap: '8px', flex: '1', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', cursor: 'pointer' }}>
          <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '700', lineHeight: '16px' }}>Bone Conduction</div>
          <div style={{ height: '78px', borderRadius: '6px', background: 'rgba(9, 162, 227, 0.10)', padding: '12px' }}>
            <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Left Ear</div>
            <div style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400' }}>{hearingData.boneConduction?.leftEar || 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.'}</div>
          </div>
          <div style={{ height: '78px', borderRadius: '6px', background: '#09A2E3', padding: '12px' }}>
            <div style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Right Ear</div>
            <div style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400' }}>{hearingData.boneConduction?.rightEar || 'Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.'}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Hearing Findings */}
        <div onClick={openDrawer} style={{ display: 'flex', padding: '12px', flexDirection: 'column', gap: '8px', flex: '1.3', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', cursor: 'pointer' }}>
          <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '700', lineHeight: '16px' }}>Hearing Findings</div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1.5 }}>
              <div style={{ borderRadius: '6px', background: 'rgba(9, 162, 227, 0.10)', padding: '16px', height: '80px' }}>
                <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Left Ear</div>
                <div style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '400', lineHeight: '1.4' }}>{hearingData.hearingFindings?.leftEar || '--'}</div>
              </div>
              <div style={{ borderRadius: '6px', background: '#09A2E3', padding: '16px', height: '80px' }}>
                <div style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Left Ear</div>
                <div style={{ color: '#FFF', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '400', lineHeight: '1.4' }}>{hearingData.hearingFindings?.rightEar || '--'}</div>
              </div>
            </div>
            <div style={{ borderRadius: '6px', background: 'rgba(9, 162, 227, 0.10)', padding: '16px', flex: 1, height: '172px' }}>
              <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Any Organic Disease</div>
              <div style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>{hearingData.hearingFindings?.organicDisease || '--'}</div>
            </div>
          </div>
        </div>

        {/* Audiometry Report */}
        <div onClick={openModal} style={{ flex: '0.8', maxWidth: '350px', padding: '12px', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', display: 'flex', flexDirection: 'column', minHeight: '220px', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <div style={{ color: '#000', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '600' }}>Audiometry Report</div>
            {infoIcon}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'auto' }}>
            <div style={{ display: 'flex', padding: '8px 16px', alignItems: 'center', gap: '12px', borderRadius: '6px', border: '1px solid #B7C8E5', background: '#F6F8FA' }}>
              <div style={{ width: '32px', height: '40px', flexShrink: 0 }}>{pdfIcon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '400', lineHeight: '20px' }}>Name-evidence.pdf</div>
                <div style={{ color: '#7A8699', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '20px' }}>PDF document - 13.7 MB</div>
              </div>
              <div style={{ cursor: 'pointer' }}>{deleteIcon}</div>
            </div>
            
            <div style={{ display: 'flex', padding: '8px 16px', alignItems: 'center', gap: '12px', borderRadius: '6px', border: '1px solid #B7C8E5', background: '#F6F8FA' }}>
              <div style={{ width: '32px', height: '40px', flexShrink: 0 }}>{pdfIcon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '400', lineHeight: '20px' }}>Name-evidence.pdf</div>
                <div style={{ color: '#7A8699', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '20px' }}>PDF document - 13.7 MB</div>
              </div>
              <div style={{ cursor: 'pointer' }}>{deleteIcon}</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 'auto', paddingTop: '20px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#09A2E3' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E0E0E0' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E0E0E0' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E0E0E0' }}></div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 999 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '400px', height: '100vh', background: '#FFF', boxShadow: '-2px 0 10px rgba(0,0,0,0.1)', zIndex: 1000, padding: '20px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Hearing</h3>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '60px' }}>
              <div style={{ color: '#09A2E3', fontSize: '14px', fontWeight: '600' }}>Ear Conduction</div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Left Ear</label>
                <input value={formData.earConduction?.leftEar || ''} onChange={(e) => setFormData({...formData, earConduction: {...formData.earConduction, leftEar: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Right Ear</label>
                <input value={formData.earConduction?.rightEar || ''} onChange={(e) => setFormData({...formData, earConduction: {...formData.earConduction, rightEar: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
              <div style={{ color: '#09A2E3', fontSize: '14px', fontWeight: '600' }}>Bone Conduction</div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Left Ear</label>
                <input value={formData.boneConduction?.leftEar || ''} onChange={(e) => setFormData({...formData, boneConduction: {...formData.boneConduction, leftEar: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Right Ear</label>
                <input value={formData.boneConduction?.rightEar || ''} onChange={(e) => setFormData({...formData, boneConduction: {...formData.boneConduction, rightEar: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
              <div style={{ color: '#09A2E3', fontSize: '14px', fontWeight: '600' }}>Hearing Findings</div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Left Ear</label>
                <input value={formData.hearingFindings?.leftEar || ''} onChange={(e) => setFormData({...formData, hearingFindings: {...formData.hearingFindings, leftEar: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Right Ear</label>
                <input value={formData.hearingFindings?.rightEar || ''} onChange={(e) => setFormData({...formData, hearingFindings: {...formData.hearingFindings, rightEar: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '3px', fontWeight: '500', fontSize: '13px' }}>Any Organic Disease</label>
                <input value={formData.hearingFindings?.organicDisease || ''} onChange={(e) => setFormData({...formData, hearingFindings: {...formData.hearingFindings, organicDisease: e.target.value}})} style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px' }} />
              </div>
            </div>
            
            <button onClick={handleSave} style={{ backgroundColor: '#09A2E3', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', position: 'sticky', bottom: '20px', marginTop: 'auto' }}>Save</button>
          </div>
        </>
      )}

      {/* Modal */}
      {modalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#FFF', borderRadius: '8px', padding: '24px', width: '500px', maxHeight: '80vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Audiometry Report</h3>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div style={{ border: '2px dashed #ddd', borderRadius: '8px', padding: '40px', textAlign: 'center', marginBottom: '20px', backgroundColor: '#f9f9f9', cursor: 'pointer' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>☁️</div>
              <div style={{ color: '#09A2E3', marginBottom: '5px' }}>Click to upload</div>
              <div style={{ color: '#666', fontSize: '14px' }}>PNG, JPG and Mp4 (max. 10 MB)</div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Remarks</label>
              <textarea style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }} />
            </div>
            
            <button onClick={handleSave} style={{ backgroundColor: '#09A2E3', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', width: '100%', marginTop: '20px' }}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hearing;