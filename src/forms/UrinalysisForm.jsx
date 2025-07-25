import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUrinalysis } from '../redux/medicalInfoSlice';

const UrinalysisForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    albumin: '',
    sugar: '',
    reaction: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(setUrinalysis(formData));
    onClose();
  };

  return (
    <div style={{ 
      padding: '24px', 
      backgroundColor: 'white',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        margin: '0 0 24px 0',
        color: '#333'
      }}>Urinalysis</h2>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid #e0e0e0', 
        marginBottom: '24px' 
      }} />
      
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginBottom: '24px' 
      }}>
        <div style={{ flex: 1 }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontSize: '16px',
            color: '#555',
            fontWeight: '500'
          }}>Albumin</label>
          <input 
            name="albumin" 
            value={formData.albumin} 
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontSize: '16px',
            color: '#555',
            fontWeight: '500'
          }}>Sugar</label>
          <input 
            name="sugar" 
            value={formData.sugar} 
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>
      
      <div style={{ marginBottom: '24px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontSize: '16px',
          color: '#555',
          fontWeight: '500'
        }}>Reaction</label>
        <textarea 
          name="reaction" 
          value={formData.reaction} 
          onChange={handleChange}
          rows={4}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
            boxSizing: 'border-box'
          }}
        />
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end' 
      }}>
        <button 
          onClick={handleSave} 
          style={{
            backgroundColor: '#0EA5E9',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '24px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >Save</button>
      </div>
    </div>
  );
};

export default UrinalysisForm;