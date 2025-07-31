import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPathologicalInvestigations } from '../redux/medicalInfoSlice';

const PathologicalForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    hb: '',
    esr: '',
    platelets: '',
    sugarPP: '',
    sugarFasting: '',
    lupidProfile: '',
    bloodUrea: '',
    creatinineLFT: '',
    urineRoutine: '',
    stoolRoutine: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(setPathologicalInvestigations(formData));
    onClose();
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '12px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    maxHeight: '95vh',
    overflow: 'hidden'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    margin: 0
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#666'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    color: '#666',
    marginBottom: '3px',
    marginTop: '6px'
  };

  const inputStyle = {
    width: '100%',
    padding: '6px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '12px',
    backgroundColor: 'white',
    boxSizing: 'border-box'
  };

  const twoColumnStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '6px'
  };

  const columnStyle = {
    flex: 1
  };

  const saveButtonStyle = {
    backgroundColor: '#20a9e0',
    color: 'white',
    padding: '8px 18px',
    border: 'none',
    borderRadius: '20px',
    fontSize: '12px',
    cursor: 'pointer',
    float: 'right',
    marginTop: '12px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Pathological Investigations</h2>
      </div>

      <label style={labelStyle}>Blood (Hb)</label>
      <input style={inputStyle} name="hb" value={formData.hb} onChange={handleChange} />

      <label style={labelStyle}>Blood (ESR)</label>
      <input style={inputStyle} name="esr" value={formData.esr} onChange={handleChange} />

      <label style={labelStyle}>Blood (Platelets)</label>
      <input style={inputStyle} name="platelets" value={formData.platelets} onChange={handleChange} />

      <label style={labelStyle}>Blood Sugar Fasting</label>
      <input style={inputStyle} name="sugarFasting" value={formData.sugarFasting} onChange={handleChange} />

      <label style={labelStyle}>Blood Sugar PP</label>
      <input style={inputStyle} name="sugarPP" value={formData.sugarPP} onChange={handleChange} />

      <label style={labelStyle}>Lipid Profile</label>
      <input style={inputStyle} name="lupidProfile" value={formData.lupidProfile} onChange={handleChange} />

      <label style={labelStyle}>Blood Urea</label>
      <input style={inputStyle} name="bloodUrea" value={formData.bloodUrea} onChange={handleChange} />

      <label style={labelStyle}>Creatinine/LFT</label>
      <input style={inputStyle} name="creatinineLFT" value={formData.creatinineLFT} onChange={handleChange} />

      <div style={twoColumnStyle}>
        <div style={columnStyle}>
          <label style={labelStyle}>Urine Routine</label>
          <input style={inputStyle} name="urineRoutine" value={formData.urineRoutine} onChange={handleChange} />
        </div>
        <div style={columnStyle}>
          <label style={labelStyle}>Stool Routine</label>
          <input style={inputStyle} name="stoolRoutine" value={formData.stoolRoutine} onChange={handleChange} />
        </div>
      </div>

      <button style={saveButtonStyle} onClick={handleSave}>Save</button>
      <div style={{clear: 'both'}}></div>
    </div>
  );
};

export default PathologicalForm;