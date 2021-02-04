import React from 'react';
import { Col, Row } from 'reactstrap';
import { FcTodoList } from "react-icons/fc";


const Task = () => {

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
                    <FcTodoList size="100" /><h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Task</h1>
                </Col>
            </Row>
        </div>

    )
}

export default Task;