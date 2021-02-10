import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import { toast } from 'react-toastify';
import moment from 'moment';
import Calendar from 'react-calendar';

const EditTaskModal = ({ isOpen, toggle, selectedTask, refreshTasks }) => {


    const [dateValue, setDateValue] = useState(new Date());
    const [activityValue, setActivityValue] = useState("");

    useEffect(() => {
        console.log(selectedTask);
        setDateValue(new Date(selectedTask.completion_date))
        setActivityValue(selectedTask.tasks)
    },
        [selectedTask])

    const taskInputOnChange = (e) => {
        e.preventDefault();
        setActivityValue(e.target.value);
    }

    const onEditFormSubmit = (e) => {
        e.preventDefault();

        let token = localStorage.getItem('jwt');
        axios({
            method: 'POST',
            url: `https://caring-app-project2021.herokuapp.com/api/v1/schemes/${selectedTask.activity_id}/update`,
            headers: {
                "Authorization": "Bearer " + token
            },
            data: {
                activity: activityValue,
                date: moment(dateValue).format('YYYY-MM-DD'),
                completed: selectedTask.is_completed
            }
        })
            .then(result => {
                console.log(result)
                // check if result.data is empty or not. If not empty, then return the message
                if (result.data !== undefined) {
                    refreshTasks();
                    toggle();
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


    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Activity</ModalHeader>
                <Form onSubmit={onEditFormSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="text">Activity</Label>
                            <Input type="text" name="text" id="text" value={activityValue} onChange={taskInputOnChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">To be completed by:</Label>
                            <p style={{ fontWeight: "bold", border: "solid 1px gainsboro", background: "#FFFFFF", padding: "5px", color: "#5776E2", borderRadius: "3px" }}>{dateValue.toLocaleDateString()}</p>
                            <Calendar
                                onChange={setDateValue}
                                value={dateValue}
                                // prevents from picking previous dates 
                                minDate={new Date()}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit">Update</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>

    )
}

export default EditTaskModal;