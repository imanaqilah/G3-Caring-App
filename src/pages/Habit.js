import React from 'react';
import { Col, Row } from 'reactstrap';
import { FcSportsMode } from "react-icons/fc";


const Habit = () => {

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
                    <FcSportsMode size="100" /><h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Habit</h1>
                </Col>
            </Row>
        </div>

    )
}

export default Habit;