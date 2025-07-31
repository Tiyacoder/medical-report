// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children, type = 'center' }) => {
  if (!isOpen) return null;

  const isSidebar = type === 'sidebar';

  return (
    <div style={backdropStyle}>
      <div style={isSidebar ? sidebarStyle : modalStyle}>
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
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const modalStyle = {
  background: '#fff',
  width: '60%',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  margin: 'auto',
};

const sidebarStyle = {
  background: '#fff',
  width: '400px',
  height: '100%',
  padding: '24px',
  boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  top: 0,
  right: 0,
  borderTopLeftRadius: '12px',
  borderBottomLeftRadius: '12px',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '16px',
  fontSize: '24px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: '#555',
};

export default Modal;
