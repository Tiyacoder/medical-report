import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDisturbances } from '../redux/neurologicalSlice';

const PopupForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    speechDefect: '',
    emotionalChanges: '',
    tremor: '',
    behaviourDisturbance: ''
  });

  const handleSave = () => {
    dispatch(setDisturbances(form));
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-popup">
        <h2>Behaviour Disturbance</h2>
        {Object.keys(form).map(key => (
          <div key={key}>
            <label>{key.replace(/([A-Z])/g, ' $1')}</label>
            <textarea
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupForm;
