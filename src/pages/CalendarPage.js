import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';


const CalendarPage = ({ data }) => {

    const localizer = momentLocalizer(moment)

    const [event, setEventList] = useState([]);

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
                    // set a new empty array
                    let newEventList = [];

                    // event list construct
                    result.data.activity.forEach(x => {

                        // create new event data
                        let newEventData = {
                            title: x.tasks,
                            start: moment(x.completion_date).format('YYYY-MM-DD'),
                            end: moment(x.completion_date).format('YYYY-MM-DD'),
                            allDay: true
                        }

                        newEventList.push(newEventData);
                    });

                    setEventList(newEventList);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    const box1 = {
        backgroundColor: '#FFFFFF',
        padding: "10vw",
        width: "100vw",
        height: "100vh",
        // color: "#FFFFFF",
    };

    return (
        <div className="content">
            <Row>
                <Col style={box1}>
                    <h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Calendar</h1>

                    <Calendar
                        localizer={localizer}
                        events={event}
                        startAccessor="start"
                        endAccessor="end"
                    />

                </Col>
            </Row>
        </div>

    )
}

export default CalendarPage;