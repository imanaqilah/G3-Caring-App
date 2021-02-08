import React from 'react';
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

const EditTaskModal = ({ isOpen, toggle, taskInput, dateInput }) => {


    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Activity</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="text">Activity</Label>
                            <Input type="text" name="text" id="text" value={taskInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">To be completed by:</Label>
                            <Input type="date" name="date" id="date" value={dateInput} />
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