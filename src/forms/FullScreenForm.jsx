import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAssessment } from '../redux/neurologicalSlice';

const FullScreenForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    superficialReflexes: '',
    deepReflexes: '',
    peripheralCirculation: '',
    vibrationalSyndromes: ''
  });

  const handleSave = () => {
    dispatch(setAssessment(form));
    onClose();
  };

  return (
    <div className="fullscreen-drawer">
      <h2>Neurological Assessment</h2>
      {Object.keys(form).map(key => (
        <div key={key}>
          <label>{key.replace(/([A-Z])/g, ' $1')}</label>
          <input
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FullScreenForm;
