import React, { useState } from 'react';

// Redux Actions
const updateAbdomenData = (section, data) => ({ type: 'UPDATE_ABDOMEN_DATA', payload: { section, data } });

const Abdomen = () => {
  // State management
  const [globalState, setGlobalState] = useState({
    abdomen: {
      tenderness: 'Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.',
      spleen: 'Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.',
      liver: 'Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.',
      tumor: 'Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.',
      remarks: 'Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis. Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis. Lorem ipsum dolor sit amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.'
    }
  });

  const useSelector = (selector) => selector(globalState);
  const useDispatch = () => (action) => {
    if (action.type === 'UPDATE_ABDOMEN_DATA') {
      setGlobalState(prev => ({
        ...prev,
        abdomen: { ...prev.abdomen, ...action.payload.data }
      }));
    }
  };

  const dispatch = useDispatch();
  const abdomenData = useSelector(state => state.abdomen);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const openDrawer = () => {
    setFormData({
      tenderness: '',
      spleen: '',
      liver: '',
      tumor: ''
    });
    setDrawerOpen(true);
  };

  const openModal = () => {
    setFormData({ remarks: '' });
    setModalOpen(true);
  };

  const handleSaveDrawer = () => {
    dispatch(updateAbdomenData('details', formData));
    setDrawerOpen(false);
  };

  const handleSaveModal = () => {
    dispatch(updateAbdomenData('remarks', formData));
    setModalOpen(false);
  };

  const containerStyle = {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#f5f5f5'
  };

  const leftColumnStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const rightColumnStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const abdomenContainerStyle = {
    display: 'flex',
    padding: '12px',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    gap: '8px',
    flex: '1 0 0',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    borderRadius: '6px',
    border: '1px solid rgba(183, 200, 229, 0.50)',
    background: '#FFF',
    flexDirection: 'column',
    cursor: 'pointer'
  };

  const abdomenTitleStyle = {
    color: '#1E1E1E',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16px',
    margin: '0 0 8px 0'
  };

  const conditionBoxBaseStyle = {
    flex: '1 1 0',
    borderRadius: '6px',
    padding: '12px',
    minHeight: '0'
  };

  const tendernessBoxStyle = {
    ...conditionBoxBaseStyle,
    background: 'rgba(9, 162, 227, 0.10)'
  };

  const spleenBoxStyle = {
    ...conditionBoxBaseStyle,
    background: '#09A2E3'
  };

  const liverBoxStyle = {
    ...conditionBoxBaseStyle,
    background: 'rgba(9, 162, 227, 0.10)'
  };

  const tumorBoxStyle = {
    ...conditionBoxBaseStyle,
    background: '#09A2E3'
  };

  const conditionTitleStyle = {
    color: '#1E1E1E',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    width: '418px',
    margin: '0 0 8px 0'
  };

  const conditionTextStyle = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    width: '418px',
    margin: '0'
  };

  const blueBoxTextStyle = {
    overflow: 'hidden',
    color: '#FFF',
    textOverflow: 'ellipsis',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    display: '-webkit-box',
    width: '418px',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    margin: '0'
  };

  const remarksBoxStyle = {
    display: 'flex',
    width: '344px',
    height: '208px',
    padding: '16px',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    gap: '16px',
    flexWrap: 'wrap',
    borderRadius: '6px',
    border: '1px solid rgba(183, 200, 229, 0.50)',
    background: '#FFF',
    cursor: 'pointer'
  };

  const reportBoxStyle = {
    width: '344px',
    height: '220px',
    flexShrink: 0,
    borderRadius: '6px',
    border: '1px solid rgba(183, 200, 229, 0.50)',
    background: '#FFF',
    padding: '16px'
  };

  const remarksTitleStyle = {
    color: '#1E1E1E',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '16px',
    width: '356px',
    flexShrink: 0,
    margin: '0 0 12px 0'
  };

  const remarksTextStyle = {
    color: '#818181',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    width: '288px',
    margin: '0'
  };

  const reportTitleStyle = {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    margin: '0 0 16px 0'
  };

  const fileItemStyle = {
    display: 'flex',
    padding: '8px 16px',
    alignItems: 'center',
    gap: '30px',
    borderRadius: '6px',
    border: '1px solid #B7C8E5',
    background: '#F6F8FA',
    marginBottom: '8px'
  };

  const fileInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1
  };

  const fileNameStyle = {
    color: '#1E1E1E',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    alignSelf: 'stretch',
    margin: '0'
  };

  const fileSizeStyle = {
    color: '#7A8699',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    alignSelf: 'stretch',
    margin: '0'
  };

  const dotsStyle = {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    marginTop: '15px'
  };

  const dotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ddd'
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: '#09A2E3'
  };

  const PdfIcon = () => (
    <svg width="39" height="48.1" viewBox="0 0 39 50" fill="none" style={{flexShrink: 0}}>
      <path d="M31.7344 18.786L21.2356 8.43489C21.101 8.32649 20.9335 8.26555 20.7598 8.26173H8.48258C8.29907 8.26104 8.11688 8.2923 7.94438 8.35408L7.47638 8.81584C7.408 8.98243 7.36972 9.15955 7.36328 9.33917V41.0582C7.36972 41.2379 7.408 41.415 7.47638 41.5816L7.94438 42.0433C8.11445 42.1112 8.29532 42.149 8.47868 42.1549H30.8062C30.9909 42.1495 31.1731 42.1117 31.3444 42.0433L31.8124 41.5816C31.879 41.4144 31.9172 41.2376 31.9255 41.0582V19.2555C31.9172 19.0822 31.8499 18.9168 31.7344 18.786ZM31.2118 41.216L30.97 41.4584C30.9165 41.4731 30.8616 41.4822 30.8062 41.4854H8.48258C8.42717 41.4822 8.37225 41.4731 8.31878 41.4584L8.07308 41.216C8.06118 41.1641 8.05336 41.1113 8.04968 41.0582V9.33917C8.05336 9.28607 8.06118 9.23332 8.07308 9.1814L8.33438 8.93898C8.38785 8.92427 8.44277 8.91524 8.49818 8.91204H20.4673V19.5325H31.2391V41.0582C31.2357 41.1116 31.2266 41.1645 31.2118 41.216Z" fill="#D32F2F"/>
      <path d="M30.8056 42.509H8.48203C8.24895 42.5025 8.01901 42.4542 7.80343 42.3666C7.76333 42.3481 7.72647 42.3234 7.69423 42.2935L7.23013 41.8317C7.20264 41.8051 7.18018 41.7738 7.16383 41.7394C7.07352 41.5271 7.02456 41.3 7.01953 41.0698V9.33919C7.02458 9.11029 7.07355 8.88441 7.16383 8.67349C7.18013 8.6326 7.20544 8.59579 7.23793 8.56575L7.70203 8.10399C7.73323 8.0728 7.77033 8.04796 7.81123 8.03087C8.02381 7.94071 8.25095 7.88859 8.48203 7.87695H20.7592C21.0289 7.88809 21.2859 7.99305 21.4846 8.17325L31.9756 18.5244C32.16 18.7209 32.2666 18.9763 32.2759 19.2439V41.0583C32.2665 41.2924 32.215 41.523 32.1238 41.7394C32.1043 41.7794 32.078 41.8159 32.0458 41.8471L31.5778 42.3089C31.5471 42.3388 31.5115 42.3635 31.4725 42.382C31.2595 42.4625 31.0338 42.5054 30.8056 42.509ZM8.40793 41.0467L8.49373 41.1314H30.7939L30.8797 41.0467V19.8827H20.4667C20.3729 19.882 20.2831 19.8447 20.2171 19.7788C20.1824 19.7469 20.1547 19.7081 20.1359 19.6651C20.1171 19.622 20.1076 19.5756 20.1079 19.5287V9.26608H8.49373L8.40403 9.35459L8.40793 41.0467ZM20.8138 19.1785H31.2268C31.2943 19.1789 31.3604 19.1978 31.4175 19.2331C31.4747 19.2685 31.5208 19.3189 31.5505 19.3786V19.2555C31.5409 19.174 31.5085 19.0967 31.4569 19.0323L20.9815 8.68503C20.9166 8.63683 20.8399 8.60631 20.7592 8.59653H20.6266C20.6616 8.61252 20.6933 8.63469 20.7202 8.66195C20.7537 8.69465 20.7803 8.73361 20.7984 8.77655C20.8165 8.8195 20.8257 8.86556 20.8255 8.91207L20.8138 19.1785Z" fill="#D32F2F"/>
      <path d="M19.3974 29.9147H18.7539V33.5741H19.4091C19.6569 33.5872 19.9048 33.5488 20.1366 33.4613C20.3684 33.3738 20.5789 33.2392 20.7546 33.0662C21.0937 32.6864 21.2674 32.1901 21.2382 31.6848C21.2515 31.4469 21.2155 31.2089 21.1323 30.9852C21.0492 30.7616 20.9206 30.5571 20.7546 30.3841C20.5716 30.2204 20.3573 30.0945 20.1242 30.0138C19.8911 29.9332 19.6439 29.8995 19.3974 29.9147Z" fill="#D32F2F"/>
      <path d="M14.3585 29.8531H13.8398V31.654H14.3585C15.0605 31.654 15.4115 31.35 15.4115 30.742C15.4115 30.134 15.0605 29.8377 14.3585 29.8531Z" fill="#D32F2F"/>
      <path d="M31.0912 26.544H8.1982C8.11374 26.543 8.02991 26.5586 7.95162 26.5899C7.87334 26.6212 7.80216 26.6676 7.74225 26.7263C7.68234 26.7851 7.63489 26.855 7.60269 26.9321C7.57049 27.0091 7.55418 27.0917 7.5547 27.1751V36.3064C7.55418 36.3894 7.57037 36.4717 7.60233 36.5485C7.63429 36.6253 7.68138 36.695 7.74088 36.7537C7.80038 36.8124 7.87109 36.8589 7.94892 36.8904C8.02676 36.922 8.11016 36.938 8.1943 36.9374H31.0873C31.1721 36.939 31.2563 36.9238 31.3351 36.8927C31.4138 36.8616 31.4855 36.8153 31.5458 36.7565C31.6061 36.6977 31.6539 36.6276 31.6864 36.5503C31.7188 36.473 31.7352 36.39 31.7347 36.3064V27.1751C31.7352 27.0917 31.7189 27.0091 31.6867 26.9321C31.6545 26.855 31.6071 26.7851 31.5472 26.7263C31.4872 26.6676 31.4161 26.6212 31.3378 26.5899C31.2595 26.5586 31.1757 26.543 31.0912 26.544ZM16.1659 32.1197C15.6862 32.4979 15.0826 32.6895 14.4694 32.6585H13.8415V34.6479H12.5233V28.8759H14.5747C16.0489 28.8759 16.7821 29.4877 16.7821 30.7152C16.7927 30.9799 16.7429 31.2436 16.6362 31.4868C16.5295 31.7299 16.3688 31.9462 16.1659 32.1197ZM21.778 33.8437C21.1606 34.3975 20.3456 34.6868 19.5121 34.6479H17.4373V28.8759H19.5121C21.5921 28.8759 22.6321 29.8135 22.6321 31.6888C22.6473 32.0837 22.5792 32.4774 22.4322 32.845C22.2852 33.2126 22.0624 33.5461 21.778 33.8244V33.8437ZM26.7622 29.9148H24.7147V31.3501H26.6101V32.4045H24.7147V34.6479H23.3809V28.8759H26.7622V29.9148Z" fill="#D32F2F"/>
    </svg>
  );

  const TrashIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" style={{flexShrink: 0}}>
      <path d="M7 21.9502C6.45 21.9502 5.97933 21.7545 5.588 21.3632C5.196 20.9712 5 20.5002 5 19.9502V6.9502H4V4.9502H9V3.9502H15V4.9502H20V6.9502H19V19.9502C19 20.5002 18.8043 20.9712 18.413 21.3632C18.021 21.7545 17.55 21.9502 17 21.9502H7ZM17 6.9502H7V19.9502H17V6.9502ZM9 17.9502H11V8.9502H9V17.9502ZM13 17.9502H15V8.9502H13V17.9502Z" fill="#D11A2A"/>
    </svg>
  );

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <div onClick={openDrawer} style={abdomenContainerStyle}>
          <h3 style={abdomenTitleStyle}>Abdomen Details</h3>
          
          <div style={tendernessBoxStyle}>
            <h4 style={conditionTitleStyle}>Tenderness</h4>
            <p style={{...conditionTextStyle, color: '#818181'}}>{abdomenData.tenderness}</p>
          </div>

          <div style={spleenBoxStyle}>
            <h4 style={{...conditionTitleStyle, color: '#FFF'}}>Spleen</h4>
            <p style={blueBoxTextStyle}>{abdomenData.spleen}</p>
          </div>

          <div style={liverBoxStyle}>
            <h4 style={conditionTitleStyle}>Liver</h4>
            <p style={{...conditionTextStyle, color: '#818181'}}>{abdomenData.liver}</p>
          </div>

          <div style={tumorBoxStyle}>
            <h4 style={{...conditionTitleStyle, color: '#FFF'}}>Tumor</h4>
            <p style={blueBoxTextStyle}>{abdomenData.tumor}</p>
          </div>
        </div>
      </div>

      <div style={rightColumnStyle}>
        <div onClick={openModal} style={remarksBoxStyle}>
          <h3 style={remarksTitleStyle}>Remarks</h3>
          <div style={{
            height: '144px',
            flex: '1 0 0',
            borderRadius: '6px',
            background: 'rgba(9, 162, 227, 0.10)',
            padding: '12px'
          }}>
            <p style={remarksTextStyle}>{abdomenData.remarks}</p>
          </div>
        </div>

        <div style={reportBoxStyle}>
          <h3 style={reportTitleStyle}>Abdomen Report</h3>
          
          <div style={fileItemStyle}>
            <div style={fileInfoStyle}>
              <PdfIcon />
              <div>
                <div style={fileNameStyle}>Name-evidence.pdf</div>
                <div style={fileSizeStyle}>PDF document • 13.7 MB</div>
              </div>
            </div>
            <TrashIcon />
          </div>

          <div style={fileItemStyle}>
            <div style={fileInfoStyle}>
              <PdfIcon />
              <div>
                <div style={fileNameStyle}>Name-evidence.pdf</div>
                <div style={fileSizeStyle}>PDF document • 13.7 MB</div>
              </div>
            </div>
            <TrashIcon />
          </div>

          <div style={dotsStyle}>
            <div style={activeDotStyle}></div>
            <div style={dotStyle}></div>
            <div style={dotStyle}></div>
            <div style={dotStyle}></div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div onClick={() => setDrawerOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 999 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '400px', height: '100vh', background: '#FFF', boxShadow: '-2px 0 10px rgba(0,0,0,0.1)', zIndex: 1000, padding: '20px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Abdomen Details</h3>
              <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px', paddingBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#333' }}>Tenderness</label>
                <textarea value={formData.tenderness || ''} onChange={(e) => setFormData({...formData, tenderness: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #E1E5E9', borderRadius: '6px', fontSize: '12px', minHeight: '60px', resize: 'vertical', fontFamily: 'Roboto', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#333' }}>Spleen</label>
                <textarea value={formData.spleen || ''} onChange={(e) => setFormData({...formData, spleen: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #E1E5E9', borderRadius: '6px', fontSize: '12px', minHeight: '60px', resize: 'vertical', fontFamily: 'Roboto', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#333' }}>Liver</label>
                <textarea value={formData.liver || ''} onChange={(e) => setFormData({...formData, liver: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #E1E5E9', borderRadius: '6px', fontSize: '12px', minHeight: '60px', resize: 'vertical', fontFamily: 'Roboto', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#333' }}>Tumor</label>
                <textarea value={formData.tumor || ''} onChange={(e) => setFormData({...formData, tumor: e.target.value})} style={{ width: '100%', padding: '12px', border: '1px solid #E1E5E9', borderRadius: '6px', fontSize: '12px', minHeight: '60px', resize: 'vertical', fontFamily: 'Roboto', outline: 'none' }} />
              </div>
              
              <div style={{ paddingTop: '16px', textAlign: 'right' }}>
                <button onClick={handleSaveDrawer} style={{ backgroundColor: '#09A2E3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>Save</button>
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

export default Abdomen;