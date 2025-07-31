import React, { useState } from 'react';

// Redux Actions
const updateLungsData = (section, data) => ({ type: 'UPDATE_LUNGS_DATA', payload: { section, data } });

const Lungs = () => {
  // State management
  const [globalState, setGlobalState] = useState({
    lungs: {
      forcedVitalCapacity: {
        predictedValue: '--',
        performedValue: '--',
        percentOfPredicted: '--%'
      },
      forcedExpiratoryVolume: {
        predictedValue: '--',
        performedValue: '--',
        percentOfPredicted: '--%'
      },
      fev1FvcRatio: {
        predictedValue: '--',
        performedValue: '--',
        percentOfPredicted: '--%'
      },
      peakExpiratoryFlow: {
        predictedValue: '--',
        performedValue: '--',
        percentOfPredicted: '--%'
      },
      remarks: '--'
    }
  });

  const useSelector = (selector) => selector(globalState);
  const useDispatch = () => (action) => {
    if (action.type === 'UPDATE_LUNGS_DATA') {
      setGlobalState(prev => ({
        ...prev,
        lungs: { ...prev.lungs, ...action.payload.data }
      }));
    }
  };

  const dispatch = useDispatch();
  const lungsData = useSelector(state => state.lungs);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const openDrawer = () => {
    setFormData({
      forcedVitalCapacity: { predictedValue: '', performedValue: '', percentOfPredicted: '' },
      forcedExpiratoryVolume: { predictedValue: '', performedValue: '', percentOfPredicted: '' },
      fev1FvcRatio: { predictedValue: '', performedValue: '', percentOfPredicted: '' },
      peakExpiratoryFlow: { predictedValue: '', performedValue: '', percentOfPredicted: '' }
    });
    setDrawerOpen(true);
  };

  const openModal = () => {
    setFormData({ remarks: '' });
    setModalOpen(true);
  };

  const handleSaveDrawer = () => {
    const processedData = {};
    Object.keys(formData).forEach(key => {
      processedData[key] = {
        predictedValue: formData[key]?.predictedValue || '--',
        performedValue: formData[key]?.performedValue || '--',
        percentOfPredicted: formData[key]?.percentOfPredicted || '--%'
      };
    });
    dispatch(updateLungsData('lungFunction', processedData));
    setDrawerOpen(false);
  };

  const handleSaveModal = () => {
    const processedRemarks = formData.remarks || '--';
    dispatch(updateLungsData('remarks', { remarks: processedRemarks }));
    setModalOpen(false);
  };

  const PdfIcon = () => (
    <svg width="39" height="48.1" viewBox="0 0 39 50" fill="none">
      <path d="M31.7344 18.786L21.2356 8.43489C21.101 8.32649 20.9335 8.26555 20.7598 8.26173H8.48258C8.29907 8.26104 8.11688 8.2923 7.94438 8.35408L7.47638 8.81584C7.408 8.98243 7.36972 9.15955 7.36328 9.33917V41.0582C7.36972 41.2379 7.408 41.415 7.47638 41.5816L7.94438 42.0433C8.11445 42.1112 8.29532 42.149 8.47868 42.1549H30.8062C30.9909 42.1495 31.1731 42.1117 31.3444 42.0433L31.8124 41.5816C31.879 41.4144 31.9172 41.2376 31.9255 41.0582V19.2555C31.9172 19.0822 31.8499 18.9168 31.7344 18.786ZM31.2118 41.216L30.97 41.4584C30.9165 41.4731 30.8616 41.4822 30.8062 41.4854H8.48258C8.42717 41.4822 8.37225 41.4731 8.31878 41.4584L8.07308 41.216C8.06118 41.1641 8.05336 41.1113 8.04968 41.0582V9.33917C8.05336 9.28607 8.06118 9.23332 8.07308 9.1814L8.33438 8.93898C8.38785 8.92427 8.44277 8.91524 8.49818 8.91204H20.4673V19.5325H31.2391V41.0582C31.2357 41.1116 31.2266 41.1645 31.2118 41.216Z" fill="#D32F2F"/>
    </svg>
  );

  const TrashIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none">
      <path d="M7 21.9502C6.45 21.9502 5.97933 21.7545 5.588 21.3632C5.196 20.9712 5 20.5002 5 19.9502V6.9502H4V4.9502H9V3.9502H15V4.9502H20V6.9502H19V19.9502C19 20.5002 18.8043 20.9712 18.413 21.3632C18.021 21.7545 17.55 21.9502 17 21.9502H7ZM17 6.9502H7V19.9502H17V6.9502ZM9 17.9502H11V8.9502H9V17.9502ZM13 17.9502H15V8.9502H13V17.9502Z" fill="#D11A2A"/>
    </svg>
  );

  return (
    <div style={{ display: 'flex', gap: '35px', padding: '20px', fontFamily: 'Roboto, Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <div style={{ flex: 1.6, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div onClick={openDrawer} style={{ display: 'flex', padding: '16px', alignItems: 'flex-start', gap: '16px', flex: '1 0 0', flexWrap: 'wrap', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', flexDirection: 'column', cursor: 'pointer' }}>
          <h3 style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '600', lineHeight: '20px', margin: '0 0 16px 0' }}>Lung Function</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <div>
              <h4 style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0 0 12px 0' }}>Forced Vital Capacity</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '120px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Predicted Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.forcedVitalCapacity.predictedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Performed Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.forcedVitalCapacity.performedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>% of Predicted</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.forcedVitalCapacity.percentOfPredicted}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0 0 12px 0' }}>Forced Expiratory Volume/ 1 (FEV1)</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '120px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Predicted Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.forcedExpiratoryVolume.predictedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Performed Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.forcedExpiratoryVolume.performedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>% of Predicted</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.forcedExpiratoryVolume.percentOfPredicted}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0 0 12px 0' }}>FEV1 / FVC %</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '120px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Predicted Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.fev1FvcRatio.predictedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Performed Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.fev1FvcRatio.performedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>% of Predicted</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.fev1FvcRatio.percentOfPredicted}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0 0 12px 0' }}>Peak Expiratory Flow (PEF)</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '120px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Predicted Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.peakExpiratoryFlow.predictedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>Performed Value</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.peakExpiratoryFlow.performedValue}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                  <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '14px', margin: '0' }}>% of Predicted</p>
                  <p style={{ color: '#09A2E3', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '600', lineHeight: '16px', margin: '0' }}>{lungsData.peakExpiratoryFlow.percentOfPredicted}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div onClick={openModal} style={{ display: 'flex', width: '344px', height: '208px', padding: '16px', alignItems: 'flex-start', alignContent: 'flex-start', gap: '16px', flexWrap: 'wrap', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', cursor: 'pointer' }}>
          <h3 style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '700', lineHeight: '16px', width: '356px', flexShrink: 0, margin: '0 0 12px 0' }}>Remarks</h3>
          <div style={{ height: '144px', flex: '1 0 0', borderRadius: '6px', background: 'rgba(9, 162, 227, 0.10)', padding: '12px' }}>
            <p style={{ color: '#818181', fontFamily: 'Roboto', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', width: '288px', margin: '0' }}>{lungsData.remarks}</p>
          </div>
        </div>

        <div style={{ width: '344px', height: '220px', borderRadius: '6px', border: '1px solid rgba(183, 200, 229, 0.50)', background: '#FFF', padding: '16px' }}>
          <h3 style={{ color: '#000', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '600', lineHeight: 'normal', margin: '0 0 16px 0' }}>Lung Report</h3>
          
          <div style={{ display: 'flex', padding: '8px 16px', alignItems: 'center', gap: '30px', borderRadius: '6px', border: '1px solid #B7C8E5', background: '#F6F8FA', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              <PdfIcon />
              <div>
                <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '400', lineHeight: '20px', margin: '0' }}>Name-evidence.pdf</div>
                <div style={{ color: '#7A8699', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '20px', margin: '0' }}>PDF document • 13.7 MB</div>
              </div>
            </div>
            <TrashIcon />
          </div>

          <div style={{ display: 'flex', padding: '8px 16px', alignItems: 'center', gap: '30px', borderRadius: '6px', border: '1px solid #B7C8E5', background: '#F6F8FA', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              <PdfIcon />
              <div>
                <div style={{ color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '400', lineHeight: '20px', margin: '0' }}>Name-evidence.pdf</div>
                <div style={{ color: '#7A8699', fontFamily: 'Roboto', fontSize: '12px', fontWeight: '400', lineHeight: '20px', margin: '0' }}>PDF document • 13.7 MB</div>
              </div>
            </div>
            <TrashIcon />
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '15px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#09A2E3' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 999 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '400px', height: '100vh', background: '#FFF', boxShadow: '-2px 0 10px rgba(0,0,0,0.1)', zIndex: 1000, padding: '20px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Lung</h3>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '10px' }}>
              <div>
                <h4 style={{ color: '#09A2E3', fontSize: '12px', fontWeight: '600', margin: '0 0 8px 0' }}>Forced Vital Capacity</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input placeholder="Predicted Value" value={formData.forcedVitalCapacity?.predictedValue || ''} onChange={(e) => setFormData({...formData, forcedVitalCapacity: {...formData.forcedVitalCapacity, predictedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="Performed Value" value={formData.forcedVitalCapacity?.performedValue || ''} onChange={(e) => setFormData({...formData, forcedVitalCapacity: {...formData.forcedVitalCapacity, performedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="% of Predicted" value={formData.forcedVitalCapacity?.percentOfPredicted || ''} onChange={(e) => setFormData({...formData, forcedVitalCapacity: {...formData.forcedVitalCapacity, percentOfPredicted: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                </div>
              </div>

              <div>
                <h4 style={{ color: '#09A2E3', fontSize: '12px', fontWeight: '600', margin: '0 0 8px 0' }}>Forced Expiratory Volume / 1 (FEV1)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input placeholder="Predicted Value" value={formData.forcedExpiratoryVolume?.predictedValue || ''} onChange={(e) => setFormData({...formData, forcedExpiratoryVolume: {...formData.forcedExpiratoryVolume, predictedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="Performed Value" value={formData.forcedExpiratoryVolume?.performedValue || ''} onChange={(e) => setFormData({...formData, forcedExpiratoryVolume: {...formData.forcedExpiratoryVolume, performedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="% of Predicted" value={formData.forcedExpiratoryVolume?.percentOfPredicted || ''} onChange={(e) => setFormData({...formData, forcedExpiratoryVolume: {...formData.forcedExpiratoryVolume, percentOfPredicted: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                </div>
              </div>

              <div>
                <h4 style={{ color: '#09A2E3', fontSize: '12px', fontWeight: '600', margin: '0 0 8px 0' }}>FEV1 / FVC %</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input placeholder="Predicted Value" value={formData.fev1FvcRatio?.predictedValue || ''} onChange={(e) => setFormData({...formData, fev1FvcRatio: {...formData.fev1FvcRatio, predictedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="Performed Value" value={formData.fev1FvcRatio?.performedValue || ''} onChange={(e) => setFormData({...formData, fev1FvcRatio: {...formData.fev1FvcRatio, performedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="% of Predicted" value={formData.fev1FvcRatio?.percentOfPredicted || ''} onChange={(e) => setFormData({...formData, fev1FvcRatio: {...formData.fev1FvcRatio, percentOfPredicted: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                </div>
              </div>

              <div>
                <h4 style={{ color: '#09A2E3', fontSize: '12px', fontWeight: '600', margin: '0 0 8px 0' }}>Peak Expiratory Flow (PEF)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input placeholder="Predicted Value" value={formData.peakExpiratoryFlow?.predictedValue || ''} onChange={(e) => setFormData({...formData, peakExpiratoryFlow: {...formData.peakExpiratoryFlow, predictedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="Performed Value" value={formData.peakExpiratoryFlow?.performedValue || ''} onChange={(e) => setFormData({...formData, peakExpiratoryFlow: {...formData.peakExpiratoryFlow, performedValue: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                  <input placeholder="% of Predicted" value={formData.peakExpiratoryFlow?.percentOfPredicted || ''} onChange={(e) => setFormData({...formData, peakExpiratoryFlow: {...formData.peakExpiratoryFlow, percentOfPredicted: e.target.value}})} style={{ padding: '6px 10px', border: '1px solid #E1E5E9', borderRadius: '4px', fontSize: '12px' }} />
                </div>
                
                <div style={{ paddingTop: '12px', textAlign: 'right' }}>
                  <button onClick={handleSaveDrawer} style={{ backgroundColor: '#09A2E3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal */}
      {modalOpen && (
        <>
          <div onClick={() => setModalOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', maxHeight: '80vh', background: '#FFF', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', zIndex: 1000, padding: '24px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Remarks</h3>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#333' }}>Remarks</label>
              <textarea value={formData.remarks || ''} onChange={(e) => setFormData({...formData, remarks: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #E1E5E9', borderRadius: '6px', fontSize: '12px', minHeight: '120px', resize: 'vertical', fontFamily: 'Roboto', outline: 'none' }} />
            </div>
            
            <div style={{ paddingTop: '20px', textAlign: 'right' }}>
              <button onClick={handleSaveModal} style={{ backgroundColor: '#09A2E3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>Save</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lungs;