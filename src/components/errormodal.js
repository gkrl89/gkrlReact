import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalErrorForm() {
  
    
    const [showError, setShowError] = useState(true);
  const handleClose = () => setShowError(false);
  

  return (
    <>
    
    
      <Modal show={showError} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Login Failed. Invalid credentials</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalErrorForm;