import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col,
    Row,
    Container,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';
import EditTaskModal from "../components/EditTaskModal.js";
import classnames from 'classnames';
import { FaPen, FaRegTrashAlt } from "react-icons/fa";


const Task = () => {

    const [tasks, setTasks] = useState([]);

    //  open modal boolean
    const [isOpen, setIsOpen] = useState(false);

    //  
    const toggle = () => setIsOpen(!isOpen);

    const openEditForm = () => {
        setIsOpen(!isOpen);
    }

    const testActivity = "Do laundry";
    const testDate = "2021-02-05";

    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="content">
            <div className="home-background">
                <Container fluid={true} className="form-container" style={{ width: "500px" }}>
                    <Row className="no-gutter">
                        <Col>
                            <h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Task</h1>
                            <Form>
                                <FormGroup>
                                    <div className="task-input-form" style={{ marginBottom: "10px" }}>
                                        <Label for="task">Task:</Label>
                                        <Input placeholder="Add a task" />
                                    </div>

                                    <div className="date-input-form">
                                        <Label for="date">To be completed by:</Label>
                                        <Input type="date" />
                                    </div>

                                </FormGroup>
                                <Button type="submit" color="primary">Add</Button>{' '}
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className="task-container" style={{ paddingTop: "30px" }}>
                    <div>
                        <Nav tabs>
                            <NavItem style={{ cursor: "pointer" }}>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggleTab('1'); }}>
                                    Incomplete
                                </NavLink>
                            </NavItem>
                            <NavItem style={{ cursor: "pointer" }}>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggleTab('2'); }}
                                >
                                    Completed
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col>
                                        <div className="task">
                                            <div className="task-list"><Input type="checkbox" />Do laundry</div>
                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                                                <Button className="edit-btn" type="edit" color="primary" onClick={openEditForm}><FaPen /></Button>{' '}
                                            </div>
                                        </div>
                                        <div className="task">
                                            <div className="task-list"><Input type="checkbox" />Buy toiletries</div>
                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                                                <Button className="edit-btn" type="edit" color="primary" onClick={openEditForm}><FaPen /></Button>{' '}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                        <div className="task">
                                            <div className="task-list"><Input type="checkbox" checked={true} />Feed the turtle</div>
                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                                                <Button className="edit-btn" type="edit" color="primary" onClick={openEditForm}><FaPen /></Button>{' '}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Container>
                <EditTaskModal
                    isOpen={isOpen}
                    toggle={toggle}
                    taskInput={testActivity}
                    dateInput={testDate}
                />
            </div>
        </div>
    )
}

export default Task;