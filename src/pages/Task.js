import React, { useState, useEffect } from 'react';
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
import moment from 'moment';
import axios from 'axios';


const Task = ({ data, setData }) => {

    const [tasks, setTasks] = useState([]);
    const [dateValue, setDateValue] = useState(new Date());
    const [activityValue, setActivityValue] = useState("");

    const [selectedTask, setSelectedTask] = useState("");

    //  open modal boolean
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const openEditForm = (e, selectedTask) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSelectedTask(selectedTask)
    }

    // Incomplete & Completed tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const toggleIsComplete = (e, selectedTask) => {
        e.preventDefault();

        let token = localStorage.getItem('jwt');

        let updateBool = "off";

        if (!selectedTask.is_completed) {
            updateBool = "on";
        }

        axios({
            method: 'POST',
            url: `https://caring-app-project2021.herokuapp.com/api/v1/schemes/${selectedTask.activity_id}/update`,
            headers: {
                "Authorization": "Bearer " + token
            },
            data: {
                activity: selectedTask.tasks,
                date: moment(selectedTask.completion_date).format('YYYY-MM-DD'),
                completed: updateBool
            }
        })
            .then(result => {
                // check if result.data is empty or not. If not empty, then return the message
                if (result.data !== undefined) {
                    refreshTasks();
                    toast.success(result.data.message, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onClickDeleteTask = (e, activity_id) => {
        e.preventDefault();

        let token = localStorage.getItem('jwt');

        axios({
            method: 'POST',
            url: `https://caring-app-project2021.herokuapp.com/api/v1/schemes/${activity_id}/delete`,
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(result => {
                if (result.data !== undefined) {
                    refreshTasks();
                    toast.success(result.data.message, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const taskInputOnChange = (e) => {
        e.preventDefault();
        setActivityValue(e.target.value);
    }

    const addTaskOnSubmit = (e) => {
        e.preventDefault();

        if (activityValue !== "") {
            // get token from local storage for the API 
            let token = localStorage.getItem('jwt');

            // POST API when form adds a new task (onSubmit form)
            axios({
                method: 'POST',
                url: 'https://caring-app-project2021.herokuapp.com/api/v1/schemes/',
                headers: {
                    "Authorization": "Bearer " + token
                },
                data: {
                    activity: activityValue,
                    date: moment(dateValue).format('YYYY-MM-DD')
                }
            })
                .then(result => {
                    // check if result.data is empty or not. If not empty, then return the message
                    if (result.data !== undefined) {
                        refreshTasks();
                        toast.success(result.data.message, {
                            position: "top-center",
                            autoClose: 4000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            // reset the value on submit
            setActivityValue("");
            setDateValue(new Date());
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


    useEffect(() => {
        // getting the username and jwt token from local storage - for API calls
        let username = localStorage.getItem('username');
        let token = localStorage.getItem('jwt');

        // calling axios returns user data - activity from this API
        axios.get(`https://caring-app-project2021.herokuapp.com/api/v1/users/${username}`,
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            .then(result => {
                // once API returns data, check if activity have data, then construct the event list for calendar
                if (result.data.activity !== undefined) {
                    // sets the result.data.activity from the API to our tasks array
                    setTasks(result.data.activity);
                }
            })
            .catch(error => {
                console.log(error)
            })
    });

    const refreshTasks = () => {
        let username = localStorage.getItem('username');
        let token = localStorage.getItem('jwt');
        axios.get(`https://caring-app-project2021.herokuapp.com/api/v1/users/${username}`,
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            .then(result => {
                // once API returns data, check if activity have data, then construct the event list for calendar
                if (result.data.activity !== undefined) {
                    // sets the result.data.activity from the API to our tasks array
                    setTasks(result.data.activity);
                }
                else {
                    setTasks([]);
                }
            })
            .catch(error => {
                console.log(error)
            })
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
                                        <Input type="text" placeholder="Add a task" value={activityValue} onChange={taskInputOnChange} />
                                    </div>

                                    <div className="date-input-form">
                                        <Label for="date">To be completed by:</Label>
                                        <p style={{ fontWeight: "bold", border: "solid 1px grey" }}>{dateValue.toLocaleDateString()}</p>
                                        <Calendar
                                            onChange={setDateValue}
                                            value={dateValue}
                                            // prevents from picking previous dates 
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
                                            tasks.map(x => {
                                                if (!x.is_completed) {
                                                    return (
                                                        <div key={x.activity_id} className="task">
                                                            <div className="task-list"><Input type="checkbox" defaultChecked={x.is_completed} onChange={(e) => { toggleIsComplete(e, x) }} />{x.tasks}</div>
                                                            <i>{moment(x.completion_date).format('MMMM Do YYYY')}</i>
                                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                                <Button className="delete-btn" type="delete" color="danger" onClick={(e) => { onClickDeleteTask(e, x.activity_id) }} ><FaRegTrashAlt /></Button>{' '}
                                                                <Button className="edit-btn" type="edit" color="primary" onClick={(e) => { openEditForm(e, x) }}><FaPen /></Button>{' '}
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
                                            tasks.map(x => {
                                                // Displays only Completed activities
                                                if (x.is_completed) {
                                                    return (
                                                        <div key={x.activity_id} className="task">
                                                            <div className="task-list"><Input type="checkbox" defaultChecked={x.is_completed} onChange={(e) => { toggleIsComplete(e, x) }} />{x.tasks}</div>
                                                            <i>{moment(x.completion_date).format('MMMM Do YYYY')}</i>
                                                            <div className="list-btn" style={{ paddingRight: "50px" }}>
                                                                <Button className="delete-btn" type="delete" color="danger" onClick={(e) => { onClickDeleteTask(e, x.activity_id) }}><FaRegTrashAlt /></Button>{' '}
                                                                <Button className="edit-btn" type="edit" color="primary" onClick={(e) => { openEditForm(e, x) }}><FaPen /></Button>{' '}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return (null)
                                                }
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
                    selectedTask={selectedTask}
                    refreshTasks={refreshTasks}
                />
            </div>
        </div>
    )
}

export default Task;