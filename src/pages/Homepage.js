import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FcCalendar, FcTodoList, FcSportsMode, FcCloseUpMode  } from "react-icons/fc";
import { Link } from "react-router-dom";

const Homepage = () => {

    // --- Styling for the rows & columns ---
    const box1 = {
        // backgroundColor: '#312C51',
        backgroundColor: '#9CB2CE',
        padding: "10vw",
        width: "10%",
        height: "50vh",
        color: "#29487D",
    };

    const box2 = {
        // backgroundColor: '#48426D',
        backgroundColor: '#D4D8E8',
        padding: "10vw",
        width: "10%",
        height: "50vh",
    };

    const box3 = {
        backgroundColor: '#41C7D2',
        padding: "10vw",
        width: "10%",
        height: "50vh",
        color: "#4A23D5",
    };

    const box4 = {
        backgroundColor: '#FF83D1',
        padding: "10vw",
        width: "10%",
        height: "50vh",
        color: "#FBFE99",
    };

    const btnSize = "100";

    // --- output of this, renders the 4 square blocks on Homepage ---
    // --- To "pin" the SideNav on every page within Homepage, see App.js ---
    return (
        <div className="content">
            <div className="home-background">
                <div className="btn-container">
                    <Container fluid={true}>
                        <Row className="no-gutter" xs="1" sm="2" md="4" lg="4">
                            <Col>
                                <button className="btn"><Link to={`/profile/calendar`}><FcCalendar size={btnSize} /></Link></button>
                            </Col>
                            <Col>
                                <button className="btn"><Link to={`/profile/tasks`}><FcTodoList size={btnSize} /></Link></button>
                            </Col>
                            <Col>
                                <button className="btn"><Link to={`/profile/habit`}><FcSportsMode size={btnSize}/></Link></button>
                            </Col>
                            <Col>
                                <button className="btn"><Link to={`/profile/meditation`}><FcCloseUpMode size={btnSize}/></Link></button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div >
    );
};

export default Homepage;