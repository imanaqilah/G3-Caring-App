import React, { useState } from 'react';
import {
    Modal,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const EditTaskModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [showModal, setShowModal] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <Button color="primary" onClick={() => { toggleModal() }}>Edit Activity</Button>
            <Modal isOpen={showModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="activity">Activity</Label>
                            <Input type="activity" name="activity" id="activity" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">To be completed by:</Label>
                            <Input type="date" name="date" id="date" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}

export default EditTaskModal;