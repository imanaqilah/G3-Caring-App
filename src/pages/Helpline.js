import React from 'react';
import { Col, Row } from 'reactstrap';


const Helpline = (props) => {

    const jumbobox = {
        // backgroundColor: '#253864',
        backgroundColor: '#4E7D96',
    }

    const box1 = {
        // backgroundColor: '#7FBA7A', 
        backgroundColor: "#FFDBCC",
    };

    const box2 = {
        // backgroundColor: '#4E7D96',
        backgroundColor: "#C4EEFF",
    };

    const box3 = {
        backgroundColor: "#FFD6F1",
    };

    const box4 = {
        backgroundColor: "#BAF1E3",
    };


    return (
        <div>
            <Row>
                <Col style={jumbobox}>
                    <div className="jumbobox">
                        <h3>Urgent Help</h3><br></br>
                        While it is our mission to help people learn to deal with mental health issues and to spread mental health awareness, as we are currently only providing limited services, unfortunately we are unable to provide urgent or professional help if you are dealing with a crisis. <br></br><br></br>
                        If you require urgent assistance, please don't wait. Seek help immediately from the following organisations.
                    </div>
                </Col>
            </Row>

            <Row xs="1" sm="2" md="2" lg="2">
                <Col style={box1}>
                    <div className="box">
                        <h3>BEFRIENDERS</h3><br></br>
                        <b>Hotline numbers:</b><br></br>
                        KL: 03-7956 8145 (24 hours)<br></br>
                        Ipoh: 05-547 7933 (4pm to 11pm)<br></br>
                        Penang: 04-281 5161 (3pm to midnight)<br></br>
                        <b>E-Mail:</b> sam@befrienders.org.my<br></br>
                        <b>Website:</b> https://www.befrienders.org.my/<br></br><br></br>
                        Befrienders is a not-for-profit organisation providing emotional support 24 hours a day, 7 days a week, to people who are lonely, in distress, in despair, and having suicidal thoughts - without charge.
                    </div>
                </Col>

                <Col style={box2}>
                    <div className="box">
                        <h3>WOMEN'S AID ORGANIZATION (WAO)</h3>
                        <b>Contact Number:</b><br></br>
                        WAO Hotline: +603 7956 3488 <br></br>
                        WAO SMS/WhatsApp line, TINA : +6018 988 8058<br></br>
                        General Enquiries: 03 7957 5636 / 0636 <br></br>
                        <b>E-Mail:</b> info@wao.org.my<br></br>
                        <b>Website:</b> https://wao.org.my/<br></br><br></br>
                        WAO provides free and confidential services to survivors of domestic violence, rape, and other forms of violence.
                    </div>
                </Col>
            </Row>

            <Row xs="1" sm="2" md="2" lg="2">
                <Col style={box3}>
                    <div className="box">
                        <h3>LIFE LINE ASSOCIATION MALAYSIA</h3><br></br>
                        <b>Counselling Hotline:</b><br></br>
                        03-42657995<br></br>
                        <b>E-Mail:</b> counselling@lifeline.org.my<br></br>
                        <b>Website:</b> http://lifeline.org.my/cn/<br></br><br></br>
                        Lifeline accosiation Malaysia offers free consultation service face-to-face, over the phone and through email. Their motto is 'Help is as close as the telephone".
                    </div>
                </Col>

                <Col style={box4}>
                    <div className="box">
                        <h3>SOLS HEALTH</h3><br></br>
                        <b>Contact Number:</b><br></br>
                        6018-664-0247<br></br>
                        <b>E-Mail:</b> solshealth@sols247.org, navigaide@sols247.org<br></br>
                        <b>Website:</b> https://www.sols247.org/solshealth<br></br><br></br>
                        SOLS Health is a behavioural health centre that connects clients to accessible individual, family and community mental health and nutritional services with an emphasis on combating the stigma of mental health in Malaysia.
                        Clients with a monthly household income below a certain threshold will qualify for subsidized rates.
                    </div>
                </Col>


            </Row>

        </div>

    )
}

export default Helpline;
