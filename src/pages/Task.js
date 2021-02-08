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
import Calendar from 'react-calendar';
import { toast } from 'react-toastify';


const Task = ({ data, setData }) => {

    // const [tasks, setTasks] = useState([]);

    //  open modal boolean
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const openEditForm = () => {
        setIsOpen(!isOpen);
    }

    // Incomplete & Completed tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [dateValue, setDateValue] = useState(new Date());
    const [titleValue, setTitleValue] = useState("");
    // const [isCompleteValue, setIsCompleteValue] = useState(false);

    // const toggleIsComplete = (e) => {
    //     e.preventDefault();
    //     setIsCompleteValue(e.target.value);
    // }


    const taskInputOnChange = (e) => {
        e.preventDefault();
        setTitleValue(e.target.value);
    }

    const addTaskOnSubmit = (e) => {
        e.preventDefault();

        // this is to get the total count of the data list 
        let count = data.length;

        // next id = count++
        // create new data
        let newData = {
            id: count + 1,
            title: titleValue,
            start: dateValue,
            end: dateValue,
            isComplete: false,
            allDay: true
        }

        if (titleValue !== "") {
            // push new data to list
            setData([...data, newData]);

            // reset the value on submit
            setTitleValue("");
            setDateValue(new Date());

            toast.success(`New task added successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.error(`Cannot add an empty task`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return (
        <div className="content">
            <div className="home-background">
                <Container fluid={true} className="form-container" style={{ width: "500px" }}>
                    <Row className="no-gutter">
                        <Col>
                            <h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Task</h1>
                            <Form onSubmit={addTaskOnSubmit}>
                                <FormGroup>
                                    <div className="task-input-form" style={{ marginBottom: "10px" }}>
                                        <Label for="task">Task:</Label>
                                        <Input type="text" placeholder="Add a task" value={titleValue} onChange={taskInputOnChange} />
                                    </div>

                                    <div className="date-input-form">
                                        <Label for="date">To be completed by:</Label>
                                        <p style={{ fontWeight: "bold", border: "solid 1px grey" }}>{dateValue.toLocaleDateString()}</p>
                                        <Calendar
                                            onChange={setDateValue}
                                            value={dateValue}
                                            minDate={new Date()}
                                        />
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
                                        {
                                            data.map(x => {
                                                if (!x.isComplete) {
                                                    return (
                                                        <div key={x.id} className="task">
                                                            <div className="task-list"><Input type="checkbox" defaultChecked={x.isComplete} />{x.title}</div>
                                                            <i>{x.startDate}</i>
                                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                                <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                                                                <Button className="edit-btn" type="edit" color="primary" onClick={openEditForm}><FaPen /></Button>{' '}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                else { return (null) }
                                            })
                                        }
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                        {
                                            data.map(x => {
                                                if (x.isComplete) {
                                                    return (
                                                        <div key={x.id} className="task">
                                                            <div className="task-list"><Input type="checkbox" defaultChecked={x.isComplete} />{x.title}</div>
                                                            <i>{x.startDate}</i>
                                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                                <Button className="delete-btn" type="delete" color="danger"><FaRegTrashAlt /></Button>{' '}
                                                                <Button className="edit-btn" type="edit" color="primary" onClick={openEditForm}><FaPen /></Button>{' '}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                else { return (null) }
                                            })
                                        }
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Container>
                <EditTaskModal
                    isOpen={isOpen}
                    toggle={toggle}

                // taskInput={testActivity}
                // dateInput={testDate}
                />
            </div>
        </div>
    )
}

export default Task;