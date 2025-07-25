// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>
          &times;
        </button>
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>{children}</div>
      </div>
    </div>
  );
};

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const modalStyle = {
  background: '#fff',
  width: '60%',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  position: 'relative'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '16px',
  fontSize: '24px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: '#555'
};

export default Modal;
