import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInfo } from '../redux/medicalInfoSlice';

const BasicInfoForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const basicInfo = useSelector((state) => state.medicalInfo.basicInfo);

  const [formData, setFormData] = useState({ ...basicInfo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(setBasicInfo(formData));
    if (onClose) onClose(); // Close the modal after saving
  };

  const inputStyle = {
    width: '100%',
    padding: '4px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '12px',
    marginBottom: '6px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '2px',
    fontSize: '12px',
    fontWeight: '500',
    color: '#333'
  };

  const sectionStyle = {
    marginBottom: '8px'
  };

  const headerStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0ea5e9',
    marginBottom: '6px',
    borderBottom: 'none'
  };

  const containerStyle = {
    maxWidth: '700px',
    padding: '12px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    height: 'fit-content',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#333'
  };

  const rowStyle = {
    display: 'flex',
    gap: '40px',
    marginBottom: '6px'
  };

  const halfWidthStyle = {
    flex: 1
  };

  const buttonStyle = {
    backgroundColor: '#0ea5e9',
    color: 'white',
    border: 'none',
    padding: '6px 16px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    float: 'right',
    marginTop: '6px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Basic Information</h2>

      <div style={sectionStyle}>
        <label style={labelStyle}>Heartbeat</label>
        <input name="heartbeat" value={formData.heartbeat} onChange={handleChange} type="text" style={inputStyle} />

        <label style={labelStyle}>Glucose Level</label>
        <input name="glucoseLevel" value={formData.glucoseLevel} onChange={handleChange} type="text" style={inputStyle} />
      </div>

      <div style={sectionStyle}>
        <h3 style={headerStyle}>Blood Pressure</h3>
        <div style={rowStyle}>
          <div style={halfWidthStyle}>
            <label style={labelStyle}>BP - Systolic (In mmHg)</label>
            <input name="bpSystolic" value={formData.bpSystolic} onChange={handleChange} type="text" style={inputStyle} />
          </div>
          <div style={halfWidthStyle}>
            <label style={labelStyle}>BP - Diastolic (In mmHg)</label>
            <input name="bpDiastolic" value={formData.bpDiastolic} onChange={handleChange} type="text" style={inputStyle} />
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={headerStyle}>Blood Count</h3>
        <div style={rowStyle}>
          <div style={halfWidthStyle}>
            <label style={labelStyle}>Blood (Tc)</label>
            <input name="bloodTo" value={formData.bloodTo} onChange={handleChange} type="text" style={inputStyle} />
          </div>
          <div style={halfWidthStyle}>
            <label style={labelStyle}>Blood (Dc)</label>
            <input name="bloodDo" value={formData.bloodDo} onChange={handleChange} type="text" style={inputStyle} />
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3 style={headerStyle}>Physical Characteristics</h3>
        <div style={rowStyle}>
          <div style={halfWidthStyle}>
            <label style={labelStyle}>Height</label>
            <input name="height" value={formData.height} onChange={handleChange} type="text" style={inputStyle} />
          </div>
          <div style={halfWidthStyle}>
            <label style={labelStyle}>Weight</label>
            <input name="weight" value={formData.weight} onChange={handleChange} type="text" style={inputStyle} />
          </div>
        </div>

        <label style={labelStyle}>Identification Marks</label>
        <input name="identificationMark" value={formData.identificationMark} onChange={handleChange} type="text" style={inputStyle} />

        <label style={labelStyle}>General Development</label>
        <textarea
          name="generalDevelopment"
          value={formData.generalDevelopment}
          onChange={handleChange}
          style={{
            ...inputStyle,
            height: '30px',
            resize: 'vertical'
          }}
        />
      </div>

      <button onClick={handleSave} style={buttonStyle}>Save</button>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default BasicInfoForm;
