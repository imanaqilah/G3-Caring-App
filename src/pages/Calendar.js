import React from 'react';
import { Col, Row } from 'reactstrap';
import { FcCalendar } from "react-icons/fc";


const Calendar = () => {

    const box1 = {
        backgroundColor: '#312C51',
        padding: "10vw",
        width: "100vw",
        height: "100vh",
        color: "#FFFFFF",
    };

    return (
        <div className="content">
            <Row>
                <Col style={box1}>
                    <FcCalendar size="100" /><h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Calendar</h1>
                </Col>
            </Row>
        </div>

    )
}

export default Calendar;