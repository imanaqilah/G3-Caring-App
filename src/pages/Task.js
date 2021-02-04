import React, { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { FcTodoList } from "react-icons/fc";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


const Task = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <div className="content">
            <div className="home-background">
                <Container fluid={true}>
                    <Row className="no-gutter">
                        <Col>
                            <FcTodoList size="100" /><h1 style={{ color: "#F0C38E", fontWeight: "bold" }}>Task</h1>
                            <Form>
                                <FormGroup>
                                    <Input placeholder="Add a task" />
                                </FormGroup>
                                <Button color="primary">Add</Button>{' '}
                            </Form>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>

    )
}

export default Task;