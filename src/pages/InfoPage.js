import React from 'react';
import { Col, Row } from 'reactstrap';

const InfoPage = (props) => {

    // --- Styling for the rows & columns ---
    const box1 = {
        // backgroundColor: '#F86363',
        backgroundColor: "#249B93",
        padding: "10vw",
        width: "50%",
        height: "100vh",
        // color: "#FBFE99",
        color: "#A7DBC7",
    };

    const box2 = {
        // backgroundColor: '#3F52D8',
        backgroundColor: '#D1637F',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        // color: "#E1FCFD",
        color: "#DDE8CE",
    };

    const box3 = {
        // backgroundColor: '#41C7D2',
        backgroundColor: '#477991',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        // color: "#4A23D5",
        color: "#C4E7F9",
    };

    const box4 = {
        // backgroundColor: '#FF83D1',
        backgroundColor: '#9E8798',
        padding: "10vw",
        width: "50%",
        height: "100vh",
        // color: "#FBFE99",
        color: "#EEDED9",
    };

    // --- output of this, renders the 4 square blocks on Homepage ---
    // --- App.js imports NaviBar component (that contain signIn/signup forms) to display together with the output from below ---
    return (
        <div>
            <Row xs="1" sm="2" md="2" lg="2">
                <Col style={box1}>
                    <h1 style={{ fontSize: "3.5em", fontWeight: 900 }}>Develop Your<br></br> Self-Care Plan.</h1>
                    <p className="color-block-font" style={{ fontSize: "2em", fontWeight: 500, lineHeight: "normal" }}>Self-care isn't a<br></br> one-size-fits-all strategy.</p>

                </Col>
                <Col style={box2}>
                    <img src={'/assets/care.svg'} alt="care emoji" style={{ width: "40%", marginLeft: "30%" }} />
                    {/* <FaKissWinkHeart size="100" /> */}
                </Col>
            </Row>

            <Row xs="1" sm="2" md="2" lg="2">
                <Col style={box3}>
                    <h1 style={{ fontSize: "3.5em", fontWeight: 900 }}>This is your<br></br> personalised<br></br> Self-Care app</h1><br></br>
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
// <Row>
//     <Col xs={12} sm={3} md={2} lg={1} />
//     <Col xs={6} sm={6} md={8} lg={10} />
//     <Col xs={6} sm={3} md={2} lg={1} />
// </Row> 