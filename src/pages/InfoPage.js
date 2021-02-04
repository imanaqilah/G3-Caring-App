import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import { FaKissWinkHeart } from "react-icons/fa";

const InfoPage = (props) => {

    // --- Styling for the rows & columns ---
    const box1 = {
        backgroundColor: '#F86363',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        color: "#FBFE99",
    };

    const box2 = {
        backgroundColor: '#3F52D8',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        color: "#E1FCFD",
    };

    const box3 = {
        backgroundColor: '#41C7D2',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        color: "#4A23D5",
    };

    const box4 = {
        backgroundColor: '#FF83D1',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        color: "#FBFE99",
    };

    // --- output of this, renders the 4 square blocks on Homepage ---
    // --- App.js imports NaviBar component (that contain signIn/signup forms) to display together with the output from below ---
    return (
        <div>
            <Row xs="1" sm="2" md="2" lg="2">
                <Col style={box1}>
                    <h1 style={{ fontSize: "3.5em", fontWeight: 900 }}>This is your<br></br> personalised<br></br> Self-Care app</h1><br></br>

                </Col>
                <Col style={box2}>
                    <FaKissWinkHeart size="100" />
                </Col>
            </Row>

            <Row xs="1" sm="2" md="2" lg="2">
                <Col style={box3}>
                    <p style={{ fontSize: "2.5em", fontWeight: 900 }}>Develop Your<br></br> Self-Care Plan.</p>
                    <p style={{ fontSize: "1em", fontWeight: 900 }}>Self-care isn't a<br></br> one-size-fits-all strategy.</p>

                    {/* <h1 style={{ fontSize: "3.5em", fontWeight: 900 }}>This is your<br></br> personalised<br></br> Self-Care app</h1> */}

                </Col>
                <Col style={box4}>
                    <h1 style={{ fontSize: "3.5em", fontWeight: 900 }}>This is your<br></br> personalised<br></br> Self-Care app</h1>
                </Col>
            </Row>
        </div>
    );
};

export default InfoPage;


// --- Responsive ref ---
{/* <Row>
    <Col xs={12} sm={3} md={2} lg={1} />
    <Col xs={6} sm={6} md={8} lg={10} />
    <Col xs={6} sm={3} md={2} lg={1} />
</Row>  */}