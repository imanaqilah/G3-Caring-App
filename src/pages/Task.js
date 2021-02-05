import React, { useState } from 'react';
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col,
    Row,
    Container,
    NavLink
} from 'reactstrap';
import EditTaskModal from "../components/EditTaskModal.js";


const Task = () => {

    const [tasks, setTasks] = useState([]);

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="content">
            <div className="home-background">
                <Container fluid={true} className="form-container">
                    <Row className="no-gutter">
                        <Col>
                            <h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Task</h1>
                            <Form>
                                <FormGroup>
                                    <Input placeholder="Add a task" />
                                    <Input type="date" />
                                </FormGroup>
                                <Button type="submit" color="primary">Add</Button>{' '}
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className="task-container" style={{ paddingTop: "30px" }}>

                    <div className="task">
                        <div><Input type="checkbox" />Feed the turtle</div>
                        <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                        <Button className="edit-btn" type="edit" color="primary"><FaPen /></Button>{' '}
                    </div>

                    <div className="task">
                        <div><Input type="checkbox" />Do laundry</div>
                        <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                        <Button className="edit-btn" type="edit" color="primary" onClick={toggle}><FaPen /></Button>{' '}
                    </div>
                </Container>
                <EditTaskModal
                    isOpen={showModal}
                    toggle={toggleModal}
                />
            </div>
        </div>

    )
}

export default Task;