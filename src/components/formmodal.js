import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import React from 'react';


function UpdatedForm(props){

const[showModalform , setShowModalform] = useState(true)

const handleUpdate = () => {
    


}
const handleClose = () => setShowModalform(false);

    return (
        <>
            <div>

                <Modal show = {showModalform} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <ModalTitle>Product Update Form </ModalTitle>y

                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group >
                            <Form.Label>ItemNO: </Form.Label>
                            <Form.Control type="text" value = {props.updatedValues.id}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Item: </Form.Label>
                            <Form.Control type="text" value = {props.updatedValues.item} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Price: </Form.Label>
                            <Form.Control type="text" value = {props.updatedValues.price}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={handleUpdate}>
                            Update
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
export default UpdatedForm;