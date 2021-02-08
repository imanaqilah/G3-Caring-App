import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { FcCalendar } from "react-icons/fc";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


const CalendarPage = () => {

    const localizer = momentLocalizer(moment)

    const [event, setEventList] = useState([
        {
            title: "Do laundry",
            start: "2021-02-01",
            end: "2021-02-01",
            allDay: true
        },
    ]);

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