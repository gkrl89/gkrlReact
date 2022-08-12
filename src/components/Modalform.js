import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalForm() {
  
    
    const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);
  
  

  return (
    <>
    
    
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>User Logged in Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;